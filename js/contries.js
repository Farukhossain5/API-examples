const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = (countries) => {
    // for (const country of countries) {
    //     console.log(country)
    // } 
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>name: ${country.name.common} </h3>
        <p>Country Capital: ${country.capital ? country.capital[0]:'no Capital'}
        <button onclick="loadCountryDetail('${country.cca2}')">Detail</button>
        `;
        countriesContainer.appendChild(countryDiv);

    })
    
}

const loadCountryDetail = (code) => {
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country datail',code)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Detail: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
    // displayCountryDetail.appendChild(countryDetail);
}
loadCountries();