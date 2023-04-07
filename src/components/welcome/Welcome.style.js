/* Logic */
import styled from "styled-components";

export const AlignCenter = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomeContainer = styled.section`
  width: 50rem;
  max-width: 95%;
  margin: 0 auto;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h2 {
    font-size: 2.2em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    a {
      align-self: flex-end;
    }
  }
`;

export const EnterBtn = styled.button`
  width: 11.1rem;
  padding: 0.65rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6em;
  font-weight: 700;
  border: 0.1rem solid transparent;
  border-radius: 0.8rem;
  transition: 0.3s;

  :hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
