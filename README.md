# 💳 Pricing Table

A modern, responsive, and interactive pricing table built with **HTML5 + CSS3 + Vanilla JavaScript**.

![Pricing Table](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 Features

✅ **CSS Grid Layout** - Professional 3-column structure  
✅ **Responsive Design** - Compatible with mobile, tablet, and desktop  
✅ **Hover Animations** - Transform & transition effects  
✅ **Monthly / Yearly Toggle** - Dynamic price switching with JavaScript  
✅ **CSS Variables** - Easy customization  
✅ **Modern Gradient** - Eye-catching background  
✅ **SVG Icons** - Scalable check marks  
✅ **Box Shadow Effects** - Depth perception  

---

## 📁 Project Structure

```
Pricing/
│
├── index.html       # Main HTML structure
├── style.css        # CSS Grid, Animations, Responsive
├── script.js        # Toggle and interactive features
└── README.md        # Project documentation
```

---

## 🛠️ Technologies Used

### HTML5
- Semantic tags (`<section>`, `<div>`)
- List structure (`<ul>`, `<li>`)
- SVG icons
- Button elements

### CSS3
- **CSS Grid** → `grid-template-columns: repeat(3, 1fr)`
- **Flexbox** → Element alignment
- **CSS Variables (`:root`)** → Color and spacing management
- **Media Queries** → Responsive design
- **Transitions** → Smooth animations
- **Transform** → `translateY(-10px)` hover effect
- **Box Shadow** → Depth effect
- **Border Radius** → Modern appearance
- **Backdrop Filter** → Blur effect for toggle

### JavaScript
- DOM Manipulation
- Event Listeners (`change`, `click`, `load`)
- Data Attributes (`data-monthly`, `data-yearly`)
- Dynamic content update
- Smooth transitions

---

## 📱 Responsive Breakpoints

```css
Desktop (>992px)   → 3-column grid
Tablet  (768-992px) → 2-column grid, featured card full width
Mobile  (<768px)   → 1-column grid
Small   (<480px)   → Optimized padding and font sizes
```

---

## 🎨 CSS Grid Structure

```css
.pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
```

**Responsive Changes:**
```css
@media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

---

## ✨ Hover Animation

```css
.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: #6366f1;
}
```

**Transition:**
```css
transition: all 0.3s ease;
```

---

## 🔄 Monthly / Yearly Toggle

Dynamic price switching with JavaScript:

```javascript
toggle.addEventListener('change', function() {
    const isYearly = this.checked;
    updatePrices(isYearly);
});
```

**Data Attributes:**
```html
<span class="price" data-monthly="99" data-yearly="950">99</span>
```

---

## 🎯 CSS Variables Usage

For easy customization:

```css
:root {
    --primary-color: #6366f1;
    --spacing-lg: 2rem;
    --radius-md: 1rem;
    --transition-base: 0.3s ease;
}
```

**Usage:**
```css
background: var(--primary-color);
padding: var(--spacing-lg);
```

---

## 🖥️ Installation and Setup

### 1️⃣ Download the Project

```bash
git clone <repo-url>
cd Pricing
```

### 2️⃣ Open in Browser

```bash
# With simple HTTP server (Python 3)
python3 -m http.server 8000

# or open the file directly
open index.html
```

### 3️⃣ Using Live Server (VS Code)

You can use the **Live Server** extension in VS Code:
- Right-click on `index.html`
- Select "Open with Live Server"

---

## 🎨 Customization

### Changing Colors

Edit the `:root` section in the `style.css` file:

```css
:root {
    --primary-color: #your-color;
    --primary-dark: #your-dark-color;
}
```

### Changing Number of Packages

Add/remove `.pricing-card` blocks in the `index.html` file.  
Update the grid column count in the `style.css` file:

```css
.pricing-cards {
    grid-template-columns: repeat(4, 1fr); /* For 4 cards */
}
```

### Changing Font

Change the Google Fonts link:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

---

## 📸 Screenshots

### Desktop
- 3-column grid layout
- Hover animations active
- Featured card highlighted

### Mobile
- 1-column stack layout
- Touch-friendly buttons
- Optimized spacing

---

## 🔍 Learning Concepts

With this project, you can learn:

✅ CSS Grid Layout fundamentals  
✅ Responsive design principles  
✅ CSS Variables usage  
✅ Transform & transition animations  
✅ DOM manipulation with JavaScript  
✅ Event handling  
✅ Data attributes usage  
✅ Modern CSS features (backdrop-filter, box-shadow)  

---

## 📝 Notes

- **No frameworks used** (Pure HTML/CSS/JS)
- **Grid logic** clearly demonstrated
- **Production-ready** code structure
- **SEO-friendly** HTML5 semantic tags
- **Accessibility** ready for enhancement (ARIA attributes can be added)

---

## 📜 License

MIT License - Feel free to use as you wish.

---

## 👨‍💻 Developer

Developed as a **portfolio project**.

---

## 🌟 Improvement Suggestions

- [ ] Add dark mode
- [ ] Package comparison table
- [ ] FAQ accordion
- [ ] Payment integration (Stripe/PayPal)
- [ ] Backend API connection
- [ ] User reviews section
- [ ] Multi-language support

---

**🚀 Happy Coding!**
