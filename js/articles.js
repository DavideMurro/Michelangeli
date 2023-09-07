//stampo tuttoooo nella home
function select_articles_list(category) {
	$("#main").addClass("is-preload");
	$("#main").empty();

	for (let [index, article] of articles.entries()) {
		if(!category || category === undefined || category == article.category) {
			/*
			//aggiungo i filtri
			if($("#articles_categories").find("option[value='"+article.category+"']").length == 0) {
				$("#articles_categories").append(
					$("<option></option>")
					.attr("value", article.category)
					.html(categories[article.category])
				);
			}
			*/

			let price = article.price ? article.price.toFixed(2) + " €" : "";

			let obj_html = $("<article></article>")
			.addClass("thumb")
			.append(
				$("<a></a>")
				.addClass("image")
				.attr("href", article.img_full)
				.append(
					$("<img/>")
					.attr("src", article.img_thumb)
					.attr("alt", article.title)
				)
			)
			.append(
				$("<price></price>")
				.html(price)
			)
			.append(
				$("<span></span>")
				.addClass("more-info")
				.html("...")
			)
			.append(
				$("<h2></h2>")
				.html(article.title)
			)
			.append(
				$("<p></p>")
				.html(article.description)
			)

			$("#main").append(obj_html);

		}
	}

	load_thumbs();

	$("#main").removeClass("is-preload");
}

//stampo categorie
function select_articles_categories() {
	$("#articles_categories").empty();

	for (let i = 0; i < categories.length; i++) {
		$("#articles_categories").append(
			$("<option></option>")
			.attr("value", i)
			.html(categories[i])
		);
	}
}

