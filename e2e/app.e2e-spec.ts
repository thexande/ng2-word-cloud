import { Ng2WordCloudPage } from './app.po';

describe('ng2-word-cloud App', function() {
  let page: Ng2WordCloudPage;

  beforeEach(() => {
    page = new Ng2WordCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
