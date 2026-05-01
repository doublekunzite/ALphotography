// script.js

// === DATA ===
const siteData = {
    floating: [
        { src: 'https://live.staticflickr.com/65535/55242600438_f972f53e6a_b.jpg', x: '8%', y: '15%', w: 140, h: 200, rotate: -8, depth: 3 },
        { src: 'https://live.staticflickr.com/65535/55156914563_5a788bdd52_b.jpg', x: '72%', y: '20%', w: 110, h: 110, rotate: 10, depth: 2 },
        { src: 'https://live.staticflickr.com/65535/55157135330_cda3526096_b.jpg', x: '18%', y: '58%', w: 100, h: 130, rotate: 5, depth: 2.5 },
        { src: 'https://live.staticflickr.com/65535/55155867012_8cc0bf1607_b.jpg', x: '62%', y: '65%', w: 120, h: 80, rotate: -4, depth: 1.5 },
        { src: 'https://live.staticflickr.com/65535/55167058328_02885ec837_b.jpg', x: '42%', y: '30%', w: 90, h: 120, rotate: 12, depth: 2 },
        { src: 'https://live.staticflickr.com/65535/55156758501_a6b7f87721_b.jpg', x: '80%', y: '75%', w: 80, h: 100, rotate: -6, depth: 1 },
    ],
    urban: [
        { src: 'https://live.staticflickr.com/65535/55157003279_d8b9ce545e_b.jpg', title: 'Shenzhen North', size: 'large' },
        { src: 'https://live.staticflickr.com/65535/55157003329_107449d282_b.jpg', title: 'Downtown Chongqing', size: 'medium' },
        { src: 'https://live.staticflickr.com/65535/55156922828_c9809cac24_b.jpg', title: 'Mall Architecture', size: 'medium' },
        { src: 'https://live.staticflickr.com/65535/55157312266_d31d4b0f24_b.jpg', title: 'Tech Hub', size: 'medium' },
        { src: 'https://live.staticflickr.com/65535/55167283915_5e42522c49_b.jpg', title: 'Osborne Village', size: 'large' },
        { src: 'https://live.staticflickr.com/65535/55156922973_557dc42fbb_b.jpg', title: 'Dameisha', size: 'medium' },
        { src: 'https://live.staticflickr.com/65535/55167103101_26cf182bab_b.jpg', title: 'Transitway', size: 'small' },
        { src: 'https://live.staticflickr.com/65535/55167262913_f8465fb0e7_b.jpg', title: 'Capital Airport', size: 'medium' },
        { src: 'https://live.staticflickr.com/65535/55166203652_44df3e8f6a_b.jpg', title: 'Kilter Board', size: 'small' },
        { src: 'https://live.staticflickr.com/65535/55167348759_b56b46c49d_b.jpg', title: 'China Turtle', size: 'large' },
        { src: 'https://live.staticflickr.com/65535/55228838736_c9b5f1cbe5_b.jpg', title: 'Turquoise', size: 'medium' },
		{ src: 'https://live.staticflickr.com/65535/55228838526_18c81161bb_b.jpg', title: 'Right Angle', size: 'small' },
		{ src: 'https://live.staticflickr.com/65535/55228838711_a34404321f_b.jpg', title: 'Hillside', size: 'medium' },
		{ src: 'https://live.staticflickr.com/65535/55228838781_383ecc1bc5_b.jpg', title: 'Plaza', size: 'medium' },
		{ src: 'https://live.staticflickr.com/65535/55228838641_c545688817_b.jpg', title: 'Mountain Cityscape', size: 'large' },
		
		
		
    ],
    nature: [
        { src: 'https://live.staticflickr.com/65535/55167147719_4d1ec4e240_b.jpg', title: 'The Leaf #1' },
        { src: 'https://live.staticflickr.com/65535/55167058328_02885ec837_b.jpg', title: 'The Leaf #2' },
        { src: 'https://live.staticflickr.com/65535/55167058323_2ed3d30c57_b.jpg', title: 'The Leaf #3' },
        { src: 'https://live.staticflickr.com/65535/55167392818_f580754663_b.jpg', title: 'The Leaf #4' },
        { src: 'https://live.staticflickr.com/65535/55167147774_37a07b4b37_b.jpg', title: 'Spindle' },
        { src: 'https://live.staticflickr.com/65535/55157116684_c8b5ac330d_b.jpg', title: 'Qingchengshan' },
        { src: 'https://live.staticflickr.com/65535/55167103046_cbd79f9203_b.jpg', title: 'Lily Pads' },
        { src: 'https://live.staticflickr.com/65535/55167477874_d1868b3a49_b.jpg', title: 'Reed Canyon' },
        { src: 'https://live.staticflickr.com/65535/55167231031_41900ba85e_b.jpg', title: 'Water Texture' },
        { src: 'https://live.staticflickr.com/65535/55166331527_f195e0ccbd_b.jpg', title: 'Tree Roots' },
		{ src: 'https://live.staticflickr.com/65535/55228838886_875dd05042_b.jpg', title: 'Garden' },
        { src: 'https://live.staticflickr.com/65535/55229085314_f0a4d475f8_b.jpg', title: 'Crater' },
		{ src: 'https://live.staticflickr.com/65535/55229085494_957965eed7_b.jpg', title: 'Grass' },
		{ src: 'https://live.staticflickr.com/65535/55228997123_5c4b86fbab_b.jpg', title: 'Ocean' },
		{ src: 'https://live.staticflickr.com/65535/55228838546_43f38e98e3_b.jpg', title: 'Tree Frame' },
		

		
    ],
    landscape: [
        { src: 'https://live.staticflickr.com/65535/55157552599_60ff8894e6_b.jpg', title: 'The Path' },
        { src: 'https://live.staticflickr.com/65535/55167283910_ea0e65298a_b.jpg', title: 'The Lej, Fall' },
        { src: 'https://live.staticflickr.com/65535/55167147664_7f5779ebfc_b.jpg', title: 'The Lej, Summer' },
        { src: 'https://live.staticflickr.com/65535/55167147629_2222a11a32_b.jpg', title: 'Diagonal' },
        { src: 'https://live.staticflickr.com/65535/55155867012_8cc0bf1607_b.jpg', title: 'Mountain Garden' },
        { src: 'https://live.staticflickr.com/65535/55166203622_4b3e2bbc2d_b.jpg', title: 'Winter Sky' },
        { src: 'https://live.staticflickr.com/65535/55167477874_d1868b3a49_b.jpg', title: 'Reed Canyon' },
        { src: 'https://live.staticflickr.com/65535/55167477814_5f0e1a7bf5_b.jpg', title: 'Rushing River' },
        { src: 'https://live.staticflickr.com/65535/55167231031_41900ba85e_b.jpg', title: 'Water Texture' },
		{ src: 'https://live.staticflickr.com/65535/55228997513_7e781c778f_b.jpg', title: 'Islands' },
		{ src: 'https://live.staticflickr.com/65535/55227932867_e0b5dbf200_b.jpg', title: 'Waves' },
		{ src: 'https://live.staticflickr.com/65535/55228838761_e849b59987_b.jpg', title: 'Distant Mountain' },
		
		
		
    ],
    carousel: [
        { src: 'https://live.staticflickr.com/65535/55167155767_e8ab1ab26c_b.jpg', alt: 'Title Slide' },
        { src: 'https://live.staticflickr.com/65535/55168307739_ee78e4df84_b.jpg', alt: 'Slide 2' },
        { src: 'https://live.staticflickr.com/65535/55168307724_2d03fa1b2e_b.jpg', alt: 'Slide 3' },
        { src: 'https://live.staticflickr.com/65535/55168307729_a5875ce227_b.jpg', alt: 'Slide 4' },
        { src: 'https://live.staticflickr.com/65535/55168221123_d4442ee4d4_b.jpg', alt: 'Slide 5' },
        { src: 'https://live.staticflickr.com/65535/55168307709_5bcb15a398_b.jpg', alt: 'Slide 6' },
    ],
    experimental: [
        { src: 'https://live.staticflickr.com/65535/55156914563_5a788bdd52_b.jpg', title: 'Abstract Form' },
        { src: 'https://live.staticflickr.com/65535/55156758501_a6b7f87721_b.jpg', title: 'Double Exposure' },
        { src: 'https://live.staticflickr.com/65535/55166002422_5a98a9f277_b.jpg', title: 'Snow Texture' },
        { src: 'https://live.staticflickr.com/65535/55157135330_cda3526096_b.jpg', title: 'Warming Hut' },
        { src: 'https://live.staticflickr.com/65535/55167103056_c81344e4c1_b.jpg', title: 'Vancouver Yellow' },
        { src: 'https://live.staticflickr.com/65535/55167262898_5a6b144259_b.jpg', title: 'Tire Tracks' },
        { src: 'https://live.staticflickr.com/65535/55167486610_f50bd80d99_b.jpg', title: 'Concert Hall' },
        { src: 'https://live.staticflickr.com/65535/55167103046_cbd79f9203_b.jpg', title: 'Lily Pads' },
        { src: 'https://live.staticflickr.com/65535/55167230986_d7e53e1a48_b.jpg', title: 'Snowy Sign' },
        { src: 'https://live.staticflickr.com/65535/55167392818_f580754663_b.jpg', title: 'The Leaf #4' },
		{ src: 'https://live.staticflickr.com/65535/55228997433_d849505535_b.jpg', title: 'Blowhole' },
		{ src: 'https://live.staticflickr.com/65535/55228838526_18c81161bb_b.jpg', title: 'Right Angle' },
		{ src: 'https://live.staticflickr.com/65535/55229249690_fd33f629f2_b.jpg', title: 'Arcs' },
		{ src: 'https://live.staticflickr.com/65535/55242693339_b7db32a9fb_b.jpg', title: 'Fronds' },
		{ src: 'https://live.staticflickr.com/65535/55242600438_f972f53e6a_b.jpg', title: 'Kaleidoscope' },
			
    ]
};

