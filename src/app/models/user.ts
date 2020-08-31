import { Role } from './role';
import { Language } from './language';

export interface User {
  id: string;
  firstname: string;
  lastname?: string;
  language?: Language;
  roomId: string;
  role: Role;
  flag: string;
}
