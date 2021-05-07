import { browser, element, by } from 'protractor';

export class LoveMiskPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lm-root h1')).getText();
  }
}
