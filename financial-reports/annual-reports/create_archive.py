import json
import csv
import os
from datetime import datetime

base_dir = "/Users/ramialsharef/Desktop/CLoudPros/jhco-org/financial-reports/annual-reports"

# Load financial data
with open(os.path.join(base_dir, "financial_data.json"), "r") as f:
    financial_data = json.load(f)

# Create year directories
for year in range(2015, 2026):
    year_dir = os.path.join(base_dir, f"reports-{year}")
    os.makedirs(year_dir, exist_ok=True)
    
    data = financial_data[str(year)]
    
    # Create CSV export
    csv_file = os.path.join(year_dir, f"financial_report_{year}.csv")
    with open(csv_file, "w", newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["Category", "Amount (USD)"])
        writer.writerow(["INCOME STATEMENT", ""])
        writer.writerow(["Revenue", f"${data['revenue']:,}"])
        writer.writerow(["Cost of Goods Sold", f"${data['cogs']:,}"])
        writer.writerow(["Gross Profit", f"${data['gross_profit']:,}"])
        writer.writerow(["Gross Margin %", f"{data['gross_margin_percent']}%"])
        writer.writerow(["", ""])
        writer.writerow(["OPERATING EXPENSES", ""])
        writer.writerow(["Research & Development", f"${data['r_and_d']:,}"])
        writer.writerow(["Marketing", f"${data['marketing']:,}"])
        writer.writerow(["Sales", f"${data['sales']:,}"])
        writer.writerow(["General & Administrative", f"${data['general_admin']:,}"])
        writer.writerow(["Total Operating Expenses", f"${data['operating_expenses']:,}"])
        writer.writerow(["", ""])
        writer.writerow(["Operating Income", f"${data['operating_income']:,}"])
        writer.writerow(["Operating Margin %", f"{data['operating_margin_percent']}%"])
        writer.writerow(["Interest Expense", f"${data['interest_expense']:,}"])
        writer.writerow(["Taxes", f"${data['taxes']:,}"])
        writer.writerow(["Net Income", f"${data['net_income']:,}"])
        writer.writerow(["Net Margin %", f"{data['net_margin_percent']}%"])
        writer.writerow(["", ""])
        writer.writerow(["BALANCE SHEET", ""])
        writer.writerow(["Total Assets", f"${data['total_assets']:,}"])
        writer.writerow(["Cash", f"${data['cash']:,}"])
        writer.writerow(["Accounts Receivable", f"${data['accounts_receivable']:,}"])
        writer.writerow(["Inventory", f"${data['inventory']:,}"])
        writer.writerow(["Current Liabilities", f"${data['current_liabilities']:,}"])
        writer.writerow(["Long-term Debt", f"${data['long_term_debt']:,}"])
        writer.writerow(["Equity", f"${data['equity']:,}"])
        writer.writerow(["", ""])
        writer.writerow(["KEY METRICS", ""])
        writer.writerow(["Employees", data['employees']])
        writer.writerow(["Revenue per Employee", f"${data['revenue_per_employee']:,.0f}"])
    
    # Create JSON data file
    json_file = os.path.join(year_dir, f"financial_data_{year}.json")
    with open(json_file, "w") as f:
        json.dump(data, f, indent=2)

print("Year directories and CSV exports created!")

