// selected all class
let collectedClicked = [];
    const allSeat = document.querySelectorAll(".seat2");
    
    for (const seats of allSeat) {
      seats.addEventListener("click", function (e) {
        // check if seat limit is reached before adding another seat
        if (collectedClicked.length === 4) {
          alert("limit over!!! you can selects only 4");
          e.stopPropagation();
          return;
        }
        // set seat increase and decrease
        leftSeat("seat_left");

        // add selected seat in array
        const selectedSeat = e.target.innerText;
        collectedClicked.push(selectedSeat);

        // update button style and disable
        const select = e.target;
        select.style.background = "rgb(34 197 94)";
        select.style.color = "white";
        select.setAttribute("disabled", "");

        // total price
        const ticketPrice = 500;
        
        // increase seat number
        const seatIncrease = document.getElementById("increase-seat");
        const seatIncreaseValue = seatIncrease.innerText;
        const seatNumber = parseInt(seatIncreaseValue);
        document.getElementById("increase-seat").innerText = seatNumber + 1;

        // get select Seat Container
        const setContainer = document.getElementById("selectSeatContainer");

        // create elements
        const div = document.createElement("div");
        const h1 = document.createElement("h3");
        const h2 = document.createElement("h3");
        const h3 = document.createElement("h3");

        // add classlist inside the div
        div.classList.add("flex", "justify-between", "mb-1");

        // append inside the h3 element
        h1.innerText = selectedSeat;
        h2.innerText = "Economy";
        h3.innerText = ticketPrice;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);

        setContainer.appendChild(div);

        //   set total price inside the elements
        const totalPrice = getInnerText("total_price");
        document.getElementById("total_price").innerText =
          totalPrice + ticketPrice;
        // console.log(totalPrice);

        // set total Grand price
        const totalPriceAfter = getInnerText("total_price");
        document.getElementById("grand_price").innerText = totalPriceAfter;

        //   set condition inside total Select seat
        const totalSeatSelected = getInnerText("increase-seat");
        const applyButton = document.getElementById("apply_button");

        if (totalSeatSelected >= 2) {
          //   applyButton.setAttribute("enabled", "");
          applyButton.removeAttribute("disabled", "");
        }
      });

    }

    // get discount input element
      const couponInput = document.getElementById("coupon-input");

      function applyButtonHandle(){
        //get grand total price seatValue
        const totalPriceAfter = getInnerText("total_price");
        // discount Container
        const discountContainer = document.getElementById("discount-container");

        // get grand total price element
        const grandTotalPrice = getInnerText('grand_price');

        const couponInputValue = couponInput.value;
        console.log(couponInputValue);
        if(couponInputValue === 'new15'){

          const grandFinalPrice = totalPriceAfter * (1 - 15 / 100);
          const discount15 = totalPriceAfter - grandFinalPrice;

          document.getElementById("discount_price").innerText = discount15;
          document.getElementById("grand_price").innerText = grandFinalPrice;


          //remove apply button container
          discountContainer.classList.add("hidden");

        }
        else if(couponInputValue === 'couple20'){
          const grandFinalPrice = totalPriceAfter * (1 - 20 / 100);
          const discount20 = totalPriceAfter - grandFinalPrice;

          document.getElementById("grand_price").innerText = grandFinalPrice;
          document.getElementById("discount_price").innerText = discount20;

          //remove apply button container
          discountContainer.classList.add("hidden");
        }
        else{
          alert('invalid coupon code!!!');
        }
      }

      // submit button handle function
      const modalSection = document.getElementById("modal-section");
      const bodyBlur = document.getElementById("body-blur");
      function submitButtonHandle(){
        modalSection.classList.remove('hidden');
      }
      // modal button handle function
      function continueButtonHandle() {
        modalSection.classList.add("hidden");
      }

    // get inner Html
    function getInnerText(innerText){
        const getHtmlId = document.getElementById(innerText);
        const getHtmlValue = parseInt(getHtmlId.innerText);
        return getHtmlValue
    }
    
    

    // decrease seat left element select  
    function leftSeat(numberId){
        const seatSelected = document.getElementById(numberId);
        const seatValue = seatSelected.innerText;
        const seatNumber = parseInt(seatValue);
        return (document.getElementById(numberId).innerText = seatNumber - 1);
    }

    


     
