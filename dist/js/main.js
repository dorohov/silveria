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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgZHJvcGRvd246IFwiLmRyb3Bkb3duXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2xpLmlzLS1sdmwxLmlzLS1kcm9wZG93bicpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGl0ZW1zLmRyb3Bkb3duKS5oaWRlKClcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICB2YXIgZHJvcGRvd24gPSAkKHRoaXMpLmNoaWxkcmVuKGl0ZW1zLmRyb3Bkb3duKVxyXG4gICAgICAgICAgICBkcm9wZG93bi5zaG93KClcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJykgIFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGl0ZW1zLmRyb3Bkb3duKS5oaWRlKClcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuX19zZWFyY2gtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoaXRlbXMuZHJvcGRvd24pLmhpZGUoKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19zZWFyY2gnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fbWVudV9fYnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
