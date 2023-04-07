/* Style */
import { EnterBtn } from "../welcome";

/* Logic */
import styled from "styled-components";

export const CreatePostContainer = styled.section`
  width: 100%;
  padding: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
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
    gap: 2.4rem;

    a {
      align-self: flex-end;
    }
  }
`;

export const CreateBtn = styled(EnterBtn)`
  align-self: flex-end;
`;
