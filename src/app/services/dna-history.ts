import { Injectable } from '@angular/core';
import { DnaHistory } from '../models/dna-history.model';

@Injectable({
  providedIn: 'root',
})
export class DnaHistoryService {
  private storageKey = 'dna-history';

  /**
   * Guarda un análisis de ADN en localStorage
   * @param dna Secuencia de ADN analizada
   * @param isMutant Resultado del análisis
   */
  saveAnalysis(dna: string[], isMutant: boolean): void {
    const history = this.getHistory();

    const exists = history.some((item) => JSON.stringify(item.dna) === JSON.stringify(dna));

    if (exists) {
      console.log('El ADN ya fue analizado anteriormente');
      return;
    }

    const newRecord: DnaHistory = {
      id: Date.now(),
      dna: dna,
      isMutant: isMutant,
      date: new Date().toISOString(),
    };

    history.push(newRecord);

    localStorage.setItem(this.storageKey, JSON.stringify(history));
  }

  /**
   * Obtiene todo el historial almacenado
   * @returns Lista de análisis realizados
   */
  getHistory(): DnaHistory[] {
    const data = localStorage.getItem(this.storageKey);

    return data ? JSON.parse(data) : [];
  }

  /**
   * Limpia todo el historial
   */
  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
  }
}
