import json
import os
from datetime import datetime

base_dir = "/Users/ramialsharef/Desktop/CLoudPros/jhco-org/financial-reports/annual-reports"

# Load financial data
with open(os.path.join(base_dir, "financial_data.json"), "r") as f:
    financial_data = json.load(f)

# Create comprehensive index
html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Annual Reports Archive 2015-2025</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            padding: 20px;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 50px 40px;
            text-align: center;
        }
        .header h1 {
            font-size: 2.8em;
            margin-bottom: 10px;
            font-weight: 700;
        }
        .header p {
            font-size: 1.1em;
            opacity: 0.95;
            margin-bottom: 20px;
        }
        .content {
            padding: 40px;
        }
        .section {
            margin-bottom: 50px;
        }
        .section h2 {
            font-size: 2em;
            color: #667eea;
            margin-bottom: 30px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 15px;
        }
        .chart-container {
            position: relative;
            height: 500px;
            margin: 30px 0;
            padding: 20px;
            background: #f9fafb;
            border-radius: 8px;
        }
        .reports-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        .report-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }
        .report-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }
        .report-card h3 {
            font-size: 1.8em;
            margin-bottom: 15px;
            font-weight: 700;
        }
        .report-card .metric {
            margin: 10px 0;
            font-size: 0.95em;
            opacity: 0.95;
        }
        .report-card .links {
            margin-top: 20px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .report-card a {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 8px 16px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.85em;
            transition: background 0.3s;
        }
        .report-card a:hover {
            background: #f0f0f0;
        }
        .summary-table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .summary-table th {
            background: #667eea;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }
        .summary-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        .summary-table tr:hover {
            background: #f5f7fa;
        }
        .summary-table tr:last-child td {
            border-bottom: none;
        }
        .footer {
            background: #f5f7fa;
            padding: 30px 40px;
            text-align: center;
            color: #666;
            border-top: 1px solid #e0e0e0;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .stat-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 25px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #667eea;
        }
        .stat-card .label {
            color: #667eea;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        .stat-card .value {
            font-size: 2em;
            font-weight: bold;
            color: #333;
        }
        .download-section {
            background: #e8f0f7;
            padding: 25px;
            border-radius: 8px;
            margin: 30px 0;
            border-left: 4px solid #667eea;
        }
        .download-section h3 {
            color: #667eea;
            margin-bottom: 15px;
        }
        .download-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        .download-links a {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.3s;
        }
        .download-links a:hover {
            background: #764ba2;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Annual Reports Archive</h1>
            <p>10-Year Financial Overview (2015-2025)</p>
            <p style="font-size: 0.9em; opacity: 0.8;">Comprehensive Financial Analysis | Dummy Data</p>
        </div>
        
        <div class="content">
            <!-- Key Statistics -->
            <div class="section">
                <h2>Archive Overview</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="label">Total Reports</div>
                        <div class="value">11</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">Years Covered</div>
                        <div class="value">2015-2025</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">Languages</div>
                        <div class="value">2 (EN/ES)</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">Revenue Growth</div>
                        <div class="value">270%</div>
                    </div>
                </div>
            </div>
            
            <!-- Revenue Trend Chart -->
            <div class="section">
                <h2>Revenue Trend (2015-2025)</h2>
                <div class="chart-container">
                    <canvas id="revenueChart"></canvas>
                </div>
            </div>
            
            <!-- Net Income Trend Chart -->
            <div class="section">
                <h2>Net Income Trend (2015-2025)</h2>
                <div class="chart-container">
                    <canvas id="incomeChart"></canvas>
                </div>
            </div>
            
            <!-- Margin Analysis Chart -->
            <div class="section">
                <h2>Profitability Margins (2015-2025)</h2>
                <div class="chart-container">
                    <canvas id="marginChart"></canvas>
                </div>
            </div>
            
            <!-- Summary Table -->
            <div class="section">
                <h2>Year-by-Year Summary</h2>
                <table class="summary-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Revenue</th>
                            <th>Net Income</th>
                            <th>Gross Margin %</th>
                            <th>Net Margin %</th>
                            <th>Employees</th>
                            <th>Revenue/Employee</th>
                        </tr>
                    </thead>
                    <tbody>
"""

# Add table rows for each year
for year in range(2015, 2026):
    data = financial_data[str(year)]
    html_content += f"""                        <tr>
                            <td><strong>{year}</strong></td>
                            <td>${data['revenue']:,}</td>
                            <td>${data['net_income']:,}</td>
                            <td>{data['gross_margin_percent']}%</td>
                            <td>{data['net_margin_percent']}%</td>
                            <td>{data['employees']}</td>
                            <td>${data['revenue_per_employee']:,.0f}</td>
                        </tr>
"""

html_content += """                    </tbody>
                </table>
            </div>
            
            <!-- Individual Reports -->
            <div class="section">
                <h2>Annual Reports (2015-2025)</h2>
                <p style="margin-bottom: 20px; color: #666;">Click on any year to view detailed financial statements and bilingual reports</p>
                <div class="reports-grid">
"""

# Add report cards
for year in range(2025, 2014, -1):
    data = financial_data[str(year)]
    if year > 2015:
        prev_data = financial_data[str(year - 1)]
        revenue_growth = ((data['revenue'] - prev_data['revenue']) / prev_data['revenue']) * 100
    else:
        revenue_growth = 0
    
    html_content += f"""                    <div class="report-card">
                        <h3>{year}</h3>
                        <div class="metric">Revenue: <strong>${data['revenue']:,}</strong></div>
                        <div class="metric">Net Income: <strong>${data['net_income']:,}</strong></div>
                        <div class="metric">Employees: <strong>{data['employees']}</strong></div>
                        <div class="metric">Growth: <strong>{'+' if revenue_growth >= 0 else ''}{revenue_growth:.1f}%</strong></div>
                        <div class="links">
                            <a href="reports-{year}/report_{year}_en.html">English Report</a>
                            <a href="reports-{year}/report_{year}_es.html">Spanish Report</a>
                            <a href="reports-{year}/financial_report_{year}.csv">Download CSV</a>
                        </div>
                    </div>
"""

html_content += """                </div>
            </div>
            
            <!-- Download All Data -->
            <div class="download-section">
                <h3>Download Complete Archive</h3>
                <div class="download-links">
                    <a href="financial_data.json">Complete Financial Data (JSON)</a>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>Annual Reports Archive 2015-2025 | Generated on """ + datetime.now().strftime('%B %d, %Y') + """</p>
            <p style="margin-top: 10px; font-size: 0.85em;">This archive contains dummy financial data for demonstration purposes only.</p>
        </div>
    </div>
    
    <script>
        // Extract data for charts
        const years = [];
        const revenues = [];
        const netIncomes = [];
        const grossMargins = [];
        const netMargins = [];
        
"""

# Add data extraction
for year in range(2015, 2026):
    data = financial_data[str(year)]
    html_content += f"""        years.push({year});
        revenues.push({data['revenue']});
        netIncomes.push({data['net_income']});
        grossMargins.push({data['gross_margin_percent']});
        netMargins.push({data['net_margin_percent']});
"""

html_content += """
        // Revenue Chart
        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Annual Revenue',
                    data: revenues,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        // Net Income Chart
        const incomeCtx = document.getElementById('incomeChart').getContext('2d');
        new Chart(incomeCtx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Net Income',
                    data: netIncomes,
                    backgroundColor: '#764ba2',
                    borderColor: '#667eea',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        // Margin Chart
        const marginCtx = document.getElementById('marginChart').getContext('2d');
        new Chart(marginCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Gross Margin %',
                        data: grossMargins,
                        borderColor: '#27ae60',
                        backgroundColor: 'rgba(39, 174, 96, 0.1)',
                        tension: 0.4,
                        pointRadius: 5
                    },
                    {
                        label: 'Net Margin %',
                        data: netMargins,
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        tension: 0.4,
                        pointRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>"""

with open(os.path.join(base_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Master index created!")

