<template>
  <main>
    <!-- HERO -->
    <section class="hero-ns">
      <div class="hero-ns__inner">
        <div class="hero-ns__content">
          <span class="hero-ns__badge">
            <i class="bi bi-people-fill"></i> Sobre Nosotros
          </span>
          <h1>Más de 10 años cuidando sonrisas en Huánuco</h1>
          <p>Somos una clínica odontológica comprometida con la salud bucal de toda tu familia.</p>
        </div>
      </div>
    </section>

    <!-- QUIÉNES SOMOS -->
    <section class="quienes">
      <div class="container quienes__inner">

        <div class="quienes__img">
          <!-- POLAROID COMPLETA CON IMAGEN Y UBICACIÓN -->
          <div class="photobooth">
            <div class="photobooth__frame photobooth__frame--main">
              <img src="@/assets/images/clinica.png" alt="Clínica San Martín" />
            </div>

            <!-- UBICACIÓN DENTRO DEL MARCO POLAROID -->
            <a href="https://maps.google.com/?q=JR.+28+DE+JULIO+844,+Hu%C3%A1nuco,+Per%C3%BA" target="_blank"
              rel="noopener noreferrer" class="location-card">
              <div class="location-card__body">
                <h4> <i class="bi bi-geo-alt-fill"></i> Nuestra ubicación
                </h4>
                <p>
                  Jr. 28 de Julio N.° 844. Pje. Perricholi 129<br />
                  <small>Frente a la RENIEC</small>
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="quienes__content">
          <span class="quienes__tag">
            <img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon" />
            San Martín de Porres
          </span>

          <h2>¿Quiénes somos?</h2>
          <p>
            En Clínica San Martín creemos que una buena atención comienza escuchándote.
            Por eso, nos tomamos el tiempo para conocer tus necesidades, resolver tus
            dudas y ayudarte a recuperar la confianza en tu sonrisa.
          </p>

          <p>
            Nos gusta explicarte cada paso con claridad, ofrecerte las mejores
            alternativas para tu caso y acompañarte durante todo tu tratamiento para
            que te sientas seguro y confiado en cada decisión. Porque tu sonrisa merece
            una atención que te haga sentir cómodo y seguro.
          </p>
        </div>
      </div>
    </section>

    <!-- FRASE -->
    <section class="frase">
      <div class="container frase__inner">
        <p class="frase__sub">Cada sonrisa cuenta una historia, y nos alegra ser parte de ella.</p>
        <h2 class="frase__title">Gracias por permitirnos ser parte de la tuya.</h2>
      </div>

      <!-- UNA SOLA IMAGEN CENTRADA QUE UNE AMBAS SECCIONES -->
      <div class="frase__connector">
        <img src="@/assets/images/dental-care.png" alt="" />
      </div>
    </section>

    <!-- MISIÓN Y VISIÓN -->
    <section class="mv">
      <div class="container">
        <div class="mv__header">
          <span class="mv__tag"><img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon">Cuidamos tu
            sonrisa</span>
          <h2>Nuestra Cultura Organizacional</h2>
        </div>
        <div class="mv__grid">
          <div class="mv__card mv__card--mision">
            <h3><i class="bi bi-bullseye"></i> Nuestra misión</h3>
            <p>Brindar atención odontológica integral y personalizada, mejorando la salud bucal y calidad de vida de
              nuestros pacientes con tecnología moderna y calidez humana en cada visita.</p>
          </div>
          <div class="mv__card mv__card--vision">
            <h3><i class="bi bi-eye"></i> Nuestra visión</h3>
            <p>Ser la clínica odontológica líder en Huánuco, reconocida por la excelencia en atención, innovación
              tecnológica y el impacto positivo en la salud de la comunidad huanuqueña.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- EQUIPO / ESPECIALISTAS -->
    <section class="equipo">
      <div class="container">
        <div class="equipo__wrapper">

          <!-- Columna Izquierda: Texto institucional -->
          <div class="equipo__intro">
            <span class="equipo__tag"><i class="bi bi-tooth"></i> <img src="@/assets/images/diente-icono.png"
                alt="Diente" class="custom-icon" />
              Nuestro equipo</span>
            <h2>Los especialistas detrás de tu sonrisa</h2>
            <p class="equipo__desc">
              Nuestro equipo está conformado por profesionales certificados, con amplia experiencia y vocación de
              servicio, comprometidos con brindar una atención odontológica de calidad en Huánuco.
            </p>
          </div>

          <!-- Columna Derecha: Los dos doctores uno encima del otro -->
          <div class="equipo__list">
            <div class="doctor" v-for="d in doctores" :key="d.nombre">
              <div class="doctor__info-box">
                <span class="doctor__tag">{{ d.especialidad }}</span>
                <h3>{{ d.nombre }}</h3>
                <p class="doctor__cop"><i class="bi bi-award"></i> {{ d.cop }}</p>
                <p class="doctor__bio">{{ d.descripcion }}</p>
              </div>
              <div class="doctor__img">
                <img :src="d.foto" :alt="d.nombre" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- VALORES -->
    <section class="valores">
      <div class="container">
        <div class="valores__header">
          <span class="valores__tag"><i class="bi bi-tooth"><img src="@/assets/images/diente-icono.png" alt="Diente"
                class="custom-icon" /></i> Los principios que guían cada sonrisa</span>
          <h2>Nuestros Valores</h2>
        </div>
        <div class="valores__grid">
          <div class="valor__item" v-for="(v, index) in valores" :key="v.titulo">
            <div class="valor__header-row">
              <span class="valor__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <h4>{{ v.titulo }}</h4>
            </div>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
