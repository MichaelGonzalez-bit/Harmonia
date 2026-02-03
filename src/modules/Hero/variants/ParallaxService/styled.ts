import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import type { ParallaxImageProps } from "./ParallaxService";
import { MediaQuery } from "@styles/mediaQuery";

export const ParallaxImageStyled = styled.div<{
    $bgImage: ParallaxImageProps["image"];
}>`
    width: 100%;
    min-height: 457px;
    padding: 90px 20px;
    background-image: url(${({ $bgImage }) => $bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;

    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

export const ParallaxImageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;

    h1 {
        font-size: 90px;
        line-height: 90px;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 20px;
        color: ${Theme.primary};

        ${MediaQuery.max("lg")} {
            font-size: 50px;
            line-height: 50px;
        }
    }

    p {
        color: ${Theme.primary};
        max-width: 600px;
        margin: 0 auto;
        text-align: center;

        ${MediaQuery.max("lg")} {
            font-size: 14px;
            line-height: 20px;
        }
    }
`;


export const ParallaxButton = styled.button`
    position: absolute;
    right: 40px;
    bottom: 40px;
    padding: 12px 24px;
    background-color: ${Theme.secondary};
    color: ${Theme.primary};
    border: none;
    border-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    z-index: 2;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${Theme.highlight};
    }

    ${MediaQuery.max("md")} {
        right: 20px;
        bottom: 20px;
        font-size: 14px;
        padding: 10px 20px;
    }
`;
