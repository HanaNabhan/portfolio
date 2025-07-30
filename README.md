# Hana Nabhan Sawan - Portfolio

A modern, responsive dark-themed portfolio website showcasing my work as an AI Computer Engineer.

## 🚀 Quick GitHub Pages Setup

### Simple Branch Deployment (Recommended)

1. **Push your code** to your GitHub repository
2. **Go to Settings** → **Pages** in your repository
3. **Under Source**, select **"Deploy from a branch"**
4. **Choose your branch** (usually `main`)
5. **Select "/ (root)"** as the folder
6. **Click Save**

Your site will be live at: `https://yourusername.github.io/repository-name`

## 🛠️ Built With

- **Next.js 14** - React framework optimized for static export
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **TypeScript** - Type-safe JavaScript

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global dark theme styles
├── components/ui/         # UI components
├── lib/                   # Utility functions
└── public/               # Static assets
\`\`\`

## 🎨 Customization

### Updating Your Information

1. **Personal Details**: Edit the hero section in `app/page.tsx`
2. **Work Experience**: Update the experience cards
3. **Skills**: Modify the skills arrays in each category
4. **Projects**: Replace project cards with your own
5. **Contact Info**: Update social links and contact details

### Changing Colors

The dark theme colors can be modified in `app/globals.css`:

\`\`\`css
:root {
  --primary: 217.2 91.2% 59.8%;     /* Blue accent */
  --secondary: 217.2 32.6% 17.5%;   /* Dark gray */
  /* Customize your colors here */
}
\`\`\`

### Adding Your Profile Image

Replace the placeholder image in the hero section:
\`\`\`tsx
<img
  src="/your-profile-image.jpg"  // Add your image to public folder
  alt="Hana Nabhan Sawan"
  className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-2xl"
/>
\`\`\`

## 🌐 Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **Dark Theme** - Professional tech aesthetic
- ✅ **Static Export** - Perfect for GitHub Pages
- ✅ **SEO Optimized** - Proper meta tags and structure
- ✅ **Fast Loading** - Optimized performance
- ✅ **Accessible** - WCAG compliant design

## 📱 Sections

- **Hero** - Introduction and contact info
- **About** - Professional summary
- **Experience** - Work history and internships
- **Skills** - Technical and soft skills organized by category
- **Projects** - Featured technical projects with descriptions
- **Awards** - Achievements and competition results
- **Education** - University information
- **Contact** - Multiple ways to get in touch

## 🔧 Local Development

If you want to run locally:

\`\`\`bash
# Install dependencies (optional)
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Hana Nabhan Sawan**
