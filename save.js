const searchPhone = () => {
    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;

    searchFiled.value = '';
    const url = https: openapi.programming-hero.com/api/phones?search=${searchText}

        fetch(url)
        .then(res => res.json())
        .then(data => showDisply(data.data));
}

const showDisply = (phones) => {

    console.log(phones)
    const searchResul = document.getElementById('searchResul');
    phones.forEach(phone => {

        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `

        <div  class="col">

        <div class="card">
         <img  class="w-50 " src="${phone.image}" class="card-img-top" alt="...">
         <h5 class="card-title">${phone.brand}</h5>
         <h2 class="card-title">${phone.phone_name}</h2>

         <button onclick="detalis (${phone.slug})" type="button" class=" btn btn-primary">Detalis</button>
       
         <div class="card-body">
        
         </div>
       </div>
     </div>
        `
        searchResul.appendChild(div);

    })




}
const searchPhone= ()=>{
    const searchFiled= document.getElementById('search-filed');
    const searchText =searchFiled.value;

    searchFiled.value='';
    const url = https://openapi.programming-hero.com/api/phones?search=${searchText}

    fetch (url)
    .then(res => res .json())
    .then (data => showDisply(data.data));
}

const showDisply=(phones)=>{
        
    console.log(phones)
    const searchResul=document.getElementById('searchResul');
    phones.forEach(phone=>{
       
        const div =document.createElement('div');
        div.classList.add('col');

        div.innerHTML=`

        <div  class="col">

        <div class="card">
         <img  class="w-50 " src="${phone.image}" class="card-img-top" alt="...">
         <h5 class="card-title">${phone.brand}</h5>
         <h2 class="card-title">${phone.phone_name}</h2>

         <button onclick="detalis (${phone.slug})" type="button" class=" btn btn-primary">Detalis</button>
       
         <div class="card-body">
        
         </div>
       </div>
     </div>
        `
       searchResul.appendChild(div);

    })

  



}
const detalis = ( dada)=>{
    console.log ( dada) ; 

  }
