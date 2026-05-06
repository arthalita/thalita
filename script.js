// Efek navbar saat scroll
window.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  navbar.style.background = window.scrollY > 50 ? "#222" : "#333";
});

// Form handling (tanpa database)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  let hasil = document.getElementById("hasil");
  hasil.innerHTML = `
    <h3>Data Terkirim:</h3>
    <p>Nama: ${nama}</p>
    <p>Email: ${email}</p>
    <p>Pesan: ${pesan}</p>
  `;
});
