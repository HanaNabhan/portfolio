# Hana Nabhan Sawan - Portfolio

A modern, responsive portfolio website showcasing my work as an AI Computer Engineer.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy to Customize**: Simple to update content, colors, and sections
- **GitHub Pages Ready**: Optimized for easy deployment on GitHub Pages
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Built With

- **Next.js 14** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **TypeScript** - Type-safe JavaScript

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles
├── components/ui/         # UI components (auto-generated)
├── lib/                   # Utility functions
└── public/               # Static assets
\`\`\`

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `app/page.tsx`
2. **Experience**: Update the experience cards with your work history
3. **Skills**: Modify the skills arrays in each category
4. **Projects**: Replace project cards with your own projects
5. **Contact**: Update contact information and social links

### Changing Colors

The color scheme can be easily modified in `app/globals.css`:

\`\`\`css
:root {
  --primary: 221.2 83.2% 53.3%;     /* Blue theme */
  --secondary: 210 40% 96%;
  /* Add your custom colors here */
}
\`\`\`

### Adding New Sections

To add new sections:

1. Create a new section in `app/page.tsx`
2. Add navigation link in the nav bar
3. Ensure proper spacing and responsive design

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as source
4. The site will be automatically deployed

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

\`\`\`bash
npm run build
npm run export
\`\`\`

Then upload the `out` folder to your hosting provider.

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Hana Nabhan Sawan**
