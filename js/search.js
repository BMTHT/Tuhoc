$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
	$("#search-btn").on("click",function(e){
		var searchBy = $("#search_concept").text();
		if(searchBy === "Search By"){
			alert("Select search by");
			return;
		}
		if(searchBy === "All"){
			$("#search-text").val('All');
		}
		var searchText  = $("#search-text").val();
		if(searchText === ""){
			alert("What do you search?");
			return;
		}

		window.location.href="resultPage.html?searchby="+searchBy + "&searchtext="+searchText;
	});
});

function search(searchBy,searchText){
	var searchData;
	var url = "/Tuhoc/php/search.php?searchby="+searchBy + "&searchtext="+searchText;
	$.ajax({
		url: url,
		type: "POST",
		dataType:"JSON",
		async: false,
		success: function(data){
			searchData = data;
		},
		error: function(a,b,c){
			console.log(a+b+c);
		}

	});
	return searchData;
}
