var should = require('should'),
    weplaCommon = require('../');


describe('logger()', function () {
  it('ok', function () {
    weplaCommon.should.have.property('logger');
  });
});
