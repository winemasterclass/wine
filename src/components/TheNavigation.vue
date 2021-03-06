<template>
  <TransitionRoot appear :show="isShowing" enter="transition-all ease-in duration-100" enter-from="opacity-0" enter-to="opacity-100" leave="transition-all ease-in duration-100" leave-from="opacity-100" leave-to="opacity-0">
    <Disclosure as="nav" class="" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                <span class="sr-only">Open main menu</span>
                <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="@/assets/images/brand/Wine-Masterclass-logo.png" alt="Wine Masterclass Logo" />
              <img class="hidden lg:block h-8 w-auto" src="@/assets/images/brand/Wine-Masterclass-logo.png" alt="Wine Masterclass Logo" />
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <!-- Current: "border-purple-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <router-link v-for="item in navigation" :key="item.name" :to="item.path" class="border-transparent text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a href="#/ms/login" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-white shadow hover:bg-gray-50 focus:outline-none">
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <DisclosureButton as="div">
          <div class="pt-2 pb-3 space-y-1">
            <!-- Current: "bg-purple-50 border-purple-500 text-purple-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
            <router-link v-for="item in navigation" :key="item.name" :to="item.path" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
              {{ item.name }}
            </router-link>
          </div>
        </DisclosureButton>
      </DisclosurePanel>
    </Disclosure>
  </TransitionRoot>
</template>

<script>
  import { ref } from "vue";
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
  import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
  import { TransitionRoot } from "@headlessui/vue";

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },
  ];

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      BellIcon,
      MenuIcon,
      XIcon,
      TransitionRoot,
    },
    setup() {
      const open = ref(false);
      const isShowing = ref(true);

      return {
        open,
        navigation,
        isShowing,
      };
    },
  };
</script>

<style scoped>
  .router-link-exact-active {
    color: rgba(24, 24, 27, var(--tw-text-opacity));
  }
</style>
