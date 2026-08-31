// CanchaYa — aplicación principal. Incluye 12 problemas intencionales (C-01..C-12).

import { deportes, canchas, horarios } from './data.js';

// Estado global
const state = {
  currentPage: 'home',
  selectedCancha: null,
  selectedHorario: null,
  reservas: [],
  filters: {},
};

// ==== Render: deportes (C-08: 18 sin jerarquía) ====
function renderDeportes() {
  const grid = document.getElementById('deportes-grid');
  grid.innerHTML = deportes.map(d => `
    <div class="deporte-card" data-deporte="${d.id}">
      <span class="deporte-emoji">${d.emoji}</span>
      <span>${d.nombre}</span>
    </div>
  `).join('');
  grid.querySelectorAll('.deporte-card').forEach(card => {
    card.addEventListener('click', () => navigateTo('reservar'));
  });
}

// ==== Render: canchas destacadas ====
function renderCanchasDestacadas() {
  const grid = document.getElementById('canchas-grid');
  grid.innerHTML = canchas.slice(0, 3).map(c => `
    <div class="cancha-card" data-id="${c.id}">
      <img src="${c.imagen}" alt="${c.imagenAlt}">
      <div class="cancha-card-body">
        <h3>${c.nombre}</h3>
        <p class="distrito">${c.distrito}</p>
        <p class="precio">S/ ${c.precio} / hora</p>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.cancha-card').forEach(card => {
    card.addEventListener('click', () => openCancha(parseInt(card.dataset.id)));
  });
}

// ==== Render: lista de canchas ====
function renderCanchasList() {
  const list = document.getElementById('canchas-list');
  list.innerHTML = canchas.map(c => `
    <div class="cancha-card" data-id="${c.id}">
      <img src="${c.imagen}" alt="${c.imagenAlt}">
      <div class="cancha-card-body">
        <h3>${c.nombre}</h3>
        <p class="distrito">${c.distrito} · ${c.deporte}</p>
        <p class="precio">S/ ${c.precio} / hora</p>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.cancha-card').forEach(card => {
    card.addEventListener('click', () => openCancha(parseInt(card.dataset.id)));
  });
}

// ==== Render: detalle de cancha ====
function openCancha(id) {
  const c = canchas.find(x => x.id === id);
  if (!c) return;
  state.selectedCancha = c;
  state.selectedHorario = null;

  // C-04: imagen sin alt (sobreescribimos el alt con string vacío)
  document.getElementById('detalle-imagen').alt = c.imagenAlt;
  document.getElementById('detalle-imagen').src = c.imagen;
  document.getElementById('detalle-titulo').textContent = c.nombre;
  document.getElementById('detalle-precio').textContent = `S/ ${c.precio}`;
  document.getElementById('detalle-ubicacion').textContent = `${c.distrito} · ${c.deporte}`;

  // C-09: 32 horarios en grid plano, sin chunking (mañana/tarde/noche)
  const hg = document.getElementById('horarios-grid');
  hg.innerHTML = horarios.map(h => `<button class="horario-btn" data-horario="${h}">${h}</button>`).join('');
  hg.querySelectorAll('.horario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      hg.querySelectorAll('.horario-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedHorario = btn.dataset.horario;
    });
  });

  navigateTo('cancha-detalle');
}

// ==== Navegación ====
function navigateTo(page) {
  document.querySelectorAll('main').forEach(m => m.classList.add('hidden'));
  const target = document.getElementById(page);
  if (target) {
    target.classList.remove('hidden');
    state.currentPage = page;
  }
  if (page === 'mis-reservas') renderMisReservas();
  if (page === 'mi-cuenta') renderMiCuenta();
}

// ==== C-07: validación genérica sin detalle ====
function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const tel    = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const dni    = document.getElementById('dni').value.trim();
  if (!nombre || !tel || !correo || !dni) return false;
  // Validación superficial sin detalle de qué campo falla
  if (!correo.includes('@')) return false;
  if (dni.length < 6) return false;
  return true;
}

// ==== Confirmar reserva ====
function confirmarReserva() {
  if (!state.selectedCancha || !state.selectedHorario) {
    showToast('Selecciona cancha y horario');
    return;
  }
  if (!validarFormulario()) {
    // C-07: error genérico
    document.getElementById('err-banner').classList.remove('hidden');
    return;
  }

  // C-12: cargo oculto del seguro premium si está marcado
  const seguro = document.getElementById('seguro-premium').checked;
  const total = state.selectedCancha.precio + (seguro ? 9.90 : 0);

  state.reservas.push({
    cancha: state.selectedCancha.nombre,
    horario: state.selectedHorario,
    total,
    fecha: new Date().toLocaleDateString(),
  });

  document.getElementById('err-banner').classList.add('hidden');
  showToast('Reserva confirmada');
  navigateTo('reserva-exitosa');
}

// ==== Mis reservas ====
function renderMisReservas() {
  const cont = document.getElementById('mis-reservas-list');
  if (state.reservas.length === 0) {
    cont.innerHTML = '<p>Aún no tienes reservas.</p>';
    return;
  }
  cont.innerHTML = state.reservas.map(r => `
    <div class="cancha-card" style="margin-bottom: 1rem;">
      <div class="cancha-card-body">
        <h3>${r.cancha}</h3>
        <p>${r.fecha} · ${r.horario}</p>
        <p class="precio">Total: S/ ${r.total.toFixed(2)}</p>
      </div>
    </div>
  `).join('');
}

function renderMiCuenta() {
  document.getElementById('cuenta-nombre').textContent = document.getElementById('nombre').value || '—';
  document.getElementById('cuenta-reservas').textContent = state.reservas.length;
}

// ==== C-06: eliminar cuenta sin confirmación ====
function eliminarCuenta() {
  // Sin diálogo de confirmación
  state.reservas = [];
  showToast('Cuenta eliminada');
  navigateTo('home');
}

// ==== Toast ====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2500);
}

// ==== Init ====
document.addEventListener('DOMContentLoaded', () => {
  renderDeportes();
  renderCanchasDestacadas();
  renderCanchasList();

  // Navegación principal
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', e => {
      const page = a.getAttribute('href').replace('#','');
      navigateTo(page);
    });
  });

  // CTA reservar
  document.getElementById('cta-reservar').addEventListener('click', () => navigateTo('reservar'));

  // Confirmar reserva
  document.getElementById('btn-confirmar').addEventListener('click', confirmarReserva);

  // C-05: link "volver" — acción correcta pero visualmente roto
  document.getElementById('link-volver').addEventListener('click', e => {
    e.preventDefault();
    navigateTo('reservar');
  });

  // C-06: eliminar cuenta (en página de éxito y en mi cuenta)
  document.getElementById('exito-eliminar-cuenta').addEventListener('click', eliminarCuenta);
  document.getElementById('cuenta-eliminar').addEventListener('click', eliminarCuenta);

  // Mis reservas desde éxito
  document.getElementById('exito-mis-reservas').addEventListener('click', () => navigateTo('mis-reservas'));
});