// === INIT FUNCTIONS ===
function initHome() {
    const layer = document.getElementById('floatingLayer');
    if(!layer) return;
    
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    siteData.floating.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'float-card';
        card.style.cssText = `left: ${p.x}; top: ${p.y}; width: ${p.w}px; height: ${p.h}px; transform: rotate(${p.rotate}deg);`;
        card.innerHTML = `<img src="${p.src}" alt="Float ${i}">`;
        card.dataset.depth = p.depth;
        card.dataset.rotate = p.rotate;
        layer.appendChild(card);
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    });

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 40;
            mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 40;
        }
    }, { passive: true });

    function animate() {
        targetX += (mouseX - targetX) * 0.08;
        targetY += (mouseY - targetY) * 0.08;

        let finalX = targetX;
        let finalY = targetY;

        if (window.innerWidth < 768) {
            const time = Date.now() / 1000;
            const driftX = Math.sin(time * 0.5) * 15; 
            const driftY = Math.cos(time * 0.3) * 10;
            finalX += driftX;
            finalY += driftY;
        }

        document.querySelectorAll('.float-card').forEach(c => {
            const d = parseFloat(c.dataset.depth);
            const r = parseFloat(c.dataset.rotate);
            c.style.transform = `rotate(${r}deg) translate(${finalX * d}px, ${finalY * d}px)`;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initUrban() {
    const grid = document.getElementById('urbanGrid');
    if(!grid) return;
    grid.innerHTML = '';
    siteData.urban.forEach(p => {
        const item = document.createElement('div');
        item.className = 'urban-item';
        item.dataset.size = p.size;
        item.innerHTML = `<img src="${p.src}" alt="${p.title}">`;
        grid.appendChild(item);
    });
}

function initNature() {
    const grid = document.getElementById('natureGrid');
    if(!grid) return;
    grid.innerHTML = '';
    siteData.nature.forEach(p => {
        const item = document.createElement('div');
        item.className = 'nature-item';
        item.innerHTML = `<img src="${p.src}" alt="${p.title}">`;
        grid.appendChild(item);
    });
}

function initLandscape() {
    const container = document.getElementById('landscapeContainer');
    if(!container) return;
    container.innerHTML = '';
    
    // Removed the slider-meta div and title
    siteData.landscape.forEach(p => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = `
            <div class="slider-img-container">
                <img src="${p.src}" alt="${p.title}">
            </div>
        `;
        container.appendChild(slide);
    });
}

let currentSlide = 0;
function moveCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    if(!track) return;
    const totalSlides = siteData.carousel.length;
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function initDesign() {
    const track = document.getElementById('carouselTrack');
    if(!track) return;
    track.innerHTML = '';
    siteData.carousel.forEach(p => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${p.src}" alt="${p.alt}">`;
        track.appendChild(slide);
    });
}

function initGeometric() {
    const grid = document.getElementById('geoGrid');
    if(!grid) return;
    grid.innerHTML = '';
    siteData.experimental.forEach(p => {
        const item = document.createElement('div');
        item.className = 'geo-item';
        item.innerHTML = `<img src="${p.src}" alt="${p.title}">`;
        grid.appendChild(item);
    });
}

// Mobile Scroll Interaction for Geometric
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) {
        const geoGrid = document.getElementById('geoGrid');
        if(geoGrid) {
            geoGrid.classList.add('is-spread');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                geoGrid.classList.remove('is-spread');
            }, 500);
        }
    }
});

// Run init based on page content
document.addEventListener('DOMContentLoaded', () => {
    initHome();
    initUrban();
    initNature();
    initLandscape();
    initDesign();
    initGeometric();
});