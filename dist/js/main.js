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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tzID0gJCgnLl9fYW5pbWF0ZScpXHJcbiAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVNZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZU1lKCkge1xyXG4gICAgICAgICAgICBibG9ja3MuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpLmFkZENsYXNzKCdnbycpLmFkZENsYXNzKCdmYWRlSW5VcCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJykucmVtb3ZlQ2xhc3MoJ2dvJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBuYXZiYXI6ICcubmF2YmFyJyxcclxuICAgICAgICAgICAgbmF2YmFyX3RvcDogJy5uYXZiYXJfX3RvcCcsXHJcbiAgICAgICAgICAgIG5hdmJhcl9ib3R0b206ICcubmF2YmFyX19ib3R0b20nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgICAgZml4ZWRCYXIoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgY3JlYXRlUGFkZGluZygpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZml4ZWRCYXIoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY3JlYXRlUGFkZGluZygpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywgJCgnaGVhZGVyJykuaW5uZXJIZWlnaHQoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkQmFyKHNjcm9sbFRvcCwgZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBpZihzY3JvbGxUb3AgPiAwKSAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIGVsc2UgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG5cclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA+IDEyODApIHtcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFyKClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlQmFyKCkge1xyXG4gICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0JhcigpIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzaG93RHJvcGRvd24oaWQpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoUGFuZWwodHJ1ZSlcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd25bZGF0YS1kcm9wZG93bmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVTZWFyY2hQYW5lbChjbG9zZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gJCgnLm5hdmJhcl9fc2VhcmNoJylcclxuXHJcbiAgICAgICAgICAgIGlmKGNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5yZW1vdmVDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihwYW5lbC5oYXNDbGFzcygnaXMtLXNob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuYWRkQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duX190YXJnZXQnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCdkcm9wZG93bmlkJylcclxuICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKGlkKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdoZWFkZXInKS5ob3ZlcihmdW5jdGlvbigpIHt9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjc2VhcmNoX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI29wZW5Nb2JpbGVNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLS1tZW51LW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
