<template>
  <section :class="styles.ratingContainer">
    <div v-for="rating in ratings" :key="rating">
      <div @click="handleStars(rating)">
        <Star :class="styles.starIcon" v-if="selectedRating >= rating" />
        <StarOutline :class="styles.starIcon" v-else />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star, StarOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import styles from './RatingStars.module.scss'

const ratings = [1, 2, 3, 4, 5]
const selectedRating = ref(0)

const handleStars = (rating) => {
  if (selectedRating.value === rating) {
    selectedRating.value -= 1
    return
  }

  selectedRating.value = rating
}

</script>
