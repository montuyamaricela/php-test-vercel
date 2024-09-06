// Function to generate the calendar for the current month
function generateCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    document.getElementById('current-month').innerText = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let calendarTable = '<tr>';

    // Add blank cells for days of the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarTable += '<td></td>';
    }

    // Add cells for the days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        if (day === currentDay) {
            calendarTable += '<td class="highlighted">' + day + '</td>';
        } else {
            calendarTable += '<td>' + day + '</td>';
        }

        // Start a new row after every Saturday
        if ((day + firstDayOfMonth) % 7 === 0) {
            calendarTable += '</tr><tr>';
        }
    }

    calendarTable += '</tr>';
    document.getElementById('calendar-table').innerHTML = calendarTable;
}

generateCalendar();

// Chart.js configurations remain the same
const clientChartCtx = document.getElementById('clientChart').getContext('2d');
const adminChartCtx = document.getElementById('adminChart').getContext('2d');
const householdChartCtx = document.getElementById('householdChart').getContext('2d');
const revenueChartCtx = document.getElementById('revenueChart').getContext('2d');

// Sample Data for Pie Chart
const pieData = {
    labels: ['Active Users', 'Total Users'],
    datasets: [{
        data: [50, 50],
        backgroundColor: ['#f1c40f', '#e74c3c']
    }]
};

// Sample Data for Bar Chart
const barData = {
    labels: ['January', 'February', 'March'],
    datasets: [{
        label: 'Revenue',
        data: [300, 400, 500],
        backgroundColor: '#3498db'
    }]
};

// Creating the charts
new Chart(clientChartCtx, {
    type: 'pie',
    data: pieData
});

new Chart(adminChartCtx, {
    type: 'pie',
    data: pieData
});

new Chart(householdChartCtx, {
    type: 'pie', // Assuming it should be a pie chart based on the initial setup
    data: pieData
});

new Chart(revenueChartCtx, {
    type: 'bar',
    data: barData
});
