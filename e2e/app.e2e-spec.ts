import { TippspielPage } from './app.po';

describe('tippspiel App', () => {
  let page: TippspielPage;

  beforeEach(() => {
    page = new TippspielPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
