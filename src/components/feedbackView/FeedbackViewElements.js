import styled from "styled-components";
import { COLORS } from "../../utils/ThemeConstants";
export const FeedbackViewContainer  = styled.section`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FeedbackViewNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const FeedbackViewHeading = styled.section`

`

export const FeedbackViewCommentsContainer = styled.section`
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  position: relative;
  

`

export const FeedbackViewComments = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

`
export const FeedbackViewCommentItem = styled.section`

`

export const FeedbackViewAddComment = styled.section`
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea{
    /* margin-top: 2rem; */
    background-color: ${COLORS.background};
    width: 100%;
    min-height: 6rem;
    resize: vertical;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 10px;
    transition: all .2s ease;
  
  }

  textarea:focus-visible{
    border: none;
    outline-color: ${COLORS.blueLight};
    outline-width: thin;
    outline-style: solid;
  }

  & > button{
    align-self: flex-end;
  }


`

export const FeedbackItem = styled.div`
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  position: relative;
  display: flex;

  gap: 2rem;
  overflow: hidden;
  
  & .details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    text-transform: capitalize;
    h2{
      transition: all .3s ease;
      color:${COLORS.textGrayDark}
    }
    p{
      color: ${COLORS.textGrayLight};
    }
  }

  & .comments{
    align-self: center;
    margin-left: auto;
    display: flex;
    gap: .5rem;
    cursor: default;
    font-weight: bold;
  }
  
`
