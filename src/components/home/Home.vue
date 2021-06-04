<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" placeholder="Filtre pelo título da foto" v-on:input=" filtro = $event.target.value " />

<!--    <p>{{ filtro }}</p> -->

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for=" foto of fotosComFiltro ">

        <meu-painel :titulo="foto.titulo">

          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />

        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva
  },

  data() {
    return {
      titulo: 'AluraPic',

      fotos: [],

      filtro: ''
    }
  },

  computed: {

    fotosComFiltro() {

      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        // criar uma expressão regular com base no que foi digitado no filtro e varrer lista de fotos para trazer imagens com base no filtro
        // i = insentive (não diferenciar maiúsculas e minúsculas)
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }

  },

  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos');

/* o código comentado está escrito usando a sintaxe do ES5 e pode ser substituído pelo código abaixo que usa a sintaxe E2015
 *
    promise.then(function (res) {
      let response = res.json();

      response.then(imagens_api => this.fotos = imagens_api); // NESTE TRECHO NÃO CONSEGUI ESCREVER O CÓDIGO COM SINTAXE ES5 :: 
    });
 *
 */
    promise
      .then(res => res.json())
      .then(
        imagens_api => this.fotos = imagens_api,
        erro => console.log(erro.status)
      );

  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style-type: none;
    text-align: center;
  }
  .lista-fotos-item {
    display: inline-block;
  }
  .filtro {
    display: block;
    width: 100%;
    height: 3em;
  }
</style>