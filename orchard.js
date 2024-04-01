///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE


//total number of acres picked fpr whole week = 15 + 26 + 22= 63
let newFujiAcresArr = [2, 3, 3, 2, 2, 2, 1]
let num = 0


for (let i = 0; i < newFujiAcresArr.length; i++){
  num += newFujiAcresArr[i];
}

console.log(num);

let newGalaAcresArr = [5, 2, 4, 3, 6, 2, 4]
let num2 = 0

for (let i = 0; i < newGalaAcresArr.length; i++) {
    num2 += newGalaAcresArr[i];
}

console.log(num2);

//const pinkAcres = [1, 5, 4, 2, 1, 5, 4]
let num3 = 0

for (let i = 0; i < pinkAcres.length; i++){
    num3 += pinkAcres[i];
}

console.log(num3)

let totalAcres = num + num2 + num3

console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE


// totalAcres = 63
//average = 63/7

//find average # of acres picked per day

//let averageDailyAcres = 9

let averageDailyAcres = totalAcres / 7 
    console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

//figure out how many days it will take to finish picking the acres left
//daily average = 21
//average # of acres picked per day
//let dailyAverage = 21

let acresLeft = 174 //number of acres that still have apples left. 
let days = 0 //days of work that are left

//21-174= 153
// CODE HERE

//either one??

// while ( acresLeft > 0) {
//     days ++; 
//     acresLeft -= dailyAverage;
// }

// console.log(days)

while(acresLeft > 0){
    days ++;
    acresLeft -= averageDailyAcres;
}
console.log(days)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples. //6.5 tons for every acre

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.

    //HERE YOU'RE CHANGING ACRES TO TONS
*/

// 3 ARRAYS LISTING DAILY AMOUNT OF APPLES PICKED IN TONS FOR EACH VARIETY

// The associated number value 
//     represents the number of acres that were picked 
//     that day.
// const fujiAcres = [2, 3, 3, 2, 2, 2, 1] to TONS = [13, 19.5, 19.5, 13, 13, 13, 6.5]
// const galaAcres = [5, 2, 4, 3, 6, 2, 4] to TONS = [32.5, 13, 26, 19.5, 39, 13, 26]
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4] to TONS = [6.5, 32.5, 26, 13, 6.5, 32.5, 26]
//6.5 tons for every acre
// CODE HERE


console.log(fujiAcres.slice())

let number = 6.5

for(let i = 0; i < fujiAcres.length; i++) {
     result = 6.5 * i;
    console.log(`${number} * ${i} = ${result}`)
}


// let fujiTons = newFujiTons.length * 6.5
// console.log(newfujiTons)

// for( let i = 0; i < fujiTons.length; i++){
//   return 6.5 * fujiTons[i];

//   console.log(multiply(FujiTons.length))

//  }
 

// console.log(fujiAcres[i])
// WTF
// let index = 0
// let value = '13', '19.5', '19.5', '13', '13', '13', '6.5'
// let fujiTons = [...fujiAcres.slice(0, index), value, ...fujiAcres.slice(index, fujiAcres.length)]
// console.log(fujiTons) 
// let fujiTons = ['']

// for (let i = 0; i < fujiAcres.length; i++){
//     fujiAcres.push('13', '19.5', '19.5', '13', '13', '13', '6.5')
    
// }

// console.log(fujiTons)

// let fujiTons =
// let galaTons =
// let pinkTons =





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    PER VARIETY YOU ARE GETTING A TOTAL, AND THEN CONVERTING TONS TO POUNDS 

    Hint: there are 2000 pounds in a ton.
*/


// const fujiAcres = [2, 3, 3, 2, 2, 2, 1] to TONS = [13, 19.5, 19.5, 13, 13, 13, 6.5] = 97.5* 2000 = 195,000lbs
// const galaAcres = [5, 2, 4, 3, 6, 2, 4] to TONS = [32.5, 13, 26, 19.5, 39, 13, 26] = 169 * 2000 = 338,000lbs
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4] to TONS = [6.5, 32.5, 26, 13, 6.5, 32.5, 26] = 143 * 2000 = 286,000lbs
// CODE HERE 

// let fujiPounds = 195,000
// let galaPounds = 338,000
// let pinkPounds = 286,000

let poundsFujiAcres = [13, 19.5, 19.5, 13, 13, 13, 6.5]
let poundsNum1 = 0

for (let i = 0; i < poundsFujiAcres.length; i++){
    poundsNum1 += poundsFujiAcres[i];
}

console.log(poundsNum1)

let fujiPounds = poundsNum1 * 2000
console.log(fujiPounds)
    


let poundsGalaAcres = [32.5, 13, 26, 19.5, 39, 13, 26]
let poundsNum2 = 0

for (let i = 0; i < poundsGalaAcres.length; i++){
    poundsNum2 += poundsGalaAcres[i];
}

console.log(poundsNum2)

let galaPounds = poundsNum2 * 2000
console.log(galaPounds)

let poundsPinkAcres = [6.5, 32.5, 26, 13, 6.5, 32.5, 26]
let poundsNum3 = 0

for (let i = 0; i < poundsPinkAcres.length; i++){
    poundsNum3 += poundsPinkAcres[i];
}

console.log(poundsNum3)

let pinkPounds = poundsNum3 * 2000
console.log(pinkPounds)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
//GETTING THE PRICE

// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55


// CODE HERE

// let fujiProfit = .89 * 195,000 = 173,550
// let galaProfit = .64 * 338,000 = 216,320
// let pinkProfit = .55 * 286,000 = 157,300


let fujiProfit = fujiPrice * fujiPounds
console.log(fujiProfit)

let galaProfit = galaPrice * galaPounds
console.log(galaProfit)

let pinkProfit = pinkPrice * pinkPounds
console.log(pinkProfit)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//173,550 + 216,320 + 157,300 = 547,170

totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)