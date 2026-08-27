CryptoVerse is a modern, single-page cryptocurrency market tracking platform designed to let users explore live prices and market data for major digital assets.
💻 Key Web Features & Implementation
Live Price Data & Performance Tracker:

The site automatically polls the CoinGecko API every 30 seconds to deliver live asset amounts, rendering custom + / - %

badge indicators to signal 24-hour market shifts.Dynamic Fiat Currency Toggle: Includes a quick-action conversion button that instantly switches global metrics between Indian Rupee (INR - ₹) and United States Dollar (USD - $).

Responsive Glassmorphism UI: Built with modern CSS custom properties using an elegant, blurred frosted-glass aesthetics framework (backdrop-filter) over an interactive dark ambient mesh background.

Fluid Layout & Brand Elements: Equipped with full navigation toggle functionality for optimized performance on smartphone screens.
<img width="1047" height="1008" alt="image_6232a972" src="https://github.com/user-attachments/assets/012cd9e0-0742-45cb-86b0-278c46341556" />

[ USER INTERFACE (HTML5/CSS3) ]
       │
       ├──► Navbar (Navigation & Active Currency Selector Toggle)
       │
       └──► Hero Content Banner (Visual Branding & Action Trigger)
               │
               └──► Coin Grid Cards (Live Crypto Metrics Display Nodes)
                       │
                       ├── Bitcoin  (₹/$ Amount | 24h Trend Indicator)
                       ├── Ethereum (₹/$ Amount | 24h Trend Indicator)
                       └── Dogecoin (₹/$ Amount | 24h Trend Indicator)
       ▲
       │ Updates DOM every 30s
       │
[ LOGIC ENGINE (Vanilla JavaScript Ecosystem) ]
       │
       ├──► state.currentCurrency ('inr' ◄──► 'usd')
       │
       └──► fetchLivePrices() Async Controller
               │
               └──► REST API Request Pipeline
                       │
                       ▼
[ EXTERNAL DATA INFRASTRUCTURE ]
       └──► CoinGecko Simple Price API Endpoints
