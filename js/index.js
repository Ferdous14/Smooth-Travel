const allSeats = document.getElementsByClassName('Seat');
let count = 0;
const selectedSeat = 1;
const ticketPrice = 550;
let sum = 0;
const className = 'Economy';

const inputField = document.getElementById('phone-input');

inputField.addEventListener('input', function () {
    if (count > 0 && inputField.value !== "") {
        btnModal.removeAttribute('disabled');
    } else {
        btnModal.setAttribute('disabled', true);
    }
});

for (const seat of allSeats) {
    seat.addEventListener("click", function () {
        if (count >= 4) {
            alert("You have selected the maximum number of seats!");
            return;
        } else if (seat.classList.contains('selected')) {
            return;
        } else {
            // seat count
            count++;
            seat.classList.add('selected');
            const seatCount = document.getElementById('seat-count');
            seatCount.innerText = count;

            // append seat
            const dynamicList = document.getElementById('dynamic-list');
            const p = document.createElement('p');
            const seatText = seat.innerText;
            p.innerText = seatText;
            dynamicList.appendChild(p);

            const p1 = document.createElement('p');
            p1.innerText = className;
            dynamicList.appendChild(p1);

            const p2 = document.createElement('p');
            p2.innerText = ticketPrice;
            dynamicList.appendChild(p2);

            // background color change
            seat.classList.add('bg-[#1DD100]');


            // total seat count
            const totalSeatElement = document.getElementById('total-seat');
            const totalSeat = parseInt(totalSeatElement.innerText);
            const remainingSeat = totalSeat - selectedSeat;
            totalSeatElement.innerText = remainingSeat;

            // total price count
            sum += ticketPrice;
            const totalPriceElement = document.getElementById('total-price');
            totalPriceElement.innerText = sum;

            // grand total
            const grandTotalElement = document.getElementById('grand-total');
            grandTotalElement.innerText = sum;

            // coupon
            if (count === 4) {
                document.getElementById('apply-btn').removeAttribute('disabled');
            }

            // Enable or disable next button based on conditions
            if (count > 0 && inputField.value !== "" && !isNaN(inputField.value)) {
                btnModal.removeAttribute('disabled');
            } else {
                btnModal.setAttribute('disabled', true);
            }
        }
    });
}


const discountText = 'Discounted Price:'
const discountedPrice = document.getElementById('discounted-price');
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    const inputField = document.getElementById('coupon');
    const couponCode = inputField.value;
    const grandTotalElement = document.getElementById('grand-total');

    if (couponCode === 'NEW15') {
        const discount = sum * 0.15;
        const newGrandTotal = sum - discount;
        grandTotalElement.innerText = newGrandTotal;
        inputField.setAttribute('hidden', true);
        applyBtn.setAttribute('hidden', true);

        const p1 = document.createElement('p');
        p1.innerText = discountText;
        discountedPrice.appendChild(p1);

        const p = document.createElement('p');
        p.innerText = discount;
        discountedPrice.appendChild(p);

    } else if (couponCode === 'Couple 20') {
        const newDiscount = sum * 0.20;
        const finalGrandTotal = sum - newDiscount;
        grandTotalElement.innerText = finalGrandTotal;
        applyBtn.setAttribute('hidden', true);
        inputField.setAttribute('hidden', true);

        const p1 = document.createElement('p');
        p1.innerText = discountText;
        discountedPrice.appendChild(p1);

        const p = document.createElement('p');
        p.innerText = newDiscount;
        discountedPrice.appendChild(p);

    } else {
        alert('Invalid Cupon')
    }
})

const btnModal = document.getElementById('btn-modal');
const modal = document.getElementById('my_modal_5');

btnModal.onclick = function () {
    modal.showModal();
}