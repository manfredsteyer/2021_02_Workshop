import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UpgradeOfferActions from './upgrade-offer.actions';
import { UpgradeOfferDataService } from '../../infrastructure/upgrade-offer.data.service';

@Injectable()
export class UpgradeOfferEffects {
  loadUpgradeOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpgradeOfferActions.loadUpgradeOffer),
      switchMap((action) =>
        this.upgradeOfferDataService.load().pipe(
          map((upgradeOffer) =>
            UpgradeOfferActions.loadUpgradeOfferSuccess({ upgradeOffer })
          ),
          catchError((error) =>
            of(UpgradeOfferActions.loadUpgradeOfferFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private upgradeOfferDataService: UpgradeOfferDataService
  ) { }
}
