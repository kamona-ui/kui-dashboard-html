export const baseUrl = '/kui-dashboard-html/'

export const getScheme = () => {
    if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
    }

    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
