// let myArr = [1, 2, 3, 4, 5]
// let myName = ["Sarfaraaz"]
// let test = [true, false]
// let students = [{
//     studentName: "john",
//     rollNo: 1,
//     age: 10

// },
// {
//     studentName: "robo",
//     rollNo: 1,
//     age: 12

// }
// ]

// let numbers = [1, 2, 3, [3, 2, 1, 5, 6], [111, 111]]


// let studentName = "robo"

// let myArr = [1, 2, 3, 4, 5]

// let numbers = new Array(1, 2, 3, 4, 5)


// let myArr = [1, 2, 3, 4, 5]

// myArr[0] = 10;


// console.log(myArr)


// Push method will help us to add a value at the last indext of array

// let myArr = [1, 2, 3, 4, 5]

// myArr.push(6)


// console.log(myArr)

// let fruites = ["apple", "banana"]

// fruites.push("orange")

// console.log(fruites)


// Pop method will help us to remove a value at the last indext of array

// let myArr = [1, 2, 3, 4, 5]

// myArr.pop()
// myArr.pop()

// console.log(myArr)



// Shift method will help us to remove a value a first value from the array

// let myArr = [1, 2, 3, 4, 5]
// let fruites = ["apple", "banana", "Orange"]
// let listOfArr = [1, 2, 3, 4, [1, 2, 3, 4, 5], 5, [1, 2, 3, 4, 5]]


// fruites.shift()

// console.log(fruites)


// unShift method will help us to remove a value a first value from the array

// let myArr = [1, 2, 3, 4, 5]
// let fruites = ["apple", "banana", "Orange"]
// let listOfArr = [1, 2, 3, 4, [1, 2, 3, 4, 5], 5, [1, 2, 3, 4, 5]]


// myArr.unshift(0)
// fruites.unshift([1, 2, 3, 4, 5])

// console.log(fruites)


// splice() it cann add or remove elements from an array specific index

// removing the elements

// let myArr = [1, 2, 3, 4, 5]

// myArr.splice(3, 2)

// console.log(myArr)


// adding the elements

// let myArr = [1, 2, 3, 4, 5]

// myArr.splice(4, 0, 4.5)

// console.log(myArr)


// slice method()

// let myArr = [1, 2, 3, 4, 5]

// let newArr = myArr.slice(0, 1)

// console.log(newArr)


// concat it joins a two or more array and creates a new array

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = [6, 7, 8, 9, 10]
// let result = arr1.concat(arr2, arr3)

// console.log(result)

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr3.length; i++) {
//     console.log(i)
// }


// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr3.forEach(function (arr3) {
//     console.log(arr3)
// })


// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr3.map((number) => {
//     if (number == 9) {
//         console.log(number + " this is tru")
//     }
// }
// )


// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]



// numbers.map((num) => {
//     console.log(num * 2)
// })

// console.log(numbers)


// let numbers = [[0, 1, 2, 3], 4, [5, 6, 7, 8], 9, [10, 11], [12, 13, 14]]
// let cars = ["Volvo", "BMW", "Ford", "Mazda"]


// filter array

// let updatedArr = numbers.filter((num) => num == numbers.length < 2)
// let updatedArrB = numbers.filter((num) => num.length > 3)


// console.log(numbers)
// console.log(updatedArrB)

// reverse


// let numbers = [[0, 1, 2, 3], 4, [5, 6, 7, 8], 9, [10, 11], [12, 13, 14]]
// let cars = ["Volvo", "BMW", "Ford", "Mazda"]

// cars.reverse()

// console.log(cars)


//
// let numbers = ["b", "c", "a", "d"]

// numbers.sort()

// console.log(numbers)


// object



// let car = {
//     color: "red",
//     modal: "2024",
//     varient: "sx(o)",
//     price: "200k",
// }

// console.log(car.modal)

// Object.keys this method we will use to get the key of the object in an array

// let car = {
//     color: "red",
//     modal: "2024",
//     varient: "sx(o)",
//     price: "200k",
// }

// let identifires = Object.keys(car)

// console.log(identifires)



// Object.values this method we will use to get the key of the object in an array

// let car = {
//     color: "red",
//     modal: "2024",
//     varient: "sx(o)",
//     price: "200k",
// }

// let listOfValues = Object.values(car)

// console.log(listOfValues)



// Object.entries this method we will use to get the key of the object in an array

// let car = {
//     color: "red",
//     modal: "2024",
//     varient: "sx(o)",
//     price: "200k",
// }

// let listEntries = Object.entries(car)

// console.log(listEntries)



// looping through objects

// let car = {
//     color: "red",
//     modal: "2024",
//     varient: "sx(o)",
//     price: "200k",
// }


// for (let key in car) {
//     console.log(x)
// }

// let car = {
//     color: "red",
//     modal: "2024",
//     varient: "sx(o)",
//     price: "200k",
// }


// Object.keys(car).forEach((key) => {
//     console.log(key)
// })



