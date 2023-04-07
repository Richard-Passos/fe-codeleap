/* Logic */
import styled from "styled-components";

export const LayoutContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.layoutBg};
  color: ${({ theme }) => theme.colors.text};

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  min-height: calc(100vh - 16rem);
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
