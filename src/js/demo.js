import ApexCharts from "apexcharts"

window.ApexCharts = ApexCharts

const getRandomChartDataItem = (l = 10, m = 100) => {
    return Math.floor(Math.random() * (m - l) + l)
}

const getRandomChartData = (l = 10, m = 100) => {
    return Array.from({ length: l }, () => getRandomChartDataItem(l, m))
}

const quickStatisticsChartOptions = (name) => {
    return {
        series: [
            {
                name: name,
                data: getRandomChartData(12),
            },
        ],
        chart: {
            height: '100%',
            width: '100%',
            type: 'line',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        title: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            x: { show: false },
        },
    }
}

document.addEventListener('alpine:init', () => {
    const baseChartOptions = {
        theme: {
            // mode: 'light',
        }
    }

    Alpine.data('quickStatisticsChart', (el, name) => {
        const quickStatisticsChart = new ApexCharts(el, quickStatisticsChartOptions(name))
        quickStatisticsChart.render()

        return {
            init() {
                //    
            },
        }
    })
    
    Alpine.data('earningChart', (el) => {
        const earningChart = new ApexCharts(el, {
            // series: getRandomChartData(2),
            theme: {
                mode: this.$store.darkMode.value ? 'dark' : 'light',
            },
            series: [30, 70],
            chart: {
                type: 'donut',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: { show: false },
            comparedResult: [3, 7],
            labels: ['Sales', 'Other'],
            stroke: { width: 0 },
            // colors: ['#a855f7', '#e2e8f0'],
            grid: {
                padding: {
                    right: -20,
                    bottom: -8,
                    left: -20,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                offsetY: 15,
                            },
                            value: {
                                offsetY: -20,
                                formatter(val) {
                                    return `${parseInt(val)}%`
                                },
                            },
                            total: {
                                show: true,
                                label: 'Sales',
                                formatter() {
                                    return '30%'
                                },
                            },
                        },
                    },
                },
            },
        })
        earningChart.render()

        return {
            init() {
                // 
            },
        }
    })
    
    Alpine.data('salesChart', (el) => {
        const salesChart = new ApexCharts(el, {
            theme: {
                // mode: 'light',
            },
            series: [
                {
                    name: 'Sales',
                    data: getRandomChartData(7),
                },
                {
                    name: 'Revenue',
                    data: getRandomChartData(7),
                },
            ],
            legend: {
                position: 'top',
            },
            chart: {
                height: '100%',
                width: '100%',
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2025', '2/11/2025', '3/11/2025', '4/11/2025', '5/11/2025', '6/11/2025'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        })
        salesChart.render()

        return {
            init() {
                // 
            },
        }
    })
})
