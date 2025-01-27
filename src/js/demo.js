import ApexCharts from 'apexcharts'
import { getScheme } from '../support'

const getRandomChartDataItem = (l = 10, m = 100) => {
    return Math.floor(Math.random() * (m - l) + l)
}

const getRandomChartData = (l = 10, m = 100) => {
    return Array.from({ length: l }, () => getRandomChartDataItem(l, m))
}

const onInit = (chart) => {
    document.addEventListener('scheme:changed', () => {
        chart.updateOptions({
            theme: {
                mode: getScheme() ? 'dark' : 'light',
            },
        })
    })
}

document.addEventListener('alpine:init', () => {
    const baseChartOptions = {
        theme: {
            mode: getScheme() ? 'dark' : 'light',
        },
    }

    Alpine.data('quickStatisticsChart', (el, name) => {
        const quickStatisticsChart = new ApexCharts(el, {
            ...baseChartOptions,
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
                background: 'transparent',
            },
            series: [
                {
                    name: name,
                    data: getRandomChartData(12),
                },
            ],
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
        })
        quickStatisticsChart.render()

        return {
            init() {
                onInit(quickStatisticsChart)
            },
        }
    })

    Alpine.data('earningChart', (el) => {
        const earningChart = new ApexCharts(el, {
            ...baseChartOptions,
            chart: {
                type: 'donut',
                width: '90%',
                height: '90%',
                toolbar: {
                    show: false,
                },
                background: 'transparent',
            },
            series: [30, 70],
            dataLabels: {
                enabled: false,
            },
            legend: { show: false },
            comparedResult: [3, 7],
            labels: ['A', 'B'],
            stroke: { width: 0 },
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
                onInit(earningChart)
            },
        }
    })

    Alpine.data('salesChart', (el) => {
        const salesChart = new ApexCharts(el, {
            ...baseChartOptions,
            chart: {
                height: '100%',
                width: '100%',
                type: 'area',
                toolbar: {
                    show: false,
                },
                background: 'transparent',
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
                onInit(salesChart)
            },
        }
    })

    Alpine.data('usageChart', (el, name) => {
        const usageChart = new ApexCharts(el, {
            ...baseChartOptions,
            series: [
                {
                    name: name,
                    data: getRandomChartData(20),
                },
            ],
            chart: {
                height: '100%',
                width: '100%',
                type: 'area',
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
                background: 'transparent',
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            title: {
                show: false,
            },
            grid: {
                show: false,
                padding: {
                    left: -2,
                    right: -2,
                    bottom: -2,
                },
            },
            tooltip: {
                custom: function ({ series, dataPointIndex, seriesIndex }) {
                    const v = series[seriesIndex][dataPointIndex]
                    return `<div class="p-2 text-xs text-opacity-75 font-medium dark:bg-dark-eval-3">In use ${v}% ${v * 100} MB</div>`
                },
            },
        })

        usageChart.render()

        return {
            init() {
                onInit(usageChart)
            },
        }
    })
})
