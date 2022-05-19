
function show() {
    document.getElementById("list").classList.toggle("show");
}

function show2() {
  document.querySelector(".btn-group").classList.toggle("btn-group2");
}

function openWep() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("list").style.display = "none";
}

function closeWep() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("list").style.display = "";
}

// +++++++++++++++++++++++++++++++++++++++++++++++++
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("hiden");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 

  $(document).ready(function() {
    $('.gallery_pics').click(function(e) {
      $(this).toggleClass('fullscreen');
    });
  });

// +++++++++++++++++++++++++++++++++++++++++++++++++++
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Locate",
    "esri/widgets/Home",
    "esri/support/actions/ActionButton"
  
  ], function (esriConfig, Map, MapView, FeatureLayer, BasemapGallery, Locate, Home) {
  
    esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";
  
    const map = new Map({
      basemap: "arcgis-topographic"
    });
    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [31.700001, 26.549999],
      zoom: 9.7
    });
  
  let mybtn = document.getElementById("btn");
  mybtn.onclick = function () {
    const parksLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/geol/FeatureServer/1"
    });
    map.add(parksLayer, 0);
  }
  
  let mybtn2 = document.getElementById("btn2");
  mybtn2.onclick = function () {
    const trailsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار/FeatureServer/5"
    });
    map.add(trailsLayer, 0);
  }
  let mybtn3 = document.getElementById("btn3");
  mybtn3.onclick = function () {
    const trailheadsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/فنادق/FeatureServer/1"
    });
    map.add(trailheadsLayer);
  
  }
  
  const element = document.getElementById('back')
  element.addEventListener("click", () => {
      location.reload();
  });
  
    const basemapGallery = new BasemapGallery({
      view: view,
      container: basemapGalleryDiv
    });
    view.ui.add(basemapGallery, {
      position: "bottom-left"
    });
  
    const locateBtn = new Locate({
      view: view
    });
  
    view.ui.add(locateBtn, {
      position: "top-left"
    });
    const homeBtn = new Home({
      view: view
    });
    view.ui.add(homeBtn, "top-left");
  
});