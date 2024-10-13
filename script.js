// Example of using Chart.js for visualizing data
function showChart() {
    const ctx = document.getElementById('exampleChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Feature 1', 'Feature 2', 'Feature 3'],
            datasets: [{
                label: 'EDA Example',
                data: [12, 19, 3],
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
