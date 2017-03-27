// var parent = {
//   name: "Dad", //primitive property
//   //Object property
//   giftObj: {
//       name: 'iPhone 7'
//   },
//   loves : function(){
//     console.log("Dad loves me");
//   }
//
// }
//
// //  parent is now the prototype for the child
// var child = Object.create(parent);
//
// console.log("PARENT-- parent.name: ", parent.name);
// console.log("PARENT-- parent.giftObj.name: ", parent.giftObj.name);
//
// //  Go up the prototype chain and look up the name
// console.log("CHILD-- child.name: ", child.name);
// // Go up the prototype chain and look up the Object property
// console.log("CHILD-- child.giftObj.name: ", child.giftObj.name);
//
// console.log("parent",parent);
// console.log("child",child);
//
// //------------- Changing the prototype values and its effect -------------
// child.name = "Child";
// child.giftObj.name= "Mercedes";
// console.log("*** CHANGED: child.name = 'Child' ");
// console.log("*** CHANGED: child.giftObj.name = 'Mercedes' ");
//
// console.log("CHILD-- child.name: ", child.name);
// console.log("CHILD-- child.giftObj.name: ", child.giftObj.name);
// console.log("PARENT-- parent.name: ", parent.name);
// console.log("PARENT-- parent.giftObj.name: ", parent.giftObj.name);
// console.log("parent",parent);
// console.log("child",child);


//** Function constructors
function Dog(pname)
{
  this.name = pname;
  console.log("'this is: '", this);
}

var pet = new Dog("Scooby");
console.log("pet: ", pet);

//Not being used as function constructor
Dog("Scooby2");
