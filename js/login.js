$(document).ready(function(){
  $("#form").submit(function(e){
    var data = new FormData(document.getElementById("form2"));
    $.ajax({
      url: "php/login.php",
      data: data,
      type: "POST",
      dataType: "text",
      async: false,
      success: function(data){
        alert("Login Success");
        window.location.href = "/Tuhoc/admin";
      },
      error: function(a,b,c){
        console.log(a+b+c);
      },
      cache: false,
      contentType: false,
      processData: false
    });
    e.preventDefault();
    return false;
  });
});
