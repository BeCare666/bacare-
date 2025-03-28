var btn_buy = document.querySelectorAll('.btn-buy');
btn_buy.forEach((btn)=>{
    btn.addEventListener('click', function(){
        var id = this.getAttribute('data-id');
        var name = this.getAttribute('data-name');
        var price = this.getAttribute('data-price');
        var info = this.getAttribute('data-info');
        var quantity = 1;
        var data = {
            id: id,
            name: name,
            price: price,
            info: info,
            quantity: quantity,
        }
        console.log(data);
{/*        fetch('/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                var cart_count = document.querySelector('.cart-count');
                cart_count.innerHTML = data.cart_count;
            }
        })*/}
    })
})