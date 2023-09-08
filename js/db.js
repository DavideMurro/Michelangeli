var categories = [
	"Collane"
	,"Bracciali"
	,"Orecchini"
]

var articles = [
	{
		insert: new Date("2018/07/15 19:50")
		,img_thumb: "images/articles/thumbs/collana_lapislazzuli.jpeg"
		,img_full: "images/articles/fulls/collana_lapislazzuli.jpeg"
		,title: "Collana di lapislazzuli"
		,description: "Collana di lapislazzuli 67cm circa con copriperle e rondelle con brillantini. Accessori e chiusura in acciaio inox."
		,category: 0
		,price: 30.00
		,size: [67]
	}
	,{
		insert: new Date("2018/07/15 19:51")
		,img_thumb: "images/articles/thumbs/collana_ceramica.jpeg"
		,img_full: "images/articles/fulls/collana_ceramica.jpeg"
		,title: "Collana in ceramica"
		,description: "Collana in ceramica cm 80 con rondelle con zirconi artificiali e chiusura in acciaio inox."
		,category: 0
		,price: 25.00
		,size: [80]
	}
	,{
		insert: new Date("2018/07/15 19:53")
		,img_thumb: "images/articles/thumbs/collana_graniti.jpeg"
		,img_full: "images/articles/fulls/collana_graniti.jpeg"
		,title: "Collana di granati"
		,description: "Collana di granati e perle di fiume cm 60. Rondelle in acciaio inox con zirconi artificiali. Copriperle e chiusura in acciaio inox."
		,category: 0
		,price: 30.00
		,size: [60]
	}
	,{
		insert: new Date("2018/07/15 19:55")
		,img_thumb: "images/articles/thumbs/collana_ematite_magnetica.jpeg"
		,img_full: "images/articles/fulls/collana_ematite_magnetica.jpeg"
		,title: "Collana in ematite magnetica"
		,description: "Collana in ematite magnetica e cristalli colorati cm 48. Il colore è vibrazione energetica e influisce sul nostro corpo fisico, mentale ed emozionale. Secondo la medicina ayurvedica c’è una corrispondenza specifica tra i centri energetici o chakra e i colori... in questa collana ritrovate tutti e 7 i principali. Chiusura in acciaio inox."
		,category: 0
		,price: 14.00
		,size: [48]
	}
	,{
		insert: new Date("2018/07/15 19:58")
		,img_thumb: "images/articles/thumbs/bracciale_murano_zirconi.jpeg"
		,img_full: "images/articles/fulls/bracciale_murano_zirconi.jpeg"
		,title: "bracciale con perle di vetro di Murano e rondelle con zirconi artificiali"
		,description: "bracciale con perle di vetro di Murano e rondelle con zirconi artificiali in acciaio inox come la chiusura. Cm 19/23 regolabile. Il colore è vibrazione energetica e influisce sul nostro corpo fisico, mentale ed emozionale. Secondo la medicina ayurvedica c’è una corrispondenza specifica tra i centri energetici o chakra e i colori... in questa bracciale ritrovate tutti e 7 i principali. Chiusura in acciaio inox."
		,category: 1
		,price: 10.00
		,size: [19, 20, 21, 22, 23]
	}
	,{
		insert: new Date("2018/07/15 19:58")
		,img_thumb: "images/articles/thumbs/bracciale_perle_cristalli.jpeg"
		,img_full: "images/articles/fulls/bracciale_perle_cristalli.jpeg"
		,title: "Bracciale con perle in vetro di Murano e cristalli"
		,description: "Bracciale con perle in vetro di Murano e cristalli. Chiusura in acciaio inox. Cm 21/23 regolabile"
		,category: 1
		,price: 9.00
		,size: [21, 22, 23]
	}
	,{
		insert: new Date("2018/07/15 20:05")
		,img_thumb: "images/articles/thumbs/bracciale_murano.jpeg"
		,img_full: "images/articles/fulls/bracciale_murano.jpeg"
		,title: "Bracciale con perle in vetro di Murano"
		,description: "Bracciale con perle in vetro di Murano e chiusura in acciaio inox cm 19."
		,category: 1
		,price: 9.00
		,size: [19]
	}
	,{
		insert: new Date("2018/07/15 20:07")
		,img_thumb: "images/articles/thumbs/bracciale_murano_cuore.jpeg"
		,img_full: "images/articles/fulls/bracciale_murano_cuore.jpeg"
		,title: "Bracciale in ceramica e vetro di Murano"
		,description: "Bracciale in ceramica e vetro di Murano. Chiusura in acciaio inox. Cm 21,50"
		,category: 1
		,price: 9.00
		,size: [21.50]
	}
	,{
		insert: new Date("2018/07/15 20:07")
		,img_thumb: "images/articles/thumbs/bracciale_ematite_elastico.jpeg"
		,img_full: "images/articles/fulls/bracciale_ematite_elastico.jpeg"
		,title: "Bracciale elastico in ematite"
		,description: "Bracciale elastico in ematite con rosellina in fimo cm 19,00."
		,category: 1
		,price: 8.00
		,size: [19.00]
	}
	,{
		insert: new Date("2018/07/15 20:12")
		,img_thumb: "images/articles/thumbs/bracciale_murano_vetro_cristalli.jpeg"
		,img_full: "images/articles/fulls/bracciale_murano_vetro_cristalli.jpeg"
		,title: "Bracciale con perle in vetro di Murano"
		,description: "Bracciale con perle in vetro di Murano, vetro, cristalli, chiusura in acciaio inox. Cm 20,50."
		,category: 1
		,price: 9.00
		,size: [20.50]
	}
	,{
		insert: new Date("2018/07/15 20:12")
		,img_thumb: "images/articles/thumbs/bracciale_svarowsky.jpeg"
		,img_full: "images/articles/fulls/bracciale_svarowsky.jpeg"
		,title: "Bracciale con biconi svarowsky"
		,description: "Bracciale con biconi svarowsky e chiusura in acciaio inox. Cm 20."
		,category: 1
		,price: 9.00
		,size: [20]
	}
	,{
		insert: new Date("2018/07/15 20:15")
		,img_thumb: "images/articles/thumbs/bracciale_ceramica_ematite.jpeg"
		,img_full: "images/articles/fulls/bracciale_ceramica_ematite.jpeg"
		,title: "Bracciale in ceramica ed ematite"
		,description: "Bracciale in ceramica ed ematite. Chiusura in acciaio inox. Cm 20"
		,category: 1
		,price: 9.00
		,size: [20]
	}
	,{
		insert: new Date("2018/07/15 20:15")
		,img_thumb: "images/articles/thumbs/bracciale_biconi_svarowsky.jpeg"
		,img_full: "images/articles/fulls/bracciale_biconi_svarowsky.jpeg"
		,title: "Bracciale con biconi cristallo Svarowsky"
		,description: "Bracciale con biconi cristallo Svarowsky e chiusura in acciaio inox. Cm 19,00."
		,category: 1
		,price: 9.00
		,size: [19]
	}
	,{
		insert: new Date("2018/07/15 20:17")
		,img_thumb: "images/articles/thumbs/bracciale_murano_rondelle.jpeg"
		,img_full: "images/articles/fulls/bracciale_murano_rondelle.jpeg"
		,title: "Bracciale con perle in vetro di Murano e rondelle"
		,description: "Bracciale con perle in vetro di Murano, rondelle e chiusura in acciaio inox. Cm 20. Il colore è vibrazione energetica e influisce sul nostro corpo fisico, mentale ed emozionale. Secondo la medicina ayurvedica c’è una corrispondenza specifica tra i centri energetici o chakra e i colori... in questo bracciale  ritrovate tutti e 7 i principali."
		,category: 1
		,price: 9.00
		,size: [20]
	}
	,{
		insert: new Date("2018/07/15 20:21")
		,img_thumb: "images/articles/thumbs/bracciale_ematite_cristallini.jpeg"
		,img_full: "images/articles/fulls/bracciale_ematite_cristallini.jpeg"
		,title: "Bracciale in ematite magnetica e cristallini"
		,description: "Bracciale in ematite magnetica e cristallini. Cm 20. Il colore è vibrazione energetica e influisce sul nostro corpo fisico, mentale ed emozionale. Secondo la medicina ayurvedica c’è una corrispondenza specifica tra i centri energetici o chakra e i colori... in questo bracciale ritrovate tutti e 7 i principali. Chiusura in acciaio inox"
		,category: 1
		,price: 9.00
		,size: [20]
	}
	,{
		insert: new Date("2018/07/20 21:05")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel.jpeg"
		,title: "Orecchini acciaio inox/nikel free"
		,description: "Orecchini acciaio inox/nikel free con perle in vetro di Murano, cristalli, copriperle in acciaio inox."
		,category: 2
		,price: 8.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:11")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_cristallo.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_cristallo.jpeg"
		,title: "Orecchini acciaio inox/nikel free e cristallo"
		,description: "Orecchini acciaio inox/nikel free con perle di cristallo e ceramica."
		,category: 2
		,price: 6.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:15")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_murano.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_murano.jpeg"
		,title: "Orecchini acciaio inox/nikel free e murano"
		,description: "Orecchini acciaio inox/nikel free con perle in vetro di Murano, perle di fiume, rosellina in resina, rondella in acciaio inox con zirconi artificiali."
		,category: 2
		,price: 8.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:15")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_murano_ceramica.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_murano_ceramica.jpeg"
		,title: "Orecchini acciaio inox/nikel free, murano e ceramica"
		,description: "Orecchini acciaio inox/nikel free con perle in vetro di Murano, ceramica, onice, cristallo, rondella in acciaio inox con zirconi artificiali."
		,category: 2
		,price: 9.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:15")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_murano_cristallo.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_murano_cristallo.jpeg"
		,title: "Orecchini acciaio inox/nikel free, murano e cristallo"
		,description: "Orecchini acciaio inox/nikel free con perle in vetro di Murano, cristallo, rondella con zirconi artificiali e copriperle in acciaio inox."
		,category: 2
		,price: 6.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:15")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_onice.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_onice.jpeg"
		,title: "Orecchini acciaio inox/nikel free e onice"
		,description: "Orecchini acciaio inox/nikel free con perle in onice, copriperle e rondella in acciaio inox con zirconi artificiali."
		,category: 2
		,price: 7.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:20")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_pietre.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_pietre.jpeg"
		,title: "Orecchini acciaio inox/nikel free e pietre"
		,description: "Orecchini acciaio inox/nikel free con pietre dure, cristallo, copriperle e rondelle in acciaio inox con zirconi artificiali."
		,category: 2
		,price: 8.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:20")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_fiume.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_fiume.jpeg"
		,title: "Orecchini acciaio inox/nikel free e perle di fiume"
		,description: "Orecchini acciaio inox/nikel free con perle di fiume, copriperle in acciaio inox."
		,category: 2
		,price: 3.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:20")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_ceramica.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_ceramica.jpeg"
		,title: "Orecchini acciaio inox/nikel free e perle di ceramica"
		,description: "Orecchini acciaio inox/nikel free con perle di ceramica, copriperle in acciaio inox."
		,category: 2
		,price: 3.00
		,size: []
	}
	,{
		insert: new Date("2018/07/20 21:20")
		,img_thumb: "images/articles/thumbs/orecchini_inox_nikel_ceramica_zirconi.jpeg"
		,img_full: "images/articles/fulls/orecchini_inox_nikel_ceramica_zirconi.jpeg"
		,title: "Orecchini acciaio inox/nikel free e perle di ceramica"
		,description: "Orecchini acciaio inox/nikel free con perle di ceramica, copriperle e rondelle con zirconi artificiali in acciaio inox."
		,category: 2
		,price: 4.00
		,size: []
	}
	,{
		insert: new Date("2018/07/22 13:10")
		,img_thumb: "images/articles/thumbs/bracciale_ematite_biconi.jpeg"
		,img_full: "images/articles/fulls/bracciale_ematite_biconi.jpeg"
		,title: "Chakra: bracciale in ematite"
		,description: "Chakra: bracciale in ematite con inserto di cristalli biconi di svarowsky e chiusura in acciaio inox. Misura a richiesta."
		,category: 1
		,price: 10.00
		,size: []
	}
	,{
		insert: new Date("2018/07/22 13:12")
		,img_thumb: "images/articles/thumbs/collana_ceramica_inox.jpeg"
		,img_full: "images/articles/fulls/collana_ceramica_inox.jpeg"
		,title: "Collana in ceramica"
		,description: "Collana in ceramica con chiusura in acciaio inox."
		,category: 0
		,price: 20.00
		,size: []
	}
	,{
		insert: new Date("2018/07/22 13:12")
		,img_thumb: "images/articles/thumbs/collana_pietre_dure.jpeg"
		,img_full: "images/articles/fulls/collana_pietre_dure.jpeg"
		,title: "Collana con pietre dure"
		,description: "Collana con pietre dure grigio scuro opache e sottili striature bianche, cristallini neri e chiusura in acciaio inox."
		,category: 0
		,price: 15.00
		,size: []
	}
	,{
		insert: new Date("2018/08/10 20:16")
		,img_thumb: "images/articles/thumbs/collana_in_diaspro.jpeg"
		,img_full: "images/articles/fulls/collana_in_diaspro.jpeg"
		,title: "Collana in diaspro azzurro"
		,description: "Collana in diaspro azzurro e cristallini cm. 49,5. Chiusura in acciaio inox."
		,category: 0
		,price: 30.00
		,size: [49.50]
	}
	,{
		insert: new Date("2018/09/03 18:54")
		,img_thumb: "images/articles/thumbs/collana_in_cristalli.jpeg"
		,img_full: "images/articles/fulls/collana_in_cristalli.jpeg"
		,title: "Collana con cristalli"
		,description: "Collana con cristalli, vetro e radice di rubino. Chiusura e rondelle in acciaio inox."
		,category: 0
		,price: 17.00
		,size: []
	}
	,{
		insert: new Date("2018/09/03 18:56")
		,img_thumb: "images/articles/thumbs/bracciale_perline_variopinte.jpeg"
		,img_full: "images/articles/fulls/bracciale_perline_variopinte.jpeg"
		,title: "Bracciale stretto con perline variopinte"
		,description: "Bracciale stretto a fascia con perline di vetro, cristalli, pietre dure, ceramica e chiusura con calamita. La base può essere fatta, su richiesta, di colore nero, rosso, blu, giallo, verde, bianco."
		,category: 1
		,price: 40.00
		,size: []
	}
	,{
		insert: new Date("2018/10/04 12:58")
		,img_thumb: "images/articles/thumbs/bracciale_fascia_perline_vetro_cristalli.jpeg"
		,img_full: "images/articles/fulls/bracciale_fascia_perline_vetro_cristalli.jpeg"
		,title: "Bracciale largo con perline variopinte"
		,description: "Bracciale largo a fascia con perline di vetro, cristalli, pietre dure, ceramica e chiusura con dopppia calamita. La base può essere fatta, su richiesta, di colore nero, rosso, blu, giallo, verde, bianco."
		,category: 1
		,price: 50.00
		,size: []
	}
]


var markets = [
	{
		insert: new Date("2023/09/08 08:00")
		,title: "Mercatino Cisan di Valmarino"
		,date: new Date("2023/09/14 12:00")
		,place: "Italia - Treviso"
	}
	,{
		insert: new Date("2023/09/08 08:00")
		,title: "Mercatino dell artigianato"
		,date: new Date("2025/08/14 23:55")
		,place: "Francia - Parigi"
	}
	,{
		insert: new Date("2023/09/08 08:00")
		,title: "Sagra sant Angelo Alto"
		,date: new Date("2051/01/01 00:00")
		,place: "Italia - Treviso"
	}
];