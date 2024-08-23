/*Convert the function to withdraw money ( assignment of first week of Javascript) to es6 syntax.
Create a new react app which says: Hello world, this is my first react app.
 */

const amount = document.getElementById("amount");
const button = document.getElementById("button");
const shfaq = document.getElementById("shfaq");
const bilanci = document.getElementById("bilanci");

const person = {
    emri: 'Klejdi',
    balance: 10000
};

button.addEventListener("click", () => {
    const withdrawAmount = parseFloat(amount.value);
    withdraw(person, withdrawAmount);
});

const withdraw = (person, amount) => {
    if (amount > person.balance) {
        shfaq.innerHTML = "The withdrawal cannot be processed due to insufficient funds.";
    } else {
        person.balance -= amount; 
        bilanci.value = person.balance; 
        shfaq.innerHTML = `Withdraw successful. Balance after withdrawal: ${person.balance.toFixed(2)}`;
        amount.value = ''; 

        if (person.balance === 0) {
            shfaq.innerHTML += " Your balance is now 0.";
        }
    }
};

