import { Component } from '@angular/core';
import {AppLocalSettingService} from '../../projects/app-local-setting/src/lib/app-local-setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng2-local-settings';
  constructor(public localService:AppLocalSettingService)
  {

   console.log("Local Data",localService.getBrowserLocales()); 
  }
}
