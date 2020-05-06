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
    if ($(window).width() < 700) {
        $("nav").removeClass(".show-menu").fadeOut(250);
    }
});

//Ensure menu appears when screen is resized
//(Fixes an issue in which after the hamburger menu was opened 
//and closed, then changed to desktop size, menu would disappear)
$(window).resize(function () {
    if ($(window).width() >= 700) {
        $("nav").show();
    } else ($("nav").hide())
});

//Scrolls to mission on click of button
$(".mission-nav").click(function () {
    $("html, body").animate({
        scrollTop: $(".mission").offset().top
    }, 1000)
})

//Scrolls to services on click of button
$(".services-nav").click(function () {
    $("html, body").animate({
        scrollTop: $(".services").offset().top
    }, 1000)
})

//Scrolls to contact on click of button
$(".contact-nav").click(function () {
    $("html, body").animate({
        scrollTop: $(".contact-form").offset().top
    }, 1000)
})

function getInsta() {
    fetch('https://www.instagram.com/goblue42agency/?__a=1')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(response => {
            handleResponse(response)
        })
        .catch(err => handleError(err))

}

function handleResponse(response) {
    console.log(response)
    const media = response.graphql.user.edge_owner_to_timeline_media.edges
    $('.description').append(response.graphql.user.biography)
    for (let i = 0; i < media.length; i++) {
        const url = media[i].node.display_url
        const image = document.createElement('IMG')
        image.src = url
        $('.posts').append(image)
    }
}

function handleError(err) {
    $('.posts').append('<p class=error>Instagram feed could not be loaded.</p>')
}


$(document).ready(getInsta)