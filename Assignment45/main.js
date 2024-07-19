var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//                                                           * using spread operator to hold key_value pair
//                                                                                                        *telling the function that an object is to be returned
function build_car(manufacturer, model_name) {
    var optional_info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional_info[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, model_name: model_name }, Object.assign.apply(Object, __spreadArray([{}], optional_info, false)));
    return car;
}
;
var a = build_car("Toyota", "Corolla", { colour: "black" }, { modification: "qualitty leather seats" });
console.log(a);
// Assignment complete
