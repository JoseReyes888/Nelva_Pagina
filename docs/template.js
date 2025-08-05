document.addEventListener('DOMContentLoaded', function() {
    // Cargar navbar
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el navbar');
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById('navbar-container');
            if (container) {
                container.innerHTML = data;
                // Ejecutar cualquier script del navbar después de cargarlo
                const scripts = container.getElementsByTagName('script');
                for (let script of scripts) {
                    eval(script.innerHTML);
                }
            } else {
                console.error('No se encontró el contenedor del navbar');
            }
        })
        .catch(error => {
            console.error('Error al cargar el navbar:', error);
        });

    // Cargar footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el footer');
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById('footer-container');
            if (container) {
                container.innerHTML = data;
                // Ejecutar cualquier script del footer después de cargarlo
                const scripts = container.getElementsByTagName('script');
                for (let script of scripts) {
                    eval(script.innerHTML);
                }
            } else {
                console.error('No se encontró el contenedor del footer');
            }
        })
        .catch(error => {
            console.error('Error al cargar el footer:', error);
        });
});