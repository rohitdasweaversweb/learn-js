function userName(user){
    if(user==undefined){
        // console.log(`Please give a user name`);
        return;
    }else{

        // console.log(`hii its me ${user}`);
    }
    
}

// userName("Rocky");

// const user={userName:"Rohit",Role:"SDE"}
//////////////////////Functions with Objects //////////////////
// function handleObject(objhandle){
//     console.log(`username is ${objhandle.userName} & The role Is ${objhandle.Role}`);
    
// }

// handleObject(user)

function handleObject(objhandle){
    console.log(`username is ${objhandle.userName} & The role Is ${objhandle.Role}`);
    
}

handleObject({
    userName:"Sam",
    Role:"SdE"
})