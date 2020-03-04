$(document).ready(function() {

    // открыть показ
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000); //подложка
        $('.modal').slideDown(1000); // модальное окно
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});