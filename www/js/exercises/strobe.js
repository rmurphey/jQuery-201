/**
 * TASK: Write a widget using the jQuery UI widget factory that
 * enables an element to act as a light with a strobe
 * mode. The widget should provide a way to turn the light on
 * and off, and to interrogate the light as to whether it is on 
 * or off. Additionally, it should be possible to put the light
 * into strobe mode. In strobe mode, the light should alternate 
 * between the on and off modes, with a delay between switching
 * as specified by the element's data-rate attribute. Finally, the
 * light should be the color specified in the data-color attribute
 * when the light is on; otherwise it should be black.
 *
 * See www/strobe.html for the markup.
 */

$.widget('my.strobe', {
  _create : function() {

  }
});

$(function() {
  $('.strobe').strobe();
});
