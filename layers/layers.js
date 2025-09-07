var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GTAccraHealthFacilities_1 = new ol.format.GeoJSON();
var features_GTAccraHealthFacilities_1 = format_GTAccraHealthFacilities_1.readFeatures(json_GTAccraHealthFacilities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GTAccraHealthFacilities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GTAccraHealthFacilities_1.addFeatures(features_GTAccraHealthFacilities_1);
var lyr_GTAccraHealthFacilities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GTAccraHealthFacilities_1, 
                style: style_GTAccraHealthFacilities_1,
                popuplayertitle: 'GT Accra Health Facilities',
                interactive: true,
                title: '<img src="styles/legend/GTAccraHealthFacilities_1.png" /> GT Accra Health Facilities'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GTAccraHealthFacilities_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GTAccraHealthFacilities_1];
lyr_GTAccraHealthFacilities_1.set('fieldAliases', {'Name': 'Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_GTAccraHealthFacilities_1.set('fieldImages', {'Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_GTAccraHealthFacilities_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Location': 'inline label - always visible', });
lyr_GTAccraHealthFacilities_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});