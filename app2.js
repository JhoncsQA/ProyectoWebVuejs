const quotes = [
    { quote: 'HTML estructura el contenido, CSS lo estiliza, y JavaScript le da vida a la web.', author: 'John Doe' },
    { quote: 'Una página web rápida mejora la experiencia de usuario y el SEO.', author: 'Jane Smith' },
    { quote: 'El diseño responsive adapta tu sitio a cualquier dispositivo.', author: 'Michael Johnson' },
    { quote: 'Las APIs conectan tu aplicación con el mundo exterior de datos.', author: 'Emily Davis' },
    { quote: 'Node.js permite construir aplicaciones web escalables con JavaScript del lado del servidor.', author: 'David Brown' },
    { quote: 'El diseño centrado en el usuario es clave para un sitio web exitoso.', author: 'Sophia Taylor' },
    { quote: 'Los frameworks agilizan el desarrollo web, reduciendo el código repetitivo.', author: 'Chris Wilson' },
    { quote: 'Optimizando imágenes, mejoramos el rendimiento y reducimos tiempos de carga.', author: 'Olivia Martinez' },
    { quote: 'Una buena arquitectura web facilita el mantenimiento y la escalabilidad.', author: 'Liam Anderson' },
    { quote: 'El testing automatizado asegura la calidad y funcionalidad del sitio web.', author: 'Isabella Thomas' },
];




const {createApp, ref}= Vue;

const quotesview = ref ([{quote:"Esperando un clic", author:"Jhon"}]);
const estado = ref(true);
const numincremento = ref(0);
const resul= ref("");
const tipo= ref("");


const app = createApp({

    
    setup(){
        let sal =ref('Hola Jhon');

       const change=()=>{
        quotesview.value=quotes;
        }
        const changestado=()=>{
            estado.value=!estado.value
        }
        const changeincrementar=()=>{
            numincremento.value=numincremento.value+1;
            changetipo();
            changebinario();            
        }
        const changedecrementar=()=>{
            numincremento.value=numincremento.value-1;
            changetipo();
            changebinario();
        }
        const changebinario=()=>{
            resul.value=numincremento.value.toString(2);
                
        }
        const changetipo=()=>{
            if(numincremento.value>=0){
                tipo.value=("Positivo")
            }else{
                tipo.value=("Negativo")
            }

        }
        
        return{sal,quotes,quotesview,change,changestado,estado,changeincrementar,numincremento,changedecrementar,resul,tipo};
    }
    
    
    
    
});
app.mount('#jhon2');