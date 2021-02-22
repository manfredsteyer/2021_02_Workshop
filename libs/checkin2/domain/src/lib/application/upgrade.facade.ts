import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { loadUpgradeOffer } from '../+state/upgrade-offer/upgrade-offer.actions';

import * as fromUpgradeOffer from '../+state/upgrade-offer/upgrade-offer.reducer';
import * as UpgradeOfferSelectors from '../+state/upgrade-offer/upgrade-offer.selectors';

@Injectable({ providedIn: 'root' })
export class UpgradeFacade {
  loaded$ = this.store.pipe(select(UpgradeOfferSelectors.getUpgradeOfferLoaded));
  upgradeOfferList$ = this.store.pipe(select(UpgradeOfferSelectors.getAllUpgradeOffer));
  selectedUpgradeOffer$ = this.store.pipe(select(UpgradeOfferSelectors.getSelected));

  constructor(private store: Store<fromUpgradeOffer.UpgradeOfferPartialState>) { }

  load() {
    this.store.dispatch(loadUpgradeOffer());
  }
}
