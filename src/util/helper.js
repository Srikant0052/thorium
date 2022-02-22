function currentDate(name){
    const date = new Date().toLocaleDateString()
    const month = new Date().getMonth()+1
    const batch = new Date().getDay()
    console.log('current date'+" "+date)
    console.log(month)
    console.log(`${name} Day${batch}, the topic for today is Nodejs module system `)
}
// currentDate()
module.exports.currentDate = currentDate;