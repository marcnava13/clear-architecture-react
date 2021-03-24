import { rest } from 'msw';

interface PostTodoBody  {
  "userId": number;
	"id": number;
	"title": string;
	"completed": boolean;
}

let TODOS = Array.from(Array(10).keys()).map(key => ({
	"userId": key,
	"id": key,
	"title": `Task ${key}`,
	"completed": Math.random() < 0.5,
}));

export const todoHandlers = [
  rest.post<PostTodoBody>('/todos', (req, res, ctx) => {
    TODOS = [...TODOS, {
      userId: req.body.userId,
      id: req.body.id,
      title: req.body.title,
      completed: req.body.completed,
    }];

    return res(
      ctx.status(200),
      ctx.json(req.body)
    );
  }),
  rest.get('/todos', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(TODOS),
    );
  }),
];