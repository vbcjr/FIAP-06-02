# Projeto Gulliver

## Introduction 

Integração da API do Google Maps e Busca de Hotéis do Booking.com para o projeto Gulliver.
Para efetuar a busca de hotéis e testar o funcionamento das API 's, é necessário abrir a página “index.html”, preencher os campos do formulário de busca e clicar em “Buscar”.

Devs: 
Jimmy Wesley Maciel & 
Vlamir Baboza Carneiro Junior 

## Code Samples 

API Booking.com
```
'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates',
  params: {currency: 'AED', locale: 'en-gb'},
  headers: {
    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    'x-rapidapi-key': 'b2f5440022msh5f00f1431275149p1669f2jsn5e513acbfa3b'
  }
};
```

API Google Maps
```
GET https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=&v=weekly

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
```

## Installation 

Implementação JS das API’s

- Utilizar o API Key da integração com RapidAPI para gerar a conexão com a base de busca de hotéis, por meio de um end-point.
- Utilizamos a API do Google Maps para criar um iframe com a localização do hotel.
