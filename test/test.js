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

describe('LeapYear Test 3', function() {
  it('Will tell us correctly that any year divisible by 100 and not 400 are not Leap Years', function(){
    expect(code.leapYear(500)).to.equal(false);
    expect(code.leapYear(200)).to.equal(false);
    expect(code.leapYear(2100)).to.equal(false);
    expect(code.leapYear(2500)).to.equal(false);
  });
});

describe('LeapYear Test 4', function() {
  it('Will tell us correctly that 1600 and 2000 are Leap Years, but 1700, 1800, and 1900 are not', function(){
    expect(code.leapYear(1600)).to.equal(true);
    expect(code.leapYear(2000)).to.equal(true);
    expect(code.leapYear(1700)).to.equal(false);
    expect(code.leapYear(1800)).to.equal(false);
    expect(code.leapYear(1900)).to.equal(false);
  });
});
