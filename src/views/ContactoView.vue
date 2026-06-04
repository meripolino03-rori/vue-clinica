<template>
  <main>

    <!-- HERO -->
    <section class="hero-ct">
      <div class="hero-ct__inner">
        <div class="hero-ct__content">
          <span class="hero-ct__badge"><i class="bi bi-geo-alt-fill"></i> Encuéntranos</span>
          <h1>Estamos aquí para cuidar tu sonrisa</h1>
          <p>Visítanos en el corazón de Huánuco. Agenda tu cita fácilmente por WhatsApp o llámanos directamente.</p>
          <a :href="whatsappUrl" target="_blank" class="hero-ct__btn">
            <i class="bi bi-whatsapp"></i> Escribirnos por WhatsApp
          </a>
        </div>
        <div class="hero-ct__img">
          <img src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&q=80" alt="Clínica San Martín" />
        </div>
      </div>
    </section>

    <!-- INFO + MAPA -->
    <section class="contacto">
      <div class="container contacto__inner">

        <!-- Info -->
        <div class="contacto__info">
          <span class="contacto__tag">Información de contacto</span>
          <h2>Visítanos o contáctanos</h2>
          <p>Estamos listos para atenderte. Elige la forma que más te convenga.</p>

          <div class="info__items">
            <div class="info__item" v-for="item in infoItems" :key="item.titulo">
              <div class="info__icon">
                <i :class="item.icono"></i>
              </div>
              <div class="info__text">
                <h4>{{ item.titulo }}</h4>
                <p v-for="linea in item.lineas" :key="linea">{{ linea }}</p>
              </div>
            </div>
          </div>

          <div class="info__social">
            <p>Síguenos en redes</p>
            <div class="info__social-btns">
              <a href="#" class="social-btn"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-tiktok"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <!-- Mapa -->
        <div class="contacto__mapa">
          <div class="mapa__badge">
            <i class="bi bi-geo-alt-fill"></i>
            Jr. 28 de Julio 844, Huánuco
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0!2d-76.2422!3d-9.9298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a9255a503b3b3b%3A0x1!2sJr.+28+de+Julio+844%2C+Hu%C3%A1nuco!5e0!3m2!1ses!2spe!4v1"
            width="100%" height="100%"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </section>

    <!-- FORMULARIO -->
    <section class="formulario">
      <div class="container formulario__inner">

        <div class="formulario__content">
          <span class="formulario__tag">Escríbenos</span>
          <h2>¿Tienes alguna consulta?</h2>
          <p>Completa el formulario y te responderemos a la brevedad. También puedes escribirnos directamente por WhatsApp.</p>
          <div class="formulario__whatsapp">
            <i class="bi bi-whatsapp"></i>
            <div>
              <h4>Respuesta inmediata</h4>
              <p>Escríbenos por WhatsApp y te atendemos al instante</p>
            </div>
            <a :href="whatsappUrl" target="_blank" class="formulario__wa-btn">Abrir WhatsApp</a>
          </div>
        </div>

        <form class="formulario__form" @submit.prevent="enviarFormulario">
          <div class="form__row">
            <div class="form__group">
              <label>Nombre completo</label>
              <input v-model="form.nombre" type="text" placeholder="Tu nombre" required />
            </div>
            <div class="form__group">
              <label>Teléfono</label>
              <input v-model="form.telefono" type="tel" placeholder="Tu teléfono" />
            </div>
          </div>
          <div class="form__group">
            <label>Correo electrónico</label>
            <input v-model="form.email" type="email" placeholder="tu@correo.com" required />
          </div>
          <div class="form__group">
            <label>Servicio de interés</label>
            <select v-model="form.servicio">
              <option value="">Selecciona un servicio</option>
              <option v-for="s in servicios" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div class="form__group">
            <label>Mensaje</label>
            <textarea v-model="form.mensaje" placeholder="¿En qué podemos ayudarte?" rows="4"></textarea>
          </div>
          <button type="submit" class="form__btn" :class="{ 'form__btn--enviado': enviado }">
            <i class="bi" :class="enviado ? 'bi-check-lg' : 'bi-send'"></i>
            {{ enviado ? '¡Mensaje enviado!' : 'Enviar mensaje' }}
          </button>
        </form>

      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-final">
      <div class="container cta-final__inner">
        <div>
          <h2>¿Prefieres hablar directamente?</h2>
          <p>Llámanos o escríbenos por WhatsApp y te atendemos de inmediato.</p>
        </div>
        <div class="cta-final__btns">
          <a href="tel:+51934423066" class="cta-final__btn cta-final__btn--phone">
            <i class="bi bi-telephone-fill"></i> Llamar ahora
          </a>
          <a :href="whatsappUrl" target="_blank" class="cta-final__btn cta-final__btn--wa">
            <i class="bi bi-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const whatsappUrl = 'https://wa.me/51934423066'

