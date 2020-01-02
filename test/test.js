const contact = require('../contact');
describe('測試是否能test', function(){ 
  it('print hello', function(done){
    console.log("hello");
    setImmediate(done);
  });
});