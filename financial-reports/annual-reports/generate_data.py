import json
import csv
import os
from datetime import datetime

# Base directory
base_dir = "/Users/ramialsharef/Desktop/CLoudPros/jhco-org/financial-reports/annual-reports"

# Generate 10-year financial data (2015-2025)
def generate_financial_data():
    data = {}
    
    # Starting values
    base_revenue = 2000000  # $2M
    
    for year in range(2015, 2026):
        year_data = {}
        
        # Revenue grows at ~15% per year with some variation
        growth = 1.12 + (0.03 if year % 2 == 0 else 0.02)
        revenue = int(base_revenue * (growth ** (year - 2015)))
        
        # Cost of goods sold (35% of revenue)
        cogs = int(revenue * 0.35)
        
        # Gross profit
        gross_profit = revenue - cogs
        
        # Operating expenses (25% of revenue)
        operating_expenses = int(revenue * 0.25)
        
        # Operating income
        operating_income = gross_profit - operating_expenses
        
        # Interest and taxes
        interest_expense = int(revenue * 0.02)
        taxes = int((operating_income - interest_expense) * 0.25)
        
        # Net income
        net_income = operating_income - interest_expense - taxes
        
        # Departmental breakdown
        r_and_d = int(revenue * 0.08)
        marketing = int(revenue * 0.07)
        sales = int(revenue * 0.06)
        general_admin = int(revenue * 0.04)
        
        # Assets and liabilities
        total_assets = int(revenue * 2.5)
        cash = int(revenue * 0.15)
        accounts_receivable = int(revenue * 0.20)
        inventory = int(revenue * 0.10)
        current_liabilities = int(revenue * 0.30)
        long_term_debt = int(revenue * 0.40)
        equity = total_assets - current_liabilities - long_term_debt
        
        year_data = {
            "year": year,
            "revenue": revenue,
            "cogs": cogs,
            "gross_profit": gross_profit,
            "gross_margin_percent": round((gross_profit / revenue) * 100, 2),
            "operating_expenses": operating_expenses,
            "r_and_d": r_and_d,
            "marketing": marketing,
            "sales": sales,
            "general_admin": general_admin,
            "operating_income": operating_income,
            "operating_margin_percent": round((operating_income / revenue) * 100, 2),
            "interest_expense": interest_expense,
            "taxes": taxes,
            "net_income": net_income,
            "net_margin_percent": round((net_income / revenue) * 100, 2),
            "total_assets": total_assets,
            "cash": cash,
            "accounts_receivable": accounts_receivable,
            "inventory": inventory,
            "current_liabilities": current_liabilities,
            "long_term_debt": long_term_debt,
            "equity": equity,
            "employees": 50 + (year - 2015) * 8,
            "revenue_per_employee": round(revenue / (50 + (year - 2015) * 8), 0)
        }
        
        data[year] = year_data
    
    return data

# Generate and save data
financial_data = generate_financial_data()

# Save as JSON
with open(os.path.join(base_dir, "financial_data.json"), "w") as f:
    json.dump(financial_data, f, indent=2)

print("Financial data generated successfully!")
print(f"Years covered: 2015-2025")
print(f"Sample 2025 data: Revenue: ${financial_data[2025]['revenue']:,}")

