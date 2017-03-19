//keeps track of what num object is being appended
var numCounter = 0;
//keeps track of what operation will be done when equal method is called
var operator = '';
//keeps track of if the equal method has been called once already
var ran = false;
//class deffinition for calculator
function Calc(){
	this.total = 0;
	//this method gets the calc ready to add
	this.add = function (){
		numCounter += 1;
		operator = 'add';
	}
	//this method gets the calc ready to subtract
	this.subtract = function() {
		if (ran == true) {
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
	this.divide = function() {
		if (ran == true) {
			numCounter = 1;
			numList[0].value = this.total;
		}
		else {
			numCounter += 1;
		}
		operator = 'div';
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
			if (ran == true) {
				//numList[0].value = this.total;

				for (var i = 1; i <= numCounter; i++){
					this.total = this.total * numList[i].int();
				}
			}
			else {
				for (var i = 1; i <= numCounter; i++) {
					this.total = numList[0].int() * numList[i].int();
				}
			}
		}
		//dividing
		else if (operator == 'div') {
			this.total = numList[0].int() / numList[1].int();
		}
		//displaying answer and resetting
		document.getElementById('answer').innerHTML = this.total;
		numCounter = 0;
		for (x in numList) {
			numList[x].value = '';
		}
		ran = true;
	}
	//reloads the page
	this.clear = function(){
		location.reload();
	}
}



//new calc
var calculator = new Calc();
