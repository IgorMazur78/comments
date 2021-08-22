import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import { addComment } from '../../../services/api';
import QueryKey from '../../../common/constants/react-query';

const option = {
  duration: 4000,
  position: 'top-center',
};

function useSubmit() {
  const queryClient = useQueryClient();
  const updateCommentsMutation = useMutation(addComment, {
    onSuccess: () => {
      toast.success('Комментарий добавлен', option);
      queryClient.invalidateQueries(QueryKey.Comments);
    },
    onError: err => {
      toast.error('Ошибка, сообщение не отправлено. ' + err, option);
    },
  });
  const onSubmit = async data => {
    await updateCommentsMutation.mutateAsync(data);
    queryClient.invalidateQueries(QueryKey.Comments);
  };

  return { onSubmit };
}

export default useSubmit;
