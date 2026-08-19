import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

type Tema = 'Oscuro' | 'Claro' | 'Sistema';

interface ThemeContextType {
  tema: Tema;
  setTema: (tema: Tema) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {

  const [tema, setTema] = useState<Tema>(() => {
    const temaGuardado = localStorage.getItem('tema');

    if (
      temaGuardado === 'Oscuro' ||
      temaGuardado === 'Claro' ||
      temaGuardado === 'Sistema'
    ) {
      return temaGuardado;
    }

    return 'Oscuro';
  });

  useEffect(() => {

    const body = document.body;

    body.classList.remove(
      'theme-dark',
      'theme-light',
      'theme-system'
    );

    if (tema === 'Oscuro') {
      body.classList.add('theme-dark');
    }

    if (tema === 'Claro') {
      body.classList.add('theme-light');
    }

    if (tema === 'Sistema') {
      body.classList.add('theme-system');
    }

    localStorage.setItem('tema', tema);

  }, [tema]);

  return (
    <ThemeContext.Provider value={{ tema, setTema }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {

  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme debe utilizarse dentro de ThemeProvider'
    );
  }

  return context;
};