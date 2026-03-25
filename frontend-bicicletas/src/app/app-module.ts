import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Clientes } from './pages/clientes/clientes';
import { Bicicletas } from './pages/bicicletas/bicicletas';
import { Innventario } from './pages/innventario/innventario';
import { Ventas } from './pages/ventas/ventas';

@NgModule({
  declarations: [
    App,
    Clientes,
    Bicicletas,
    Innventario,
    Ventas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
