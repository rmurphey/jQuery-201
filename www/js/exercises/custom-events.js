/**
 * TASK: Use custom events and a mediator to communicate between the 
 * #filters container and the #cast container to determine which cast
 * members are shown. 
 */

$(function() {
  var filters = $('#filters'), 
      cast = $('#cast'),
      doc = $(document);

  filters.find('input').bind('click', function() {
    doc.trigger('filterSelection', [ $(this).val(), this.checked ]);
  });

  doc.bind('filterSelection', function(e, val, checked) {
    cast.find('li.' + val)[checked ? 'show' : 'hide'](); 
  });

  cast.find('li').hide();
});
