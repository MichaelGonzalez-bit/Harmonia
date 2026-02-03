import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a
                            href="/service">Servicios</a>
                    </li>
                    <li>
                        <a href="/news">Novedades</a>
                    </li>
                    <li>
                        <a href="/testifies">Testimonios</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
