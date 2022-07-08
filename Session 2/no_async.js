const posts =[
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'}
];

function getPosts(){
    setTimeout( ()=> {
        let output ='';
        posts.forEach((post,index)=>{
            output += post.title;
            output += " ";
        });
        console.log(output);
    }, 1000);
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({title: 'post three', body:'This is post three'});

