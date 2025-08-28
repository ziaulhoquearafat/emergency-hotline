function clickedElement(id) {
  const element = document.getElementById(id);
  return element;
}

clickedElement('card-container').addEventListener('click', function (e) {
  if (e.target.className.includes('heart-btn')) {
    const quantity = clickedElement('heart-quantity').innerText;

    const currentQuantity = Number(quantity) + 1;
    clickedElement('heart-quantity').innerText = currentQuantity;
  }

  if (
    e.target.className.includes('call-button') ||
    e.target.closest('.call-button')
  ) {
    const cardBtn = e.target.closest('.call-button');

    const titles =
      cardBtn.parentNode.parentNode.children[1].children[0].innerText;

    const subtitles =
      cardBtn.parentNode.parentNode.children[1].children[1].innerText;

    const callNumber =
      cardBtn.parentNode.parentNode.children[1].children[2].innerText;

    const coinQuantity = clickedElement('coin-quantity').innerText;

    if (coinQuantity < 20) {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাবনে।');
      return;
    }

    const coinCurrentQuantity = Number(coinQuantity) - 20;

    clickedElement('coin-quantity').innerText = coinCurrentQuantity;

    alert('📞 Calling ' + subtitles + ' ' + callNumber);

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    console.log(formattedTime);

    const cartContainer = clickedElement('cart-container');
    const newCart = document.createElement('div');
    newCart.innerHTML = `
         <div class="bg-[#fafafa] p-3 rounded-lg flex justify-between items-center">
            <div>
              <h2 class="text-lg text-black">${titles}</h2>
              <p class="text-[#5c5c5c]">${callNumber}</p>
            </div>
            <div>
              <p>${formattedTime}</p>
            </div>
          </div>  
  `;
    cartContainer.append(newCart);
  }
});

document.getElementById('clear-btn').addEventListener('click', function () {
  const cartContainer = clickedElement('cart-container');
  cartContainer.innerHTML = '';
});
