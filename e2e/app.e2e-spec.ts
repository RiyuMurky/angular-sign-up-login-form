import { AngularSignUpLoginFormPage } from './app.po';

describe('angular-sign-up-login-form App', function() {
  let page: AngularSignUpLoginFormPage;

  beforeEach(() => {
    page = new AngularSignUpLoginFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
