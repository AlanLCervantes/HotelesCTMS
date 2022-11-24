import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FacturarComponent } from './facturar/facturar.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeComponent } from './home/home.component';
import { RememberComponent } from './remember/remember.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CreditoComponent } from './reservar/credito/credito.component';
import { DebitoComponent } from './reservar/debito/debito.component';
import { EfectivoComponent } from './reservar/efectivo/efectivo.component';
import { ReservarComponent } from './reservar/reservar.component';
import { TransferenciaComponent } from './reservar/transferencia/transferencia.component';
import { TcComponent } from './tc/tc.component';

const routes: Routes = [
  {path:'', component:HomeIndexComponent},
  {path:'tc', component:TcComponent},
  {path:'about', component:ConocenosComponent},
  {path:'createUsers', component:CreateUserComponent},
  {path:'remember', component:RememberComponent},
  {path:'home', component:HomeComponent},
  {path:'reservar', component:ReservarComponent},
  { path:'facturar', component:FacturarComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'efectivo', component:EfectivoComponent},
  {path:'transferencia', component:TransferenciaComponent},
  {path:'debito', component:DebitoComponent},
  {path:'credito', component:CreditoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
