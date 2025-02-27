<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-primary to-purple-secondary  text-white py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">About Us</h1>
          <p class="text-xl">Discover our history, mission, and the values that guide us.</p>
        </div>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our History</h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam expedita harum cumque similique sequi aut nobis illo a saepe architecto, at dolore. Ut at vitae itaque commodi officiis eum consequatur?
            </p>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt exercitationem beatae at quidem veritatis quia. Sequi eligendi enim hic quas. Recusandae sit velit rerum explicabo magni animi atque eligendi.
            </p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae mollitia autem consectetur iure temporibus earum quaerat voluptatum impedit unde, at ab incidunt pariatur similique, quas adipisci perspiciatis labore repellendus rem.
            </p>
          </div>
          <div class="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p class="text-gray-500 italic">Imagem da equipe</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Team Section -->
    <section class="py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Our Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Meet the talents behind Aetherfy.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, index) in teamMembers" :key="index" class="text-center">
            <div class=" h-50 w-50 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img :src="member.picture.large" :alt="member.name.first" class="rounded-full h-50 w-50 object-cover">
            </div>
            <h3 class="text-xl font-bold">{{ member.name.first }} {{ member.name.last }}</h3>
            <p class="text-purple-detail-full">{{ member.name.first }}{{ member.name.last }}@aetherfy.com</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gradient-to-r from-purple-primary to-purple-secondary  text-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">500+</div>
            <p>Clientes Ativos</p>
          </div>
          
          <div>
            <div class="text-4xl font-bold mb-2">50+</div>
            <p>Colaboradores</p>
          </div>
          
          <div>
            <div class="text-4xl font-bold mb-2">3</div>
            <p>Escritórios</p>
          </div>
          
          <div>
            <div class="text-4xl font-bold mb-2">95%</div>
            <p>Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const teamMembers = ref<TeamMember[]>([]);
onMounted(async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=4');
    teamMembers.value = response.data.results;
    console.log('Membros da equipe:', teamMembers.value);
  } catch (error) {
    console.error('Erro ao buscar membros da equipe:', error);
  }
});

</script>