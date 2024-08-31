const cartWrapper = document.querySelector(".cart-wrapper");

const cart = [
  {
    src: "img/roll/philadelphia.jpg",
    id: 1,
    title: "филадельфия",
    itemsInBox: "6шт.",
    weight: "230г.",
    price: "777 ₽",
    counter: "1",
  },
  {
    id: 2,
    title: "филадельфия",
    itemsInBox: "6шт.",
    weight: "230г.",
    price: "777 ₽",
    counter: "1",
  },
];

function rendering() {
  let card = document.getElementById("block");

  for (i of cart) {
    card.innerHTML += `
                        <div class="col-md-6" >
                            <div class="card mb-4" data-id="${i.id}">
                                <img class="product-img" src=${i.src}alt="${i.title}">
                                <div class="card-body text-center">
                                    <h4 class="item-title">${i.title}</h4>
                                    <p><small data-items-in-box class="text-muted">${i.itemsInBox}</small></p>

                                    <div class="details-wrapper">
                                        <div class="items counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <input disabled value="1" class="items__current text-center" data-counter>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>

                                        <div class="price">
                                            <div class="price__weight">${i.weight}</div>
                                            <div class="price__currency">${i.price}</div>
                                        </div>

                                    </div>

                                    <button data-cart type="button" class="btn btn-block btn-outline-warning")">+ в корзину</button>

                                </div>
                            </div>
                        </div>
                        `;
  }
}
rendering();

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");

    for (i of cart) {
      const itemInCart = cartWrapper.querySelector(`[data-id="${i.id}"]`);

      if (itemInCart) {
        const counterElement = itemInCart.querySelector("[data-counter]");
        counterElement.innerText =
          parseInt(counterElement.innerText) + parseInt(i.counter);
      } else {
        const cartItemHTML = `
							<div class="cart-item" data-id="${i.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src=${i.src} alt="${i.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${i.title}</div>
										<div class="cart-item__weight">${i.weight} / ${i.price}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${i.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">250 ₽</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>
    `;

        cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
      }

      card.querySelector("[data-counter]").innerText = "1";
    }
  }
});
