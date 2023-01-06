const login=async (email,password)=>
{
 try{
    const res = await axios({
        method:'POST',
        url:'/user/login',
        data:{email,password}
     })
     console.log(res)
 }catch(err){console.log(err)}


}
document.querySelector('.login').addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password=document.getElementById('password').value;

    login(email,password);
    window.alert("successfully logged in !!");
})