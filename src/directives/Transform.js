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


            if (binding.modifiers.reverse) {

                current -= incremento;
            } else {
                current += incremento;
            }

            this.style.transform = `rotate(${current}deg)`;


            if (binding.modifiers.animate) {
                
                this.style.transition = 'transform 0.5s';
            }
        });
    }
});