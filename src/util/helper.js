//Prints the current date
function currentDate(){
    let today = new Date();
    let date = today.getDate()+'_'+(today.getMonth() + 1)+'_'+today.getFullYear()
    // added 1 to month because months start from 0
    console.log('current date is: ', date)
}

//prints the current months
function printMonth(){
    let today = new Date();
let month = today.getMonth()+1;
console.log('Current month is: ', month)
}

//prints information of batch
function getBatchInfo(){
    console.log('Thorium, W3D1, the topic for today is Nodejs module system')
}

module.exports.currentDate = currentDate;
module.exports.printCurrentMonth = printMonth;
module.exports.printBatchInfo = getBatchInfo;