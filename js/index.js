const allSeats = document.getElementsByClassName('Seat');
let count = 0;
const selectedSeat = 1;
const ticketPrice = 550;
let sum = 0;
const classNmae = 'Economy';
for (const seat of allSeats) {
    seat.addEventListener("click", function () {

        if (count >= 4) {
            alert("This is an alert message!");
            return;
        } else {
            // seat count
            count = count + 1;
            const seatCount = document.getElementById('seat-count');
            seatCount.innerText = count;

            // background color change
            seat.classList.add('bg-[#1DD100]')

            // total seat count
            const totalSeatElement = document.getElementById('total-seat');
            const totalSeat = parseInt(totalSeatElement.innerText);
            const remainingSeat = totalSeat - selectedSeat;
            totalSeatElement.innerText = remainingSeat;

            // total price count
            sum = sum + ticketPrice;
            const totalPriceElement = document.getElementById('total-price');
            totalPriceElement.innerText = sum;

            // grand total
            const grandTotalElement = document.getElementById('grand-total');
            grandTotalElement.innerText = sum;

            // coupon

            if (count >= 4) {
                const applyBtn = document.getElementById('apply-btn').removeAttribute('disabled');

            }
            const inputField = document.getElementById('coupon');
            const applyBtn = document.getElementById('apply-btn');
            applyBtn.addEventListener('click', function () {
                const couponCode = inputField.value;
                if (couponCode === 'New15') {
                    const discount = sum * 0.15;
                    const newGrandTotal = sum - discount;
                    grandTotalElement.innerText = newGrandTotal;
                    applyBtn.disabled = true;
                } else if (couponCode === 'Couple 20') {
                    const newDiscount = sum * 0.20;
                    const finalGrandTotal = sum - newDiscount;
                    grandTotalElement.innerText = finalGrandTotal;
                    applyBtn.disabled = true;
                }else{
                    alert('Invalid Cupon')
                }
            })

        }


    })
}



