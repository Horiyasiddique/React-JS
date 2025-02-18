function customRender(elem, container) {
  let domElement = document.createElement(elem.type);
  domElement.innerHTML = elem.childern;
  // ❗❗❗ setting attributes one by one is not a good practice what if an element have more attributes or if an element has only one attribute ?
  //   domElement.setAttribute("href", elem.props.href);
  //   domElement.setAttribute("target", elem.props.target);

  // good practice 👍👍👍
  for (const prop in elem.props) {
    if (prop === "childern") continue;

    domElement.setAttribute(prop, elem.props[prop]);
  }
  //inject [append] element in a container
  container.appendChild(domElement);
}

let mainContainer = document.querySelector("#root");
let reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  childern: "Click here to visit google",
};

// custom render react function
customRender(reactElement, mainContainer);
