$(document).ready(function() {
  var input = $("#chatBoxInput");
  var button = $("#send");
  var message;
  var formInputName = $("#username");
  var formInputPassword = $("#password");
  var userName;
  var userName1;
  var passWord;
  var signOut =$("#signOut");
  formInputName.on("keyup",function(){
     userName = $(this).val();
  });
  formInputPassword.on("keyup",function(){
    passWord = $(this).val();
  });
  $("#submit").on("click",function(){
    formInputName.val("");
    formInputPassword.val("");
    if (userName=="Daniel" && passWord=="1"||userName=="John" && passWord=="2") {
      $(".Container").fadeIn(1000);
      userName1 = userName;
      userName1+=": ";
    }
    else{
      alert("Password or Username is wrong")
    }
  });
  input.on("keyup",function(e){
     message = $(this).val();
     if (e.which=="13") {
       input.val("");
       var tag = $("<p></p>");
       var tagUsername = $("<span></span>");
       tagUsername.append(userName1);
       tag.append(message);
       tag.prepend(tagUsername);
       tag.addClass("message");
       $(".messageDisplay").append(tag);
     }
  });

  button.on('click',function(){
    input.val("");
    var tag = $("<p></p>");
    var tagUsername = $("<span></span>");
    tagUsername.append(userName1);
    tag.append(message);
    tag.prepend(tagUsername);
    tag.addClass("message");
    $(".messageDisplay").append(tag);
  });
  signOut.on("click",function(){
    userName1 = "";
    passWord = "";
    $(".messageDisplay").text("");
    $(".Container").fadeOut(1000);
  })
});
