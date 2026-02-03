import React, { useState, useRef, useEffect } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

type ServiceCardsProps = {
    title?: string;
    description?: string;
    cards?: {
        title: string;
        description: string;
        image?: {
            src: string;
            alt: string;
        };
    }[];
};

export const ServiceCards: React.FC<ServiceCardsProps> = ({
    cards = [],
    description,
    title,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const calculateCardsPerPage = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(3);
            }
        };

        calculateCardsPerPage();
        window.addEventListener("resize", calculateCardsPerPage);
        return () => window.removeEventListener("resize", calculateCardsPerPage);
    }, []);

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const paginatedCards = cards.slice(
        currentPage * cardsPerPage,
        (currentPage + 1) * cardsPerPage
    );

    const handleArrow = (direction: "left" | "right") => {
        setCurrentPage((prev) => {
            if (direction === "left") {
                return Math.max(prev - 1, 0);
            } else {
                return Math.min(prev + 1, totalPages - 1);
            }
        });
    };

    return (
        <S.ServiceCardsStyled>
            <Container>
                {title && description && (
                    <FadeIn>
                        <S.ServiceCardsHeading>
                            <p>{description}</p>
                            <h2>{title}</h2>
                        </S.ServiceCardsHeading>
                    </FadeIn>
                )}
                <S.CarouselWrapper ref={containerRef}>
                    {currentPage > 0 && (
                        <S.ArrowButton left onClick={() => handleArrow("left")}>
                            ‹
                        </S.ArrowButton>
                    )}
                    <S.ServiceCardsGrid cardsPerPage={cardsPerPage}>
                        {paginatedCards.map((card, index) => (
                            <FadeIn key={index}>
                                <TextBox variant="background-text">
                                {card.image && (
                                <S.CardImage
                                    src={card.image.src}
                                    alt={card.image.alt}
                                />
                            )}
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </TextBox>
                            </FadeIn>
                        ))}
                    </S.ServiceCardsGrid>
                    {currentPage < totalPages - 1 && (
                        <S.ArrowButton onClick={() => handleArrow("right")}>
                            ›
                        </S.ArrowButton>
                    )}
                </S.CarouselWrapper>
            </Container>
        </S.ServiceCardsStyled>
    );
};


