<template>
  <header class="bg-red-600 py-4 px-6">
    <div class="flex justify-between items-center">
      <div class="text-lg font-bold text-white"><a href="/">Aril Store</a></div>
      
      <!-- Hamburger Menu Button (Mobile) -->
      <button
        class="block sm:hidden text-white focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Desktop Menu (Always visible on larger screens) -->
      <nav
        class="space-x-4 hidden sm:flex"
      >
        <a href="/" class="hover:underline text-white">Home</a>
        <a href="#" class="hover:underline text-white">Cek Transaksi</a>
        <a href="#" class="hover:underline text-white">Daftar Harga</a>
        <a href="#" class="hover:underline text-white">Contact Us</a>
        <a href="#" class="hover:underline text-white">Jadwal Gift Skin</a>
      </nav>
    </div>

    <!-- Mobile Menu (Visible when isMenuOpen is true) -->
    <div
      v-if="isMenuOpen"
      class="sm:hidden absolute top-16 left-0 w-full bg-red-600 p-6 space-y-4 z-10"
    >
      <a href="/" class="block text-white hover:underline">Home</a>
      <a href="#" class="block text-white hover:underline">Cek Transaksi</a>
      <a href="#" class="block text-white hover:underline">Daftar Harga</a>
      <a href="#" class="block text-white hover:underline">Contact Us</a>
      <a href="#" class="block text-white hover:underline">Jadwal Gift Skin</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Mengontrol apakah menu mobile terbuka atau tidak
    };
  },
  methods: {
    toggleMenu() {
      // Toggle status menu saat tombol hamburger diklik
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS diimpor secara global, jadi tidak perlu menambahkan apa pun di sini */
</style>
