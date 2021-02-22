import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UpgradeOffer } from '../entities/upgrade-offer';
import { UpgradeOfferDataService } from '../infrastructure/upgrade-offer.data.service';


@Injectable({ providedIn: 'root' })
export class UpgradeFacade {

    private upgradeOfferListSubject = new BehaviorSubject<UpgradeOffer[]>([]); 
    upgradeOfferList$ = this.upgradeOfferListSubject.asObservable();

    constructor(private upgradeOfferDataService: UpgradeOfferDataService) {
    }

    load(): void {
        this.upgradeOfferDataService.load().subscribe(
            upgradeOfferList => {
                this.upgradeOfferListSubject.next(upgradeOfferList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
