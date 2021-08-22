import styled from '@emotion/styled';

export const Item = styled.li`
  list-style: none;
`;

export const Card = styled.div`
  min-height: 100px;

  margin: 1rem auto 1rem;
  padding: 1rem;

  background-color: antiquewhite;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 3px 2px hsla(0, 0%, 0%, 0.2);

  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -1rem;
    left: 0.25rem;
    width: 0;
    height: 0;
    border-top: 1rem solid antiquewhite;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid transparent;
  }
`;

export const Author = styled.h4`
  box-sizing: border-box;
  display: inline-block;

  min-height: 20px;
  margin: 1rem auto 0.25rem;
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: antiquewhite;
  box-shadow: 2px 2px 2px 2px hsla(0, 0%, 0%, 0.2);
`;

export const Message = styled.p`
  overflow-wrap: break-word;
  hyphens: manual;
`;
