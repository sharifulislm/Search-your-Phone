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
  
      const DetalisId = document.getElementById('Detalis-Box');
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card mb-3">
  <img src="${detalis.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
      
      `;
      DetalisId.appendChild(div);

     
    }