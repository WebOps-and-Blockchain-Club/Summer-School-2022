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
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            var error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something Went wrong')
            }
        }, 2000);

    })    
}

async function init(){
    await createPost({title: 'post three', body:'This is post three'});
    getPosts();
}

init();
