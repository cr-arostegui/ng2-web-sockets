import { Ng2WebSocketsPage } from './app.po';

describe('ng2-web-sockets App', function() {
  let page: Ng2WebSocketsPage;

  beforeEach(() => {
    page = new Ng2WebSocketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
