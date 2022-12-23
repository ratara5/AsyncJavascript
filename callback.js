//This is used since ECMA 6
//1. Start creation t=0
//2. Pushed (Uploaded) in t=setTimeout of createPost
//3. Getted (Showed) in t=setTimeout of getPosts

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
        console.log('Post getted (showed) '+Date.now())
    },1000);
}

function createPost(post, callback){
    creatingStart=Date.now();
    console.log('Start creation of post '+Date.now());
    setTimeout(()=>{
        posts.push(post);
        console.log('Post pushed (uploaded) '+Date.now())
        callback();
    },2000);
    console.log('createPost does not wait the end of setTimeout for executes the lines outside setTimeout. Then this console.log executes itself in one clock s tick (1ms aprox)');
    
}

createPost({title:'Post Three', body:'This is the post three'}, getPosts)
//As getPosts is a callback function inside createPosts, then getPost executes itself after the push(post)
