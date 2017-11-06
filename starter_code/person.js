class Person {
  constructor(){
    this.name = this.getName();
    this.originFloor = this.getFloor();
    do{
      this.destinationFloor = this.getFloor();
    }while(this.destinationFloor == this.originFloor);
  }

  getName(){
    let names = [
      'Alberto',
      'María',
      'Fran',
      'Manuel',
      'Idoia',
      'Ana',
      'Antonio',
      'Luís',
      'Álvaro',
      'Tomás',
      'Ricardo',
      'Julia',
      'Irene',
      'Andrea',
      'Andrés'
    ];

    return names[~~(Math.random() * names.length)];
  }

  getFloor(){
    return Math.round(Math.random() * 10);
  }

}

module.exports = Person;
