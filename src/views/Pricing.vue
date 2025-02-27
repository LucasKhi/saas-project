<script setup lang="ts">
import PricingItem from '../components/PricingItem.vue'
import FAQ from '../components/Faq.vue'
</script>
<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-primary to-purple-secondary text-white py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">Pricing</h1>
          <p class="text-xl">Secure your data with top-notch encryption. Start free and upgrade to advanced protection features.</p>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Basic Plan -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-50 p-6 text-center border-b">
              <h3 class="text-2xl font-bold mb-2">Basic</h3>
              <div class="text-purple-detail-full text-4xl font-bold mb-2">$ 10<span class="text-base font-normal text-gray-600">/month</span></div>
              <p class="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <PricingItem text="Lorem" isChecked="true" />
                <PricingItem text="Ipsum" isChecked="true" />
                <PricingItem text="Dolor" isChecked="true" />
                <PricingItem text="Sit" />
                <PricingItem text="Amet" />
                <PricingItem text="Consectetur" />
                <PricingItem text="Adipisicing"  />
              </ul>
              <div class="mt-6">
                <router-link to="/register" class="btn bg-purple-detail-full text-white w-full text-center">Get Started</router-link>
              </div>
            </div>
          </div>
          
          <!-- Pro Plan -->
          <div class="border rounded-lg overflow-hidden shadow-lg relative">
            <div class="absolute top-0 inset-x-0">
              <div class="bg-purple-detail-full text-white text-xs font-bold uppercase py-1 text-center">Most Popular</div>
            </div>
            <div class="bg-gray-50 p-6 text-center border-b pt-8">
              <h3 class="text-2xl font-bold mb-2">Advanced</h3>
              <div class="text-purple-detail-full text-4xl font-bold mb-2">R$ 30<span class="text-base font-normal text-gray-600">/month</span></div>
              <p class="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <PricingItem text="Lorem" isChecked="true" />
                <PricingItem text="Ipsum" isChecked="true" />
                <PricingItem text="Dolor" isChecked="true" />
                <PricingItem text="Sit" isChecked="true" />
                <PricingItem text="Amet" isChecked="true" />
                <PricingItem text="Consectetur" />
                <PricingItem text="Adipisicing"  />
              </ul>
              <div class="mt-6">
                <router-link to="/register" class="btn bg-purple-detail-full text-white w-full text-center">Get Started</router-link>
              </div>
            </div>
          </div>
          
          <!-- Enterprise Plan -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-50 p-6 text-center border-b">
              <h3 class="text-2xl font-bold mb-2">Ultimate</h3>
              <div class="text-purple-detail-full text-4xl font-bold mb-2">R$ 90<span class="text-base font-normal text-gray-600">/month</span></div>
              <p class="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <PricingItem text="Lorem" isChecked="true" />
                <PricingItem text="Ipsum" isChecked="true" />
                <PricingItem text="Dolor" isChecked="true" />
                <PricingItem text="Sit" isChecked="true"/>
                <PricingItem text="Amet" isChecked="true"/>
                <PricingItem text="Consectetur" isChecked="true"/>
                <PricingItem text="Adipisicing"  isChecked="true"/>
              </ul>
              <div class="mt-6">
                <router-link to="/register" class="btn bg-purple-detail-full text-white w-full text-center">Get Started</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQ />

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-purple-primary to-purple-secondary text-white py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Still have questions?          </h2>
          <p class="text-xl mb-8">Our team is ready to help you choose the ideal plan for your business.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/contact" class="btn bg-white text-black hover:bg-gray-100">Contact Us</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>