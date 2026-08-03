import json
import os
from datetime import datetime

base_dir = "/Users/ramialsharef/Desktop/CLoudPros/jhco-org/financial-reports/annual-reports"

# Load financial data
with open(os.path.join(base_dir, "financial_data.json"), "r") as f:
    financial_data = json.load(f)

# Translations
translations = {
    "en": {
        "title": "Annual Financial Report",
        "executive_summary": "Executive Summary",
        "income_statement": "Income Statement",
        "balance_sheet": "Balance Sheet",
        "key_metrics": "Key Metrics",
        "revenue": "Revenue",
        "net_income": "Net Income",
        "gross_margin": "Gross Margin",
        "net_margin": "Net Margin",
        "operating_income": "Operating Income",
        "total_assets": "Total Assets",
        "equity": "Equity",
        "employees": "Employees",
        "revenue_per_employee": "Revenue per Employee",
        "key_highlights": "Key Highlights",
        "yoy_growth": "Year-over-Year Growth",
        "financial_overview": "Financial Overview",
    },
    "es": {
        "title": "Informe Financiero Anual",
        "executive_summary": "Resumen Ejecutivo",
        "income_statement": "Estado de Resultados",
        "balance_sheet": "Balance General",
        "key_metrics": "Métricas Clave",
        "revenue": "Ingresos",
        "net_income": "Ingresos Netos",
        "gross_margin": "Margen Bruto",
        "net_margin": "Margen Neto",
        "operating_income": "Ingresos Operacionales",
        "total_assets": "Activos Totales",
        "equity": "Patrimonio",
        "employees": "Empleados",
        "revenue_per_employee": "Ingresos por Empleado",
        "key_highlights": "Aspectos Destacados",
        "yoy_growth": "Crecimiento Año a Año",
        "financial_overview": "Descripción General Financiera",
    }
}

