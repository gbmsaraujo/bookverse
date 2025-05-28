<template>
  <main :class="styles.homeContainer">
    <h1>BookVerse!</h1>
    <p class="subtitle">
      Explore milhões de livros e crie sua biblioteca personalizada.
    </p>

    <div v-if="isLoggedIn">
      <p class="welcomeMessage">Olá, {{ userName }}. Seja bem-vindo!</p>
      <div class="card">
        <div class="icon">📖</div>
        <p>
          Você adicionou {{ totalLivros }} livros em sua <br />
          biblioteca :)
        </p>
        <a href="#">Adicione mais aqui!</a>
      </div>
    </div>

    <div v-else class="ctaCadastro">
      <p>Ainda não fez seu cadastro?</p>
      <a href="/cadastro">Clique aqui!</a>
    </div>
  </main>
</template>

<script setup>
import styles from './Home.module.scss'
import { ref } from 'vue'

const isLoggedIn = ref(true)
const userName = 'Gabriel'
const totalLivros = 3
</script>
