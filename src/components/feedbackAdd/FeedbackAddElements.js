import styled from "styled-components";
import { COLORS } from "../../utils/ThemeConstants";

export const FeedbackAddContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  
`
export const FeedbackAddFormContainer = styled.section`
  margin-top: 4rem;
  background-color: white;
  padding: 2rem;
  position: relative;
  border-radius: 10px;

  &:before{
    content: url("../../assets/shared/icon-new-feedback.svg");
    height: 4rem;
    width: 4rem;
    position: absolute;
    top: 0;
    left: 2rem;
    transform: translateY(-50%);
  }
  h2{
    color: ${COLORS.textGrayDark};
    font-weight: bold;
  }
  

`

// export const FeedbackAddForm = styled.form`
//   margin-top: 2rem;
//   div{
//     margin-bottom: 1.5rem;
//   }
//   input,
//   textarea{
//     width: 100%;
//     border-radius: 5px;
//     border: none;
//     background-color:rgb(247, 248, 253);
//     font-size: 1rem;
//     padding: 1rem;
//     margin-top: 1rem;
//   }
//   input:focus-visible,
//   textarea:focus-visible{
//     outline-color: ${COLORS.blueLight};
//     outline-width: thin;
//     outline-style: solid;
//   }
//   textarea{
//     min-height: 6rem;
//     resize: vertical
//   }
//   label{
//     color: ${COLORS.textGrayDark};
//     font-weight: bold;
//   }
//   p{
//     color:${COLORS.textGrayLight}

//   }

// `