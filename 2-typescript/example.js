var message = "2";
console.log(message);
console.log(message);
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.Name = firstName + "  " + lastName;
    }
    Customer.prototype.GetName = function () {
        return "Hello, " + this.Name;
    };
    return Customer;
}());
// arrays
var names = ["Hello"];
names.push("World");
names.push("1234s");
console.log(names);
// enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["Hello"] = 0] = "Hello";
    CardinalDirections[CardinalDirections["World"] = 1] = "World";
    CardinalDirections[CardinalDirections["Brazil"] = 2] = "Brazil";
})(CardinalDirections || (CardinalDirections = {}));
var directions = CardinalDirections.Brazil;
console.log(directions, 1);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// function get time
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// function match
function matchMultiply(a, b) {
    return a * b;
}
console.log(matchMultiply(4, 5), "get matchMultiply");
function add(a, b, c) {
    return a + b + (c || 3);
}
console.log(add(2, 5));
