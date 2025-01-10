<template>
  <div class="relative bg-black text-white min-h-screen">
    <!-- Loading Spinner -->
    <div v-if="isPageLoading" class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div class="border-t-4 border-red-600 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>

    <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-black text-white">
      <!-- Game Items -->
      <div class="col-span-2">
        <header class="text-center mb-6">
          <h1 class="text-3xl font-bold text-red-600">{{ gameName }} - Pilih Item</h1>
          <p class="text-gray-300">Pilih item yang ingin kamu beli untuk top-up di game {{ gameName }}.</p>
        </header>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="item in items" :key="item.id" class="bg-red-600 text-white p-6 rounded-lg cursor-pointer hover:bg-red-500 transition-all">
            <img :src="item.image" alt="Item Image" class="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-sm text-gray-200">{{ item.description }}</p>
            <p class="mt-2 font-bold">Rp {{ item.price }}</p>
          </div>
        </div>
      </div>

      <!-- Top-Up Form -->
      <div class="bg-gray-800 p-6 rounded-lg">
        <header class="text-center mb-6">
          <h2 class="text-xl font-bold text-red-600">Formulir Top-Up</h2>
        </header>

        <form @submit.prevent="submitTopUp" class="space-y-6">
          <div>
            <label for="username" class="block text-lg font-semibold">ID/Username</label>
            <input
              type="text"
              inputmode="numeric"
              id="username"
              v-model="username"
              placeholder="Masukkan ID/Username"
              class="w-full p-2 border border-gray-700 rounded-md bg-black text-white"
              required
            />
          </div>

          <div>
            <label for="payment" class="block text-lg font-semibold">Metode Pembayaran</label>
            <select
              id="payment"
              v-model="selectedPayment"
              class="w-full p-2 border border-gray-700 rounded-md bg-black text-white"
            >
              <option disabled value="">Pilih Metode Pembayaran</option>
              <option value="OVO">OVO</option>
              <option value="DANA">DANA</option>
              <option value="GoPay">GoPay</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <button
            type="submit"
            class="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-500 transition-all"
            :disabled="isLoading"
          >
            Lakukan Top-Up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: ["gameName"], // Menerima nama game sebagai props
  data() {
    return {
      username: "",
      selectedPayment: "",
      itemsByGame: {
        "Free Fire": [
          { id: 1, name: "Diamond 100", price: 5000, image: "free_fire_image_url", description: "100 Diamond Free Fire" },
          { id: 2, name: "Diamond 500", price: 25000, image: "free_fire_image_url", description: "500 Diamond Free Fire" },
        ],
        "Mobile Legends": [
          { id: 1, name: "Diamond 50", price: 10000, image: "ml_image_url", description: "50 Diamond Mobile Legends" },
          { id: 2, name: "Diamond 250", price: 50000, image: "ml_image_url", description: "250 Diamond Mobile Legends" },
        ],
        "Apex Legends": [
          { id: 1, name: "Coins 100", price: 10000, image: "apex_legends", description: "100 Coins Apex Legends"},
          { id: 1, name: "Coins 300", price: 50000, image: "apex_legends", description: "100 Coins Apex Legends"},
        ],
        "Genshin Impact": [
          { id: 1, name: "Primogem 160", price: 30000, image: "genshin_image_url", description: "160 Primogems" },
          { id: 2, name: "Primogem 800", price: 120000, image: "genshin_image_url", description: "800 Primogems" },
        ],
      },
      itemsByWallet: {
        "Gopay": [
          { id: 1, name: "Rp. 1000000", price: 1100000, image: "gopay", description: "Rp. 100000" },
        ],
      },
      isLoading: false, // Status loading untuk top-up
      isPageLoading: true, // Status loading untuk halaman
    };
  },
  computed: {
    items() {
      return this.itemsByGame[this.gameName] || [];
    },
  },
  mounted() {
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000); // Simulasi loading halaman
  },
  methods: {
    submitTopUp() {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;

        Swal.fire({
          position: "top-end",
          width: "300px",
          heightAuto: "100px",
          icon: "success",
          title: "Top-up Berhasil!",
          text: `Top-up untuk ${this.username} dengan metode ${this.selectedPayment} berhasil.`,
          confirmButtonColor: "#d33",
        });
      }, 2000); // Simulasi proses top-up
    },
  },
};
</script>

<style scoped>
/* Custom styles jika diperlukan */
</style>
