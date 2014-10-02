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

    # @images.attr('src', '/img/loading.png')

    # Show the image at the current index.
    current = $(@images[@index])

    # current.attr('src', current.attr('data-src'))

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



$(document).ready ->
  slideshow = new Slideshow(".slides")

  $(".previous").on "click", ->
    slideshow.previous()

  $(".next").on "click", ->
    slideshow.next()


  # $("h2").each ->
  #   text = $(@).text()
  #   text = text.replace("femme", '<span class="logo">femme</span>')
  #   $(@).html(text)
