let amount = 550;
let countIncrement = 0;
let countDecrement = 40;
const grandPrice = document.getElementById('grand-total');
const price = document.getElementById('total-price');

// access the seats individually
const seats = document.querySelectorAll('.seat-btn');
for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];

  seat.addEventListener('click', function () {
    // if clicked 2nd time or more
    seat.disabled = true;
    // seat count increment and decrement start
    if (countIncrement < 4) {
      countIncrement++;
      document.getElementById('seat-count').innerText = countIncrement;

      countDecrement--;
      document.getElementById('seats-left').innerText =
        countDecrement + ' ' + 'Seats left';

      // if clicked
      seat.classList.add('bg-green', 'text-white');

      // get and appending the seat name
      const seatName = seat.innerText;

      const inputContainer = document.getElementById('input-container');
      const p = document.createElement('p');
      p.setAttribute('class', 'flex justify-between flex-row');
      inputContainer.appendChild(p);

      const span1 = document.createElement('span');
      span1.setAttribute(
        'class',
        'text-base text-base font-normal text-[#03071299]'
      );
      span1.innerText = seatName;
      const span2 = document.createElement('span');
      span2.setAttribute(
        'class',
        'text-base text-base font-normal text-[#03071299]'
      );
      span2.innerText = 'Economy';
      const span3 = document.createElement('span');
      span3.setAttribute(
        'class',
        'text-base text-base font-normal text-[#03071299]'
      );
      span3.innerText = amount;

      p.appendChild(span1);
      p.appendChild(span2);
      p.appendChild(span3);

      // price calculation
      let total = amount * countIncrement;
      price.innerText = 'BDT ' + total;

      grandPrice.innerText = 'BDT ' + total;
    } else {
      alert(
        'You have reached purchasing the maximum count of seats at a time.'
      );
    }
  });
}

// discount section
const applyBtn = document.getElementById('apply-coupon');
const discountContainer = document.getElementById('discount-container');
let restTotal;

applyBtn.addEventListener('click', function () {
  const coupon = document.getElementById('coupon').value;

  if (restTotal) {
    restTotal.remove();
  }
  if (countIncrement == 4) {
    let discountAmount = 0;
    if (coupon === 'NEW15' || coupon === 'Couple 20') {
      const discountPercent = coupon === 'NEW15' ? 0.15 : 0.2;
      discountAmount = amount * countIncrement * discountPercent;

      const discountP = document.createElement('p');
      discountP.setAttribute('class', 'flex justify-between flex-row');
      discountContainer.appendChild(discountP);

      const span4 = document.createElement('span');
      span4.innerText = 'Discount: ';
      span4.setAttribute('class', 'text-dark text-inter text-base font-medium');

      const span5 = document.createElement('span');
      span5.innerText = 'BDT ' + discountAmount.toFixed(2);
      span5.setAttribute('class', 'text-dark text-inter text-base font-medium');

      discountP.appendChild(span4);
      discountP.appendChild(span5);

      restTotal = discountP;

      const totalPrice = amount * countIncrement;
      const afterDiscount = totalPrice - discountAmount;

      grandPrice.innerText = 'BDT ' + afterDiscount.toFixed(2);
    } else {
      alert('Invalid Coupon');
    }
  } else {
    alert('You have to purchase 4 tickets!');
  }
});
