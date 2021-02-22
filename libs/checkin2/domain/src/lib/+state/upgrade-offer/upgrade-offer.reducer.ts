import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UpgradeOfferActions from './upgrade-offer.actions';
import { UpgradeOffer } from '../../entities/upgrade-offer';

export const UPGRADEOFFER_FEATURE_KEY = 'upgradeOffer';

export interface State extends EntityState<UpgradeOffer> {
  selectedId ?: string | number;          // which UpgradeOffer record has been selected
  loaded      : boolean;                  // has the UpgradeOffer list been loaded
  error      ?: string | null;            // last known error (if any)
}

export interface UpgradeOfferPartialState {
  readonly [UPGRADEOFFER_FEATURE_KEY]: State;
}

export const upgradeOfferAdapter: EntityAdapter<UpgradeOffer> = createEntityAdapter<UpgradeOffer>();

export const initialState: State = upgradeOfferAdapter.getInitialState({
  // set initial required properties
  loaded : false
});

const upgradeOfferReducer = createReducer(
  initialState,
  on(UpgradeOfferActions.loadUpgradeOffer,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(UpgradeOfferActions.loadUpgradeOfferSuccess,
    (state, { upgradeOffer }) => upgradeOfferAdapter.upsertMany(upgradeOffer, { ...state, loaded: true })
  ),
  on(UpgradeOfferActions.loadUpgradeOfferFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return upgradeOfferReducer(state, action);
}
