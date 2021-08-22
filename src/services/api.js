import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'https://jordan.ashton.fashion/api/',
});

export const getAllComments = async () => {
  const response = await axios.get('goods/30/comments');
  return response.data;
};

export const getCommentsByPage = async (page = 1) => {
  const response = await axios.get(`goods/30/comments?page=${page}`);
  return response.data;
};

export const addComment = async data => {
  const response = await axios.post('goods/30/comments', data);
  return response.data;
};
