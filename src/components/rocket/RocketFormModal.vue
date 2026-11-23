<template>
  <v-dialog
    :model-value="modelValue"
    max-width="550"
    persistent
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card rounded="lg">
      <v-card-title class="d-flex align-center pa-5">
        <v-icon icon="mdi-rocket-launch" color="primary" class="mr-2" />
        Add New Rocket
        <v-spacer />

        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-5">
        <v-form ref="formRef" @submit.prevent="handleSubmit">
          <div class="text-subtitle-2 mb-2">Rocket Name *</div>

          <v-text-field
            v-model="form.full_name"
            placeholder="Enter rocket name"
            variant="outlined"
            density="comfortable"
            :rules="[requiredRule]"
          />

          <div class="text-subtitle-2 mb-2">Description</div>

          <v-textarea
            v-model="form.description"
            placeholder="Enter rocket description"
            variant="outlined"
            density="comfortable"
            rows="3"
            auto-grow
          />

          <div class="text-subtitle-2 mb-2">Image URL</div>

          <v-text-field
            v-model="form.image_url"
            placeholder="https://example.com/rocket.jpg"
            variant="outlined"
            density="comfortable"
            :rules="[urlRule]"
          />

          <div class="d-flex justify-end ga-2 mt-3">
            <v-btn variant="outlined" class="text-none" @click="close">
              Cancel
            </v-btn>

            <v-btn color="primary" type="submit" class="text-none">
              Save Rocket
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { RocketForm } from "@/types/rocket";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  submit: [rocket: RocketForm];
}>();

const formRef = ref();

const initialForm = (): RocketForm => ({
  full_name: "",
  description: "",
  image_url: "",
});

const form = ref<RocketForm>(initialForm());

const requiredRule = (value: string) => !!value || "This field is required.";
const urlRule = (value: string) =>
  !value || /^https?:\/\/.+/.test(value) || "Please enter a valid URL.";

const close = () => {
  emit("update:modelValue", false);
};

const handleSubmit = async () => {
  const { valid } = await formRef.value.validate();

  if (!valid) return;

  emit("submit", { ...form.value });

  form.value = initialForm();

  close();
};

watch(
  () => props.modelValue,
  (visible) => {
    if (!visible) {
      form.value = initialForm();
      formRef.value?.resetValidation();
    }
  },
);
</script>
