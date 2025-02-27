<script setup lang="ts">
  import StarRating from '../components/StarRating.vue'
</script>
<template>
  <section class="py-16">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Empresas de todos os tamanhos confiam em nossa solução.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <StarRating :rating="5" />
          </div>
          <p class="text-gray-600 mb-4">"Aetherfy's encryption platform has revolutionized our data security. Easy to
            use and extremely efficient!"</p>
          <div>
            <p class="font-bold">John M.</p>
            <p class="text-gray-500 text-sm">CEO of a Tech Startup</p>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <StarRating :rating="5" />
          </div>
          <p class="text-gray-600 mb-4">"I finally found a service that truly protects my files without compromising
            usability. Highly recommend!"</p>
          <div>
            <p class="font-bold">Mariana S</p>
            <p class="text-gray-500 text-sm">Software Developer</p>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <StarRating :rating="5" />
          </div>
          <p class="text-gray-600 mb-4">"The peace of mind this solution provides is priceless. Top-tier security for my
            documents!"</p>
          <div>
            <p class="font-bold">Carlos R.</p>
            <p class="text-gray-500 text-sm">Digital Entrepreneur</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>