$(function() {

    /* header */
    $('.burger-button').on('click', function() {
        $('.bar').toggleClass('open');
        $('.header-nav').toggle();/* header-navを表示・非表示 */
        $('body').toggleClass('no-scroll');/* header-navが開いているときはスクロールしない */
    });

    /* リンクをクリックした時の動き */
    // $('.list-item-link').on('click', function() {
        //     $('.bar').removeClass('open');
        //     $('.header-nav').hide();
        // });
    /* リンクをクリックした時の動き */

    /* 他のところをクリックした時の動き */
    $('.header-nav').on('click', function() {
        $('.bar').removeClass('open');
        $('.header-nav').hide();
    });
    /* 他のところをクリックした時の動き */
    /* header */

    /* タブパネル */
    // スライドのスピードを変えるための変数。slideイベントのdurationを調整する。

    /* durationの設定 */
        // 上下のスピードを一定にしたいなら 
        var slidSpeed = 1000;

        // パッと表示・非表示したいなら
        var showHide = 0;

        // 上下にスライドするスピードをバラバラにしたいなら
        var slidUpSpeed = 500;
        var slideDownSpeed = 1000;
    /* durationの設定 */

    // イベントの起点はtabのclick。
    $('.tab').on('click', function() {
        // 選択されている状態のtabからスタイルを除く。
        $('.tab-active').removeClass('tab-active');

        // clickされたtabが選択された状態になる。
        $(this).addClass('tab-active');

        // 対応しているtabとpanelを関連付けるために変数に入れる。
        var panelShow = $(this).attr('rel');

        // 表示されているpanelを上げ下げするイベントの開始。
        $('.panel-show').slideUp(showHide, function() {

            // 選択されているpanelを非表示にする。
            $(this).removeClass('panel-show');
            
            // tabと関連づけられたpanelを表示する。
            $('#'+panelShow).slideDown(showHide, function() {
                $(this).addClass('panel-show');
            });
        });
    });
    /* タブパネル */

    /* slider */
    /* https://www.sejuku.net/blog/103061 */
    var slide = $('.slider-item');/* .slider-itemを変数に格納 */
    /* 画像をスライドさせるための変数の初期化 */
    var counter = 0;
    var index = 0;
    /* 画像をスライドさせるための変数の初期化 */

    $('#next').on('click', function() {
        slide.eq(index).css('display', 'none');
        index = ++counter % slide.length;
        slide.eq(index).fadeIn(1000);
    });
    $('#preview').on('click', function() {
        slide.eq(index).css('display', 'none');
        index = --counter % slide.length;
        slide.eq(index).fadeIn(1000);
    });
    /* slider */

    /* top */
    /* 初期は非表示 */
    $('#toTop').hide();
    $(window).scroll(function() {
        /* スクロールすると */
        if($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
        /* それ以外は非表示 */
            $('#toTop').fadeOut();
        }
    });
    /* to topボタンをクリックすると、 */
    $('#toTop').on('click', function(){
        var scrollSpeed = 2000;/* duration */
        $('html, body').animate({scrollTop: 0}, scrollSpeed);
    });
    /* top */
    
});