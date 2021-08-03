import axiosInstance from 'utils/axios';

export const verifyEmailApi = async (value: string) => {
  const url = `/api${value}`;

  const { data } = await axiosInstance.get<boolean>(url);

  return data;
};
