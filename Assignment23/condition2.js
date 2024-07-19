var car = "Honda";
function test() {
    console.log("Is car ".concat(car, "?"));
    if (car == "Honda" || car == "Supra" || car == "Mercedes" || car == "Audi" || car == "Corolla") {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
;
// car = "Honda"
test();
car = "Supra";
test();
car = "Mercedes";
test();
car = "Audi";
test();
car = "Corolla";
test();
car = "Lambhorgini";
test();
car = "Toyota";
test();
car = "Ferrari";
test();
car = "Nissan";
test();
car = "Mehran";
test();
// Done in alternate way.
