const contact = require('../contact');
describe('測試是否能test', function(){ 
  it('print hello', function(done){
    console.log("hello");
    setImmediate(done);
  });
});
describe('測試 task 時間', function(){ 
    it('task 時間', function(done){
      contact.task();
      setImmediate(done);
    });
  });