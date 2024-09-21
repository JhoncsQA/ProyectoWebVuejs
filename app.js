const {createApp, ref}= Vue;
const app = createApp({

    template:`
    <h1>Hola Mundo</h1>
    <p>desde app.js<p>
    
    {{vari}}

    `,
    setup(){
        console.log('Hola jhon')
        let variable = 2;
        const vari = ref("50");      

        setTimeout(() => {
            vari.value="20";
        }, 1000);

        return {vari}
    }
    
    
});

app.mount('#jhon');
