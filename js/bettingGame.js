$(document).ready(function(){

let slot1, slot2, slot3;
let storedMoney;
let arr = ["apples","oranges","cherries","kiwi","pineapples"];

$("#bet1").on("click",function(){

	let betAmount = parseFloat($("#betAmount").val());
	
	if((betAmount !== "") && (betAmount > 0)){
	
	$("#betShow").text("$"+betAmount)
	storedMoney = parseFloat(betAmount);

	$("#bank").text("YOUR BANK: $"+storedMoney);
	$("#betAmount").val("")
	slot1 = arr[Math.floor(Math.random()*arr.length)];
	slot2 = arr[Math.floor(Math.random()*arr.length)];
	slot3 = arr[Math.floor(Math.random()*arr.length)];
	
	$("#slotResults").html(slot1+"<br>"+slot2+"<br>"+slot3);

	if((slot1 == slot2) && (slot2 == slot3)){
		$("#betShow").text("$"+betAmount)
		$("#slotResults").html(slot1+"<br>"+slot2+"<br>"+slot3);
		$("#message").text("YOU WIN! YOUR MONEY GETS MULTIPLIED BY 10!");
		betAmount=betAmount*10;
		storedMoney+=betAmount;
	}
	else if((slot1 == slot2) || (slot2 == slot3) || (slot1 == slot3)){
		$("#betShow").text("$"+betAmount)
		$("#slotResults").html(slot1+"<br>"+slot2+"<br>"+slot3);
		$("#message").text("YOU...KINDA WON? HERE'S AN ADDITIONAL 2x YOUR BET.")
		betAmount = betAmount*2;
		storedMoney+=betAmount;
		$("#bank").text("Stored Money: $"+storedMoney)
	}
	else{
		$("#slotResults").html(slot1+"<br>"+slot2+"<br>"+slot3);
		$("#message").text("YOU LOSE! SORRY, BUDDY.");
		$("#betShow").text("$"+betAmount)
		storedMoney-=betAmount;
		$("#bank").text("Stored Money: $"+storedMoney)
		$("#betAmount").val("")
	};
	}

	// condition for an empty input field 
	else{
		$("#message").text("Please enter in your bet amount!")
		$("#message").css("color","red")
		$("#message").css("font-weight","bold")
		$("#betAmount").val("")
	}

});
});



