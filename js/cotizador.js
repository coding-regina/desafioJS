var ppase_dia = 0;
var ppase_completo = 0;
var ppase_dosdias = 0;
var ccamisa_evento = 0;
var eetiquetas = 0;

function calcular_total() {
    ppase_dia = document.getElementById('pase_dia').value;
    ppase_completo = document.getElementById('pase_completo').value;
    ppase_dosdias = document.getElementById('pase_dosdias').value;
    ccamisa_evento = document.getElementById('camisa_evento').value;
    eetiquetas = document.getElementById('etiquetas').value;
    var ssuma_total = ppase_dia * 30 + ppase_dosdias * 45 + ppase_completo * 50 + ccamisa_evento * 10 + eetiquetas * 2
    document.getElementById('suma-total').innerHTML = '<p class="numero"> $' + ssuma_total + '</p>';

    var sstring = '';
    sstring = ppase_dia != 0? sstring + ppase_dia + 'x viernes': '';
    sstring = ppase_completo  != 0? sstring + ', ' + ppase_completo + 'x completo': sstring + ''; 
    sstring = ppase_dosdias  != 0? sstring + ', ' + ppase_dosdias + 'x 2días': sstring + ''; 
    sstring = ccamisa_evento  != 0? sstring + ', ' + ccamisa_evento + 'x camisa': sstring + '';
    sstring = eetiquetas  != 0? sstring + ', ' + eetiquetas + 'x etiq.': sstring + '';
    document.getElementById('lista-productos' ).innerHTML = sstring;
      
}