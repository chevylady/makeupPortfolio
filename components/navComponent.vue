<template>
	<nav class="navbar font-mont bg-transparent fixed w-full z-20 top-0 start-0">
		<div class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<a href="/#" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img src="../assets/img/favicon.png" class="h-12" alt="Flowbite Logo" />
				<h1 class="self-center text-2xl font-semibold whitespace-nowrap text-sky-400 dark:text-sky-400 font-merienda">
					Lazy Parrot
				</h1>
			</a>
			<div
				class="myNav flex items-center justify-end w-full md:flex md:w-auto md:order-1 hidden"
				:class="[isHidden ? 'bg-gradient-to-l from-gray-50 via-pink-100 to-transparent' : 'bg-transparent']"
				id="navbar-sticky">
				<ul
					class="w-full flex flex-col items-end md:items-center mt-1 p-4 md:p-0 font-semibold text-gray-900 text-xl lg:text-3xl border border-transparent rounded-lg dark:hover:text-blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-100 uppercase">
					<li>
						<div class="hidden md:block md:p-0">
							<InstaBtnComponent />
						</div>
					</li>
					<li>
						<a
							href="/"
							id="/"
							:class="{ 'text-red-500': $route.path === '/' }"
							class="block py-2 px-3 rounded md:hover:bg-transparent hover:text-red-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition transition-duration-300 ease-in"
							>HOME</a
						>
					</li>
					<li>
						<a
							href="/gallery"
							id="gallery"
							:class="{ 'text-red-500': $route.path === '/gallery' }"
							class="block py-2 px-3 rounded md:hover:bg-transparent hover:text-red-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition transition-duration-300 ease-in">
							Galeria</a
						>
					</li>
					<li>
						<a
							href="/contact"
							id="contact"
							:class="{ 'text-red-500': $route.path === '/contact' }"
							class="block py-2 px-3 rounded md:hover:bg-transparent hover:text-red-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition transition-duration-300 ease-in"
							>Kontakt</a
						>
					</li>
				</ul>
			</div>
			<div class="absolute top-5 flex right-5">
				<div class="md:hidden">
					<InstaBtnComponent />
				</div>
				<div class="top-5 ml-3">
					<button
						@click="
							() => {
								isHidden = !isHidden
							}
						"
						data-collapse-toggle="navbar-sticky"
						type="button"
						class="burgerBtn inline-flex items-center p-2 w-10 h-10 justify-center text-base text-pink-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-sky-800 dark:hover:bg-sky-200 dark:focus:ring-sky-200"
						aria-controls="navbar-sticky"
						aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>
<script setup>
const isHidden = ref(false)

window.addEventListener('scroll', () => {
	const nav = document.querySelector('.navbar')
	if (window.scrollY > 10) {
		nav.classList.add('bg-gradient-to-l', 'from-gray-50', 'via-pink-100', 'to-transparent')
		nav.classList.remove('bg-transparent')
	} else {
		nav.classList.remove('bg-gradient-to-l', 'from-gray-50', 'via-pink-100', 'to-transparent')
		nav.classList.add('bg-transparent')
	}
})

const clickOutside = e => {
	const nav = document.querySelector('.navbar')
	if (!nav.contains(e.target)) {
		const burgerMenu = document.querySelector('#navbar-sticky')
		burgerMenu.classList.add('hidden')
		burgerMenu.classList.add('bg-transparent')
		burgerMenu.classList.remove('bg-gradient-to-l', 'from-gray-50', 'via-pink-100', 'to-transparent')
		document.querySelector('.burgerBtn').setAttribute('aria-expanded', 'false')
	}
}
window.addEventListener('click', clickOutside)
</script>
