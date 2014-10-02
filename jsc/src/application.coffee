# Femme.
#   file: jsc/src/application.coffee

class Slideshow
  constructor: (@container) ->
    @index = 0
    @images = $(@container).children("img")

    for image in @images
      $(image).attr('src', $(image).attr('data-src'))

    @.refresh()


  refresh: =>
    # Hide all of the images to start.
    @images.hide()

    # Show the image at the current index.
    current = $(@images[@index])

    current.show()


  previous: =>
    @index = @index - 1

    if @index < 0
      @index = @images.size() - 1

    @.refresh()


  next: =>
    @index = @index + 1

    if @index == @images.size()
      @index = 0

    @.refresh()


  preload: =>



slideshow = new Slideshow(".slides")

$(document).ready ->

  $(".previous").on "click", ->
    slideshow.previous()

  $(".next").on "click", ->
    slideshow.next()

$(document).keydown (e) ->
  switch e.which

    # Right key trigger
    when 39
      slideshow.next()

    # Left key trigger
    when 37
      slideshow.previous();

  e.preventDefault()
