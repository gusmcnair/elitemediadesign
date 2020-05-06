//Expand mobile menu upon clicking hamburger icon
$(".hamburger").click(function () {
    if ($("nav").hasClass(".show-menu")) {
        $("nav").removeClass(".show-menu").fadeOut(250);
    }
    else {
        $("nav").addClass('.show-menu').fadeIn(250);
    }
});

//Auto-closes mobile menu after a link has been clicked.
$("li").click(function () {
    if ($(window).width() < 800) {
        $("nav").removeClass(".show-menu").fadeOut(250);
    }
});

//Ensure menu appears when screen is resized
//(Fixes an issue in which after the hamburger menu was opened 
//and closed, then changed to desktop size, menu would disappear)
$(window).resize(function () {
    if ($(window).width() >= 800) {
        $("nav").show();
    } else ($("nav").hide())
});

    //Scrolls to mission on click of button
    $(".mission-nav").click(function (){
        $("html, body").animate({
            scrollTop: $(".mission").offset().top
        }, 1000)
        })

    //Scrolls to services on click of button
    $(".services-nav").click(function (){
        $("html, body").animate({
            scrollTop: $(".services").offset().top
        }, 1000)
        })

    //Scrolls to contact on click of button
    $(".contact-nav").click(function (){
        $("html, body").animate({
            scrollTop: $(".contact-form").offset().top
        }, 1000)
        })