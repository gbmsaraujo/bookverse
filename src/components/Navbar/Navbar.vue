<template>
  <header :class="styles.headerContainer">
    <h2>Bookverse</h2>
    <nav :class="styles.navHeader">
      <ul>
        <RouterLink to="/"><li>Home</li></RouterLink>
        <RouterLink to="/library"><li>Minha Biblioteca</li></RouterLink>
        <RouterLink to="/discover"><li>Buscar Livros</li></RouterLink>
        <li><n-dropdown :options="options" trigger="click"> Perfil </n-dropdown></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import styles from './Navbar.module.scss'
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5'
import { NDropdown, NIcon, type DropdownOption } from 'naive-ui'
import { h, reactive, type Component } from 'vue'
import { RouterLink } from 'vue-router'

function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

const options = reactive<DropdownOption[]>([
  {
    label: 'Perfil',
    key: 'profile',
    icon: renderIcon(UserIcon),
  },
  {
    label: 'Editar Perfil',
    key: 'editProfile',
    icon: renderIcon(EditIcon),
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
])
</script>
