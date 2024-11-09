// selected all class
    const allSeat = document.querySelectorAll(".seat2");
    
    
    for (const seats of allSeat) {
        seats.addEventListener("click", function (e) {
          // set seat increase and decrease
          leftSeat("seat_left");
          // select seat name
          const selectedSeat = e.target.innerText;

          // selected button change color and disabled button
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

        //   set condition inside total Select seat
        const totalSeatSelected = getInnerText("increase-seat");
        const applyButton = document.getElementById('apply_button');
    
        if(totalSeatSelected >= 2) {
        //   applyButton.setAttribute("enabled", "");
          applyButton.removeAttribute("disabled", "");
        }

          //   set total price inside the elements
          const totalPrice  = getInnerText('total_price');
          document.getElementById("total_price").innerText =totalPrice + ticketPrice;
          console.log(totalPrice);
          
        // set total Grand price 
        const totalPriceAfter = getInnerText('total_price')
        const totalGrand = getInnerText("grand_price");
        document.getElementById("grand_price").innerText =
        totalPriceAfter; 
        });
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

    


     
