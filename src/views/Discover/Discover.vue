<template>
  <section :class="styles.searchContainer">
    <h2>Descubra Aqui Novos Livros</h2>
    <div :class="styles.inputBox">
      <n-input placeholder="Digite o nome do livro" v-model:value="bookName" />
      <n-input placeholder="Digite o nome do autor" v-model:value="authorName" />
      <n-button type="primary" @click="handleSearchBook">Buscar</n-button>
    </div>
    <h3>Resultados: {{ booksFounded.length }}</h3>

    <div :class="styles.bookResults">
      <div v-show="booksFounded.length" v-for="(book, index) in booksFounded" :key="index">
        <BookCard
          :author="book.author"
          :title="book.title"
          :description="book.description"
          :urlImage="book.urlImage"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { computed, reactive, ref } from 'vue'
import styles from './Discover.module.scss'
import { NInput, NButton } from 'naive-ui'
import BookCard from '../../components/BookCard/BookCard.vue'
import { GOOGLE_API_KEY } from '../../config/constants'
import DefaultImage from '@/assets/covers/book.png'

const bookName = ref('')
const authorName = ref('')
let booksFounded = ref([])

const createUrlSearch = (bookName, authorName) => {
  return `https://www.googleapis.com/books/v1/volumes?key=${GOOGLE_API_KEY}&q=${bookName}+inauthor:${authorName}`
}

const handleSearchBook = async () => {
  try {
    const bookNameFormated = formatStringToSearch(bookName.value)
    const authorNameFormated = formatStringToSearch(authorName.value)
    const url = createUrlSearch(bookNameFormated, authorNameFormated)

    const response = await axios.get(url)
    const items = response.data.items
    booksFounded.value = formatFoundedBooks(items)
  } catch (err) {
    console.log(err)
  }
}

const formatStringToSearch = (stringItem) => {
  if (!stringItem) {
    return ''
  }

  const convertBookNameToList = stringItem.toLocaleLowerCase().split(' ')
  return convertBookNameToList.join('+')
}

const formatFoundedBooks = (items) => {
  try {
    return items.map((currentValue) => {
      return {
        title: currentValue.volumeInfo.title,
        author: currentValue?.volumeInfo?.authors?.join(', ') || "Desconhecido",
        description: currentValue.volumeInfo.description,
        urlImage: currentValue?.volumeInfo?.imageLinks?.thumbnail || DefaultImage,
      }
    })
  } catch (err) {
    console.warn(`Impossível formatar dados da API: ${err}`)
  }
}
</script>
