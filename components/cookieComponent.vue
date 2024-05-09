<template>
	<template v-if="!showCookie">
		<div
			class="cookie fixed flex justify-center items-center font-mont p-3 w-full h-80 lg:h-96 mt-18 bg-gradient-to-r from-white to-blue-200 z-50">
			<div class="flex flex-col items-center gap-1 p-2">
				<h3 class="font-bold text-lg">To ciasteczkowy alert!</h3>
				<p>
					Ciasteczka (pliki cookies) mogą znacząco wpłynąć na komfort korzystania ze strony internetowej. Nasza strona
					korzysta z ciasteczek!
				</p>
				<div class="flex">
					<button
						@click="handleCookies()"
						type="button"
						class="text-black bg-green-300 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition duration-100 delay-150 ease-in">
						OK!
					</button>

					<button
						type="button"
						class="text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 transition duration-100 delay-150 ease-in">
						<a href="/policy">Dowiedz się więcej</a>
					</button>
				</div>
			</div>
			<img src="../assets/img/cookie.png" alt="cookie image" class="absolute left-6 top-3 lg:mt-5 h-10 md:h-20" />
			<img src="../assets/img/cookie.png" alt="cookie image" class="absolute right-4 bottom-2 lg:mt-5 h-12 md:h-24" />
		</div>
	</template>
</template>
<script setup>
const showCookie = ref(false)
const currentPath = window.location.href;

const showCookies = () => {
    showCookie.value = localStorage.getItem('cookieAccepted') === 'true'

    if(!localStorage.getItem('cookieAccepted'))
    document.body.style.overflow = 'hidden';
}

const handleCookies = () => {
	localStorage.setItem('cookieAccepted', 'true')
	showCookies();
    document.body.style.overflow = '';
}

if(currentPath.includes('/policy')){
showCookie.value = true;
}else{
    showCookies()
}

</script>
<style lang="css">
.cookie {
	transform: translateX(-200%);
	animation: moveIn 0.6s forwards ease-in;
}
@keyframes moveIn {
	from {
		opacity: 0;
		transform: translateX(-200%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
