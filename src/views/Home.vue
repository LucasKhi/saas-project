<script setup lang="ts">
import Features from '../components/Features.vue'
import Testimonials from '../components/Testimonials.vue'
import { defineProps } from 'vue'
</script>

<template>
  <div>
    <section class="bg-gradient-to-r from-purple-primary to-purple-secondary text-white py-20">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Revolutionize Your Business with Our SaaS Platform</h1>
          <p class="text-xl mb-8">Empower your business with cutting-edge encryption technology. Secure, efficient, and
            user-friendly.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/register" class="btn bg-white text-black hover:bg-gray-100">Get
              Started</router-link>
            <router-link to="/contact" class="btn border border-white hover:bg-purple-detail-300">Fale com
              Vendas</router-link>
          </div>
        </div>
      </div>
    </section>

    <Features />

    <Testimonials />

    <section class="bg-gradient-to-r from-purple-primary to-purple-secondary text-white py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
          <p class="text-xl mb-8">Join thousands of businesses that trust us with their encryption needs. Get started today and experience unparalleled security.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/register" class="btn bg-white text-black hover:bg-gray-100">Get Started</router-link>
            <router-link to="/pricing" class="btn border border-white hover:bg-purple-detail-300">View Plans</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>