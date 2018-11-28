  // Or with jQuery

  $(document).ready(function(){
    $('#first_name').val(localStorage["first_name"]);
    
    $('#first_name').on("input",function(){
        console.log("input");
        localStorage["first_name"] = $('#first_name').val();
    });
    $('#last_name').val(localStorage["last_name"]);
    
    $('#last_name').on("input",function(){
        console.log("input");
        localStorage["last_name"] = $('#last_name').val();
    });
    $('#email').val(localStorage["email"]);
    
    $('#email').on("input",function(){
        console.log("input");
        localStorage["email"] = $('#email').val();
    });
    $('#company').val(localStorage["company"]);
    
    $('#company').on("input",function(){
        console.log("input");
        localStorage["company"] = $('#company').val();
    });
    $('#message').val(localStorage["message"]);
    
    $('#message').on("input",function(){
        console.log("input");
        localStorage["message"] = $('#message').val();
    });
  });
