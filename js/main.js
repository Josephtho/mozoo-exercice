'use strict';

function modifyClassicWidthOnSliding(ui){
	var widthClassic = ui['value'];
	$('.classic').css("width", widthClassic+"%")
}

function displayZeroTitle(ui){
	if(ui['value'] < 18){
		$('.title').fadeIn(700);		
	} else {
		$('.title').fadeOut(700);		
	}
}


//DOM ready
$(function(){

	//Init et settings slider
	$('#slider').slider({
		animate: 'fast',
		max: 100,
		min: 0,
		step: 1,
		value: 50,
		slide: function(event, ui){
					modifyClassicWidthOnSliding(ui);
					displayZeroTitle(ui);}
	});

	//Petit fix pour harmoniser la taille de section sur tous supports
	var sectiontWidth = 0.80*$('section.container').height();
	$("section.container").css('max-width', sectiontWidth)


})