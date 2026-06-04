<template>
  <main>

    <!-- HERO -->
    <section class="hero-ns">
      <div class="hero-ns__banner">
        <img src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1400&q=80" alt="Clínica San Martín" />
        <div class="hero-ns__overlay">
          <div class="hero-ns__content">
            <span class="hero-ns__badge">Sobre Nosotros</span>
            <h1>Más de 10 años cuidando sonrisas en Huánuco</h1>
            <p>Somos una clínica odontológica comprometida con la salud bucal de toda tu familia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUIÉNES SOMOS -->
    <section class="quienes">
      <div class="container quienes__inner">
        <div class="quienes__img">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffedfd5b0f4?w=700&q=80" alt="Clínica San Martín" />
        </div>
        <div class="quienes__content">
          <span class="quienes__tag">
            <img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon">
            San Martín de Porres
          </span>
          <h2>¿Quiénes somos?</h2>
          <p>En Clínica San Martín creemos que una buena atención comienza escuchándote. Por eso, nos tomamos el tiempo
            para conocer tus necesidades, resolver tus dudas y ayudarte a recuperar la confianza en tu sonrisa.</p>
          <p>Nos gusta explicarte cada paso con claridad, ofrecerte las mejores alternativas para tu caso y acompañarte
            durante todo tu tratamiento para que te sientas seguro y confiado en cada decisión. Porque tu sonrisa merece
            una atención que te haga sentir cómodo y seguro.</p>
          <div class="quienes__stats">
            <div class="quienes__stat" v-for="s in stats" :key="s.label">
              <span>{{ s.value }}</span>
              <p>{{ s.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FRASE DESTACADA -->
    <section class="frase">
      <div class="container frase__inner">
        <p class="frase__sub">Cada sonrisa cuenta una historia, y nos alegra ser parte de ella. </p>
        <h2 class="frase__title">Gracias por permitirnos ser parte de la tuya.</h2>
      </div>
    </section>

    <!-- MISIÓN Y VISIÓN -->
    <section class="mv">
      <div class="container">
        <div class="mv__header">
          <span class="mv__tag"><img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon">Cuidamos tu sonrisa</span>
          <h2>Nuestra Cultura Organizacional</h2>
          <p>Con empatía, precisión y dedicación</p>
        </div>
        <div class="mv__grid">
          <div class="mv__card mv__card--mision">
            <h3>Nuestra misión</h3>
            <p>Brindar atención odontológica integral y personalizada, mejorando la salud bucal y calidad de vida de
              nuestros pacientes con tecnología moderna y calidez humana en cada visita.</p>
          </div>
          <div class="mv__card mv__card--vision">
            <h3>Nuestra visión</h3>
            <p>Ser la clínica odontológica líder en Huánuco, reconocida por la excelencia en atención, innovación
              tecnológica y el impacto positivo en la salud de la comunidad huanuqueña.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VALORES -->
    <section class="valores">
      <div class="container">
        <div class="valores__header">
          <span class="valores__tag"><i class="bi bi-tooth"></i> Nuestros</span>
          <h2>Valores</h2>
          <p>Los principios que guían cada sonrisa</p>
        </div>
        <div class="valores__grid">
          <div class="valor__item" v-for="v in valores" :key="v.titulo">
            <div class="valor__icon">
              <i :class="v.icono"></i>
            </div>
            <div class="valor__text">
              <h4>{{ v.titulo }}</h4>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EQUIPO -->
    <section class="equipo">
      <div class="container">
        <div class="equipo__header">
          <span class="equipo__tag"><i class="bi bi-tooth"></i> Nuestro equipo</span>
          <h2>Los especialistas detrás de tu sonrisa</h2>
          <p>Profesionales certificados con años de experiencia y vocación de servicio.</p>
        </div>
        <div class="equipo__grid">
          <div class="doctor" v-for="d in doctores" :key="d.nombre">
            <div class="doctor__img">
              <img :src="d.foto" :alt="d.nombre" />
            </div>
            <h3>{{ d.nombre }}</h3>
            <span>{{ d.especialidad }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- POR QUÉ ELEGIRNOS -->
    <section class="elegirnos">
      <div class="container elegirnos__inner">
        <div class="elegirnos__content">
          <span class="elegirnos__tag"><i class="bi bi-tooth"></i> ¿Por qué elegirnos?</span>
          <h2>Lo que nos hace únicos</h2>
          <p>En Clínica San Martín, ofrecemos un servicio único gracias a nuestros equipos de última generación, que nos
            permiten realizar diagnósticos precisos y tratamientos personalizados, minimizando molestias y maximizando
            la eficacia.</p>
          <ul class="elegirnos__list">
            <li v-for="r in razones" :key="r"><i class="bi bi-check-circle-fill"></i> {{ r }}</li>
          </ul>
          <a :href="whatsappUrl" target="_blank" class="elegirnos__btn">
            <i class="bi bi-whatsapp"></i> Agenda tu cita
          </a>
        </div>
        <div class="elegirnos__img">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80" alt="Equipo San Martín" />
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
const whatsappUrl = 'https://wa.me/51934423066'

const stats = [
  { value: '+500', label: 'Pacientes atendidos' },
  { value: '+10', label: 'Años de experiencia' },
  { value: '95%', label: 'Pacientes satisfechos' },
]

const valores = [
  { icono: 'bi bi-gem', titulo: 'Excelencia', desc: 'Nos esforzamos por superar las expectativas de nuestros pacientes con resultados de alta calidad en cada tratamiento.' },
  { icono: 'bi bi-lightbulb', titulo: 'Innovación', desc: 'Nos posicionamos como pioneros en el uso de tecnología de vanguardia para ofrecer los mejores resultados.' },
  { icono: 'bi bi-heart', titulo: 'Empatía', desc: 'Entendemos las necesidades de cada paciente, brindando un trato cálido y humano en cada visita.' },
  { icono: 'bi bi-handshake', titulo: 'Compromiso', desc: 'Dedicados a transformar sonrisas con ética, profesionalismo y precisión en cada procedimiento.' },
  { icono: 'bi bi-person-check', titulo: 'Personalización', desc: 'Adaptamos los tratamientos a las características únicas de cada paciente, respetando su bienestar.' },
  { icono: 'bi bi-trophy', titulo: 'Liderazgo', desc: 'Nos comprometemos a ser referentes en la región, marcando estándares en odontología moderna.' },
]

const doctores = [
  { nombre: 'Dra. María González', especialidad: 'Odontopediatra', foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { nombre: 'Dr. Carlos Mendoza', especialidad: 'Ortodoncista', foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
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
  margin-top: calc(-1 * var(--navbar-height));
}

.hero-ns__banner {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero-ns__banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero-ns__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(19, 78, 134, 0.92), rgba(19, 78, 134, 0.5));
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
}

.hero-ns__content {
  padding: 0 4rem;
  margin-left: max(0px, calc((100vw - 1400px) / 2));
  max-width: 640px;
}

.hero-ns__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: #80e89b;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-ns__content h1 {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.hero-ns__content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
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
  position: relative;
  border-radius: 24px;
  overflow: visible;
}

.quienes__img img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}

.quienes__img-badge {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  background: #134e86;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 8px 24px rgba(19, 78, 134, 0.3);
}

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
}

.quienes__content h2 {
  font-weight: 900;
  color: #134e86;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.5px;
}

.quienes__content p {
  color: #4B5563;
  line-height: 1.8;
  margin-bottom: 1rem;
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
}

.quienes__stat p {
  color: #6B7280;
  margin: 0;
}

/* ===== FRASE ===== */
.frase {
  background: #8ec5ff;
  padding: 3.5rem 0;
  text-align: center;
}

.frase__sub {
  font-weight: 700;
  color: #134e86;
  margin-bottom: 0.5rem;
}

.frase__title {
  font-weight: 900;
  color: #134e86;
  letter-spacing: -0.5px;
}

/* ===== MISIÓN VISIÓN ===== */
.mv {
  background: #fff;
  padding: 6rem 0;
}

.mv__header {
  text-align: center;
  margin-bottom: 3rem;
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
  padding: 3rem;
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
  gap: 1.5rem;
}

.valor__item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: #fff;
  border-radius: 20px;
  padding: 1.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.valor__item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.valor__icon {
  width: 60px;
  height: 60px;
  background: #eae6e3;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.5rem;
  color: #134e86;
}

.valor__text h4 {
  font-weight: 800;
  color: #134e86;
  margin-bottom: 0.4rem;
}

.valor__text p {
  color: #6B7280;
  line-height: 1.7;
}

/* ===== EQUIPO ===== */
.equipo {
  background: #134e86;
  padding: 6rem 0;
}

.equipo__header {
  text-align: center;
  margin-bottom: 3.5rem;
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

.equipo__header h2 {
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.equipo__header p {
  color: rgba(255, 255, 255, 0.65);
}

.equipo__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.doctor {
  text-align: center;
  transition: transform 0.3s;
}

.doctor:hover {
  transform: translateY(-6px);
}

.doctor__img {
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.doctor__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.3s;
}

.doctor:hover .doctor__img img {
  transform: scale(1.04);
}

.doctor h3 {
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.3rem;
}

.doctor span {
  display: inline-block;
  background: #80e89b;
  color: #134e86;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

/* ===== POR QUÉ ELEGIRNOS ===== */
.elegirnos {
  background: #8ec5ff;
  padding: 6rem 0;
}

.elegirnos__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.elegirnos__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  color: #134e86;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.elegirnos__content h2 {
  font-weight: 900;
  color: #134e86;
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.elegirnos__content p {
  color: #134e86;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.elegirnos__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.elegirnos__list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #134e86;
}

.elegirnos__list li i {
  color: #134e86;
}

.elegirnos__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25D366;
  color: #fff;
  font-weight: 800;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.elegirnos__btn:hover {
  background: #1da851;
  transform: translateY(-2px);
}

.elegirnos__img {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
}

.elegirnos__img img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  display: block;
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

  .quienes__img img {
    height: 300px;
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

.quienes__img-badge {
  font-size: var(--text-small);
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