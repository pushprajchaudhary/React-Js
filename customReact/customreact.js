
function customRendor(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    for (const key in reactElement.props) {
        if (key == 'children') continue;
        domElement.setAttribute(key, reactElement.props[key]);
    }
    mainContainer.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google search engine.'
}


const mainContainer = document.querySelector('#root');


customRendor(reactElement, mainContainer);