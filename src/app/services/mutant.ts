import { Injectable } from '@angular/core';
import { DnaHistoryService } from './dna-history';

@Injectable({
  providedIn: 'root',
})
export class Mutant {
  //Set que guardará las posiciones donde se encontraron secuencias mutantes.
  mutantPositions: Set<string> = new Set();

  constructor(private historyService: DnaHistoryService) {}

  isMutant(dna: string[]): boolean {
    //Limpia las posiciones encontradas anteriormente.
    this.mutantPositions.clear();
    let sequences = 0;
    const n = dna.length;

    //Convierte la entrada ADN en una matriz
    const matrix = dna.map((row) => row.split(''));

    //recorre la matriz
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        //Obtiene la letra en la posicion ij una a una
        const letter = matrix[i][j];

        //Verifica que hay espacio suficiente para comparar 4 letras seguidas.
        //Buscar secuencia Horizontal → y guarda las letras
        if (j + 3 < n) {
          if (
            letter === matrix[i][j + 1] &&
            letter === matrix[i][j + 2] &&
            letter === matrix[i][j + 3]
          ) {
            this.mutantPositions.add(`${i}-${j}`);
            this.mutantPositions.add(`${i}-${j + 1}`);
            this.mutantPositions.add(`${i}-${j + 2}`);
            this.mutantPositions.add(`${i}-${j + 3}`);

            console.log('Horizontal encontrada en:', i, j, 'letra:', letter);

            sequences++;
          }
        }

        //Verifica que hay espacio hacia abajo y Buscar secuencia Vertical ↓
        if (i + 3 < n) {
          if (
            letter === matrix[i + 1][j] &&
            letter === matrix[i + 2][j] &&
            letter === matrix[i + 3][j]
          ) {
            this.mutantPositions.add(`${i}-${j}`);
            this.mutantPositions.add(`${i + 1}-${j}`);
            this.mutantPositions.add(`${i + 2}-${j}`);
            this.mutantPositions.add(`${i + 3}-${j}`);

            console.log('Vertical encontrada en:', i, j);

            sequences++;
          }
        }

        //Verifica que hay espacio en Diagonal ↘
        if (i + 3 < n && j + 3 < n) {
          if (
            letter === matrix[i + 1][j + 1] &&
            letter === matrix[i + 2][j + 2] &&
            letter === matrix[i + 3][j + 3]
          ) {
            this.mutantPositions.add(`${i}-${j}`);
            this.mutantPositions.add(`${i + 1}-${j + 1}`);
            this.mutantPositions.add(`${i + 2}-${j + 2}`);
            this.mutantPositions.add(`${i + 3}-${j + 3}`);

            console.log('Diagonal ↘ encontrada en:', i, j);

            sequences++;
          }
        }

        //Verifica que hay espacio hacia abajo e izquierda. Diagonal ↙
        if (i + 3 < n && j - 3 >= 0) {
          if (
            letter === matrix[i + 1][j - 1] &&
            letter === matrix[i + 2][j - 2] &&
            letter === matrix[i + 3][j - 3]
          ) {
            this.mutantPositions.add(`${i}-${j}`);
            this.mutantPositions.add(`${i + 1}-${j - 1}`);
            this.mutantPositions.add(`${i + 2}-${j - 2}`);
            this.mutantPositions.add(`${i + 3}-${j - 3}`);

            console.log('Diagonal ↙ encontrada en:', i, j);

            sequences++;
          }
        }

        //Verificar si ya es mutante
        if (sequences >= 2) {
          console.log('sequences:', sequences);

          //Almacena en el historial
          this.historyService.saveAnalysis(dna, true);
          //Es mutante
          return true;
        }
      }
    }
    //Almacena en el historial
    this.historyService.saveAnalysis(dna, false);
    //Es humano
    return false;
  }
}
