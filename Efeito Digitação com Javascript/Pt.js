const saida = document.querySelector(".saida");
        function digitacao(texto , contador){

            if(contador < texto.length){
                setTimeout(() => {
                   saida.textContent +=texto.charAt(contador);
                   contador++;
                   digitacao(texto , contador);
                }, 130) //Velocidade do texto
            } 
        }
        digitacao("Olá, chamam me" ,0 ); 
