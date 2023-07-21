export type User = {
  name: string;
  email: string;
  password: string;
};

export type UserType = {
  user: User;
  isLoading?: boolean;
  error?: any;
};

export type Action = {
  type: string;
  payload?: any;
};
