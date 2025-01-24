import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineAnchor from '@alpinejs/anchor'
import PerfectScrollbar from 'perfect-scrollbar'
import kuiPlugin from './plugins'

Alpine.store('darkMode', {
    value: false,
    setValue(value) {
        window.localStorage.setItem('dark', value)
        document.dispatchEvent(new CustomEvent('scheme:changed', {}))
    },
    getValue() {
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'))
        }
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    toggle() {
        this.value = !this.value
        this.setValue(this.value)
    },
    init() {
        this.value = this.getValue()
    },
})

Alpine.data('globalState', () => {
    let lastScrollTop = 0

    return {
        init() {
            window.addEventListener('scroll', () => {
                let st = window.pageYOffset || document.documentElement.scrollTop
                if (st > lastScrollTop) {
                    // downscroll
                    this.scrollingDown = true
                    this.scrollingUp = false
                } else {
                    // upscroll
                    this.scrollingDown = false
                    this.scrollingUp = true
                    if (st == 0) {
                        //  reset
                        this.scrollingDown = false
                        this.scrollingUp = false
                    }
                }
                lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
            })
        },

        isSidebarOpen: window.innerWidth > 1024,

        isSidebarHovered: false,

        scrollingDown: false,

        scrollingUp: false,
    }
})

Alpine.data('perfectScroll', () => {
    let ps

    const update = () => {
        if (ps) {
            ps.update()
        }
    }

    return {
        init() {
            ps = new PerfectScrollbar(this.$el, {
                wheelSpeed: 2,
                wheelPropagation: false,
                minScrollbarLength: 20,
            })
        },
        update,
    }
})

Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineAnchor)
Alpine.plugin(kuiPlugin)

export default Alpine
