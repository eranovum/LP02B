/* ==========================================
   RADAR DE INGRESOS - LÓGICA INTERACTIVA
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Variables globales dentro de DOMContentLoaded para soportar divisas en tiempo real
    let currentExchangeRate = 1.0;
    let currentCurrency = 'USD';
    let currentFormatter = new Intl.NumberFormat(navigator.language || 'es-ES', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

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
                budgetVal.textContent = currentFormatter.format(0) + (currentCurrency === 'USD' ? ' (Bajo Costo)' : '');
            } else if (parseInt(val) === 1000) {
                const maxVal = 1000 * currentExchangeRate;
                budgetVal.textContent = `${currentFormatter.format(maxVal)}+` + (currentCurrency === 'USD' ? '' : ` ${currentCurrency}`);
            } else {
                const localVal = parseInt(val) * currentExchangeRate;
                budgetVal.textContent = currentFormatter.format(localVal) + (currentCurrency === 'USD' ? '' : ` ${currentCurrency}`);
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

    // 5. CONVERSIÓN DE DIVISAS EN TIEMPO REAL
    async function initCurrencyConversion() {
        let localCurrency = 'USD';
        let countryCode = 'US';
        let exchangeRate = 1.0;
        let userLocale = navigator.language || 'es-ES';

        // Mapeo completo de países de América (Norte a Sur) y España
        const countryToCurrency = {
            'ES': 'EUR', // España
            'MX': 'MXN', // México
            'CO': 'COP', // Colombia
            'AR': 'ARS', // Argentina
            'CL': 'CLP', // Chile
            'PE': 'PEN', // Perú
            'VE': 'VES', // Venezuela
            'UY': 'UYU', // Uruguay
            'EC': 'USD', // Ecuador
            'BO': 'BOB', // Bolivia
            'PY': 'PYG', // Paraguay
            'CR': 'CRC', // Costa Rica
            'PA': 'USD', // Panamá
            'GT': 'GTQ', // Guatemala
            'HN': 'HNL', // Honduras
            'SV': 'USD', // El Salvador
            'NI': 'NIO', // Nicaragua
            'DO': 'DOP', // República Dominicana
            'PR': 'USD', // Puerto Rico
            'US': 'USD', // Estados Unidos
            'CA': 'CAD', // Canadá
            'BR': 'BRL'  // Brasil
        };

        // Fallbacks de tasas de cambio estáticas por si falla la API
        const fallbackRates = {
            'USD': 1.0,
            'EUR': 0.92,
            'COP': 4000,
            'MXN': 18.0,
            'ARS': 900,
            'CLP': 920,
            'PEN': 3.75,
            'BRL': 5.50,
            'UYU': 40.0,
            'VES': 36.5,
            'CAD': 1.37,
            'BOB': 6.90,
            'PYG': 7500,
            'CRC': 525,
            'GTQ': 7.75,
            'HNL': 24.6,
            'NIO': 36.8,
            'DOP': 59.0
        };

        // 1. Prioridad: Detectar por el idioma/región del navegador (navigator.language)
        function getCountryFromNavigator() {
            try {
                const lang = navigator.language || (navigator.languages && navigator.languages[0]);
                if (lang && lang.includes('-')) {
                    const parts = lang.split('-');
                    const country = parts[parts.length - 1].toUpperCase();
                    if (countryToCurrency[country]) {
                        return country;
                    }
                }
            } catch (e) {
                // Ignore
            }
            return null;
        }

        // 2. Prioridad: Detectar por la zona horaria del sistema
        function getCurrencyByTimezone() {
            try {
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (!tz) return null;
                
                if (tz.includes('Bogota')) return 'COP';
                if (tz.includes('Mexico') || tz.includes('Chihuahua') || tz.includes('Monterrey') || tz.includes('Merida')) return 'MXN';
                if (tz.includes('Santiago')) return 'CLP';
                if (tz.includes('Buenos_Aires') || tz.includes('Cordoba') || tz.includes('Tucuman') || tz.includes('Salta')) return 'ARS';
                if (tz.includes('Lima')) return 'PEN';
                if (tz.includes('Caracas')) return 'VES';
                if (tz.includes('Montevideo')) return 'UYU';
                if (tz.includes('Asuncion')) return 'PYG';
                if (tz.includes('La_Paz')) return 'BOB';
                if (tz.includes('Guayaquil') || tz.includes('Galapagos')) return 'USD';
                if (tz.includes('Panama')) return 'USD';
                if (tz.includes('Costa_Rica')) return 'CRC';
                if (tz.includes('Guatemala')) return 'GTQ';
                if (tz.includes('Tegucigalpa')) return 'HNL';
                if (tz.includes('El_Salvador')) return 'USD';
                if (tz.includes('Managua')) return 'NIO';
                if (tz.includes('Santo_Domingo')) return 'DOP';
                if (tz.includes('Madrid') || tz.includes('Canary') || tz.includes('Europe') || tz.includes('Paris') || tz.includes('Rome')) return 'EUR';
                if (tz.includes('Toronto') || tz.includes('Vancouver') || tz.includes('Montreal') || tz.includes('Winnipeg') || tz.includes('Edmonton')) return 'CAD';
                if (tz.includes('Sao_Paulo') || tz.includes('Rio') || tz.includes('Manaus') || tz.includes('Recife') || tz.includes('Belem')) return 'BRL';
            } catch(e) {
                // Ignore
            }
            return null;
        }

        // Ejecutar estrategia de detección en orden de prioridad
        let detectedCountry = getCountryFromNavigator();
        if (detectedCountry) {
            localCurrency = countryToCurrency[detectedCountry];
            countryCode = detectedCountry;
        } else {
            let tzCurrency = getCurrencyByTimezone();
            if (tzCurrency) {
                localCurrency = tzCurrency;
                // Buscar el primer país que usa esa moneda
                countryCode = Object.keys(countryToCurrency).find(key => countryToCurrency[key] === tzCurrency) || 'US';
            } else {
                // 3. Fallback: Intentar IP Geolocation si lo anterior falla
                try {
                    const geoRes = await fetch('https://ipapi.co/json/');
                    if (geoRes.ok) {
                        const geoData = await geoRes.json();
                        if (geoData.currency) {
                            localCurrency = geoData.currency;
                            countryCode = geoData.country_code || 'US';
                        }
                    }
                } catch (e) {
                    // Si todo falla, mantenemos USD
                    localCurrency = 'USD';
                    countryCode = 'US';
                }
            }
        }

        // Si la moneda sigue siendo USD, no convertimos nada (ya está en USD)
        if (localCurrency === 'USD') return;

        // 2. Obtener tasas de cambio en vivo
        try {
            const rateRes = await fetch('https://open.er-api.com/v6/latest/USD');
            if (rateRes.ok) {
                const rateData = await rateRes.json();
                if (rateData.rates && rateData.rates[localCurrency]) {
                    exchangeRate = rateData.rates[localCurrency];
                } else {
                    exchangeRate = fallbackRates[localCurrency] || 1.0;
                }
            } else {
                throw new Error('Error en API de tasas');
            }
        } catch (e) {
            exchangeRate = fallbackRates[localCurrency] || 1.0;
        }

        // Formateador localizado de moneda
        const formatter = new Intl.NumberFormat(userLocale, {
            style: 'currency',
            currency: localCurrency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        // Actualizar variables compartidas globales de DOMContentLoaded
        currentExchangeRate = exchangeRate;
        currentCurrency = localCurrency;
        currentFormatter = formatter;

        // 3. Aplicar conversión en los elementos de la página
        // Elementos con data-usd
        const priceElements = document.querySelectorAll('[data-usd]');
        priceElements.forEach(el => {
            const usdValue = parseFloat(el.getAttribute('data-usd'));
            if (!isNaN(usdValue)) {
                const convertedValue = usdValue * exchangeRate;
                const formatted = formatter.format(convertedValue);
                
                // Actualizar según la clase o el formato deseado
                if (el.classList.contains('old-price')) {
                    el.textContent = `De ${formatted}`;
                } else if (el.classList.contains('new-price')) {
                    el.textContent = `por ${formatted}`;
                } else if (el.classList.contains('item-price-discount')) {
                    el.textContent = `- ${formatted}`;
                } else if (el.classList.contains('modal-price')) {
                    el.textContent = `${formatted} ${localCurrency}`;
                } else {
                    el.textContent = formatted;
                }
            }
        });

        // Actualizar etiquetas del slider
        const labelMin = document.getElementById('slider-label-min');
        const labelMax = document.getElementById('slider-label-max');
        if (labelMin) {
            labelMin.textContent = formatter.format(0) + (localCurrency === 'USD' ? ' (Bajo Costo)' : '');
        }
        if (labelMax) {
            labelMax.textContent = `${formatter.format(1000 * exchangeRate)}+`;
        }

        // Forzar actualización inicial del valor del slider con la nueva moneda
        if (budgetSlider) {
            budgetSlider.dispatchEvent(new Event('input'));
        }

        // Mostrar disclaimer de conversión
        const disclaimer = document.getElementById('currency-disclaimer');
        const detectedCurrSpan = document.getElementById('detected-currency');
        if (disclaimer && detectedCurrSpan) {
            detectedCurrSpan.textContent = `${localCurrency} (${formatter.format(19 * exchangeRate)})`;
            disclaimer.classList.remove('hidden');
        }
    }

    // Ejecutar conversión
    initCurrencyConversion();
});