<template>
  <v-text-field
    label="E-mail"
    density="compact"
    placeholder="qwerty-shmerty@gmail.com"
    prepend-inner-icon="mdi-email-outline"
    variant="outlined"
    v-model="emailData"
    :error-messages="$v.emailData.$errors[0]?.$message"
  />

  <v-text-field
    label="Password"
    :append-inner-icon="isVisible ? 'mdi-eye-off' : 'mdi-eye'"
    :type="isVisible ? 'text' : 'password'"
    density="compact"
    placeholder="Enter your password"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="isVisible = !isVisible"
    v-model="password"
    :error-messages="$v.password.$errors[0]?.$message"
    class="pt-4"
  />

  <v-btn
    class="mb-8 mt-4"
    color="blue"
    size="large"
    variant="tonal"
    block
    @click="login"
  >
    Log In
  </v-btn>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";

const router = useRouter();

const isVisible = ref(false);
const emailData = ref("");
const password = ref("");
const rules = computed(() => ({
  emailData: { required, email },
  password: { required, minLength: minLength(6) },
}));

const $v = useVuelidate(rules, { emailData, password });

const login = () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    router.push({ name: "game" });
  }
};
</script>
