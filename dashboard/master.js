// Car Details Card
// Battery Level Line
function updateBatteryElements() {
    const batteryElements = document.querySelectorAll('.btry-el');

    batteryElements.forEach(batteryElement => {
        const batteryValElement = batteryElement.querySelector('.val');
        const batteryPercentage = parseInt(batteryValElement.getAttribute('data-btry-level'));
        const remainingPercentage = 100 - batteryPercentage;
        const batteryCover = batteryElement.querySelector('.btry-cover');
        batteryCover.style.width = `${remainingPercentage}%`;
        batteryValElement.innerText = `${batteryPercentage}%`;
    });
}
updateBatteryElements();


// Charging Chart 
Chart.defaults.font.family = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.color = '#292b2c';

var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "",
            lineTension: 0.3,
            backgroundColor: "#2A9595",
            borderColor: "#2A9595",
            pointRadius: 4,
            pointBackgroundColor: "#2A9595",
            pointBorderColor: "rgba(0, 0, 0, 0)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#64748B",
            pointHitRadius: 20,
            pointBorderWidth: 1,
            data: [0, 6000, 1000, 4000, 6000, 2000, 3000, 8875, 3000, 4000, 1000, 5000],
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                time: {
                    unit: 'month'
                },
                grid: {
                    display: true
                },
                ticks: {
                    color: '#808080',
                    maxTicksLimit: 12,
                }
            },
            y: {
                ticks: {
                    color: '#808080',
                    min: 0,
                    max: 9000,
                    stepSize: 1000
                },
                grid: {
                    color: "rgba(0, 0, 0, .125)",
                }
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#64748B',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                cornerRadius: 5,
                displayColors: false,
                padding: {
                    top: 5,
                    right: 15,
                    bottom: 5,
                    left: 15
                },
                titleFont: {
                    size: 14,
                    weight: 'bold'

                },
                bodyFont: {
                    size: 16,
                    weight: 'normal'
                },
                callbacks: {
                    label: function (context) {
                        return context.raw;
                    }
                }
            }
        },
        onHover: function (event, chartElement) {
            const target = event.native ? event.native.target : event.target;
            target.style.cursor = chartElement.length ? 'pointer' : 'default';
        }
    }
});