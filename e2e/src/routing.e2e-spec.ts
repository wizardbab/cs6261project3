import { browser, element, by } from 'protractor';




describe('Routing Tests', () => {
  it('should navigate to welcome page', () => {
    browser.get('/');
    expect(element(by.tagName('h2')).getText()).toBe('Brackets App');
  });
  
  it('should navigate to registration page', () => {
    browser.get('/');
    expect(element(by.id('registration')).getText()).toBe('Registration');
  });
  
  it('should navigate to brackets page', () => {
    browser.get('/');
    expect(element(by.id('brackets')).getText()).toBe('Brackets');
  });
});
