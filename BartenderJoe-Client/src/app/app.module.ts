import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule  } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { ProductOutputComponent } from './product-output/product-output.component';
import { ProductMixerComponent } from './product-mixer/product-mixer.component';
import { ProductMixActionComponent } from './product-mix-action/product-mix-action.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FascetTracerDirective } from '../app/_directives/fascet-tracer.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductInputComponent,
    ProductOutputComponent,
    ProductMixerComponent,
    ProductMixActionComponent,
    FascetTracerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
