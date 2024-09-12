var myName='sara';
var myPswd='qwerty';
var myamt=10000;

function returnInfo(){
    var newName=document.getElementById('nameForm').value;
    var newPswd=document.getElementById('pswdForm').value;
    var newAmount=document.getElementById('amtForm').value;
    if(newName==myName && newPswd==myPswd){
        if(newAmount<myamt){
            var updatedamt=myamt-newAmount;
            document.getElementById('output').innerHTML=('Congratulations, '+newAmount+ ' is withdrawn from your account.New Balance is '+updatedamt);
        }else{
            alert('Insufficient Funds')
        }
    }else{
        alert('Incorrect Credentials.')
    }
}