import React, { FC, useEffect, useState } from 'react';

const fakeUsers: object = [{ id: 1, name: 'Juan', lastName: 'Ortiz', age: 25 }];

type HomeProps = {
  id: number | string;
  loginStatus?: string;
};

const Home: FC<HomeProps> = ({ id, loginStatus }) => {
  const [users, setUsers] = useState<object>(fakeUsers);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? 'Cargando...' : ''}
      Home
    </div>
  );
};

export default Home;
