const numTarjetas = 9;
const cardContainer = document.getElementById("card-container");
const timers = new Array(numTarjetas).fill(0);
let intervalId;

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

function openModal(imageUrl) {
    modal.style.display = "block";
    modalImage.src = imageUrl;
}

function closeModalHandler() {
    modal.style.display = "none";
}

closeModal.addEventListener("click", closeModalHandler);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});

function updateTimers() {
    document.querySelectorAll(".time-counter").forEach((counter, index) => {
        timers[index]++;
        counter.textContent = `${timers[index]} mins`;
    });
}

intervalId = setInterval(updateTimers, 60000);

function changeImage(event, imageElement, viewButton, timerElement, index) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newImageUrl = e.target.result;
            imageElement.src = newImageUrl;
            viewButton.setAttribute("data-image", newImageUrl);
            timers[index] = 0;
            timerElement.textContent = "0 mins";
        };
        reader.readAsDataURL(file);
    }
}

for (let i = 0; i < numTarjetas; i++) {
    const imageUrl = `https://picsum.photos/300/180?random=${i}`;

    cardContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card rounded">
                <div class="card-img-top custom-thumbnail">
                    <img src="${imageUrl}" alt="Imagen aleatoria" class="card-image">
                </div>
                <div class="card-body">
                    <p class="card-text small">
                        This is a wider card with supporting text below as a natural lead-in to additional content. 
                        This content is a little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button class="btn btn-outline-secondary btn-sm view-btn" data-image="${imageUrl}">View</button>
                            <label for="file-input-${i}" class="btn btn-outline-secondary btn-sm edit-btn">Edit</label>
                            <input type="file" id="file-input-${i}" class="file-input" accept="image/*" style="display: none;">
                        </div>
                        <small class="text-muted time-counter">0 mins</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

cardContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-btn")) {
        const imageUrl = event.target.getAttribute("data-image");
        openModal(imageUrl);
    }
});

document.querySelectorAll(".file-input").forEach((input, index) => {
    const imageElement = document.querySelectorAll(".card-image")[index];
    const viewButton = document.querySelectorAll(".view-btn")[index];
    const timerElement = document.querySelectorAll(".time-counter")[index];

    input.addEventListener("change", (event) => {
        changeImage(event, imageElement, viewButton, timerElement, index);
    });
});
