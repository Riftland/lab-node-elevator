class Elevator {
  constructor(){
    this.floor     = 0;
    this.MAXFLOOR  = 10;
    this.requests  = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
  }

  start(){
    this.t = setInterval(() => {this.update();}, 1000);
  }

  stop(){
    clearInterval(this.t);
  }

  update(){
    console.log(this.requests.length, this.requests[0]);
    if(this.requests > 0){
      this.requests[0] > this.floor ? this.floorUp() : this.floorDown();
      this._passengersEnter();
      this._passengersLeave();
    }
    this.log();
  }

  _passengersEnter(){
    if(this.waitingList.length > 0){
      this.waitingList.forEach((value, i) => {
        if(value.originFloor == this.floor){
          this.passengers.push(value);
          this.requests.splice(0, 1);
          this.requests.push(value.destinationFloor);
          this.waitingList.splice(i, 1);
          console.log(`${value.name} has enter the elevator`);
        }
      });
    }
  }

  _passengersLeave(){
    this.passengers.forEach((value, i) => {
      if(value.destinationFloor == this.floor){
        console.log(`${value.name} has left the elevator`);
        this.passengers.splice(i, 1);
        this.requests.splice(0, 1);
      }
    });
  }

  floorUp(){
    this.floor == this.MAXFLOOR ? console.log(`Limit of elevator`) : this.floor++;
    this.direction = "Up";
  }

  floorDown(){
    this.floor == 0 ? console.log(`Limit of elevator`) : this.floor--;
    this.direction = "Down";
  }

  call(person){
    console.log("hola");
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    console.log(this.waitingList.length);
    console.log(this.requests.length);
  }

  log(){
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
