export default function (Alpine) {
    Alpine.directive('disclosure', (el, { value }) => {
        if (value === 'trigger') handleTrigger(Alpine, el)
        else if (value === 'content') handleContent(Alpine, el)
        else handleRoot(Alpine, el)
    }).before('bind')
}

function handleRoot(Alpine, el) {
    Alpine.bind(el, {
        'x-id'() {
            return ['disclosure-trigger', 'disclosure-content']
        },
        'x-data'() {
            return {
                checkDefaultOpenState() {
                    let defaultIsOpen = Boolean(Alpine.bound(this.$el, 'default-open', false))

                    if (defaultIsOpen) this.isOpen = defaultIsOpen
                },
                isOpen: false,
                close() {
                    this.isOpen = false
                },
                toggle() {
                    this.isOpen = !this.isOpen
                },
            }
        },
    })
}

function handleTrigger(Alpine, el) {
    Alpine.bind(el, {
        ':id'() {
            return this.$id('disclosure-trigger')
        },
        'x-init'() {
            if (this.$el.tagName.toLowerCase() === 'button' && !this.$el.hasAttribute('type')) this.$el.type = 'button'
        },
        '@click'() {
            this.$data.isOpen = !this.$data.isOpen
        },
        ':aria-expanded'() {
            return this.$data.isOpen
        },
        ':aria-controls'() {
            return this.$data.$id('disclosure-content')
        },
        '@keydown.space.prevent.stop'() {
            this.$data.toggle()
        },
        '@keydown.enter.prevent.stop'() {
            this.$data.toggle()
        },
        '@keyup.space.prevent'() {},
    })
}

function handleContent(Alpine, el) {
    Alpine.bind(el, {
        ':id'() {
            return this.$data.$id('disclosure-content')
        },
        'x-init'() {
            this.$data.checkDefaultOpenState()
        },
        'x-show'() {
            return this.$data.isOpen
        },
    })
}
