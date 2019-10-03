function loginid(){
    var credentials=[{email:"elon@gmail.com",password:"musk"},{email:"admin@gmail.com",password:"password"}];
    var i;
    var x=0;
    for(i=0;i<credentials.length;i++)
    {
        if(((document.getElementById("exampleInputEmail1").value)==(credentials[i].email))&&((document.getElementById("exampleDropdownFormPassword1").value)==(credentials[i].password)))
    {
        x=8;
        location.href="home.html";
    }
    }
    if(x==0)
    {
        alert("Authentication failed, Try again!");
    }
}
