var i=0;

$('.btnDropdown').click(function(){
	if(i%2==0){
		$(this).children('span').eq(0).siblings().addClass('change')
	}
	
	else if(i%2==1){
		$(this).children('span').eq(0).siblings().removeClass('change')
	}
	
	i++;
})

$('.nav_left li').hover(
	function(){
		$(this).addClass('current').siblings().removeClass('current')
	},function(){
		$('.nav_left').children('li').eq(0).addClass('current').siblings().removeClass('current')
	},2000)

var h = $('.dynamic_news .news-list').offset().top - $(window).height();
$(window).scroll(function(){
	if($(window).scrollTop()>h){
		$('.backtop').fadeIn(300)
	}
	else{
		$('.backtop').fadeOut(300)
	}
})

$('.backtop').click(function(){
	$('html,body').animate({'scrollTop':'0px'},500)
})