$(function(){
        $("#open").show();
        $("#close").hide();
    // アイコンをクリック
	$("#open").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
	});
 
    // アイコンをクリック
	$("#close").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").show();
        $("#close").hide();
	});
});    

$(function () {
    var topBtn = $('#pagetop');
    topBtn.hide();
    //スクロールが300に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function(){
    $('.slider').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 5000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 4, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

  $(function() {
 
    // フェードインさせる
    $('.terop p').hide().fadeIn('slow');
   
  });

// ローディング

  $(function(){
    //読み込みが完了したら実行する
    $(window).on('load',function(){
      //ローディングアニメーションをフェードアウト
      $('.loader').delay(600).fadeOut(600);
      //背景色をフェードアウト
      $('.loader-bg').delay(900).fadeOut(800);
  });
  
    //ページの読み込みが完了してなくても5秒後にアニメーションを非表示にする
    setTimeout(function(){
      $('.loader-bg').fadeOut(600);
    },5000);
  });
