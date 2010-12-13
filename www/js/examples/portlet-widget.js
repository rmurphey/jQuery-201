$.widget('my.portlet', {
  widgetEventPrefix : 'portlet-',
  portlets : [],

  _create : function() {
    this.id = this.element.attr('data-id');

    this.element.delegate('li.open', 'click', $.proxy(function() {
      this._setOption('open', true);
    }, this));
      
    this.element.delegate('li.close', 'click', $.proxy(function() {
      this._setOption('open', false);
    }, this));

    this.element.delegate('li.favorite', 'click', $.proxy(function() {
      this._setOption('favorite', true);
    }, this));

    $.subscribe('/portlet/favorite', $.proxy(function(id) {
      if (id != this.id) {
        this._setOption('favorite', false);
      }
    }, this));
  },

  open : function() {
    this.element.removeClass('closed');
    this._trigger('opened');
  },

  close : function() {
    this.element.addClass('closed');
    this._trigger('closed');
  },

  _setOption : function(key, val) {
    if (key == 'favorite') {
      if (val) { 
        this._favorite(); 
      } else {
        this.element.removeClass('favorite');
      }
      return;
    }

    if (key == 'open') {
      this[val ? 'open' : 'close']();
      return;
    }
  },

  _favorite : function() {
    this.element.addClass('favorite');
    $.publish('/portlet/favorite', [ this.id ]);
  }
});

$(function() { 
  $('.portlet').portlet(); 
});
