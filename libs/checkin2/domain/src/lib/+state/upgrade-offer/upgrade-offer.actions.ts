import { createAction, props } from '@ngrx/store';
import { UpgradeOffer } from '../../entities/upgrade-offer';

export const loadUpgradeOffer = createAction(
  '[UpgradeOffer] Load UpgradeOffer'
);

export const loadUpgradeOfferSuccess = createAction(
  '[UpgradeOffer] Load UpgradeOffer Success',
  props<{ upgradeOffer: UpgradeOffer[] }>()
);

export const loadUpgradeOfferFailure = createAction(
  '[UpgradeOffer] Load UpgradeOffer Failure',
  props<{ error: any }>()
);
