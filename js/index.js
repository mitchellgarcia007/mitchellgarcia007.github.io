$(document).ready(function(){

    $("nav").hide();
	$("#mainmain").fadeIn(3000);

	$(".spanish").hide();
	

	$(".toSpanish").click(function(){
		$(".english").hide();
        $(".spanish").show();
    });

	$(".toEnglish").click(function(){
		$(".spanish").hide();
        $(".english").show();
    });

	$("#menu_mobile").click(function(){
		$("#menu_mobile").hide();	
		$("#menu_mobile_close").css("display", "block");
		$("nav").slideDown();
    });

	$("#menu_mobile_close").click(function(){
		$("#menu_mobile_close").hide();
		$("#menu_mobile").show();	
		$("nav").slideUp();
    });

	$(".toSpanish_mobile").click(function(){
		$("#menu_mobile_close").hide();
		$("#menu_mobile").show();
		$("nav").slideUp();
	});

	$(".toEnglish_mobile").click(function(){
		$("#menu_mobile_close").hide();
		$("#menu_mobile").show();
		$("nav").slideUp();
	});


});