import { Routes } from '@angular/router';
import { DnaHistoryComponent } from './components/dna-history/dna-history';
import { DnaDetector } from './components/dna-detector/dna-detector';
import { Stats } from './pages/stats/stats';

export const routes: Routes = [
  { path: '', component: DnaDetector },
  { path: 'history', component: DnaHistoryComponent },
  {
    path: 'stats',
    component: Stats,
  },
  { path: '**', redirectTo: '' },
];
