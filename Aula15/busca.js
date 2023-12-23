let num = [5, 8, 2, 9, 1, 6, 7]
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
var pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}