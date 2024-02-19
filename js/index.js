const allSeats = document.getElementsByClassName('Seat');
let count = 0;
const selectedSeat = 1;
for (const seat of allSeats){
    seat.addEventListener("click", function(){
        // background color change
        seat.classList.add('bg-[#1DD100]')
        // seat count
        count = count+1;
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText = count;
        // total seat count
        const totalSeatElement = document.getElementById('total-seat');
        const totalSeat = parseInt(totalSeatElement.innerText);
        const remainingSeat = totalSeat - selectedSeat;
        totalSeatElement.innerText = remainingSeat;
        
    })
}

