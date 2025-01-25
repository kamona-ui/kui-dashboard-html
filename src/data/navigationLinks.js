export default [
    {
        title: 'Dashboard',
        url: '/',
        iconName: 'tabler--dashboard',
    },
    {
        title: 'Pages',
        url: null,
        iconName: 'tabler--file',
        links: [
            {
                title: 'Blank',
                url: 'pages/blank.html',
            },
        ],
    },
    {
        title: 'Authentication',
        url: null,
        iconName: 'tabler--shield',
        links: [
            {
                title: 'Login',
                url: 'auth/login.html',
            },
            {
                title: 'Register',
                url: 'auth/register.html',
            },
        ],
    },
]
