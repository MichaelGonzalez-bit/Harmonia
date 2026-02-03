import { css } from "@emotion/react"; 

export const Colors = {
    white: "#FFFFFF",  // Marfil Claro, más cálido que el blanco puro
    primary: "#00A86B", // Verde Esmeralda
    secondary: "#005F73", // Azul Profundo
    accent: "#E3C770", // Dorado Solar
    highlight: "#A992E2", // Lavanda Suave
    warm: "#285840", 
    background: "#E8D8C4", 
    
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.primary};
        --secondary: ${Colors.secondary};
        --accent: ${Colors.accent};
        --highlight: ${Colors.highlight};
        --warm: ${Colors.warm};
        --background: ${Colors.background};
        --text: ${Colors.white}; 
    }
`;

export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
    highlight: "var(--highlight)",
    warm: "var(--warm)",
    background: "var(--background)",
    text: "var(--text)",
};
