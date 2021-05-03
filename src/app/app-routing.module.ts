import { AngularComponent } from './components/angular/angular.component';
import { ReactWrapperComponent } from './react/react-wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'react',
    component: ReactWrapperComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
