<template>
  <section :class="styles.searchContainer">
    <h2>Descubra Aqui Novos Livros</h2>
    <div :class="styles.inputBox">
      <n-input placeholder="Digite o nome do livro" v-model:value="bookName" />
      <n-input placeholder="Digite o nome do autor" v-model:value="authorName"/>
      <n-button type="primary" @click="handleSearchBook">Buscar</n-button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import styles from './Discover.module.scss'
import { NInput, NButton } from 'naive-ui'

const bookName = ref('')
const authorName = ref('')

const handleSearchBook = () => {
  console.log(bookName.value)
  console.log(authorName.value)
}

</script>
