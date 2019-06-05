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

        $('main').on('click', '.customselect__title', function() {
            $(this).parent('.customselect').toggleClass('is--open')
        })
        
        // $('.customselect__title').on('click', function() {
        //     $(this).parent('.customselect').toggleClass('is--open')
        // })

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
            // $(this).toggleClass('is--active')
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

        var btnData = $('.basket__promo .btn').data('apply')
        $('.basket__promo .btn').on('click', function() {
            var _this = $(this)
            if(btnData) {
                $('.basket__promo input[type="text"]').attr('readonly', true)
                $('.basket__promo .form__group.is--promo-text').show();
                _this.html('Отменить')
            }else {
                $('.basket__promo input[type="text"]').attr('readonly', false)
                $('.basket__promo .form__group.is--promo-text').hide();
                _this.html('Применить')
            }
            btnData = !btnData

            $(this).attr('data-apply', btnData)

        })

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
            // toggleSearchPanel(true)
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
(function($) {
    "use strict"
    $(function() {
        
        var frames = $('li.is--frame'),
            currentFrame = frames.length - 1

        setInterval(function() {
            $('li.is--frame').removeClass('is--active')
            $(frames[currentFrame]).addClass('is--active')
            currentFrame--
            if(currentFrame < 0) currentFrame = frames.length - 1
        }, 1000)


    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJjYXJkLmpzIiwiZHJvcGRvd24uanMiLCJmaWx0ZXIuanMiLCJmb3Jtcy5qcyIsImhlaWdodC5qcyIsIml0ZW1fem9vbS5qcyIsIm1vZGFscy5qcyIsIm5hdmJhci5qcyIsInByZWxvYWRlci5qcyIsInJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tzID0gJCgnLl9fYW5pbWF0ZScpXHJcbiAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVNZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gUGFjZS5vbignZG9uZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAkKCcuX19hbmltYXRlJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJykucmVtb3ZlQ2xhc3MoJ2dvJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAvLyAgICAgYmxvY2tzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpLmFkZENsYXNzKCdnbycpLmFkZENsYXNzKCdmYWRlSW5VcCcpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZU1lKCkge1xyXG4gICAgICAgICAgICBibG9ja3MuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpLmFkZENsYXNzKCdnbycpLmFkZENsYXNzKCdmYWRlSW5VcCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJykucmVtb3ZlQ2xhc3MoJ2dvJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlzSG92ZXIgPSB0cnVlXHJcbiAgICAgICAgdmFyIGVsZW1cclxuXHJcbiAgICAgICAgJCgnLmNhcmQnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxlbSA9ICQodGhpcylcclxuICAgICAgICAgICAgZWxlbS5hZGRDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgaXNIb3ZlciA9IGZhbHNlXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoJ2lzLS1ob3ZlcicpXHJcbiAgICAgICAgICAgIGlzSG92ZXIgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLm9uKCdjbGljaycsICcuY3VzdG9tc2VsZWN0X190aXRsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmN1c3RvbXNlbGVjdCcpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyAkKCcuY3VzdG9tc2VsZWN0X190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAkKHRoaXMpLnBhcmVudCgnLmN1c3RvbXNlbGVjdCcpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jdXN0b21zZWxlY3QnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSAkKCcuY3VzdG9tc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcucG9wdXAnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnBvcHVwX19jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwidmlzaWJsZVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cF9fY29udGFpbmVyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcImhpZGRlblwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgZmlsdGVycyA9ICQoJy5jYXRhbG9nX19jYXRlZ29yeV9fZmlsdGVyJylcclxuICAgICAgICB2YXIgaXRlbXMgPSBuZXcgQXJyYXkoKVxyXG4gICAgICAgIHZhciBidG5TdGFydFRleHRcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCgkKGZpbHRlcnNbaV0pLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IGl0ZW1zW2ldLmxlbmd0aDsgaiA+IDI7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgJChpdGVtc1tpXVtqXSkuaGlkZSgpLmFkZENsYXNzKCdpcy0taGlkZGVuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2NhdGVnb3J5X19maWx0ZXJfX2FsbGxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIWVsZW0uaGFzQ2xhc3MoJ2lzLS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGJ0blN0YXJ0VGV4dCA9IGVsZW0uaHRtbCgpXHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLmNoaWxkcmVuKCdsaScpXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zaG93KClcclxuICAgICAgICAgICAgICAgIGVsZW0uaHRtbCgn0KHQutGA0YvRgtGMJylcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5zaWJsaW5ncygndWwnKS5jaGlsZHJlbignbGkuaXMtLWhpZGRlbicpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgZWxlbS5odG1sKGJ0blN0YXJ0VGV4dClcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjZmlsc2hvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1maWx0ZXJzLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcub3ZlcmxheScpLnNob3coKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygpXHJcbiAgICAgICAgICAgICQoJy5vdmVybGF5JykuaGlkZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI2ZpbGNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygpXHJcbiAgICAgICAgICAgICQoJy5vdmVybGF5JykuaGlkZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmZhdm9yaXRlX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgJCgnLml0ZW1fX2NvbnRhaW5lcl9fYnRucy5pcy0tZmF2b3JpdGUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLml0ZW1fX2NvbnRhaW5lcl9fYnRucy5pcy0tZmF2b3JpdGUnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcucGFzc190b2cgYnV0dG9uLmlzLS1wYXNzLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnYnV0dG9uLmlzLS1wYXNzLWhpZGUnKS5zaG93KClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wYXNzX3RvZyBidXR0b24uaXMtLXBhc3MtaGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhpZGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdidXR0b24uaXMtLXBhc3Mtc2hvdycpLnNob3coKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLmF0dHIoJ3R5cGUnLCAncGFzc3dvcmQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy51c2VyX19vcmRlcnNfX3RhYmxlX19hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX19ib2R5X19pbm5lcl9fYXJyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fYm9keScpLnNpYmxpbmdzKCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fdG9wJykuY2hpbGRyZW4oJy51c2VyX19vcmRlcnNfX3RhYmxlX19hcnJvdycpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY291bnRibG9jayBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFZhbCA9IGlucHV0LnZhbCgpXHJcbiAgICAgICAgICAgIGlmKGlzTmFOKGN1cnJlbnRWYWwpKSBjdXJyZW50VmFsID0gMVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbWludXMnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChjdXJyZW50VmFsIC0gMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA8IDEwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKE51bWJlcihjdXJyZW50VmFsKSArIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpO1xyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbi1waG9uZScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuRGF0YSA9ICQoJy5iYXNrZXRfX3Byb21vIC5idG4nKS5kYXRhKCdhcHBseScpXHJcbiAgICAgICAgJCgnLmJhc2tldF9fcHJvbW8gLmJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIGlmKGJ0bkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQoJy5iYXNrZXRfX3Byb21vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykuYXR0cigncmVhZG9ubHknLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgJCgnLmJhc2tldF9fcHJvbW8gLmZvcm1fX2dyb3VwLmlzLS1wcm9tby10ZXh0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaHRtbCgn0J7RgtC80LXQvdC40YLRjCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5iYXNrZXRfX3Byb21vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykuYXR0cigncmVhZG9ubHknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICQoJy5iYXNrZXRfX3Byb21vIC5mb3JtX19ncm91cC5pcy0tcHJvbW8tdGV4dCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmh0bWwoJ9Cf0YDQuNC80LXQvdC40YLRjCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuRGF0YSA9ICFidG5EYXRhXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtYXBwbHknLCBidG5EYXRhKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaW5IZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKCcuYWxsSGVpZ2h0JykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgbWluSGVpZ2h0ICsgJ3B4KScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRIZWlnaHQoKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgY2xpZW50V2lkdGhcclxuXHJcbiAgICAgICAgJCgnLnpvb20nKVxyXG4gICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC56b29tKHtcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ2RhdGEtem9vbScpLFxyXG4gICAgICAgICAgICBvblpvb21JbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5pdGVtX19jb250YWluZXJfX2ltZycpLmFkZENsYXNzKCdpcy0taG92ZXInKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblpvb21PdXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaXRlbV9fY29udGFpbmVyX19pbWcnKS5yZW1vdmVDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZW1vdmVab29tKCQod2luZG93KS5vdXRlcldpZHRoKCkpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZW1vdmVab29tKCQod2luZG93KS5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlWm9vbSh3aWR0aCkge1xyXG4gICAgICAgICAgICBpZih3aWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoJy56b29tJykudHJpZ2dlcignem9vbS5kZXN0cm95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoe1xyXG4gICAgICAgICAgICBzaG93Q2xvc2U6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBuYXZiYXI6ICcubmF2YmFyJyxcclxuICAgICAgICAgICAgbmF2YmFyX3RvcDogJy5uYXZiYXJfX3RvcCcsXHJcbiAgICAgICAgICAgIG5hdmJhcl9ib3R0b206ICcubmF2YmFyX19ib3R0b20nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgICAgZml4ZWRCYXIoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgY3JlYXRlUGFkZGluZygpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZml4ZWRCYXIoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY3JlYXRlUGFkZGluZygpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywgJCgnaGVhZGVyJykuaW5uZXJIZWlnaHQoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkQmFyKHNjcm9sbFRvcCwgZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBpZihzY3JvbGxUb3AgPiAwKSAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIGVsc2UgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG5cclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA+IDEyODApIHtcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFyKClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlQmFyKCkge1xyXG4gICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0JhcigpIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzaG93RHJvcGRvd24oaWQpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICAgICAgLy8gdG9nZ2xlU2VhcmNoUGFuZWwodHJ1ZSlcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd25bZGF0YS1kcm9wZG93bmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVTZWFyY2hQYW5lbChjbG9zZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gJCgnLm5hdmJhcl9fc2VhcmNoJylcclxuXHJcbiAgICAgICAgICAgIGlmKGNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5yZW1vdmVDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihwYW5lbC5oYXNDbGFzcygnaXMtLXNob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuYWRkQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duX190YXJnZXQnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCdkcm9wZG93bmlkJylcclxuICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKGlkKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdoZWFkZXInKS5ob3ZlcihmdW5jdGlvbigpIHt9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjc2VhcmNoX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI29wZW5Nb2JpbGVNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLS1tZW51LW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGZyYW1lcyA9ICQoJ2xpLmlzLS1mcmFtZScpLFxyXG4gICAgICAgICAgICBjdXJyZW50RnJhbWUgPSBmcmFtZXMubGVuZ3RoIC0gMVxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnbGkuaXMtLWZyYW1lJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKGZyYW1lc1tjdXJyZW50RnJhbWVdKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZS0tXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRGcmFtZSA8IDApIGN1cnJlbnRGcmFtZSA9IGZyYW1lcy5sZW5ndGggLSAxXHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
