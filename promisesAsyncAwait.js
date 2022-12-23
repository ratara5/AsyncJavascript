posts=[
    {title:'Post One', body:'This is the post one'},
    {title:'Post Two', body:'This is the post two'}
];

function getPosts(){
    setTimeout(()=>{
        output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject) =>{        
        setTimeout(()=>{
            posts.push(post);

            const error=false;

            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong')
            }
        },2000);
    });
}

async function init(){
    await createPost({title:'Post three', body:'This is the post three'});
    getPosts();
}

//init(); //Uncomment for test the above code


//Other example

async function getUsers(){

    const response=await fetch('https://jsonplaceholder.typicode.com/users/');
    const result=await response.json();
    let output='';
    result.forEach((user,index)=>{
        output += `<li key=${user.id}>
                    <h1>${user.name}</h1>
                    <h2>${user.username}</h2>
                    <h3>${user.email}</h3>
                   </li>`;
    });
    document.body.innerHTML=output;
}
    

getUsers();