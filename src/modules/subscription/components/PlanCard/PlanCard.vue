<script lang="ts" src="./PlanCard"/>

<template>
	<v-card class="PlanCard elevation-12 ma-3" :color="popular ? 'purple-lighten-5' : ''">
		<v-card-title :class="popular ? 'blue darken-2 white--text' : ''">
			<div class="popular-badge" v-if="popular">
        <v-icon color="white">mdi-fire</v-icon>
        <div class="text-subtitle-1">Most popular</div>
      </div>
			<h3 class="PlanCard-title text-h4">{{ title }}</h3>
			<p class="PlanCard-price text-caption grey--text">
				$ {{ price }} / Users
			</p>
		</v-card-title>
		<v-card-text>
			<v-list bg-color="transparent">
				<v-list-item v-for="(feature, index) in features" :key="index">
					<v-list-item-content>
						<v-list-item-title>
							<v-icon color="secondary" class="PlanCard-features mr-2">mdi-check</v-icon>
							{{ feature }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card-text>
		<v-card-actions>
			<v-btn color="primary" @click="toPaymentMethod" block variant="outlined">
				Choose Plan
				<v-icon right>mdi-arrow-right</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<style>
.popular-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #6200ee; 
  color: white; 
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popular-badge v-icon {
  font-size: 18px;
  margin-right: 4px;
}

.popular-badge .text-subtitle-1 {
  font-size: 12px;
}
.PlanCard {
  	background-color: #f3f7f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    animation: fade-in 0.5s ease-in-out;
  }

  .PlanCard:hover {
    transform: scale(1.05);
  }

  .PlanCard-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .PlanCard-price {
    font-size: 2rem;
    font-weight: bold;
    color: #6200ee;
    margin-bottom: 1rem;
  }

  .PlanCard-features {
    list-style: none;
    padding: 0;
  }

  .PlanCard-features li {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .PlanCard-popular {
    background-color: #007BFF;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    position: relative;
  }

  .PlanCard-popular::after {
    content: "Popular";
    background-color: #ffcc29;
    color: #333;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.2rem 0;
  }
</style>