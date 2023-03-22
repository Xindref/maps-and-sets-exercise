// Question 1
// Set(4) {1,2,3,4}

// Question 2
// [r,e,f]

// Question 3
// Map(2) [{1:true}, {2:true}, {3:true}], [{1:false} ,{2:false}, {3:false}]

//hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size != arr.length;

//vowelCount
const isVowel = (char) => 'aeiou'.includes(char);

const vowelCount = (str) => {
    const vMap = new Map();
    for (let char of str.toLowerCase()) {
        if (isVowel(char)) {
            if (vMap.has(char)) {
                vMap.set(char, vMap.get(char) + 1);
            } else {
                vMap.set(char, 1);
            }
        }
    }
    return vMap;
}