const whatsappUrl = 'https://wa.me/51934423066'

const valores = [
  { titulo: 'Excelencia', desc: 'Nos esforzamos por superar las expectativas de nuestros pacientes con resultados de alta calidad en cada tratamiento.' },
  { titulo: 'Integridad', desc: 'Trabajamos con honestidad, ética y transparencia, ofreciendo diagnósticos claros y tratamientos orientados al bienestar de nuestros pacientes.' },
  { titulo: 'Empatía', desc: 'Entendemos las necesidades de cada paciente, brindando un trato cálido y humano en cada visita.' },
  { titulo: 'Compromiso', desc: 'Dedicados a transformar sonrisas con ética, profesionalismo y precisión en cada procedimiento.' },
  { titulo: 'Personalización', desc: 'Adaptamos los tratamientos a las características únicas de cada paciente, respetando su bienestar.' },
  { titulo: 'Liderazgo', desc: 'Nos comprometemos a ser referentes en la región, marcando estándares en odontología moderna.' },
]

const doctores = [
  { nombre: 'Dra. Deysi Guissela Solorzano Vigilio', cop: 'COP 27287', especialidad: 'Odontopediatra', descripcion: 'Cirujana dentista colegiada con amplia experiencia en atención clínica integral y salud bucal para niños y adultos.', foto: new URL('@/assets/images/doctora.jpg', import.meta.url).href },
  { nombre: 'Dr. Lincol Daniel Poma Merino', cop: 'COP 28361', especialidad: 'Ortodoncista', descripcion: 'Cirujano dentista colegiado, con experiencia en odontología general, cirugía, rehabilitación oral y atención integral de pacientes.', foto: new URL('@/assets/images/doctor.jpg', import.meta.url).href },
]

const razones = [
  'Tecnología de última generación',
  'Diagnósticos precisos y personalizados',
  'Equipo certificado y con experiencia',
  'Ambiente seguro, cómodo y moderno',
  'Atención para toda la familia',
]
</script>

<style scoped>
/* ===== HERO ===== */
.hero-ns {
  background: linear-gradient(135deg, #0d3560 0%, #134e86 50%, #8ec5ff 100%);
  overflow: hidden;
  min-height: 55vh;
  display: flex;
  align-items: center;
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
}

.hero-ns__inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.hero-ns__content {
  max-width: 580px;
  margin-left: max(0px, calc((100vw - 1600px) / 2));
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.hero-ns__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #80e89b;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: var(--text-badge);
}

.hero-ns__content h1 {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.5px;
  font-size: var(--text-hero-title);
}

.hero-ns__content p {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  font-size: var(--text-body-lg);
}

/* ===== QUIÉNES SOMOS ===== */
.quienes {
  background: #fff;
  padding: 6rem 0;
}

.quienes__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.quienes__img {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* POLAROID FRAME */
.photobooth {
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  padding: 14px 14px 0 14px;
  overflow: hidden;
}

.photobooth__frame {
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
}

.photobooth__frame--main {
  position: relative;
  border-radius: 6px;
}

.photobooth__frame--main img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 6px;
  display: block;
  position: relative;
}

.photobooth__frame--main::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.05) 30%,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 100%);
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
}

/* LOCATION CARD - INTEGRADA EN LA POLAROID */
.location-card {
  background: transparent;
  border-radius: 0;
  margin-top: 0;
  padding: 12px 0 14px 0;
  text-decoration: none;
  box-shadow: none;
  transition: transform 0.3s ease;
  display: block;
  position: relative;
  z-index: 2;
  border-top: 1px solid #f0f0f0;
}

.location-card:hover {
  transform: none;
}

.location-card__body {
  text-align: center;
}

