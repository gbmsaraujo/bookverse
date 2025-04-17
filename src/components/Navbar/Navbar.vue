<template>
  <header :class="styles.headerContainer">
    <h2>Bookverse</h2>
    <nav :class="styles.navHeader">
      <ul>
        <li>Home</li>
        <li>Minha Biblioteca</li>
        <li>Buscar Livros</li>
        <li><n-dropdown :options="options" trigger="click"> Perfil </n-dropdown></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import styles from './Navbar.module.scss'
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5'
import { NIcon, NDropdown } from 'naive-ui'
import { h, reactive } from 'vue'

function renderIcon(icon) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

const options = reactive([
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
