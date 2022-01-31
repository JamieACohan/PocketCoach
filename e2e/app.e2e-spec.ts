import { Page } from './app.po';
import { browser, element, by, ElementFinder, ElementHelper  } from 'protractor';
import { createPublicKey } from 'crypto';
import { TestBed } from '@angular/core/testing';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Login', () => {
      page.getPageTitle().then(title => {
        expect(title).toEqual('Login');
      });
    });


    // Check login works successfully
    it('test should change login successfully', () => {
      var email = 'joe@test.ie';
      var password = 'Tallaght1';

      // page.navigateTo('/');

      page.navigateTo('/').then(() => {

        element(by.css('.user.email')).sendKeys(email);
        element(by.css('input')).element(by.css('.user.password')).sendKeys(password);
        element(by.buttonText('Login')).click();

      })

      // page.getPageTitle().then(title => {
      //   expect(title).toEqual('Login');
      // });
    })


  })
});
