import { Component } from '@angular/core';
import { Mutant } from '../../services/mutant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dna-detector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dna-detector.html',
  styleUrl: './dna-detector.css',
})
export class DnaDetector {
  dnaInput: string = '';
  result: string = '';
  dnaMatrix: string[][] = [];
  mutantCells: Set<string> = new Set();

  constructor(private mutantService: Mutant) {}

  validateDNA() {
    this.dnaMatrix = [];
    this.mutantCells.clear();
    this.result = '';

    let dnaArray: string[] = [];

    try {
      const input = this.dnaInput.trim();

      if (input === '' || input == null) {
        this.result = '❌ Formato de ADN inválido';
        return;
      }

      // 🔹 Detectar formato tipo documento {"ATGCGA","CAGTGC"...}
      if (input.startsWith('{') || input.startsWith('[')) {
        const cleaned = input.replace('{', '[').replace('}', ']').toUpperCase();

        dnaArray = JSON.parse(cleaned);
      } else {
        // 🔹 formato por líneas
        dnaArray = input
          .toUpperCase()
          .split(/\r?\n/)
          .map((row) => row.trim())
          .filter((row) => row.length > 0);
      }
    } catch (error) {
      this.result = '❌ Formato de ADN inválido';
      return;
    }

    console.log('DNA:', dnaArray);

    // 🔹 Validar caracteres permitidos
    const valid = dnaArray.every((row) => /^[ATCG]+$/.test(row));

    if (!valid) {
      this.result = '❌ Solo se permiten letras A T C G';
      return;
    }

    // 🔹 Validar matriz NxN
    if (!dnaArray.every((row) => row.length === dnaArray.length)) {
      this.result = '❌ El ADN debe ser NxN';
      return;
    }

    // 🔹 reconstruir matriz para mostrar en UI
    this.dnaMatrix = dnaArray.map((row) => row.split(''));

    console.log('Matriz:', this.dnaMatrix);

    // 🔹 ejecutar algoritmo
    const isMutant = this.mutantService.isMutant(dnaArray);

    // 🔹 obtener celdas mutantes
    this.mutantCells = this.mutantService.mutantPositions;

    console.log('Resultado algoritmo:', isMutant);

    this.result = isMutant ? '🧬 Es Mutante' : '👨 Es Humano';

    console.log('Resultado final:', this.result);
  }
}
