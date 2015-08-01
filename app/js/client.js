var $ = require('jquery');
var _ = require('lodash');
var removeDups = require('../../lib/remove_dups');

$(document).ready(function() {
  var emailList = [
    'test@example.com',
    'foo@domain.com',
    'baz@email.com',
    'test@example.com',
    'foobaz@domain.com',
    'foo@example.com',
    'baz@email.com',
    'baz@email.com'
  ];

  buildEmailList(emailList);

  $('#remove-dups-btn').on('click', function(e) {
    e.preventDefault();
    var noDups = removeDups(emailList);

    buildEmailList(noDups);
  });

  $('#reset-btn').on('click', function(e) {
    e.preventDefault();
    buildEmailList(emailList);
  });

  $('#add-email-btn').on('click', function(e) {
    e.preventDefault();
    var newEmail = $('#new-email').val();

    if (newEmail.trim() !== '') {
      emailList.push(newEmail);
      buildEmailList(emailList);
      $('#new-email').val('').focus();
    }
  });

  $('#clear-btn').on('click', function(e) {
    e.preventDefault();
    emailList = [];

    buildEmailList(emailList);
  });

  function buildEmailList(list) {
    var $emailListEl = $('#email-list').html('');

    _.forEach(list, function(email) {
      var $emailAddressHTML = $('<li class="email-address">' + email + '</li>');

      $emailListEl.append($emailAddressHTML);
    });
  }
});
