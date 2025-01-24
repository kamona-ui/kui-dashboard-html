export default {
    breadcrumb: [
        {
            title: 'Dashboard',
            icon: 'tabler--home-filled',
            url: null,
        },
    ],

    charts: {
        quickStaticsCharts: [
            {
                title: 'Customers',
                icon: 'tabler--users-group',
                total: '12.4k',
                percentage: '32.40%',
                status: 'up',
            },
            {
                title: 'Visits',
                icon: 'tabler--eye',
                total: '-2.6k',
                percentage: '-2.10%%',
                status: 'down',
            },
            {
                title: 'Orders',
                icon: 'tabler--shopping-cart',
                total: '34.4k',
                percentage: '0.60%',
                status: 'default',
            },
            {
                title: 'Growth',
                icon: 'tabler--chart-pie',
                total: '15.6%',
                percentage: '7.20%',
                status: 'up',
            },
        ],
    },

    simpleStatistics: [
        {
            title: '132 Sales',
            icon: 'tabler--bell-dollar',
            note: '12 Waiting payments',
            colorClass: 'bg-primary',
        },
        {
            title: '78 Orders',
            icon: 'tabler--shopping-bag',
            note: '32 Shiped',
            colorClass: 'bg-green-500',
        },
        {
            title: '60 Share',
            icon: 'tabler--brand-twitter',
            note: '16 Today',
            colorClass: 'bg-blue-500',
        },
        {
            title: '231 Likes',
            icon: 'tabler--brand-facebook',
            note: '23 Today',
            colorClass: 'bg-blue-400',
        },
    ],
}
