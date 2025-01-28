import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // Check if we are in the browser (client-side)
    initialize() {
      if (typeof window !== "undefined") {
        const savedCount = localStorage.getItem("counterCount");
        if (savedCount !== null) {
          this.count = parseInt(savedCount);
        }
      }
    },

    increment() {
      this.count++;
      this.saveToLocalStorage();
    },
    decrement() {
      this.count--;
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      if (typeof window !== "undefined") {
        localStorage.setItem("counterCount", this.count.toString());
      }
    },
  },
});
