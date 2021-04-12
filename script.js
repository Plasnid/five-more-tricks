// * labeling loops
loop1: for( let i=0; i<4; i++){
    loop2: for( let j=0;j<3;j++){
        if(i===1){
            continue loop1
        }
        console.log(
            `%ci=%c${i}, j=%c${j}`,
            "color: #555",
            "font-weight: bold",
            "color: #555",
            "font-weight: bold",
            
        )
    }
}

// * freezing objects, doesn't affect nested objects,
// * does work on arrays too
const planet = Object.freeze({
    worldName: "Zerkblatt",
    hasWaterfalls: true,
    lightYearsFromEarth: 300
});
console.log(planet);
planet.hasWaterfalls = false;
console.log(planet);

// * maps,  will allow for forEach for mapping
// * can set objects as the keys
const CURRENCY_MAP = new Map([
    ["Canada", "CAD"],
    ["India", "RUP"],
    ["USA", "USD"]
]);

// * sets, like an array but only unique values
const uniqueNumbers = [1,5, 5, 22, 22, 20, 20,3000];
const bDays = new Set(uniqueNumbers);
console.log(bDays);
console.log(bDays.has(3000));
bDays.delete(3000);
console.log(bDays);
// * console assert is handy

console.assert(planet.hasWaterfalls===false, "I guess you do have waterfalls");

//* code stops on debugger so you can check your program at that point
debugger