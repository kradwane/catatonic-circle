import { should } from 'chai';
import catatonicCircle from '../lib';

should(); // Modifies objects prototype to include the 'should' property

describe('catatonicCircle', function () {
  it('should have a version number!', function () {
    catatonicCircle.should.have.property('VERSION');
  });
});
