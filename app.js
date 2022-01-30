import { products } from './data.js'

const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')
const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')
const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')
  
let choosenProduct = products[0]

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // change the choosen product
        choosenProduct = products[index]

        // change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = `$${choosenProduct.price}`
        currentProductImg.src = choosenProduct.colors[0].img
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = 'white'
            size.style.color = 'black'
        })
        size.style.backgroundColor = 'black'
        size.style.color = 'white'
    })
})

productButton.addEventListener('click', () => {
    payment.style.display = 'flex'
})

close.addEventListener('click', () => {
    payment.style.display = 'none'
})