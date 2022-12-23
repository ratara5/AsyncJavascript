//This was used until ECMA 5

const posts=[
    {title:'Post One', body:'This is the post one'},
    {title:'Post Two', body:'This is the post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000);
}

createPost({title:'Post Three', body:'This is the post three'}) //Too I can put this after the call to function getPosts()
getPosts();

//createPost take longer than getPosts, therefore the third post isn't visible