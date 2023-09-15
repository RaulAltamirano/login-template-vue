import { defineComponent } from "vue"
import { useRouter } from "vue-router"

  export default defineComponent({
      name: 'subscription-page',
      props: {
        title: String,
        price: Number,
        features: Array,
        popular: Boolean
      },
      setup() {
        const router = useRouter()
          return {
            toPaymentMethod(){
                router.push({ name: 'payment-method-page' })
            }
          }
      }
  }
  )