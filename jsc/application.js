(function() {
  var Slideshow,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Slideshow = (function() {
    function Slideshow(container) {
      this.container = container;
      this.next = __bind(this.next, this);
      this.previous = __bind(this.previous, this);
      this.refresh = __bind(this.refresh, this);
      this.index = 0;
      this.images = $(this.container).children("img");
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

  $(document).ready(function() {
    var slideshow;
    slideshow = new Slideshow(".slides");
    $(".previous").on("click", function() {
      return slideshow.previous();
    });
    return $(".next").on("click", function() {
      return slideshow.next();
    });
  });

}).call(this);
