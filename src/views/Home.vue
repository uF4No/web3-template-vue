<template>
  <div class="text-center pt-12">
    <h1 class="text-2xl mb-8">This is the Home page</h1>
    <p v-if="walletStore.address != ''">
      Your wallet address is: {{ walletStore.acc_short }}
    </p>
    <p v-else>You've not connected your wallet yet</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useWalletStore } from '../stores/wallet'

export default defineComponent({
  setup() {
    const walletStore = useWalletStore()

    return {
      walletStore,
    }
  },
})
</script>
