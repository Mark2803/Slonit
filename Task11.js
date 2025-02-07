function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

// Примеры использования
console.log(isSubstring("hello", "hell")); // true
console.log(isSubstring("world", "w")); // true
console.log(isSubstring("abc", "xyz")); // false
console.log(isSubstring("openai", "ai")); // true
