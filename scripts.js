var html = "";

setInterval(onClickFunction, 5000);

function onClickFunction() {
	$.ajax({
		method: "GET",
		url: "http://localhost:8080/books"
	})
	.done(
		function(odpowiedzSerwera) {
			odpowiedzSerwera.forEach(parseElement);
			$("#content").empty();
			$("#content").append(html);
			html = "";
		}
	)
	.fail(
		function(agjhsdf, textStatus) {
			alert(textStatus);
		}
	)
}

function parseElement(element, index, array) {
	html = html + "<div>" + element.title + "</div>";
}