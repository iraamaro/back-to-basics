// catch the gost div below <h1>
const listCollection = document.querySelector('[data-lists]')
var list = ["Pineapple", "Banana", "Lemon", "Melon"]

const render = () => {
  list.forEach(element => {
    const item = document.createElement('p')
    let id = crypto.randomUUID()
    item.id = id
    item.innerText = `${id} - ${element}`
    listCollection.appendChild(item)
    id = null
  })
  list = []
}
render(list)
