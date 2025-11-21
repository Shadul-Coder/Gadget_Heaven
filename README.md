# 💻 Gadget Heaven

**Live Demo:** [https://shadul-gadget-heaven.netlify.app/]

---

## 📋 Project Overview

**Gadget Heaven** is a modern and responsive **E-commerce web application** built using **React**.  
It focuses on selling electronic products across six major categories — **Laptops, Phones, Accessories, Smart Watches, MacBooks, and iPhones**.  
The website provides a smooth user experience with real-time feedback, beautiful UI components, and interactive charts.

---

## 🧭 Pages Overview

### 🏠 Home Page
- Displays all products by default.  
- Allows filtering products by **category**.  
- Each product card includes a **View Details** button that leads to a detailed product page.  
- Product details page contains **Add to Cart** and **Wishlist** options.  
- Products that are **out of stock** cannot be added to the cart but can still be wishlisted.

### 📊 Statistics Page
- Shows a **Composed Chart** representing:
  - Average Price  
  - Total Units Sold  
  - Rating

- For all six product categories.

### 🛒 Dashboard
- Contains **Cart** and **Wishlist** sections.  
- Cart items can be **sorted** by price in ascending or descending order.  
- Products can be **removed** from the cart or wishlist.  
- Wishlist items can be **added to the cart**.  
- Shows **toast notifications** for all key actions (add, remove, etc.).  
- The **purchase** button finalizes the order, empties the cart, and redirects to the Home page.  
- **Navbar indicators** show the status of items in both the cart and wishlist.

---

## 🚀 Key Features

- 🧩 Category-wise product filtering  
- 🔍 Detailed product pages  
- 💖 Wishlist and 🛒 Cart management  
- ⚙️ Sort cart items by price  
- 📈 Interactive statistics visualization  
- 🔔 Beautiful toast notifications for actions  
- 🧭 Persistent navbar indicators for cart and wishlist  
- ✅ Fully responsive for mobile device

---

## 🛠️ Technologies Used

| Category | Technologies |
|-----------|--------------|
| **Frontend Framework** | React |
| **Routing** | React Router |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React Icons |
| **Notifications** | React Hot Toast |
| **Data Handling** | JSON-based fake data fetch |
| **Charts** | Recharts (Composed Chart) |

---

## 🛠️ Installation & Local Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shadul-Coder/Gadget_Heaven.git
   cd Gadget_Heaven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application
