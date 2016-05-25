function logout(){
  $.ajax({
      url: "/Tuhoc/php/logout.php",
      type: "POST",
      dataType: "text",
      success: function(data){
          window.location.href="/Tuhoc";
      },
      erorr: function(a,b,c){

      }

   });
}
