import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#131316',
      accent: '#FF5403',
    },
    gray: {
      50: '#EFF1F6',
      100: '#DBDEE5',
      500: '#56616B',
      700: '#131316',
      900: '#0A0A0A'
    },
    success: {
      50: '#E3FCF2',
      500: '#00AC56'
    }
  },
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  styles: {
    global: {
      body: {
        bg: '#EFF1F6',
        color: '#131316',
        fontFamily: 'body'
      }
    }
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px'
  },
  shadows: {
    sm: '0px 2px 4px rgba(0, 0, 0, 0.04)',
    md: '0px 4px 8px rgba(0, 0, 0, 0.08)',
  }
});

export default theme;
