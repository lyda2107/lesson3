/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/

/*let dog = {
    порода: 'лабрадор',
    вік: '2 роки',
    вага: '15 кг',
    колір: 'білий',
    пол: 'кабель',
}
console.log(dog. порода);
console.log(dog);
 let key = prompt('введи значення');
 console.log(dog[key]);*/

 /*let man = {
     name: 'David',
     old: 12,
     height: 155,
     weight: '46 кг',
 }
console.log(man.height);
console.log(man);
 let key = prompt('введи значення');
 console.log(man[key]);*/

 //-- Створити масив та вивести його в консоль:
//- з 5 собак
//- 3 5 людей
//- з 5 автомобілів

let people = [
    {name: 'David', old: 12, height: 155, weight: 46, education: 'student'},
    {name: 'Roman', old: 46, height: 175, weight: 80, education: 'doctor'},
    {name: 'Elena', old: 30, height: 166, weight: 56, education: 'teacher'},
    {name: 'Zinaida', old: 64, height: 152, weight: 75, education: 'pensioner'},
    {name: 'Vasiliy', old: 65, height: 156, weight: 72, education: 'pensioner'}
]
 for (const iterator of people) {
     console.log(iterator)
 }