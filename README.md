

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [description](#Description)
  * [Installation](#installation)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Description
What have I done so far?
* Created a stylesheet
* I have fetched data from the given API, and rendered the data into the html file. The data I've used are the object images and titles.
The goal was to make a homepage showing off the art and a detail page for each artwork. To show off all the art on the homepage I have looped
the object. 
* On the detail page I have also used the image and title of the object. I've also added a [the following](https://github.com/Tindyy/server-side-rendering-server-side-website/blob/5f7dda844ec5e80430b2f30a2e72044bd664d9d1/views/artObjectDetail.liquid#L8-L12) for when a field is empty to enter 
the following in the empty field.:
* Lastly I've tried to match the css styling to the [Qatar museum](https://qm.org.qa/en/) website, figma design and [previous designs](https://github.com/fdnd-agency/fabrique/tree/design-challenge?tab=readme-ov-file#studentenwerk)

```

{% if art.image %}
 null
 {% else %}
 Sorry Image not found
 {% endif %}

 ```

      

## Installation
To run the project: `npm start`
To terminate batch job: `^c` 

GSAP: `npm install gsap`
## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
