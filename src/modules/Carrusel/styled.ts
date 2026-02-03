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
        color: ${Theme.highlight};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
        }
    }
`;

export const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ServiceCardsGrid = styled.div<{ cardsPerPage: number }>`
    display: grid;
    gap: 30px;
    grid-template-columns: ${({ cardsPerPage }) =>
        `repeat(${cardsPerPage}, minmax(0, 1fr))`};
    width: 100%;

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

    /* 🎯 Estilo de fondo con imagen decorativa */
    .withImage {
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 80px;
            background-image: url("/images/background-blanco.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            opacity: 0.2;
            z-index: 0;
        }

        > * {
            position: relative;
            z-index: 1;
        }
    }
`;

export const ArrowButton = styled.button<{ left?: boolean }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.left ? "left: -10px;" : "right: -10px;")}
    background-color: ${Theme.secondary};
    border: none;
    border-radius: 50%;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    z-index: 2;
    font-size: 1.5rem;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color: ${Theme.highlight};
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 12px;
`;
