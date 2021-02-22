import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UPGRADEOFFER_FEATURE_KEY, State, UpgradeOfferPartialState, upgradeOfferAdapter } from './upgrade-offer.reducer';

// Lookup the 'UpgradeOffer' feature state managed by NgRx
export const getUpgradeOfferState = createFeatureSelector<UpgradeOfferPartialState, State>(UPGRADEOFFER_FEATURE_KEY);

const { selectAll, selectEntities } = upgradeOfferAdapter.getSelectors();

export const getUpgradeOfferLoaded = createSelector(
  getUpgradeOfferState,
  (state: State) => state.loaded
);

export const getUpgradeOfferError = createSelector(
  getUpgradeOfferState,
  (state: State) => state.error
);

export const getAllUpgradeOffer = createSelector(
  getUpgradeOfferState,
  (state: State) => selectAll(state)
);

export const getUpgradeOfferEntities = createSelector(
  getUpgradeOfferState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUpgradeOfferState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUpgradeOfferEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
