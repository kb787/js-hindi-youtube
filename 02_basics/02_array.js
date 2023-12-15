const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) :- Merges two arrays but creates a sub array dc_heros inside main array marvel_heros
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] :- Merges two arrays without creating subarray also called as spreading of two arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  

const real_another_array = another_array.flat(Infinity) // Breaks the array internal creation and infinity specifies infinite amount of rounds working
console.log(real_another_array); 

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // Seperares the combined string form and creates an individual array element form (H,i,t,e,s,h)
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Groups the three variables to merge into a single array
