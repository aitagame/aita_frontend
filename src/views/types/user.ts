export interface User {
  id: number;
  clan_id: string | null;
  email: string | null;
  firstName: string;
  lastName: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Profile {
  id: string;
  name: string;
  class: string;
  rating: number;
  is_my: boolean;
}
