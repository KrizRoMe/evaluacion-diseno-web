// CanchaYa — datos de muestra con 12 problemas intencionales.

export const deportes = [
  { id: 'futbol',   nombre: 'Fútbol',     emoji: '⚽' },
  { id: 'futbol-7', nombre: 'Fútbol 7',   emoji: '⚽' },
  { id: 'voley',    nombre: 'Vóley',      emoji: '🏐' },
  { id: 'basquet',  nombre: 'Básquet',    emoji: '🏀' },
  { id: 'tenis',    nombre: 'Tenis',      emoji: '🎾' },
  { id: 'paddle',   nombre: 'Pádel',      emoji: '🏸' },
  { id: 'rugby',    nombre: 'Rugby',      emoji: '🏉' },
  { id: 'hockey',   nombre: 'Hockey',     emoji: '🏑' },
  { id: 'handball', nombre: 'Handball',   emoji: '🤾' },
  { id: 'softball', nombre: 'Softball',   emoji: '🥎' },
  { id: 'beisbol',  nombre: 'Béisbol',    emoji: '⚾' },
  { id: 'futbol-sala', nombre: 'Fútbol Sala', emoji: '⚽' },
  { id: 'tenis-mesa',  nombre: 'Tenis de Mesa', emoji: '🏓' },
  { id: 'badminton',   nombre: 'Bádminton',     emoji: '🏸' },
  { id: 'squash',      nombre: 'Squash',        emoji: '🎾' },
  { id: 'atletismo',   nombre: 'Atletismo',     emoji: '🏃' },
  { id: 'natacion',    nombre: 'Natación',      emoji: '🏊' },
  { id: 'ciclismo',    nombre: 'Ciclismo',      emoji: '🚴' },
];

// Generar 32 franjas horarias: 06:00 a 22:00 cada 30 min
function generarHorarios() {
  const arr = [];
  for (let h = 6; h < 22; h++) {
    arr.push(`${String(h).padStart(2,'0')}:00`);
    arr.push(`${String(h).padStart(2,'0')}:30`);
  }
  return arr;
}

export const horarios = generarHorarios();

export const canchas = [
  {
    id: 1,
    nombre: 'Complejo Deportivo Miraflores',
    deporte: 'futbol',
    distrito: 'miraflores',
    precio: 80,
    servicios: ['estacionamiento','vestuarios','iluminacion','techada'],
    imagen: 'https://placehold.co/600x400/065A82/FFFFFF?text=Cancha+Miraflores',
    // C-04: imagen sin alt (lo seteamos en el render)
    imagenAlt: '',
  },
  {
    id: 2,
    nombre: 'Club Surco Tenis',
    deporte: 'tenis',
    distrito: 'surco',
    precio: 60,
    servicios: ['estacionamiento','vestuarios'],
    imagen: 'https://placehold.co/600x400/1C7293/FFFFFF?text=Cancha+Surco',
    imagenAlt: 'Cancha de tenis con superficie de arcilla',
  },
  {
    id: 3,
    nombre: 'Polideportivo San Borja',
    deporte: 'basquet',
    distrito: 'san-borja',
    precio: 50,
    servicios: ['techada','iluminacion','cafeteria'],
    imagen: 'https://placehold.co/600x400/60A5FA/FFFFFF?text=Cancha+B%C3%A1squet',
    imagenAlt: 'Cancha de básquet techada',
  },
  {
    id: 4,
    nombre: 'La Molina Padel Club',
    deporte: 'paddle',
    distrito: 'la-molina',
    precio: 120,
    servicios: ['estacionamiento','vestuarios','duchas','wifi','arbitraje'],
    imagen: 'https://placehold.co/600x400/065A82/FFFFFF?text=P%C3%A1del+La+Molina',
    imagenAlt: 'Cancha de pádel',
  },
  {
    id: 5,
    nombre: 'Vóley San Borja Express',
    deporte: 'voley',
    distrito: 'san-borja',
    precio: 45,
    servicios: ['iluminacion','techada'],
    imagen: 'https://placehold.co/600x400/1C7293/FFFFFF?text=Voley+Express',
    imagenAlt: '',
  },
  {
    id: 6,
    nombre: 'Fútbol 7 La Molina',
    deporte: 'futbol-7',
    distrito: 'la-molina',
    precio: 140,
    servicios: ['estacionamiento','vestuarios','iluminacion','techada','arbitraje','cafeteria'],
    imagen: 'https://placehold.co/600x400/60A5FA/FFFFFF?text=F%C3%BAtbol+7',
    imagenAlt: 'Cancha de fútbol 7 con pasto sintético',
  },
];
