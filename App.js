class Product {
    constructor(name,price,year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {
    addProduct(product) {
        let productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class='card text-center mb-4'>
            <div class='card-body'>
            <strong>Product Name</strong>: ${product.name}
            <strong>Product Price</strong>: ${product.price} USD
            <strong>Product Year</strong>: ${product.year}
            <a href='#' name='remove' class='btn btn-danger display-block mb-3'>Remove</a>
            </div>
            
        </div>
        `
        productList.appendChild(element)
        const consoleOutput = JSON.stringify(product)
        console.log(`Created new product: ${consoleOutput}`)
    }

    resetForm () {
        const productForm = document.getElementById('product-form').reset()
    }

    removeProduct(element) {
        if (element.name === 'remove') {
            element.parentElement.parentElement.remove() 
        }
    }

    showMessage(type) {
        let messageDiv = document.getElementById('message')
        let element = document.createElement('div')
        if (type == 'add') {
            element.innerHTML = `
            <div class="alert alert-success" role="alert">
            Product added
            <button type="button" name="removeMsgBtn" class="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
            </button>
            </div>`
        }else if(type == 'remove') {
            element.innerHTML = `
            <div class="alert alert-danger" role="alert">
            Product deleted
            <button type="button" name="removeMsgBtn" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            `
        }
       messageDiv.appendChild(element)
       setTimeout(() => {
           element.remove()
       }, 5000);
    }

    dismissMessage(element) {
        if (element.parentElement.name === "removeMsgBtn") {
       element.parentElement.parentElement.remove()
        }
    }
}

// DOM Events 

window.onload = function(){
    var productForm = document.getElementById("product-form");

    productForm.addEventListener('submit', function(event){
         const productName = document.getElementById("productName").value
         const productPrice = document.getElementById("productPrice").value
         const productYear = document.getElementById("productYear").value
         
         const product = new Product (productName, productPrice, productYear)

         const ui = new UI()
         ui.addProduct(product)
         ui.resetForm()
         ui.showMessage('add', 'show')
         event.preventDefault()
     })

       
    productList = document.getElementById("product-list");
    
    productList.addEventListener('click', function(e){
        const ui = new UI()
        ui.removeProduct(e.target)
        ui.showMessage('remove', 'show')
    })

    messages = document.getElementById("message");
    
    messages.addEventListener('click', function(e){
        const ui = new UI()
        ui.dismissMessage(e.target)
    })

 };
