const PAYMENT_LINKS = {
  box01: "https://buy.stripe.com/test_4gM8wI1fk3cQ43z37G4gg00",
  custom: ""
};

function wire(id, key, label) {
  const el = document.getElementById(id);
  if (el && PAYMENT_LINKS[key]) {
    el.href = PAYMENT_LINKS[key];
    el.classList.remove("disabled");
    el.textContent = label;
  }
}

wire("buy-box01", "box01", "Acquista la Box");
wire("buy-custom", "custom", "Crea la mia Box");
