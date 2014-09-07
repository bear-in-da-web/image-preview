/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * written by Alen Grakalic 
 * (http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery)
 * Modified by Sergio G. https://github.com/bearwebua/
 * https://github.com/bearwebua/simple-image-preview
 * 
 * Improvements:
 * - allows to display small lightweight image by default and onmouseover 
 * popup with big and heavy image will arise (save traffic, etc). Make sure 
 * that path/url to big image is incuded into "data-image" attribute of image tag
 * - position of the popup block will be appropriate to its height and won't 
 * cross the bottom border of the browser window if height is too big to fit
 * 
 * @see example.html for details
 */
this.imagePreview = function() {

    var xOffset = 10;
    var yOffset = 20;
    //var loadedObjects = [];

    $(document).on("mouseover", "img.imPreview", (function(e) {

        if ($(this).data('image')) {

            var bigImage = $(this).data('image');
            var target = e; //parent event (mouseover)
            var temp = 0;

            $("body").append("<div id='imagePreview'><span class='loaderTip'>Still loading ...</span></div>");

            var heavyImage = new Image();
            heavyImage.src = bigImage;
            heavyImage.onload = function() {

                $("#imagePreview").append('<img src="' + bigImage + '" />');
                $(".loaderTip").hide();

                if (target.clientY + $("#imagePreview").height() > $(window).height()) {
                    temp = $(window).height() - target.clientY - $("#imagePreview").height() - 10;
                }

                showImage(target, temp);
                //loadedObjects.push(heavyImage); //cache

            };
            showImage(e, temp);
        }

        function showImage(e, temp) {
            $("#imagePreview")
                    .css("top", (e.pageY - xOffset + temp) + "px")
                    .css("left", (e.pageX + yOffset) + "px")
                    .fadeIn("fast");
        }

    }));

    $(document).on("mouseout", "img.imPreview", (function(e) {
        $("#imagePreview").remove();
    }));
};
