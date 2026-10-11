import estilos from './insignia-estado.css?inline';

const textos: Record<string, string> = {
    disponible: 'Disponible',
    pocas: 'Pocas piezas',
    agotado: 'Agotado',
};

export class InsigniaEstado extends HTMLElement {

    static observedAttributes = ['estado'];

    private etiqueta: HTMLSpanElement;

    constructor() {
        super();

        const sombra = this.attachShadow({mode: 'open'});

        sombra.innerHTML = `
            <style>${estilos}</style>
            <span></span>
        `;

        this.etiqueta = sombra.querySelector('span')!;
    }

    connectedCallback() {
        this.pintar();
    }

    attributeChangedCallback() {
        this.pintar();
    }

    private pintar() {
        const estado = this.getAttribute('estado') ?? 'disponible';

        this.etiqueta.className = estado;
        this.etiqueta.textContent = textos[estado] ?? estado;
    }
}

customElements.define('insignia-estado', InsigniaEstado);
