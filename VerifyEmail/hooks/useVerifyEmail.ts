import { useMutation } from 'react-query';
import { verifyEmailApi } from '../api/verifyEmail.api';

export const useVerifyEmail = () =>
  useMutation((verifyEmailApiData: string) =>
    verifyEmailApi(verifyEmailApiData)
  );
