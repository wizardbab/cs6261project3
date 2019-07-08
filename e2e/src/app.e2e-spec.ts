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
  
  it('should successfully match two players up in a bracket', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Shen');
    element(by.id('contestant1')).sendKeys('Zed');
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    expect(element(by.id('match1')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Shen');
    expect(element(by.id('match1')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Zed');
  });
  
  it('should successfully match four players up in a bracket', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Benjamin');
    element(by.id('contestant1')).sendKeys('Ratul');
    element(by.id('contestant2')).sendKeys('Scott');
    element(by.id('contestant3')).sendKeys('Daniel');
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    expect(element(by.id('match1')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Benjamin');
    expect(element(by.id('match1')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Ratul');
    expect(element(by.id('match2')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Scott');
    expect(element(by.id('match2')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Daniel');
  });
  
  it('should successfully match eight players up in a bracket', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Naruto');
    element(by.id('contestant1')).sendKeys('Sasuke');
    element(by.id('contestant2')).sendKeys('Sakura');
    element(by.id('contestant3')).sendKeys('Kakashi');
    element(by.id('contestant4')).sendKeys('Sai');
    element(by.id('contestant5')).sendKeys('Yamato');
    element(by.id('contestant6')).sendKeys('Hinata');
    element(by.id('contestant7')).sendKeys('Neji');
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    expect(element(by.id('match1')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Naruto');
    expect(element(by.id('match1')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Sasuke');
    expect(element(by.id('match2')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Sakura');
    expect(element(by.id('match2')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Kakashi');
    expect(element(by.id('match3')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Sai');
    expect(element(by.id('match3')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Yamato');
    expect(element(by.id('match4')).all(by.tagName('input')).get(0).getAttribute('value')).toBe('Hinata');
    expect(element(by.id('match4')).all(by.tagName('input')).get(1).getAttribute('value')).toBe('Neji');
  });
  
  it('should successfully declare a champion in a two-player tournament', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Shen');
    element(by.id('contestant1')).sendKeys('Zed');
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('champion')).getText()).toBe('Winner: Shen');
  });
  
  it('should successfully declare a champion in a four-player tournament', () => {
    element(by.id('registration')).click();
    element(by.id('fill4')).click();
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('match2')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    element(by.id('match1')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('champion')).getText()).toBe('Winner: Ringo');
  });
  
  it('should successfully declare a champion in an eight-player tournament', () => {
    element(by.id('registration')).click();
    element(by.id('contestant0')).sendKeys('Irelia');
    element(by.id('contestant1')).sendKeys('Trundle');
    element(by.id('contestant2')).sendKeys('Kennen');
    element(by.id('contestant3')).sendKeys('Vladimir');
    element(by.id('contestant4')).sendKeys('Sion');
    element(by.id('contestant5')).sendKeys('Maokai');
    element(by.id('contestant6')).sendKeys('Chogath');
    element(by.id('contestant7')).sendKeys('Nasus');
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('match2')).all(by.tagName('input')).get(1).click();
    element(by.id('match3')).all(by.tagName('input')).get(1).click();
    element(by.id('match4')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('match2')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    element(by.id('match1')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('champion')).getText()).toBe('Winner: Nasus');
  });
});

describe('Failure scenarios', () => {
  beforeEach(() => {
    browser.get('/');
    element(by.id('registration')).click();
  });
  
  it('should give an error for no contestants', () => {
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });
  
  it('should give an error for one contestant', () => {
    element(by.id('contestant0')).sendKeys('Dave');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });
  
  it('should give an error for three contestants', () => {
    element(by.id('contestant0')).sendKeys('Joe');
    element(by.id('contestant2')).sendKeys('DeAndre');
    element(by.id('contestant6')).sendKeys('LeFlop');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });
  
  it('should give an error for five contestants', () => {
    element(by.id('contestant0')).sendKeys('Thing 1');
    element(by.id('contestant1')).sendKeys('Thing 2');
    element(by.id('contestant2')).sendKeys('Cat in the Hat');
    element(by.id('contestant3')).sendKeys('Sally');
    element(by.id('contestant4')).sendKeys('Dr. Seuss');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });
  
  it('should give an error for seven contestants', () => {
    element(by.id('contestant0')).sendKeys('Sheldon');
    element(by.id('contestant1')).sendKeys('Leonard');
    element(by.id('contestant2')).sendKeys('Howard');
    element(by.id('contestant3')).sendKeys('Raj');
    element(by.id('contestant4')).sendKeys('Penny');
    element(by.id('contestant5')).sendKeys('Amy');
    element(by.id('contestant6')).sendKeys('Bernadette');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });
  
  it('should give an error for two contestants if radio button isn\'t selected', () => {
    element(by.id('contestant0')).sendKeys('Guy 1');
    element(by.id('contestant1')).sendKeys('Guy 2');
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });
  
  it('should give an error for four contestants if a radio button isn\'t selected', () => {
    element(by.id('fill4')).click();
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
    element(by.id('match1')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
    element(by.id('match2')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRound')).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });
  
  it('should give an error for eight contestants if a radio button isn\'t selected', () => {
    element(by.id('fill8')).click();
    element(by.id('submit')).click();
    element(by.id('brackets')).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
    element(by.id('match1')).all(by.tagName('input')).get(1).click();
    element(by.id('match2')).all(by.tagName('input')).get(1).click();
    element(by.id('match3')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
    element(by.id('match4')).all(by.tagName('input')).get(1).click();
    element(by.id('completeRound')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
    element(by.id('match2')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRound')).click();
    element(by.id('completeRound')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });
});

