var arr  = ['Me', 'Sadia', 2, 3.44, {Name:"Rifat", Bedi:"Nusu"}, ["Shimal", 'Tasu']];

var sadia = false;
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    if(arr[i] == "Sadia") sadia = true;
}
if(sadia) console.log("YESSSSS");