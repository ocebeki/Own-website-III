$(document).ready(function () {
                   // init
                   var controller = new ScrollMagic.Controller({
                       globalSceneOptions: {
                           triggerHook: 'onLeave'
                       }
                   });

                   // get all slides
                   var slides = document.querySelectorAll("section.panel");

                   // create scene for every slide
                   for (var i = 0; i < slides.length; i++) {
                       new ScrollMagic.Scene({
                               triggerElement: slides[i]
                           })
                           .setPin(slides[i])

                       .addTo(controller);
                   }



// triggers points------------------ 
	    new ScrollMagic.Scene({triggerElement: ".contact"})
					.setClassToggle(".contact__envelop", "zoomInDown")
					.addTo(controller);
    	new ScrollMagic.Scene({triggerElement: ".contact"})
					.setClassToggle(".nav__menuButtonItem", "color")
					.addTo(controller);
//        new ScrollMagic.Scene({triggerElement: ".work"})
//					.setClassToggle(".work__iconsBox:nth-child(odd)", "fadeInLeftBig")
//					.addTo(controller);
//        new ScrollMagic.Scene({triggerElement: ".work"})
//					.setClassToggle(".work__iconsBox:nth-child(even)", "fadeInRightBig")
//					.addTo(controller);
//    
    new ScrollMagic.Scene({triggerElement: ".work"})
					.setClassToggle(".work__iconsBox", "bounceIn")
					.addTo(controller);
    

    
    
    
});