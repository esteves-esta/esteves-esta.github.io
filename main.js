$(document).ready(function() {

//cores usadas alocadas em variaveis
	var blue, yellow, green, grey;
	blue = "#00B1BD";
	yellow = "#ffb100";
	green = "#8bc34a";
	grey = "#444";

//declarando variaveis jquery
	var $posts = $(".info article");
	var $accentColor = $(".color");
	var $icone = $("#icone"); 
	var $redesIcones = $(".icon");

	// FUNÇÃO PARA MUDAR A COR DAS FONTES E ICONES
	var colorGrey = function(){
		$("li").addClass("hovering");
		$accentColor.not("a").css("color", grey);
		$accentColor.filter("a").addClass("secondcolor");
		$redesIcones.addClass("secondcolor").removeClass("iconcolor");
		$icone.css("fill", grey);
		$posts.css("border-color", grey);
	}

	//ESCONDE OS ARTICLES COM INFORMAÇÕES
	$posts.hide();

//BOTÕES/ EENTOS DE CLIQUE PARA MSOTRAR ARTICLES E MUDAR COR 
	$("li:eq(0)").on("click", function(event){
		$posts.hide();
		$posts.first().show();

		colorGrey();
		$("body").css("background-color", blue);
	});

//BOTÕES/ EENTOS DE CLIQUE PARA MSOTRAR ARTICLES E MUDAR COR 
	$("li:eq(1)").on("click", function(event){
		$posts.hide();
		$posts.first().next().show();

		colorGrey();
		$("body").css("background-color", yellow);
	});

//BOTÕES/ EENTOS DE CLIQUE PARA MSOTRAR ARTICLES E MUDAR COR 
	$("li:eq(2)").on("click", function(event){
		$posts.hide();
		$posts.last().show();

		colorGrey();
		$("body").css("background-color", green);	
	});

	//
	$(".projetando h2:eq(0)").on("mouseenter", () =>{
		$(".img1 img").show();
	});

	$(".projetando h2:eq(0)").on("mouseleave", () =>{
		$(".img1 img").hide();
	});
	
	//----------------------

	$(".projetando h2:eq(1)").on("mouseenter", () =>{
		$(".img2 img").show();
	});

	$(".projetando h2:eq(1)").on("mouseleave", () =>{
		$(".img2 img").hide();
	});

	//----------------------

	$(".projetando h2:eq(2)").on("mouseenter", () =>{
		$(".img3 img").show();
	});

	$(".projetando h2:eq(2)").on("mouseleave", () =>{
		$(".img3 img").hide();
	});

});