const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    if(Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                array.splice(i,1)
            }
        }
        return array
    }else {
        return Error("це повынен бути массив")
    }
}

removeElement(arr,5)
console.log(arr)
