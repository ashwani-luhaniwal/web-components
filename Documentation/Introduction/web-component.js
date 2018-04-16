/**
 * --------------------------
 * What are web components ?
 * --------------------------
 * Web components are a set of web platform APIs that allow you to create new custom, reusable, 
 * encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build 
 * on the Web Component standards, will work across modern browsers, and can be used with any 
 * JavaScript library or framework that works with HTML.
 * 
 * Web components are based on existing web standards. Features to support web components are 
 * currently being added to the HTML and DOM specs, letting web developers easily extend HTML 
 * with new elements with encapsulated styling and custom behavior.
 * 
 * ---------------
 * Specifications
 * ---------------
 * Web components are based on four main specifications:
 * 
 *  1. Custom Elements: The Custom Elements specification lays the foundation for designing and 
 *      using new types of DOM elements.
 *  2. Shadow DOM: The shadow DOM specification defines how to use encapsulated style and markup 
 *      in web components.
 *  3. HTML imports: The HTML imports specification defines the inclusion and reuse of HTML 
 *      documents in other HTML documents.
 *  4. HTML Template: The HTML template element specification defines how to declare fragments of 
 *      markup that go unused at page load, but can be instantiated later on at runtime.
 * 
 * ------------------------------
 * How do I use a web component?
 * ------------------------------
 * The components on this site provide new HTML elements that you can use in your web pages and 
 * web applications.
 * 
 * Using a custom element is as simple as importing it, and using the new tags in an HTML document. 
 * For example, to use the Emoji Rain element:
 * 
 *      <link rel="import" href="../emoji-rain/emoji-rain.html"/>
 *      <emoji-rain active></emoji-rain>
 */

/**
 * There are a number of ways to install custom elements. When you find an element you want to 
 * use, look at its README for the commands to install it. Most elements today can be installed 
 * with Bower. Bower also handles installing the components' dependencies.
 * 
 * ------------------------------------
 * How do I define a new HTML element?
 * ------------------------------------
 * This section describes the syntax for the new cross-browser version (v1) of the Web Components 
 * specification.
 * 
 * Use JavaScript to define a new HTML element and its tag with the customElements global. Call 
 * customElements.define() with the tag name you want to create and a JavaScript class that extends 
 * the base HTMLElement.
 * 
 * For example, to define a mobile drawer panel, <app-drawer>:
 */

class AppDrawer extends HTMLElements {  }
window.customElements.define('app-drawer', AppDrawer);

/**
 * v0 of the Custom Elements specification used document.registerElement() for this purpose:
 */

var XFoo = document.registerElement('x-foo');
document.body.appendChild(new XFoo());

// to use the new tag:

<app-drawer></app-drawer>

/**
 * Using a custom element is no different to using a <div> or any other element. Instances can 
 * be declared on the page, created dynamically in JavaScript, event listeners can be attached, etc.
 */

// Create with javascript
var newDrawer = document.createElement('app-drawer');
// Add it to the page
document.body.appendChild(newDrawer);
// Attach event listeners
document.querySelector('app-drawer').addEventListener('open', function () { });

/**
 * ---------------------------------
 * Creating and using a shadow root
 * ---------------------------------
 * This section describes the syntax for creating shadow DOM with the new cross-browser version 
 * (v1) of the shadow DOM specification. Shadow DOM is a new DOM feature that helps you build 
 * components. You can think of shadow DOM as a scoped subtree inside your element.
 * 
 * A shadow root is a document fragment that gets attached to a "host" element. The act of 
 * attaching a shadow root is how the element gains its shadow DOM. To create shadow DOM for an 
 * element, call element.attachShadow():
 */

const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().
// header.shadowRoot === shadowRoot
// shadowRoot.host === header

/**
 * Version 0 of the shadow DOM specification provided a slightly different method for creating 
 * shadow DOM:
 */

var root = host.createShadowRoot();

/**
 * --------------------------------------
 * Libraries for building web components
 * --------------------------------------
 * Many libraries already exist that make it easier to build web components. To dive in and create 
 * your own components, here are some you can try out:
 *  - Bosonic is a collection of components designed to meet the everyday needs of web developers.
 *  - Polymer provides a set of features for creating custom elements.
 *  - SkateJS is a JavaScript library for writing web components with a small footprint.
 *  - Slim.js is an opensource lightweight web component library that provides data-binding and 
 *      extended capabilities for components, using es6 native class inheritance.
 *  - Stencil is an opensource compiler that generates standards-compliant web components.
 *  - X-Tag is an open source JavaScript library that provides an interface for component development.
 */