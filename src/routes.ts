import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'gustavosm994@gmail.com',
    password: '123456789',
    techs: [
      'Node.js',
      'ReactJs',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  console.log(user);

  return response.json({message: 'Hello World'});
}