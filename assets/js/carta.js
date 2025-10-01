
document.getElementById("formCarta").addEventListener("submit", function(e) {
  e.preventDefault();

  // Datos del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Texto que se enviará
  const carta = `Hola, soy ${nombre}.\n${mensaje}\n\nServicios de Repsol`;

  // Número de WhatsApp fijo
  const numero = "573507245723"; // <-- cambia al número real con indicativo

  // Enviar a WhatsApp con el mensaje del formulario
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(carta)}`;
  window.open(url, "_blank");

  // Generar PDF con jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(carta, 10, 20);

  doc.save("carta-invitacion.pdf"); // descarga automática
});
