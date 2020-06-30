$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".custom-nav").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".custom-nav").removeClass("active");
    }
});
