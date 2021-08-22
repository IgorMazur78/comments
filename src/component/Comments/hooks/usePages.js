import { useState, useEffect, useMemo } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import QueryKey from '../../../common/constants/react-query';
import { getCommentsByPage } from '../../../services/api';
function usePages() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { status, data, error } = useQuery(
    [QueryKey.Comments, page],
    () => getCommentsByPage(page),
    { keepPreviousData: true, staleTime: 5000 }
  );
  useEffect(() => {
    setLastPage(data?.last_page);
    if (page < data?.lastPage) {
      queryClient.prefetchQuery([QueryKey.Comments, page + 1], () =>
        getCommentsByPage(page + 1)
      );
    }
  }, [data, page, queryClient]);

  const setNextPage = () => {
    if (page + 1 <= lastPage) {
      setPage(page + 1);
    }
  };
  const isLastPage = useMemo(() => page === lastPage, [page, lastPage]);

  return {
    status,
    data,
    error,
    page,
    setPage,
    isLastPage,
    lastPage,
    setNextPage,
  };
}

export default usePages;
