Bendo POS Africa — Sales Analytics Dashboard
A Sales Analytics Dashboard built as part of the Bendo POS Africa Software Engineering Internship Assessment.



Preview

Live Demo: https://bendo-pos.vercel.app/

Why I Built This
Out of the five options given, I chose the Sales Analytics Dashboard because it directly reflects what Bendo POS delivers to African businesses — real-time visibility into sales performance. It also gave me the opportunity to demonstrate data visualization, component architecture, and UI design skills in a single project.

Features

KPI Cards — Total Revenue, Orders, Average Order Value, and Refunds with trend indicators
Revenue Trend Chart — Area chart showing sales performance over time
Sales by Category — Donut chart breaking down revenue by product category
Recent Transactions — Live transaction table with status indicators (Paid, Pending, Failed)
Top Products — Ranked list of best-selling products with visual progress bars
Date Filter — Switch between 7D, 30D, 90D, and 1Y views
Responsive Design — Works on desktop and mobile screens

Tech Stack
ToolPurposeReact.js + ViteFrontend framework and build toolRechartsChart and data visualization libraryPlain CSSStyling with CSS custom propertiesMock DataSimulated sales data via mockData.js

Project Structure

bendo-pos-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   ├── Topbar/
│   │   ├── KpiCard/
│   │   ├── RevenueChart/
│   │   ├── DonutChart/
│   │   ├── TransactionsTable/
│   │   └── TopProducts/
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   └── Dashboard/
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx


# Clone the repo
git clone https://github.com/Msaneeh/BendoPos

# Navigate into the project
cd BendoPos

# Install dependencies
npm install

# Start the development server
npm run dev

Then open http://localhost:5173 in your browser.



Design Decisions

Dark theme — Chosen for a modern, professional dashboard feel that reduces eye strain during long business sessions
Component-based architecture — Each UI section is a self-contained component making the codebase easy to maintain and scale
Centralized mock data — All data lives in mockData.js making it straightforward to swap in a real API later
Recharts over Chart.js — Recharts is built specifically for React, resulting in cleaner code with no manual DOM manipulation



Author
Sani Aliyu Muhammad Software Engineering Applicant — Bendo POS Africa Internship Program
