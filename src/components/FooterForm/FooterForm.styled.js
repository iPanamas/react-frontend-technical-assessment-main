import styled from '@emotion/styled';

export const NewsLetter = styled.div`
  background-color: var(--footerformbg);
  padding: 17px 29px 14px 14px;
  border-radius: 10px;
  width: 100%;
  @media (min-width: 360px) {
    width: 320px;
  }
  @media (min-width: 1440px) {
    padding: 14px 13px 21px 14px;
    min-width: 306px;
    height: fit-content;
  }
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.62;
  margin-bottom: 23px;

  color: var(--white);
  @media (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 29px;
  }
`;
export const Form = styled.form`
  margin-bottom: 20px;
  @media (min-width: 1440px) {
    margin: 0 auto;
    margin-bottom: 19px;
  }
`;

export const Input = styled.input`
  border: none;
  padding-bottom: 11px;
  padding-top: 10px;
  padding-left: 10px;
  outline: none;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  background: var(--inputbg);
  color: var(-white);
  &::placeholder {
    color: var(--placeholder);
    font-family: 'Poppins';

    font-weight: 400;
    font-size: 11px;
    line-height: 1.45;
  }
`;

export const Button = styled.button`
  padding: 11px 22px 10px 22px;
  border: 1px solid var(--inputbg);
  font-weight: 500;
  color: var(--white);
  background-color: var(--black);
  &:hover,
  &:focus {
    background-color: var(--inputbg);
  }
`;
export const FooterText = styled.p`
  font-family: 'Manrope';

  font-weight: 500;
  font-size: 13px;
  line-height: 1.38;
  color: var(--white);
  opacity: 0.5;
`;
