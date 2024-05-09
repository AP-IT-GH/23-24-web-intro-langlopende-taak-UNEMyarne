
const apiKey = 'd868b2b0bb5c4f56a71542a27ed112e8';


function displayIPDetails(ip) {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').innerText = data.ip;
            document.getElementById('country').innerText = data.country_name;
            document.getElementById('region').innerText = data.region;
            document.getElementById('city').innerText = data.city;
            
        })
        .catch(error => console.error('Error:', error));
}


displayIPDetails('');