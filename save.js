const SearchButton =() => {
    const searchInput = document.getElementById('search-box').value;
    
    
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch (url)
    .then(res => res.json())
    .then(data => showphon(data));
    
    
    }
    const showphon = (phon) => {
       
        for (const phons of phon) {
            console.log(phons);
        }
      
      
    }
    