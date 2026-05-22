# Eco Cameron Tours - Deployment Guide

## 🌟 What You Have

A fully functional, production-ready React + Tailwind CSS website with:
- ✅ Responsive design (mobile + desktop optimized)
- ✅ Smooth animations (Motion/Framer Motion)
- ✅ Multi-language support (English, Malay, Chinese)
- ✅ WhatsApp booking integration
- ✅ SEO-friendly routing
- ✅ Optimized performance

---

## 🚀 Deploy to ecocameron.com

### Method 1: Vercel (RECOMMENDED - Fastest)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Eco Cameron Tours"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/eco-cameron.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy" (Vercel auto-detects Vite)
6. Wait 2 minutes - your site is live!

#### Step 3: Connect ecocameron.com
1. In Vercel: **Settings** → **Domains**
2. Add `ecocameron.com`
3. Vercel shows DNS records to add:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Add these DNS records
6. Wait 5-60 minutes for DNS propagation
7. ✅ Done! Site live at ecocameron.com with HTTPS

---

### Method 2: Netlify

#### Step 1: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop this folder OR connect GitHub
3. Build settings auto-detected from `netlify.toml`
4. Click "Deploy site"

#### Step 2: Custom Domain
1. **Domain Settings** → **Add custom domain**
2. Add `ecocameron.com`
3. Follow Netlify's DNS instructions
4. ✅ Done! Auto HTTPS enabled

---

## 📦 Build Locally (Optional)

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

---

## 🔧 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Forms**: React Hook Form

---

## 📱 Features

- **Fully Responsive**: 320px to 4K displays
- **Multi-language**: English, Bahasa Melayu, 中文
- **WhatsApp Integration**: Direct booking links
- **SEO Optimized**: Clean URLs, meta tags
- **Performance**: Optimized images, lazy loading
- **Accessibility**: Keyboard navigation, ARIA labels

---

## 🌐 Domain Configuration

### Current Registrar Options:
- **GoDaddy**: Domain → DNS → Manage Zones
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: DNS → Custom records
- **Cloudflare**: DNS → Records

Add the DNS records provided by Vercel or Netlify.

---

## 📧 Support

For deployment help:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

---

## 🎉 Post-Deployment

After your site is live:
1. Test all pages and links
2. Verify WhatsApp integration
3. Check mobile responsiveness
4. Test language switcher
5. Submit to Google Search Console
6. Add Google Analytics (optional)

**Your professional tourism website is ready to accept bookings!** 🏔️
