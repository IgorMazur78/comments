import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import {
  Button,
  Input,
  Form,
  FormField,
  FormFieldError,
  FormWrapper,
  TextArea,
} from './CommentForm.styles';
import { commentFormSchema } from '../../common/constants/validationSchema';
import useSubmit from './hooks/useSubmit';

function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: joiResolver(commentFormSchema),
  });

  const { onSubmit } = useSubmit();

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Input
            placeholder="Имя"
            {...register('name', { required: true })}
            error={Boolean(errors.name)}
          />
          <FormFieldError>{errors.name?.message}</FormFieldError>
        </FormField>
        <FormField>
          <TextArea
            rows={6}
            placeholder="Оставь комментарий"
            {...register('text', { required: true })}
            error={Boolean(errors.text)}
          />
          <FormFieldError>{errors.text?.message}</FormFieldError>
        </FormField>
        <Button type="submit" disabled={Boolean(errors.comment)}>
          Send
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default CommentForm;
