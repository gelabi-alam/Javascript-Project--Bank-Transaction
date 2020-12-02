

    //when login btn clicked then will be hide
    const loginBtn = document.getElementById("login");
    //function create
    loginBtn.addEventListener("click", function(){
        
        //login-area section will be hide
        const loginArea = document.getElementById("login-area");
        loginArea.style.display= "none";
        
        //transacton-area section will be Show
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";

    });

    //Deposit Added
    const depositBtn = document.getElementById("add-deposit");

    depositBtn.addEventListener("click", function () {

        //Captured Input field
        const depositAmount = document.getElementById("deposit-amount").value;
        const depositNumber = parseFloat(depositAmount);

        //Deposit > h2 > span > id
        const currentDeposit = document.getElementById("current-deposit").innerText;
        const currentDepositNumber = parseFloat(currentDeposit);

        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById("current-deposit").innerText = totalDeposit;

        //for empty field
        document.getElementById("deposit-amount").value = "";

        //balance add to Deposit
        const currentBalance = document.getElementById("current-balance").innerText;

        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = currentBalanceNumber + totalDeposit;

        document.getElementById("current-balance").innerText = totalBalance;
    });

    const withdrowBtn = document.getElementById("add-withdrow");
    withdrowBtn.addEventListener("click", function(){

        //Captured Input field
        const withdrowAmount = document.getElementById("withdrow-amount").value;
        withdrowNumber = parseFloat(withdrowAmount);

        //Withdrow > h2 > span > id
        const currentWithdrow = document.getElementById("current-withdrow").innerText;
        const currentWithdrowNumber = parseFloat(currentWithdrow);

        const totalWithdrow = currentWithdrowNumber + withdrowNumber;
        document.getElementById("current-withdrow").innerText = totalWithdrow;

        //for empty field
        document.getElementById("withdrow-amount").value = "";

        //balance substract to Withdrow
        const currentBalance = document.getElementById("current-balance").innerText;

        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = currentBalanceNumber - totalWithdrow;

        document.getElementById("current-balance").innerText = totalBalance;

    });


