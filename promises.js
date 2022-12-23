const posts=[
    {title:"Post One", body:"This is the post one"},
    {title:"Post Two", body:"This is the post two"}
]


function getPosts(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
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

createPost({title:"Post three", body:"This is the post three"})
    .then(getPosts);
