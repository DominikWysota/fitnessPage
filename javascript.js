const block = ['.flexFacilities>div:nth-child(1)', '.flexFacilities>div:nth-child(2)',
    '.flexFacilities>div:nth-child(3)', '.flexFacilities>div:nth-child(4)'
];

let photo = 0;

$(document).ready(function () {
    //Code to Facilities block
    $(block[0]).click(function () {
        $(this).toggleClass("active");
        for (let i = 1; i < 4; i++) {
            $(block[i]).removeClass("active");
        }
    });
    $(block[1]).click(function () {
        $(this).toggleClass("active");
        $(block[0]).removeClass("active");
        $(block[2]).removeClass("active");
        $(block[3]).removeClass("active");
    });
    $(block[2]).click(function () {
        $(this).toggleClass("active");
        $(block[0]).removeClass("active");
        $(block[1]).removeClass("active");
        $(block[3]).removeClass("active");
    });
    $(block[3]).click(function () {
        $(this).toggleClass("active");
        for (let i = 0; i < 3; i++) {
            $(block[i]).removeClass("active");
        }
    });
    //Code to Gallery block
    $(".rightButton").click(function () {
        if (photo < 3) {
            photo++
            $(".photo").animate({
                left: '-=100%'
            });
        }
    });
    $(".leftButton").click(function () {
        if (photo > 0) {
            photo--
            $(".photo").animate({
                left: '+=100%'
            });
        }
    });

    //Nav hamburger
    $("#menuMobile").fadeOut(1);
    $(".hamburger").click(function () {
        $("#menuMobile").slideToggle();
    });
})