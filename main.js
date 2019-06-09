 var a = {
        row: `<li class="comment" >
											<div class="comment-block">
												<a href="#" class="image-avatar">
													<img src="images/photos/avatar-1.jpg" data-ot-retina="images/photos/avatar-1@2x.jpg" alt="" title="" />
												</a>
												<div class="comment-text">
													<span class="time-stamp right">{0}</span>
													<strong class="user-nick"><a href="#">{1}</a><span class="user-label">Author</span></strong>
													<div class="shortcode-content">
														{2}
													</div>
													<a class="reply-button read-more-button" href="#"><i class="fa fa-mail-forward right"></i>Reply this comment</a>
												</div>
											</div>
										</li>`,
        
    };

    row= a.row;
    function add(){
    	var d = new Date();
    	//alert(d);
        //alert(row);
        var nickname1 = document.getElementById("nickname1").value;
        var email1 = document.getElementById("email1").value;
         var web1 = document.getElementById("web1").value;
        var comment1 = document.getElementById("comment1").value;
       // alert(email1.indexOf('@'));

        if( nickname1 != '' && comment1 != '' && web1 != '' && (email1.indexOf('@') > 0) ){
        	addSession(nickname1);
        	$('#comments').append(
         	`<li class="comment" >
											<div class="comment-block">
												<a href="#" class="image-avatar">
													<img src="images/photos/avatar-1.jpg" data-ot-retina="images/photos/avatar-1@2x.jpg" alt="" title="" />
												</a>
												<div class="comment-text">
													<span class="time-stamp right">` +d+ `</span>
													<strong class="user-nick"><a href="#">`+nickname1+`</a></strong>
													<div class="shortcode-content">
														`+comment1+ ` &emsp;<i class="fas fa-trash-alt"></i>
													</div>
													
												</div>
											</div>
										</li>`
         	);

         	//alert(sessionStorage.getItem("yourName"));
        window.location= 'post.html#comments';
        $("#success-alert").show();
        window.setTimeout(function (){
        	$("#success-alert").hide();
        },2000);
        document.getElementById("nickname1").value = '';
        document.getElementById("email1").value = '';
        document.getElementById("web1").value = '';
        document.getElementById("comment1").value = '';
        }
        else{
        	 $("#success-alert2").show();
        window.setTimeout(function (){
        	$("#success-alert2").hide();
        },2000);
        }
         
         
    }
    function addSession(val){
    	sessionStorage.setItem("yourName", val);
    }

    function subscribe(){
    	var yourName = document.getElementById("yourName").value;
        var email = document.getElementById("email").value;
    	if( yourName != '' && email != ''){
    	 $("#success-alert1").show();
    	  window.setTimeout(function (){
        	$("#success-alert1").hide();
        },2000);
    	}
    	else{
    		$("#success-alert2").show();
        window.setTimeout(function (){
        	$("#success-alert2").hide();
        },2000);
    	}
       
    }
    function reply(a){
        var name = sessionStorage.getItem("yourName");
    		var reply = document.getElementById("reply"+a).value;
            var d = new Date();

 $('.reply'+ a).append(
    		`<ul class="children">
				<li class="comment">
					<div class="comment-block">
					<a href="#" class="image-avatar">
						<img src="images/photos/avatar-1.jpg" data-ot-retina="images/photos/avatar-1@2x.jpg" alt="" title="" />
					</a>
					<div class="comment-text">
						<span class="time-stamp right">` + d + `</span>
							<strong class="user-nick"><a href="#">`+ name +`</a></strong>
							<div class="shortcode-content">
							<p>` + reply + `</p>
															</div>
														
														</div>
													</div>
												</li>
											</ul>`);

    }

    $(document).ready (function(){
    	$("#success-alert").hide();
    	$("#success-alert1").hide();
    	$("#success-alert2").hide();
    	$("#success-alert3").hide();
    	// $("#myWish").click(function showAlert(){
    	// 	$("#success-alert").alert();
    	// })
    });

     $('#comments').on('click', '.fas', function (e) {
                var selectedRow = $(this).closest('.comment');
                selectedRow.remove();
                $("#success-alert3").show();
		        window.setTimeout(function (){
		        	$("#success-alert3").hide();
		        },2000);
            });