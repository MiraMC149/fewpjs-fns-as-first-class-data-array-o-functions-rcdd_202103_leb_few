function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName, dogBreed) {
  console.log(`Leach ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleach ${dogName} the ${dogBreed}`);
}
  routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
function exerciseDog(dogName, dogBreed){
  for(let i=o;i<routine.length;i++){

    return routine[i](dogName, dogBreed);
  }
}
