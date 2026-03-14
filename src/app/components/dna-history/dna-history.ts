import { Component } from '@angular/core';
import { DnaHistoryService } from '../../services/dna-history';
import { DnaHistory } from '../../models/dna-history.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dna-history',
  imports: [RouterLink],
  templateUrl: './dna-history.html',
  styleUrl: './dna-history.css',
})
export class DnaHistoryComponent {
  history: DnaHistory[] = [];

  constructor(private historyService: DnaHistoryService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.history = this.historyService.getHistory();
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.loadHistory();
  }
}
