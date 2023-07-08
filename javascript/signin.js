  
const change=(id)=>{
  if(id==`sign_in`){
    document.getElementById("sign_up").style.display="flex"
  }else{
    document.getElementById("sign_in").style.display="flex"
  }
  document.getElementById(id).style.display="none"
}