import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkin2DomainModule } from '@flight-workspace/checkin2/domain';
import { UpgradeComponent } from './upgrade.component';

@NgModule({
  imports: [CommonModule, Checkin2DomainModule],
  declarations: [UpgradeComponent],
  exports: [UpgradeComponent],
})
export class Checkin2FeatureUpgradeModule {}
