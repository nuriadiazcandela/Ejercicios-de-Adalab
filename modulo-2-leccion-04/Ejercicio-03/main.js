"user strict";

function precioIva(precio) {
  const iva = precio * 0.21;
  const total = precio + iva;
  return `Precio sin IVA:` + precio, `IVA: ` + iva, `Total:` + total;
}
console.log(precioIva(10));
