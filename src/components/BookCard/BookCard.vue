<template>
  <section :class="styles.bookCardContainer">
    <img src="@/assets/covers/book.png" alt="Imagem do Livro" />
    <h2>
      Livro: <span :class="styles.book">{{ title }}</span>
    </h2>
    <h3>
      Autor: <span :class="styles.author">{{ author }}</span>
    </h3>
    <p>
      {{ description }}
    </p>
  </section>
</template>

<script setup>
import styles from './BookCard.module.scss'

defineProps({
  title: String,
  author: String,
  description: String,
})
</script>
