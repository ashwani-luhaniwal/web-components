/**
 * ----------------------
 * Using custom elements
 * ----------------------
 * One of the most key aspects of web components is the ability to create custom elements that 
 * nicely encapsulate your functionality on an HTML page, rather than having to make do with a tag 
 * soup that defines some custom functionality. This article goes through the basics of using 
 * custom elements.
 * 
 * ----------------
 * High-level view
 * ----------------
 * The controller of custom elements on a web document is the CustomElementRegistry object — this 
 * object allows you to register a custom element on the page, return information on what custom 
 * elements are registered, etc.
 * 
 * To register a custom element on the page, you use the CustomElementRegistry.define() method. 
 * This takes as its arguments:
 *  - A DOMString representing the name you are giving to the element. Note that custom element 
 *      names require a dash to be used in them; they can't be single words.
 *  - A class object that defines the behaviour of the element.
 *  - Optionally, an options object containing an extends property, which specifies the built-in 
 *      element your element inherits from if any.
 * 
 * So for example, we can define a custom word-count element like this:
 */

customElements.define('word-count', WordCount, { extends: 'p' });

/**
 * The element is called word-count, its class object is WordCount, and it extends the <p> element.
 * 
 * A custom element's class object is written using standard ES 2015 class syntax. For example, 
 * WordCount is structured like so:
 */

class WordCount extends HTMLParagraphElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Element functionality written in here
    }
}

/**
 * This is just a simple example, but there is more you can do here. It is possible to define 
 * specific lifecycle callbacks inside the constructor, which run at specific points in the 
 * element's lifecycle. For example, connectedCallback is invoked when the custom element is 
 * first connected to the document's DOM, while attributeChangedCallback is invoked when one of 
 * the custom element's attributes is added, removed, or changed.
 * 
 * There are two types of custom elements:
 * 
 *  - Autonomous custom elements are standalone — they don't inherit from standard HTML elements. 
 *      You use these on a page by literally writing them out as an HTML element. For example 
 *      <popup-info>, or document.createElement("popup-info").
 *  - Customized built-in elements inherit from basic HTML elements. To create one of these, you 
 *      have to specify which element they extend (as implied in the examples above), and they are 
 *      used by writing out the basic element but specifying the name of the custom elment in the 
 *      is attribute (or property). For example <p is="word-count">, or 
 *      document.createElement("p", { is: "word-count" }).
 */