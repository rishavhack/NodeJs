function Perosn(name) {
	this.name = name
}

Perosn.prototype = {
	greet : function(){
		console.log("Hello" + this.name)
	}
};

var frank = new Perosn("Rishav")
frank.greet()