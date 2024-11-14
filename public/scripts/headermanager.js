class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            < img src = "/images/logo.png" alt = "logo" id = "logo" >
                < nav >
                    <a href="/">home</a>
                    <a href="/game">game</a>
                    <a href="/kins">sillies</a>
                </nav >
            `
    }
}

customElements.define('custom-header', CustomHeader)