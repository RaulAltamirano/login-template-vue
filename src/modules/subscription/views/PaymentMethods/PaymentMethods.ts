import { computed, ref } from "vue";
import { defineComponent } from "vue"

import { useRouter } from "vue-router"

export default defineComponent({
	name: 'payments-methods-page',
	setup() {
		const router = useRouter();
		// Data
		const selectedPayment = ref('card');
		const cardName = ref('');
		const cardNumber = ref('');
		const cardExpirationMonth = ref(null);
		const cardExpirationYear = ref(null);
		const cardCVC = ref('');

		// Validation rules
		const nameRules = [
			(v: any) => !!v || 'Name is required',
			(v: string) => /^[A-Za-z\s]+$/.test(v) || 'Name must contain only letters and spaces',
		];

		const cardNumberRules = [
			(v: any) => !!v || 'Card number is required',
			(v: string) => /^\d{16}$/.test(v) || 'Card number must be 16 digits',
		];

		const cvcRules = [
			(v: any) => !!v || 'Security code is required',
			(v: string) => /^\d{3}$/.test(v) || 'Security code must be 3 digits',
		];

		// Computed properties for validation
		const nameValid = computed(() => nameRules[1](cardName.value) === true);
		const cardNumberValid = computed(() => cardNumberRules[1](cardNumber.value) === true);
		const cvcValid = computed(() => cvcRules[1](cardCVC.value) === true);

		// Data for dropdowns
		const months = [
			'01 - January', '02 - February', '03 - March', '04 - April', '05 - May', '06 - June',
			'07 - July', '08 - August', '09 - September', '10 - October', '11 - November', '12 - December'
		];

		const years = (() => {
			const currentYear = new Date().getFullYear();
			const yearOptions = [];
			for (let i = 0; i < 10; i++) {
				yearOptions.push(currentYear + i);
			}
			return yearOptions;
		})();

		// Methods
		const submitPayment = () => {
			// if (nameValid.value && cardNumberValid.value && cvcValid.value) {
				router.push({ name: 'success-payment' });
			// }
		};

		return {
			cardCVC,
			cardExpirationMonth,
			cardExpirationYear,
			cardName,
			cardNumber,
			cardNumberRules,
			cardNumberValid,
			cvcRules,
			cvcValid,
			months,
			nameRules,
			nameValid,
			selectedPayment,
			submitPayment,
			years,
		};
	}
}
)