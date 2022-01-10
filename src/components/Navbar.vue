<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                v-if="!isOpen"
                class="h-6 w-6"
                :class="isOpen ? 'hidden' : 'block'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                v-else
                class="h-6 w-6"
                :class="isOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://soliditytips.com/terminal-icon.png"
              alt="SolidityTips.com logo"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://soliditytips.com/terminal-icon.png"
              alt="SolidityTips.com logo"
            />
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link
              :to="{ name: 'Home' }"
              class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page"
              >Home</router-link
            >

            <router-link
              :to="{ name: 'About' }"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >About</router-link
            >
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <wallet-connect />
            <!-- <button
              type="button"
              :disabled="walletStore.address != ''"
              :class="walletStore.address == '' ? 'hover:bg-indigo-600' : ''"
              @click="connectWallet()"
              class="
                relative
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-indigo-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="">{{
                walletStore.address != ''
                  ? `Connected ${walletStore.address.slice(
                      0,
                      2
                    )}...${walletStore.address.slice(-4)}`
                  : `Connect Wallet`
              }}</span>
            </button> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          :to="{ name: 'Home' }"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Home</router-link
        >

        <router-link
          :to="{ name: 'About' }"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >About</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// import { useWalletStore } from '../stores/wallet'
import WalletConnect from './WalletConnect.vue'

export default defineComponent({
  components: { WalletConnect },
  // setup() {
  //   const walletStore = useWalletStore()
  //   const isOpen = ref<boolean>(false)

  //   const connectWallet = async () => {
  //     try {
  //       // @ts-expect-error Window.ethereum not typed
  //       const data = await window.ethereum.request({
  //         method: 'eth_requestAccounts',
  //       })
  //       console.log('data :>> ', data)

  //       walletStore.saveWalletData({ address: data[0] })
  //       console.log('DApp connected to your wallet 💰')
  //     } catch (error) {
  //       console.error('Error connecting DApp to your wallet')
  //       console.error(error)
  //     }
  //   }
  //   return {
  //     connectWallet,
  //     walletStore,
  //     isOpen,
  //   }
  // },
})
</script>
