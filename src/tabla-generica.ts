import estilos from './tabla-generica.css?inline';
import type { Columna } from './tipos';

export class TablaGenerica extends HTMLElement {

    private _columnas: Columna[] = [];
    private _filas: Record<string, unknown>[] = [];

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    set columnas(valor: Columna[]) {
        this._columnas = valor;
        this.pintar();
    }

    get columnas() {
        return this._columnas;
    }

    set filas(valor: Record<string, unknown>[]) {
        this._filas = valor;
        this.pintar();
    }

    get filas() {
        return this._filas;
    }

    connectedCallback() {
        this.pintar();
    }

    private pintar() {
        const encabezado = this._columnas.map(c => `<th>${c.titulo}</th>`).join('');

        let cuerpo = '';
        if (this._filas.length === 0) {
            cuerpo = `<tr><td class="vacia" colspan="${this._columnas.length}">Sin datos</td></tr>`;
        } else {
            for (const fila of this._filas) {
                const celdas = this._columnas.map(c => `<td>${fila[c.clave] ?? ''}</td>`).join('');
                cuerpo += `<tr>${celdas}</tr>`;
            }
        }

        this.shadowRoot!.innerHTML = `
        <style>${estilos}</style>
        <table>
            <thead><tr>${encabezado}</tr></thead>
            <tbody>${cuerpo}</tbody>
        </table>
        `;
    }
}

customElements.define('tabla-generica', TablaGenerica);
