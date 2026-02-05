
let biggest_name = (friends) =>{
    let ans = friends[0];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length > ans.length)
            ans = friends[i];
    }
    return ans;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];


console.log(`Biggest Name among the friends: ${biggest_name(friends)}`);

