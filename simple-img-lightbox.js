// Let's add something to show a staff member's photo whenever that person's name is clicked on
    $(".details_shifts").live('click', function(){

        var staffName;

        // if the "Photos" button has been clicked, we have to remove the image to get the staff member's name and then add it back in so that it will show up if the "Photos" button is clicked again.
        if ( $(this).children("img").length > 0 ){
            //console.log("There's an image");

            var thisImage = $(this).children("img");
            $(this).children("img").remove();
            
            staffName = $(this).html();
            //console.log("staffName is " + staffName);
            $(this).prepend(thisImage);

        } else if ( $(this).children("img").length == 0 ){
            //console.log("No image");
            staffName = $(this).html();
        } /* else {
            console.log("Something went wrong");
        } */


        $("body").append('<div id="lightbox"><div id="lightboxContent"><p style = "color: #fff; ">Click anywhere to close</p><img src="http://intranet.dbrl.org/dir/staff/photos/'+staff[staffName]+'.jpg" /><br><h2 style = "color: #fff; ">' + staffName + '</h2></div></div>')
    });

    // remove the lightbox when the user clicks anywhere on the page
    $("#lightbox").live('click',function(){
        $("#lightbox").remove();
    });


    /*
    Event Specific Logs
    window.addEventListener("scroll", function(){
        console.log("scroll position = " + $(document).scrollTop() );

    });

    var photos = document.getElementById("photos");
    photos.addEventListener("click", function(){
        waitCount = 0;
        console.log("$(\"#photos\").hasClass(\"on\") =  " + $("#photos").hasClass("on") );
    });

    */
