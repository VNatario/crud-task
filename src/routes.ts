import { IncomingMessage, ServerResponse } from "node:http";

export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: (req: IncomingMessage, res: ServerResponse) => {
      res.end("Listando todas as tarefas");
    },
  },
  {
    method: "POST",
    path: "/tasks",
    handler: (req: IncomingMessage, res: ServerResponse) => {
      res.end("Criando uma nova tarefa");
    },
  },
  {
    method: "PUT",
    path: "/tasks",
    handler: (req: IncomingMessage, res: ServerResponse) => {
      res.end("Atualizando uma tarefa");
    },
  },
  {
    method: "DELETE",
    path: "/tasks",
    handler: (req: IncomingMessage, res: ServerResponse) => {
      res.end("Deletando uma tarefa");
    },
  },
  {
    method: "PATCH",
    path: "/tasks",
    handler: (req: IncomingMessage, res: ServerResponse) => {
      res.end("Atualizando parcialmente uma tarefa");
    },
  },
];
