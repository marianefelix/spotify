export interface User {
  id: string;
  display_name: string;
  email: string;
  followers: {
    href: string;
    total: number;
  };
  avatarURL: string;
}
