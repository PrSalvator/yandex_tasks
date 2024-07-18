const relief = [2, 1, 0, 2, 0, 0, 3, 1, 2, 3, 0, 1];
const max = relief.reduce((acc, cur) => acc > cur ? acc : cur, 0);
const index = relief.indexOf(max);

let max2 = relief[0];
let ans = 0;

for(let i = 0; i < index; i++){
    if(relief[i] > max2){
        max2 = relief[i];
    }
    ans += max2 - relief[i]; 
}

max2 = relief.at(-1);
for(let i = relief.length - 1; i > index; i--){
    if(relief[i] > max2){
        max2 = relief[i];
    }
    ans += max2 - relief[i]; 
}

console.log(ans);