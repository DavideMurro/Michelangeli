//stampo tuttoooo nella home
function select_markets_list() {
	$(".markets").empty();

	if(markets.filter(e => e.date > new Date()).length > 0) {
		for (let [index, market] of markets.filter(e => e.date > new Date()).entries()) {
			if(market.place) {
				$(".markets").append(
					$("<div></div>")
					.addClass("market")
					.append(
						$("<b></b>").html(market.title)
					)
					.append(
						$("<address></address>").html(
							$("<a></a>")
							.attr("href", "https://www.google.it/maps/place/"+market.place)
							.attr("target", "_blank")
							//.attr("href", "geo:0,0?q="+market.place)
							.html(market.place)
						)
					)
					.append(
						$("<date></date>").html(date_format(market.date, "dd-mm-yyyy HH:ii"))
					)
				)	
			}
		}
	} else {
		$(".markets").html("Nessun mercatino registrato. Contattami per avere dettagli!");
	}
}
