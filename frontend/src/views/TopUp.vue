<template>
  <div class="relative bg-black text-white min-h-screen relative">
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

        <div style="width: 350px;" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="item in items"
            :key="item.id"
            :class="['bg-red-600 text-white p-6 rounded-lg cursor-pointer hover:bg-red-500 transition-all', selectedItem === item ? 'ring-4 ring-red-400' : '']"
            @click="selectItem(item)"
          >
            <!-- <img :src="item.image" alt="Item Image" class="w-full h-32 object-cover rounded-lg mb-4" /> -->
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
  props: ["gameName"],
  data() {
    return {
      username: "",
      selectedPayment: "",
      selectedItem: null, // Untuk menyimpan item yang dipilih
      itemsByGame: {
        "Free Fire": [
          { id: 1, name: "Diamond 100", price: 5000, description: "100 Diamond Free Fire" },
          { id: 2, name: "Diamond 140", price: 25000, description: "140 Diamond Free Fire" },
          { id: 3, name: "Diamond 300", price: 25000, description: "300 Diamond Free Fire" },
          { id: 4, name: "Diamond 500", price: 25000, description: "500 Diamond Free Fire" },
          { id: 5, name: "Diamond 1000", price: 25000, description: "1000 Diamond Free Fire" },
          { id: 6, name: "Diamond 1200", price: 25000, description: "1200 Diamond Free Fire" },
          { id: 7, name: "Diamond 1500", price: 25000, description: "1500 Diamond Free Fire" },
          { id: 8, name: "Diamond 2000", price: 25000, description: "2000 Diamond Free Fire" },
          { id: 9, name: "Diamond 2200", price: 25000, description: "2200 Diamond Free Fire" },
          { id: 10, name: "Diamond 2500", price: 25000, description: "2500 Diamond Free Fire" },
        ],
        "Mobile Legends": [
          { id: 1, name: "Diamond 50", price: 10000, description: "50 Diamond Mobile Legends" },
          { id: 2, name: "Diamond 250", price: 50000, description: "250 Diamond Mobile Legends" },
        ],
        "Apex Legends": [
          { id: 1, name: "Coins 100", price: 10000, description: "100 Coins Apex Legends" },
          { id: 2, name: "Coins 300", price: 50000, description: "300 Coins Apex Legends" },
        ],
        "Genshin Impact": [
          { id: 1, name: "Primogem 160", price: 30000, description: "160 Primogems" },
          { id: 2, name: "Primogem 800", price: 120000, description: "800 Primogems" },
        ],
      },
      isLoading: false,
      isPageLoading: true,
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
    }, 2000);
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    submitTopUp() {
      // Validasi jika metode pembayaran tidak dipilih
      if (!this.selectedPayment) {
        Swal.fire({
          icon: "warning",
          title: "Metode Pembayaran Belum Dipilih",
          text: "Harap pilih metode pembayaran sebelum melanjutkan.",
          confirmButtonColor: "#d33",
        });
        return;
      }

      // Validasi jika item belum dipilih
      if (!this.selectedItem) {
        Swal.fire({
          icon: "warning",
          title: "Item Belum Dipilih",
          text: "Harap pilih item sebelum melanjutkan.",
          confirmButtonColor: "#d33",
        });
        return;
      }

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;

        Swal.fire({
          position: "top-end",
          width: "300px",
          icon: "success",
          title: "Top-up Berhasil!",
          html: `
            <div style="text-align: left; font-size: 14px; line-height: 1.5;">
              <strong>ID:</strong> ${this.username}<br />
              <strong>Game:</strong> ${this.gameName} <br />
              <strong>Item:</strong> ${this.selectedItem.name}<br />
              <strong>Metode Pembayaran:</strong> ${this.selectedPayment}
            </div>
  `,
          confirmButtonColor: "#d33",
        });
      }, 2000);
    },
  },
};
</script>


<style scoped>
/* Tambahkan gaya jika diperlukan */
  .grid{
    width: 100%;
  }
</style>
