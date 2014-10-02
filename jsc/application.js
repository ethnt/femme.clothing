(function() {
  var Slideshow, slideshow,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Slideshow = (function() {
    function Slideshow(container) {
      var image, _i, _len, _ref;
      this.container = container;
      this.next = __bind(this.next, this);
      this.previous = __bind(this.previous, this);
      this.refresh = __bind(this.refresh, this);
      this.index = 0;
      this.images = $(this.container).children("img");
      _ref = this.images;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        image = _ref[_i];
        $(image).attr('src', $(image).attr('data-src'));
      }
      this.refresh();
    }

    Slideshow.prototype.refresh = function() {
      var current;
      this.images.hide();
      current = $(this.images[this.index]);
      return current.show();
    };

    Slideshow.prototype.previous = function() {
      this.index = this.index - 1;
      if (this.index < 0) {
        this.index = this.images.size() - 1;
      }
      return this.refresh();
    };

    Slideshow.prototype.next = function() {
      this.index = this.index + 1;
      if (this.index === this.images.size()) {
        this.index = 0;
      }
      return this.refresh();
    };

    return Slideshow;

  })();

  slideshow = new Slideshow(".slides");

  $(document).ready(function() {
    $(".previous").on("click", function() {
      return slideshow.previous();
    });
    return $(".next").on("click", function() {
      return slideshow.next();
    });
  });

  $(document).keydown(function(e) {
    switch (e.which) {
      case 39:
        slideshow.next();
        break;
      case 37:
        slideshow.previous();
    }
    return e.preventDefault();
  });

}).call(this);
