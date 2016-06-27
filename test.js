var supertest = require('supertest');
var app = require('./models');
var agent = supertest.agent(app);


describe('Server', function () {
   it('responds to root gets with greeting',function(done){
      agent.get('/').expect(200, done);
   })
})
