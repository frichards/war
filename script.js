$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	
	deck = _.shuffle(deck);

	console.log(deck);


	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays

	var devide = function(deck){
		
		for (var i = 0; i<deck.length; i++) {
			var card = deck[i];
			if (i%2 === 0){
				cards_player_1.push(card);
			}else{
				cards_player_2.push(card);
			}
		
		}
			
	}

		
	
		devide(deck);
		console.log(cards_player_1);
		console.log(cards_player_2);
			
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	// war(opponent_1.pop(), opponent_2.pop())
			var card1 = cards_player_1[0];
			var card2 = cards_player_2[0];
	function war() {
				if (card1.number > card2.number){return "Opponent"}
				else if (card1.number < card2.number){return "Me"}
				else if (card1.number === card2.number){return "false"}
			}
	
	
	console.log(war());
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
	
		if(war() === "Opponent") {
			cards_player_1.push(card1, card2);
			cards_player_1.shift();
			cards_player_2.shift();
		}
		else if (war() === "Me" ){
			cards_player_2.push(card1, card2);
			cards_player_1.shift();
			cards_player_2.shift();
		}
		else if (war() === "false"){
			cards_player_1.push(card1);
			cards_player_2.push(card2);
			cards_player_1.shift();
			cards_player_2.shift();
		}
		//this function (defined below) will continue to the next turn
		advance();
	}

	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});