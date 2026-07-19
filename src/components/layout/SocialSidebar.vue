<template>
  <div class="social-sidebar">
    <a
      href="https://www.facebook.com/Clinicadentalsanmartindeporres"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon facebook"
      aria-label="Facebook"
    >
      <i class="bi bi-facebook"></i>
    </a>

    <a
      href="https://www.instagram.com/dentalsanmartindeporres/"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon instagram"
      aria-label="Instagram"
    >
      <i class="bi bi-instagram"></i>
    </a>

    <a
      href="https://wa.me/51934423066"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon whatsapp"
      aria-label="WhatsApp"
    >
      <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.social-sidebar {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 2000;
}

.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
}

.social-icon:hover {
  transform: scale(1.12);
}

.facebook {
  background-color: #1877f2;
}

.instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.whatsapp {
  background-color: #25d366;
}

@media (max-width: 1024px) {
  .social-sidebar {
    left: 50%;
    top: auto;
    bottom: 16px;
    transform: translateX(-50%);
    flex-direction: row;
    gap: 12px;
    background: rgba(19, 78, 134, 0.85);
    padding: 8px 12px;
    border-radius: 999px;
    backdrop-filter: blur(6px);
  }

  .social-icon {
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
  }
}

@media (max-width: 480px) {
  .social-icon {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
}
</style>

