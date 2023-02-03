import styled from "styled-components";
import bg from "../../../assets/suggestions/desktop/background-header.png"
import { COLORS, FONT } from "../../../utils/ThemeConstants";

export const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
  position: sticky;
  top: 2rem;
  align-self: flex-start;

  & > div{
    border-radius: 10px;
    padding: 1.5rem;
    min-height: 10rem;
    
  }

  @media (width < 950px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    top: 0;
    width: 100%;
    max-width: fit-content;
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  & > p{
    color: ${COLORS.grayDark};
    font-size: .9rem;
    opacity: .9;
    margin-top: .5rem;
  }
`

export const TagsContainer = styled.div`
  background-color: ${COLORS.white};
  & > ul{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  & > ul li {
    list-style: none;
    display: inline-block;

  }
`

export const RoadmapContainer = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div{
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2{
      color: ${COLORS.textGrayDark};
    }

    a{
      cursor: pointer;
      text-decoration: underline;
      color: ${COLORS.blue};
      background-color: white;
      font-weight: 600;
      transition: color .3s ease;
      &:hover{
        opacity: .6;
      }
    }
  }
`

export const RoadList = styled.ul`
  list-style: none;
`

export const RoadListItem = styled.li`
  
  position: relative;
  display: flex;
  align-items: center;
  color: ${COLORS.textGrayLight};
  margin-bottom: .8rem;
  &:before{
    content: "";
    display: block;
    background-color: ${props => props.color};
    border-radius: 100%;
    height: .5rem;
    width: .5rem;
    margin-right: 1.6rem;
  }

  &:after{
    content: attr(data-count);
    position: absolute;
    right: 0;
    font-weight: 600;
  }

  &:last-of-type{
    margin-bottom: 0;
  }
`