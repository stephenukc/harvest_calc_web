interface User {
  id: string;
  farmer: Farmer | null;
  individual: Individual | null;
  business: Business | null;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  email: string;
}

interface Farmer {}

interface Individual {}

interface Business {}
