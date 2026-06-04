<template>
  <footer class="footer">

    <div class="footer__top">
      <div class="container footer__grid">

        <!-- Marca -->
        <div class="footer__brand">
          <RouterLink to="/" class="footer__logo">
            <span class="footer__logo-name">San Martín</span>
            <span class="footer__logo-sub">Clínica Odontológica</span>
          </RouterLink>
          <p class="footer__desc">Tu sonrisa es nuestra misión. Atención especializada para toda la familia en el corazón de Huánuco.</p>
          <a :href="whatsappUrl" target="_blank" class="footer__wa">
            <i class="bi bi-whatsapp"></i> Hablemos por WhatsApp
          </a>
        </div>

        <!-- Links -->
        <div class="footer__col">
          <h4>Navegación</h4>
          <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/nosotros">Nosotros</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/contacto">Contacto</RouterLink></li>
          </ul>
        </div>

        <!-- Atención -->
        <div class="footer__col">
          <h4>Atención</h4>
          <ul>
            <li><RouterLink to="/servicios/infantil">Atención Infantil</RouterLink></li>
            <li><RouterLink to="/servicios/adultos">Atención para Adultos</RouterLink></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="footer__col">
          <h4>Contacto</h4>
          <ul class="footer__contact">
            <li>
              <i class="bi bi-geo-alt-fill"></i>
              Jr. 28 de Julio 844, Huánuco
            </li>
            <li>
              <i class="bi bi-clock-fill"></i>
              Lun – Sáb: 8am – 7pm
            </li>
            <li>
              <i class="bi bi-telephone-fill"></i>
              +51 999 999 999
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              contacto@clinicasanmartin.pe
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>© {{ year }} Clínica San Martín. Todos los derechos reservados.</p>
        <p>Hecho con <i class="bi bi-heart-fill"></i> en Huánuco, Perú</p>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const whatsappUrl = 'https://wa.me/51999999999'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #0f3a6a;
}

.footer__top {
  padding: 5rem 0 4rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
}

/* Marca */
.footer__logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 1.25rem;
}

.footer__logo-name {
  font-size: 1.35rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.3px;
}

.footer__logo-sub {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.footer__desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.8;
  margin-bottom: 1.75rem;
  max-width: 280px;
}

.footer__wa {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25D366;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.footer__wa:hover {
  background: #1da851;
  transform: translateY(-2px);
}

/* Columnas */
.footer__col h4 {
  font-size: 0.75rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__col ul li a {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.2s;
}

.footer__col ul li a:hover {
  color: #80e89b;
}

/* Contacto */
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer__contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
}

.footer__contact li i {
  color: #80e89b;
  font-size: 0.9rem;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 1.5rem 0;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__bottom p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
}

.footer__bottom i {
  color: #ef4444;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }

  .footer__bottom-inner {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>