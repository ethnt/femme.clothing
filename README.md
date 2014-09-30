# Femme

**Author**: [Ethan Turkeltaub](http://ethnt.me)

---

This is the [Siteleaf](http://siteleaf.com) theme for [Femme](http://femme.clothing).

## Installation

```
$ bundle install
$ bundle exec siteleaf config femme.clothing
```

## Usage

To run the Siteleaf server:

```
$ bundle exec siteleaf server
```

To run Guard to compile assets:

```
$ bundle exec guard
```

To run both at the same time:

```
$ bundle exec foreman start
```

## Deployment

Make sure that all the assets have successfully compiled, then run:

```
$ bundle exec siteleaf push theme
```

Then [go to Siteleaf](https://manage.siteleaf.com/sites/541daa175dde229ac800005e/pages) and publish the site. It'll take about 15 minutes to actually deploy, since the caches need to be refreshed.
