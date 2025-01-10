<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div class="border-t-4 border-red-600 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>

    <!-- Banner -->
    <div class="relative">
      <img
        src="/images/slider.jpg"
        alt="Banner"
        class="w-full h-64 object-cover"
      />
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <h1 class="text-3xl font-bold text-red-700">Welcome To Aril Store</h1>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex justify-center space-x-4 my-6">
      <button 
        class="bg-gray-800 px-4 py-2 rounded hover:bg-red-700" 
        @click="setCategory('games')"
      >
        Games
      </button>
      <button 
        class="bg-gray-800 px-4 py-2 rounded hover:bg-red-700" 
        @click="setCategory('eWallet')"
      >
        E-Wallet
      </button>
      <button 
        class="bg-gray-800 px-4 py-2 rounded hover:bg-red-700" 
        @click="setCategory('pulsa')"
      >
        Pulsa
      </button>
      <button 
        class="bg-gray-800 px-4 py-2 rounded hover:bg-red-700" 
        @click="setCategory('premium')"
      >
        Premium
      </button>
    </div>

    <!-- Content Section -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
      <div v-for="item in activeContent" :key="item.name" class="bg-gray-800 rounded-lg p-4 text-center">
        <img v-if="item.image" :src="item.image" :alt="item.name" class="h-20 w-20 mx-auto" />
        <h2 class="mt-2 font-bold">{{ item.name }}</h2>
        <button 
          class="bg-red-600 px-4 py-1 mt-2 rounded hover:bg-red-700" 
          @click="goToTopUp(item.name)"
        >
          Top Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // Menandakan apakah halaman sedang dimuat
      activeCategory: "games", // Default kategori aktif
      games: [
        { name: "Free Fire", image: "/images/card/free_fire.jpeg" },
        { name: "Mobile Legends", image: "https://yt3.googleusercontent.com/gF4KjT-rYgZldsk9ImEPLAtARA7Jej7cPfXLWaJktxkJVPTxVOlzNUjAtvBHvCv7asgNv9hQTQ=s176-c-k-c0x00ffffff-no-rj-mo" },
        { name: "Apex Legends", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Gc_rq5JO6tVksYHyqbPfS30-iVL6D5QqOQ&s" },
        { name: "Genshin Impact", image: "https://image.api.playstation.com/vulcan/ap/rnd/202408/2010/6e7d87fef87405e9925e810a1620df04c3b98c2086711336.png" },
      ],
      eWallet: [
        { name: "Gopay", image: "https://digitu.my.id/images/produk/ewallet/gopay-kecil-209-ydfw.png" },
        { name: "OVO", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8qp39IAcMzIe3CtNZz0qaSmz_4GScDkKZmypnMFEhRaRS_AIb9Vsg0rEKoXBXYIj1w8rlFXVLaIs6qRW-2L5xYAOqNHDx3AjGNbdcPAq1vUFMWOrOF2npf3ogGeWf0xcGVEYHb1O1-vk/s2048/OVO.png" },
        { name: "Dana", image: "https://i.pinimg.com/originals/06/bd/ea/06bdea70eb048176056881cad078453a.png" },
      ],
      pulsa: [
        { name: "Telkomsel", image: "/images/telkomsel.png" },
        { name: "Indosat", image: "https://cdn.freebiesupply.com/logos/thumbs/2x/indosat-1-logo.png" },
        { name: "XL", image: "https://seeklogo.com/images/X/xl-axiata-2016-logo-BE674D3A84-seeklogo.com.png" },
      ],
      premium: [
        { name: "Netflix", image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" },
        { name: "Spotify", image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "Disney+", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
      ],
    };
  },
  computed: {
    activeContent() {
      // Mengembalikan konten berdasarkan kategori aktif
      return this[this.activeCategory];
    },
  },
  mounted() {
    // Simulasi pemuatan halaman selama 2 detik (bisa diganti sesuai kebutuhan)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Setelah 2 detik, sembunyikan spinner
  },
  methods: {
    setCategory(category) {
      // Perbarui kategori aktif
      this.activeCategory = category;
    },
    goToTopUp(itemName) {
      this.$router.push({ name: "top-up", params: { gameName: itemName } });
    },
  },
};
</script>

<style>
@import "tailwindcss/tailwind.css";
</style>
