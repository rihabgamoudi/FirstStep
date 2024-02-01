import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AddClientComponent } from './add-client/add-client.component';



@NgModule({
  declarations: [
    ClientComponent,
    AddclientComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
