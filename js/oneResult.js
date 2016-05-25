$(document).ready(function(){
	var id = getParam("id");
	var data = search("id",id);
	$.each(data,function(key,value){
		$("#no").append(value.id);
		$("#holyname").append(value.holyname);
		$("#fullname").append(value.fullname);
		var gender;
		if(value.gender === "1") gender = "Male";
		else gender = "Female";
		$("#gender").append(gender);
		$("#birthday").append(value.birthday);
		$("#fathername").append(value.fathername);
		$("#mothername").append(value.mothername);
		$("#baptism").append(value.dateofbaptism);
		$("#godparent").append(value.godparent);
		$("#priest").append(value.priest);
		if(value.eucharist !== "0001-01-01"){
			$("#ruocle").append(value.eucharist);
		}
		if(value.confimation !== "0001-01-01"){
			$("#themsuc").append(value.confimation);
			$("#bishop").css("display","block");
			$("#bishop").append(value.bishop);
			$("#sponsor").css("display","block");
			$("#sponsor").append(value.sponsor);
		}

		var alive;
		if(value.alive === "1") alive="Yes";
		else alive = "Died in " + value.alive;
		$("#alive").append(alive);
	});
	$("#back").click(function(){
		window.history.back();
	});
	$("#edit").click(function(){
		window.location.href="edit.html?id="+id;
	});
});
