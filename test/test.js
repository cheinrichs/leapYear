var code = require('../main');
var expect = require('chai').expect;

describe('LeapYear Test 1', function() {
  it('Will tell us correctly that 2016 is a Leap Year', function(){
    expect(code.leapYear(2016)).to.equal(true);
  });
});

describe('LeapYear Test 2', function() {
  it('Will tell us correctly that any year divisible by 4 is a Leap Year', function(){
    expect(code.leapYear(2012)).to.equal(true);
    expect(code.leapYear(1820)).to.equal(true);
    expect(code.leapYear(400)).to.equal(true);
    expect(code.leapYear(2032)).to.equal(true);
  });
});
