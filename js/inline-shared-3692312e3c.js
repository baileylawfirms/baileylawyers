jQuery(document).ready(function () {
        "use strict";
        jQuery("a.scrolltotop").on("click", function (event) {
            var id = jQuery(this).attr("href");
            var offset = 60;
            var target = jQuery(id).offset().top - offset;
            jQuery("html, body").animate({
                scrollTop: target
            }, 1500, "easeOutExpo");
            event.preventDefault();
        });
    });

    jQuery(document).ready(function () {
        "use strict";
        jQuery("#mainmenu-area").sticky({
            topSpacing: 0
        });
    });

    jQuery(document).ready(function () {
        "use strict";
        var sticky_sidebar = jQuery(".content-area .blog__content__wrap,.content-area .blog__widgets__wrap");
        sticky_sidebar.theiaStickySidebar({
            additionalMarginTop: 30
        });
    });

    jQuery(document).ready(function () {
        "use strict";
        var sticky_sidebar = jQuery(".content-area .product__content__wrap,.content-area .product__widgets__wrap");
        sticky_sidebar.theiaStickySidebar({
            additionalMarginTop: 0
        });
    });
