import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Luiz', email: 'contato@iamtheluiz.br' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Luiz', email: 'contato@iamtheluiz.br' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' }
    });

    return res.send();
  }
};