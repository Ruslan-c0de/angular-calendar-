import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
//          MatSortModule, MatTableModule } from '@angular/material';

import {MatTableModule} from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
