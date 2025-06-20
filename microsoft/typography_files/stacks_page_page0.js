
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_100_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_100_page0 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_100_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
$(document).ready(function() {
	CR_Init();
});

function CR_Init(){
	var ua = navigator.userAgent.toLowerCase(); 
 if (ua.indexOf('safari')!=-1){ 
   if(ua.indexOf('chrome')  > -1){
		//////chrome///////
   }else{
	$('.CR3_R').addClass("CR3_RS");
    $('.CR4').addClass("CR4_S");
	$('.CR5').addClass("CR5_S");
	$('.CR6').addClass("CR6_S");
	$('.CR3_RS').removeClass("CR3_R");
	$('.CR4_S').removeClass("CR4");
	$('.CR5_S').removeClass("CR5");
	$('.CR6_S').removeClass("CR6")
   }
  }	
};
  
	return stack;
})(stacks.stacks_in_100_page0);


// Javascript for stacks_in_37_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_37_page0 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_37_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Offsite v1.6.4 Copyright @2010-2012 Joe Workman --//

$(document).ready(function(){$(".resizable").resizable({handles:"all",autoHide:true,animate:true,ghost:true,minWidth:500,minHeight:500,maxWidth:700,maxHeight:700})});

	return stack;
})(stacks.stacks_in_37_page0);


