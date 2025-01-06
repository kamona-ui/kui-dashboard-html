import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import { addIconSelectors } from '@iconify/tailwind'

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,hbs,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                't-lg': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            colors: {
                dark: {
                    'eval-0': '#151823',
                    'eval-1': '#222738',
                    'eval-2': '#2A2F42',
                    'eval-3': '#2C3142',
                },

                primary: {
                    light: colors.purple[400],
                    DEFAULT: colors.purple[500],
                    dark: colors.purple[600],
                },
            },
        },
    },
    plugins: [
        forms,
        addIconSelectors(['tabler']),
    ],
}
