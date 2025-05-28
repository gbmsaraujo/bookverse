<template>
  <main :class="styles.libraryContainer">
    <h1>Minha Biblioteca</h1>
    <div :class="styles.booksFlex">
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :author="book.author"
        :description="book.description"
      />
    </div>
  </main>
</template>

<script setup>
import styles from './Library.module.scss'
import BookCard from '../BookCard/BookCard.vue';

const books = [
  {
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    description: 'Uma jornada épica pela Terra Média em busca de destruir o Um Anel.',
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'Uma distopia que mostra um regime totalitário e vigilância extrema.',
  },
  {
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    description: 'A história de Bento Santiago e suas dúvidas sobre a fidelidade de Capitu.',
  },
  {
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    description: 'O início da jornada de Harry Potter no mundo da magia.',
  },
  {
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    description: 'Uma fábula filosófica sobre amor, amizade e o essencial da vida.',
  },
]
</script>
