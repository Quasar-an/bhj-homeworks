document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const cart = document.querySelector(".cart__products");

    products.forEach((product) => {
        const decButton = product.querySelector(".product__quantity-control_dec");
        const incButton = product.querySelector(".product__quantity-control_inc");
        const quantityValue = product.querySelector(".product__quantity-value");
    
        decButton.addEventListener("click", () => {
          const currentValue = parseInt(quantityValue.textContent, 10);
          if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
          }
        });
    
        incButton.addEventListener("click", () => {
          const currentValue = parseInt(quantityValue.textContent, 10);
          quantityValue.textContent = currentValue + 1;
        });
      });

      products.forEach((product) => {
        const addButton = product.querySelector(".product__add");
    
        addButton.addEventListener("click", () => {
          const productId = product.dataset.id;
          const productImage = product.querySelector(".product__image").src;
          const productQuantity = parseInt(
            product.querySelector(".product__quantity-value").textContent,
            10
          );

          const existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

      if (existingProduct) {
        const countElement = existingProduct.querySelector(".cart__product-count");
        const currentCount = parseInt(countElement.textContent, 10);
        countElement.textContent = currentCount + productQuantity;
      } else {
        const cartProduct = document.createElement("div");
        cartProduct.className = "cart__product";
        cartProduct.dataset.id = productId;

        const cartProductImage = document.createElement("img");
        cartProductImage.className = "cart__product-image";
        cartProductImage.src = productImage;

        const cartProductCount = document.createElement("div");
        cartProductCount.className = "cart__product-count";
        cartProductCount.textContent = productQuantity;

        cartProduct.appendChild(cartProductImage);
        cartProduct.appendChild(cartProductCount);
        cart.appendChild(cartProduct);
      }
    });
  });
});