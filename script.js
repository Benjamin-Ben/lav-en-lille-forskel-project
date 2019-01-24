$(document).ready(function(){
    
//--------------------------------// GALLERY //--------------------------------//
	var picArray = ["gallery_1.jpg", "gallery_2.jpg", "gallery_3.jpg", "gallery_4.jpg"];
    
    var index = 0;
    
    //Function for right arrow
    $("#next").click(function(){
        $("#bigPic").animate({right:'-110%'}, '30', function(){
           if(index < picArray.length-1){
               index++;
           }else{
               index=0;
           }
            
            $("#bigPic").animate({right:'0'},'30');
            
            $("#bigPic").attr("src", "images/gallery/"+picArray[index]);
        });
    });//End of function for right arrow
    
    
    //Function for left arrow
    $("#back").click(function(){
        $("#bigPic").animate({right:'110%'}, '30', function(){
           if(index > 0){
               index--;
           }else{
               index=picArray.length-1;
           }
            
            $("#bigPic").animate({right:'0'},'30');
            
            $("#bigPic").attr("src", "images/gallery/"+picArray[index]);
        });
    });//End of function for left arrow
    
    
	
	//--------------------------------// CLEAN Scroll-Down //--------------------------------//
	$("#scroll-event").click(function(){
		$("html, body").animate({scrollTop: $("article").offset().top
     }, 500);
		
	});//End of Event scroll-down
	
	
	$("#scroll-gallery").click(function(){
		$("html, body").animate({scrollTop: $("#gallery-background").offset().top
     }, 500);
		
	});//End of Gallery scroll-down
	
	
	$("#scroll-video").click(function(){
		$("html, body").animate({scrollTop: $("#video-background").offset().top
     }, 500);
		
	});//End of Video scroll-down
	
	
	
	
});//End of jQuery


