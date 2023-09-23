<script lang="ts" src="./SubscriptionPage.ts"/>

<template>
	<v-row justify="center" align-content="center" class="h-screen">
		<div class="background-image">
			<v-row align="center" justify="center" class="pa-2 ma-2">
				<v-col cols="12" class="ma-8 text-center">
					<h2 class="text-h2 write-effect" style="color: #ffffff;" justify="center" align="center">
						Flexible Plans
					</h2>
					<p class="text-caption primary-text write-effect" color="primary" align="center">
						Choose a plan that works best for you and your team.
					</p>
				</v-col>
				<v-col cols="12" md="4">
					<PlanCard title="Basic" price="10" :features="basic" />
				</v-col>
				<v-col cols="12" md="4">
					<PlanCard title="Startup" price="24" popular :features="startup" />
				</v-col>
				<v-col cols="12" md="4">
					<PlanCard title="Enterprise" price="35" :features="enterprise" />
				</v-col>
			</v-row>
		</div>
	</v-row>
</template>

<style scoped>
.background-image {
	background-image: url('src/assets/example.svg');
	background-size: cover;
	background-position: center;
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	/* Inicialmente establece la opacidad en 0 para ocultar la imagen */
	animation: fadeIn 1s ease-in-out forwards;
	/* Define la animación de entrada */
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.text-center {
	text-align: center;
}

.write-effect {
	color: aliceblue;
	overflow: hidden;
	white-space: nowrap;
	width: 0;
	animation: write 1s steps(20) forwards, fade-in 1s 1s ease-in-out forwards;
	opacity: 0;
}

@keyframes write {
	from {
		width: 0;
	}

	to {
		width: 100%;
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>