class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img src="/images/logo.png" alt="logo" id="logo">
                <nav>
                    <a href="/">home</a>
                    <a href="/game">game</a>
                    <a href="/sillies">sillies</a>
                </nav>
            </header>
            `
    }
}

customElements.define('custom-header', CustomHeader)