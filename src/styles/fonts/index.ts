import { css } from "@emotion/react";
import {
    OrbitronRegular,
    OrbitronMedium,
    OrbitronBold,
    OrbitronBlack,
} from "@static/fonts";

export enum Fonts {
    primary = `"Orbitron", sans-serif`,
}

export const FontFace = css`
    @font-face {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 400;
        src: url(${OrbitronRegular}) format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 500;
        src: url(${OrbitronMedium}) format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 700;
        src: url(${OrbitronBold}) format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 900;
        src: url(${OrbitronBlack}) format("woff2");
        font-display: swap;
    }
`;
