
var $ = require('jquery');

$(document).ready(function(){
	
	var counter = 0;
	var list = [];

$("#addButton").click(function(){
	
	if($("#firstName").val())counter++;
	
	var Contact = {
	 firstName: $("#firstName").val(),
	 lastName:  $("#lastName").val(),
	 phoneNumber: $("#phoneNumber").val(),
	 street: $("#street").val(),
	 city: $("#city").val(),
	 state: $("#state").val(),
	};
	
	// list.push(Contact);
	
	var itemContact = $("<li>"+Contact.firstName+" "+Contact.lastName+"</li>");
	itemContact.click(function(){
		$(".contactInfo").html('<ul><li>'+Contact.firstName+' '+Contact.lastName+'</li><li>'+Contact.phoneNumber+'</li><li>'+Contact.street+'</li><li>'+Contact.city+'</li><li>'+Contact.state+'</li></ul>');
	});
	
$(".contactList ul").append(itemContact);
	
	
});	


return false;
});
