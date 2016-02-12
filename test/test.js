var code = require('../main');
  var expect = require('chai').expect;

  describe('LeapYear', function() {
    it('Will tell us correctly if 2016 is or is not a Leap Year', function(){
      expect(code.helloWorld()).to.equal("Hello World!");
    });
  });

  describe('LeapYear', function() {
    it('Will tell us correctly if 2016 is or is not a Leap Year', function(){
      expect(code.leapYear(2016)).to.equal(false);
    });
  });
