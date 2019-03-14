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