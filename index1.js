// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
/*
class Car {
  constructor(brand) {
    this.carName = brand;
  }
}

myCar = new Car('Ford');
console.log(`my car is a`, myCar.carName);
//*/
/*
let text = 'How are you doing today?';
const myArray1 = text.split(' ')[3];
const myArray2 = text.split(' ', 3);
console.log(myArray1);
console.log(myArray2);
//*/
/*
export class AuthController{
  public verifyToken(req:Request, res: Response, next: NextFunction){
    const authHeader = req.headers["authorizations"];
    if(authHeader!=="undefined"){
      const token = authHeader && authHeader.split(" ")[1];
      if(token === null){
        return res.sendStatus(401);
      }
      jwt.verify(
        token,
        prcess.env.TOKEN_SECRET as string,
        (err: any, user: any) =>{
          if(err){
            return res.sendStatus(403);
          }
          Object.assign(req.bosy,{id: user.id});
          return next();
        }
      );
    }
    else{
      return res.sendStatus(401);
    }
  }
}
//*/
/*
const greeting = (person) => {
  const name = person?.name;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: 'Alice' })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
//*/
/*
const car = { type: 'Fiat', model: '500', color: 'white' };
let type = car?.type;
let name = car?.name;
console.log(type); // Fiat
console.log(name); // undefined
//*/
/*
function printMagicIndex(arr) {
  console.log(arr?.[5]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw
//*/
/*
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum); // 125
//*/
/*
//*********************
const ob1 = new Object();

const ob2 = new Object(undefined);

const ob3 = new Object(null);

const ob4 = {};

console.log(ob1); // {}
console.log(ob2); // {}
console.log(ob3); // {}
console.log(ob4); // {}

//*/
/*
//*********************
function f1() {
  const o1 = {};
  if (o1.constructor === Object) {
    return true; // true
  }
}
console.log('inside f1', f1());
const o1 = {};
o1.constructor === Object;
console.log(o1.constructor); // [Function: Object]
//*********************
function f2() {
  const o2 = new Object();
  if (o2.constructor === Object) {
    return true; // true
  }
}
console.log('inside f2', f2());
const o2 = new Object();
o2.constructor === Object;
console.log(o2.constructor); // [Function: Object]
//**********************
function f3() {
  const a1 = [];
  if (a1.constructor === Array) {
    return true; // true
  }
}
console.log('inside f3', f3());
const a1 = [];
a1.constructor === Array;
console.log(a1.constructor); // [Function: Array]
//**********************
function f4() {
  const a2 = [];
  if (a2.constructor === Array) {
    return true; // true
  }
}
console.log('inside f4', f4());
const a2 = new Array();
a2.constructor === Array;
console.log(a2.constructor); // [Function: Array]
//**********************
function f5() {
  const n = 3;
  if (n.constructor === Number) {
    return true; // true
  }
}
console.log('inside f5', f5());
const n = 3;
n.constructor === Number; // true
console.log(n.constructor); // [Function: Number]
//**********************
//*/
/*
function Tree(name) {
  this.name = name;
}

const theTree = new Tree('Redwood');
console.log(`${theTree.constructor}`);
//*/
