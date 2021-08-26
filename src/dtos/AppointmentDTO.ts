interface Provider {
  name?: string;
  email?: string;
  avatarURL?: string;
}

interface Customer {
  name?: string;
  email?: string;
  avatarURL?: string;
}

interface Service {
  name?: string;
  description?: string;
  price?: number;
  available?: boolean;
  duration?: number;
  categoryId?: string;
  userId?: string;
}

interface AppointmentDTO {
  id: string;
  date: string;
  serviceId: Service;
  customerId: Customer;
  providerId: Provider;
  status: 'accept' | 'pending' | 'canceled';
}

export { AppointmentDTO };
