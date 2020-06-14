# Mastina

[![MPL](https://img.shields.io/github/license/unscriptedvn/mastina)](LICENSE.txt)

Mastina is a beautiful, [Ayu-based](https://github.com/ayu-theme/ayu-colors), and modern theme for the Nikola static site generator and is the official theme used on the Unscripted website. Mastina is responsive, respectful to your system's theme preferences (via `prefers-color-scheme`), and includes syntax highlighting via highlight.js and the Ayu color scheme.

![Mastina Screenshot](screenshot.png)

## Getting Started

To install this theme, clone this directory into the `themes` folder of your Nikola project:

```
git clone https://github.com/UnscriptedVN/mastina site/themes/mastina
```

In `conf.py` for your website, set the theme to "mastina":

```py
# Name of the theme to use.
THEME = "mastina"
```

## Configuration

### Templates

There are two main template files (tmpl) that can be customized:

- `logo.tmpl` controls the logo in the navigation bar.
- `index_helper.tmpl` controls the front page, ranging from the jumbotron at the top to the main content below it.

Below is an example for each. You may want to copy the code to modify it to your liking in your own templates folder:

```jinja
# index_helper.tmpl
{% import 'base_helper.tmpl' as base with context %}
{{ set_locale(lang) }}

{% macro title() %}{{ blog_description }}{% endmacro %}
{% macro description() %}
This is a sample description to demo the main page's content. This should be changed in <code>index_helper.tmpl</code> to better text.
{% endmacro %}
{% macro call_to_action() %}
{% endmacro %}
{% macro hero() %}
<div>
    <img class="ms-shadowed strong" src="/assets/img/hero.png" />
</div>
{% endmacro %}
```

```jinja
# logo.tmpl
{% import 'base_helper.tmpl' as base with context %}

{% macro logo() %}
<img src="/assets/img/logomark.svg" alt="{{ blog_title }}"/>
{% endmacro %}
```

### Navigation Links

The navigations links are pulled directly from your site's `conf.py` and can be configured normally. The links in the navigation bar use the default navigation links, and the links in the footer use the alternate navigation links.

## License

The primary Mastina project is licensed under the Mozilla Public License. Some dependencies are available under different licenses:

- Feather icons: MIT License
- Highlight.js: BSD-3-Clause
- Moment.js: MIT License
- Ayu color scheme: MIT License
