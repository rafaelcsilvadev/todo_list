import React, { createContext, useContext } from 'react';
import { todoListControllerImpl, type TudoListController } from '../controllers/todo_list_controller';
import { TodoListUseCase } from '../../domain/use_cases/todo_list_usecase';
import { TodoListRepositoryImpl } from '../../data/repositories_impl/todo_list_repository_impl';
import { TodoListDataSourceImpl } from '../../data/data_sources/todo_list_datasource';

const TodoListContext = createContext<TudoListController | null>(null);

export const useApp = (): TudoListController => {
  const context = useContext(TodoListContext);
  if (!context) throw new Error('TodoListContext should inside AppProvider');
  return context;
};

export const TodoListProvider = ({ children }: { children: React.ReactNode }) => {
  const controller = todoListControllerImpl(
    TodoListUseCase(
      TodoListRepositoryImpl(
        TodoListDataSourceImpl()
      )
    )
  );

  return (
    <TodoListContext.Provider value={controller}>
      {children}
    </TodoListContext.Provider>
  );
};
