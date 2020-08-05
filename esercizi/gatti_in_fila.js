var gatti = 44;
var gattixfila = 6;
var file = Math.ceil(gatti/gattixfila);
var gattitot = gattixfila*file;
var gattimancanti = gattitot-gatti
//console.log('Ci sono ' + gatti + ' gatti disposti su ' + file + ' file e nell ultima mancano ' + gattimancanti + ' gatti');
console.log(`Ci sono ${gatti} gatti disposti su ${file} file e nell ultima mancano ${gattimancanti} gatti`);
