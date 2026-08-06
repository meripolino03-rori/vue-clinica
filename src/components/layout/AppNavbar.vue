<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">

      <RouterLink to="/" class="navbar__logo">
        <span class="navbar__logo-name">San Martín de Porres</span>
      </RouterLink>

      <nav class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <RouterLink to="/" class="navbar__link" @click="closeAll">Inicio</RouterLink>
        <RouterLink to="/nosotros" class="navbar__link" @click="closeAll">Nosotros</RouterLink>
        <RouterLink to="/blog" class="navbar__link" @click="closeAll">Blog</RouterLink>

        <!-- Dropdown Atención -->
        <div class="navbar__dropdown" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          <button
            class="navbar__link navbar__dropdown-trigger"
            @click="toggleDropdown"
          >
            Atención
            <i class="bi bi-chevron-down arrow" :class="{ 'arrow--up': dropdownOpen }"></i>
          </button>
          <div class="dropdown__menu" :class="{ 'dropdown__menu--open': dropdownOpen }">
            <RouterLink to="/servicios/infantil" class="dropdown__item dropdown__item--kids" @click="closeAll">
              <div>
                <strong><i class="bi bi-emoji-smile"></i> Atención Infantil</strong>
              </div>
            </RouterLink>
            <RouterLink to="/servicios/adultos" class="dropdown__item dropdown__item--adult" @click="closeAll">
              <div>
                <strong><i class="bi bi-person"></i> Atención para Adultos</strong>
              </div>
            </RouterLink>
          </div>
        </div>

        <RouterLink to="/contacto" class="navbar__link" @click="closeAll">Contacto</RouterLink>
      </nav>

      <div class="navbar__cta">
        <a :href="whatsappUrl" target="_blank" class="navbar__wa">
          <i class="bi bi-whatsapp"></i> WhatsApp
        </a>
      </div>

      <!-- ← Burger: estaba en el CSS pero faltaba en el HTML -->
      <button class="navbar__burger" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const whatsappUrl   = 'https://wa.me/51999999999'
const isScrolled    = ref(false)
const menuOpen      = ref(false)
const dropdownOpen  = ref(false)
let closeTimer = null

function openDropdown() {
  clearTimeout(closeTimer)
  dropdownOpen.value = true
}

function closeDropdown() {
  closeTimer = setTimeout(() => {
    dropdownOpen.value = false
  }, 150)
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function closeAll() {
  menuOpen.value     = false
  dropdownOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  background: #134e86;
  transition: box-shadow 0.3s ease;
}

.navbar--scrolled {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
}

.navbar__logo {
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-name {
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.3px;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.navbar__link {
  font-size: var(--text-body);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
}

.navbar__link:hover { color: #fff; }

.navbar__link.router-link-active {
  color: #80e89b;
  font-weight: 700;
}

/* ── Dropdown ── */
.navbar__dropdown { position: relative; }

.arrow {
  font-size: 0.75rem;
  transition: transform 0.2s;
}

.arrow--up { transform: rotate(180deg); }

.dropdown__menu {
  position: absolute;
  top: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) translateY(-6px);
  width: 220px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 0.4rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown__menu--open {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

.dropdown__item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}

.dropdown__item--kids:hover   { background: #5BB8E8; }
.dropdown__item--kids:hover strong { color: #fff; }
.dropdown__item--adult:hover  { background: #1A4D8F; }
.dropdown__item--adult:hover strong { color: #fff; }

.dropdown__item strong {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1A1A2E;
}

/* ── CTA ── */
.navbar__cta {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__wa {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #80e89b;
  background: transparent;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: 2px solid #80e89b;
  transition: all 0.2s;
}

.navbar__wa:hover {
  background: #80e89b;
  color: #fff;
}

/* ── Burger ── */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  flex-shrink: 0;
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 99px;
  transition: all 0.3s ease;
}

/* Animación X */
.navbar__burger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger span.open:nth-child(2) { opacity: 0; }
.navbar__burger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {

  .navbar__cta    { display: none; }
  .navbar__burger { display: flex; }  /* ← aparece el burger */

  .navbar__links {
    display: none;                    /* ← oculto por defecto */
    position: absolute;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    background: #1A4D8F;
    flex-direction: column;
    align-items: flex-start;          /* ← links alineados a la izquierda */
    padding: 1.25rem 1.5rem;
    gap: 0.25rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .navbar__links--open {
    display: flex;                    /* ← se muestra al hacer click */
  }

  .navbar__link {
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: var(--text-body);
  }

  .navbar__link:last-child { border-bottom: none; }

  /* Dropdown en móvil */
  .navbar__dropdown { width: 100%; }

  .navbar__dropdown-trigger {
    width: 100%;
    justify-content: space-between;
  }

  .dropdown__menu {
    position: static;
    transform: none !important;
    width: 100%;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    transition: max-height 0.3s ease, opacity 0.2s ease, padding 0.2s ease;
  }

  .dropdown__menu--open {
    opacity: 1;
    max-height: 200px;
    padding: 0.4rem;
    pointer-events: all;
  }

  .dropdown__item strong { color: #fff; }

  .dropdown__item--kids:hover,
  .dropdown__item--adult:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  .dropdown__item--kids:hover strong,
  .dropdown__item--adult:hover strong {
    color: #fff;
  }
}
</style>