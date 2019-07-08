import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('8-Player Tournament Bracket!');
  });
});

describe('Success scenarios', () => {
  beforeEach(() => {
    browser.get('/');
  });
  
  it('should successfully register two entered names', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Jack');
    element(by.id('contestant1')).sendKeys('Jill');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Jack,Jill');
  });
  
  it('should successfully register four entered names', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Bobby');
    element(by.id('contestant1')).sendKeys('Samuel');
    element(by.id('contestant2')).sendKeys('Linda');
    element(by.id('contestant3')).sendKeys('Cherry');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Bobby,Samuel,Linda,Cherry');
  });
  
  it('should successfully register eight entered names', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Aatrox');
    element(by.id('contestant1')).sendKeys('Ahri');
    element(by.id('contestant2')).sendKeys('Akali');
    element(by.id('contestant3')).sendKeys('Alistar');
    element(by.id('contestant4')).sendKeys('Amumu');
    element(by.id('contestant5')).sendKeys('Anivia');
    element(by.id('contestant6')).sendKeys('Annie');
    element(by.id('contestant7')).sendKeys('Ashe');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Aatrox,Ahri,Akali,Alistar,Amumu,Anivia,Annie,Ashe');
  });
  
  it('should successfully register two autofilled players', () => {
    element(by.id('registration')).click();
    element(by.id('fill2')).click();
    expect(element(by.id('contestant0')).getAttribute('value')).toBe('Zoe');
    expect(element(by.id('contestant1')).getAttribute('value')).toBe('Kaylee');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Zoe,Kaylee');
  });
  
  it('should successfully register four autofilled players', () => {
    element(by.id('registration')).click();
    element(by.id('fill4')).click();
    expect(element(by.id('contestant0')).getAttribute('value')).toBe('John');
    expect(element(by.id('contestant1')).getAttribute('value')).toBe('Paul');
    expect(element(by.id('contestant2')).getAttribute('value')).toBe('George');
    expect(element(by.id('contestant3')).getAttribute('value')).toBe('Ringo');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('John,Paul,George,Ringo');
  });
  
  it('should successfully register eight autofilled players', () => {
    element(by.id('registration')).click();
    element(by.id('fill8')).click();
    expect(element(by.id('contestant0')).getAttribute('value')).toBe('Leia');
    expect(element(by.id('contestant1')).getAttribute('value')).toBe('Luke');
    expect(element(by.id('contestant2')).getAttribute('value')).toBe('Lando');
    expect(element(by.id('contestant3')).getAttribute('value')).toBe('Han');
    expect(element(by.id('contestant4')).getAttribute('value')).toBe('Chewy');
    expect(element(by.id('contestant5')).getAttribute('value')).toBe('R2D2');
    expect(element(by.id('contestant6')).getAttribute('value')).toBe('C3P0');
    expect(element(by.id('contestant7')).getAttribute('value')).toBe('Vader');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
  });
  
  
});
