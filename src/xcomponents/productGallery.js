import xcomponent from '../../node_modules/xcomponent/dist/xcomponent';

window.ProductGallery = xcomponent.create({
    tag: 'product-gallery',
    url: document.currentScript.src.replace(/[^\/]+$/, 'page.html'),
    dimensions: {
        width: '100%',
        height: '800px'
    },
});