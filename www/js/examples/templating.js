/* */
$(function() {
  var names = [
        { first : 'Rebecca', last : 'Murphey', img : 'rebecca.png' },
        { first : 'Adam', last : 'Sontag', img : 'adam.png' },
        { first : 'Alex', last : 'Sexton', img : 'alex.png' },
        { first : 'Paul', last : 'Irish', img : 'paul.png' }
      ], 
      html = '';

  $.each(names, function(i, name) {
    html += '<li>' +
              '<img src="img/' + name.img + '" alt="' +
                name.first + ' ' + name.last + '" /> ' +
                name.first + ' ' + name.last + 
            '</li>';
  });

  $('#myList').html(html);
});
















/*
$(function() {
  // ohai templates
  var myTemplate = '<li>' +
      '<img src="img/${img}" alt="${first} ${last}" /> ' +
      '${first} ${last} ' +
      '</li>';

  $.tmpl(myTemplate, { 
    first : 'Rebecca', 
    last : 'Murphey',
    img : 'rebecca.png'
  }).appendTo('#myList');
});

/*
$(function() {
  // auto-iteration ftw
  var names = [
        { first : 'Rebecca', last : 'Murphey', img : 'rebecca.png' },
        { first : 'Adam', last : 'Sontag', img : 'adam.png' },
        { first : 'Alex', last : 'Sexton', img : 'alex.png' },
        { first : 'Paul', last : 'Irish', img : 'paul.png' }
      ], 
      myTemplate = '<li>' +
        '<img src="img/${img}" alt="${first} ${last}" /> ' +
        '${first} ${last} ' +
        '</li>';

  $.tmpl(myTemplate, names).appendTo('#myList');
});

/*
$(function() {
  // get our template from a script tag in the page,
  // save it somewhere we can use it later, and 
  // "compile" it while we're at it so it will run
  // faster? no way!
  var names = [
        { first : 'Rebecca', last : 'Murphey', img : 'rebecca.png' },
        { first : 'Adam', last : 'Sontag', img : 'adam.png' },
        { first : 'Alex', last : 'Sexton', img : 'alex.png' },
        { first : 'Paul', last : 'Irish', img : 'paul.png' }
      ];

  $('#nameTemplate').template('saveForLater');

  $.tmpl('saveForLater', names).appendTo('#myList');
});
*/
