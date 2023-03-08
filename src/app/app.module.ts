import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerBrowseComponent } from './components/customer-browse/customer-browse.component';
import { MatTableModule } from '@angular/material/table';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, GridComponent, CustomerBrowseComponent, ToolbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatTableModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
