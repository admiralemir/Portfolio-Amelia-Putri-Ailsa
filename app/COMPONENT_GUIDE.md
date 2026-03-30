# 🎨 Component Reference Guide

Detailed breakdown of each component and how to customize them.

---

## 📌 Navbar Component
**File**: `src/components/Navbar.tsx`

### Features:
- Fixed navigation bar with smooth scroll
- Active section highlighting with animated underline
- Responsive design (mobile menu skeleton included)
- Glassmorphic effect when scrolled

### Customization:
```typescript
// Change nav items
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  // Add more sections here
];

// Change logo
<motion.div className="text-2xl font-bold gradient-text">
  APA  {/* Change this */}
</motion.div>
```

### What it does:
- Smooth scrolling to sections
- Highlights current section
- Responsive styling
- Glassmorphic background on scroll

---

## 🦸 Hero Section Component
**File**: `src/components/HeroSection.tsx`

### Features:
- Large eye-catching headline
- Profile image with gradient border
- CTA buttons (Contact & Download CV)
- Social media links
- Smooth animations on load

### Customize:
```typescript
// Update text
<span className="gradient-text">[Your Full Name]</span>
<span className="text-[#D2B48C] font-medium">
  [Your Title - e.g., UI/UX Designer]
</span>

// Update buttons
<motion.a href="#contact" className="btn-pink">
  Contact Me
</motion.a>
<motion.a href="#" className="btn-outline">
  Download CV
</motion.a>

// Update social links
<motion.a href="https://linkedin.com" target="_blank">
  {/* LinkedIn */}
</motion.a>
```

### Animation Options:
- Staggered animations for elements
- Hover effects on buttons
- Image hover zoom effect

---

## 👩 About Section Component
**File**: `src/components/AboutSection.tsx`

### Features:
- Two-column layout (text + info card)
- Stats display (projects, experience, clients)
- Personal information card
- Smooth scroll animation

### Customize:
```typescript
// Update biography paragraphs
<p className="text-lg text-gray-600 leading-relaxed">
  Hi there! I'm [Your Full Name]...
</p>

// Update stats
<p className="text-3xl font-bold gradient-text">10+</p>
<p className="text-gray-600">Projects Completed</p>

// Update info card
<div>
  <h4 className="text-lg font-semibold text-[#D2B48C]">📍 Location</h4>
  <p className="text-gray-600">[Your City, Country]</p>
</div>
```

### Data Structure:
Stats are displayed as cards with emojis:
- 📍 Location
- 📞 Phone
- ✉️ Email
- 🎓 Availability

---

## 🎓 Education Section Component
**File**: `src/components/EducationSection.tsx`

### Features:
- Timeline layout with animated dots
- Education cards with hover effects
- Year display
- Institution and major information

### Customize:
```typescript
const educationData: Education[] = [
  {
    title: "[Degree Name]",
    institution: "[University Name]",
    year: "[2019 - 2023]",
    description: "Major: [Your Major] | GPA: [Your GPA]",
  },
  // Add more education items
];
```

### Styling Options:
- Timeline dots animate on hover
- Cards slide in on scroll
- Change colors in globals.css

---

## ⚡ Skills Section Component
**File**: `src/components/SkillsSection.tsx`

### Features:
- Two-column layout (Soft Skills + Technical)
- Animated progress bars
- Skill badges at bottom
- Categorized skills

### Customize:
```typescript
const skillsData: Skill[] = [
  { name: "Communication", level: 90, category: "Soft Skills" },
  { name: "Figma", level: 88, category: "Technical" },
  // Add more skills
];

// Add more badges
["Adobe XD", "Sketch", "User Research", ...]
```

### Progress Bar Features:
- Animates on scroll into view
- Smooth duration animations
- No animation glitches on mobile

---

## 💼 Projects Section Component
**File**: `src/components/ProjectsSection.tsx`

### Features:
- 2-column grid layout
- Card hover effects with elevation
- Tag system for technologies
- "View Project" link on hover
- Year display

### Customize:
```typescript
interface Project {
  title: string;
  description: string;
  role: string;
  type: string;
  year: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    title: "[Project Name]",
    description: "[Brief description]",
    role: "[Your Role]",
    type: "[Project Type]",
    year: "2024",
    tags: ["Design", "Figma"],
  },
  // Add more projects
];
```

### Hover Effects:
- Card lifts up with shadow
- "View Project" link appears
- Smooth transitions

