import assert from 'assert';
import {importExceltoJson} from '../../src/lib/utils.js';

describe('parseWhereTemplate', () => {
  test('parseWhereTemplate should return correct data with "where" attribute', (done) => {
    importExceltoJson('./src/lib/test.xlsx', function(err, data) {
      if (!err) {
        assert.equal(data.message, 'Table created from excel file');
      }
      done(err);
    });
    // .then(data => {
    //   db = data.db;
    //   assert.equal('I will pass', 'I will pass');
    //   done();
    // })
    // .catch(done);
  });
});