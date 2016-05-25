$(function(){
	$("#death").change(function(){
		$("#death-year").css("display","inline");
	});
	$("#alive").change(function(){
		$("#death-year").css("display","none");
	});
	$("#confimation").on("blur",function(){
		if($("#confimation").val() !== ""){
			$("#bishop").css("display","block");
			$("#sponsor").css("display","block");
		}else{
			$("#bishop").css("display","none");
			$("#sponsor").css("display","none");
		}
	});
	$("#form").submit(function(e){
		if(!onCheck()){
			e.preventDefault();
			return;

		}
		var data = new FormData(document.getElementById("add-form"));
		var url = "/Tuhoc/php/add.php"
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			dataType: "text",
			async: false,
            success: function(data){
            	alert("Add success");
            	window.location.href="oneResult.html?id="+data;
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

function onCheck(){
	var holyname = $('#holyname').val();
	var fullname = $("#fullname").val();
	var birthday = $("#birthday").val();
	var baptism = $("#baptism").val();
	var godparent = $("#godparent").val();
	var priest = $("#priest").val();
	if(holyname === ""){
		alert("Insert holyname");
		return false;
	}
	if(fullname === ""){
		alert("Insert fullname");
		return false;
	}
	if(birthday === ""){
		alert("Insert birthday");
		return false;
	}
	if(baptism === ""){
		alert("Insert baptism");
		return false;
	}
	if(godparent === ""){
		alert("Insert godparent");
		return false;
	}
	if(priest === ""){
		alert("Insert priest");
		return false;
	}
	return true;

}
