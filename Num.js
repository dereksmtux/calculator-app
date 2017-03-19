function Num(value){
	//gives all Num objects the value property
	this.value = value;
	//appends this.value and displays the result on screen
	this.make = function(x) {
		this.value += x;
		document.getElementById('answer').innerHTML = this.value;

	};
	//gets an integer from this.value which is a string
	this.int = function(){
		return Number(this.value);
	};

}
//new numbers for the calc
var numList = [new Num(''), new Num(''), new Num(''), new Num(''),new Num('')];