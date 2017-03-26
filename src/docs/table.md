---
next:
  text: Text
  url: /docs/text.html
---

# Table

Add a `.table` class to `<table>` element:

<table class="table">
  <thead>
    <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://getmobicss.com/">Mobi.css</a></td>
      <td><a href="https://github.com/xcatliu">xcatliu</a></td>
      <td>Sass</td>
      <td>3.6kb</td>
      <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
      <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
    </tr>
    <tr>
      <td><a href="http://getskeleton.com/">Skeleton</a></td>
      <td><a href="https://github.com/dhg">Dave Gamache</a></td>
      <td>Css</td>
      <td>3.2kb</td>
      <td><i class="fa fa-star"></i></td>
      <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
    </tr>
    <tr>
      <td><a href="http://purecss.io/">Pure.css</a></td>
      <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
      <td>Css</td>
      <td>4.6kb</td>
      <td><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
      <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
    </tr>
    <tr>
      <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
      <td><a href="https://github.com/twbs">Twitter</a></td>
      <td>Sass, JavaScript</td>
      <td>20.1kb</td>
      <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
      <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
    </tr>
    <tr>
      <td><a href="http://goratchet.com/"><s>Ratchet</s></a></td>
      <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
    </tr>
  </tbody>
</table>

```html
<table class="table">
  <thead>
    <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
  </thead>
  <tbody>
    <tr><td>...</td></tr>
    <tr><td>...</td></tr>
    <tr><td>...</td></tr>
  </tbody>
</table>
```

If you are viewing the above case in mobile device, then you'll find that the table renders out of the viewable area. We usually use the `.scroll-view` wrapper to make your table scrollable.

<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>3.6kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://getskeleton.com/">Skeleton</a></td>
        <td><a href="https://github.com/dhg">Dave Gamache</a></td>
        <td>Css</td>
        <td>3.2kb</td>
        <td><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://purecss.io/">Pure.css</a></td>
        <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
        <td>Css</td>
        <td>4.6kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
        <td><a href="https://github.com/twbs">Twitter</a></td>
        <td>Sass, JavaScript</td>
        <td>20.1kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://goratchet.com/"><s>Ratchet</s></a></td>
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr><td>...</td></tr>
      <tr><td>...</td></tr>
      <tr><td>...</td></tr>
    </tbody>
  </table>
</div>
```

Caption in table:

<table class="table">
  <caption>Table Caption</caption>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.1</td>
      <td>1.2</td>
      <td>1.3</td>
    </tr>
    <tr>
      <td>2.1</td>
      <td>2.2</td>
      <td>2.3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  </tfoot>
</table>
