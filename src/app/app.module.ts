import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule, MatIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NuestrosMedicosComponent } from './nuestros-medicos/nuestros-medicos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'nuestros-medicos', component: NuestrosMedicosComponent },
  {path:'', component: ContentPageComponent},
  {path:'ubicacion', component: UbicacionComponent},
  {path:'pacientes', component: PacientesComponent},
  {path:'blog', component: BlogComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentPageComponent,
    NuestrosMedicosComponent,
    UbicacionComponent,
    PacientesComponent,
    BlogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgbCollapseModule,
    HttpClientModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
