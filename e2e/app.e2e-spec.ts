import { PhilTestAngcliPage } from './app.po';

describe('phil-test-angcli App', () => {
  let page: PhilTestAngcliPage;

  beforeEach(() => {
    page = new PhilTestAngcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
