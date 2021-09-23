import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent, routingComponents,
    SearchComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, MatCardModule, MatGridListModule, ReactiveFormsModule, MatFormFieldModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule, MatButtonModule, FlexLayoutModule
  ],
  exports:[
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
