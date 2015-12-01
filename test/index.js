import assert from 'assert';
import catatonicCircle from '../lib';

describe('catatonicCircle', function () {
  it('should have a version number!', function () {
    assert(typeof catatonicCircle.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
