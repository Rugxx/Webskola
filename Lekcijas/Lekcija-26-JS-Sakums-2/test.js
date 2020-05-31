var skaits = 10;
var produkti = " āboli";
var izvade = "Man ir " + skaits + " sarkani" + produkti;

document.write(izvade);
//alert(izvade);
console.log(skaits,produkti);
document.write("<br>")
// šo neatbalsta daudzi browseri un jāliek tildēs pēdiņvietā
skaits = 5;
produkti = " gurķi ";
izvade = `Man ir ${skaits} zaļi ${produkti}`; 
document.write(izvade);
//alert(izvade);

console.log(skaits + produkti);

document.write("<br></br>")

var skaits = 10;
var reiz = 5;
var produkti = " āboli";
var rezultats = skaits * reiz;
var izvade = "Man ir " + rezultats + " sarkani" + produkti;

//alert(izvade);
document.write(izvade);

console.log(`${skaits} sareizinaju ar ${reiz} un man sanaca ${rezultats}`);

