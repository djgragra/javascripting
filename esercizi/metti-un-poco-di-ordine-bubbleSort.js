const array = [8, 7, 4, 5, 6, 3, 4, 2, 1, 9, 10]
const array_2 = [8, 7, 4, 5, 6, 3, 4, 2, 1, 9, 10]

// crescente
for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length - i; j++)
        if (array[j] > array[j + 1]) {
            const temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }

console.log(array);

// decrescente
for (let i = 0; i < array_2.length; i++)
    for (let j = 0; j < array_2.length - i; j++)
        if (array_2[j] < array_2[j + 1]) {
            const temp = array_2[j]
            array_2[j] = array_2[j + 1]
            array_2[j + 1] = temp
        }

console.log(array_2);
