// phon shop id 
const prentContanar = document.getElementById('prent-contanar');
// detalis box id 
const DetalisId = document.getElementById('Detalis-Box');

// main section ar id 
const main = document.getElementById('main');

// togglwspinner function
const toggleSpinner = displaystyle => {
  document.getElementById('spinner-box').style.display = displaystyle;
}

// button onclick start 
const SearchButton = () => {
  
  const input = document.getElementById('search-box');
  const errer = document.getElementById("error");
  const searchInput = input.value
  // togglwspinner function on
  toggleSpinner('block');
  if (searchInput == '') {
    errer.innerText = `❌ please enter a something  valuable...`;
    input.value = '';
    toggleSpinner('none');
    // previous all phone shop content clear 
    prentContanar.textContent = '';
    // previous Details content clear 
    DetalisId.textContent = '';
  } else {
    prentContanar.textContent = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    fetch(url)
      .then(res => res.json())
      .then(data => showphon(data.data));

    errer.innerText = '';
    input.value = '';

  }

}



// main function 
const showphon = (phon) => {


  for (const phons of phon.slice(0, 20)) {
    console.log(phons);

    const prentContanar = document.getElementById('prent-contanar');
    // prentContanar.textContent='';
    const div = document.createElement('div');

    // div.classList.add("");
    div.classList.add("col");
    div.innerHTML = `
                 
         
            <div class="card text-center ">
         
                <div class="card-body">
                <img src="${phons.image}" class="card-img-top w-75" alt="...">
                <p class="pb-0">Brand: ${phons.brand}</p>
                <h5 class="card-title pb-1">${phons.phone_name}</h5>
              
             
                    <button onclick="detalisBtn('${phons.slug}')" href="#" class=" btn-primary button-phon">Details</button>
                </div>
                </div>
          
               
            `;
    prentContanar.appendChild(div);


  }
  // togglwspinner function off
  toggleSpinner('none');

}
// Detalis button function
const detalisBtn = (Details) => {
  // previous Details content clear 
  DetalisId.textContent = '';
  // togglwspiner function on 
  toggleSpinner('block');
  const url = `https://openapi.programming-hero.com/api/phone/${Details}`;
  fetch(url)
    .then(res => res.json())
    .then(Deta => DetalisBox(Deta.data));
}

// main detalish function
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
            <p class="card-text mb-0"><small class="text-muted"> <b>storage:</b> ${detalis.mainFeatures.memory}</small></p>
            <p class="card-text mb-0"><small class="text-muted"> <b>ChipSet:</b> ${detalis.mainFeatures.chipSet}</small></p>
            <p class="card-text mb-0"><small class="text-muted"> <b>ReleaseDate:</b> ${detalis.releaseDate}</small></p>
            <p class="card-text mb-0"><small class="text-muted"> <b>USB:</b> ${detalis.others.USB}</small></p>
            <p class="card-text mb-0"><small class="text-muted"> <b>Sensors:</b> 1: ${detalis.mainFeatures.sensors[0]} 2: ${detalis.mainFeatures.sensors[1]} 3: ${detalis.mainFeatures.sensors[2]} 4: ${detalis.mainFeatures.sensors[3]} ${detalis.mainFeatures.sensors[4]} </small></p>
           

        


          </div>
        </div>
      </div>
    </div>
      
      `;
  DetalisId.appendChild(div);


toggleSpinner('none');


}