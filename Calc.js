var numCounter = 0;
var operator = '';
//class deffinition for calculator
function Calc(){
	this.total =0;
	//this method gets the calc ready to add
	this.add = function (){
		numCounter += 1;
		operator = 'add';
	}
	//this method gets the calc ready to subtract
	this.subtract = function() {
		if (operator == 'ran') {
			numCounter = 1;
			numList[0].value = this.total;
		}
		else {
			numCounter += 1;
		}
		operator = 'sub';
	}
	//this method gets the calc ready to multiply
	this.multiply = function(){
		numCounter += 1;
		operator = 'mul';
	}
	//this method executes 
	this.equal = function () {
		//adding
		if (operator == 'add') {

			for (x in numList) {
				this.total += numList[x].int();

			}
		}
		//subtracting
		else if ( operator =='sub') {
			this.total = (numList[0].int() * 2);
			for (x in numList) {
					this.total = this.total - numList[x].int();
				}
		}
		//multiply
		else if (operator == 'mul') {
			if (operator == 'ran') {
				numList[0].value = this.total;
			}
			for (var i = 1; i <= numCounter; i++){
				//this.total = this.total * numList[i].int();
				this.total = numList[0].int() * numList[i].int();
			}
		}
		//displaying answer and resetting
		document.getElementById('answer').innerHTML = this.total;
		numCounter = 0;
		for (x in numList) {
			numList[x].value = '';
		}
		//numList[0].value = String(this.total);
		operator = 'ran';
	}
	//reloads the page
	this.clear = function(){
		location.reload();
	}
}



//new calc
var calculator = new Calc();



