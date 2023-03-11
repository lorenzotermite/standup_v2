import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('it');

    const browserLang = translate.getBrowserLang();
    translate.use('it');
  }
}
