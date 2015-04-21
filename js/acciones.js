// JavaScript Document
$(document).ready(function(e) { 
//  document.addEventListener("deviceready",function(){
$('#btndatos').on ('click',function(){
	alert('hola');	
	$('body').pagecontainer("change","#datos",{transition:"flip"});
}) //cierra clikc btndatos/ 
$('#btnresultado').on ('click',function(){
	
	$('body').pagecontainer("change","#resultado",{transition:"flip"});
	var imc;
	var peso =$ ('#txtpeso').val();
	var talla=$('#txttalla').val();
	alert(peso);
	alert(talla);
	var total= peso/(talla*talla)
	alert(total)
	
});
//  }); 
});

