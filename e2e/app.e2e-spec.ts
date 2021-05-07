import { LoveMiskPage } from './app.po';

describe('LoveMisk App', function() {
  let page: LoveMiskPage;

  beforeEach(() => {
    page = new LoveMiskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
