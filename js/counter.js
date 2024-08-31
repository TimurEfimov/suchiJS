window.addEventListener("click", function (event) {
  let counter;
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.value = ++counter.value;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.value) > 1) {
      counter.value = --counter.value;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.value) === 1
    ) {
      event.target.closest(".cart-item").remove();
    }
  }
});
