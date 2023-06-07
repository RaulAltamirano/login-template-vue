<template>
	<v-container fluid class="bg-gradient-to-r from-teal-500 to-blue-600 min-h-screen bg-svg-background">
		<v-row justify="center" align="center" class="min-h-screen">
			<v-col cols="12" sm="8" md="6" lg="4">
				<v-card class="elevation-12 rounded-lg">
					<v-card-title class="text-center">
						<v-icon large color="dark" class="animate-bounce">mdi-account-plus</v-icon>
						<h2 class="text-dark text-2xl font-bold">Sign Up</h2>
					</v-card-title>
					<v-card-text class="px-8 py-6">
						<v-form @submit="signup">
							<v-text-field v-model="name" label="Name" outlined required></v-text-field>
							<v-text-field v-model="email" label="Email" outlined required></v-text-field>
							<v-text-field v-model="password" label="Password" outlined required
								type="password"></v-text-field>
							<v-text-field v-model="confirmPassword" label="Confirm Password" outlined required
								type="password"></v-text-field>
							<v-btn color="secondary" dark block type="submit" class="animate-pulse">Sign Up</v-btn>
						</v-form>
					</v-card-text>
					<v-card-actions class="justify-center">
						<span class="text-black mr-2">Already have an account?</span>
						<router-link to="/login" class="text-primary">Login</router-link>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'signup-form',
	setup() {
		return {
		}
	}
}
)
</script>

<style>
.bg-svg-background {
  background-image: url('src/assets/waves.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.animate-bounce {
	animation: bounce 1s infinite;
}

@keyframes bounce {

	0%,
	100% {
		transform: translateY(-10%);
	}

	50% {
		transform: translateY(0);
	}
}

.animate-pulse {
	animation: pulse 1s infinite;
}

@keyframes pulse {

	0%,
	100% {
		opacity: 1;
	}

	50% {
		opacity: 0.5;
	}
}</style>