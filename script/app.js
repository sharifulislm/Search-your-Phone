const SearchButton =() => {
    const searchInput = document.getElementById('search-box').value;
    
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    fetch (url)
    .then(res => res.json())
    .then(data => showphon(data.data));
    
    
    }
    const showphon = (phon) => {
        for (const phons of phon) {
            console.log(phons);
            const prentContanar= document.getElementById('prent-contanar');
            const div = document.createElement('div');
            
            // div.classList.add("");
            div.classList.add("col-4");
            div.innerHTML = `
                 
         
            <div class="card text-center gx-5 m-3">
         
                <div class="card-body">
                <img src="${phons.image}" class="card-img-top w-75" alt="...">
                <p class="pb-0">Brand: ${phons.brand}</p>
                <h5 class="card-title pb-1">${phons.phone_name}</h5>
              
             
                    <a onclick="detalisBtn('${phons.slug}')" href="#" class=" button-phon">Details</a>
                </div>
                </div>
          
               
            `;
            prentContanar.appendChild(div);
          
        }
    }
    const detalisBtn = (Details) => {
        console.log();
        const url = `https://openapi.programming-hero.com/api/phone/${Details}`;
        fetch (url)
        .then(res => res.json())
        .then(Deta => DetalisBox(Deta.data));
    }

    const DetalisBox = (detalis) => {
               console.log(detalis);
      const DetalisId = document.getElementById('Detalis-Box');
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="" >
      <div class="row d-flex justify-content-center g-0 p-3 ">
        <div class="col-md-2">
          <img src="${detalis.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title mb-0"> ${detalis.brand}</h5>
            <p class="card-text mb-0"><small class="text-muted "> <b> name:</b> ${detalis.name}</small></p>
            <p class="card-text mb-0"><small class="text-muted"> <b>Display:</b> ${detalis.mainFeatures.displaySize}</small></p>

            <p class="card-text mb-0"> <b> storage: </b><small class="text-muted"> ${detalis.mainFeatures.memory}</small></p>
            <p class="card-text mb-0"> <b> ChipSet: </b><small class="text-muted"> ${detalis.mainFeatures.chipSet}</small></p>

            <p class="card-text mb-0"><B> ReleaseDate:</B> ${detalis.releaseDate}<p>
          </div>
        </div>
      </div>
    </div>
      
      `;
      DetalisId.appendChild(div);

     
    }