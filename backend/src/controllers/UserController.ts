import { Request, Response } from 'express';

const users = [
  { name: 'Luiz', email: 'contato@iamtheluiz.br'}
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};