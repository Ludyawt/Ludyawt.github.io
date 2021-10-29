$(document).ready(function(){
    $('.page-scroll').on('click', function(e){
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);
        $('body').animate({
            scrollTop: elemenTujuan.offset().top - 100
        }, 2000, 'swing');
        e.preventDefault();
    });
});