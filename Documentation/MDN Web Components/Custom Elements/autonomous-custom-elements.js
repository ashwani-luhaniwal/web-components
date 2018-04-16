import { wrap } from "module";

/**
 * ---------------------------
 * Autonomous custom elements
 * ---------------------------
 * To begin with, the JavaScript file defines a class called PopUpInfo, which extends HTMLElement. 
 * Autonomous custom elements nearly always extend HTMLElement.
 */

class PopUpInfo extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // write element functionality in here
    }
}

/**
 * The preceding code snippet contains the constructor definition for the class, which always 
 * starts by calling super() so that the correct prototype chain is estabished.
 * 
 * Inside the constructor, we define all the functionality the element will have when an instance 
 * of it is instantiated. In this case we attach a shadow root to the custom element, use some DOM 
 * manipulation to create the element's internal shadow DOM structure — which is then attached to 
 * the shadow root — and finally attach some CSS to the shadow root to style it.
 */

// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});

// Create spans
var wrapper = document.createElement('span');
wrapper.setAttribute('class', 'wrapper');
var icon = document.createElement('span');
icon.setAttribute('class', 'icon');
icon.setAttribute('tabindex', 0);
var info = document.createElement('span');
info.setAttribute('class', 'info');

// Take attribute content and put it inside the info span
var text = this.getAttribute('text');
info.textContent = text;

// Insert icon
var imgUrl;
if (this.hasAttribute('img')) {
    imgUrl = this.getAttribute('img');
} else {
    imgUrl = 'img/default.png';
}
var img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);

// Create some css to apply to the shadow dom
var style = document.createElement('style');

style.textContent = '.wrapper {' +
// CSS truncated for brevity

// attach the created elements to the shadow dom
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);

/**
 * 
 */