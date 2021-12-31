import { PayskyPage } from './app.po';

describe('paysky App', () => {
  let page: PayskyPage;

  beforeEach(() => {
    page = new PayskyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
