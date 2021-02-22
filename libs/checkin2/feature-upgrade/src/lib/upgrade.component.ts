import { Component, OnInit} from '@angular/core';
import { UpgradeFacade, loadUpgradeOffer } from '@flight-workspace/checkin2/domain';

@Component({
  selector: 'checkin2-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
    
    
    upgradeOfferList$ = this.upgradeFacade.upgradeOfferList$;


    constructor(private upgradeFacade: UpgradeFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.upgradeFacade.dispatch(loadUpgradeOffer());
    }

}

