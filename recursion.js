var Thing = {
  myFunction: function() {
    this.doStuff();
  }
}

var OtherThing = {
  doStuff: function() {
    this.myFunction();
  }
}

Thing.doStuff = OtherThing.doStuff;

Thing.myFunction();
