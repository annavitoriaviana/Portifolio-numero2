function setTheme(theme) {
    // Remove todas as classes de tema
    document.body.classList.remove('light-mode', 'dark-mode', 'night-mode');
    // Adiciona a classe correspondente ao tema selecionado
    document.body.classList.add(`${theme}-mode`);
    // Armazena o tema no localStorage para manter a escolha ao recarregar a página
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Padrão: claro
    setTheme(savedTheme);
});
