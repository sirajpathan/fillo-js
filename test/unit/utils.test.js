import assert from 'assert';
import {importExceltoJson} from '../../src/lib/utils.js';

describe('parseWhereTemplate', () => {
  test('parseWhereTemplate should return correct data with "where" attribute', (done) => {
    importExceltoJson('./test/mock-data/test.xlsx', 'fillo_table', function(err, data) {
      if (!err) {
        assert.equal(data.message, 'Table created from excel file');
      }
      done(err);
    });
  });
});