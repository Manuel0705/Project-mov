import themes from "./themes";
import { useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [themeMode, setThemeMode] = useState(themes.dark);
  const toggleTheme = () =>
    themeMode === themes.dark
      ? setThemeMode(themes.light)
      : setThemeMode(themes.dark);
  return (
    <>
      <DarkModeContext.Provider value={{ themeMode, toggleTheme }}>
        {props.childern}
      </DarkModeContext.Provider>
    </>
  );
};

export default { DarkModeContext, DarkModeProvider };
