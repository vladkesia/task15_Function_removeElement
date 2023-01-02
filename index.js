const arr = [1,2,3,4,5,6,6];

function removeElement(array, item) {
    if(Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                delete array[i]
            }
        }
        return array
    }else {
        return Error("це повынен бути массив")
    }
}

removeElement(arr,4)
console.log(arr)
