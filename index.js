//esconde os paragrafos com as resposta
//ao clicar na perguntar mostra resposta
$("h3").on("click", function(){
	//$(this).next().toggle();
		$(".faq div").slideUp(600); //hide all
		//$(".faq p").closest('div').slideUp(600); //hide all
	  $(this).next().slideDown(600); //show clicked paragraps

});

//FUNÇÃO DE SCROLL para mostrar seta pra o topo só depois 
$(window).scroll(function(){
	if($(window).scrollTop() > 400){
		$("#arrow").fadeIn();
}
else{
	$("#arrow").fadeOut();
	}
});
