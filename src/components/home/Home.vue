<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" placeholder="Filtre pelo título da foto" v-on:input=" filtro = $event.target.value " />

<!--    <p>{{ filtro }}</p> -->

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for=" foto of fotosComFiltro " v-bind:key="foto.id">

        <meu-painel :titulo="foto.titulo">

          <!-- <imagem-responsiva v-meu-transform="{increment: 15, animate: true}" :url="foto.url" :titulo="foto.titulo" /> -->
          <imagem-responsiva v-meu-transform.animate.reverse="15" :url="foto.url" :titulo="foto.titulo" />

          <!-- passando foto como parâmetro do método remove do componente Home -->
          <meu-botao 
            tipo="button" 
            rotulo="REMOVER" 
            @botaoAtivado="remove(foto)" 
            :confirmacao="true" 
            estilo="perigo" />

        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao
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

  methods: {

      remove(foto) {

        alert('Remover a foto ' + foto.titulo);

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