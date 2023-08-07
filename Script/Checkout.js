(function(){
    const tableBody = document.querySelector('#cest tbody');
    const tableFooter = document.querySelector('#cest tfoot');
    const selectTrigger = document.querySelector('.select-trigger');
    const optionsList = document.querySelector('.options');
    const selectedDivMethod = document.querySelector('#selectedMethod');
    
    let articles=[];
    let price= 0;
    
    document.addEventListener("DOMContentLoaded",()=>{
        articles= JSON.parse(localStorage.getItem("carrito"));
        price= JSON.parse(localStorage.getItem("precioTotal"));
        cestHTML();
        
    });

    function cestHTML(){
        articles.forEach(article => {
            
            const { logo, league, price } = article
            const newTR = document.createElement('tr');
            const priceTR = document.createElement('tr');
            newTR.innerHTML =`
                <td>
                    <img src="${logo}" class="logo" style= "width: 80px; height 80px; display: block; margin: auto"/>
                </td>
                <td>${league}</td>
                <td>$${price}</td>
            `
            tableBody.appendChild(newTR)
            priceTR.innerHTML =`
                <td></td>
                <td></td>
                <td>Total: $${price}</td>
            `;
            tableFooter.appendChild(priceTR);
        })
    }
    
    // Mostrar u ocultar opciones al hacer clic en la opción seleccionada
    selectTrigger.addEventListener('click', () => {
        if(!optionsList.classList.contains('open')) {
            optionsList.classList.add('open');
        }else{
            optionsList.classList.remove('open');
        }
    });

    
    optionsList.addEventListener('click', e => {
        const selectedOption = e.target.textContent;
        const selectedOptionElement = document.querySelector('.selected-option');
        selectedOptionElement.textContent = selectedOption;
        optionsList.classList.remove('open');
        selectedMethod(selectedOption)
    });
    function selectedMethod(method){
        method = method.trim();
        switch(method){
            case 'PayPal':
                selectedDivMethod.innerHTML= `<h1 id="paypal-button-container"></h1>`
                break;
            default: break;
        }
    }
})()