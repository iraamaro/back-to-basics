// catch the ghost div below <h1>
const listCollection = document.querySelector('[data-list]')

const getForm =  document.querySelector('[data-new-list-form]')

const getInput = document.querySelector('[data-new-list-input]')

var list = []

getForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const listInput = getInput.value
  if([null, ''].includes(listInput)) return
  const listData = createList(listInput)
  getInput.value = null
  list.push(listData)
  render()
}) 

const render = () => {
  list.forEach(element => {
    const item = document.createElement('p')
    item.innerText = `${element.id} - ${element.data}`
    listCollection.appendChild(item)
    list = []
  })
}

const createList = (listContent) => {
  let contentObject = {
    id: crypto.randomUUID(),
    data: listContent
  }
  return contentObject
}
