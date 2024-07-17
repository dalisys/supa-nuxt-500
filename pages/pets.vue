<template>
    <div class="prose ">
        <div class="text-right">
            <button class="text-sm underline text-slate-500" @click="logout">
                Log out
            </button>
        </div>
        <h1>Pet List</h1>
        <ul v-if="pets.length > 0">
            <li v-for="pet in pets" :key="pet.id">
                <h2>{{ pet.name }} ({{ pet.species }})</h2>
                <p><strong>Breed:</strong> {{ pet.breed }}</p>
                <p><strong>Age:</strong> {{ pet.age }} years old</p>
                <div class="owner">
                    <h3>Owner Information</h3>
                    <p><strong>Name:</strong> {{ pet.owner?.name }}</p>
                    <p><strong>Phone:</strong> {{ pet.owner?.phone }}</p>
                    <p><strong>Email:</strong> {{ pet.owner?.email }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
    middleware: [
        'auth',
    ],
});

const { auth } = useSupabaseClient();

const pets = ref([])

const { data } = await useFetch('/api/pets', {
    headers: useRequestHeaders(['cookie']),
})

if (data.value) {
    pets.value = data.value.pets
}

async function logout() {
    const { error } = await auth.signOut();
    if (error) {
        console.error(error);
        return;
    }
    await navigateTo('/login');
}


</script>