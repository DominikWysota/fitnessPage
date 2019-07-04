const block = ['.flexFacilities>div:nth-child(1)', '.flexFacilities>div:nth-child(2)',
    '.flexFacilities>div:nth-child(3)', '.flexFacilities>div:nth-child(4)'
];

$(document).ready(function () {
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
})