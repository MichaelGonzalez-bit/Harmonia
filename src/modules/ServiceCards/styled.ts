import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ServiceCardsStyled = styled.section`
    background: ${Theme.accent};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`;

export const ServiceCardsHeading = styled.div`
    color: ${Theme.secondary};

    margin-bottom: 40px;
    max-width: 550px;

    p {
        color: ${Theme.secondary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`;

export const ServiceCardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    h3 {
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.5px;
        opacity: 0.8;
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
        transform: scale(1.05);
    }

    ${MediaQuery.max("md")} {
        right: 20px;
        bottom: 20px;
        font-size: 14px;
        padding: 10px 20px;
    }
`;