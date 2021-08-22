import React from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Author, Card, Item, Message } from './Comment.styles';

const setDateFormat = iso => format(parseISO(iso), 'Pp');

function Comment({ name, text, product_id, created_at, updated_at }) {
  return (
    <Item>
      <Author> Author: {name}</Author>
      <Card>
        <data value={product_id}>
          <Message>{text}</Message>
        </data>
        <p>
          created <time dateTime={created_at}>{setDateFormat(created_at)}</time>
        </p>
        <p>
          updated <time dateTime={updated_at}>{setDateFormat(updated_at)}</time>
        </p>
      </Card>
    </Item>
  );
}

export default Comment;
