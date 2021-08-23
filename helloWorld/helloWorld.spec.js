const helloWorld = require('./helloWorld');
return 'Hello,World!';

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
