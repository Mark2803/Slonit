// Реализация mySlice
const mySlice = (arr, start = 0, end = arr.length) => {
    let result = [];
    start = Math.max(0, start < 0 ? start + arr.length : start);
    end = Math.max(0, end < 0 ? end + arr.length : end);

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
};

// Реализация myIndexOf
const myIndexOf = (arr, item, from = 0) => {
    if (from >= arr.length) return -1;
    from = from < 0 ? Math.max(arr.length + from, 0) : from;
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) return i;
    }
    return -1;
};

// Реализация myIncludes
const myIncludes = (arr, item, from = 0) => {
    return arr.slice(from).some(el => el === item);
};

// Примеры использования
console.log(mySlice([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
console.log(myIndexOf([1, 2, 3, 4, 5], 3)); // 2
console.log(myIncludes([1, 2, 3, 4, 5], 3)); // true
