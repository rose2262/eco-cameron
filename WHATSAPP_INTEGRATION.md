# WhatsApp Booking Integration - Eco Cameron Tours

## 📱 Overview

Complete WhatsApp integration across the entire website for seamless booking and inquiries.

**Phone Number**: +60 12 583 7277  
**WhatsApp Number**: 60125837277 (without + or spaces)

---

## ✨ Features Implemented

### 1. **Centralized Utility Functions**
Location: `/src/app/utils/whatsapp.ts`

```typescript
// Generate WhatsApp link with custom message
generateWhatsAppLink(tourName?, context?)

// Open WhatsApp in new tab/app
openWhatsApp(tourName?, context?)

// Get formatted phone number
getDisplayNumber() // Returns: "+6012 583 7277"
```

### 2. **Dynamic Messaging System**

**Three levels of messages**:

1. **Default Message** (no parameters):
   ```
   "Hello, I'm interested in booking a tour from the Eco Cameron website."
   ```

2. **Tour-Specific Message** (with tour name):
   ```
   "Hello, I'm interested in the [Tour Name] from the Eco Cameron website."
   ```

3. **Advanced Message** (with tour name + context):
   ```
   "Hello, I visited your Eco Cameron website and clicked the booking button for the [Tour Name]. I would like more details."
   ```

---

## 🔗 Integration Points

### Navigation Bar
- **Desktop Menu**: Book Now button with WhatsApp icon
- **Mobile Menu**: Book Now button with WhatsApp icon
- **Sticky Mobile Button**: Always visible at bottom on homepage

### Call-to-Action (CTA) Section
- **Main Book Button**: Large prominent WhatsApp button
- **Phone Number**: Clickable, opens WhatsApp with inquiry message

### Tour Detail Pages
- **Book via WhatsApp**: Dynamic button with tour name
- **Contact Us**: WhatsApp contact with tour context
- **Sticky Mobile Button**: Tour-specific booking button

### Footer
- **Phone Number**: Clickable WhatsApp link
- **Book Now Link**: Direct WhatsApp booking
- **Email**: Traditional mailto link (backup contact)

---

## 🎯 Message Examples by Location

### Homepage - Main CTA
```
"Hello, I'm ready to book a tour! Please send me more information."
```

### Tour Detail - Mossy Forest Tour
```
"Hello, I visited your Eco Cameron website and clicked the booking button for the Mossy Forest Tour. I would like more details."
```

### Footer - Phone Click
```
"I found your contact in the footer. I'd like to inquire about your tours."
```

### Navbar - Book Now
```
"I'd like to book a tour."
```

---

## 📱 Mobile Experience

### How It Works:
1. User clicks any "Book Now" or contact button
2. **On Mobile**: Opens WhatsApp app directly
3. **On Desktop**: Opens WhatsApp Web in new tab
4. Message is pre-filled with context
5. User just needs to hit send

### Sticky Buttons:
- **Homepage**: Sticky "Book Now" button at bottom (mobile only)
- **Tour Pages**: Sticky tour-specific button at bottom (mobile only)
- Both buttons have WhatsApp icon for clarity

---

## 🎨 Visual Design

### Icons
All booking buttons include WhatsApp icon (`MessageCircle` from Lucide React)

### Button Styles
- **Primary**: Green background (`bg-emerald-600`)
- **Secondary**: White border with hover effect
- **Hover**: Scale animation + color change
- **Active**: Darker shade feedback

### Accessibility
- All buttons have `min-h-[48px]` for easy tapping
- Proper spacing between elements
- Clear labels and icons
- Opens in new tab with `rel="noopener noreferrer"`

---

## 🔧 Customization

### Change Phone Number
Edit `/src/app/utils/whatsapp.ts`:
```typescript
const WHATSAPP_NUMBER = '60125837277'; // Change this
```

### Modify Default Messages
Edit the `generateWhatsAppLink()` function in the same file.

### Add New WhatsApp Button
```tsx
import { generateWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

<a
  href={generateWhatsAppLink('Tour Name', 'Custom context')}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white"
>
  <MessageCircle size={18} />
  Book Now
</a>
```

---

## 📊 Link Format

### Standard WhatsApp URL:
```
https://wa.me/60125837277?text=Your%20message%20here
```

### How It's Generated:
1. Base URL: `https://wa.me/`
2. Phone number: `60125837277` (country code + number, no spaces)
3. Message parameter: `?text=` + URL-encoded message
4. Encoding: `encodeURIComponent()` handles spaces and special characters

---

## ✅ Testing Checklist

Before deployment, test:
- [ ] All navbar buttons (desktop + mobile)
- [ ] CTA section main button
- [ ] Tour detail page buttons
- [ ] Sticky mobile buttons
- [ ] Footer phone number link
- [ ] Message content is correct
- [ ] Opens in new tab
- [ ] WhatsApp app opens on mobile
- [ ] Icons display correctly
- [ ] Buttons are tappable (min 44px height)

---

## 🌍 Multi-Language Support

WhatsApp messages are currently in English. To add translated messages:

1. Add translations to language context
2. Use `t('whatsapp.message')` in utility function
3. Pass language parameter to `generateWhatsAppLink()`

---

## 🚀 Performance

- **Zero External Dependencies**: Uses native WhatsApp URL scheme
- **No API Calls**: Direct link, instant response
- **Lightweight**: <1KB utility file
- **Fast Loading**: Icons from existing Lucide React package

---

## 📞 Fallback Options

### If WhatsApp Fails:
1. **Email**: ecocameron@outlook.com (available in footer)
2. **Phone Call**: Display number is clickable
3. **Form**: Consider adding contact form as backup

### Browser Compatibility:
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ All mobile devices (iOS, Android)
- ✅ WhatsApp Web for desktop users
- ✅ Degrades gracefully if WhatsApp not installed

---

## 🔒 Privacy & Security

- No data collection from WhatsApp integration
- Opens in new tab (`_blank`) with security attributes
- User controls what message to send
- No tracking scripts or analytics on WhatsApp links

---

## 📈 Conversion Optimization

### Best Practices Implemented:
1. **Clear Call-to-Action**: Green buttons stand out
2. **Low Friction**: Pre-filled messages save typing
3. **Context Awareness**: Messages include tour names
4. **Visible Icons**: WhatsApp icon builds trust
5. **Mobile Sticky Buttons**: Always accessible
6. **Multiple Entry Points**: Every page has booking option

---

## 🎉 Result

**Seamless booking experience where users can instantly contact via WhatsApp with:**
- ✅ Clear, pre-filled messages
- ✅ Tour context automatically included
- ✅ One-click booking on mobile
- ✅ Professional, reliable communication
- ✅ Fast response time (WhatsApp notifications)

**Your customers can now book tours in seconds!** 🏔️
