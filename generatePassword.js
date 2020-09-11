// Geração de senha randomica

function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}
