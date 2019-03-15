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