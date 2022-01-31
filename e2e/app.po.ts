import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageTitle() {
    return element(by.tagName('page-login')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }

  openLoginPage()
  {
    return element(by.tagName('page-login'));
  }

  getPTitle() {
    return element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }


}
