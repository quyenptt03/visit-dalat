export type User = {
  name: string;
  email: string;
  password: string;
};

export type UsersType = {
  users?: User[];
  isLoading?: boolean;
  error?: any;
};

export type Action = {
  type: string;
  payload?: any;
};