.location-card__body h4 {
  color: #134e86;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.location-card__body h4 i {
  color: #80e89b;
  font-size: 18px;
}

.location-card__body p {
  color: #555;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
}

.location-card__body small {
  color: #888;
  font-size: 11px;
  display: block;
  margin-top: 4px;
}

/* CONTENT STYLES */
.quienes__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #eae6e3;
  color: #134e86;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  font-size: var(--text-badge);
}

.quienes__content h2 {
  font-weight: 900;
  color: #134e86;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.5px;
  font-size: var(--text-section-title);
}

.quienes__content p {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: var(--text-body-lg);
}

.quienes__stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1.5px solid #eae6e3;
}

.quienes__stat span {
  display: block;
  font-weight: 900;
  color: #134e86;
  line-height: 1;
  margin-bottom: 0.25rem;
  font-size: var(--text-section-title);
}

.quienes__stat p {
  color: #6b7280;
  margin: 0;
  font-size: var(--text-small);
}

.frase {
  background: #8ec5ff;
  position: relative;
  overflow: visible;
  padding: 70px 0 80px;
}

.frase__inner {
  position: relative;
  z-index: 5;
  text-align: center;
}

.frase__sub {
  font-size: var(--text-body-lg);
  color: #134e86;
  font-weight: 500;
  margin-bottom: 0.6rem;
  text-align: center;
}

.frase__title {
  font-size: var(--text-section-title);
  font-weight: 900;
  color: #134e86;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-align: center;
}

/* Quita las 3 imágenes anteriores */
.frase__corner {
  display: none;
}

/* IMAGEN CENTRAL CONECTORA */
.frase__connector {
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.frase__connector img {
  width: 150px;
  display: block;
  position: relative;
  top: 10px;
  transition: filter 0.3s ease, transform 0.3s ease;
  filter:
    brightness(1.03) saturate(1.08) contrast(1.01) drop-shadow(0 0 2px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 12px rgba(200, 235, 255, 0.25)) drop-shadow(0 6px 20px rgba(100, 180, 255, 0.2)) drop-shadow(0 12px 30px rgba(0, 0, 0, 0.10));
}

.frase__connector img:hover {
  filter:
    brightness(1.08) saturate(1.15) contrast(1.03) drop-shadow(0 0 4px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 20px rgba(200, 235, 255, 0.4)) drop-shadow(0 8px 24px rgba(100, 180, 255, 0.3)) drop-shadow(0 16px 40px rgba(0, 0, 0, 0.12));
  transform: scale(1.05);
}

.frase__connector {
  transition: transform 0.3s ease;
}

/*===== MISIÓN VISIÓN ===== */
.mv {
  background: #fff;
  padding: 6rem 0;
  padding-top: 5rem;
}

.mv__header {
  text-align: center;
  margin-bottom: 1rem;
}

.mv__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #eae6e3;
  color: #134e86;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.mv__header h2 {
  font-weight: 900;
  color: #134e86;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.mv__header p {
  color: #6B7280;
}

.mv__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.mv__card {
  border-radius: 24px;
  padding: 2rem;
  color: #fff;
}

.mv__card--mision {
  background: #134e86;
}

.mv__card--vision {
  background: #498cd0;
}

.mv__card h3 {
  font-weight: 800;
  margin-bottom: 1rem;
}

.mv__card h3 i {
  color: #80e89b;
  margin-right: 6px;
  font-size: 1.1em;
  vertical-align: middle;
}

.mv__card p {
  line-height: 1.8;
  opacity: 0.9;
}

/* ===== VALORES ===== */
.valores {
  background: #f8f9fa;
  padding: 6rem 0;
}

.valores__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.valores__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #eae6e3;
  color: #134e86;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
}

.valores__header h2 {
  font-weight: 900;
  color: #134e86;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.valores__header p {
  color: #6B7280;
}

.valores__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2.5rem;
}

.valor__item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06),
    inset 0 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -1px 1px rgba(255, 255, 255, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.valor__item:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.09),
    inset 0 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -1px 1px rgba(255, 255, 255, 0.4);
}

.valor__header-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: nowrap;
}

.valor__number {
  font-size: 2rem;
  font-weight: 900;
  color: #80e89b;
  line-height: 1;
  flex-shrink: 0;
  position: relative;
  top: 3px;
  transform: translateY(35px);
}

.valor__header-row h4 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #134e86;
  margin: 0;
  white-space: nowrap;
  margin-right: 15px;

}

.valor__item p {
  color: #134e86;
  line-height: 1.65;
  font-size: 1rem;
  margin: 0;
  margin-left: 55px;
}

/* ===== EQUIPO / ESPECIALISTAS ===== */
.equipo {
  background: #134e86;
  padding: 6rem 0;
}

