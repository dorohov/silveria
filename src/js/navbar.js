(function($) {
    "use strict"
    $(function() {
        
        var items = {
            dropdown: ".dropdown"
        }

        $('li.is--lvl1.is--dropdown').hover(function() {
            $(items.dropdown).hide()
            $('.navbar__search').removeClass('is--active')
            var dropdown = $(this).children(items.dropdown)
            dropdown.show()
            $(this).children('a').addClass('is--active')  
        }, function() {
            $(items.dropdown).hide()
            $(this).children('a').removeClass('is--active')
        })

        $('.__search-btn').on('click', function() {
            $(items.dropdown).hide()
            $('.navbar__search').toggleClass('is--active')
        })

        $('.navbar__menu__btn button').on('click', function() {
            $(this).toggleClass('is-active');
            $('body').toggleClass('is--menu-open')
        })

    })
})(jQuery);