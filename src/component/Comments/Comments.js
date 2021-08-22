import React from 'react';
import Comment from '../Comment';
import {
  Button,
  CommentsWrapper,
  FixedButton,
  Footer,
} from './Comments.styles';
import usePages from './hooks/usePages';

function Comments() {
  const {
    data,
    error,
    isLastPage,
    lastPage,
    page,
    setNextPage,
    setPage,
    status,
  } = usePages();

  return (
    <CommentsWrapper>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <ul>
            {data.data.map(
              ({ id, name, text, product_id, created_at, updated_at }) => (
                <Comment
                  created_at={created_at}
                  key={id}
                  name={name}
                  product_id={product_id}
                  text={text}
                  updated_at={updated_at}
                />
              )
            )}
          </ul>
        </>
      )}
      <Footer>
        <div>Current Page: {page}</div>
        <Button onClick={() => setPage(1)} disabled={page === 1}>
          ⯬
        </Button>
        <Button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          ⮜
        </Button>
        <Button onClick={setNextPage} disabled={isLastPage}>
          ⮞
        </Button>
        <Button onClick={() => setPage(lastPage)} disabled={isLastPage}>
          ⯮
        </Button>
      </Footer>
      <FixedButton onClick={setNextPage} disabled={isLastPage}>
        Показать еще
      </FixedButton>
    </CommentsWrapper>
  );
}

export default Comments;
