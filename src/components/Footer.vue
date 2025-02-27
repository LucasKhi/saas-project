<template>
  <footer class=" text-black py-12">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Aetherfy</h3>
          <p class="text-gray-600">Empower your business with cutting-edge encryption technology—secure, efficient, and user-friendly.</p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-600 hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="text-gray-600 hover:text-white">About us</router-link></li>
            <li><router-link to="/pricing" class="text-gray-600 hover:text-white">Pricing</router-link></li>
            <li><router-link to="/contact" class="text-gray-600 hover:text-white">Contact</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-white">Terms of Service</a></li>
            <li><a href="#" class="text-gray-600 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-600 hover:text-white">Cookies</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-600">
            <li>contact@aetherfy.com</li>
            <li>(27) 9999-9999</li>
            <li>Vitória, ES - Brazil</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} Aetherfy. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>