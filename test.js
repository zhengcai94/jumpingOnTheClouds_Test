const input1 = [0, 0, 1, 0, 0, 1, 0];
const input2 = [0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    while(i < c.length - 1) {
        if(c[i+2] === 0) {
            i += 2;
        }else {
            i++;
        }
        jumps++;
    }
    return jumps;
}

console.log(jumpingOnClouds(input1));
console.log(jumpingOnClouds(input2));