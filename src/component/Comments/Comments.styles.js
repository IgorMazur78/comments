import styled from '@emotion/styled';

export const CommentsWrapper = styled.div`
  width: 48%;
  padding: 1rem;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: darkgreen;
  color: white;
`;

export const Button = styled.button`
  margin: 0 1rem;
  padding: 1rem;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: ${props => (props.disabled ? '#aaa' : '#333')};
  box-shadow: 0px 0px 3px 3px hsla(0, 0%, 0%, 0.2);

  &:hover {
    box-shadow: ${props =>
      props.disabled
        ? '0px 0px 3px 3px hsla(0, 0%, 0%, 0.2)'
        : ' 0px 0px 1px 2px hsla(0, 0%, 0%, 0.4)'};
    0px 0px 1px 2px hsla(0, 0%, 0%, 0.4);
    transform: ${props => (props.disabled ? 'scale(1)' : 'scale(1.2)')};
    transition: all 0.2s ease-out;
  }

  &:active {
    box-shadow: ${props =>
      props.disabled
        ? '0px 0px 3px 3px hsla(0, 0%, 0%, 0.2)'
        : 'inset 0px 0px 1px 1px hsla(0, 100%, 100%, 0.2)'}
    transform: ${props => (props.disabled ? 'scale(1)' : 'scale(1.2)')};
    transition: all 0.2s ease-out;
  }
`;

export const FixedButton = styled.button`
  position: fixed;
  bottom: 0.5rem;
  left: 1rem;

  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: orangered;
  color: #fff;
  visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
  box-shadow: 0px 0px 3px 3px hsla(0, 0%, 0%, 0.2);

  &:hover {
    box-shadow: 0px 0px 1px 2px hsla(0, 0%, 0%, 0.4);
  }

  &:active {
    box-shadow: inset 0px 0px 3px 3px hsla(0, 0%, 0%, 0.2);
  }
`;
