//                                                           * using spread operator to hold key_value pair
//                                                                                                        *telling the function that an object is to be returned
function build_car (manufacturer:string, model_name:string, ...optional_info: {[key : string]: any}[]): object {
    let car = {
        manufacturer,
        model_name,  //target,   source
        ...Object.assign({}, ...optional_info)  //.assign takes two parameters, i.e target and source
    }
    return car
};

let a = build_car("Toyota", "Corolla", {colour:"black"}, {modification:"qualitty leather seats"});
console.log(a)

// Assignment complete