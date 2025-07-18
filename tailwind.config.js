/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1B365D', // deep navy
        'primary-foreground': '#FFFFFF', // white
        'secondary': '#2E5984', // lighter navy
        'secondary-foreground': '#FFFFFF', // white
        'accent': '#D4A574', // warm gold
        'accent-foreground': '#1A202C', // near black

        // Background Colors
        'background': '#FAFBFC', // subtle off-white
        'surface': '#FFFFFF', // pure white
        'surface-foreground': '#1A202C', // near black

        // Text Colors
        'text-primary': '#1A202C', // near black
        'text-secondary': '#4A5568', // medium gray

        // Status Colors
        'success': '#38A169', // professional green
        'success-foreground': '#FFFFFF', // white
        'warning': '#D69E2E', // balanced amber
        'warning-foreground': '#1A202C', // near black
        'error': '#E53E3E', // clear red
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E2E8F0', // light gray
        'border-muted': '#F7FAFC', // very light gray

        // Additional utility colors
        'muted': '#F7FAFC', // very light gray
        'muted-foreground': '#4A5568', // medium gray
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Roboto', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
        'sans': ['Source Sans Pro', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        'unit': '24px',
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'elevation-4': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'skeleton': 'loading 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
      },
      screens: {
        'xs': '475px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}