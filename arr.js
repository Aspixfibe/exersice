let arrFirst = [{ id: 1 }, { id: 2 }, { id: 3 }];
let arrSecond = [{ id: 2 }, { id: 3 }, { id: 4 }];
Array.prototype.push.apply(arrFirst, arrSecond);

//РЕШЕНИЕ ДЛЯ МАССИВА БЕЗ ОБЪЕКТОВ
i = arrFirst.length;
arrFirst.sort(function (a, b) {
    return a.id - b.id;
});

/* for (i = 0; i < arrFirst.length; i++) {
    arrFirst[i] != arrFirst[i - 1] && arrFirst[i + 1] != arrFirst[i] && result.push(arrFirst[i]);
}
console.log(result);
 */
result = [];
for (i = 1; i < arrFirst.length; i++) {
    arrFirst[i - 1].id != arrFirst[i].id && arrFirst[i].id != arrFirst[i + 1].id && result.push(arrFirst[i]);
}
console.log(result);