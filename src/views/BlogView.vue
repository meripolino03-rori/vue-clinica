<template>
  <main class="blog-page">

    <!-- HERO -->
    <section class="hero-blog">
      <div class="hero-blog__inner">
        <span class="hero-blog__badge">Nuestro Blog</span>
        <h1>Secretos de una sonrisa sana</h1>
        <p>Cosas que tu dentista quiere que sepas... pero que a veces no te dicen.</p>
      </div>
    </section>

    <!-- FILTROS Y BÚSQUEDA -->
    <section class="filtros">
      <div class="container filtros__inner">

        <div class="filtros__search">
          <i class="bi bi-search"></i>
          <input
            v-model="busqueda"
            type="text"
            placeholder="Buscar artículos..."
          />
          <button v-if="busqueda" @click="busqueda = ''" class="filtros__clear">
            <i class="bi bi-x"></i>
          </button>
        </div>

        <div class="filtros__cats">
          <button
            class="filtros__cat"
            :class="{ 'filtros__cat--active': categoriaActiva === 'Todos' }"
            @click="categoriaActiva = 'Todos'"
          >
            Todos
          </button>
          <button
            v-for="cat in categorias"
            :key="cat"
            class="filtros__cat"
            :class="{ 'filtros__cat--active': categoriaActiva === cat }"
            @click="categoriaActiva = cat"
          >
            {{ cat }}
          </button>
        </div>

      </div>
    </section>

    <!-- RESULTADOS -->
    <section class="resultados">
      <div class="container">

        <p class="resultados__count" v-if="articulosFiltrados.length > 0">
          {{ articulosFiltrados.length }} artículo{{ articulosFiltrados.length !== 1 ? 's' : '' }} encontrado{{ articulosFiltrados.length !== 1 ? 's' : '' }}
        </p>

        <div class="blog__grid" v-if="articulosFiltrados.length > 0">
          <RouterLink
            v-for="a in articulosFiltrados"
            :key="a.slug"
            :to="'/blog/' + a.slug"
            class="bcard"
          >
            <div class="bcard__img">
              <img :src="a.imagen" :alt="a.titulo" loading="lazy" />
            </div>
            <div class="bcard__body">
              <div class="bcard__cats">
                <span v-for="cat in a.categorias" :key="cat" class="bcard__cat">{{ cat }}</span>
              </div>
              <h3>{{ a.titulo }}</h3>
              <p>{{ a.resumen }}</p>
              <div class="bcard__meta">
                <span><i class="bi bi-person"></i> {{ a.autor }}</span>
                <span><i class="bi bi-clock"></i> {{ a.tiempo_lectura }}</span>
                <span><i class="bi bi-calendar3"></i> {{ a.fecha }}</span>
              </div>
            </div>
          </RouterLink>
        </div>

        <div class="blog__empty" v-else>
          <i class="bi bi-search"></i>
          <h3>No encontramos artículos</h3>
          <p>Intenta con otra búsqueda o categoría</p>
          <button @click="resetFiltros">Ver todos los artículos</button>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { articulos } from '../data/blog.js'

const busqueda = ref('')
const categoriaActiva = ref('Todos')

const categorias = computed(() => {
  const cats = new Set()
  articulos.forEach(a => a.categorias.forEach(c => cats.add(c)))
  return [...cats].sort()
})

const articulosFiltrados = computed(() => {
  return articulos.filter(a => {
    const matchBusqueda = busqueda.value === '' ||
      a.titulo.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      a.resumen.toLowerCase().includes(busqueda.value.toLowerCase())

    const matchCategoria = categoriaActiva.value === 'Todos' ||
      a.categorias.includes(categoriaActiva.value)

    return matchBusqueda && matchCategoria
  })
})

function resetFiltros() {
  busqueda.value = ''
  categoriaActiva.value = 'Todos'
}
</script>

<style scoped>
.blog-page {
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
}

