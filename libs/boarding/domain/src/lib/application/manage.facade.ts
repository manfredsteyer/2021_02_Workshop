import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { loadBoardingList } from '../+state/boarding-list/boarding-list.actions';

import * as fromBoardingList from '../+state/boarding-list/boarding-list.reducer';
import * as BoardingListSelectors from '../+state/boarding-list/boarding-list.selectors';

@Injectable({ providedIn: 'root' })
export class ManageFacade {
  loaded$ = this.store.pipe(select(BoardingListSelectors.getBoardingListLoaded));
  boardingListList$ = this.store.pipe(select(BoardingListSelectors.getAllBoardingList));
  selectedBoardingList$ = this.store.pipe(select(BoardingListSelectors.getSelected));

  constructor(private store: Store<fromBoardingList.BoardingListPartialState>) { }

  // dispatch(action: Action) {
  //   this.store.dispatch(action);
  // }

  load(): void {
    this.store.dispatch(loadBoardingList());
  }
}
