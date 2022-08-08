import { CssBaseline } from '@mui/material' ;
import { ThemeProvider } from '@emotion/react';

import { purpletheme } from './';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpletheme }>
        <CssBaseline />

        { children }
    </ThemeProvider>
  )
}
