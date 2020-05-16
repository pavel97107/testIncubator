document.addEventListener('DOMContentLoaded', () => {

    const search = document.getElementById('search');
    const btn = document.getElementById('btn');

    const array = [
        {name: 'denis', age: 18},
        {name: 'dima', age: 20},
        {name: 'pavel', age: 25},
        {name: 'sergei', age: 30}
    ];

    const alertMessage = () => {
        if (search.value === 'google') {
            alert(`Yandex круче. Но это не точно ${array[0].name}`);
        } else {
            alert(search.value + ` ${array[0].name}`)
        }
    };

    btn.addEventListener('click',() => setTimeout(alertMessage, 3000));
//______________________________________________________________________
//6.Создать функцию superSum, которая будет в алерте показывать
//сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры
    const superSum = (a, b) => {
        return alert(a + b);
    };
// закоментил чтобы не мешала, superSum(12, 12);

//________________________________________________________________________
//7.Создать массив из чисел в перемешку (не отсортированы).
//С помощью цикла for найти максимальный и минимальный элементы в массиве
    const myArray = [-30, 20, 40, -12, 10, -10];
    let max = myArray[0];
    let min = myArray[0];

    for (let i = 1; i < myArray.length; i++) {
        if (max < myArray[i]) {
            max = myArray[i];
        } else if (min > myArray[i]) {
            min = myArray[i]
        }
    }
    console.log(max);
    console.log(min)
//________________________________________________________________________
//8.Создать 2 переменные a и b… присвоить им любые значения.
//Потом программно поменять эти значения местами, не используя значениям напрямую
    let a = 10;
    let b = 15;

    const showSwitch = (parametr1, parametr2) => {
        a = parametr1;
        b = parametr2;
    };

    showSwitch(b, a);

    console.log(a);
    console.log(b);

//________________________________________________________________________

//9.Оформить алгоритм поиска максимального числа в массиве как функцию findMax
//(чтобы можно было передавать в неё любой массив чисел,
//а на выходе она возвращала нам максимальное число из массива)
    const arrayX = [12, 1111, 0, -19];

    const findMax = myArray => {
        return Math.max.apply(null, myArray)
    };

    console.log(findMax(arrayX))

//________________________________________________________________________
});