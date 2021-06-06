<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <!--
            Aprendemos a realizar dois tipos de associação de dados, inclusive a combiná-los para atingir o two-way data binding. Vejamos um exemplo:
            No entanto, vimos que o Vue possui uma diretiva especializada neste tipo de associação.
            A diretiva v-model é utilizada quando há um two-way data binding.
        -->
        <!-- <input id="titulo" autocomplete="off" @input="foto.titulo = $event.target.value" :value="foto.titulo" /> -->
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo" />
        <!-- O modificador .lazy serve para executar a interpolação apenas quando o input perde o foco -->
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <!-- <input id="url" autocomplete="off" @input="foto.url = $event.target.value" :value="foto.url" /> -->
        <!--
            A diretiva v-show exibe o conteúdo caso o parametro seja diferente de vazio.
            Por exemplo, enquanto não existe nada em foto.url não é exibido o componente imagem-responsiva
        -->
        <input id="url" autocomplete="off" v-model.lazy="foto.url" />
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-show="foto.url"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <!-- <textarea id="descricao" autocomplete="off" @input="foto.descricao = $event.target.value" :value="foto.descricao"></textarea> -->
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

import Foto from '../../domain/foto/Foto';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  methods: {

      grava() {
          console.log('enviar dados para a API');

          this.foto = new Foto()
      }
  },

  data() {

      return {

          foto: new Foto()
      }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>