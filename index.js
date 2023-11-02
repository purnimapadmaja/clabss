let redbuttonel = document.getElementById("redbutton");
const modal = createModal();

let redbuttontwoel = document.getElementById("redbuttontwo");
const modaltwo = createModal();

function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  const closeModalSpan = document.createElement("span");
  closeModalSpan.textContent = "×";
  closeModalSpan.style.float = "left";
  closeModalSpan.style.cursor = "pointer";
  modalContent.appendChild(closeModalSpan);
  const modalHeader = document.createElement("h2");
  modalHeader.textContent = "RegisterForm";
  modalContent.appendChild(modalHeader);
  const form = document.createElement("form");
  form.innerHTML = `
                <label for="First Name">First Name:</label>
                <input type="text" id="name" name="name" required>
<br>
                <label for="Last Name">Last Name:</label>
                <input type="text" id="lastname" name="lastname" required>
                <br>

                <label for="E-mail">Email :</label>
                <input type="email" id="email" name="email" required>
                <br>

                <label for="phone">Phone :</label>
                <input type="tel" id="phone" name="phone">
                <br>
                <input type="submit" value="Login" style="background-color: orange; color: white">
            `;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    console.log(
      "Name:",
      name,
      "Last Name:",
      lastname,
      "Email:",
      email,
      "Phone:",
      phone
    );
    closeModal(modal);
  });
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  closeModalSpan.addEventListener("click", function () {
    closeModal(modal);
  });
  return modal;
}

function openRegistrationModal(modal) {
  modal.style.display = "block";
}

function closeRegistrationModal(modal) {
  modal.style.display = "none";
}

redbuttonel.addEventListener("click", () => openRegistrationModal(modal));
redbuttontwoel.addEventListener("click", () => openRegistrationModal(modaltwo));

window.addEventListener("click", function (event) {
  if (
    event.target === modal ||
    event.target === modaltwo ||
    event.target === modalthree
  ) {
    closeModal(modal);
    closeModal(modaltwo);
  }
});

let ordernowsectionel = document.getElementById("ordernowsection");
const modalordernow = createOrderNowModal();

function createOrderNowModal() {
  const modalorder = document.createElement("div");
  modalorder.classList.add("modal");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  const closeModalSpan = document.createElement("span");
  closeModalSpan.textContent = "×";
  closeModalSpan.style.float = "left";
  closeModalSpan.style.cursor = "pointer";
  modalContent.appendChild(closeModalSpan);
  const modalHeader = document.createElement("h2");
  modalHeader.textContent = "Order Now";
  modalContent.appendChild(modalHeader);
  const form = document.createElement("form");
  form.innerHTML = `
    <label for="Card Details">Card Details:</label>
    <input type="text" id="cardDetails" name="cardDetails" required><br>
    <label for="PIN">PIN:</label>
    <input type="password" id="pin" name="pin" required><br>
    <input type="submit" value="Proceed" style="background-color: green; color: white">
  `;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const cardDetails = document.getElementById("cardDetails").value;
    const pin = document.getElementById("pin").value;
    console.log("Card Details:", cardDetails, "PIN:", pin);
    closeModal(modalorder);
  });
  modalContent.appendChild(form);
  modalorder.appendChild(modalContent);
  document.body.appendChild(modalorder);
  closeModalSpan.addEventListener("click", function () {
    closeModal(modalorder);
  });
  return modalorder;
}

ordernowsectionel.addEventListener("click", () => openModal(modalordernow));

function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}
