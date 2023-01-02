    // login function
    function loginbtn(){
        var username = $("#username").val();
        var password = $("#pass").val();
      
        if( username == ""){
        $(".staffId").removeClass("hidden");
        } 
        else if ( username.length != 8 ){
        $(".staffIdlenght").removeClass("hidden");
        } 
        else if(password == ""){
        $(".staffPassword").removeClass("hidden");
        }
        else {
            var data = {
                Username: username,
                Password: password
        
            }
            console.log(data);
            $.ajax({ 
                type: "POST",
                url: "login.php",
                data: data,
                
                error: function () {
                    swal("Oops!", "An unexpected error occurred while procesing your request. Please contact support", "error")
                        .then(() => {
                            $('#containerDiv').css('display', 'block');
                        });
                },
                success: function (data) {
                  $(".valid_P").addClass("hidden");
                 $(".valid_UserName").addClass("hidden");
                    
                  if (data == 1){
                 $(".valid_login").removeClass("hidden");
                  }
                  else if(data == 2){
                    console.log(data);
                    window.location.href = "home.php";
      
                  }
         
                }
            })
        
        }
      }
      
      
      $(document).ready(function(){
        $("#username").focus(function () {
          $(".staffId").addClass("hidden");
          $(".staffIdlenght").addClass("hidden");
          return false;
        
        });  
      });
      $(document).ready(function(){
        $("#pass").focus(function () {
          $(".staffPassword").addClass("hidden"); 
        });  
      });