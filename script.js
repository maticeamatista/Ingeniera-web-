const numTarjetas = 9;
const cardContainer = document.getElementById("card-container");

for (let i = 0; i < numTarjetas; i++) {
    // Genera una URL de imagen aleatoria usando Picsum
    const imageUrl = `https://picsum.photos/300/180?random=${i}`;

    cardContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card rounded">
                <div class="card-img-top custom-thumbnail">
                    <img src="${imageUrl}" alt="Imagen aleatoria">
                </div>
                <div class="card-body">
                    <p class="card-text small">
                        This is a wider card with supporting text below as a natural lead-in to additional content. 
                        This content is a little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button class="btn btn-outline-secondary btn-sm">View</button>
                            <button class="btn btn-outline-secondary btn-sm">Edit</button>
                        </div>
                        <small class="text-muted">${i + 1} mins</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}