export class SistemaAutenticacao {
    static login (autenticavel, senha){
        if(SistemaAutenticacao.eAutenticavel(autenticavel)){
            return autenticavel.autenticar (senha);

        }

        return false
        
    }

    static eAutenticavel(autenticavel){
        //Verifica se a chave autenticar está dentro do metodo autenticavel e se ele é uam instancia de uma função
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}