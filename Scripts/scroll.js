
$('a[href="#top"]').click(function() {
    $('html,body').animate({
        scrollTop: $("#top").offset().top},
        'slow');
});

$('a[href="#about"]').click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$('a[href="#work"]').click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top},
        'slow');
});

$('a[href="#contact"]').click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
