const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || 'Client';
    const email = data.get('email')?.toString().trim() || '';
    const service = data.get('service')?.toString().trim() || 'General inquiry';
    const message = data.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`Service request: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRequested service: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:ovilla26@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
    alert('Your email client was opened to send the request.');
  });
}
