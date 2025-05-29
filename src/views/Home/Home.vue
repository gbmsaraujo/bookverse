<template>
  <main :class="styles.homeContainer">
    <h1>BookVerse!</h1>
    <p :class="styles.subtitle">Explore milhões de livros e crie sua biblioteca personalizada.</p>

    <div v-if="isLoggedIn">
      <p :class="styles.welcomeMessage">Olá, {{ userName }}. Seja bem-vindo!</p>
      <div :class="styles.card">
        <div :class="styles.icon">📖</div>
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

const isLoggedIn = ref(false)
const userName = 'Filipe'
const totalLivros = 3
</script>
