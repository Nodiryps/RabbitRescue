import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RabbitsComponent } from './rabbits.component';
import {RabbitsRoutingModule} from './rabbits.routes';
import {CreateComponent} from '../create/create.component';
import {OverviewComponent} from '../overview/overview.component';



@NgModule({
  declarations: [
    RabbitsComponent, CreateComponent, OverviewComponent
  ],
  imports: [
    CommonModule, RabbitsRoutingModule, FormsModule
  ]
})
export class RabbitsModule { }
