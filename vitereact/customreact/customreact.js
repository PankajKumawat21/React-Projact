function customRender(reactElement,customRender){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement
   (reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props){
    if(prop == 'children') continue;
    domElement.setAttribute(prop,reactElement.props [prop])
   }
   CSSContainerRule.appendChild(domElement)
}

const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
}


const maincontainer = document.querySelector('#root')

customRender(reactElement, maincontainer)