var initialPrice = document.querySelector("#initialprice");

var  quantity = document.querySelector("#quantity");

var currentPrice = document.querySelector("#currentprice");

var tellMeBtn = document.querySelector("#triangleBtn");

var outPutBox = document.querySelector("#output");

function fgg()
{



   var priceBought = initialPrice.value;
   var quan = quantity.value;
   var currPrice = currentPrice.value;


   var df = (priceBought*quan)

   var cf = (currPrice*quan)

    // df - currentPrice

    if(cf>df)
    {
        var profit = cf - df;

         //Profits prints here

        var profitPercnt = (profit*100/df);


        outPutBox.innerText ="Congratulations you made profit of  "  +  profit + "Profit Percentage is " + profitPercnt

       

    }


    else  {

         var loss = df - cf;

         var lossPercnt = (loss*100/df);

          
         outPutBox.innerText= "oo  made loss of  "+ loss + "loss Percentage is "+ lossPercnt;

       


    }


}






tellMeBtn.addEventListener('click', fgg)