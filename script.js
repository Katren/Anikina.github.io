ymaps.ready(init);

var myMap;

var gold = [];
var placemarks = [gold];

function init() {
    myMap = new ymaps.Map("map", {
        center: [41.20, 74.00],
        zoom: 6,
        type: 'yandex#hybrid'
    });
    myMap.behaviors.enable('scrollZoom');
    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            right: 40,
            top: 5
        }
    });

    var data = loadGeoData();
    for (var i=0; i < data.length; i++) {
        var row_data = data[i];

        var type = row_data[0];        
		var x = Number(row_data[10]);
		var y = Number(row_data[9]);
		var text = row_data[0];
        var size = Number(row_data[7]) * 10;
        
        var placemark = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		}, {
            iconLayout: 'twirl#violetIcon',
            iconImageSize: [size, size],
            iconImageOffset: [-size/2, -size/2],
            visible: false
        });
        
        if (type == 'Золото') {
            gold.push(placemark);
        } 
    }

    putPlacemarksOnMap();

    var gold_button = new ymaps.control.Button('Золото');
    


    var typeControls = new ymaps.control.Group({
            items: [gold_button]
        }, {
            position: { left: 40 }
    });

    gold_button.events.add(['select'], function (e) {
        showGroup(gold);
    });
    gold_button.events.add(['deselect'], function (e) {
        hideGroup(gold);
    });
   

    myMap.controls.add(typeControls);
}


function showGroup(group) {
    myMap.setCenter([41.20, 74.00], 6, { duration: 1000 });
    for (var i = 0; i < group.length; i++) {
        group[i].options.set({ visible: true });
    }
}

function hideGroup(group) {
    for (var i = 0; i < group.length; i++) {
        group[i].options.set({ visible: false });
    }
}


function putPlacemarksOnMap() {
    for (var i = 0; i < placemarks.length; i++) {
        for (var j = 0; j < placemarks[i].length; j++) {
            myMap.geoObjects.add(placemarks[i][j]);
        }        
    }
};



