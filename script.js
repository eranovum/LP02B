/* ==========================================
   RADAR DE INGRESOS - LÓGICA INTERACTIVA
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MINI-SIMULADOR INTERACTIVO (HERO WIDGET)
    const budgetSlider = document.getElementById('budget-slider');
    const budgetVal = document.getElementById('budget-val');
    const timeSlider = document.getElementById('time-slider');
    const timeVal = document.getElementById('time-val');
    const btnSimulate = document.getElementById('btn-simulate');
    const simResult = document.getElementById('sim-result');
    
    const resultName = document.getElementById('result-name');
    const resultDiff = document.getElementById('result-diff');
    const resultTime = document.getElementById('result-time');
    const resultText = document.getElementById('result-text');

    if (budgetSlider && timeSlider) {
        // Actualizar visualizaciones de sliders en tiempo real
        budgetSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            if (parseInt(val) === 0) {
                budgetVal.textContent = '$0 (Bajo Costo)';
            } else if (parseInt(val) === 1000) {
                budgetVal.textContent = '$1,000+ USD';
            } else {
                budgetVal.textContent = `$${val} USD`;
            }
        });

        timeSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            timeVal.textContent = val == 1 ? '1 hora' : `${val} horas`;
        });
    }

    if (btnSimulate) {
        btnSimulate.addEventListener('click', () => {
            // Animación de carga para hacerlo sentir real y profesional
            btnSimulate.disabled = true;
            btnSimulate.textContent = 'ANALIZANDO COMPATIBILIDAD...';
            simResult.classList.add('hidden');

            setTimeout(() => {
                btnSimulate.textContent = 'CRUZANDO CON 15 CAMINOS...';
                
                setTimeout(() => {
                    btnSimulate.textContent = 'COMPILANDO DIAGNÓSTICO...';
                    
                    setTimeout(() => {
                        btnSimulate.disabled = false;
                        btnSimulate.textContent = 'RECALCULAR COMPATIBILIDAD';
                        
                        // Lógica de cálculo ficticia pero muy bien estructurada
                        const budget = parseInt(budgetSlider.value);
                        const time = parseInt(timeSlider.value);
                        const experience = document.querySelector('input[name="experience"]:checked').value;
                        
                        let pathName = '';
                        let difficulty = '';
                        let estimatedTime = '';
                        let description = '';

                        if (budget <= 150 && time <= 2) {
                            pathName = 'Afiliación Express con Inteligencia Artificial';
                            difficulty = 'Baja';
                            estimatedTime = '15 - 20 días';
                            description = 'Modelo óptimo para comenzar sin capital. Usas herramientas de inteligencia artificial gratuitas para redactar contenido orgánico y promocionar infoproductos validados con comisiones del 50% al 80%.';
                        } else if (budget <= 150 && time > 2) {
                            pathName = 'Micro-Agencia de Redacción y SEO Creativo';
                            difficulty = 'Baja';
                            estimatedTime = '10 - 15 días';
                            description = 'Aprovecha tus horas libres adicionales para estructurar textos y optimizar blogs de pequeños negocios locales usando herramientas asistidas por IA. Cero costo de inventario.';
                        } else if (budget > 150 && budget <= 500 && experience === 'no') {
                            pathName = 'Infoproducto de Nicho Automatizado';
                            difficulty = 'Media-Baja';
                            estimatedTime = '20 - 30 días';
                            description = 'Empaqueta un conocimiento específico (o de un experto asociado) en un e-book o plantilla. Se configura en una pasarela con entrega digital automática y publicidad de bajo costo.';
                        } else if (budget > 150 && budget <= 500 && experience === 'yes') {
                            pathName = 'Comunidad de Micro-Suscripción Privada';
                            difficulty = 'Media';
                            estimatedTime = '15 - 25 días';
                            description = 'Creación de un espacio exclusivo (Discord/Telegram o área de miembros) donde compartes curación de contenido técnico o alertas de ofertas. Flujo de caja recurrente desde el inicio.';
                        } else {
                            pathName = 'Agencia de Arbitraje de Servicios Digitales';
                            difficulty = 'Media-Alta';
                            estimatedTime = '25 - 35 días';
                            description = 'Vendes desarrollo web, diseño o edición premium a clientes locales a precios de mercado y subcontratas la entrega a profesionales en plataformas globales, ganando el margen de intermediación.';
                        }

                        // Asignar los resultados y revelar
                        resultName.textContent = pathName;
                        resultDiff.textContent = difficulty;
                        resultTime.textContent = estimatedTime;
                        resultText.textContent = description;
                        
                        simResult.classList.remove('hidden');
                        
                        // Scroll suave al resultado
                        simResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                    }, 600);
                }, 600);
            }, 600);
        });
    }

    // 2. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.parentElement;
            const isOpen = parent.classList.contains('active');
            
            // Cerrar otros abiertos
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
            });
            
            // Abrir el actual si no estaba abierto
            if (!isOpen) {
                parent.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 3. EFECTO DE SCROLL SUAVE PARA ENLACES
    const scrollLinks = document.querySelectorAll('.scroll-to');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. MODAL DE PAGO SIMULADO (TRIGGERS DE CHECKOUT)
    const checkoutModal = document.getElementById('checkout-modal');
    const modalClose = document.getElementById('modal-close');
    const checkoutTriggers = document.querySelectorAll('.cta-checkout-trigger');
    const btnPaySim = document.getElementById('btn-pay-sim');
    const checkoutEmail = document.getElementById('checkout-email');

    // Vincular todos los botones de compra al modal
    checkoutTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            checkoutModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevenir scroll trasero
        });
    });

    const closeModalFunc = () => {
        checkoutModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Habilitar scroll trasero
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModalFunc);
    }

    if (checkoutModal) {
        // Cerrar al hacer clic fuera de la tarjeta modal
        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) {
                closeModalFunc();
            }
        });
    }

    // Cambiar estado activo en métodos de pago
    const paymentBadges = document.querySelectorAll('.payment-badge');
    paymentBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            paymentBadges.forEach(b => b.classList.remove('active'));
            badge.classList.add('active');
        });
    });

    // Simular el pago
    if (btnPaySim) {
        btnPaySim.addEventListener('click', () => {
            const email = checkoutEmail.value.trim();
            if (!email || !email.includes('@')) {
                alert('Por favor, ingresa un correo electrónico válido para enviarte el radar.');
                checkoutEmail.focus();
                return;
            }

            btnPaySim.disabled = true;
            btnPaySim.textContent = 'PROCESANDO PAGO SEGURO...';

            setTimeout(() => {
                btnPaySim.textContent = 'CREANDO ACCESO AL SISTEMA...';
                
                setTimeout(() => {
                    closeModalFunc();
                    alert(`¡Éxito! Hemos enviado la confirmación y tus credenciales de acceso para "Radar de Ingresos" al correo: ${email}.\n\n(Esta es una simulación de alta conversión creada para Radar de Ingresos)`);
                    btnPaySim.disabled = false;
                    btnPaySim.textContent = 'CONTINUAR AL COMPROMISO DE ACCESO';
                    checkoutEmail.value = '';
                }, 1200);
            }, 1200);
        });
    }
});
