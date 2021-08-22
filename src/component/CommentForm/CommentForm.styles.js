import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  width: 49%;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
`;

export const FormField = styled.div`
  height: auto;
`;

export const TextArea = styled.textarea`
  display: block;
  box-sizing: border-box;

  width: 100%;
  margin-bottom: 1rem;
  border: none;
  border-radius: 3px;
  padding: 1rem;
`;

export const FormFieldError = styled.p`
  margin-bottom: 1rem;
  height: 1rem;
  line-height: 1rem;

  color: red;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;

  width: 100%;
  height: 1.5rem;
  border: none;
  border-radius: 3px;

  text-indent: 1rem;
`;

export const Form = styled.form`
  width: 40%;
  padding: 1rem;
  border-radius: 6px;

  position: fixed;
  top: 1rem;

  box-shadow: 0px 0px 3px 3px hsla(0, 0%, 0%, 0.2);
  background-color: olivedrab;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => (props.disabled ? 'grey' : 'orangered')};
  box-shadow: 0px 0px 3px 3px hsla(0, 0%, 0%, 0.2);
  color: #fff;

  &:hover {
    box-shadow: 0px 0px 1px 2px hsla(0, 0%, 0%, 0.4);
  }
  &:active {
    box-shadow: inset 0px 0px 3px 3px hsla(0, 0%, 0%, 0.2);
  }
}
`;
