/* Logic */
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 8rem;
  padding: 0 3.7rem;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.2em;
  }
`;
