    ymaps.ready(init);
    var myMap,
        myPlacemark1;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.75629112, 37.71540882],
            zoom: 17
        });
    
    myMap.controls
            .remove('rulerControl')
            .remove('searchControl')
            .remove('zoomControl')
            .remove('trafficControl')
            .remove('typeSelector')
            .remove('typeSelector')
            .remove('geolocationControl')
            .remove('routeEditor')
            .remove('fullscreenControl')
            .remove('routeButtonControl')
            .remove('routePanelControl')

        myMap.behaviors.disable([
          'scrollZoom'
          ]);


        myPin = new ymaps.GeoObjectCollection({}, {
              iconLayout: 'default#image',
              iconImageHref: 'img/metka.png',
              iconImageSize: [42, 42],
              iconImageOffset: [-20, -40]
           });

     myPlacemark1 = new ymaps.Placemark([55.75643632, 37.71449686], { 
        balloonContentHeader: 'Добрый картон',
        balloonContentBody: 'Авиамоторная, 4А',
        hintContent: 'Авиамоторная, 4А' 
      });

     myPin.add(myPlacemark1);
     myMap.geoObjects.add(myPin);
    }
