import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RabbitsComponent} from './rabbits.component';
import {OverviewComponent} from '../overview/overview.component';
import {CreateComponent} from '../create/create.component';

const rabbitsRoutes: Routes = [
  { path: 'rabbits', component: RabbitsComponent, children: [
    { path: '', component: OverviewComponent },
    { path: 'create', component: CreateComponent },
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(rabbitsRoutes) ],
  exports: [ RouterModule ]
})

export class RabbitsRoutingModule {}
