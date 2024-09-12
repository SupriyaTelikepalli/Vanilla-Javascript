
function calc(){
    var amt=parseFloat(document.getElementById('amount').value);
    var srvc=parseFloat(document.getElementById('service').value);
    var ppl=parseInt(document.getElementById('people').value);
    if(amt==''){
        alert('Please enter bill amount.')
    }else if(ppl==''){
        alert('enter no.of people')
    }else{
        var tip= Math.round((amt*srvc/100)/ppl);
        document.getElementById('output').innerHTML=('TIP AMOUNT $'+tip+' each');
    }
}