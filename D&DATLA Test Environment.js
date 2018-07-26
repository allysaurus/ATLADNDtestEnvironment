//globals
function setArch(){
	arch = document.getElementById("archType").value
};
document.getElementById("testArchType").addEventListener("click", setArch);

//Operators
function getRandomInt(min, max){
	min = Math.floor(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
function makeAttrRoll(){
	roll1 = getRandomInt(1, 6);
    roll2 = getRandomInt(1, 6);
    roll3 = getRandomInt(1, 6);
    roll4 = getRandomInt(1, 6);
    return roll1 + roll2 + roll3 + roll4 - Math.min(roll1, roll2, roll3, roll4);
};
function sortStats() {
	return stats.sort(function(a, b){return b - a});
};


//stat determining functions
function getStats() {
	var con = makeAttrRoll();
    var str = makeAttrRoll();
    var dex = makeAttrRoll();
    var int = makeAttrRoll();
    var wis = makeAttrRoll();
    var cha = makeAttrRoll();
	stats = [con, str, dex, int, wis, cha];
	let sortedStats = sortStats();
	switch  (arch){
		case "Air Bender": 
			return stats = [sortedStats[3], sortedStats[5], (sortedStats[0] + 2), sortedStats[2], (sortedStats[1] + 1), sortedStats[4]]
			break
		case "Fire Bender":
			return stats = [sortedStats[2], (sortedStats[0] + 2), sortedStats[1], sortedStats[4], sortedStats[5], sortedStats[3]]
			break
		case "Water Bender":
			return stats = [sortedStats[1], sortedStats[4], (sortedStats[3] + 1), sortedStats[2], (sortedStats[0] + 2), sortedStats[5]]
			break
		case "Earth Bender": 
			return stats =  [(sortedStats[0] + 1), (sortedStats[1] +1), sortedStats[4], sortedStats[3], sortedStats[2], sortedStats[5]]
			break
		case "Rogue":
			return stats =  [sortedStats[2], sortedStats[4], sortedStats[0], sortedStats[1], sortedStats[5], sortedStats[3]]
			break
		case "Fighter":
			return stats = [sortedStats[1], sortedStats[0], sortedStats[2], sortedStats[4], sortedStats[3], sortedStats[5]]
			break
		case "Barbarian":
			return stats = [sortedStats[0], sortedStats[1], sortedStats[2], sortedStats[4], sortedStats[3], sortedStats[5]]
			break
		}	
};
function getStatMods(value){
		return Math.floor((value - 10)/2)
};
function setHitDie(){
	switch(arch){
		case "Air Bender" :
			return 6
			break;
		case "Fire Bender" :
			return 6
			break;
		case "Water Bender" :
			return 8
			break; 
		case "Earth Bender" :
			return 10
			break;
		case "Rogue" :
			return 8
			break; 
		case "Fighter" :
			return 10
			break;
		case "Barbarian" :
			return 12
			break;
	}
};
function getLvl(){
	return getRandomInt(1, 9);
};
function getHitPoints (max, lvl, con){
	var conMod = con;
	var firstLvl = max + conMod;
	var aftLvl = 0;
	for (var j = 0; j <  lvl - 1  ; j++) { 
   		aftLvl += getRandomInt(1, max) + conMod
	};
	return firstLvl + aftLvl
};
//iterating and storing in array

function getBulkStats(){
	bulkCon = [];
	bulkStr = [];
	bulkDex = [];
	bulkInt = [];
	bulkWis = [];
	bulkCha = [];
	
	for (var i = 0; i < 1000; i++) { 
    		var tempStats = getStats();
		bulkCon.push(tempStats[0]);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStats = getStats();
		bulkStr.push(tempStats[1]);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStats = getStats();
		bulkDex.push(tempStats[2]);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStats = getStats();
		bulkInt.push(tempStats[3]);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStats = getStats();
		bulkWis.push(tempStats[4]);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStats = getStats();
		bulkCha.push(tempStats[5]);
	};
	return [bulkCon, bulkStr, bulkDex, bulkInt, bulkWis, bulkCha];
}
function getBulkMods(){
	bulkConMod = [];
	bulkStrMod = [];
	bulkDexMod = [];
	bulkIntMod = [];
	bulkWisMod = [];
	bulkChaMod = [];
	
	for (var i = 0; i < 1000; i++) { 
    		var tempStatMods = getStatMods(bulkCon[i]);
		bulkConMod.push(tempStatMods);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStatMods = getStatMods(bulkStr[i]);
		bulkStrMod.push(tempStatMods);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStatMods = getStatMods(bulkDex[i]);
		bulkDexMod.push(tempStatMods);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStatMods = getStatMods(bulkInt[i]);
		bulkIntMod.push(tempStatMods);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStatMods = getStatMods(bulkWis[i]);
		bulkWisMod.push(tempStatMods);
	};
	for (var i = 0; i < 1000; i++) { 
    		var tempStatMods = getStatMods(bulkCha[i]);
		bulkChaMod.push(tempStatMods);
	};
	return [bulkConMod, bulkStrMod, bulkDexMod, bulkIntMod, bulkWisMod, bulkChaMod];
};
function getBulkHitPoints(){
	bulkHitPoints = [];
	
	for (var i = 0; i < 1000; i++) { 
    		var tempHitPoints = getHitPoints(6, 2, bulkConMod[i]);
		bulkHitPoints.push(tempHitPoints);
	}
}
function avgStats(){
	var sumZero = 0
	var sumOne = 0
	var sumTwo = 0
	var sumThree = 0
	var sumFour = 0
	var sumFive =0
	
	for( var i = 0; i < bulkCon.length; i++ ){
    	sumZero += parseInt( bulkCon[i], 10 ); 
	}
	for( var i = 0; i < bulkStr.length; i++ ){
    	sumOne += parseInt( bulkStr[i], 10 ); 
	}
	for( var i = 0; i < bulkDex.length; i++ ){
    	sumTwo += parseInt( bulkDex[i], 10 ); 
	}
	for( var i = 0; i < bulkInt.length; i++ ){
    	sumThree += parseInt( bulkInt[i], 10 ); 
	}
	for( var i = 0; i < bulkWis.length; i++ ){
    	sumFour += parseInt( bulkWis[i], 10 ); 
	}
	for( var i = 0; i < bulkCha.length; i++ ){
    	sumFive += parseInt( bulkCha[i], 10 ); 
	}
	return [sumZero/bulkCon.length, sumOne/bulkStr.length, sumTwo/bulkDex.length, sumThree/bulkInt.length, sumFour/bulkWis.length, sumFive/bulkCha.length];
};
function avgStatMods(){
	var sumZero = 0
	var sumOne = 0
	var sumTwo = 0
	var sumThree = 0
	var sumFour = 0
	var sumFive =0
	
	for( var i = 0; i < bulkConMod.length; i++ ){
    	sumZero += parseInt( bulkConMod[i], 10 ); 
	}
	for( var i = 0; i < bulkStrMod.length; i++ ){
    	sumOne += parseInt( bulkStrMod[i], 10 ); 
	}
	for( var i = 0; i < bulkDexMod.length; i++ ){
    	sumTwo += parseInt( bulkDexMod[i], 10 ); 
	}
	for( var i = 0; i < bulkIntMod.length; i++ ){
    	sumThree += parseInt( bulkIntMod[i], 10 ); 
	}
	for( var i = 0; i < bulkWisMod.length; i++ ){
    	sumFour += parseInt( bulkWisMod[i], 10 ); 
	}
	for( var i = 0; i < bulkChaMod.length; i++ ){
    	sumFive += parseInt( bulkChaMod[i], 10 ); 
	}
	return [sumZero/bulkConMod.length, sumOne/bulkStrMod.length, sumTwo/bulkDexMod.length, sumThree/bulkIntMod.length, sumFour/bulkWisMod.length, sumFive/bulkChaMod.length];
};

arch = "Air Bender"
getBulkStats();
getBulkMods();
getBulkHitPoints();

function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()
