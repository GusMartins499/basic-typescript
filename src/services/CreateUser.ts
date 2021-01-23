interface TechObject {
  title: string;
  experience: number;
}

interface CreateUSerData {
  name?: string,
  email: string;
  password: string;
  techs: Array<String | TechObject>;
}

export default function createUser({ name = '', email, password }: CreateUSerData) {
  const user = {
    name,
    email,
    password
  }

  return user;
}