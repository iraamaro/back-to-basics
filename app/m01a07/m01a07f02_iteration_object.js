var word = 'My string.'
for (w in word) {console.log(`Word position -> ${w}`)}
for (w of word) {console.log(`Word letter -> ${w}`)}
var collection = ['a', 'e', 'i', 'o', 'u']
for (letter in collection) {console.log(`Vogal position ->  ${letter}`)}
for (letter of collection) {console.log(`Vogal -> ${letter}`)}
const vehicle = { type: 'Car', company: 'Ford', model: 'T', age: 1908, horsepower: 20, energy: 'Gasoline'}
for (machine in vehicle) {console.log(`${machine}`)}

vehicle
for (properties in vehicle) {console.log(`${properties}-> ${vehicle[properties]}`)}