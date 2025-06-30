var wms_layers = [];

var format_elementidaCTR_0 = new ol.format.GeoJSON();
var features_elementidaCTR_0 = format_elementidaCTR_0.readFeatures(json_elementidaCTR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elementidaCTR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elementidaCTR_0.addFeatures(features_elementidaCTR_0);
var lyr_elementidaCTR_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elementidaCTR_0, 
                style: style_elementidaCTR_0,
                popuplayertitle: 'elementi da CTR',
                interactive: true,
    title: 'elementi da CTR<br />\
    <img src="styles/legend/elementidaCTR_0_0.png" /> Filo spinato, palizzata, staccionata, cancelli<br />\
    <img src="styles/legend/elementidaCTR_0_1.png" /> Muri divisori<br />\
    <img src="styles/legend/elementidaCTR_0_2.png" /> Muro a secco<br />\
    <img src="styles/legend/elementidaCTR_0_3.png" /> Muro di sostegno testa<br />\
    <img src="styles/legend/elementidaCTR_0_4.png" /> <br />' });
var format_Perimetro_1 = new ol.format.GeoJSON();
var features_Perimetro_1 = format_Perimetro_1.readFeatures(json_Perimetro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_1.addFeatures(features_Perimetro_1);
var lyr_Perimetro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_1, 
                style: style_Perimetro_1,
                popuplayertitle: 'Perimetro',
                interactive: true,
    title: 'Perimetro<br />\
    <img src="styles/legend/Perimetro_1_0.png" /> A<br />\
    <img src="styles/legend/Perimetro_1_1.png" /> B<br />\
    <img src="styles/legend/Perimetro_1_2.png" /> <br />' });
var format_Foto_2 = new ol.format.GeoJSON();
var features_Foto_2 = format_Foto_2.readFeatures(json_Foto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foto_2.addFeatures(features_Foto_2);
cluster_Foto_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Foto_2
});
var lyr_Foto_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Foto_2, 
                style: style_Foto_2,
                popuplayertitle: 'Foto',
                interactive: true,
                title: '<img src="styles/legend/Foto_2.png" /> Foto'
            });

lyr_elementidaCTR_0.setVisible(true);lyr_Perimetro_1.setVisible(true);lyr_Foto_2.setVisible(true);
var layersList = [lyr_elementidaCTR_0,lyr_Perimetro_1,lyr_Foto_2];
lyr_elementidaCTR_0.set('fieldAliases', {'ID': 'ID', 'FOGLIO': 'FOGLIO', 'CODICE': 'CODICE', 'DESCRIZION': 'DESCRIZION', 'TIPO': 'TIPO', 'PUNTI': 'PUNTI', 'IDENT': 'IDENT', 'BORDO': 'BORDO', 'ANNORILEV': 'ANNORILEV', 'FLAGSTATO': 'FLAGSTATO', });
lyr_Perimetro_1.set('fieldAliases', {'id': 'id', 'zona': 'zona', });
lyr_Foto_2.set('fieldAliases', {'id': 'id', 'Foto': 'Foto', });
lyr_elementidaCTR_0.set('fieldImages', {'ID': 'Range', 'FOGLIO': 'TextEdit', 'CODICE': 'TextEdit', 'DESCRIZION': 'TextEdit', 'TIPO': 'TextEdit', 'PUNTI': 'Range', 'IDENT': 'Range', 'BORDO': 'Range', 'ANNORILEV': 'Range', 'FLAGSTATO': 'TextEdit', });
lyr_Perimetro_1.set('fieldImages', {'id': 'TextEdit', 'zona': 'TextEdit', });
lyr_Foto_2.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_elementidaCTR_0.set('fieldLabels', {'ID': 'no label', 'FOGLIO': 'no label', 'CODICE': 'no label', 'DESCRIZION': 'no label', 'TIPO': 'no label', 'PUNTI': 'no label', 'IDENT': 'no label', 'BORDO': 'no label', 'ANNORILEV': 'no label', 'FLAGSTATO': 'no label', });
lyr_Perimetro_1.set('fieldLabels', {'id': 'no label', 'zona': 'no label', });
lyr_Foto_2.set('fieldLabels', {'id': 'no label', 'Foto': 'inline label - visible with data', });
lyr_Foto_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});