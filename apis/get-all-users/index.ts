/**
 * This is where you will implement the api call to fetch all users from
 * API https://jsonplaceholder.typicode.com/users/
 *
 * Since we are using Typescript you may also want to implement a type for
 * users https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types
 */

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getAllUsers = async (): Promise<User[]> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const users = await response.json();
  return users;
};

export const getUserByName = async (name: string): Promise<User> => {
  const users = await getAllUsers();
  const user:any = users.find((user) => user.name === name);
  if (!user) {
    return users[0];
  }
  return user;
}

