const customRender = (elem, cont) => {
    let domElem = document.createElement(elem.type);
    domElem.innerHTML = elem.childern;
    domElem.setAttribute('style', elem.props.style);
    
    //injecting [appending] element in container
    cont.appendChild(domElem)

}

let mainContainer = document.querySelector('#root');
let reactElem = {
    type: 'h1',
    props: {
        style: 'background-color: yellow'
    },
    childern: 'I am h1 Hello World'
}

customRender(reactElem, mainContainer)