 $(document).ready(function() {

   $('.work__slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 1000,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 550,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
                }]

            });
        });