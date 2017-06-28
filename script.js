$(document).ready(function(){
			$("button").click(function(){
				var fName = $("#first").val();
				var lName = $("#last").val();
				var description = $("textarea").val();
				$("#right").append("<fieldset><legend>"+fName+" "+lName+"</legend><p id = 'back'> "+description+"</p><p id='click'>Click Here For the Description</fieldset>");

        $("#first").val("");
				$("#last").val("");
				$("#desc").val("");

        return false;
			});
			$(document).on('click', '#click', function(){
				$(this).siblings().show();
        $(this).hide();
			});

		});
