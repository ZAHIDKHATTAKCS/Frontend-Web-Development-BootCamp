const addtocartbtn = document.querySelectorAll('.add-to-cart');

const orderbtn = document.querySelectorAll('.order-btn');





addtocartbtn.forEach(button=>{
    button.addEventListener('click',()=>{
        
        const productDiv = button.closest('.product');
        const message = productDiv.querySelector('.msg');
        const message2 = productDiv.querySelector('.msg2');
        message2.style.display='none';
        alert('Add to cart');
        message.style.display='block';
        message.innerText = "Product is added to cart";
    })
});


orderbtn.forEach(button=>{
    button.addEventListener('click',()=>{
        
        const productDiv = button.closest('.product');
        const message2 = productDiv.querySelector('.msg2');
        const message = productDiv.querySelector('.msg');
        message.style.display='none';
        alert('Order Placed');
        message2.style.display='block';
        message2.innerText = "Your Product has been placed Thanks!";

    })
});