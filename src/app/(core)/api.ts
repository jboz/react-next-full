export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Repo {
  name: string;
  url: string;
}

export interface Repo {
  name: string;
  url: string;
}

export interface Container {
  name: string;
  host: string;
}

export const Api = {
  todos: fetch('/api/todos').then(response => response.json() as Promise<Todo[]>),
  repos: fetch('/api/repos').then(response => response.json() as Promise<Repo[]>),
  containers: fetch('/api/containers').then(response => response.json() as Promise<Container[]>)
};
