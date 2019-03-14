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