function checkSession(){
  var check;
  $.ajax({
    url: "/Tuhoc/php/session.php",
    type: "GET",
    dataType: "text",
    async: false,
    success: function(data){
      console.log(data);
      if(data != ""){
        check = true;
      }else{
        check = false;
      }
    },
    error: function(a,b,c){
      console.log(a+b+c);
    }
  });
  return check;
}
