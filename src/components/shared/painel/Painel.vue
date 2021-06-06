<template>
    <div class="painel">
        <h2 class="painel-titulo" @dblclick=" visivel = !visivel ">{{ titulo }}</h2>
        <!--/ 
            A diretiva v-on pode ser substituída pelo atalho @.
            Assim sendo:
                ':' é uma atalho da fonte de dados para a view (v-bind);
                '@' é uma atalho da view para a fonte de dados (v-on);
        -->

        <transition name="painel-fade">
            <div class="painel-conteudo" v-show=" visivel ">
                <slot></slot>
            </div>
        </transition>

    </div>
</template>

<script>
export default {

    props: ['titulo'],

    data() {
        return {
            visivel: true
        }
    }
}
</script>

<style scoped>
  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    /*height: 260px;*/
    vertical-align: top;
    text-align: center;
  }
  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
    min-height: 60px;
  }
  * {
      box-shadow: 5px 5px 5px black;
  }

  /** 
    propriedade-name-do-elemento-transition = painel-fade (nosso exemplo)
        painel-fade-enter: antes do elemento ser incluído ou removido, o estado normal
        painel-fade-enter-active: quando o elemento está sendo incluído
        painel-fade-leave-active: quando o elemento está sendo removido
   */

   .painel-fade-enter, .painel-fade-leave-active {
       opacity: 0;
   }
   .painel-fade-enter-active, .painel-fade-leave-active {
       transition: opacity 0.4s;
   }
   .painel-conteudo {
       overflow: hidden;
   }
</style>
