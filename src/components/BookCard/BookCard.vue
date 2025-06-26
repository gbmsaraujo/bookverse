<template>
  <section :class="styles.bookCardContainer">
    <img :src="urlImage" alt="Imagem do Livro" />
    <h2>
      Livro: <span :class="styles.book">{{ title }}</span>
    </h2>
    <h3>
      Autor: <span :class="styles.author">{{ author }}</span>
    </h3>
    <p :title="description" v-show="description">Passe o mouse, para ler descrição</p>
    <RatingStars />
  </section>
</template>

<script setup>
import RatingStars from '../RatingStars/RatingStars.vue'
import styles from './BookCard.module.scss'
import DefaultImage from '@/assets/covers/book.png'

defineProps({
  urlImage: { type: String, default: DefaultImage },
  title: { type: String },
  author: { type: String },
  description: { type: String },
})
</script>
