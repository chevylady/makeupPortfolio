<template>
	<header
		class="relative container mx-auto pt-3 lg:pt-0 bg-[url('@/assets/img/water.jpg')] bg-center bg-contain md:bg-cover bg-no-repeat h-72 w-auto md:h-96">
		<div class="flex justify-center items-center h-64 md:h-96 w-full">
			<div class="header-txt mt-12 text-center">
				<h1 class="text-green-900 text-3xl lg:text-6xl font-merienda">Makeup & Art</h1>
				<ApiTxtComponent />
			</div>
		</div>
		<div class="absolute bottom-0 w-full h-14 bg-gradient-to-t from-white to-transparent"></div>
	</header>
	<main class="container mx-auto">
		<div class="about">
			<h2 class="text-xl font-bold pb-3 lg:py-4 italic">O mnie</h2>
			<contentText><slot name="content"></slot></contentText>
		</div>
		<CarouselComponent />
	</main>
</template>
