// $('#mobile-nav__menu-btn').click(function(){
//     // $('#nav > ul').toggleClass('show grow');
//     $('#nav > ul').animate({
//         height:'300px'
//     }, 500);
// });


$('#mobile-nav__menu-btn').click(function () {
    // $('#nav > ul').toggle(
    $('.mobile-nav__primary-menu').toggle(
        function () {
            $('#nav > ul').animate({
                height: 'auto'
            }, 300)
        },

        function () {
            // $('#nav > ul').animate({
            $('.mobile-nav__primary-menu').animate({
                height: '200px'
            }, 300)
        }
    )});



$(window).resize(function(){

    if ($(window).width() >= 978) {
        $('.mobile-nav__primary-menu').css('display','none');
        //    alert('window is small');

    }

});