$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

function blinker() {
    $('.blink_me').fadeIn(500);
}

setInterval(blinker, 1000); //Runs every second
$(document).ready(function(){
    $("#value-one").click(function(){
        $("#bus-hours").hide();
    });
    $(".btn2").click(function(){
        $("p").show();
    });
});

 $("form").on("submit", function() {
      // store the value of the input with name='age' 
       var age = $(this).find('[name=myfield]').val();
       $("#bus-hours").hide();
    });