$(function(){
    $('#change-color').on('click',function(){
        // 色変え
        $('#target').css('color','red');
    });

    $('#change-text').on('click',function(){
        // 文字変え
        $('#target').text('変わりました');
    });

    $('#fade-out').on('click',function(){
        // フェードアウト
        $('#target').fadeOut();
    });

    $('#fade-in').on('click',function(){
        // フェードイン
        $('#target').fadeIn();
    });
});