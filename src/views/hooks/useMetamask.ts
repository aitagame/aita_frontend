import { useMemo } from 'react';

export const useMetamask = () => {
  const connect = async () => {
    await null;
  };

  return useMemo(
    () => ({
      connect,
      signIn: () => null,
    }),
    []
  );
};
