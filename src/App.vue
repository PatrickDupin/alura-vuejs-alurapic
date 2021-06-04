<template>
  <div class="corpo">

    <nav>
      <ul>
        <li v-for=" route of routes ">
          <router-link :to=" route.path ? route.path : '/' ">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>
    
    <transition name="pagina-fade">
      <router-view> </router-view>
    </transition>

  </div>
</template>

<script>
import { routes } from './routes';
export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .pagina-fade-enter, .pagina-fade-leave-active {
    opacity: 0;
  }
  .pagina-fade-enter-active, .pagina-fade-leave-active {
    transition: opacity 0.4s;
  }
</style>
