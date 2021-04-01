//https://docs.google.com/document/d/1aX0mHUkG8rSNyBK8x4q1gxGg1ESpCl8SBEZ70T22F3Q/edit?ts=6049bd35#                 api


export const getProducts=()=>{
    return fetch('http://shreejodhana.com/fashion/api/get-all-products')
    .then((response)=>{
        return response.json()
    })
    .catch((err)=>console.log(err));
}



export const userLogin=userlogin=>{
    return fetch('http://shreejodhana.com/fashion/api/user-login',{
        method: 'POST',
        body: JSON.stringify(userlogin),
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
    })
    .then((response)=>{
        return response.json().then(user=>({user ,response}))
    })
    .then(({ user})=>{
                
                if(!user.status)
                {
                    alert(user.message)
                }else{localStorage.setItem('user',JSON.stringify(user.data))
            }
    })
}




export const userSignUp=user=>{
    return fetch('http://shreejodhana.com/fashion/api/save-user',{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'content-type':'application/json; charset=UTF-8',
        },
    })
    .then(response=> response.json())
    .then((json)=>{
               
            console.log(json)
            if(json.status !== true){
                alert(json.message)
            }
                else{
                    alert(json.message);
                }
            
    })
}


