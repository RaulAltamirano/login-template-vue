<script lang="ts" src="./LoginComponent"/>

<template>
  <v-container 
    fluid>
    <v-row 
      justify="center"
      align="center" 
      class="min-h-screen">
      <v-col 
        cols="12" 
        sm="8" 
        md="6" 
        lg="4">
        <v-card 
          class="elevation-12 rounded-lg shadow-lg auth-card">
          <v-row 
            justify="center" 
            align="center" 
            class="text-center">
            <v-col cols="12">
              <v-card-title>
                <v-icon  
                large 
                color="dark" >mdi-lock</v-icon>
                <h2 class="text-dark text-2xl font-bold">Login</h2>
              </v-card-title>
            </v-col>
          </v-row>
          <v-card-text class="px-8 py-6">
            <v-form 
              @submit="login">
              <v-text-field 
                v-model="email" 
                label="Email" 
                outlined 
                required 
                autocomplete="email"
                class="mb-4"></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                label="Password"
                @click:append="showPassword = !showPassword"
                outlined
                required
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                class="mb-4"
              ></v-text-field>
              <v-btn 
                color="secondary" 
                dark 
                block 
                type="submit" 
                >Sign In</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions 
            class="justify-center">
            <span   
              class="text-black mr-2">
                Don't have an account?
            </span>
            <router-link 
              to="/signup" 
              class="text-primary">Sign up</router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
