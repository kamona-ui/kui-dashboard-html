import { twMerge } from 'tailwind-merge'
import { baseUrl } from '.'

export default {
    eq: function (v1, v2) {
        return v1 === v2
    },
    notEq: function (v1, v2) {
        return v1 != v2
    },
    baseUrl: function (url = '') {
        if (url == '#') return '#'

        if (url == '/') {
            url = ''
        }

        return `${baseUrl}${url}`
    },

    btn: function (context) {
        const {
            variant = '',
            icon = null,
            srText = '',
            startIcon = null,
            endIcon = null,
            className = null,
            attrs = '',
            iconClasses = '',
            iconSizeClasses = 'w-6 h-6',
            iconAttrs = '',
            text = '',
            type = 'button',
            href = null,
            size = 'base',
        } = context.hash

        let baseClasses =
            'inline-flex items-center justify-center gap-2 rounded-md transition-colors font-medium select-none focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-eval-1 disabled:cursor-not-allowed disabled:opacity-50 '

        switch (variant) {
            case 'white':
                baseClasses += ' bg-white text-gray-800 hover:bg-gray-100 focus:ring-white'
                break

            case 'black':
                    baseClasses += ' bg-black text-gray-200 hover:bg-gray-900 focus:ring-black'
                    break

            case 'secondary':
                baseClasses += ' bg-black text-gray-200 hover:bg-gray-900 focus:ring-black'
                break

            case 'success':
                baseClasses += ' bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
                break

            case 'danger':
                baseClasses += ' bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
                break

            case 'warning':
                baseClasses += ' bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500'
                break

            case 'info':
                baseClasses += ' bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500'
                break

            case 'transparent':
                baseClasses +=
                    ' bg-transparent text-gray-500 hover:text-gray-600 focus:ring-primary dark:text-gray-300 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-eval-2'
                break

            default:
                baseClasses += ' bg-primary text-white hover:bg-primary-dark focus:ring-primary'
                break
        }

        switch(size) {
            case 'sm':
                baseClasses += icon ? ' p-1.5 ' : ' px-2.5 py-1.5 text-sm '
                break
            case 'base':
                baseClasses += icon ? ' p-2 ' : ' px-4 py-2 '
                break
            case 'lg':
                baseClasses += icon ? ' p-3 ' : ' px-5 py-2 text-xl '
                break
        }

        // if (icon) {
        //     baseClasses += ' p-2'
        // } else {
        //     baseClasses += ' px-4 py-2'
        // }

        const iconSpan = (icon) =>
            `<span aria-hidden="true" class="iconify ${icon} ${iconSizeClasses} ${iconClasses}" ${iconAttrs}></span>`

        const srt = srText ? `<span class="sr-only">${srText}</span>` : ''
        const i = icon ? iconSpan(icon) : ''
        const si = startIcon ? iconSpan(startIcon) : ''
        const ei = endIcon ? iconSpan(endIcon) : ''

        const tag = href ? 'a' : 'button'

        const element = `
            <${tag} ${href ? 'href="' + href + '"' : ''} ${attrs} type="${type}" class="${twMerge(baseClasses, className)}">
                ${srt}
                ${i}
                ${si}
                ${text}
                ${context.fn?.()}
                ${ei}
            </${tag}>
        `
        return element.replace(/(\r\n|\r|\n|\u2028|\u2029) {2,}/g, '\n')
    },
    'base-card': function (context) {
        const { tag = 'div', attrs = '', className = '' } = context.hash

        let baseClasses = 'rounded-md bg-white shadow-md dark:bg-dark-eval-1'

        return `
            <${tag} class="${twMerge(baseClasses, className)}" ${attrs}>
                ${context.fn?.()}
            </${tag}>
        `
    },
}
