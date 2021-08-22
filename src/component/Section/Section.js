import React from 'react';
import { Container } from './Section.styles';
import Comments from '../Comments';
import CommentForm from '../CommentForm';

function Section() {
  return (
    <Container>
      <CommentForm />
      <Comments />
    </Container>
  );
}

export default Section;
