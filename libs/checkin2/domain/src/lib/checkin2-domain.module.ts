import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeOfferEffects } from './+state/upgrade-offer/upgrade-offer.effects';
import * as fromUpgradeOffer from './+state/upgrade-offer/upgrade-offer.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromUpgradeOffer.UPGRADEOFFER_FEATURE_KEY, fromUpgradeOffer.reducer), EffectsModule.forFeature([UpgradeOfferEffects])],
})
export class Checkin2DomainModule {}
