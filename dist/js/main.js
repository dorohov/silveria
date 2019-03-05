(function($) {
    "use strict"
    $(function() {

        var blocks = $('.__animate')
        animateMe()
        $(document).scroll(function() {
            animateMe()
        })

        function animateMe() {
            blocks.each(function() {
                if ($(this).visible(true)) {
                    $(this).addClass('animated').addClass('go').addClass('fadeInUp')
                } else {
                    $(this).removeClass('animated').removeClass('go').removeClass('fadeInUp')
                }
            })
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        var isHover = true
        var elem

        $('.card').hover(function() {
            elem = $(this)
            elem.addClass('is--hover')
            isHover = false
        }, function() {
            elem.removeClass('is--hover')
            isHover = true
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        $('.customselect__title').on('click', function() {
            $(this).parent('.customselect').toggleClass('is--open')
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.customselect')
            if(targets.length <= 0) $('.customselect').removeClass('is--open')
        })

    })
})(jQuery);
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

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        var items = {
            navbar: '.navbar',
            navbar_top: '.navbar__top',
            navbar_bottom: '.navbar__bottom'
        }
        var lastScrollTop = 0;

        fixedBar($(document).scrollTop())
        createPadding()

        $(document).on('scroll', function() {
            fixedBar($(document).scrollTop())
        })

        $(window).resize(function() {
            createPadding()
        });

        function createPadding() {
            $('main').css('padding-top', $('header').innerHeight())
        }

        function fixedBar(scrollTop, direction) {

            if(scrollTop > 0) $('header').addClass('is--scroll')
            else $('header').removeClass('is--scroll')

            if($(window).innerWidth() > 1280) {
                if(scrollTop > lastScrollTop) {
                    hideBar()
                }else {
                    showBar()
                }
            }
            lastScrollTop = scrollTop
        }

        function hideBar() {
            $('header').addClass('is--hide')
        }

        function showBar() {
            $('header').removeClass('is--hide')
        }

        function hideDropdown() {
            $('.navbar__dropdown').removeClass('is--show')
        }
        
        function showDropdown(id) {
            hideDropdown()
            toggleSearchPanel(true)
            $('.navbar__dropdown[data-dropdownid="' + id + '"]').addClass('is--show')
        }

        function toggleSearchPanel(close) {

            var panel = $('.navbar__search')

            if(close) {
                panel.removeClass('is--show')
            }else if(panel.hasClass('is--show')) {
                panel.removeClass('is--show')
            }else {
                panel.addClass('is--show')
            }
        }

        $('.dropdown__target').hover(function() {
            var id = $(this).data('dropdownid')
            showDropdown(id)
        }, function() {

        })

        $('header').hover(function() {}, function() {
            hideDropdown()
        })

        $('#search_btn').on('click', function() {
            hideDropdown()
            toggleSearchPanel()
        })

        $('#openMobileMenu').on('click', function() {
            $(this).toggleClass('is--active')
            $('body').toggleClass('is--menu-open')
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJjYXJkLmpzIiwiZHJvcGRvd24uanMiLCJmaWx0ZXIuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tzID0gJCgnLl9fYW5pbWF0ZScpXHJcbiAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVNZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZU1lKCkge1xyXG4gICAgICAgICAgICBibG9ja3MuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpLmFkZENsYXNzKCdnbycpLmFkZENsYXNzKCdmYWRlSW5VcCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJykucmVtb3ZlQ2xhc3MoJ2dvJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlzSG92ZXIgPSB0cnVlXHJcbiAgICAgICAgdmFyIGVsZW1cclxuXHJcbiAgICAgICAgJCgnLmNhcmQnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxlbSA9ICQodGhpcylcclxuICAgICAgICAgICAgZWxlbS5hZGRDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgaXNIb3ZlciA9IGZhbHNlXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoJ2lzLS1ob3ZlcicpXHJcbiAgICAgICAgICAgIGlzSG92ZXIgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcuY3VzdG9tc2VsZWN0X190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmN1c3RvbXNlbGVjdCcpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jdXN0b21zZWxlY3QnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSAkKCcuY3VzdG9tc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCgnLmNhdGFsb2dfX2NhdGVnb3J5X19maWx0ZXInKVxyXG4gICAgICAgIHZhciBpdGVtcyA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgdmFyIGJ0blN0YXJ0VGV4dFxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCQoZmlsdGVyc1tpXSkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gaXRlbXNbaV0ubGVuZ3RoOyBqID4gMjsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldW2pdKS5oaWRlKCkuYWRkQ2xhc3MoJ2lzLS1oaWRkZW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fY2F0ZWdvcnlfX2ZpbHRlcl9fYWxsbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighZWxlbS5oYXNDbGFzcygnaXMtLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuU3RhcnRUZXh0ID0gZWxlbS5odG1sKClcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9ICQodGhpcykuc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpJylcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNob3coKVxyXG4gICAgICAgICAgICAgICAgZWxlbS5odG1sKCfQodC60YDRi9GC0YwnKVxyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnNpYmxpbmdzKCd1bCcpLmNoaWxkcmVuKCdsaS5pcy0taGlkZGVuJykuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICBlbGVtLmh0bWwoYnRuU3RhcnRUZXh0KVxyXG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNmaWxzaG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLWZpbHRlcnMtb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5vdmVybGF5Jykuc2hvdygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKClcclxuICAgICAgICAgICAgJCgnLm92ZXJsYXknKS5oaWRlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjZmlsY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKClcclxuICAgICAgICAgICAgJCgnLm92ZXJsYXknKS5oaWRlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgbmF2YmFyOiAnLm5hdmJhcicsXHJcbiAgICAgICAgICAgIG5hdmJhcl90b3A6ICcubmF2YmFyX190b3AnLFxyXG4gICAgICAgICAgICBuYXZiYXJfYm90dG9tOiAnLm5hdmJhcl9fYm90dG9tJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAgIGZpeGVkQmFyKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIGNyZWF0ZVBhZGRpbmcoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZpeGVkQmFyKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZGRpbmcoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsICQoJ2hlYWRlcicpLmlubmVySGVpZ2h0KCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlZEJhcihzY3JvbGxUb3AsIGRpcmVjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gMCkgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG4gICAgICAgICAgICBlbHNlICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuXHJcbiAgICAgICAgICAgIGlmKCQod2luZG93KS5pbm5lcldpZHRoKCkgPiAxMjgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhcigpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0JhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZUJhcigpIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dCYXIoKSB7XHJcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKGlkKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpXHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaFBhbmVsKHRydWUpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duW2RhdGEtZHJvcGRvd25pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2VhcmNoUGFuZWwoY2xvc2UpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9ICQoJy5uYXZiYXJfX3NlYXJjaCcpXHJcblxyXG4gICAgICAgICAgICBpZihjbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfWVsc2UgaWYocGFuZWwuaGFzQ2xhc3MoJ2lzLS1zaG93JykpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bl9fdGFyZ2V0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnZHJvcGRvd25pZCcpXHJcbiAgICAgICAgICAgIHNob3dEcm9wZG93bihpZClcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnaGVhZGVyJykuaG92ZXIoZnVuY3Rpb24oKSB7fSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI3NlYXJjaF9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvcGVuTW9iaWxlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
