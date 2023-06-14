export type priorityType = 'high' | 'medium' | 'low';

export interface Item {
  id: number;
  description: string;
  dueDate: string;
  priority: string;
  done: boolean;
}

