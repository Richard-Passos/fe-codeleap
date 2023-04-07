/* Logic */
import styled from "styled-components";

export const FormRowContainer = styled.div`
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-size: 1.6em;
  }

  input,
  textarea {
    padding: 0.8rem 1rem;
    font-size: 1.4em;
    border: 0.1rem solid ${({ theme }) => theme.colors.darkerGray};
    border-radius: 0.8rem;
    resize: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.ligtherGray};
    }
  }
`;
