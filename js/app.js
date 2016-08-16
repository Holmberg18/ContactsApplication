



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
	
	list.push(Contact);
	
	
$(".contactList").append("<div>"+Contact.firstName+" "+Contact.lastName+"</div>");
	
	
});	

	// $(".contactList li").click(function(){
	// alert("Hello");
		// $(".contactInfo ul").append("<li>Hello</li>");
	// });

$(".contactList div").mousedown(function() {
	//trying to select $("")
	
	$(".contactInfo").append("<p>Hello</p>");
	var selectedContact = $(this).text();
	
list.forEach(function(contact) {
	if ((''+contact.firstName+' '+contact.lastName+'') == selectedContact){
		$(".contactInfo").html('<ul><li>'+contact.firstName+' '+contact.lastName+'</li><li>'+contact.phoneNumber+'</li><li>'+contact.street+'</li><li>'+contact.city+'</li><li>'+contact.state+'</li></ul>');
		return;
	}
});

});//end click

return false;
});