/* ===== HERO ===== */
.hero-blog {
  background: #134e86;
  padding: 5rem 0 4rem;
  text-align: center;
}

.hero-blog__inner {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-blog__badge {
  display: inline-block;
  background: transparent;
  color: #80e89b;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-blog h1 {
  color: #fff;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.hero-blog p {
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
}

/* ===== FILTROS ===== */
.filtros {
  background: #fff;
  padding: 2rem 0;
  position: sticky;
  top: var(--navbar-height);
  z-index: 100;
  border-bottom: 1.5px solid #eae6e3;
}

.filtros__inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.filtros__search {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #f8f9fa;
  border: 1.5px solid #eae6e3;
  border-radius: 999px;
  padding: 0.75rem 1.25rem;
  max-width: 500px;
  transition: border-color 0.2s;
}

.filtros__search:focus-within {
  border-color: #134e86;
}

.filtros__search i {
  color: #6B7280;
  font-size: 1rem;
  flex-shrink: 0;
}

.filtros__search input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: #1A1A2E;
  font-family: inherit;
}

.filtros__clear {
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 1rem;
}

.filtros__cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filtros__cat {
  background: #f8f9fa;
  border: 1.5px solid #eae6e3;
  color: #6B7280;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.filtros__cat:hover {
  border-color: #134e86;
  color: #134e86;
}

.filtros__cat--active {
  background: #134e86;
  border-color: #134e86;
  color: #fff;
}

/* ===== RESULTADOS ===== */
.resultados {
  background: #f8f9fa;
  padding: 3rem 0 6rem;
}

.resultados__count {
  color: #6B7280;
  margin-bottom: 2rem;
}

.blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.bcard {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.bcard:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.1);
}

.bcard__img {
  height: 200px;
  overflow: hidden;
}

.bcard__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  display: block;
}

.bcard:hover .bcard__img img { transform: scale(1.05); }

.bcard__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.bcard__cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.bcard__cat {
  background: #eae6e3;
  color: #134e86;
  font-weight: 700;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s;
}

.bcard__cat:hover { background: #134e86; color: #fff; }

.bcard__body h3 {
  font-weight: 800;
  color: #134e86;
  line-height: 1.3;
  flex: 1;
}

.bcard__body p {
  color: #6B7280;
  line-height: 1.6;
}

.bcard__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #eae6e3;
}

.bcard__meta span {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #9CA3AF;
}

.bcard__meta i { font-size: 0.85rem; }

/* ===== EMPTY ===== */
.blog__empty {
  text-align: center;
  padding: 5rem 0;
}

.blog__empty i {
  font-size: 3rem;
  color: #d1d5db;
  display: block;
  margin-bottom: 1rem;
}

.blog__empty h3 {
  font-weight: 800;
  color: #134e86;
  margin-bottom: 0.5rem;
}

.blog__empty p {
  color: #6B7280;
  margin-bottom: 1.5rem;
}

.blog__empty button {
  background: #134e86;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.blog__empty button:hover {
  background: #0d3d6e;
  transform: translateY(-2px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .blog__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .blog__grid { grid-template-columns: 1fr; }
  .filtros { position: relative; top: 0; }
}

/* ===== TIPOGRAFÍA ===== */
.hero-blog__badge { font-size: var(--text-badge); }
.hero-blog h1     { font-size: var(--text-hero-title); }
.hero-blog p      { font-size: var(--text-body-lg); }
.filtros__search input { font-size: var(--text-body); }
.filtros__cat     { font-size: var(--text-small); }
.resultados__count { font-size: var(--text-small); }
.bcard__cat       { font-size: var(--text-badge); }
.bcard__body h3   { font-size: var(--text-card-title); }
.bcard__body p    { font-size: var(--text-body); }
.bcard__meta span { font-size: var(--text-small); }
.blog__empty h3   { font-size: var(--text-section-title); }
.blog__empty p    { font-size: var(--text-body); }
.blog__empty button { font-size: var(--text-body); }
</style>
