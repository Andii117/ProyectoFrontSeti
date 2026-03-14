import { Injectable } from '@angular/core';
import { DnaHistoryService } from './dna-history';

@Injectable({
  providedIn: 'root',
})
export class Mutant {
  mutantPositions: Set<string> = new Set();

  constructor(private historyService: DnaHistoryService) {}

  isMutant(dna: string[]): boolean {
    this.mutantPositions.clear();

    let sequences = 0;
    const n = dna.length;

    const matrix = dna.map((row) => row.split(''));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const letter = matrix[i][j];

        // Horizontal →
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

        // Vertical ↓
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

        // Diagonal ↘
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

        // Diagonal ↙
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

        if (sequences >= 2) {
          console.log('sequences:', sequences);

          this.historyService.saveAnalysis(dna, true);

          return true;
        }
      }
    }

    this.historyService.saveAnalysis(dna, false);

    return false;
  }
}
