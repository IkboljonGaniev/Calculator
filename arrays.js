var cars = ["Maserati","maserati", "AUDI","audi", "BMW","bmw", "Volvo", "volvo", 100]
var moto = ["Harley-Davitson", "Kawasaki"]
console.log(cars);

cars.push("Kia")
console.log(cars);
cars.unshift("Ferrari")
console.log(cars);
cars.pop("100")
console.log(cars);
cars.shift("Maserati")
console.log(cars);

console.log(cars.splice(1,3));
console.log(cars.slice(1,5));


console.log(cars.concat(moto));
console.log(cars.join("/"));

cars.sort(function(a, b){return a.toLowerCase().localeCompare(b.toLowerCase())});
console.log(cars);


cars.sort(function(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  } else {
    return 0;
  }
});

console.log(cars);
