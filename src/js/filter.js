(function($) {
    "use strict"
    $(function() {
        
        var filters = $('.catalog__category__filter')
        var items = new Array()
        var btnStartText

        for(var i = 0; i < filters.length; i++) {
            items.push($(filters[i]).children('ul').children('li'))
        }

        for(var i = 0; i < items.length; i++) {
            for(var j = items[i].length; j > 2; j--) {
                $(items[i][j]).hide().addClass('is--hidden')
            }
        }

        $('.catalog__category__filter__alllink').on('click', function() {

            var elem = $(this)
            
            if(!elem.hasClass('is--open')) {
                btnStartText = elem.html()
                var items = $(this).siblings('ul').children('li')
                items.show()
                elem.html('Скрыть')
                elem.addClass('is--open')
            }else {
                elem.siblings('ul').children('li.is--hidden').hide()
                elem.html(btnStartText)
                elem.removeClass('is--open')
            }

        })

        $('#filshow').on('click', function() {
            $('body').addClass('is--filters-open')
            $('.overlay').show()
        })

        $('.overlay').on('click', function() {
            $('body').removeClass()
            $('.overlay').hide()
        })

        $('#filclose').on('click', function() {
            $('body').removeClass()
            $('.overlay').hide()
        })

        $('.favorite_btn').on('click', function() {
            $(this).toggleClass('is--active')
        })

        

        $('.item__container__btns.is--favorite a').on('click', function() {
            $(this).parent('.item__container__btns.is--favorite').toggleClass('is--active')
        })

    })
})(jQuery);