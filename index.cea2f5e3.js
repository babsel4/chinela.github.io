$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.closed__nav').toggleClass('clicked');
        $('#mobile__dropdown').slideToggle();
    });
    var wow = new WOW();
    wow.init();
    setTimeout(()=>{
    }, 3000);
    setTimeout(()=>{
        $("#page__loader").fadeOut();
        $("body").removeClass('overflow-hidden');
    }, 5000);
});

//# sourceMappingURL=index.cea2f5e3.js.map
