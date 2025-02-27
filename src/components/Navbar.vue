<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="container py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-purple-detail-full">Aetherfy</router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-purple-detail-full">Home</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-purple-detail-full">About Us</router-link>
          <router-link to="/pricing" class="text-gray-700 hover:text-purple-detail-full">Pricing</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-purple-detail-full">Contact</router-link>
        </nav>
        
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/login" class="btn  text-purple-detail-full">Sign in</router-link>
          <router-link to="/register" class="btn text-white bg-purple-detail-full">Sign up</router-link>
        </div>
        
        <!-- Mobile menu button -->
        <button @click="toggleMenu" class="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-4 pb-4">
        <router-link to="/" class="block text-gray-700 hover:text-primary-600">Home</router-link>
        <router-link to="/about" class="block text-gray-700 hover:text-primary-600">About Us</router-link>
        <router-link to="/pricing" class="block text-gray-700 hover:text-primary-600">Prices</router-link>
        <router-link to="/contact" class="block text-gray-700 hover:text-primary-600">Contact</router-link>
        <div class="flex flex-col space-y-2 pt-2">
          <router-link to="/login" class="btn btn-outline text-center">Sign in</router-link>
          <router-link to="/register" class="btn btn-primary text-center">Sign up</router-link>
        </div>
      </div>
    </div>
  </header>
</template>