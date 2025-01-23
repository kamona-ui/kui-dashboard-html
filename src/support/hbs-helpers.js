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
}
