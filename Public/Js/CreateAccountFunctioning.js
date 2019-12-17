function LoadData(){
    var NewName = document.getElementById('Name').value;
    var Amount = parseInt(document.getElementById('initial-amount').value);
    async function Uploading(){
        var Response = await fetch('Data.json');
        var text = await Response.json();
        var plx = JSON.stringify(text);
        var Data = JSON.parse(plx);
        var Account = Data.Accounts;
        var newId = Account.length;
        alert("New Name is "+NewName+" having amount"+Amount+"$ in his account with id #"+newId);
        location.replace("http://localhost:3000/add/"+newId+"/"+NewName+"/"+Amount+"/");
    }
    Uploading();
}
function HomePage(){
    location.replace("http://localhost:3000");
}