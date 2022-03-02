var validate = ()=>{

  var formstatus = true;
 
  var fname = document.getElementById("fname").value.trim();//remove space from all sides
  if(fname==""){
      formstatus=false;
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("demo3").innerText="Please Enter Valid message";
  }else{
      document.getElementById("fname").style.borderColor="green";
      document.getElementById("demo3").innerText="";
  }

  var name = document.getElementById("name").value.trim();//remove space from all sides
  if(name==""){
      formstatus=false;
      document.getElementById("name").style.borderColor="red";
      document.getElementById("demo1").innerText="Please Enter name";
  }else{
      document.getElementById("name").style.borderColor="green";
      document.getElementById("demo1").innerText="";
  }


  var epattern =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var email = document.getElementById("email"). value.trim();
    if( ! epattern.test(email))
    {
        formstatus = false;
        document.getElementById("email").style.borderColor="red";
        document.getElementById("demo").innerText="Please Enter Valid Email Address";

    }else{
        // document.getElementById("demo").innerText="Please Enter Valid Email Address";
        document.getElementById("email").style.borderColor="green";
        document.getElementById("demo").innerText="";

    }

    
}

var myfun = () =>{
    var formstatus = true;
    var epattern =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var email = document.getElementById("email"). value.trim();
    if( ! epattern.test(email))
    {
        formstatus = false;
        document.getElementById("email").style.borderColor="red";
        document.getElementById("demo").innerText="Please Enter Valid Email Address";

    }else{
        // document.getElementById("demo").innerText="Please Enter Valid Email Address";
        document.getElementById("email").style.borderColor="green";
        document.getElementById("demo").innerText="";

    }

}

var one = (photourl) =>{
    document.getElementById("mypic").src = photourl;
}









   