const infoItems = [
  {
    icono: 'bi bi-geo-alt-fill',
    titulo: 'Dirección',
    lineas: ['Jr. 28 de Julio 844', 'Huánuco, Perú'],
  },
  {
    icono: 'bi bi-telephone-fill',
    titulo: 'Teléfono',
    lineas: ['+51 934 423 066'],
  },
  {
    icono: 'bi bi-envelope-fill',
    titulo: 'Correo',
    lineas: ['contacto@clinicasanmartin.pe'],
  },
  {
    icono: 'bi bi-clock-fill',
    titulo: 'Horarios',
    lineas: ['Lunes – Viernes: 8am – 7pm', 'Sábados: 8am – 2pm'],
  },
]

const servicios = [
  'Consulta General',
  'Odontopediatría',
  'Ortodoncia',
  'Implantes Dentales',
  'Blanqueamiento',
  'Limpieza Dental',
  'Cirugía Oral',
  'Otro',
]

const form = ref({
  nombre: '',
  telefono: '',
  email: '',
  servicio: '',
  mensaje: '',
})

const enviado = ref(false)

function enviarFormulario() {
  const msg = `Hola, soy ${form.value.nombre}. Me interesa: ${form.value.servicio || 'consulta general'}. ${form.value.mensaje}`
  window.open(`https://wa.me/51934423066?text=${encodeURIComponent(msg)}`, '_blank')
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
    form.value = { nombre: '', telefono: '', email: '', servicio: '', mensaje: '' }
  }, 3000)
}
</script>

<style scoped>
/* ============================================================
   HERO
============================================================ */
.hero-ct {
  background: #134e86;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: stretch;
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
}

.hero-ct__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  max-width: 100%;
}

.hero-ct__content {
  padding: 5rem 3rem 5rem 4rem;
  max-width: 600px;
  margin-left: max(4rem, calc((100vw - 1400px) / 2));
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-ct__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #80e89b;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.hero-ct__content h1 {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.hero-ct__content p {
  color: rgba(255,255,255,0.75);
  line-height: 1.8;
}

.hero-ct__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
  width: fit-content;
}

.hero-ct__btn:hover {
  background: #6add89;
  transform: translateY(-2px);
}

.hero-ct__img {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 480px;
  overflow: hidden;
}

.hero-ct__img::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(to right, #134e86, transparent);
  z-index: 1;
}

.hero-ct__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* ============================================================
   CONTACTO INFO + MAPA
============================================================ */
.contacto {
  background: #fff;
  padding: 5rem 0;
}

.contacto__inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: stretch;
}

.contacto__tag {
  display: inline-block;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.contacto__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contacto__info h2 {
  font-weight: 900;
  color: #134e86;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.contacto__info > p {
  color: #6B7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.info__items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.info__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 16px;
  transition: transform 0.2s;
}

.info__item:hover { transform: translateX(4px); }

.info__icon {
  width: 44px;
  height: 44px;
  background: #134e86;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #80e89b;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.info__text h4 {
  font-weight: 700;
  color: #134e86;
  margin-bottom: 0.25rem;
}

.info__text p {
  color: #6B7280;
  line-height: 1.5;
}

.info__social p {
  font-weight: 700;
  color: #134e86;
  margin-bottom: 0.75rem;
}

.info__social-btns {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #f8f9fa;
  color: #134e86;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.2s;
}

.social-btn:hover {
  background: #134e86;
  color: #80e89b;
  transform: translateY(-3px);
}

.contacto__mapa {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 500px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  border: 4px solid #fff;
  outline: 1px solid #eae6e3;
}

.contacto__mapa {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 500px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  border: 4px solid #fff;
  outline: 1px solid #eae6e3;
}

.mapa__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  background: #134e86;
  color: #fff;
  font-weight: 700;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 16px rgba(19,78,134,0.3);
}

