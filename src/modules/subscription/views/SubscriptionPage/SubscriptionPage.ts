import { defineComponent } from "vue"
import PlanCard from "../../components/PlanCard/PlanCard.vue";
export default defineComponent({
	name: 'subscription-page',
	components: {
		PlanCard
	},
	setup() {
		const basic = [
			"Get started with messaging",
			"Flexible team meetings",
			"5 TB cloud storage",
			"Access to our basic support center",
			"Monthly usage reports",
			"Basic security features",
			"25 GB email storage",
			"Standard document collaboration tools"
		];
		
		const startup = [
			"All features in Basic",
			"Flexible call scheduling",
			"15 TB cloud storage",
			"Priority customer support",
			"Advanced usage analytics",
			"Enhanced security features",
			"50 GB email storage",
			"Advanced document versioning and history tracking",
			"Integration with popular productivity tools"
		];
		
		const enterprise = [
			"All features in Startup",
			"Growth oriented",
			"Unlimited cloud storage",
			"Dedicated account manager",
			"Customized usage reports and analytics",
			"Advanced security and compliance solutions",
			"100 GB email storage",
			"Enterprise-grade document management and collaboration",
			"Full access to our API for integration with proprietary systems",
			"24/7 premium customer support"
		];
		
		return {
			basic,
			startup,
			enterprise
		}
	}
}
)