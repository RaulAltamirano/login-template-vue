<script lang="ts" src="./HomePage.ts" />

<template>
  <v-row align="center" justify="center" class="h-100">
    <v-col cols="12" md="8" lg="6" class="text-center">
      <v-card class="elevation-12">
        <v-img style="  background-image: url('src/assets/waves.svg');
" gradient="to right, #667eea, #764ba2" height="300">
          <v-card-title class="text-center">
            <h1 class="text-white">
              Welcome to Login
            </h1>
          </v-card-title>
        </v-img>
        <v-card-text class="px-6 py-8">
          <p class="text-center text-lg mb-6">
            Hello World!!
          </p>
          <v-btn class="mx-auto d-block" color="primary" large rounded>
            Logout
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>