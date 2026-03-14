import { Routes } from '@angular/router';
import { DnaHistoryComponent } from './components/dna-history/dna-history';
import { DnaDetector } from './components/dna-detector/dna-detector';

export const routes: Routes = [
  { path: '', component: DnaDetector },
  { path: 'history', component: DnaHistoryComponent },
  { path: '**', redirectTo: '' },
];
