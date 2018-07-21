var rishav = {
	printname : function () {
		console.log(this === rishav)
	}
}

rishav.printname();
function worthless()
{
	console.log(this === global)
}

worthless();