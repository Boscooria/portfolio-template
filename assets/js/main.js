/* assets/js/main.js - VERSIÓN COMPLETA (GSAP + 404 CANVAS) */
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. LÓGICA COMÚN (GSAP, NAV, PARALLAX)
    // ==========================================
    console.log("Sistema iniciado: Portfolio PANYEE");

    // Verificar si existe GSAP antes de usarlo (por si acaso)
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animación de Entrada
        const elements = document.querySelectorAll(".anim-element");
        if (elements.length > 0) {
            gsap.fromTo(elements, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2,
                    onComplete: () => elements.forEach(el => el.style.opacity = 1)
                }
            );
        }

        // Parallax Imágenes
        const images = document.querySelectorAll(".project-img");
        if (images.length > 0) {
            images.forEach(img => {
                gsap.to(img, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }

        // Botones Hover
        const btns = document.querySelectorAll('.btn-graphic, .hover-trigger');
        btns.forEach(btn => {
            btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, duration: 0.3 }));
            btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.3 }));
        });
    }

    // ==========================================
    // 2. LÓGICA ESPECÍFICA PÁGINA 404 (CANVAS)
    // ==========================================
    const canvas = document.getElementById('drawCanvas');
    
    // SOLO ejecutamos esto si estamos en la página 404
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const clearBtn = document.getElementById('clearBtn');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Estilo del pincel PANYEE
            ctx.strokeStyle = '#0059ff'; 
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 15;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(0, 89, 255, 0.3)';
        }

        // Inicializar
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        function draw(e) {
            if (!isDrawing) return;
            const x = e.offsetX || (e.touches[0].clientX);
            const y = e.offsetY || (e.touches[0].clientY);
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            [lastX, lastY] = [x, y];
        }

        // Eventos Ratón
        canvas.addEventListener('mousedown', (e) => { isDrawing = true; [lastX, lastY] = [e.offsetX, e.offsetY]; });
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);

        // Eventos Táctil
        canvas.addEventListener('touchstart', (e) => { isDrawing = true; [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY]; e.preventDefault(); });
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', () => isDrawing = false);

        // Botón Borrar
        if(clearBtn) {
            clearBtn.addEventListener('click', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
        }
    }
});