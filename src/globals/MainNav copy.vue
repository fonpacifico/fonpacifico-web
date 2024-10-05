<script setup>
import { ref, onMounted } from 'vue';

const showMenu = ref(false);
const isDesktop = ref(false);
const overlay = ref(null);
const activeSubmenu = ref(null);

const mql = window.matchMedia('(max-width: 1024px)');

const checkDevice = () => {
  isDesktop.value = !mql.matches;
  if (mql.matches) {
    showMenu.value = false;
    activeSubmenu.value = null;
  }
};

mql.addEventListener('change', checkDevice);

const closeMenu = (e) => {
  e.target.blur();
  showMenu.value = false;
  activeSubmenu.value = null;
  if (overlay.value) {
    overlay.value.style.display = 'none';
  }
};

// Updated toggle logic
const toggleSubmenu = (index) => {
  // If clicking the same submenu that's already open, close it
  if (activeSubmenu.value === index) {
    activeSubmenu.value = null;
    if (overlay.value) {
      overlay.value.style.display = 'none';
    }
  } else {
    // If clicking a different submenu, close the current one and open the new one
    activeSubmenu.value = index;
    if (overlay.value) {
      overlay.value.style.display = 'block';
    }
  }
};

// Close submenu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('.nav');
  if (nav && !nav.contains(event.target) && !isDesktop.value) {
    activeSubmenu.value = null;
    if (overlay.value) {
      overlay.value.style.display = 'none';
    }
  }
};

onMounted(() => {
  checkDevice();
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header>
    <div class="fp-container">
      <span>
        <router-link :to="{ name: 'home' }">
          <img
            class="logo"
            src="/logo_fonpacifico.svg"
            alt="logo de fonpacifico"
          />
        </router-link>
      </span>
      <nav
        class="nav"
        :class="{ open: showMenu }"
      >
        <ul class="nav__list">
          <li class="nav__list-item">
            <button
              @click.stop="toggleSubmenu(0)"
              :class="{ active: activeSubmenu === 0 }"
            >
              Nosotros
              <span
                class="material-symbols-outlined"
                :class="{ rotate: activeSubmenu === 0 }"
              >
                keyboard_arrow_down
              </span>
            </button>
            <div
              class="nav__submenu"
              :class="{ show: activeSubmenu === 0 }"
            >
              <ul class="fp-container">
                <li>
                  <router-link
                    class="subnav-link"
                    :to="{ name: 'nosotros' }"
                    @click="closeMenu"
                  >
                    Acerca de Fonpacífico <br />
                    <span class="subtitle">Conoce más sobre nosotros</span>
                  </router-link>
                </li>
                <!-- Other submenu items -->
              </ul>
            </div>
          </li>
          <li class="nav__list-item">
            <button
              @click.stop="toggleSubmenu(1)"
              :class="{ active: activeSubmenu === 1 }"
            >
              Nosotros
              <span
                class="material-symbols-outlined"
                :class="{ rotate: activeSubmenu === 1 }"
              >
                keyboard_arrow_down
              </span>
            </button>
            <div
              class="nav__submenu"
              :class="{ show: activeSubmenu === 1 }"
            >
              <ul class="fp-container">
                <li>
                  <router-link
                    class="subnav-link"
                    :to="{ name: 'nosotros' }"
                    @click="closeMenu"
                  >
                    Acerca de Fonpacífico <br />
                    <span class="subtitle">Conoce más sobre nosotros</span>
                  </router-link>
                </li>
                <!-- Other submenu items -->
              </ul>
            </div>
          </li>
          <li class="nav__list-item">
            <button
              @click.stop="toggleSubmenu(2)"
              :class="{ active: activeSubmenu === 2 }"
            >
              Nosotros
              <span
                class="material-symbols-outlined"
                :class="{ rotate: activeSubmenu === 2 }"
              >
                keyboard_arrow_down
              </span>
            </button>
            <div
              class="nav__submenu"
              :class="{ show: activeSubmenu === 2 }"
            >
              <ul class="fp-container">
                <li>
                  <router-link
                    class="subnav-link"
                    :to="{ name: 'nosotros' }"
                    @click="closeMenu"
                  >
                    Acerca de Fonpacífico <br />
                    <span class="subtitle">Conoce más sobre nosotros</span>
                  </router-link>
                </li>
                <!-- Other submenu items -->
              </ul>
            </div>
          </li>
          <li class="nav__list-item">
            <button
              @click.stop="toggleSubmenu(3)"
              :class="{ active: activeSubmenu === 3 }"
            >
              Nosotros
              <span
                class="material-symbols-outlined"
                :class="{ rotate: activeSubmenu === 3 }"
              >
                keyboard_arrow_down
              </span>
            </button>
            <div
              class="nav__submenu"
              :class="{ show: activeSubmenu === 3 }"
            >
              <ul class="fp-container">
                <li>
                  <router-link
                    class="subnav-link"
                    :to="{ name: 'nosotros' }"
                    @click="closeMenu"
                  >
                    Acerca de Fonpacífico <br />
                    <span class="subtitle">Conoce más sobre nosotros</span>
                  </router-link>
                </li>
                <!-- Other submenu items -->
              </ul>
            </div>
          </li>
        </ul>
        <router-link
          class="contact-button"
          :to="{ name: 'contacto' }"
          @click="closeMenu"
        >
          Contacto
        </router-link>
      </nav>
      <button
        class="nav__toggle"
        @click.stop="showMenu = !showMenu"
      >
        <span class="material-symbols-outlined">{{
          showMenu ? 'close' : 'menu'
        }}</span>
      </button>
    </div>
  </header>
  <div
    ref="overlay"
    class="overlay"
    @click="closeMenu"
  ></div>
</template>

<style lang="scss" scoped>
/* Previous styles remain the same, add these new styles */

.nav__list-item {
  > button {
    &.active {
      color: get-color('primary');
    }
  }
}

/* Rest of the previous styles remain unchanged */
</style>
