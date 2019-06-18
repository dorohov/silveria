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
        var itemLength

        for(var i = 0; i < filters.length; i++) {
            items.push($(filters[i]).children('ul').children('li'))

            itemLength = $(filters).length
        }

        for(var j = 0; j < itemLength; j++) {
            if($(filters[j]).children('ul').children('li').length < 3) {
                $(filters[j]).children('.catalog__category__filter__alllink').remove()
            }
        }

        for(var i = 0; i < items.length; i++) {
            for(var j = items[i].length; j > 2; j--) {
                if($(items[i][j]).children('input:checked').length > 0) {
                    
                }else {
                    $(items[i][j]).hide().addClass('is--hidden')
                }
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

        

        // $('.item__container__btns.is--favorite a').on('click', function() {
        //     $(this).parent('.item__container__btns.is--favorite').toggleClass('is--active')
        // })

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

        setMainHeight()

        function setMainHeight() {

            var elemsHeight = $('.footer').innerHeight()

            $('main').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
        }

        $(window).resize(function() {
            setMainHeight()
        })

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJjYXJkLmpzIiwiZHJvcGRvd24uanMiLCJmaWx0ZXIuanMiLCJmb3Jtcy5qcyIsImhlaWdodC5qcyIsIml0ZW1fem9vbS5qcyIsIm1haW5zaXplLmpzIiwibW9kYWxzLmpzIiwibmF2YmFyLmpzIiwicHJlbG9hZGVyLmpzIiwicmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBibG9ja3MgPSAkKCcuX19hbmltYXRlJylcclxuICAgICAgICBhbmltYXRlTWUoKVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBQYWNlLm9uKCdkb25lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICQoJy5fX2FuaW1hdGUnKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKS5yZW1vdmVDbGFzcygnZ28nKS5yZW1vdmVDbGFzcygnZmFkZUluVXAnKVxyXG4gICAgICAgIC8vICAgICBibG9ja3MuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkJykuYWRkQ2xhc3MoJ2dvJykuYWRkQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlTWUoKSB7XHJcbiAgICAgICAgICAgIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkJykuYWRkQ2xhc3MoJ2dvJykuYWRkQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKS5yZW1vdmVDbGFzcygnZ28nKS5yZW1vdmVDbGFzcygnZmFkZUluVXAnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXNIb3ZlciA9IHRydWVcclxuICAgICAgICB2YXIgZWxlbVxyXG5cclxuICAgICAgICAkKCcuY2FyZCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbGVtID0gJCh0aGlzKVxyXG4gICAgICAgICAgICBlbGVtLmFkZENsYXNzKCdpcy0taG92ZXInKVxyXG4gICAgICAgICAgICBpc0hvdmVyID0gZmFsc2VcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgaXNIb3ZlciA9IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCdtYWluJykub24oJ2NsaWNrJywgJy5jdXN0b21zZWxlY3RfX3RpdGxlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuY3VzdG9tc2VsZWN0JykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICQoJy5jdXN0b21zZWxlY3RfX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICQodGhpcykucGFyZW50KCcuY3VzdG9tc2VsZWN0JykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmN1c3RvbXNlbGVjdCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApICQoJy5jdXN0b21zZWxlY3QnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wb3B1cCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcucG9wdXBfX2NvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnBvcHVwX19jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCgnLmNhdGFsb2dfX2NhdGVnb3J5X19maWx0ZXInKVxyXG4gICAgICAgIHZhciBpdGVtcyA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgdmFyIGJ0blN0YXJ0VGV4dFxyXG4gICAgICAgIHZhciBpdGVtTGVuZ3RoXHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goJChmaWx0ZXJzW2ldKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKSlcclxuXHJcbiAgICAgICAgICAgIGl0ZW1MZW5ndGggPSAkKGZpbHRlcnMpLmxlbmd0aFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGl0ZW1MZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZigkKGZpbHRlcnNbal0pLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICQoZmlsdGVyc1tqXSkuY2hpbGRyZW4oJy5jYXRhbG9nX19jYXRlZ29yeV9fZmlsdGVyX19hbGxsaW5rJykucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IGl0ZW1zW2ldLmxlbmd0aDsgaiA+IDI7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgaWYoJChpdGVtc1tpXVtqXSkuY2hpbGRyZW4oJ2lucHV0OmNoZWNrZWQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtc1tpXVtqXSkuaGlkZSgpLmFkZENsYXNzKCdpcy0taGlkZGVuJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2NhdGVnb3J5X19maWx0ZXJfX2FsbGxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIWVsZW0uaGFzQ2xhc3MoJ2lzLS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGJ0blN0YXJ0VGV4dCA9IGVsZW0uaHRtbCgpXHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLmNoaWxkcmVuKCdsaScpXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zaG93KClcclxuICAgICAgICAgICAgICAgIGVsZW0uaHRtbCgn0KHQutGA0YvRgtGMJylcclxuICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5zaWJsaW5ncygndWwnKS5jaGlsZHJlbignbGkuaXMtLWhpZGRlbicpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgZWxlbS5odG1sKGJ0blN0YXJ0VGV4dClcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjZmlsc2hvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1maWx0ZXJzLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcub3ZlcmxheScpLnNob3coKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygpXHJcbiAgICAgICAgICAgICQoJy5vdmVybGF5JykuaGlkZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI2ZpbGNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygpXHJcbiAgICAgICAgICAgICQoJy5vdmVybGF5JykuaGlkZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmZhdm9yaXRlX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gJCgnLml0ZW1fX2NvbnRhaW5lcl9fYnRucy5pcy0tZmF2b3JpdGUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAkKHRoaXMpLnBhcmVudCgnLml0ZW1fX2NvbnRhaW5lcl9fYnRucy5pcy0tZmF2b3JpdGUnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICAkKCcucGFzc190b2cgYnV0dG9uLmlzLS1wYXNzLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnYnV0dG9uLmlzLS1wYXNzLWhpZGUnKS5zaG93KClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wYXNzX3RvZyBidXR0b24uaXMtLXBhc3MtaGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhpZGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdidXR0b24uaXMtLXBhc3Mtc2hvdycpLnNob3coKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLmF0dHIoJ3R5cGUnLCAncGFzc3dvcmQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy51c2VyX19vcmRlcnNfX3RhYmxlX19hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX19ib2R5X19pbm5lcl9fYXJyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fYm9keScpLnNpYmxpbmdzKCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fdG9wJykuY2hpbGRyZW4oJy51c2VyX19vcmRlcnNfX3RhYmxlX19hcnJvdycpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY291bnRibG9jayBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFZhbCA9IGlucHV0LnZhbCgpXHJcbiAgICAgICAgICAgIGlmKGlzTmFOKGN1cnJlbnRWYWwpKSBjdXJyZW50VmFsID0gMVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbWludXMnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChjdXJyZW50VmFsIC0gMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA8IDEwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykudmFsKE51bWJlcihjdXJyZW50VmFsKSArIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpO1xyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbi1waG9uZScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuRGF0YSA9ICQoJy5iYXNrZXRfX3Byb21vIC5idG4nKS5kYXRhKCdhcHBseScpXHJcbiAgICAgICAgJCgnLmJhc2tldF9fcHJvbW8gLmJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIGlmKGJ0bkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQoJy5iYXNrZXRfX3Byb21vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykuYXR0cigncmVhZG9ubHknLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgJCgnLmJhc2tldF9fcHJvbW8gLmZvcm1fX2dyb3VwLmlzLS1wcm9tby10ZXh0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaHRtbCgn0J7RgtC80LXQvdC40YLRjCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5iYXNrZXRfX3Byb21vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykuYXR0cigncmVhZG9ubHknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICQoJy5iYXNrZXRfX3Byb21vIC5mb3JtX19ncm91cC5pcy0tcHJvbW8tdGV4dCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmh0bWwoJ9Cf0YDQuNC80LXQvdC40YLRjCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuRGF0YSA9ICFidG5EYXRhXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtYXBwbHknLCBidG5EYXRhKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaW5IZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKCcuYWxsSGVpZ2h0JykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgbWluSGVpZ2h0ICsgJ3B4KScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRIZWlnaHQoKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgY2xpZW50V2lkdGhcclxuXHJcbiAgICAgICAgJCgnLnpvb20nKVxyXG4gICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC56b29tKHtcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ2RhdGEtem9vbScpLFxyXG4gICAgICAgICAgICBvblpvb21JbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5pdGVtX19jb250YWluZXJfX2ltZycpLmFkZENsYXNzKCdpcy0taG92ZXInKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblpvb21PdXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaXRlbV9fY29udGFpbmVyX19pbWcnKS5yZW1vdmVDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZW1vdmVab29tKCQod2luZG93KS5vdXRlcldpZHRoKCkpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZW1vdmVab29tKCQod2luZG93KS5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlWm9vbSh3aWR0aCkge1xyXG4gICAgICAgICAgICBpZih3aWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoJy56b29tJykudHJpZ2dlcignem9vbS5kZXN0cm95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHNldE1haW5IZWlnaHQoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRNYWluSGVpZ2h0KCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1zSGVpZ2h0ID0gJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBlbGVtc0hlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRNYWluSGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5tb2RhbCcpLm1vZGFsKHtcclxuICAgICAgICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgbmF2YmFyOiAnLm5hdmJhcicsXHJcbiAgICAgICAgICAgIG5hdmJhcl90b3A6ICcubmF2YmFyX190b3AnLFxyXG4gICAgICAgICAgICBuYXZiYXJfYm90dG9tOiAnLm5hdmJhcl9fYm90dG9tJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAgIGZpeGVkQmFyKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIGNyZWF0ZVBhZGRpbmcoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZpeGVkQmFyKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZGRpbmcoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsICQoJ2hlYWRlcicpLmlubmVySGVpZ2h0KCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlZEJhcihzY3JvbGxUb3AsIGRpcmVjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gMCkgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG4gICAgICAgICAgICBlbHNlICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuXHJcbiAgICAgICAgICAgIGlmKCQod2luZG93KS5pbm5lcldpZHRoKCkgPiAxMjgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhcigpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0JhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZUJhcigpIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dCYXIoKSB7XHJcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKGlkKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpXHJcbiAgICAgICAgICAgIC8vIHRvZ2dsZVNlYXJjaFBhbmVsKHRydWUpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duW2RhdGEtZHJvcGRvd25pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2VhcmNoUGFuZWwoY2xvc2UpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9ICQoJy5uYXZiYXJfX3NlYXJjaCcpXHJcblxyXG4gICAgICAgICAgICBpZihjbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfWVsc2UgaWYocGFuZWwuaGFzQ2xhc3MoJ2lzLS1zaG93JykpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bl9fdGFyZ2V0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnZHJvcGRvd25pZCcpXHJcbiAgICAgICAgICAgIHNob3dEcm9wZG93bihpZClcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnaGVhZGVyJykuaG92ZXIoZnVuY3Rpb24oKSB7fSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI3NlYXJjaF9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvcGVuTW9iaWxlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBmcmFtZXMgPSAkKCdsaS5pcy0tZnJhbWUnKSxcclxuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gZnJhbWVzLmxlbmd0aCAtIDFcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2xpLmlzLS1mcmFtZScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJChmcmFtZXNbY3VycmVudEZyYW1lXSkuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICBjdXJyZW50RnJhbWUtLVxyXG4gICAgICAgICAgICBpZihjdXJyZW50RnJhbWUgPCAwKSBjdXJyZW50RnJhbWUgPSBmcmFtZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgIH0sIDEwMDApXHJcblxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
