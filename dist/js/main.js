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
window.onload = function() {
    var canvas = document.getElementById("bRing")
    var ctx = canvas.getContext('2d')

    var canvasB = document.getElementById("bRingB")
    var ctxB = canvasB.getContext('2d')


    var img = document.getElementById('bRingImg')
    var frames = document.querySelectorAll('#bRingSlides > img')
    var alpha = .3,   /// current alpha value
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
            if (alpha <= 0 || alpha >= .5) delta =- delta;
            
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJjYXJkLmpzIiwiZHJvcGRvd24uanMiLCJmaWx0ZXIuanMiLCJmb3Jtcy5qcyIsImhlaWdodC5qcyIsIml0ZW1fem9vbS5qcyIsIm1vZGFscy5qcyIsIm5hdmJhci5qcyIsInJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBibG9ja3MgPSAkKCcuX19hbmltYXRlJylcclxuICAgICAgICBhbmltYXRlTWUoKVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlTWUoKSB7XHJcbiAgICAgICAgICAgIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkJykuYWRkQ2xhc3MoJ2dvJykuYWRkQ2xhc3MoJ2ZhZGVJblVwJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKS5yZW1vdmVDbGFzcygnZ28nKS5yZW1vdmVDbGFzcygnZmFkZUluVXAnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXNIb3ZlciA9IHRydWVcclxuICAgICAgICB2YXIgZWxlbVxyXG5cclxuICAgICAgICAkKCcuY2FyZCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbGVtID0gJCh0aGlzKVxyXG4gICAgICAgICAgICBlbGVtLmFkZENsYXNzKCdpcy0taG92ZXInKVxyXG4gICAgICAgICAgICBpc0hvdmVyID0gZmFsc2VcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgaXNIb3ZlciA9IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5jdXN0b21zZWxlY3RfX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuY3VzdG9tc2VsZWN0JykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmN1c3RvbXNlbGVjdCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApICQoJy5jdXN0b21zZWxlY3QnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wb3B1cCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcucG9wdXBfX2NvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnBvcHVwX19jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCgnLmNhdGFsb2dfX2NhdGVnb3J5X19maWx0ZXInKVxyXG4gICAgICAgIHZhciBpdGVtcyA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgdmFyIGJ0blN0YXJ0VGV4dFxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCQoZmlsdGVyc1tpXSkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gaXRlbXNbaV0ubGVuZ3RoOyBqID4gMjsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zW2ldW2pdKS5oaWRlKCkuYWRkQ2xhc3MoJ2lzLS1oaWRkZW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fY2F0ZWdvcnlfX2ZpbHRlcl9fYWxsbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighZWxlbS5oYXNDbGFzcygnaXMtLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuU3RhcnRUZXh0ID0gZWxlbS5odG1sKClcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9ICQodGhpcykuc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpJylcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNob3coKVxyXG4gICAgICAgICAgICAgICAgZWxlbS5odG1sKCfQodC60YDRi9GC0YwnKVxyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLnNpYmxpbmdzKCd1bCcpLmNoaWxkcmVuKCdsaS5pcy0taGlkZGVuJykuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICBlbGVtLmh0bWwoYnRuU3RhcnRUZXh0KVxyXG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNmaWxzaG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLWZpbHRlcnMtb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5vdmVybGF5Jykuc2hvdygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKClcclxuICAgICAgICAgICAgJCgnLm92ZXJsYXknKS5oaWRlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjZmlsY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKClcclxuICAgICAgICAgICAgJCgnLm92ZXJsYXknKS5oaWRlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZmF2b3JpdGVfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5pdGVtX19jb250YWluZXJfX2J0bnMuaXMtLWZhdm9yaXRlIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5pdGVtX19jb250YWluZXJfX2J0bnMuaXMtLWZhdm9yaXRlJykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLnBhc3NfdG9nIGJ1dHRvbi5pcy0tcGFzcy1zaG93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpXHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2J1dHRvbi5pcy0tcGFzcy1oaWRlJykuc2hvdygpXHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0JykuYXR0cigndHlwZScsICd0ZXh0JylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcucGFzc190b2cgYnV0dG9uLmlzLS1wYXNzLWhpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnYnV0dG9uLmlzLS1wYXNzLXNob3cnKS5zaG93KClcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5hdHRyKCd0eXBlJywgJ3Bhc3N3b3JkJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudXNlcl9fb3JkZXJzX190YWJsZV9fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX19ib2R5Jykuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX190b3AnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKCcudXNlcl9fb3JkZXJzX190YWJsZV9fbGluZV9fYm9keV9faW5uZXJfX2FycicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX19ib2R5Jykuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX19ib2R5Jykuc2libGluZ3MoJy51c2VyX19vcmRlcnNfX3RhYmxlX19saW5lX190b3AnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX2JvZHknKS5zaWJsaW5ncygnLnVzZXJfX29yZGVyc19fdGFibGVfX2xpbmVfX3RvcCcpLmNoaWxkcmVuKCcudXNlcl9fb3JkZXJzX190YWJsZV9fYXJyb3cnKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNvdW50YmxvY2sgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9ICQodGhpcykuc2libGluZ3MoJ2lucHV0JylcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWwgPSBpbnB1dC52YWwoKVxyXG4gICAgICAgICAgICBpZihpc05hTihjdXJyZW50VmFsKSkgY3VycmVudFZhbCA9IDFcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLW1pbnVzJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS52YWwoY3VycmVudFZhbCAtIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1wbHVzJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWwgPCAxMDAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpLnZhbChOdW1iZXIoY3VycmVudFZhbCkgKyAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKTtcclxuXHJcbiAgICAgICAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW4tcGhvbmUnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBob25lSW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZUlucHV0c1tpXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXRIZWlnaHQoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJCgnLmFsbEhlaWdodCcpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIG1pbkhlaWdodCArICdweCknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SGVpZ2h0KClcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoXHJcblxyXG4gICAgICAgICQoJy56b29tJylcclxuICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgICAgICAucGFyZW50KClcclxuICAgICAgICAuem9vbSh7XHJcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXpvb20nKSxcclxuICAgICAgICAgICAgb25ab29tSW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaXRlbV9fY29udGFpbmVyX19pbWcnKS5hZGRDbGFzcygnaXMtLWhvdmVyJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25ab29tT3V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLml0ZW1fX2NvbnRhaW5lcl9faW1nJykucmVtb3ZlQ2xhc3MoJ2lzLS1ob3ZlcicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVtb3ZlWm9vbSgkKHdpbmRvdykub3V0ZXJXaWR0aCgpKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmVtb3ZlWm9vbSgkKHdpbmRvdykub3V0ZXJXaWR0aCgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVpvb20od2lkdGgpIHtcclxuICAgICAgICAgICAgaWYod2lkdGggPD0gNzY4KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuem9vbScpLnRyaWdnZXIoJ3pvb20uZGVzdHJveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5tb2RhbCcpLm1vZGFsKHtcclxuICAgICAgICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgbmF2YmFyOiAnLm5hdmJhcicsXHJcbiAgICAgICAgICAgIG5hdmJhcl90b3A6ICcubmF2YmFyX190b3AnLFxyXG4gICAgICAgICAgICBuYXZiYXJfYm90dG9tOiAnLm5hdmJhcl9fYm90dG9tJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAgIGZpeGVkQmFyKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIGNyZWF0ZVBhZGRpbmcoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZpeGVkQmFyKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVBhZGRpbmcoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsICQoJ2hlYWRlcicpLmlubmVySGVpZ2h0KCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlZEJhcihzY3JvbGxUb3AsIGRpcmVjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gMCkgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG4gICAgICAgICAgICBlbHNlICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuXHJcbiAgICAgICAgICAgIGlmKCQod2luZG93KS5pbm5lcldpZHRoKCkgPiAxMjgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhcigpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0JhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZUJhcigpIHtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dCYXIoKSB7XHJcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKGlkKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpXHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaFBhbmVsKHRydWUpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duW2RhdGEtZHJvcGRvd25pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2VhcmNoUGFuZWwoY2xvc2UpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9ICQoJy5uYXZiYXJfX3NlYXJjaCcpXHJcblxyXG4gICAgICAgICAgICBpZihjbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgfWVsc2UgaWYocGFuZWwuaGFzQ2xhc3MoJ2lzLS1zaG93JykpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5kcm9wZG93bl9fdGFyZ2V0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnZHJvcGRvd25pZCcpXHJcbiAgICAgICAgICAgIHNob3dEcm9wZG93bihpZClcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnaGVhZGVyJykuaG92ZXIoZnVuY3Rpb24oKSB7fSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI3NlYXJjaF9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKClcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvcGVuTW9iaWxlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Iiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYlJpbmdcIilcclxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICAgIHZhciBjYW52YXNCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiUmluZ0JcIilcclxuICAgIHZhciBjdHhCID0gY2FudmFzQi5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG5cclxuICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYlJpbmdJbWcnKVxyXG4gICAgdmFyIGZyYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNiUmluZ1NsaWRlcyA+IGltZycpXHJcbiAgICB2YXIgYWxwaGEgPSAuMywgICAvLy8gY3VycmVudCBhbHBoYSB2YWx1ZVxyXG4gICAgICAgIGRlbHRhID0gMC4wMjtcclxuXHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjA0O1xyXG4gICAgY2FudmFzLndpZHRoID0gNDYxO1xyXG5cclxuICAgIGNhbnZhc0IuaGVpZ2h0ID0gNjA0O1xyXG4gICAgY2FudmFzQi53aWR0aCA9IDQ2MTtcclxuXHJcbiAgICBjdHhCLmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuXHJcbiAgICB2YXIgZnBzID0gMztcclxuICAgIHZhciBmcmFtZSA9IDA7XHJcbiAgICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFscGhhICs9IGRlbHRhO1xyXG4gICAgICAgICAgICBpZiAoYWxwaGEgPD0gMCB8fCBhbHBoYSA+PSAuNSkgZGVsdGEgPS0gZGVsdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGZyYW1lc1tmcmFtZV0sIDExMCwgMCwgMjQxLCAxNjQpXHJcbiAgICAgICAgICAgIGlmKGZyYW1lIDwgNSkgZnJhbWUrK1xyXG4gICAgICAgICAgICBlbHNlIGlmKGZyYW1lID49IDUpIGZyYW1lID0gMFxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gICAgICAgIH0sIDEwMDAgLyBmcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKVxyXG59Il19
