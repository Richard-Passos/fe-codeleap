/* Style */
import { EnterBtn } from "../welcome";

/* Logic */
import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  font-size: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
  border-radius: 1.6rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    padding: 2.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      font-size: 2.2em;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .actions-container {
      flex: 0;
      display: flex;
      align-items: center;
      gap: 3.4rem;

      svg:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Container = styled.div`
  padding: 2.4rem;
  font-size: 1.8em;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .post-data {
    color: ${({ theme }) => theme.colors.gray};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    .author {
      font-weight: 700;
    }
  }
`;

export const CreateBtn = styled(EnterBtn)`
  align-self: flex-end;
`;
