<script setup lang="ts">
  import FAQ from '../components/Faq.vue'
</script>
<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-primary to-purple-secondary text-white py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl">We're here to help. Send us your message, and we'll respond as soon as possible.</p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6">Send a Message</h2>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Seu nome" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" name="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Como podemos ajudar?" />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Descreva sua solicitação..."></textarea>
              </div>
              
              <div>
                <button type="submit" class="btn bg-purple-detail-full text-white">Send Message</button>
              </div>
            </form>
          </div>
          
          <div>
            <h2 class="text-3xl font-bold mb-6">Contact Information</h2>
            <div class="bg-gray-50 p-6 rounded-lg mb-8">
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="text-purple-detail-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold">Email</h3>
                    <p class="text-gray-600">contact@aetherfy.com</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-purple-detail-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold">Phone</h3>
                    <p class="text-gray-600">(27) 9999-9999</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-purple-detail-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold">Address</h3>
                    <p class="text-gray-600">Vitória, ES - Brazil <br />CEP: 29090-585</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 class="text-xl font-bold mb-4">Business Hours</h3>
            <p class="text-gray-600 mb-6">Monday to Friday: 9am to 6pm<br />Saturday: 9am to 1pm<br />Sunday: Closed</p>            
            <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p class="text-gray-500 italic">Mapa da localização</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQ />

  </div>
</template>