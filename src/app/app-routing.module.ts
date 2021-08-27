import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestAThingComponent } from './components/test-a-thing/test-a-thing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testComponent', component: TestAThingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
