

document.addEventListener("DOMContentLoaded", () => {
    let result = document.querySelector("#result");
    let btn = document.querySelector("#btn");

    btn.addEventListener("click", () => {
        let randomNumber = parseInt(Math.random() * 100);
        console.log(randomNumber);

        let yourName = document.querySelector("#yourName").value;
        let partnerName = document.querySelector("#Partner-Name").value;

        if (yourName === '') {
            alert("Please Enter your Name!");
        } else if (partnerName === '') {
            alert("Please Enter your Partner's Name!");
        } else {
            result.innerHTML = yourName + " and " + partnerName + 
            "'s love Percentage is: " + randomNumber + "%";
        }
    });
});