.mapa__badge i { color: #80e89b; }

/* ============================================================
   FORMULARIO
============================================================ */
.formulario {
  background: #fffbf2;
  padding: 5rem 0;
}

.formulario__inner {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.formulario__tag {
  display: inline-block;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.formulario__content h2 {
  font-weight: 900;
  color: #134e86;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.formulario__content > p {
  color: #6B7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.formulario__whatsapp {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #134e86;
  border-radius: 16px;
  padding: 1.25rem;
  color: #fff;
}

.formulario__whatsapp i {
  font-size: 1.75rem;
  color: #80e89b;
  flex-shrink: 0;
}

.formulario__whatsapp h4 {
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.formulario__whatsapp p {
  color: rgba(255,255,255,0.75);
  line-height: 1.4;
}

.formulario__wa-btn {
  display: inline-block;
  background: #25D366;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s;
}

.formulario__wa-btn:hover { background: #1da851; }

.formulario__form {
  background: #fff;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form__group label {
  font-weight: 600;
  color: #134e86;
}

.form__group input,
.form__group select,
.form__group textarea {
  padding: 0.75rem 1rem;
  border: 1.5px solid #eae6e3;
  border-radius: 12px;
  font-family: inherit;
  color: #1A1A2E;
  outline: none;
  transition: border-color 0.2s;
  background: #f8f9fa;
}

.form__group input:focus,
.form__group select:focus,
.form__group textarea:focus {
  border-color: #134e86;
  background: #fff;
}

.form__group textarea { resize: vertical; }

.form__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #134e86;
  color: #fff;
  font-weight: 800;
  padding: 0.875rem 2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.form__btn:hover { background: #0d3d6e; transform: translateY(-2px); }

.form__btn--enviado {
  background: #25D366;
}

/* ============================================================
   CTA FINAL
============================================================ */
.cta-final {
  background: #134e86;
  padding: 4rem 0;
}

.cta-final__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-final__inner h2 {
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.3px;
}

.cta-final__inner p {
  color: rgba(255,255,255,0.7);
}

.cta-final__btns {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.cta-final__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.cta-final__btn--phone {
  background: rgba(255,255,255,0.15);
  color: #fff;
  border: 2px solid rgba(255,255,255,0.4);
}

.cta-final__btn--phone:hover { background: rgba(255,255,255,0.25); }

.cta-final__btn--wa {
  background: #25D366;
  color: #fff;
}

.cta-final__btn--wa:hover { background: #1da851; transform: translateY(-2px); }

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
  .hero-ct__inner      { grid-template-columns: 1fr 1fr; }
  .contacto__inner     { grid-template-columns: 1fr; }
  .contacto__mapa      { height: 380px; }
  .formulario__inner   { grid-template-columns: 1fr; }
  .cta-final__inner    { flex-direction: column; text-align: center; }
  .cta-final__btns     { justify-content: center; }
}

@media (max-width: 768px) {
  .hero-ct__inner      { grid-template-columns: 1fr; }
  .hero-ct__img        { display: none; }
  .hero-ct__content    { padding: 3rem 1.5rem; margin-left: 0; }
  .form__row           { grid-template-columns: 1fr; }
  .formulario__form    { padding: 1.5rem; }
  .formulario__whatsapp { flex-wrap: wrap; }
}

/* ============================================================
   TIPOGRAFÍA
============================================================ */
.hero-ct__badge          { font-size: var(--text-badge); }
.hero-ct__content h1     { font-size: var(--text-hero-title); }
.hero-ct__content p      { font-size: var(--text-body-lg); }
.hero-ct__btn            { font-size: var(--text-body); }
.contacto__tag           { font-size: var(--text-badge); }
.contacto__info h2       { font-size: var(--text-section-title); }
.contacto__info > p      { font-size: var(--text-body); }
.info__text h4           { font-size: var(--text-card-title); }
.info__text p            { font-size: var(--text-body); }
.info__social p          { font-size: var(--text-small); }
.mapa__badge             { font-size: var(--text-small); }
.formulario__tag         { font-size: var(--text-badge); }
.formulario__content h2  { font-size: var(--text-section-title); }
.formulario__content > p { font-size: var(--text-body); }
.formulario__whatsapp h4 { font-size: var(--text-card-title); }
.formulario__whatsapp p  { font-size: var(--text-small); }
.form__group label       { font-size: var(--text-small); }
.form__group input,
.form__group select,
.form__group textarea    { font-size: var(--text-body); }
.form__btn               { font-size: var(--text-body); }
.cta-final__inner h2     { font-size: var(--text-section-title); }
.cta-final__inner p      { font-size: var(--text-body); }
.cta-final__btn          { font-size: var(--text-body); }
</style>