var car = {
  make: 'Maruthi',
  type: 'Swift Dezire',
  color: 'Navy blue',
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
          'seat 1',
          'seat 2',
          'seat 3',
          'seat 4'
        ],
  turnOn: function () {
    this.isTurnedOn = 'true';
  },
  fly: function () {
    alert("Tadaa");
  },
  switchCar: function (isOn) {
    if(isOn) {
      this.isTurnedOn = true;
    } else {
      this.isTurnedOn = false;
    }
  }
}
