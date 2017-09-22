import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,MatInputModule,MatTableModule,MatProgressSpinnerModule } from '@angular/material';


import { AppComponent } from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoService} from './services/todo.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
      MatTableModule,
    MatInputModule,
      MatProgressSpinnerModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
