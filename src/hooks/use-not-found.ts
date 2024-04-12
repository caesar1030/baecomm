import { useEffect } from 'react';
import { NOT_FOUND } from '../utils/paths';
import { useNavigate } from 'react-router-dom';

const useNotFound = (shouldRedirect: boolean, replace: boolean = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldRedirect) return;
    navigate(NOT_FOUND, { replace });
  }, [navigate, shouldRedirect, replace]);
};

export default useNotFound;
