<template>
	<NavComponent />
	<CookieComponent />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<FooterComponent />
</template>
<script setup>
useHead({
	link: [
		{ rel: 'icon', type: 'image/png', href: 'favicon.ico' },
		{ rel: 'canonical', href: 'https://gkmua.art' },
	],
})
useServerSeoMeta({
	robots: 'index, follow',
})
</script>
