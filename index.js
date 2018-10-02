
let data = [
  { "title": "First item", "price": 10.12, "quantity": 3, "category": "SMARTPHONE", from: new Date('2010-01-01') },
  { "title": "Second item", "price": 12.22, "quantity": 2, "category": "SMARTPHONE", from: new Date('2018-01-01') },
  { "title": "Third item", "price": 7.11, "quantity": 20, "category": "LAPTOP", from: new Date('2015-01-01') },
]

const ascend = (fn) => (a, b) => {
  return fn(a) > fn(b)
}

const descend = (fn) => (a, b) => {
  return fn(a) < fn(b)
}

const prop = (string) => (obj) => {
  return obj[string];
}

const sort = (fn) => (data) => {
  return data.slice().sort(fn)
}

const filter = (fn) => (data) => {
  return data.filter(fn)
}

const gt = (a) => (b) => a > b
const lt = (a) => (b) => a < b

const compose = (g, f) => (x) => g(f(x))

const sortByQuantity = sort(ascend(prop('quantity')));
const sortByPrice = sort(descend(prop('price')));

console.log(sortByQuantity(data));
console.log(sortByPrice(data));

const priceGreaterThan3 = compose(lt(10), prop('price'));

console.log(
  filter(priceGreaterThan3)(data)
);

