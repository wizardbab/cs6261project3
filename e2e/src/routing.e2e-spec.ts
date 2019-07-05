import { browser, element, by } from 'protractor';

describe('Routing Tests', () => {
  it('should navigate to welcome page', () => {
    browser.get('/');
    expect(element(by.tagName('h2')).getText()).toBe('Brackets App');
  });
  
  it('should navigate to registration page', () => {
    browser.get('/');
    element(by.id('registration')).click();
    expect(element(by.id('register')).getText()).toBe('Register Players');
  });
  
  it('should navigate to brackets page', () => {
    browser.get('/');
    element(by.id('brackets')).click();
    expect(element(by.id('subpageTitle')).getText()).toBe('Brackets');
  });
});
