<script lang="ts" src="./SubscriptionPage.ts"/>

<template>
	<v-row align="center" justify="center" class="h-screen">
		<v-row align="center" justify="center" class="pa-2 ma-2">
			<v-col cols="12" class="ma-8">
				<h2 class="text-h2" justify="center" align="center">Flexible Plans</h2>
				<p class="text-caption primary-text" color="primary" align="center">
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
	</v-row>
</template>

<style>
.auth-card {
	padding: 20px;
	border-radius: 8px;
	animation: fade-in 0.5s ease-in-out;
	background-color: #f3f7f9;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>