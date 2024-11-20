// what is a function?
' a function is a set of instructions that perform a specific task'
'or job'

// functions come in 2 variations:
// built in functions - these are instructions that are pre-written 
// into coding language, All we need to do is pass in data

// examples
var className = 'Coding class'
console.log('coding class.')


//user-defined functions- these are custom instructions written by 
//engineers to make code that performs specific tasks.

// How do we write  a user-defined function?

function exampleFunction() {
    console.log('The function script is connected')
}

//in order to have a function work, we need to call it. 
// the above code is the function defintion- meaning- its only
// telling the computer the instructions- Not to actually run it.

// we access or call a function by writing its name.
//exampleFunction()
let accountbalance = 1000;

function depositMoney() {
    let newBalance = accountbalance + 200;
    document.getElementById('data').innerHTML = newBalance ;
}