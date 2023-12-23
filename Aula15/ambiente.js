let num = [5, 8, 2, 9, 1, 6, 7]
num.sort()
console.log('')

console.log('Olhe para o código!!!')

console.log('')
console.log('Maneira complicada')
console.log('')

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])

console.log('')
console.log('Maneira simples')
console.log('')

for (var pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}

console.log('')
console.log('Maneira muito simples')
console.log('')

for (var pos in num) {
    console.log(num[pos])
}

console.log('')