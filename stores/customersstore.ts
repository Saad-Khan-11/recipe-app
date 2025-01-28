import { defineStore } from "pinia";

// Define Customer type
interface Customer {
  _id?: string; // Optional for new customers
  CustomerName: string;
  EmailAddress: string;
  Contact: string;
  PasswordHash: string;
}

export const useCustomersStore = defineStore("customersstore", () => {
  const items = ref<Customer[]>([]); // Array of Customer objects
  const isLoading = ref<boolean>(false); // Tracks loading state
  const apiPath = "/api/customers"; // Backend API path

  // Fetch all customers
  const fetchCustomers = async (): Promise<void> => {
    isLoading.value = true;
    try {
      const response = await fetch(apiPath);
      const data: Customer[] = await response.json(); // Specify type for fetched data
      items.value = data;
    } catch (error) {
      console.error("Failed to fetch customers:", error);
    } finally {
      isLoading.value = false;
    }
  };

  // Add a new customer
  const addCustomer = async (customer: Customer): Promise<void> => {
    try {
      const response = await fetch(`${apiPath}/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (response.ok) {
        await fetchCustomers(); // Refresh list
      }
    } catch (error) {
      console.error("Failed to add customer:", error);
    }
  };

  // Update a customer
  const updateCustomer = async (
    id: string,
    customer: Customer
  ): Promise<void> => {
    try {
      const response = await fetch(`${apiPath}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (response.ok) {
        await fetchCustomers(); // Refresh list
      }
    } catch (error) {
      console.error("Failed to update customer:", error);
    }
  };

  // Delete a customer
  const deleteCustomer = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${apiPath}/${id}`, { method: "DELETE" });
      if (response.ok) {
        await fetchCustomers(); // Refresh list
      }
    } catch (error) {
      console.error("Failed to delete customer:", error);
    }
  };

  return {
    items,
    isLoading,
    fetchCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };
});
