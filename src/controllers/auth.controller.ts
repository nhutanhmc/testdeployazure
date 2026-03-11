import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;
    const user = await authService.registerUser(email, password);
    return res.status(201).json({ message: 'User created', userId: user.id });
  } catch (error) {
    return res.status(400).json({ error: 'Email already exists or invalid data' });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};