function loadGeoData() {
var data = [
["Золото","Благородные металлы","Металлы","Рудные","Проявление","","Мелкое","3","","71.85","42.7","13241885","4734291","","71.85","42.7","71.85","42.7","Манасский район","/icon/Au04.png","753__Kichikkaiyndy.txt","","","","Таласская область","","42.7","Поисково-оценочные работы (канавы, скважины) в 1980-83гг, выс. 1200-1520м, перспективно. <br><br>Р1 на глуб. 10-150м всего 2.368т, в т.ч. по 34 мелким линзов. телам 0.568т (11.9г/т). <br><br>Au-5.6 г/т <br>Cu-0.3-1.0 % <br>WO3-0.12-0.19 % <br>Bi-до 0.5%  <br>Pt-0.01-3.0% <br><br>В вулканогенно-осадочных породах Є-О1, прорванных интрузией гранитоидов  - 53 линзовидные рудные тела (9-280мх0.2-40м)."],
["Золото","Благородные металлы","Металлы","Рудные","Проявление","","","0","","71.87","42.68","13243182","4732388","","71.87","42.68","71.87","42.68","Манасский район","/icon/Au04.png","754__Katranka.txt","","","","Таласская область","","42.68","1980-83гг -  геолсъемка м-ба 1:50000 с поисковой детализацией(канавы, скважины),  выс. 1100-1250м, перспективное. <br><br>Р1 на глуб. 20м 0.026т. <br><br>Au-14.43г/т<br><br>В вулканогенно-осадочных породах Є-О1 - 5 рудных  линзовидных тел (1.0-5.7мх0.2-5.3м)."],
["Золото","Благородные металлы","Металлы","Рудные","Проявление","","","0","","72.58","42.67","13301872","4728607","4","72.58","42.67","72.58","42.67","Таласский район","/icon/Au04.png","755__Barkol (#9).txt","","","","Таласская область","","42.67","1973г -  поисково-ревизионные работы (канавы, шурфы), выс. 2400-2600м, доступно, перспективы ограничены. <br><br>Р1 на глуб. 25м 0.006т. <br><br>Au-10г/т <br>Ag-10г/т <br><br>Блок осадочно-метаморфических пород O1-2 в зоне смятия,  рудная жила - 50мх0.2м."],
["Золото","Благородные металлы","Металлы","Рудные","Проявление","","","0","","73.48","42.72","13375759","4732444","","73.48","42.72","73.48","42.72","Панфиловский район","/icon/Au04.png","756__Granotogorskoe East.txt","","","","Чуйская область","","42.72","1950г -  поиски м-ба 1:25000 (канавы, шурфы, скважины), условия благоприятные, выс. 1200-2000 м, перспективное. )  <br><br>Р2 на глуб. 100м Au -0.403т. <br><br>Au-6г/т <br>Pb -0.62-35.7% <br>Zn-0.07-0.22% <br>Cu -0.47-3.4% <br><br>Среди песчано-сланцевых отложений D3-C1 три жильных рудных тела (100-150х0.2-1.6м)."],
["Золото","Благородные металлы","Металлы","Рудные","Проявление","","","0","","75.68","42.73","13555961","4733406","4","75.68","42.73","75.68","42.73","Кеминский район","/icon/Au04.png","757__Severny prpsp..txt","","","","Чуйская область","","42.73","1993г -  поиски м-ба 1:50000, выс. 1540м,  перспективное. <br><br>Р2 на глуб. 50м 0.45т. <br><br>Au-6.0г/т <br>Cu -до 1.0% <br><br>В гнейсовидных гранодиоритах O1-2 минерализованная зона (100х5-7м)."],
["Золото","Благородные металлы","Металлы","Рудные","Коренное месторождение","","","0","","75.62","42.67","13550556","4725958","4","75.62","42.67","75.62","42.67","Кеминский район","/icon/Au04.png","758__Kyzyl-Bulakskoe.txt","","","","Чуйская область","","42.67","Поиски при геолсъемке м-ба 1:50000  (канавы, скважины), выс. 1950м, легкая доступность,  район освоен. Р2 на глуб. 50м 0.271т. <br><br>Au-2.7г/т <br>Pb -1.18%<br><br>В гнейсовидных гранитах O1-2 - 2 жильных рудных тела (40-70х0.7-1.4м)."],
["Золото","Благородные металлы","Металлы","Рудные","Проявление","","","0","","76.23","42.9","13600732","4752433","4","76.23","42.9","76.23","42.9","Кеминский район","/icon/Au04.png","759__Vysotnoe.txt","","","","Чуйская область","","42.9","1993г - поиски м-ба 1:50000, выс. 3550м, доступно, район освоен  <br>Перспективное. <br>На глуб. 100м Р2 -1.87т.<br><br>Au-3.0г/т <br><br>На контакте сланцев (PR1) c плагиогранитами O1 - 2 минерализованных зоны (200мх10-15м)."],
["Золото","Благородные металлы","Металлы","Рудные","Коренное месторождение","114","Мелкое","3","","76.2","42.88","13598036","4750541","","76.2","42.88","76.2","42.88","Кеминский район","/icon/Au04.png","760__Komator.txt","","","","Чуйская область","","42.88","1995г - поисково-оценочные работы (канавы, скважины),  выс. 2900-3500м, легкая доступность, район освоен,  по ТЭС разработка рентабельна. <br><br>На  глуб. 90м <br>С2 -2.74т. <br>Р1- 3.83т<br>С2+Р1 - 6.57т (7.55г/т) <br><br>Au-7.55г/т <br>Pb-0.4 % <br>Zn-до 1.0 % <br>Cu -0.07 % <br>As-до 1.0% <br><br>Кварцевая жила в амфиболовых сланцах протерозоя (600мх3.9м)."],
["Золото","Благородные металлы","Металлы","Рудные","Коренное месторождение","","","0","","76.22","42.85","13599452","4746858","","76.22","42.85","76.22","42.85","Кеминский район","/icon/Au04.png","761__Karaultas.txt","","","","Чуйская область","","42.85","1993г  -  поиски м-ба 1:50000, выс. 3400м, район освоен. <br><br>Р2- 3.6т <br><br>Au-1.265г/т <br><br>В амфиболовых сланцах PR- жильная зона (250-800мх2.5-15.0м)."],

];
	return data;	
}
