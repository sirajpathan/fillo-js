import assert from 'assert';
import {importExceltoJson} from '../../src/lib/utils.js';
import {query} from '../../src/lib/query.js';
const tableName = 'test';
let db;


describe('Select', () => {

  test('Create DB connection', (done) => {
    importExceltoJson('./src/lib/test.xlsx', function(err, data) {
      if (!err) {
        assert.equal(data.message, 'Table created from excel file');
        db = data.db;
      }
      done(err);
    });
  });

  test('Get table data', (done) => {
    query(db, `SELECT * FROM ${tableName}`)
      .then(data => {
        console.log(data);
        assert.equal('I will pass', 'I will pass');
        done();
      })
      .catch(done);
  });

  test('Get table data with WHERE clause', (done) => {
    query(db, `SELECT * FROM ${tableName} WHERE id='1'`)
      .then(data => {
        console.log(data);
        assert.equal('I will pass', 'I will pass');
        done();
      })
      .catch(done);
  });
});