/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['Space Grotesk', 'Inter', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', 'monospace'],
        // Legacy fonts
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },

      // Custom Colors from Design System
      colors: {
        primary: {
          50: 'hsl(240, 100%, 98%)',
          100: 'hsl(240, 95%, 95%)',
          200: 'hsl(242, 90%, 88%)',
          300: 'hsl(243, 85%, 78%)',
          400: 'hsl(244, 80%, 68%)',
          500: 'hsl(245, 75%, 58%)',
          600: 'hsl(246, 70%, 48%)',
          700: 'hsl(247, 65%, 38%)',
          800: 'hsl(248, 60%, 28%)',
          900: 'hsl(249, 55%, 18%)',
        },
        accent: {
          cyan: {
            light: 'hsl(184, 81%, 75%)',
            DEFAULT: 'hsl(184, 81%, 61%)',
            dark: 'hsl(184, 81%, 45%)',
          },
          magenta: {
            light: 'hsl(310, 82%, 80%)',
            DEFAULT: 'hsl(310, 82%, 66%)',
            dark: 'hsl(310, 82%, 50%)',
          },
          purple: {
            light: 'hsl(267, 100%, 70%)',
            DEFAULT: 'hsl(267, 100%, 57%)',
            dark: 'hsl(267, 100%, 45%)',
          },
        },
        neutral: {
          50: 'hsl(220, 20%, 98%)',
          100: 'hsl(220, 18%, 95%)',
          200: 'hsl(220, 16%, 88%)',
          300: 'hsl(220, 14%, 75%)',
          400: 'hsl(220, 12%, 60%)',
          500: 'hsl(220, 10%, 45%)',
          600: 'hsl(220, 12%, 35%)',
          700: 'hsl(220, 14%, 25%)',
          800: 'hsl(220, 16%, 15%)',
          900: 'hsl(220, 18%, 8%)',
        },
        // Legacy gradient colors
        'custom-gradient-start': '#004aad',
        'custom-gradient-end': '#cb6ce6',
        'custom-gradient-start-alt': '#5de0e6',
        'custom-gradient-end-alt': '#8028ff',
      },

      // Background Images & Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(245, 75%, 58%) 0%, hsl(267, 100%, 57%) 100%)',
        'gradient-accent': 'linear-gradient(135deg, hsl(184, 81%, 61%) 0%, hsl(310, 82%, 66%) 100%)',
        'gradient-sunset': 'linear-gradient(135deg, hsl(330, 100%, 65%) 0%, hsl(45, 100%, 60%) 100%)',
        'gradient-ocean': 'linear-gradient(135deg, hsl(200, 100%, 45%) 0%, hsl(270, 100%, 55%) 100%)',
        'gradient-radial-primary': 'radial-gradient(circle at top left, hsl(184, 81%, 61%), hsl(267, 100%, 57%))',
        'gradient-radial-dark': 'radial-gradient(circle at bottom right, hsl(220, 16%, 15%), hsl(220, 18%, 8%))',
        // Legacy gradients
        'gradient-custom': 'linear-gradient(90deg, #004aad, #cb6ce6)',
        'gradient-custom-alt': 'linear-gradient(90deg, #5de0e6, #8028ff)',
      },

      // Box Shadows
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(93, 224, 230, 0.4), 0 0 40px rgba(93, 224, 230, 0.2)',
        'glow-magenta': '0 0 20px rgba(203, 108, 230, 0.4), 0 0 40px rgba(203, 108, 230, 0.2)',
        'glow-purple': '0 0 20px rgba(128, 40, 255, 0.4), 0 0 40px rgba(128, 40, 255, 0.2)',
        'soft': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },

      // Backdrop Blur
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },

      // Custom Animations
      animation: {
        'gradient-x': 'gradient-x 8s ease-in-out infinite alternate',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite',
        'float-3d': 'float-3d 6s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },

      // Keyframes
      keyframes: {
        'gradient-x': {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '100% center' },
        },
        'float-slow': {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        'float-slower': {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(30px) translateX(-15px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease-in-out infinite alternate',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite',
      },

    },
  },
  plugins: [],
};