import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            fontSize: '11px',
            h1: {
              fontSize: '14px',
              fontWeight: 'bold',
            },
            h2: {
              fontSize: '12px',
              fontWeight: 'bold',
            },
            h3: {
              fontSize: '11px',
              fontWeight: 'bold',
            },
            p: {
              fontSize: '11px',
            },
          },
        },
        lg: {
          css: {
            maxWidth: '100%',
            fontSize: '12px',
            h1: {
              fontSize: '16px',
              fontWeight: 'bold',
            },
            h2: {
              fontSize: '14px',
              fontWeight: 'bold',
            },
            h3: {
              fontSize: '12px',
              fontWeight: 'bold',
            },
            p: {
              fontSize: '12px',
            },
          },
        },
      },
      lineClamp: {
        7: '7',
        8: '8',
        12: '12',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        asap: ['Asap', 'sans-serif'],
      },
      colors: {
        blue: "#480DEC",
        "blue-2": "#2600a1",
        tangerine: "#FF6600",
        "tangerine-2": "#e75d00",
        gray: "#A7ABB6",
        "gray-1": "#E0E0E0",
        "gray-2": "#4F4F4F",
        "gray-3": "#D9D9D9",
        "gray-4": "#BDBDBD",
        dark: "#202020",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        mobileJudul: '14px',
        mobileSubjudul: '12px',
        mobileDesk: '11px',
        webJudul: '16px',
        webSubjudul: '14px',
        webDesk: '12px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'),],

} satisfies Config;

export default config;
