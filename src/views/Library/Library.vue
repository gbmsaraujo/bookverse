<template>
  <main :class="styles.libraryContainer">
    <h1 :class="styles.title">Minha Biblioteca</h1>
    <div :class="styles.addBookBox">
      <p>Adicionar novo livro</p>
      <AddCircle :class="styles.addIcon" @click="useNavigation('/discover')" />
    </div>
    <div :class="styles.booksFlex">
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :author="book.author"
        :description="book.description"
        :status="book.status"
        :showRating="true"
      />
    </div>
  </main>
</template>

<script setup>
import styles from './Library.module.scss'
import BookCard from '@/components/BookCard/BookCard.vue'
import { AddCircle } from '@vicons/ionicons5'
import { useNavigation } from '@/hooks/navigationHook'

const books = [
  {
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    description: 'Uma jornada épica pela Terra Média em busca de destruir o Um Anel.',
    status: 'Quero ler',
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'Uma distopia que mostra um regime totalitário e vigilância extrema.',
    status: 'Lido',
  },
  {
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    description: 'A história de Bento Santiago e suas dúvidas sobre a fidelidade de Capitu.',
    status: 'Lendo',
  },
  {
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    description: 'O início da jornada de Harry Potter no mundo da magia.',
    status: 'Quero ler',
  },
  {
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    description: 'Uma fábula filosófica sobre amor, amizade e o essencial da vida.',
    status: 'Lido',
  },
]
</script>
