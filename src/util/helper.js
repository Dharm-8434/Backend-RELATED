// const batchName = "Plutonium"

// let printName = function() {
//     console.log('Bathc name is ', batchName)
// }

// module.exports.name = batchName
// module.exports.printName = printName

let today = new Date().toISOString().slice(0, 10)
let res = "August";
let naa = "Plutonium, week e, Day5, the topic being taught  today is Nodejs module system"
let mon = function(){
    console.log('this is'+" "+res+" "+'month');
}
let batchname = function(){
    console.log(naa)
}
module.exports.dat = today;
 module.exports.re = mon;
 module.exports.batch = batchname;