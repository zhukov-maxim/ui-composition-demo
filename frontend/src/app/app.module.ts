import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LogsExplorerComponent } from './components/logs-explorer/logs-explorer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsExplorerComponent,
    SpinnerComponent,
    InfoBoxComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
