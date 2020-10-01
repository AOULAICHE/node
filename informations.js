let name = "kamel"
let campus = "paris"

const presentation =()=>{
    var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${name}, my campusis ${campus}.`,
	e : "oO",
	T : "U "
}));
    //console.log(`Hi my name is ${name}, my campusis ${campus}.`)
}
//presentation()

module.exports=presentation

