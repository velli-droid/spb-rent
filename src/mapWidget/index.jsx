import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export class MapWidget {
    constructor(config) {
        this.domNode = document.getElementById('catalog-map');
        this.config = config;

        if (!this.domNode) return;

        this.root = createRoot(this.domNode);
        this.root.render(<App config={this.config}/>)
    }

    update(config) {
        this.config = config
        this.root.unmount();
        this.root = createRoot(this.domNode);
        this.root.render(<App config={this.config} />);
    }
}