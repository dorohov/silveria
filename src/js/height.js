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