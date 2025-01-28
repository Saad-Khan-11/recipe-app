<template>
  <div>
    <h1>Customer Management</h1>

    <div v-if="isLoading">Loading customers...</div>

    <ul v-if="!isLoading && customers.length > 0">
      <li v-for="customer in customers" :key="customer._id">
        <p>Name: {{ customer.CustomerName }}</p>
        <p>Email: {{ customer.EmailAddress }}</p>
        <p>Contact: {{ customer.Contact }}</p>

        <button @click="deleteCustomer(customer._id)">Delete</button>
        <button @click="editCustomer(customer)">Edit</button>
      </li>
    </ul>

    <div v-else>
      <p>No customers found</p>
    </div>

    <button @click="addCustomer">Add New Customer</button>
  </div>
</template>

<script setup>
import { useCustomersStore } from "~/stores/customersstore";

// Get the store
const store = useCustomersStore();

// Reactivity
const customers = store.items;
const isLoading = store.isLoading;

// Fetch customers when the component is mounted
onMounted(() => {
  store.fetchCustomers();
});

// Add a new customer
const addCustomer = async () => {
  const newCustomer = {
    CustomerName: "New Customer",
    EmailAddress: "new@example.com",
    Contact: "123456789",
    PasswordHash: "newpasswordhash",
  };

  await store.addCustomer(newCustomer);
};

// Edit a customer
const editCustomer = (customer) => {
  const updatedCustomer = { ...customer, CustomerName: "Updated Name" };
  store.updateCustomer(customer._id, updatedCustomer);
};

// Delete a customer
const deleteCustomer = async (id) => {
  await store.deleteCustomer(id);
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
