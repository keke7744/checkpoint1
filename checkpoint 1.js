var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => { new Date().getFullYear() - pet.bornOn;}

let pets = [];
pets= pets.map((pet)=>{ return pet.age = getAge(pet)});


const getAge = (pet) => { new Date().getFullYear() - pet.bornOn;}

let petsWithAge = [];

petsWithAge=pets.map((pet)=>{ pet.age = getAge(pet)});

 
console.log(petsWithAge)





const getAge = (pet) => { new Date().getFullYear() - pet.bornOn;}

let dogs=[]

 dogs = pets.map((dog)=>{if (dog.type==="dog") return dog})
console.log(dogs);

const jasper = (pet) => { new Date().getFullYear() - pet.bornOn;}

let jasper;

jasper=pets.forEach((e)=>{if (dog.name==="jasper")return jasper}



console.log= ${Jasper is} ${jasper.age} ${years old}\