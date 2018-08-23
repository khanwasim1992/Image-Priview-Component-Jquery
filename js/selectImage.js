$(function(){

	// Call on image change 		
	$('.imageUpload  input').on('change',function () {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.imageUpload').find('img').attr('src', e.target.result).css({"width":"100px","height":"100px"});
            };
            reader.readAsDataURL(input.files[0]);
        }else{
            $('.imageUpload').find('img').attr('src', 'image/camera.png').css({"width":"auto","height":"auto"});
        }
    }
 
});