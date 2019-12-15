$(document).ready(function() {
    $('#menu ').click(function() {
        $(' #menu li').removeClass("active");
        $(this).addClass("active"); 
    });


});

$(document).ready(function () {
			// None of the options are set
			$("#makeMeScrollable").smoothDivScroll({
				autoScrollingMode:"onStart"
			});
		});

