function positive(number) {
    console.log('coding is working')
    console.log(number)
}
if (number) {
    console.log('this is a positive number');
} else if (number) {
    console.log("this is a negative number");
} else if (number) {
    console.log('this is the number 0')
} else {
    console.log('sorry, this is not a number.');
}


positiveOrNegative(16);

function positiveOrNegative(number) {
    throw new Error("Function not implemented.");
}







// Key Points
// create a function that will apply  a discoumt to an items price
// based on their membership tier.

// - supershopper = 10% discount on their item.
// - megashopper = 15% discount on their item.
// - ultrashopper = 20% discount on their item.





function membershipDiscount() {
    console.log("function is working");
    if (member == "supershopper") {
        console.log("you are super shopper. you get you 10 percent off");
    }
    else if (member == "megashopper") {
        console.log("you are super shopper. you get you 10 percent off");
    }
    else if (member == "ultrashopper") {
        console.log("you are super shopper. you get you 10 percent off");

    }

}
membershipDiscount()