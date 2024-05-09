<template>
	<div class="relative container-lg mt-24 pt-10 px-3">
		<div class="flex flex-col-reverse items-center md:flex-row md:justify-stretch flex-wrap gap-4">
			<img src="../assets/img/audrey.png" alt="decoration photo" class="w-full md:w-1/3" />
			<form class="w-full md:w-1/2 mx-auto p-5 shadow-lg shadow-gray-900 rounded-lg">
				<div class="flex flex-col items-center z-0 w-full mb-5 group flex-wrap">
					<h1 class="text-indigo-500 font-semibold text-2xl uppercase">Kontakt</h1>
					<div class="mt-3 flex gap-6 text-indigo-800 font-bold text-lg">
						<a href="tel:+48733887628" class="flex items-center"
							>Telefon<img src="../assets/img/phone-solid.svg" alt="ikona telefonu" class="ml-2 h-5"
						/></a>
						<a
							href="http://instagram.com/gk.muart"
							target="_blank"
							rel="noopener"
							class="text-indigo-800 font-bold text-lg"
							>Instagram<img src="../assets/instagram.svg" alt="instagram" class="pulseBtn h-6 inline ml-1"
						/></a>
					</div>
				</div>
				<hr class="w-full my-5" />
				<div class="grid md:grid-cols-2 md:gap-6">
					<div class="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_first_name"
							id="floating_first_name"
							v-model="formData.personName"
							maxlength="30"
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required />
						<label
							for="floating_first_name"
							class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>Imię*</label
						>
					</div>
					<div class="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_last_name"
							id="floating_last_name"
							v-model="formData.surname"
							maxlength="30"
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required />
						<label
							for="floating_last_name"
							class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>Nazwisko*</label
						>
					</div>
				</div>
				<div class="grid md:grid-cols-2 md:gap-6">
					<div class="relative z-0 w-full mb-5 group">
						<input
							type="tel"
							name="floating_phone"
							id="floating_phone"
							v-model="formData.phoneNumber"
							maxlength="12"
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required />
						<label
							for="floating_phone"
							class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>Numer telefonu*</label
						>
					</div>
					<div class="relative z-0 w-full mb-5 group">
						<input
							type="email"
							name="floating_email"
							id="floating_email"
							v-model="formData.mail"
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" " />
						<label
							for="floating_email"
							class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>Email (opcjonalnie)</label
						>
					</div>
				</div>
				<div class="grid lg:grid-cols-2 md:gap-3">
					<div class="relative flex items-center justify-between z-0 w-full flex mb-5 group">
						<label for="selected-option" class="block text-sm text-gray-900 dark:text-gray-300 mr-3"> Opcja </label>
						<select v-model="formData.selected" id="selected-option" class="text-sm w-36 border-gray-300">
							<option value="">-wybierz-</option>
							<option value="z dojazdem">z dojazdem</option>
							<option value="stacjonarnie">stacjonarnie</option>
						</select>
					</div>
					<div class="relative flex items-center justify-between z-0 w-full flex mb-5 group">
						<label for="selected-makeup" class="block text-sm text-gray-900 dark:text-gray-300 mr-3"
							>Rodzaj makijażu</label
						>
						<select v-model="formData.pick" id="selected-makeup" class="text-sm w-36 border-gray-300">
							<option value="">-wybierz-</option>
							<option value="makijaż okazjonalny">okazjonalny</option>
							<option value="makijaż artystyczny">artystyczny</option>
							<option value="makijaż naturalny">naturalny</option>
							<option value="face-painting">face-painting</option>
						</select>
					</div>
					<div class="relative flex items-center justify-between z-0 w-full mb-5 group">
						<label class="block text-sm text-gray-900 dark:text-gray-300 mr-3" for="date">Wybierz datę</label>
						<input
							type="date"
							name="date"
							v-bind:min="date"
							max="2025-12-31"
							v-model="formData.dateVal"
							class="text-sm w-36 border-gray-300" />
					</div>
					<div class="relative z-0 w-full mb-5 group">
						<input
							id="terms"
							type="checkbox"
							v-model="formData.conditions"
							class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
							required />

						<label for="terms" class="ms-2 text-base font-medium text-gray-900 dark:text-gray-300"
							>Akceptuję
							<a
								href="/policy"
								class="text-indigo-900 hover:text-indigo-500 dark:text-indigo-500 transition duration-200 delay-150 ease-in"
								>regulamin</a
							></label
						>
					</div>
				</div>

				<div class="flex items-center z-0 w-full mb-5 group flex-wrap">
					<button
						@click.prevent="submitForm()"
						type="submit"
						class="w-36 text-white uppercase bg-indigo-800 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-100 delay-150 ease-in">
						Wyślij
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios'

const date = new Date().toISOString().substr(0, 10)

// const Regexp = new RegExp('^[+]{1}[0-9]{11}$')
// let invalidNumber = ref(true)

const formData = ref({
	dateVal: '',
	selected: '',
	personName: '',
	mail: '',
	surname: '',
	phoneNumber: '',
	pick: '',
	conditions: ref(false),
})

// function checkPhone() {
// 	if (Regexp.test(phoneNumber.value)) {
// 		invalidNumber.value = false
// 	} else {
// 		invalidNumber.value = true
// 	}
// }
const clearForm = () => {
	formData.value.selected = ''
	formData.value.personName = ''
	formData.value.surname = ''
	formData.value.dateVal = ''
	formData.value.pick = ''
	formData.value.phoneNumber = ''
	formData.value.mail = ''
	formData.value.conditions = false
}
const submitForm = async () => {
	const missingItems = []

	const allForm =
		formData.value.personName.trim().length > 0 &&
		formData.value.surname.trim().length > 0 &&
		formData.value.dateVal.trim().length > 0 &&
		formData.value.selected.trim().length > 0 &&
		formData.value.pick.trim().length > 0 &&
		formData.value.phoneNumber.trim().length > 6 &&
		formData.value.conditions

	if (allForm) {
		try {
			// Wysyłanie danych formularza do pliku PHP na serwerze/
			const response = await axios.post('/phpmailer.php', formData.value)

			alert('Wysłano!')
			clearForm()
		} catch (error) {
			console.error('Błąd wysyłania danych formularza:', error)
		}
	} else {
		// alert('Formularz wypełniony niepoprawnie')

		Object.keys(formData.value).forEach(key => {
			if ((key, formData.value[key] === '' || formData.value[key] === false)) {
				switch (key) {
					case 'personName':
						key = 'imię'
						break
					case 'surname':
						key = 'nazwisko'
						break
					case 'dateVal':
						key = 'data'
						break
					case 'selected':
						key = 'opcja'
						break
					case 'pick':
						key = 'rodzaj makijażu'
						break
					case 'mail':
						key = ''
						break
					case 'phoneNumber':
						key = 'numer telefonu'
						break
					case 'conditions':
						key = 'regulamin'
						break
				}
				missingItems.push(key)
			}
		})

		alert(`Formularz wypełniony niepoprawnie. Brakuje: ${missingItems.join(' & ')}`)
	}
}
</script>
