simple-image-preview
=======================

 * Image preview script. Allows to have a popup with bigger image when user cursor is over the smaller image. 
 
 * Powered by jQuery (http://www.jquery.com)
 * Originally written by Alen Grakalic (http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery)

Improvements:
-------------

 - allows to display small lightweight image by default and when user cursor is over the smaller image (onmouseover) popup with big and heavy image will be displayed. 
Make sure that path/url to big image is incuded into "data-image" attribute of image tag
 - position of the popup block will be appropriate to its height and won't cross the bottom border of the browser window if height is too big to fit

Requirements:
-------------

jQuery

Installation:
-------------

Copy js file(s) from js folder to your project codes. Include it;

Add the next js lines to your page:
```js
        <script>
            $(document).ready(function() {
                imagePreview();
            });
        </script>
````
You need to have the following HTML code to make previews work:
```html
<img class="imPreview" data-image="link/path_to_big_image" src="link/path_to_small_image" alt="mini-image" width="150" />
````

Notes:
-------------

see 	example.html for demo and details
