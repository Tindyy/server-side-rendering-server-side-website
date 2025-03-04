/*** Express setup & start ***/

// Importeer het npm pakket express uit de node_modules map
import express, { application, json } from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({extended: true }))

// Stel het oba profile in
const apiData = 'https://fdnd-agency.directus.app/oba_profile'

// Stel het oba profile in
const apiFamily = 'https://fdnd-agency.directus.app/oba_family'

// Stel het basis endpoint in
const apiUrl = 'https://fdnd-agency.directus.app/items/'

const apiItem = (apiUrl + 'oba_item')

// dit is de home page & family

app.get('/', function(request, response) {
    fetchJson(apiItem).then((items) => { console.log(items.data)
        response.render('index', {
           
            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/
        });
    })
    console.log(apiItem) 
})

// dit is de overview

app.get('/overview', function(request, response) {
    fetchJson(apiItem).then((items) => { console.log(items.data)
        response.render('overview', {
           
            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/
        });
    })
    console.log(apiItem) 
})

app.get('/detail/:id', function(request, response) {
    fetchJson(apiItem + '?filter={"id":' + request.params.id + '}').then((items) => { console.log(items.data)
        response.render('detail', {

            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/
        });
    })
  
})



// // Maak een GET route voor de index
// app.get('/', function (request, response) {
//     // Haal alle personen uit de WHOIS API op
  
//     //Hier heb ik een filter gemaakt met nickname door nempty true te gebruiken worden ook de nicknames die ze hebben zichtbaar
//     fetchJson('https://fdnd-agency.directus.app/items/'
//     ).then((items) => {
//       // apiData bevat gegevens van alle personen uit alle squads
//       // Je zou dat hier kunnen filteren, sorteren, of zelfs aanpassen, voordat je het doorgeeft aan de view
  
//       // Render index.ejs uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
//       response.render('index', {items: items.data })
//     })
//   })

  // Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
});