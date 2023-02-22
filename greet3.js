function Greetr(){
    this.greeting = "Hello from the funtion constructor";
    this.greet = function (){
        console.log(this.greeting);
    }
}

module.exports = new Greetr;