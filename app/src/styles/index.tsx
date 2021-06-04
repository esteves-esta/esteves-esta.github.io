import styled, { css } from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const RowTitle = styled(Row)`
  justify-content: start;
  margin-bottom: var(--spacing-6);
  div {
    padding-left: var(--spacing-6);
  }
`

export const Col = styled.div`
  margin-right: var(--spacing-5);
  margin-bottom: 15px;
  width: 65%;
`

export const Divider = styled.div`
  width: 100%;
  margin: var(--spacing-12) 0px;
`

export const MainTitle = styled.h1`
  margin: 0px;
`

export const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-12);
  font-weight: var(--fontWeight-normal);
`

export const SecundaryTitle = styled.h3`
  margin-top: var(--spacing-3);
  font-weight: var(--fontWeight-semibold);
`
