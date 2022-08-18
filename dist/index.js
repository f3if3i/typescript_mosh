"use strict";
var employee = {
    id: 1,
    name: "Mosh",
    retire: function (date) {
        console.log(date);
    },
};
// union type
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
