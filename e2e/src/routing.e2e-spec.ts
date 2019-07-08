import { browser, element, by } from 'protractor';

describe('Routing Tests', () => {
  beforeEach(() => {
    browser.get('/');
  });
  
  it('should navigate to welcome page', () => {
    expect(element(by.tagName('h2')).getText()).toBe('Brackets App');
  });
  
  it('should navigate to registration page', () => {
    element(by.id('registration')).click();
    expect(element(by.id('register')).getText()).toBe('Register Players');
  });
  
  it('should navigate to brackets page', () => {
    element(by.id('brackets')).click();
    expect(element(by.id('subpageTitle')).getText()).toBe('Brackets');
  });
  
  it('should navigate to home from registration', () => {
    browser.get('/registration');
    element(by.id('hello')).click();
    expect(element(by.id('subpageTitle')).getText()).toBe('Brackets App');
  });
  
  it('should navigate to home from brackets', () => {
    browser.get('/brackets');
    element(by.id('hello')).click();
    expect(element(by.id('subpageTitle')).getText()).toBe('Brackets App');
  });
});
