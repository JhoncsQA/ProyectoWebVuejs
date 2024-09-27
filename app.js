const {createApp, ref}= Vue;
const app = createApp({

    
    setup(){
        let titulo=ref('Titulo React');
        let app=ref('desde app.js');
        console.log('Hola jhon')
        let variable = 2;
        const vari = ref("50");      

        setTimeout(() => {
            vari.value="20";
        }, 1000);

        return {vari,titulo,app}
    }
    
    
});

app.mount('#jhon');
