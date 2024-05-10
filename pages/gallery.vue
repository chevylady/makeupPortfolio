<template>
	<div class="container mx-auto py-8 mt-24">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div
				v-for="img in myGallery.photos"
				class="animated relative block rounded-lg bg-gray-100 h-auto p-3 shadow-xl shadow-pink-200 dark:bg-surface-dark flex flex-col items-center">
				<img class="h-64 rounded-lg object-cover" :src="img.src" alt="photo makeup" />
				<p class="pt-3 px-3 leading-6 text-base">
					{{ img.desc }}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1">
			<div class="flex flex-row justify-center items-center">
				<button
					@click="showSessions = !showSessions"
					class="p-3 rounded-lg my-8 bg-yellow-100 hover:bg-teal-400 transition ease-in-out duration-300 text-lg shadow-lg shadow-teal-400">
					ZOBACZ SESJE ZDJĘCIOWE
				</button>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<template v-if="showSessions">
				<div
					v-for="img in myGallery.sessions"
					class="animated relative block rounded-lg bg-gray-100 h-auto p-3 shadow-xl shadow-teal-200 dark:bg-surface-dark flex flex-col items-center">
					<img class="h-64 rounded-lg object-cover" :src="img.src" alt="photo makeup" />
					<p class="pt-3 leading-6 text-base">
						{{ img.desc }}
					</p>
				</div>
			</template>
		</div>
	</div>
</template>
<script setup lang="ts">
const showSessions = ref<boolean>(false)

const myGallery = {
	photos: [
		{
			src: '/images/makeups/img1.jpg',
			desc: 'Makijaż okazjonalny (ślubny) nude podkreślający zieleń oczu oraz włosów. Na ustach czerwień Dior.',
		},
		{
			src: '/images/makeups/img2.jpg',
			desc: 'Facepainting - ARA. Farby Snazaroo.',
		},
		{
			src: '/images/makeups/img4.jpg',
			desc: 'Makijaż okazjonalny podkreślający ciepły typ urody. Koralowe usta + kreska. Złotobrązowe powieki.',
		},
		{
			src: '/images/makeups/img5.jpg',
			desc: 'Facepainting dziecięcy - motyl.',
		},
		{
			src: '/images/makeups/img6.jpg',
			desc: 'Facepainting - czerwona ARA. Farby Snazaroo.',
		},
		{
			src: '/images/makeups/img7.jpg',
			desc: 'Makijaż okazjonalny w głębokiej zieleni ze złotem i różem.',
		},
		{
			src: '/images/makeups/img8.jpg',
			desc: 'Makijaż okazjonalny w odcieniach niebieskiego z brązową kreską i różem.',
		},
		{
			src: '/images/makeups/img9.jpg',
			desc: 'Makijaż sesyjny sceniczny. Fiolet i róż perfekcyjnie podkreślają błękitne oczy.',
		},
		{
			src: '/images/makeups/img10.jpg',
			desc: 'Bodypainting - Critters. Farby Snazaroo.',
		},
		{
			src: '/images/makeups/img11.jpg',
			desc: 'Facepainting - komiksowy Two face. Farby Snazaroo.',
		},
		{
			src: '/images/makeups/img12.jpg',
			desc: 'Facepainting - mimikra, wtopienie w barwy chusty.',
		},
		{
			src: '/images/makeups/img13.jpg',
			desc: 'Makijaż okazjonalny nude z pudrowym różem i zimnym złotem.',
		},
		{
			src: '/images/makeups/img14.jpg',
			desc: 'Bodypainting - Chojrak tchórzliwy pies z kreskówki. Farby Snazaroo.',
		},
		{
			src: '/images/makeups/img17.jpg',
			desc: 'Makijaż okazjonalny - fiolet ze srebrem i różem. Farby Snazaroo.',
		},
		{
			src: '/images/makeups/img18.jpg',
			desc: 'Makijaż artystyczny - Paw.',
		},
		{
			src: '/images/makeups/img30.jpg',
			desc: 'Makijaż artystyczny - glamour.',
		},
	],
	sessions: [
		{
			src: '/images/makeups/img3.jpg',
			desc: 'Sesja zdjęciowa modowa. Koniecznie odwiedźcie insta i dowiedzcie się wiecej!',
		},
		{
			src: '/images/makeups/img25.jpg',
			desc: 'Moja autorska sesja zdjęciowa letnia - tematyka japońska.',
		},
		{
			src: '/images/makeups/img26.jpg',
			desc: 'Moja autorska sesja zdjęciowa letnia - tematyka japońska.',
		},
		{
			src: '/images/makeups/img15.jpg',
			desc: 'Sesja zdjęciowa tematyczna - etno. Makijaż artystyczny.',
		},
		{
			src: '/images/makeups/img16.jpg',
			desc: 'Sesja zdjęciowa tematyczna - etno. Makijaż artystyczny połączony z bodypaintingiem.',
		},
		{
			src: '/images/makeups/img24.jpg',
			desc: 'Sesja zdjęciowa tematyczna - etno. Makijaż artystyczny połączony z bodypaintingiem.',
		},
		{
			src: '/images/makeups/img19.jpg',
			desc: 'Sesja zdjęciowa jesienna.',
		},
		{
			src: '/images/makeups/img22.jpg',
			desc: 'Sesja zdjęciowa jesienna.',
		},
		{
			src: '/images/makeups/img23.jpg',
			desc: 'Sesja zdjęciowa modowa. Czerwony kapturek... dla dorosłych:)',
		},
		{
			src: '/images/makeups/img20.jpg',
			desc: 'Sesja zdjęciowa zimowa - mroźny makijaż, efekt oblodzonych rzęs.',
		},
		{
			src: '/images/makeups/img27.jpg',
			desc: 'Sesja zdjęciowa wczesną wiosną - tematyka słowiańska.',
		},
		{
			src: '/images/makeups/img28.jpg',
			desc: 'Sesja zdjęciowa wczesną wiosną - tematyka słowiańska.',
		},
		{
			src: '/images/makeups/img29.jpg',
			desc: 'Sesja zdjęciowa wczesną wiosną - tematyka słowiańska.',
		},
	],
}
</script>
<style lang="css" scoped>
.animated {
	opacity: 0;
	animation: animationGallery 0.5s forwards;
}
@keyframes animationGallery {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
