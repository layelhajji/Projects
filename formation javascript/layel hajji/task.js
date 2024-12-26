const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(country=>console.log(country))
names.forEach(name=>console.log(name))
numbers.forEach(number=>console.log(number))
let T1=countries.map(country=>country.toUpperCase())
console.log(T1)
let T2=numbers.map(number=>number * number)
console.log(T2)
let T3=names.map(name=>name.toUpperCase())
console.log(T3)
let T4=products.map(product=>product.price)
console.log(T4)
let T5=countries.filter(country=>country.length==6)
console.log(T5)
let T6=countries.filter(country=>country.length>=6)
console.log(T6)
let T7=countries.filter(country=>country[0]=="E")
console.log(T7)
let T8=products.filter(product=>product.price != ''&&product.price != ' ')
console.log(T8)
let pos=countries.findIndex(country=>country==='Norway')
console.log(pos)
let posi=countries.findIndex(country=>country==='Russia')
console.log(posi)