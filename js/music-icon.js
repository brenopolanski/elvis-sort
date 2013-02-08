/* -------------------------------------------------------------- 
   Initialize Note Icon
-------------------------------------------------------------- */
$(document).ready(function() {
    var SoapBubbleMachineNumber1 = $('fn').BubbleEngine({
        particleSizeMin:            0,
        particleSizeMax:            30,
        particleSourceX:            $(window).width()/2-500,
        particleSourceY:            350,
        particleAnimationDuration:  5000,
        particleDirection:          'center',
        particleAnimationDuration:  2000,
        particleAnimationVariance:  500,
        particleScatteringX:        50,
        particleScatteringY:        100,
        gravity:                    -100
    });
    //Start Note Icon Machine
    SoapBubbleMachineNumber1.addBubbles(5);
});