export default {
    /**
     * 
     * O módulo Transform agora exporta um objeto que contém as configurações da nossa diretiva. Inclusive veja que nenhum nome foi definido para ela.
     * Por fim, precisamos alterar o componente alurapic/src/components/home/Home.vue para importar nossa diretiva e adicioná-la ao componente
     * 
     */

    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', function () {
            let incremento = binding.value || 90;
            let efeito;

            if (!binding.arg || binding.arg == 'rotate') {

                if (binding.modifiers.reverse) {

                    current -= incremento;
                } else {
                    current += incremento;
                }

                efeito = `rotate(${current}deg)`;
            } else if (binding.arg == 'scale') {

                efeito = `scale(${incremento})`;
            };

            this.style.transform = efeito


            if (binding.modifiers.animate) {
                
                this.style.transition = 'transform 0.5s';
            }
        });
    }

}