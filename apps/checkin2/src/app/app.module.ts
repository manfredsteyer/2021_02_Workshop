import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Checkin2FeatureUpgradeModule } from '@flight-workspace/checkin2/feature-upgrade';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), !environment.production ? StoreDevtoolsModule.instrument() : [], EffectsModule.forRoot(), Checkin2FeatureUpgradeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
