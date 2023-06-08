<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center" justify="center" class="h-100">
        <v-col cols="12" md="8" lg="6">
          <v-card class="elevation-12">
            <v-img
              gradient="to right, #667eea, #764ba2"
              height="300"
            >
              <v-card-title class="text-center">
                <h1 class="text-white">Welcome to Our Website</h1>
              </v-card-title>
            </v-img>
            
            <v-card-text class="px-6 py-8">
              <p class="text-center text-lg mb-6">
                Discover the best products and services with our intuitive platform.
              </p>
              <v-btn class="mx-auto d-block" color="primary" large rounded>
                Get Started
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.home {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.v-card {
  border-radius: 8px;
}

.v-card-title {
  padding: 24px;
}

.v-card-text {
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>