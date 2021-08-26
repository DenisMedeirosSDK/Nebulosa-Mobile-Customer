interface Provider {
  id?: string;
  name?: string;
  email?: string;
  avatarURL?: string;
}

interface ServiceDTO {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  duration: number;
  categoryId: string;
  userId: Provider;
}

export { ServiceDTO };
