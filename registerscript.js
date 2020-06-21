(function() {


    const Submitbt=document.querySelector('#s_bn');
    const cancelbt=document.querySelector('#c_bn');

let newusers=[];
const storeNewuser = (ev)=>{
  let newuser={
    username: document.getElementById("rname").value,
    email: document.getElementById("remail").value,
    password: document.getElementById("rpw").value,
    copassword:document.getElementById("rcopw").value
  }
  newusers.push(newuser);
  console.log(newusers);
  document.forms[0].reset();
  if(newuser.password!==newuser.copassword)
  {
    alert("Please fill Same password and confirm password");
  }
  else {
     if(newuser.username!=="" && newuser.email!=="" && newuser.password!=="" )
  {
    localStorage.setItem('NewUserList',JSON.stringify(newusers));
   alert("your Data is successfully stored");
   window.open('http://127.0.0.1:5500/index.html');
  }
  else
  alert("Fill your form properly");
}
}
  

const cancleFun = (ev) =>{
      window.open('http://127.0.0.1:5500/login.html');
}
  Submitbt.addEventListener('click',storeNewuser);
  cancelbt.addEventListener('click',cancleFun);
    
   
 
})()


