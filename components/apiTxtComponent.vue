<template>
	<h4 class="leading-6 mt-2 lg:pt-4 italic lg:text-lg">"{{ singleQuote }}"</h4>
	<small>{{ author }}</small>
</template>
<script setup>
import axios from 'axios'

const quotes = ref('')
const author = ref('')
const singleQuote = ref('')

axios.get('https://type.fit/api/quotes').then(response => {
    const index = Math.round(Math.random() * response.data.length)
	quotes.value = response.data[index]
    singleQuote.value = quotes.value.text
	author.value = quotes.value.author
	author.value = author.value.slice(0, -10)
})
</script>
