(function($) {
    "use strict"
    $(function() {
        
        var canvas = document.getElementById("bRing")
        var ctx = canvas.getContext('2d')
        var img = document.getElementById('bRingImg')

        canvas.height = 604;
        canvas.width = 461;

        ctx.drawImage(img, 0, 0)

        function Light(x, y) {

        } 

    })
})(jQuery);