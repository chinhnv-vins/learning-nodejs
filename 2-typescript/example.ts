let message: string = "2";
console.log(message);
console.log(message);

class Customer {
    Name : string;
    constructor (firstName: string, lastName: string)
    {
        this.Name = firstName + "  " + lastName;
    }
    GetName()
    {
        return "Hello, " + this.Name;
    }
}

// arrays
const names: string[] = ["Hello"];
names.push("World");
names.push("1234s");
console.log(names);

// enums
enum CardinalDirections {
    Hello,
    World,
    Brazil,
}
let directions = CardinalDirections.Brazil;

console.log(directions, 1);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);

// function get time
function getTime(): number {
    return new Date().getTime();
}

console.log(getTime());

// function match
function matchMultiply(a: number, b: number) {
    return a * b;
}

console.log(matchMultiply(4, 5), "get matchMultiply");

function add(a: number, b: number, c?: number) {
    return a + b + (c || 3);
}

console.log(add(2,5))