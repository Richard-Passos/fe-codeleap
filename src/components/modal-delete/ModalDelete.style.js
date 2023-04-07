/* Style */
import { EnterBtn } from "../welcome";

/* Logic */
import styled from "styled-components";

export const AlignCenter = styled.div`
  height: 100vh;
  background-color: rgba(119, 119, 119, 0.5);

  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDeleteContainer = styled.div`
  width: 66rem;
  max-width: 95%;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    font-size: 2.2em;
  }

  .actions {
    align-self: flex-end;
    display: flex;
    gap: 1.6rem;
  }
`;

export const CancelBtn = styled(EnterBtn)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.text};
`;

export const DeleteBtn = styled(EnterBtn)`
  background-color: ${({ theme }) => theme.colors.danger};
`;
