var Table = document.getElementById('Table');
var name = document.getElementById('id').value;
var content = document.getElementById('Content');
function Details(){
    async function Uploading(){
        var Dataa = await fetch('./Js/DataBase/'+name+'.json');
        var text = await Dataa.json();
        var plx = JSON.stringify(text);
        var Data = JSON.parse(plx);
        var Details = Data.Details;
        var lenght = Details.length;
        for(var i = 0;i<lenght;i++){
            var Dataaaa = Details[i];
            if(Dataaaa == null){
                ;
            }
            else{
            var Jso = JSON.stringify(Dataaaa);
            var JSO = JSON.parse(Jso);
            var DT = JSO.DateTime;
            var Trans = JSO.Transaction
            Table.innerHTML = Table.innerHTML+"<tr><td>"+DT+"</td><td>"+Trans+"</td></tr>";
            }
        }
        var x = i* 25;
        content.style.paddingBottom = x+((window.innerHeight+x)*(10/100))+'px';
    }
    Uploading();
}
function HomePage(){
    location.replace("http://localhost:3000/");
}