import { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

type Mode = 'light' | 'dark';
type ColorSchemeContextType = { mode: Mode; setMode: React.Dispatch<React.SetStateAction<Mode>> };
const ColorSchemeContext = createContext<ColorSchemeContextType>({ mode: 'light', setMode: () => {} });

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#ffffff"
    },
    text: {
      primary: "#000000",
      secondary: "rgba(0, 0, 0, 0.7)",
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000e1",
      paper: "#000000e1"
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    }
  },
});

export function useColorScheme() {
  return useContext(ColorSchemeContext);
}

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('light');
  const selectedTheme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ColorSchemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorSchemeContext.Provider>
  );
}