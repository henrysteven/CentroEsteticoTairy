import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { SloganComponent } from './slogan/slogan.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { AdminViewModule} from './admin-view/admin-view.module';
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    EquipoComponent,
    ServiciosComponent,
    ContactoComponent,
    PromocionesComponent,
    SloganComponent,
    WhatsappComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminViewModule,
    IonicModule.forRoot(),
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
