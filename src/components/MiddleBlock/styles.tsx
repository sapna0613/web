import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  text-align: justify; /* Ensures text spans both left and right */
  margin: 0 auto;
  line-height: 1.8rem; /* Line height for readability */
  font-size: 1.1rem; /* Slightly larger font size */
  word-wrap: break-word; /* Prevents breaking of long words */
  max-width: 800px; /* Text width stays readable on larger screens */

  @media only screen and (max-width: 768px) {
    max-width: 95%; /* Ensures good spacing on smaller screens */
  }
`;

export const ContentWrapper = styled("div")`
  max-width: 900px; /* Increased max-width to accommodate longer content */
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    max-width: 100%; /* Full-width on smaller screens */
  }

  h6 {
    font-size: 2rem; /* Larger font size for long titles */
    font-weight: bold;
    text-align: center; /* Centers the title */
    margin-bottom: 1.5rem; /* Extra spacing below the title */
    line-height: 2.2rem; /* Handles wrapping gracefully */
    word-wrap: break-word; /* Allows long titles to wrap */
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center; /* Centers the button */
  margin-top: 2rem; /* Spacing above the button */
`;
