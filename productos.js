function comprarMP(producto) {
  if (producto === 'producto1') {
    window.open('https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_ID_DE_PAGO', '_blank');
  }
}

function mostrarTransferencia() {
  document.getElementById('transferencia').style.display = 'block';
}
