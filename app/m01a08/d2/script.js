const listVerbs = document.querySelector('[verbs-list-frame]') 
const getForm = document.querySelector('[verbs-data-frame]')
const getInput = document.querySelector('[verbs-inputs]')
var verbs = null

getForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const verbInput = getInput.value
  if([null, ''].includes(verbInput)) return
  const verbsData = createList(verbInput)  
  list = verbsDataa
  render()
})

const render = () => {
  verbs.forEach(element => {
    //const base = document.createElement('tr')
    //const content = document.createElement('td')
    //content.appendChild('innerText = `${element.id} - ${element.data}`
    //listCollection.appendChild(item)
    //list = []
  })
} 

const createList = (verbContent) => {
  verbContent = verbContent.substr(0, verbContent.length-2)
  let data = [
    {
      eu: [
        {pronoun: 'Eu'},
        {present: verbContent + 'o'},
        {simplePast: verbContent + 'ei'},
        {future: verbContent + 'arei'}
      ]
    },
    {
      tu: [
        {pronoun: 'Eu'},
        {present: verbContent + 'o'},
        {simplePast: verbContent + 'ei'},
        {future: verbContent + 'arei'}
      ]
    }
  ]
  return data
} 
