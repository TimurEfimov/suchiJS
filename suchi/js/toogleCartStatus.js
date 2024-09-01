function toogleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const orderForm = document.getElementById("order-form");
  const cartTotal = document.querySelector(".cart-total")

  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add("none");
    orderForm.classList.remove("none");
    cartTotal.classList.remove("none");
  } else {
    cartEmpty.classList.remove("none");
    orderForm.classList.add("none");
    cartTotal.classList.add("none");
  }
}
