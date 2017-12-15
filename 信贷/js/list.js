
$(function() {

	//选项框点击
	$(".select-box").bind("click", function() {
		var that = this;
		var dataType = $(that).attr('data-type');

		$(".select-box").not(that).removeClass('on');
		
		$(that).toggleClass(function(index, oldclass) {
			if(oldclass.match("on")) {
				$(".scroll-option-box").stop().fadeOut();
				$("body").removeClass("mengceng");
			} else {
				$("body").addClass("mengceng");

				$(".scroll-option-box." + dataType).fadeIn().siblings('.scroll-option-box').stop().fadeOut();
			}
			return "on";
		});

	})

})

