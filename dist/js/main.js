(function($) {
    "use strict"
    $(function() {

        var blocks = $('.__animate')
        animateMe()
        $(document).scroll(function() {
            animateMe()
        })

        // Pace.on('done', function() {
        //     $('.__animate').removeClass('animated').removeClass('go').removeClass('fadeInUp')
        //     blocks.each(function() {
        //         $(this).addClass('animated').addClass('go').addClass('fadeInUp')
        //     })
        // })

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

        $('.popup').hover(function() {
            $(this).children('.popup__container').css({
                "opacity": "1",
                "visibility": "visible"
            })
        }, function() {
            $(this).children('.popup__container').css({
                "opacity": "0",
                "visibility": "hidden"
            })
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

        $('.favorite_btn').on('click', function() {
            $(this).toggleClass('is--active')
        })

        $('.item__container__btns.is--favorite a').on('click', function() {
            $(this).parent('.item__container__btns.is--favorite').toggleClass('is--active')
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        $('.pass_tog button.is--pass-show').on('click', function() {
            $(this).hide()
            $(this).siblings('button.is--pass-hide').show()
            $(this).siblings('input').attr('type', 'text')
        })

        $('.pass_tog button.is--pass-hide').on('click', function() {
            $(this).hide()
            $(this).siblings('button.is--pass-show').show()
            $(this).siblings('input').attr('type', 'password')
        })

        $('.user__orders__table__arrow').on('click', function() {
            $(this).toggleClass('is--active')
            $(this).parent().siblings('.user__orders__table__line__body').slideToggle()
            $(this).closest('.user__orders__table__line__top').toggleClass('is--active')
        })
        
        $('.user__orders__table__line__body__inner__arr').on('click', function() {
            $(this).closest('.user__orders__table__line__body').slideToggle()
            $(this).closest('.user__orders__table__line__body').siblings('.user__orders__table__line__top').toggleClass('is--active')
            $(this).closest('.user__orders__table__line__body').siblings('.user__orders__table__line__top').children('.user__orders__table__arrow').toggleClass('is--active')
        })

        $('.countblock button').on('click', function() {
            var input = $(this).siblings('input')
            var currentVal = input.val()
            if(isNaN(currentVal)) currentVal = 1
            if($(this).hasClass('is--minus')) {
                if(currentVal > 0) {
                    $(this).siblings('input').val(currentVal - 1)
                }
            }else if($(this).hasClass('is--plus')) {
                if(currentVal < 100000) {
                    $(this).siblings('input').val(Number(currentVal) + 1)
                }
            }
        })

        $('form').parsley();

        var phoneInputs = document.getElementsByClassName('in-phone')
        
        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        function setHeight() {

            var minHeight = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $('.allHeight').css('min-height', 'calc(100vh - ' + minHeight + 'px)')
        }

        setHeight()

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var clientWidth

        $('.zoom')
        .css('display', 'block')
        .parent()
        .zoom({
            url: $(this).find('img').attr('data-zoom'),
            onZoomIn: function() {
                $(this).closest('.item__container__img').addClass('is--hover')
            },
            onZoomOut: function() {
                $(this).closest('.item__container__img').removeClass('is--hover')
            }
        });

        removeZoom($(window).outerWidth())

        $(window).resize(function(e) {
            removeZoom($(window).outerWidth())
        })

        function removeZoom(width) {
            if(width <= 768) {
                $('.zoom').trigger('zoom.destroy');
            }
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        $('.modal').modal({
            showClose: false,
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
(function($) {
    "use strict"
    $(function() {

    })
})(jQuery);
window.onload = function() {
    var canvas = document.getElementById("bRing")
    var ctx = canvas.getContext('2d')

    var canvasB = document.getElementById("bRingB")
    var ctxB = canvasB.getContext('2d')


    var img = document.getElementById('bRingImg')
    var frames = document.querySelectorAll('#bRingSlides > img')
    var alpha = .5,   /// current alpha value
        delta = 0.02;

    canvas.height = 604;
    canvas.width = 461;

    canvasB.height = 604;
    canvasB.width = 461;

    ctxB.drawImage(img, 0, 0, canvas.width, canvas.height)

    var fps = 3;
    var frame = 0;
    function draw() {
        setTimeout(function() {
            alpha += delta;
            if (alpha <= 0 || alpha >= .6) delta =- delta;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = alpha;
            ctx.drawImage(frames[frame], 110, 0, 241, 164)
            if(frame < 5) frame++
            else if(frame >= 5) frame = 0
            requestAnimationFrame(draw);

        }, 1000 / fps);
    }

    draw()
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJjYXJkLmpzIiwiZHJvcGRvd24uanMiLCJmaWx0ZXIuanMiLCJmb3Jtcy5qcyIsImhlaWdodC5qcyIsIml0ZW1fem9vbS5qcyIsIm1vZGFscy5qcyIsIm5hdmJhci5qcyIsInByZWxvYWRlci5qcyIsInJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrcyA9ICQoJy5fX2FuaW1hdGUnKVxyXG4gICAgICAgIGFuaW1hdGVNZSgpXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbmltYXRlTWUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFBhY2Uub24oJ2RvbmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgJCgnLl9fYW5pbWF0ZScpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpLnJlbW92ZUNsYXNzKCdnbycpLnJlbW92ZUNsYXNzKCdmYWRlSW5VcCcpXHJcbiAgICAgICAgLy8gICAgIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZWQnKS5hZGRDbGFzcygnZ28nKS5hZGRDbGFzcygnZmFkZUluVXAnKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVNZSgpIHtcclxuICAgICAgICAgICAgYmxvY2tzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZWQnKS5hZGRDbGFzcygnZ28nKS5hZGRDbGFzcygnZmFkZUluVXAnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpLnJlbW92ZUNsYXNzKCdnbycpLnJlbW92ZUNsYXNzKCdmYWRlSW5VcCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpc0hvdmVyID0gdHJ1ZVxyXG4gICAgICAgIHZhciBlbGVtXHJcblxyXG4gICAgICAgICQoJy5jYXJkJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsZW0gPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoJ2lzLS1ob3ZlcicpXHJcbiAgICAgICAgICAgIGlzSG92ZXIgPSBmYWxzZVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKCdpcy0taG92ZXInKVxyXG4gICAgICAgICAgICBpc0hvdmVyID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmN1c3RvbXNlbGVjdF9fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5jdXN0b21zZWxlY3QnKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY3VzdG9tc2VsZWN0JylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgJCgnLmN1c3RvbXNlbGVjdCcpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnBvcHVwJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cF9fY29udGFpbmVyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInZpc2libGVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcucG9wdXBfX2NvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGZpbHRlcnMgPSAkKCcuY2F0YWxvZ19fY2F0ZWdvcnlfX2ZpbHRlcicpXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gbmV3IEFycmF5KClcclxuICAgICAgICB2YXIgYnRuU3RhcnRUZXh0XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goJChmaWx0ZXJzW2ldKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSBpdGVtc1tpXS5sZW5ndGg7IGogPiAyOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgICQoaXRlbXNbaV1bal0pLmhpZGUoKS5hZGRDbGFzcygnaXMtLWhpZGRlbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nX19jYXRlZ29yeV9fZmlsdGVyX19hbGxsaW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFlbGVtLmhhc0NsYXNzKCdpcy0tb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBidG5TdGFydFRleHQgPSBlbGVtLmh0bWwoKVxyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gJCh0aGlzKS5zaWJsaW5ncygndWwnKS5jaGlsZHJlbignbGknKVxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc2hvdygpXHJcbiAgICAgICAgICAgICAgICBlbGVtLmh0bWwoJ9Ch0LrRgNGL0YLRjCcpXHJcbiAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpLmlzLS1oaWRkZW4nKS5oaWRlKClcclxuICAgICAgICAgICAgICAgIGVsZW0uaHRtbChidG5TdGFydFRleHQpXHJcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI2ZpbHNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tZmlsdGVycy1vcGVuJylcclxuICAgICAgICAgICAgJCgnLm92ZXJsYXknKS5zaG93KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcub3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoKVxyXG4gICAgICAgICAgICAkKCcub3ZlcmxheScpLmhpZGUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNmaWxjbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoKVxyXG4gICAgICAgICAgICAkKCcub3ZlcmxheScpLmhpZGUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5mYXZvcml0ZV9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLml0ZW1fX2NvbnRhaW5lcl9fYnRucy5pcy0tZmF2b3JpdGUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLml0ZW1fX2NvbnRhaW5lcl9fYnRucy5pcy0tZmF2b3JpdGUnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcucGFzc190b2cgYnV0dG9uLmlzLS1wYXNzLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnYnV0dG9uLmlzLS1wYXNzLWhpZGUnKS5zaG93KClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wYXNzX3RvZyBidXR0b24uaXMtLXBhc3MtaGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhpZGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdidXR0b24uaXMtLXBhc3Mtc2hvdycpLnNob3coKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLmF0dHIoJ3R5cGUnLCAncGFzc3dvcmQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy51c2VyX19vcmRlcnNfX3RhYmxlX19hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX19ib2R5X19pbm5lcl9fYXJyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fYm9keScpLnNpYmxpbmdzKCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fdG9wJykuY2hpbGRyZW4oJy51c2VyX19vcmRlcnNfX3RhYmxlX19hcnJvdycpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY291bnRibG9jayBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFZhbCA9IGlucHV0LnZhbCgpXHJcbiAgICAgICAgICAgIGlmKGlzTmFOKGN1cnJlbnRWYWwpKSBjdXJyZW50VmFsID0gMVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbWludXMnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChjdXJyZW50VmFsIC0gMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA8IDEwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKE51bWJlcihjdXJyZW50VmFsKSArIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpO1xyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbi1waG9uZScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaW5IZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKCcuYWxsSGVpZ2h0JykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgbWluSGVpZ2h0ICsgJ3B4KScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRIZWlnaHQoKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgY2xpZW50V2lkdGhcclxuXHJcbiAgICAgICAgJCgnLnpvb20nKVxyXG4gICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC56b29tKHtcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ2RhdGEtem9vbScpLFxyXG4gICAgICAgICAgICBvblpvb21JbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5pdGVtX19jb250YWluZXJfX2ltZycpLmFkZENsYXNzKCdpcy0taG92ZXInKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblpvb21PdXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaXRlbV9fY29udGFpbmVyX19pbWcnKS5yZW1vdmVDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZW1vdmVab29tKCQod2luZG93KS5vdXRlcldpZHRoKCkpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZW1vdmVab29tKCQod2luZG93KS5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlWm9vbSh3aWR0aCkge1xyXG4gICAgICAgICAgICBpZih3aWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoJy56b29tJykudHJpZ2dlcignem9vbS5kZXN0cm95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoe1xyXG4gICAgICAgICAgICBzaG93Q2xvc2U6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBuYXZiYXI6ICcubmF2YmFyJyxcclxuICAgICAgICAgICAgbmF2YmFyX3RvcDogJy5uYXZiYXJfX3RvcCcsXHJcbiAgICAgICAgICAgIG5hdmJhcl9ib3R0b206ICcubmF2YmFyX19ib3R0b20nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgICAgZml4ZWRCYXIoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgY3JlYXRlUGFkZGluZygpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZml4ZWRCYXIoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY3JlYXRlUGFkZGluZygpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywgJCgnaGVhZGVyJykuaW5uZXJIZWlnaHQoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkQmFyKHNjcm9sbFRvcCwgZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBpZihzY3JvbGxUb3AgPiAwKSAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIGVsc2UgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG5cclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA+IDEyODApIHtcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFyKClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlQmFyKCkge1xyXG4gICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0JhcigpIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzaG93RHJvcGRvd24oaWQpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoUGFuZWwodHJ1ZSlcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd25bZGF0YS1kcm9wZG93bmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVTZWFyY2hQYW5lbChjbG9zZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gJCgnLm5hdmJhcl9fc2VhcmNoJylcclxuXHJcbiAgICAgICAgICAgIGlmKGNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5yZW1vdmVDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihwYW5lbC5oYXNDbGFzcygnaXMtLXNob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuYWRkQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duX190YXJnZXQnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCdkcm9wZG93bmlkJylcclxuICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKGlkKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdoZWFkZXInKS5ob3ZlcihmdW5jdGlvbigpIHt9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjc2VhcmNoX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI29wZW5Nb2JpbGVNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLS1tZW51LW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiUmluZ1wiKVxyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gICAgdmFyIGNhbnZhc0IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJSaW5nQlwiKVxyXG4gICAgdmFyIGN0eEIgPSBjYW52YXNCLmdldENvbnRleHQoJzJkJylcclxuXHJcblxyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiUmluZ0ltZycpXHJcbiAgICB2YXIgZnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2JSaW5nU2xpZGVzID4gaW1nJylcclxuICAgIHZhciBhbHBoYSA9IC41LCAgIC8vLyBjdXJyZW50IGFscGhhIHZhbHVlXHJcbiAgICAgICAgZGVsdGEgPSAwLjAyO1xyXG5cclxuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDQ7XHJcbiAgICBjYW52YXMud2lkdGggPSA0NjE7XHJcblxyXG4gICAgY2FudmFzQi5oZWlnaHQgPSA2MDQ7XHJcbiAgICBjYW52YXNCLndpZHRoID0gNDYxO1xyXG5cclxuICAgIGN0eEIuZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG5cclxuICAgIHZhciBmcHMgPSAzO1xyXG4gICAgdmFyIGZyYW1lID0gMDtcclxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxwaGEgKz0gZGVsdGE7XHJcbiAgICAgICAgICAgIGlmIChhbHBoYSA8PSAwIHx8IGFscGhhID49IC42KSBkZWx0YSA9LSBkZWx0YTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZnJhbWVzW2ZyYW1lXSwgMTEwLCAwLCAyNDEsIDE2NClcclxuICAgICAgICAgICAgaWYoZnJhbWUgPCA1KSBmcmFtZSsrXHJcbiAgICAgICAgICAgIGVsc2UgaWYoZnJhbWUgPj0gNSkgZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgICAgICAgfSwgMTAwMCAvIGZwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpXHJcbn0iXX0=
