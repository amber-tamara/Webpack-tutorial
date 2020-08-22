import './hello-world-button.css'

class HelloWorldButton {
    render() {
        const button = document.createElement("button");
        button.innerHTML = "hello";
        button.classList.add('hello-world-button')
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'world';
            p.classList.add('hello-world-paragraph')
            body.appendChild(p);
        }
        const body = document.querySelector("body");
        body.appendChild(button);
    }
}

export default HelloWorldButton;