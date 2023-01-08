import styled from "styled-components";
import { COLORS } from "../../utils/ThemeConstants";

export const RoadmapTableContainer = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`


export const RoadmapCategoryContainer = styled.div`


`

export const RoadmapCategoryTitle = styled.div`
  color: ${COLORS.textGrayDark};
  margin-bottom: 2rem;
  & p{
    color: ${COLORS.textGrayLight};
    margin-top: .4rem;
  }
`

export const RoadmapItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

`

export const RoadmapItem = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 2rem;

  /* display: flex;
  flex-direction: column;
  gap: 1rem; */
  &:before{
    content: "";
    height: 5px;
    width: 100%;
    background-color: ${props => props.color};
    position: absolute;
    top: 0;
    left: 0;
  }

`

export const RoadmapItemDetail = styled.section`

  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;

  button{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  span.status{
    color: ${COLORS.textGrayLight};
    position: relative;
    padding-left: 1.4rem;
    text-transform: capitalize;
  }
  span.status:before{
    content: "";
    height: 8px;
    width: 8px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${props => props.color};
    border-radius: 50%;

  }

  h2{
    color: ${COLORS.darkBlueDark};
    font-size:1.2rem;
    font-weight: bold;
  }

  p{
    color: ${COLORS.textGrayDark}
  }
`

export const RoadmapSocials = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  .comments{
    display: flex;
    gap: .5rem;
    font-weight: bold;
    cursor: pointer;
  }

`