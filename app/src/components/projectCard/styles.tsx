import styled, { css } from "styled-components"

export const Container = styled.div`
  padding: var(--spacing-5) var(--spacing-10);
  border: 2px solid rgba(234, 165, 31, 0.5);
  border-radius: 16px;
  margin: var(--spacing-10) 0px;

  h5 {
    margin-top: 0px;
    margin-bottom: var(--spacing-6);
    font-weight: var(--fontWeight-semibold);
    letter-spacing: 0.5px;
  }
`
export const Col = styled.div`
  width: 50%;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & > ${Col}:first-of-type {
    padding-right: 15px;
  }
`