---

## 🏆 Certification Section Component
**File**: `src/components/CertificationSection.tsx`

### Features:
- Grid layout for certificates
- Icon/emoji display
- Credential links
- Hover animations

### Customize:
```typescript
interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

const certificationsData: Certification[] = [
  {
    name: "[Certification Name]",
    issuer: "[Organization]",
    year: "2024",
    credentialId: "[URL or ID]",
  },
  // Add more certifications
];
```

### Features:
- Emoji rotates on hover (🏆)
- Click "View Credential" to open link
- Responsive 2-column grid

---

## 📧 Contact Section Component
**File**: `src/components/ContactSection.tsx`

### Features:
- Contact form with validation
- Contact information cards
- Social media links
- Animated form inputs
- WhatsApp integration

### Customize:
```typescript
// Contact cards
<motion.a href="mailto:[your.email@example.com]">
  {/* Email card */}
</motion.a>

<motion.a href="https://wa.me/[+62-phone]">
  {/* WhatsApp card */}
</motion.a>

// Social links
<motion.a href="https://linkedin.com">
  {/* LinkedIn */}
</motion.a>
```

### Form Handling:
Currently shows form submission in console. To enable email:
- Use Formspree (free tier)
- Use Netlify Forms
- Build your own backend API

```typescript
// Example with Formspree
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/your-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Input Styling:
- Border color changes on focus
- Smooth scale animation
- Light background color

---

## 🔗 Footer Component
**File**: `src/components/Footer.tsx`

### Features:
- 3-column footer layout
- Quick links
- Contact information
- Social media links
- Back-to-top button
- Copyright notice

### Customize:
```typescript
// Add/remove quick links
["Home", "About", "Projects", "Contact"]

// Update brand info
<h3 className="text-2xl font-bold gradient-text">APA</h3>
<p>Personal portfolio showcasing...</p>

// Update current year (automatic)
© {currentYear} Amelia Putri Ailsa
```

### Back-to-Top Button:
- Appears as fixed button in bottom-right
- Smooth scroll animation
- Hover effects

---

## 🎨 Global Styles & Colors
**File**: `src/app/globals.css`

### Pre-defined Utilities:
```css
.card-soft          /* Soft shadow + rounded cards */
.btn-primary        /* Base button styles */
.btn-pink           /* Pink gradient button */
.btn-brown          /* Brown gradient button */
.btn-outline        /* Outlined button */
.section-container  /* Max-width + padding */
.gradient-text      /* Pink to brown gradient text */
```

### Custom Theme Colors:
```css
--soft-pink: #FADADD;
--soft-pink-light: #FFC0CB;
--soft-brown: #D2B48C;
--soft-brown-medium: #C4A484;
--off-white: #FFF9F7;
--text-dark: #4a4a4a;
```

---

## 🎬 Animation Options (Framer Motion)

### Common Animation Patterns Used:

**Staggered Children**: Items animate one after another
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
```

**Scroll into View**: Animate when element enters viewport
```typescript
<motion.div
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

**Hover Effects**:
```typescript
whileHover={{ scale: 1.05, y: -4 }}
whileTap={{ scale: 0.95 }}
```

---

## 📱 Responsive Breakpoints

portfolio uses Tailwind CSS responsive breakpoints:
- `md:` - Tablet & desktop (768px+)
- `lg:` - Large desktop (1024px+)
- Mobile first approach

---

## ⚙️ Configuration Files

### `next.config.ts`
- Next.js configuration
- Build optimization settings

### `tailwind.config.js`
- Tailwind CSS configuration
- Custom theme colors and fonts

### `tsconfig.json`
- TypeScript configuration
- Path aliases (`@/components`)

---

## 🔍 Debugging Tips

1. **Check console for errors**: `npm run dev`
2. **Inspect element styles**: Browser DevTools
3. **Test animations**: Reduce motion in browser settings
4. **Mobile testing**: Use DevTools mobile view
5. **Component props**: Use TypeScript for IDE hints

---

## 🚀 Performance Tips

1. **Images**: Optimize before uploading (TinyPNG)
2. **Animations**: Keep them subtle (duration < 1s)
3. **Lazy Loading**: Images lazy load by default
4. **Code Splitting**: Each route automatically split
5. **Fonts**: Poppins loads only what's used

---

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)

---

Happy customizing! 🎨✨
