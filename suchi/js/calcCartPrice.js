function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");

  let totalPrice = 0;
  const result = document.querySelector(".total-price");
  let deliveryCost = document.querySelector(".delivery-cost");
  const cartTotal = document.querySelector(".cart-total");

  cartItems.forEach(function (item) {
    const amountEI = item.querySelector("[data-counter]");
    const priceEI = item.querySelector(".price__currency");

    const currentPrice =
      parseInt(amountEI.innerText) * parseInt(priceEI.innerText);
    totalPrice += currentPrice;
  });
  result.innerText = totalPrice;

  if (result.innerText > 0) cartTotal.classList.remove("none");
  else cartTotal.classList.add("none");

  if (result.innerText < 1000) {
    deliveryCost.innerText = "400 ₽";
    deliveryCost.classList.remove("free");
  } else {
    deliveryCost.innerText = "бесплатно";
    deliveryCost.classList.add("free");
  }
}
