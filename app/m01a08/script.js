// catch the gost div below <h1>
const listCollection = document.querySelector('[data-lists]')
var list = ["Pineapple", "Banana", "Lemon", "Melon"]

const render = () => {
  list.forEach(element => {
    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = `${crypto.randomUUID()} - ${element}`
    listCollection.appendChild(item)
  })
  list = []
}
render(list)
