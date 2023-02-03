import styled from "styled-components"

export const HomeContainer = styled.section`
  max-width: 1190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (width < 950px){
    flex-direction: column;
  }
`