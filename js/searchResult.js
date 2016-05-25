$(document).ready(function(){
	var searchBy = getParam("searchby");
	var searchText = getParam("searchtext");
	var data = search(searchBy,searchText);
	var tdBody = document.getElementById("tbrow");
	$.each(data,function(key,value){
		var tr = document.createElement("tr");
		tr.setAttribute("onclick","resultOnClick("+value.id+")");
		var td = document.createElement("td");
		td.appendChild(document.createTextNode(value.id));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.holyname));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.fullname));
		tr.appendChild(td);
		td = document.createElement("td");
		var gender;
		if(value.gender === "1") gender = "Male";
		else gender = "Female";
		td.appendChild(document.createTextNode(gender));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.birthday));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.fathername));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.mothername));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.dateofbaptism));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.godparent));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.priest));
		tr.appendChild(td);
		td = document.createElement("td");
		if(value.eucharist !== "0001-01-01"){
			td.appendChild(document.createTextNode(value.eucharist));
		}
		tr.appendChild(td);
		td = document.createElement("td");
		if(value.confimation !== "0001-01-01"){
			td.appendChild(document.createTextNode(value.confimation));
		}
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.bishop));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(value.sponsor));
		tr.appendChild(td);
		td = document.createElement("td");
		var alive = value.alive;
		if(alive === "1"){
			td.appendChild(document.createTextNode("Yes"));
		}else{
			td.appendChild(document.createTextNode("Died in "+ alive));
		}

		tr.appendChild(td);
		tdBody.appendChild(tr);

	});
});

function resultOnClick(id){
	window.location.href = "oneResult.html?id="+id;

}
