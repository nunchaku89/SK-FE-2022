import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = React.useState('light');

  const themeConfig = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return <ThemeContext.Provider value={themeConfig} {...props} />;
};

// 사용자 정의 훅
export const useTheme = () => {
  // useContext 훅
  const themeConfig = React.useContext(ThemeContext);
  if (!themeConfig) throw new Error('');
  return themeConfig;
};
