$(document).ready(function(){
	  $("p").hide();
	  $("#button-cache").hide();

$("#button-cache").click(function(){
   		$("p").hide();
 		$("#button-cache").hide();
 		$("#button").show();

  });
 $("#button").click(function(){
    	$("p").show();
     	$("#button-cache").show();
     	$("#button").hide();
     
  });
});