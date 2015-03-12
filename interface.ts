interface Shape {
  name: string;
  width: number;
  height: number;
  color?: string;
}

function area(shape : Shape) {
  var area = shape.width * shape.height;
  return "I'm " + shape.name + " with area " + area + " cm squared";
}

console.log( area( {name: "rectangle", width: 30, height: 15} ) );
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
console.log( area( {name: "twat", width: 30, height: 15} ) );


var shape = {
    name: "rectangle",
    popup: function() {

        console.log('This inside popup(): ' + this.name);

        setTimeout( () => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);

    }
};

shape.popup();
