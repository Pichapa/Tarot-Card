import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './component/card-info/card-info.component';

import { CardListComponent } from './component/card-list/card-list.component';

const routes: Routes = [
  {
    path: 'cards',
    component: CardListComponent,
  },
  // {
  //   path: 'minor_cups',
  //   component: CardListComponent,
  // },
  {
    path: 'cards/:id',
    component: CardInfoComponent,
  },
  // {
  //   path: 'minor_cups/:id',
  //   component: CardInfoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
