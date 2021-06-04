import styled from "styled-components"
import Color from "color"
import colors from "../../styles/colors"

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: var(--spacing-5);
  margin-bottom: var(--spacing-2);
  svg {
    margin-right: 15px;
    transition: all ease 0.5s;
  }

  svg:hover {
    stroke: ${Color(colors.red).darken(0.3)};
  }
`
