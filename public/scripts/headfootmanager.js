class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img src="/images/logo.png" alt="logo" id="logo">
                <nav>
                    <a href="/">home</a>
                    <a href="/sillies">sillies</a>
                </nav>
            </header>
            `
    }
}

customElements.define('custom-header', CustomHeader)


class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <hr>
                <a href="https://bsky.app/profile/duckwiz.com">bluesky</a>
                <a href="https://duckwiz.itch.io/">itch</a>
            </footer>
            `
    }
}

customElements.define('custom-footer', CustomFooter)