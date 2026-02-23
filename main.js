import './style.css'

const barbers = [
    {
        name: "Ricardo 'The Blade'",
        role: "Especialista em Fade e Navalha",
        exp: "12 anos",
        img: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Alex Urban",
        role: "Visagismo Masculino",
        exp: "8 anos",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1287&auto=format&fit=crop"
    },
    {
        name: "Bruno Gold",
        role: "Barba e Estilo Clássico",
        exp: "10 anos",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop"
    }
];

function renderBarbers() {
    const container = document.querySelector('.barbers-grid');
    if (!container) return;

    container.innerHTML = barbers.map(barber => `
    <div class="barber-card">
      <img src="${barber.img}" alt="${barber.name}" class="barber-img">
      <div class="barber-info">
        <h3 class="text-gold">${barber.name}</h3>
        <p><strong>Especialidade:</strong> ${barber.role}</p>
        <p><strong>Experiência:</strong> ${barber.exp}</p>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderBarbers();
    console.log('Street Barbershop LP Loaded');
});
