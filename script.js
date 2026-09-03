document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;

    status.style.color = '#155724';
    status.style.backgroundColor = '#d4edda';
    status.style.padding = '10px';
    status.style.borderRadius = '5px';
    status.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    form.reset();
  });
});