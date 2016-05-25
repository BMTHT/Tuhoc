$(document).ready(function(){
	var id = getParam("id");
	var data = search("id",id);
	$.each(data,function(key,value){
		$("#no").val(value.id);
		$("#holyname").val(value.holyname);
		$("#fullname").val(value.fullname);
		if(value.gender === "1"){
			$("#male").prop("checked",true);
		}else{
			$("#female").prop("checked",true);
		}
		$("#birthday").val(value.birthday);
		$("#fathername").val(value.fathername);
		$("#mothername").val(value.mothername);
		$("#baptism").val(value.dateofbaptism);
		$("#godparent").val(value.godparent);
		$("#priest").val(value.priest);
		if(value.eucharist !== "0001-01-01"){
			$("#ruocle").val(value.eucharist);
		}
		if(value.confimation !== "0001-01-01"){
			$("#themsuc").val(value.confimation);
		}
		$("#bishop").val(value.bishop);
		$("#sponsor").val(value.sponsor);

		if(value.alive === "1"){
			$("#alive").prop("checked",true);
		}else{
			$("#death").prop("checked",true);
			$("#year-death").val(value.alive);
		}
	});

	$("#form").submit(function(e){
		var data = new FormData(document.getElementById("edit-form"));
		var url = "/Tuhoc/php/edit.php"
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			dataType: "text",
			async: false,
            success: function(data){
            	alert("Edit success" + data);
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
