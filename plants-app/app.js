const testCard = document.querySelector('[data-test-card]')
const plantContent = document.querySelector('[data-plant-content]')
const closePlantContent = document.querySelector('[data-close-plant]')

testCard.addEventListener('click', () => {
    plantContent.classList.toggle('active')
    document.body.classList.add('plant-content-on')
})

closePlantContent.addEventListener('click', () => {
    plantContent.classList.remove('active')
    document.body.classList.remove('plant-content-on')
})