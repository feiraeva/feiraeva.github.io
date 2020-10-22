window.addEventListener("load", () => {
    carregaParceiros();
});

async function carregaParceiros() {
   let rowParceiros = document.querySelector("#rowParceiros"); 

    const res = await fetch("https://api-envio-email.herokuapp.com/parceiros");
    const parceiros = await res.json();
    
    parceiros.forEach(parceiro => {
        rowParceiros.innerHTML +=  `
            <div class="col-sm-3 mt-2 wow fadeIn">
                <div class="bg-primary">
                    <div class="card-block">
                        <img src="img/${parceiro.name_img}" alt="Male" class="img-team img-fluid img-parcerias rounded-circle"/>
                        <h5 class="card-title text-white pt-4">${parceiro.description}</h5>
                        <p class="card-text"> <a class="btn btn-outline-light btn-social-menor text-center rounded-circle" target="_blank" href="${parceiro.link_fb}">
                            <i class="fa fa-fw fa-facebook"></i>
                        </a>
                        <a class="btn btn-outline-light btn-social-menor text-center rounded-circle" target="_blank" href="${parceiro.link_wpp}">
                            <i class="fa fa-fw fa-whatsapp"></i>
                        </a>
                        <a class="btn btn-outline-light btn-social-menor text-center rounded-circle" target="_blank" href="${parceiro.link_insta}">
                            <i class="fa fa-fw fa-instagram"></i>
                        </a>
                        </p>
                    </div>
                </div>
            </div>
         `;
    });


}