# Create HTML reports for each year
for year in range(2015, 2026):
    year_dir = os.path.join(base_dir, f"reports-{year}")
    data = financial_data[str(year)]
    
    # Calculate YoY growth if not first year
    if year > 2015:
        prev_data = financial_data[str(year - 1)]
        revenue_growth = ((data['revenue'] - prev_data['revenue']) / prev_data['revenue']) * 100
        income_growth = ((data['net_income'] - prev_data['net_income']) / prev_data['net_income']) * 100
    else:
        revenue_growth = 0
        income_growth = 0
    
    for lang in ["en", "es"]:
        t = translations[lang]
        html_file = os.path.join(year_dir, f"report_{year}_{lang}.html")
        
        generated_date = datetime.now().strftime('%B %d, %Y')
        
        html_content = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{t['title']} {year}</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            padding: 20px;
        }}
        .container {{
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }}
        .header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }}
        .header h1 {{
            font-size: 2.5em;
            margin-bottom: 10px;
        }}
        .header p {{
            font-size: 1.2em;
            opacity: 0.9;
        }}
        .content {{
            padding: 40px;
        }}
        .section {{
            margin-bottom: 40px;
        }}
        .section h2 {{
            font-size: 1.8em;
            color: #667eea;
            margin-bottom: 25px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }}
        .grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }}
        .card {{
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 25px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #667eea;
        }}
        .card h3 {{
            color: #667eea;
            font-size: 0.95em;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }}
        .card .value {{
            font-size: 1.8em;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
        }}
        .card .growth {{
            font-size: 0.9em;
            color: #27ae60;
            font-weight: 600;
        }}
        .chart-container {{
            position: relative;
            height: 400px;
            margin: 30px 0;
            padding: 20px;
            background: #f9fafb;
            border-radius: 8px;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
        }}
        th {{
            background: #667eea;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }}
        td {{
            padding: 12px 15px;
            border-bottom: 1px solid #e0e0e0;
        }}
        tr:hover {{
            background: #f5f7fa;
        }}
        .highlight {{
            background: #fff3cd;
            padding: 20px;
            border-left: 4px solid #ffc107;
            border-radius: 4px;
            margin: 20px 0;
        }}
        .footer {{
            background: #f5f7fa;
            padding: 20px 40px;
            text-align: center;
            color: #666;
            font-size: 0.9em;
            border-top: 1px solid #e0e0e0;
        }}
        .language-toggle {{
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
        }}
        .lang-btn {{
            padding: 8px 16px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            text-decoration: none;
        }}
        .lang-btn:hover {{
            background: #764ba2;
        }}
        .lang-btn.active {{
            background: #764ba2;
        }}
    </style>
</head>
<body>
    <div class="language-toggle">
        <a href="report_{year}_en.html" class="lang-btn {'active' if lang == 'en' else ''}">English</a>
        <a href="report_{year}_es.html" class="lang-btn {'active' if lang == 'es' else ''}">Español</a>
    </div>
    
    <div class="container">
        <div class="header">
            <h1>{t['title']}</h1>
            <p>{year}</p>
        </div>
        
        <div class="content">
            <!-- Executive Summary -->
            <div class="section">
                <h2>{t['executive_summary']}</h2>
                <div class="highlight">
                    <p>
                        {"Fiscal year " + str(year) + " demonstrated strong financial performance with robust revenue growth and operational efficiency improvements." if lang == "en" else f"El año fiscal {year} demostró un fuerte desempeño financiero con un sólido crecimiento de ingresos y mejoras en la eficiencia operativa."}
                    </p>
                </div>
            </div>
            
            <!-- Key Metrics Cards -->
            <div class="section">
                <h2>{t['key_metrics']}</h2>
                <div class="grid">
                    <div class="card">
                        <h3>{t['revenue']}</h3>
                        <div class="value">${data['revenue']:,}</div>
                        <div class="growth">{'+' if revenue_growth >= 0 else ''}{revenue_growth:.1f}% YoY</div>
                    </div>
                    <div class="card">
                        <h3>{t['net_income']}</h3>
                        <div class="value">${data['net_income']:,}</div>
                        <div class="growth">{'+' if income_growth >= 0 else ''}{income_growth:.1f}% YoY</div>
                    </div>
                    <div class="card">
                        <h3>{t['gross_margin']}</h3>
                        <div class="value">{data['gross_margin_percent']}%</div>
                        <div class="growth">Healthy margins</div>
                    </div>
                    <div class="card">
                        <h3>{t['net_margin']}</h3>
                        <div class="value">{data['net_margin_percent']}%</div>
                        <div class="growth">Efficient operations</div>
                    </div>
                </div>
            </div>
            
            <!-- Revenue Breakdown Chart -->
            <div class="section">
                <h2>{t['financial_overview']}</h2>
                <div class="chart-container">
                    <canvas id="expenseChart"></canvas>
                </div>
            </div>
            
            <!-- Income Statement -->
            <div class="section">
                <h2>{t['income_statement']}</h2>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>% of Revenue</th>
                    </tr>
                    <tr>
                        <td>{t['revenue']}</td>
                        <td>${data['revenue']:,}</td>
                        <td>100.0%</td>
                    </tr>
                    <tr>
                        <td>COGS</td>
                        <td>${data['cogs']:,}</td>
                        <td>{(data['cogs']/data['revenue']*100):.1f}%</td>
                    </tr>
                    <tr>
                        <td>Gross Profit</td>
                        <td>${data['gross_profit']:,}</td>
                        <td>{data['gross_margin_percent']}%</td>
                    </tr>
                    <tr>
                        <td>Operating Expenses</td>
                        <td>${data['operating_expenses']:,}</td>
                        <td>{(data['operating_expenses']/data['revenue']*100):.1f}%</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">{t['operating_income']}</td>
                        <td style="font-weight: bold;">${data['operating_income']:,}</td>
                        <td style="font-weight: bold;">{data['operating_margin_percent']}%</td>
                    </tr>
                    <tr>
                        <td>Interest Expense</td>
                        <td>${data['interest_expense']:,}</td>
                        <td>{(data['interest_expense']/data['revenue']*100):.1f}%</td>
                    </tr>
                    <tr>
                        <td>Taxes</td>
                        <td>${data['taxes']:,}</td>
                        <td>{(data['taxes']/data['revenue']*100):.1f}%</td>
                    </tr>
                    <tr style="background: #e8f0f7;">
                        <td style="font-weight: bold;">{t['net_income']}</td>
                        <td style="font-weight: bold;">${data['net_income']:,}</td>
                        <td style="font-weight: bold;">{data['net_margin_percent']}%</td>
                    </tr>
                </table>
            </div>
            
            <!-- Balance Sheet -->
            <div class="section">
                <h2>{t['balance_sheet']}</h2>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">ASSETS</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cash</td>
                        <td>${data['cash']:,}</td>
                    </tr>
                    <tr>
                        <td>Accounts Receivable</td>
                        <td>${data['accounts_receivable']:,}</td>
                    </tr>
                    <tr>
                        <td>Inventory</td>
                        <td>${data['inventory']:,}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">{t['total_assets']}</td>
                        <td style="font-weight: bold;">${data['total_assets']:,}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">LIABILITIES</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Current Liabilities</td>
                        <td>${data['current_liabilities']:,}</td>
                    </tr>
                    <tr>
                        <td>Long-term Debt</td>
                        <td>${data['long_term_debt']:,}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">EQUITY</td>
                        <td style="font-weight: bold;">${data['equity']:,}</td>
                    </tr>
                </table>
            </div>
            
            <!-- Key Metrics -->
            <div class="section">
                <h2>Operational Metrics</h2>
                <table>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>{t['employees']}</td>
                        <td>{data['employees']}</td>
                    </tr>
                    <tr>
                        <td>{t['revenue_per_employee']}</td>
                        <td>${data['revenue_per_employee']:,.0f}</td>
                    </tr>
                    <tr>
                        <td>Asset Turnover</td>
                        <td>{(data['revenue']/data['total_assets']):.2f}x</td>
                    </tr>
                    <tr>
                        <td>Return on Equity</td>
                        <td>{((data['net_income']/data['equity'])*100):.1f}%</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="footer">
            <p>Generated on {generated_date} | Confidential - For Internal Use Only</p>
        </div>
    </div>
    
    <script>
        const ctx = document.getElementById('expenseChart').getContext('2d');
        const chart = new Chart(ctx, {{
            type: 'doughnut',
            data: {{
                labels: ['COGS', 'R&D', 'Marketing', 'Sales', 'Admin', 'Net Income', 'Interest & Taxes'],
                datasets: [{{
                    data: [{data['cogs']}, {data['r_and_d']}, {data['marketing']}, {data['sales']}, {data['general_admin']}, {data['net_income']}, {data['interest_expense'] + data['taxes']}],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#27AE60',
                        '#E74C3C'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }}]
            }},
            options: {{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {{
                    legend: {{
                        position: 'bottom'
                    }}
                }}
            }}
        }});
    </script>
</body>
</html>"""
        
        with open(html_file, "w", encoding="utf-8") as f:
            f.write(html_content)

print("HTML reports with bilingual support created!")

