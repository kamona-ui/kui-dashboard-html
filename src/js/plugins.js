export function dropdown(Alpine) {
    Alpine.directive('dropdown', (el, { value, expression }, { evaluate }) => {
        if (!value) {
            Alpine.bind(el, {
                'x-id'() {
                    return ['dropdown-trigger', 'dropdown-menu']
                },
                'x-ref': 'root',
                class: 'relative',
                'x-data'() {
                    return {
                        __isOpen: false,

                        init() {},
                    }
                },
            })
        }

        if (value == 'trigger') {
            Alpine.bind(el, {
                'x-ref': 'trigger',
                ':id'() {
                    return this.$id('dropdown-trigger')
                },
                '@click'() {
                    this.$data.__isOpen = !this.$data.__isOpen
                },
            })
        }

        if (value == 'menu') {
            const { align } = evaluate(expression)

            let alignClasses = ''

            switch (align) {
                case 'left':
                    alignClasses = 'absolute origin-top-left left-0'
                    break
                case 'right':
                    alignClasses = 'absolute origin-top-right right-0'
                    break

                default:
                    alignClasses = 'absolute'
                    break
            }

            Alpine.bind(el, {
                'x-ref': 'menu',
                ':id'() {
                    return this.$id('dropdown-menu')
                },
                'x-show'() {
                    return this.$data.__isOpen
                },
                '@click.away'() {
                    this.$data.__isOpen = false
                },
                '@close.stop'() {
                    this.$data.__isOpen = false
                },
                'x-transition:enter': 'transition ease-out duration-200',
                'x-transition:enter-start': 'transform opacity-0 scale-95',
                'x-transition:enter-end': 'transform opacity-100 scale-100',
                'x-transition:leave': 'transition ease-in duration-75',
                'x-transition:leave-start': 'transform opacity-100 scale-100',
                'x-transition:leave-end': 'transform opacity-0 scale-95',
                class: alignClasses,
            })
        }
    }).before('bind')
}
