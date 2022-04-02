$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoWidth: true,
        margin: 12,
        items: 1,
        loop: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,
                nav: false,
                dots: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: false,
                dots: false
            }
        }
    });
});


$('.product_owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],

    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false

        },
        600: {
            items: 3,
            dots: true
        },
        1000: {
            items: 5,
            dots: false

        }
    }
})

// strictyy start 
$(window).scroll(function(){
if($(this).scrollTop()> 200)
{
    $(".bottom_header").addClass("strickyy")
    $("#black_color").css("background", "rgba(36,36,36,1)")
}
else 
{
    $(".bottom_header").removeClass("strickyy")
    $("#black_color").css("background", "rgba(36,36,36,0.86)")
}
})

