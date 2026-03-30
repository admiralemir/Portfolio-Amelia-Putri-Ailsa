# 📋 Quick Reference - All Placeholders

Copy and paste this to find all things you need to customize!

## 1️⃣ HERO SECTION
**File**: `src/components/HeroSection.tsx`

```
[Your Full Name]
[Your Title - e.g., UI/UX Designer / Product Manager / Student]
```

---

## 2️⃣ ABOUT SECTION
**File**: `src/components/AboutSection.tsx`

```
[Your Full Name]
[Your Profession]
[X]  ← Years of experience
[Your Specialization]
[Your Hobbies/Interests]
[Your City, Country]
[+62 123 4567 8900]
[your.email@example.com]

Stats (optional):
10+ → Projects Completed
5+ → Years of Experience  
50+ → Happy Clients
```

---

## 3️⃣ EDUCATION SECTION
**File**: `src/components/EducationSection.tsx`

For each education item:
```
[Degree Name - e.g., Bachelor of Science]
[University Name]
[2019 - 2023]
[Your Major] | GPA: [Your GPA]
```

Edit the `educationData` array to include your education.

---

## 4️⃣ SKILLS SECTION
**File**: `src/components/SkillsSection.tsx`

Edit the `skillsData` array:
```
{ name: "[Your Skill]", level: 85, category: "Soft Skills" or "Technical" }
```

Update badge list:
```
["Communication", "Teamwork", "Design", "Problem Solving", ...]
```

---

## 5️⃣ PROJECTS SECTION
**File**: `src/components/ProjectsSection.tsx`

For each project:
```
[Project Name 1]
[Brief description of your project]
[Your Role - e.g., Lead Designer]
[Project Type - e.g., UI/UX Design]
[2024]  ← Year
["Design", "Figma", "User Research"]  ← Tags
```

Edit the `projectsData` array.

---

## 6️⃣ CERTIFICATION SECTION
**File**: `src/components/CertificationSection.tsx`

For each certification:
```
[Certification Name 1]
[Issuing Organization]
[2024]
[Credential ID/URL]  ← Optional link
```

Edit the `certificationsData` array.

---

## 7️⃣ CONTACT SECTION
**File**: `src/components/ContactSection.tsx`

```
Email:
[your.email@example.com]

WhatsApp:
https://wa.me/[+62-phone-number]

Phone:
[+62 123 4567 8900]

Social Links:
https://linkedin.com → Update to your profile
https://instagram.com → Update to your profile
https://twitter.com → Update to your profile
```

---

## 8️⃣ FOOTER
**File**: `src/components/Footer.tsx`

```
[Your City]
```

The name "Amelia Putri Ailsa" appears in:
- Navbar (APA)
- Footer copyright
- Layout metadata

---

## 🖼️ IMPORTANT: PROFILE IMAGE

**File**: `public/profile.jpg`

⚠️ **REQUIRED**: Replace with your own professional photo!
- Size: Minimum 400x400px
- Format: JPG, PNG, or WebP
- Usage: Hero section profile picture

---

## 🌐 SOCIAL MEDIA LINKS

Update these in relevant components:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Instagram: `https://instagram.com/yourhandle`
- Twitter/X: `https://twitter.com/yourhandle`
- GitHub: `https://github.com/yourprofile`
- WhatsApp: `https://wa.me/62123456789` (without + or -)

---

## 🎨 COLORS (If you want to change)

**File**: `src/app/globals.css`

```css
:root {
  --soft-pink: #FADADD;           /* Main pink */
  --soft-pink-light: #FFC0CB;     /* Lighter pink */
  --soft-brown: #D2B48C;          /* Main brown */
  --soft-brown-medium: #C4A484;   /* Darker brown */
  --off-white: #FFF9F7;           /* Background */
  --text-dark: #4a4a4a;           /* Text color */
}
```

---

## ✅ CUSTOMIZATION CHECKLIST

- [ ] Replace `[Your Full Name]` everywhere
- [ ] Update title/role
- [ ] Add professional biography in About
- [ ] Update education history
- [ ] Customize skills and proficiency levels
- [ ] Add your projects with descriptions
- [ ] Add certifications/achievements
- [ ] Update contact information
- [ ] Replace profile.jpg with your photo
- [ ] Update social media links
- [ ] Test on mobile and desktop
- [ ] Deploy to Vercel/Netlify

---

## 🚀 DEPLOYMENT

When ready to deploy:

1. **Vercel** (Recommended):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Build locally**:
   ```bash
   npm run build
   npm run start
   ```

---

**Pro Tip**: Use Find & Replace (Ctrl+Shift+H in VS Code) to quickly replace all instances of placeholders!

Example:
- Find: `[Your Full Name]`
- Replace: `Sarah Anderson`
- Replace All

---

Last updated: 2024
