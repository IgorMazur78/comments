import Joi from 'joi';

export const commentFormSchema = Joi.object({
  text: Joi.string().trim().required().min(3).max(1000).messages({
    'string.empty': 'Комментарий не может быть пустым',
    'string.min': 'Комментарий должен содержать не меньше 3-х символов',
    'string.max': 'Имя должно содержать не больше 100 символов',
  }),
  name: Joi.string().trim().required().min(3).max(100).messages({
    'string.empty': 'Имя не может быть пустым',
    'string.min': 'Имя должно содержать  не меньше 3-х символов',
    'string.max': 'Имя должно содержать не больше 100 символов',
  }),
});
