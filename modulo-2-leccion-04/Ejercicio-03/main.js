"user strict";

function precioIva(precio) {
  const iva = precio * 0.21;
  const total = precio + iva;
  console.log(`El precio es ${precio}, el IVA es ${iva}, el total es ${total}`);
}

precioIva(10);
