/* Logic */
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4em;
  }
`;
