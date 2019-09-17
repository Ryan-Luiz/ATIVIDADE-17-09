// This is a JavaScript file
$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true,	
     });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

            function editImage() {
              
              var gs 		 = $("#gs").val();      // grayscale
              var blur 	 = $("#blu").val();    // blur
              var opacity  = $("#opa").val(); //opacity
              var saturate = $("#sat").val();//saturate


              var filter = 'grayscale(' + gs+ '%) blur(' + blur + 'px) opacity(' + opacity + '%) saturate(' + saturate + '%)';

              $("#imageContainer img").css("filter", filter);

            }
            $("input[type=range]").change(editImage).mousemove(editImage);
