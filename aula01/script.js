// Função para definir o tema da página
function setTheme(theme) {
    // Remove as classes de tema atuais
    document.body.classList.remove('light', 'dark');
    // Adiciona a classe do tema selecionado
    document.body.classList.add(theme);
}

// Define o tema padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Define o tema claro como padrão
    setTheme('light');
});
/* 
    Comentários:

    - Função `setTheme` altera o tema da página removendo e adicionando classes ao `body`.

    - `document.addEventListener('DOMContentLoaded', ...)` garante que o tema claro seja aplicado quando a página é carregada.
*/

