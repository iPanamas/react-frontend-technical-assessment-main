import styled from '@emotion/styled';

export const FormWrapper = styled.section`
  padding: 30px 21px 64px 21px;
  position: relative;
  background-color: var(--white);
  @media (min-width: 1440px) {
    padding: 60px 50px 152px 50px;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputWrap = styled.div`
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 630px;
    gap: 39px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 45px;
  }
`;
export const Input = styled.input`
  @media (min-width: 1440px) {
    width: 278px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  @media (min-width: 1440px) {
    // margin-bottom: 45px;
  }
`;
export const CheckBoxesWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 14px;
`;
export const EveryCheckBox = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Button = styled.button`
  position: relative;
  z-index: 3;
  width: 278px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
  padding: 10px 91px;
  margin: 0 auto;
  transition: back-ground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: var(--svgfill);
  }

  @media (min-width: 1440px) {
    position: relative;
    z-index: 10;
    width: 215px;
    padding: 15px 48px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-right: 0px;
    &:hover,
    &:focus {
      background-color: var(--svgfill);
    }
  }
`;
export const SmallLetter = styled.img`
  position: absolute;
  display: block;
  left: 22%;
  bottom: -17px;

  @media (min-width: 1440px) {
    display: none;
  }
`;
export const BigLetter = styled.img`
  display: none;
  @media (min-width: 1440px) {
    z-index: 0;
    position: absolute;
    display: block;
    left: 359px;
    bottom: -10px;
  }
`;