.equipo__wrapper {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Columna Izquierda */
.equipo__intro {
  text-align: left;
}

.equipo__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.equipo__intro h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.equipo__desc {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}

/* Columna Derecha: Contenedor vertical de los doctores */
.equipo__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Tarjeta individual de cada doctor */
.doctor {
  background: #ffffff;
  color: #134e86;
  padding: 1.5rem;
  border-radius: 20px 60px 20px 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.doctor:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

/* Marco rectangular del texto del doctor */
.doctor__info-box {
  flex: 1;
  text-align: left;
  padding: 1.2rem;
  background: #ffffff;
  color: #134e86;
}

.doctor__info-box .doctor__tag {
  display: inline-block;
  background: #9cecb1;
  color: #134e86;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.4rem;
}

.doctor h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #134e86;
  line-height: 1.3;
  margin-bottom: 0.2rem;
}

.doctor__cop {
  font-size: 0.8rem;
  color: #134e86;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.doctor__bio {
  font-size: 0.82rem;
  color: #134e86;
  line-height: 1.4;
  margin: 0;
}

/* Imagen del doctor */
.doctor__img {
  width: 130px;
  height: 150px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f0f4f8;
}

.doctor__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.3s ease;
}

.doctor:hover .doctor__img img {
  transform: scale(1.04);
}

/* Responsivo para tablets y celulares */
@media (max-width: 992px) {
  .equipo__wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .equipo__intro {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .doctor {
    flex-direction: column-reverse;
    text-align: center;
  }

  .doctor__info-box {
    text-align: left;
  }

  .doctor__img {
    width: 120px;
    height: 140px;
    margin: 0 auto;
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .quienes__inner {
    gap: 3rem;
  }

  .elegirnos__inner {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-ns__content {
    padding: 0 1.5rem;
    margin-left: 0;
  }

  .hero-ns__content h1 {
    font-size: 1.75rem;
  }

  .quienes__inner {
    grid-template-columns: 1fr;
  }

  .photobooth__frame--main img {
    height: 280px;
  }

  .mv__grid {
    grid-template-columns: 1fr;
  }

  .valores__grid {
    grid-template-columns: 1fr;
  }

  .equipo__grid {
    grid-template-columns: 1fr;
  }

  .elegirnos__inner {
    grid-template-columns: 1fr;
  }

  .elegirnos__img {
    display: none;
  }

  .frase__corner {
    width: 44px;
    height: 44px;
    top: -8px;
  }

  .frase__sticker {
    width: 36px;
    height: 36px;
  }

  .frase__title {
    font-size: 1.75rem;
  }
}

/* ===== TIPOGRAFÍA ===== */
.hero-ns__badge {
  font-size: var(--text-badge);
}

.hero-ns__content h1 {
  font-size: var(--text-hero-title);
}

.hero-ns__content p {
  font-size: var(--text-body-lg);
}

.quienes__tag {
  font-size: var(--text-badge);
}

.quienes__content h2 {
  font-size: var(--text-section-title);
}

.quienes__content p {
  font-size: var(--text-body-lg);
}

.quienes__stat span {
  font-size: var(--text-section-title);
}

.quienes__stat p {
  font-size: var(--text-small);
}

.frase__sub {
  font-size: var(--text-body-lg);
}

.frase__title {
  font-size: var(--text-section-title);
}

.mv__tag {
  font-size: var(--text-badge);
}

.mv__header h2 {
  font-size: var(--text-section-title);
}

.mv__header p {
  font-size: var(--text-body);
}

.mv__card h3 {
  font-size: var(--text-card-title);
}

.mv__card p {
  font-size: var(--text-body-lg);
}

.valores__tag {
  font-size: var(--text-badge);
}

.valores__header h2 {
  font-size: var(--text-section-title);
}

.valores__header p {
  font-size: var(--text-body);
}

.valor__text h4 {
  font-size: var(--text-card-title);
}

.valor__text p {
  font-size: var(--text-body);
}

.equipo__tag {
  font-size: var(--text-badge);
}

.equipo__header h2 {
  font-size: var(--text-section-title);
}

.equipo__header p {
  font-size: var(--text-body);
}

.doctor h3 {
  font-size: var(--text-card-title);
}

.doctor span {
  font-size: var(--text-badge);
}

.elegirnos__tag {
  font-size: var(--text-badge);
}

.elegirnos__content h2 {
  font-size: var(--text-section-title);
}

.elegirnos__content p {
  font-size: var(--text-body-lg);
}

.elegirnos__list li {
  font-size: var(--text-body);
}

.elegirnos__btn {
  font-size: var(--text-body);
}
</style>