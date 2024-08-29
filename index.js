function fetchContent() {
    const url = 'http://135.181.37.152:3029/products';
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('Network response was not ok ' + response.statusTex)
        }
        return res.json();
    })
    .then(data => {
        let main = document.getElementById("main");
        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.style.maxWidth = '18rem';
            card.innerHTML = `
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price}</p>
                <a href="#" class="btn btn-primary">Go to Product Page</a>
            </div>
            `;
            main.appendChild(card);
        })                    
        console.log(main);
    })
}