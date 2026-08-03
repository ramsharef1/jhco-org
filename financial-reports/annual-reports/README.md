# Annual Reports Archive (2015-2025)

Comprehensive 10-year financial archive with full bilingual support (English/Spanish).

## Archive Contents

### Directory Structure
```
annual-reports/
├── index.html                          # Master index with trend charts
├── financial_data.json                 # Complete financial data (all years)
├── reports-2015/
│   ├── report_2015_en.html            # English report with charts
│   ├── report_2015_es.html            # Spanish report with charts
│   └── financial_report_2015.csv      # Excel-compatible data export
├── reports-2016/
├── reports-2017/
├── ... (through reports-2025/)
└── README.md                           # This file
```

### Coverage
- **Years**: 2015 - 2025 (11 annual reports)
- **Languages**: English (en) and Spanish (es)
- **Formats**: HTML reports, CSV exports, JSON data

## Files in Each Year

### 1. HTML Reports (Bilingual)
- `report_[year]_en.html` - Comprehensive English financial report
- `report_[year]_es.html` - Comprehensive Spanish financial report

**Features:**
- Executive summary
- Income statement
- Balance sheet
- Key metrics and KPIs
- Revenue breakdown (doughnut chart)
- Year-over-year growth calculations
- Profitability metrics
- Operational metrics

### 2. CSV Export
- `financial_report_[year].csv` - Standard CSV format for spreadsheet import

**Includes:**
- Income statement (revenue, COGS, expenses, net income)
- Balance sheet (assets, liabilities, equity)
- Key metrics (employees, revenue per employee)

### 3. JSON Data File
- `financial_data_[year].json` - Structured data for programmatic access

**Contains:**
- All financial metrics
- Operational data
- Calculated ratios and percentages

## Financial Data Summary

### 10-Year Growth
| Metric | 2015 | 2025 | Growth |
|--------|------|------|--------|
| Revenue | $2,000,000 | $7,414,442 | +270% |
| Net Income | $352,000 | $1,290,525 | +266% |
| Employees | 50 | 130 | +160% |
| Revenue/Employee | $40,000 | $57,034 | +42.6% |

### Key Metrics Included
- **Income Statement**: Revenue, COGS, Gross Profit, Operating Expenses, Net Income
- **Balance Sheet**: Total Assets, Cash, Receivables, Inventory, Liabilities, Equity
- **Margins**: Gross Margin %, Operating Margin %, Net Margin %
- **Efficiency**: Asset Turnover, Return on Equity
- **Operations**: Employee count, Revenue per employee

### Department Breakdown (Annual)
- Research & Development (8% of revenue)
- Marketing (7% of revenue)
- Sales (6% of revenue)
- General & Administrative (4% of revenue)

## How to Use

### Viewing Reports
1. Open `index.html` in a web browser for the master dashboard
2. Click any year to view detailed bilingual reports
3. Use language toggle buttons in reports to switch between English/Spanish
4. View interactive charts showing trends and breakdowns

### Downloading Data
- Individual year CSV files: Available in each year folder
- Complete JSON dataset: `financial_data.json` in root
- All data is easily importable to Excel, databases, or BI tools

### Integration
```python
import json

# Load all data
with open('financial_data.json') as f:
    data = json.load(f)

# Access specific year
year_2025 = data['2025']
print(f"2025 Revenue: ${year_2025['revenue']:,}")
print(f"Net Margin: {year_2025['net_margin_percent']}%")
```

## Report Features

### Interactive Charts
- Revenue trends (line chart)
- Net income progression (bar chart)
- Profitability margins (multi-line chart)
- Expense breakdown (doughnut chart)

### Key Statistics
- Year-over-year growth percentages
- Margin analysis
- Operational efficiency metrics
- Comparative year analysis

### Bilingual Support
All reports available in:
- **English (en)**: Full English financial terminology
- **Spanish (es)**: Complete Spanish financial terminology

Language can be toggled via buttons in each report.

## Data Specifications

### Financial Assumptions
- Base revenue growth: ~12% annually with variation
- Cost of Goods Sold: 35% of revenue
- Operating expenses: 25% of revenue
- Tax rate: 25% of operating income
- Employee growth: ~8 per year
- Asset base: 2.5x annual revenue

### Data Quality
- Consistent growth patterns across 10 years
- Realistic cost structures and margins
- Internal consistency (balance sheet balances)
- Year-over-year comparability

## Accessing the Archive

### Start Point
Open `index.html` in any modern web browser to:
- View interactive trend charts
- See 10-year summary statistics
- Access all individual reports
- Download complete data

### Direct Links
- Master Dashboard: `index.html`
- 2025 English Report: `reports-2025/report_2025_en.html`
- 2025 Spanish Report: `reports-2025/report_2025_es.html`
- Complete Data: `financial_data.json`

## Additional Resources

Each annual report includes:
- Executive summary highlighting key performance
- Detailed financial statements
- Profitability and efficiency analysis
- Comparative metrics with prior year
- Operational statistics

## Notes

- All financial data is dummy/sample data for demonstration
- Suitable for: presentations, training, demos, testing
- Charts require modern browser with JavaScript enabled
- Responsive design works on desktop and mobile devices
- CSV exports compatible with Excel, Google Sheets, etc.

---

**Archive Created**: 2026-08-03
**Data Range**: 2015-2025 (11 years)
**Bilingual**: English & Spanish
**Status**: Complete with all financial reports, charts, and exports
