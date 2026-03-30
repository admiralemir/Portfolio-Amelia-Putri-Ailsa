# Portfolio Amelia Putri Ailsa - Setup & Customization Guide

Welcome! Your beautiful portfolio website is ready to be personalized. This guide shows you exactly what to customize.

## 🎨 Design Features

✨ **Aesthetic & Elegant Design**
- Soft pastel colors (pink: #FADADD, brown: #D2B48C)
- Clean, modern layout with beautiful typography
- Smooth animations and transitions with Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- Soft shadows and rounded corners for a premium feel

## 📝 Customization Checklist

### 1. **Hero Section** (`src/components/HeroSection.tsx`)
Replace these placeholders:
```
[Your Full Name]           → Your actual name
[Your Title - e.g., UI/UX Designer / Product Manager / Student]
```

### 2. **About Section** (`src/components/AboutSection.tsx`)
Replace these placeholders:
```
[Your Full Name]           → Your name
[Your Profession]          → e.g., Product Designer, UI/UX Designer
[X]                        → Years of experience
[Your Specialization]      → e.g., Digital Design, User Experience
[Your Hobbies/Interests]   → e.g., photography, mountain hiking
[Your City, Country]       → Your location
[+62 123 4567 8900]       → Your phone number
[your.email@example.com]   → Your email address
```

Also update the stats (optional):
```
10+  → Number of projects
5+   → Years of experience  
50+  → Happy clients
```

### 3. **Education Section** (`src/components/EducationSection.tsx`)
Fill in your education history (3 examples provided):
```
[Degree Name - e.g., Bachelor of Science]
[University Name]
[2019 - 2023]
Major: [Your Major] | GPA: [Your GPA]
```

### 4. **Skills Section** (`src/components/SkillsSection.tsx`)
The skills are pre-configured with progress bars:
- Edit the `skillsData` array to match your skills
- Adjust percentage values (0-100)
- Change "Soft Skills" vs "Technical" categories
- Update the badge list at the bottom

Default skills include: Communication, Teamwork, Problem Solving, Leadership, UI/UX Design, Figma, Web Design, Prototyping

### 5. **Projects Section** (`src/components/ProjectsSection.tsx`)
Replace placeholders for each project:
```
[Project Name 1]          → Project title
[Brief description...]    → Project description
[Your Role - e.g., Lead Designer]
[Project Type - e.g., UI/UX Design]
```

Update tags with relevant skills: Design, Figma, User Research, etc.

### 6. **Certification Section** (`src/components/CertificationSection.tsx`)
Update your certifications:
```
[Certification Name 1]    → Certificate name
[Issuing Organization]    → e.g., Google, Coursera, Udemy
[2024]                   → Year
[Credential ID/URL]      → Link to certificate (optional)
```

### 7. **Contact Section** (`src/components/ContactSection.tsx`)
Update contact information:
```
[your.email@example.com]     → Your email
[+62 123 4567 8900]         → Your phone number
https://wa.me/[phone]       → Your WhatsApp link
https://linkedin.com        → Your LinkedIn profile
https://instagram.com       → Your Instagram profile
https://twitter.com         → Your Twitter profile
```

### 8. **Layout Config** (`src/app/layout.tsx`)
Already configured with:
- Poppins font (modern, clean)
- Scroll-smooth behavior
- Soft background color

### 9. **Profile Image** (`public/profile.jpg`)
1. Replace `/public/profile.jpg` with your professional photo
2. Supported formats: JPG, PNG, WebP (recommended size: 400x400px minimum)
3. For best results, use a high-quality professional headshot

## 🚀 Quick Start Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production version
npm start

# Lint code
npm run lint
```

Visit `http://localhost:3000` to see your portfolio!

## 📁 File Structure

```
app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          (Main layout - already configured)
│   │   ├── page.tsx            (Home page with all sections)
│   │   └── globals.css         (Tailwind CSS + custom styles)
│   └── components/
│       ├── Navbar.tsx          (Navigation with smooth scroll)
│       ├── HeroSection.tsx      (Hero with CTA buttons)
│       ├── AboutSection.tsx     (About & personal info)
│       ├── EducationSection.tsx (Education timeline)
│       ├── SkillsSection.tsx    (Skills with progress bars)
│       ├── ProjectsSection.tsx  (Projects with descriptions)
│       ├── CertificationSection.tsx (Certifications & achievements)
│       ├── ContactSection.tsx   (Contact form & info)
│       └── Footer.tsx           (Footer with links)
├── public/
│   └── profile.jpg             (Your profile photo - REPLACE THIS!)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.ts
```

## 🎯 Key Features

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth Scroll Navigation** - Fixed navbar with active section highlighting
✅ **Animations** - Subtle fade-in and slide animations with Framer Motion
✅ **Forms** - Contact form ready for integration
✅ **SEO Ready** - Proper metadata and semantic HTML
✅ **Dark Mode Ready** - Structure supports dark mode if desired
✅ **Accessibility** - Semantic HTML and proper contrast ratios
✅ **Performance** - Optimized images and lazy loading

## 🎨 Colors Used

- **Soft Pink**: #FADADD, #FFC0CB
- **Soft Brown**: #D2B48C, #C4A484
- **Off-white Background**: #FFF9F7
- **Text Dark**: #4a4a4a
- **Gray**: #999999, #666666

All colors are pre-configured in `globals.css`

## 📋 Optional Customizations

### Add More Projects
Edit `src/components/ProjectsSection.tsx` and add more items to the `projectsData` array.

### Change Colors
Edit `src/app/globals.css` and update the CSS variables:
```css
:root {
  --soft-pink: #FADADD;
  --soft-brown: #D2B48C;
  /* etc */
}
```

### Add Social Links
Update URLs in `HeroSection.tsx` and `ContactSection.tsx` for:
- LinkedIn
- Instagram
- Twitter/X
- GitHub
- Portfolio link

### Form Integration
The contact form in `ContactSection.tsx` is ready to be integrated with:
- Formspree
- Netlify Forms
- SendGrid
- Or your own backend

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and links
- Optimized spacing for small screens
- Hamburger menu ready (skeleton in place)

## 🔒 Deployment Recommendations

1. **Vercel** (Recommended for Next.js)
   - Free tier available
   - One-click deployment from GitHub
   - Automatic deployments on push

2. **Netlify**
   - Static site hosting
   - Form integration available

3. **GitHub Pages**
   - Free hosting with custom domain support

## 📞 Need Help?

All components are well-documented with clear structure. Each section has:
- Placeholder comments showing what to replace
- Reusable components for easy customization
- Smooth animations and transitions

---

**Last Updated**: 2024
**Created with**: Next.js 16, React 19, Tailwind CSS 4, Framer Motion
**Author**: Your Name Here

Enjoy your beautiful new portfolio! 🌸✨
