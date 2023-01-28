let arrayMaster = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1)
let arrGanjil = []
let arrGenap = []

for(let i = 0; i < arrayMaster.length; i++){
    if(arrayMaster[i] % 2 != 0){
        arrGanjil.push(arrayMaster[i])
    }
    else{
        arrGenap.push(arrayMaster[i])
    }
}

function arrMin(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

function arrMax(arr){
    let max = arr[0]

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

function arrTotal(arr){
    let total = arr[0]

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

function arrAverage(arr){
    let total = arrTotal(arr)

    return total/arr.length
}

function minComparison(arrayGanjil, arrayGenap){
    let minGanjil = arrMin(arrayGanjil)
    let minGenap = arrMin(arrGenap)


}

console.log('length arr: ', arrayMaster.length)
console.log('length arrGenap: ', arrGenap.length)
console.log('length arrGanjil: ', arrGanjil.length)
console.log('Ganjil Min: ', arrMin(arrGanjil))
console.log('Ganjil Max: ', arrMax(arrGanjil))
console.log('Genap Min: ', arrMin(arrGenap))
console.log('Genap Max: ', arrMax(arrGenap))
console.log('Total genap: ', arrTotal(arrGenap))
console.log('Total ganjil: ', arrTotal(arrGanjil))
console.log('Avg genap: ', arrAverage(arrGenap))
console.log('Avg ganjil: ', arrAverage(arrGanjil))

