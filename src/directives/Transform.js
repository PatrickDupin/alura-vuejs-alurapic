import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {

        let current = 0;

        // v-meu-transform="{increment: 15, animate: true}"
        // el.addEventListener('dblclick', function () {
        //     let incremento = 90;
        //     let animate = false;

        //     if (binding.value) {

        //         incremento = binding.value.increment;
        //         animate = binding.value.animate;
        //     }

        //     current += incremento;
        //     this.style.transform = `rotate(${current}deg)`;

        //     if (animate) {

        //         this.style.transition = 'transform 0.5s';
        //     }
        // });

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
});