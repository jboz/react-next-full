export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Api = {
  todos: fetch('/api/todos').then(response => response.json() as Promise<Todo[]>)
};
