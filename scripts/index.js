$(function(){
	
	var str='<div class="yl-consultation">'
		+'<ul>'
			+'<li id="consultationRx">'
			+'	<div class="yl-consultation01 yl-bj01">'
			+'		<div class="consultationRxXz"><i class="yl-ico01"></i><p>咨询热线</p></div>'
				+'	<div class="yl-consultation02">400-101-1370</div>'
			+'	</div>'
			+'</li>'
			+'<li>'
			+'	<a class="zxzx" href="http://p.qiao.baidu.com/cps/chat?siteId=12538880&userId=25391573" target="_blank"><div class="yl-consultation01 yl-bj02"><i class="yl-ico05"></i><p>在线客服</p></div></a>'
		+'	</li>'
			+'<li>'
			+'	<a class="zxzx" href="http://p.qiao.baidu.com/cps/chat?siteId=12538880&userId=25391573" target="_blank"><div class="yl-consultation01 yl-bj03"><i class="yl-ico02"></i><p>售前技术</p></div></a>'
			+'</li>'
			+'<li>'
			+'	<a class="zxzx" href="http://p.qiao.baidu.com/cps/chat?siteId=12538880&userId=25391573" target="_blank"><div class="yl-consultation01 yl-bj04"><i class="yl-ico04"></i><p>产品经理</p></div></a>'
			+'</li>'
			+'<li>'
			+'	<a class="zxzx" href="http://p.qiao.baidu.com/cps/chat?siteId=12538880&userId=25391573" target="_blank"><div class="yl-consultation01 yl-bj05"><i class="yl-ico03"></i><p>项目经理</p></div></a>'
			+'</li>'
			+'<li id="consultationWx">'
			+'<div class="yl-consultation01">'
			+'	<div class="consultationWxXz yl-bj06"><i class="yl-ico06"></i><p>微信</p></div>'
			+'<div class="consultationWxCon">'
			+'	<img src="../picture/wxewm.jpg"/*tpa=http://www.mingqibao.com/picture/wxewm.jpg*//>'
			+'	<p>扫码关注我们</p>'
			+'</div>'
			+'</div>'
			+'</li>'
			+'</ul>'
			+'</div>';
		$('body').append(str);
	
 
	//$('body').append(str);
	
	 $('.LeftBan').on('click',function(){
			$('.LeftBanZk').animate({width:"100%"},300);
		})
		$('.LeftBanZk .close').on('click',function(){
			$('.LeftBanZk').animate({width:"0px"},300);
		})
	//导航
	$(window).scroll(function(){
    if($(window).scrollTop()>90){
      $('.yl-top').slideUp(500);
			$('.yl-menu').css({
				"top":"0px"
			})
    }else{
			$('.yl-top').slideDown(500);
			$('.yl-menu').css({
				"top":"40px"
			})
    }
	});
	//	商桥链接
	 
	
	$(".msave").click(function () {
		if($("#phone").val()==""&&$("#phone1").val()=="")
		{alert("请输入联系方式!");
		return;
		}
		var vl=$("#phone").val();
		if(vl==""||vl==null)
			{
			vl=$("#phone1").val();
			}
		var nl=$("#username").val();
		if(nl==""||nl==null)
			{
			nl='未留姓名';
			}
            $.ajax({
                url: "/pm/addmsg",
                type: "Post",
                data: {
                    "name": nl,
                    "phone":vl,
                    "content":$("content").val()
                },
                dataType: "json",
                success: function (data) {
                	 alert(data.desc);
                },
                error: function () {

                }
            });
	});
})

function goBack(){ 
	window.history.go(-1);
}  

 