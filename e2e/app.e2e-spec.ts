import { AngularMod7Page } from './app.po';

describe('angular-mod7 App', () => {
  let page: AngularMod7Page;

  beforeEach(() => {
    page = new AngularMod7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
