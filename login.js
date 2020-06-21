(function(){

  const logbt=document.querySelector('#lbtn');
  
  let currentUser=[];
  currentUser=JSON.parse(localStorage.getItem("NewUserList"))
      console.log(currentUser);
      console.log(currentUser[0])
  
      const checkNewUser = (ev) =>{

      bool=false;
     for(let i=0;i<currentUser.length;i++)
     { 
      // console.log("inside for",currentUser[i]);
     // console.log("inside for",curUser)
      if(document.getElementById('userEmail').value == currentUser[i].email && document.getElementById('userpsw').value == currentUser[i].password)
       {
         console.log("inside if")
        alert("You have Successfully Logged in");
        window.open('http://127.0.0.1:5500/index.html');
        bool=true;
      }   
     }
     if(bool==false)
     {
      alert("Please register first");
      console.log("Wrong Input");
     }
    }
  
  logbt.addEventListener('click',checkNewUser);
  
  })()