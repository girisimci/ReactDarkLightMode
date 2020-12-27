import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div style={{textAlign:"center",marginTop:15}}>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
      <GlobalStyles />
      <StyledApp >
        Renklen Dünya !
        <button onClick={() => themeToggler()} style={{height:50,width:70,borderRadius:5,marginLeft:5}}>Change</button>
      </StyledApp> 
    </ThemeProvider>
    </div>
  );
}

export default App;


