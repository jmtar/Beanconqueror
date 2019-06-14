/** Core */
import {Component} from '@angular/core';
/** Services */
import {UIHelper} from '../../../services/uiHelper';

@Component({
templateUrl: 'contact.html'
})
export class ContactPage {

  constructor (private readonly uiHelper: UIHelper) {
  }

  public openLink(event, _link: string): void {
    event.cancelBubble = true;
    event.preventDefault();
    this.uiHelper.openExternalWebpage(_link);

  }
}
