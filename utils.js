
function validarSenha(senha){
    if (!senha) return "A senha não pode estar vazia.";
    if (senha.length < 8) return "A senha deve ter pelo menos 8 caracteres.";

    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;
    let temEspecial = false;

    const caracteresEspeciais = "!@#$%*,.?/";

    for (let i = 0; i < senha.length; i++) {
        const char = senha[i];

        if (char !== ' ' && !isNaN(char)) {
            temNumero = true;
        } 
        else if (caracteresEspeciais.includes(char)) {
            temEspecial = true;
        }
        else if (char.toLowerCase() !== char.toUpperCase()) {
            if (char === char.toUpperCase()) {
                temMaiuscula = true;
            } else {
                temMinuscula = true;
            }
        }
    }

    if (!temMaiuscula) return "A senha deve conter pelo menos uma letra maiúscula.";
    if (!temMinuscula) return "A senha deve conter pelo menos uma letra minúscula.";
    if (!temNumero) return "A senha deve conter pelo menos um número.";
    if (!temEspecial) return "A senha deve conter um caractere especial (!@#$%*,.?/).";

    return null;
};

function validarEmail (email) {
    if (!email || email.trim().length === 0) {
        return "O e-mail não pode estar vazio.";
    }

    if (email.includes(' ')) {
        return "O e-mail não pode conter espaços em branco.";
    }

    const temArroba = email.includes('@');
    const partes = email.split('@');
    
    if (!temArroba || partes.length !== 2) {
        return "O e-mail deve conter exatamente um '@'.";
    }

    const [usuario, dominio] = partes;

    if (usuario.length === 0) {
        return "Insira o nome de usuário antes do '@'.";
    }
    if (dominio.length === 0) {
        return "Insira o domínio após o '@' (ex: gmail.com).";
    }

    if (!dominio.includes('.')) {
        return "O domínio do e-mail deve conter um ponto (ex: .com).";
    }

    if (dominio.startsWith('.') || dominio.endsWith('.')) {
        return "O ponto não pode estar no início ou no fim do domínio.";
    }

    return null;
};