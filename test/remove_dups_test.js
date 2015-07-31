var expect = require('chai').expect;
var removeDups = require('../lib/remove_dups');

describe('Remove duplicates test', function() {
  var testData = [
    'foo@example.com',
    'baz@email.com',
    'foo@example.com',
    'foobaz@domain.com',
    'baz@example.com',
    'baz@email.com'
  ];

  it('should remove duplicates from an array of email addresses', function() {
    var noDups = removeDups(testData);

    expect(noDups.length).to.eql(4);
    expect(noDups[0]).to.eql('foo@example.com');
    expect(noDups[1]).to.eql('baz@email.com');
    expect(noDups[2]).to.eql('foobaz@domain.com');
    expect(noDups[3]).to.eql('baz@example.com');
  });

  it('should immediately return an array with less than 2 items', function() {
    var onlyOneEmail = removeDups(['test@example.com']);

    expect(onlyOneEmail.length).to.eql(1);
    expect(onlyOneEmail[0]).to.eql('test@example.com');
  });
});
