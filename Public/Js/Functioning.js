var button = document.getElementById('button');
var link = document.getElementById('link');
function Functioning(){
    var AmountEntered= parseInt(document.getElementById('AmountEntered').value);
    var id = document.getElementById("id").value;
    var n = parseInt(id);
    async function Extracting(){
        var Response = await fetch('Data.json');
        var text = await Response.json();
        var plx = JSON.stringify(text);
        var Data = JSON.parse(plx);
        var Account = Data.Accounts[n];
        var Amount = Account.amount;
        var name = Account.name;
        var times = Account.Times;
        var idd = Account.id;
        times+=1;
        var netAmount = Amount - AmountEntered;
        if(AmountEntered>Amount){
            alert(name+" don't have this much amount");
        }
        else{
            alert(name+" with Bank Id #"+idd+" Had "+Amount+"$ in his Account. "
            +AmountEntered+"$ is Withdrawn from "+name+"'s account. Only "+netAmount+"$ have left in "+name+"'s Account."
            )
            location.replace("http://localhost:3000/update/"+id+"/"+netAmount+"/"+times+"/"+name+"/"+AmountEntered+"/");
        }
    }
    Extracting();
}
function HomePage(){
    location.replace("http://localhost:3000/");
}