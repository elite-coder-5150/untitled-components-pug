class App {
    button: HTMLButtonElement
    dropdown: HTMLDivElement
    icon: HTMLDivElement
    init() {
        this.cacheDom()
        this.initEvents()
    }

    cacheDom() {
        this.button = document.querySelector('button')
        this.dropdown = document.querySelector('.dropdown')
        this.icon = document.querySelector('.dropdown-icon')
    }

    initEvents() {
        this.button.addEventListener('click', () => {
            this.rotateIcon()
            this.toggleDropdown()
        })
    }

    toggleDropdown() {
        this.dropdown.classList.toggle('is-active')
    }

    rotateIcon() {
        this.icon.classList.toggle('rotated')
    }
}

let app = new App()
app.init()
