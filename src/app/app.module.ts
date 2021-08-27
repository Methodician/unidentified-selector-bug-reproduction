import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAThingComponent } from './components/test-a-thing/test-a-thing.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [AppComponent, TestAThingComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
