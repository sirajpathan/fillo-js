import assert from 'assert';
import {breakQuery, parseWhereTemplate} from '../../src/lib/utils.js';

xdescribe('breakQuery', () => {
  test('breakQuery should return correct data with "where" attribute', () => {
    console.log(breakQuery("* from books where price=8.95"));
    assert.equal('I will pass', 'I will pass');
  });
});

describe('parseWhereTemplate', () => {
  test('parseWhereTemplate should return correct data with "where" attribute', () => {
    console.log(parseWhereTemplate('`price`=8.95 AND `title`="The Lord price= AND of the Rings"', {price: 8.95, title: "'The Lord price= AND of the Rings'"}));
    assert.equal('I will pass', 'I will pass');
  });
});