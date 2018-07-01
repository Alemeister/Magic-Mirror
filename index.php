<!doctype html>
<html lang="sv">
	<head>
		<meta charset="utf-8">
		<title>Magic Mirror</title>
		<meta name="description" content="The Magic Mirror">
		<meta http-equiv="refresh" content="1800" />
		<link rel="stylesheet" href="style.css">
		<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
	
		<style> 
			body {
				<!-- Hide scrollbar --> 
				overflow: hidden;
			}
		</style>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	</head>

	<body>
		<div id="wrapper">
			<div id="upper_left">
				<fieldset>
					<legend><h2 class="clock_headline"><b>Svensk tid:</b></h2></legend>
					<div id="swedish_clock"></div>
					<div id="date"></div>
				</fieldset>

				<fieldset id="chilean_clock_fieldset">
					<legend><h2 class="clock_headline"><b>Chilensk tid:</b></h2></legend>
					<div id="chilean_clock"></div>
				</fieldset>
				
				<fieldset id="lund_weather_fieldset">
					<div id="lund_weather"></div> 
				</fieldset>
			</div>

			<div id="upper_right">
				<div id="weather_icon"></div>
			</div>

			<div id="bottom"> 
				<h1 id="todays_news">Dagens nyheter</h1>
				
				<div id="text_news">
					<?php
						$rssFeed = new DOMDocument(); 
						$rssFeed->load('https://www.gamereactor.se/rss/rss.php?texttype=4'); 
						$newsFeed = array(); 
						
						//Gets title and description for news from Gamereactor.se
						foreach ($rssFeed->getElementsByTagName('item') as $node) {
							$item = array (
								'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
								'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,	
							);
							array_push($newsFeed, $item);
						}   

						//Add titel and description to reply
						for($x=0;$x<3;$x++) {
							$title = str_replace(' & ', ' &amp; ', $newsFeed[$x]['title']);
							$description = $newsFeed[$x]['desc'];
							echo '<h2 class="news_headline">'.$title.'</h2>';
							echo '<p>'.strip_tags($description, '<p><b>').'</p>';
						}
					?>
				</div>
			</div>

			<div>
				<h1 id="test"></h3>
			</div>	
		</div>

		<script src="Swedish_and_Chilean_Clocks.js"></script>
		<script src="Weather_for_Lund.js"></script>
		<script src="Date.js"></script>
		<script src="Showing_all_content_or_nothing_with_IFTTT_and_dweet.js"></script>
	</body>
</html>
