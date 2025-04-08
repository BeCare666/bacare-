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

          // Initialisation de FEEPay
          FeexPayButton.init("render", {
            id: "672b15e3c8365bbb9b3ed029",  // Remplacez par votre ID de boutique
            amount: data.price,  // Calcul du montant total (prix * quantité)
            token: "fp_qpFKQzRsKXuZkysNG4rUWzArU2NUIpCUGucVMFs2rnujPUqIZ5kZDFI3ucqeMZCa",  // Remplacez par votre token API de FEEPay
            callback: () => {
                alert('Paiement réussi !');  // Appelez une fonction après le paiement (personnalisée ici)
            },
            callback_url: "your_callback_url",  // Facultatif : URL de callback si vous en avez une
            mode: 'LIVE',  // Utilisez 'LIVE' pour un environnement de production
            custom_button: false,  // Si vous souhaitez un bouton personnalisé
            id_custom_button: 'my-custom-button-id',  // Si vous avez un bouton personnalisé, utilisez cet ID
            custom_id: 'random_string_for_reference',  // Facultatif : pour faire référence à cette transaction
            description: data.name + data.info,  // Description du produit ou service
            case: "",  // MOBILE,,  Facultatif : Si vous souhaitez cibler un mode de paiement spécifique
        });
         setTimeout(()=>{
            // Sélectionner le bouton avec la classe 'feexpay_button' dans le div #render
            const button = document.querySelector('#render .feexpay_button');

            // Vérifier si le bouton existe et simuler un clic
            setTimeout(function() {
                const button = document.querySelector('#render .feexpay_button');
                if (button) {
                    button.click();
                } else {
                    console.log("Le bouton n'a pas été trouvé !");
                }
            }, 1000);  // Délai de 1 seconde, ajuste selon le besoin
            
        }, 500)
    })
});

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