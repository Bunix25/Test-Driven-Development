//import the index.js and its function
const getDiameter = require('./index.js').getDiameter;
const getArea = require('./index.js').getArea;
//require chai library and expect function
const expect = require('chai').expect;
//write your tests
 describe('Testing Diameter, Area of circle',function() {
     it('Test1. circle Diameter', function(done) {
         let radius = getDiameter();
         expect(radius).to.equal(25);
         done();
     });
     it('Test2. Circle area', function(done) {
         let radius = getArea();
         expect(radius).to.equal(79);
         done();
     });
 });