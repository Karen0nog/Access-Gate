# Access-Gate
O Access Gate é um sistema de reservas de mesas e eventos desenvolvido como um projeto de portfólio de Front-End avançado. Ele simula a interface de uma boate futurista no estilo Neon Synthwave e Cyberpunk, demonstrando a capacidade de criar experiências de usuário altamente imersivas, responsivas e baseadas em dados.

### Tecnologias Utilizadas (Stack)
Front-End Core: React.js (com criação de componentes reativos e gerenciamento de estado).

Marcação/Estrutura: HTML5 (JSX).

Estilização: CSS Puro / CSS Modules / Styled Components (foco em CSS moderno, sem o uso de frameworks utilitários como Tailwind).

Interatividade/Lógica: JavaScript (ES6+).

Comunicação de Dados: fetch ou Axios para consumo de APIs.

### Destaques e Funcionalidades do Front-End
#### 1. Estética e Design System (HTML & CSS Puro)
Efeito Neon Glow: Implementação de text-shadow e box-shadow em múltiplos níveis para replicar o brilho neon intenso e difundido, conforme especificado no Figma.

Manipulação de Cores Moderna: Utilização de variáveis CSS e, quando suportado (ou via mock de código), a função color-mix() com o color space oklab para criar gradientes e efeitos de transparência que mantêm a percepção de luminosidade do néon (color-mix(in oklab, var(--ring) 50%, transparent)).

Vidro Fosco (Frosted Glass): Uso de backdrop-filter: blur() (simulando a interface de painéis futuristas) para o corpo do formulário e cards de resumo.

Design Responsivo: Aplicação de media queries e Flexbox/Grid CSS para garantir que o layout do painel de controle e do mapa interativo (Página 2) se adapte perfeitamente a dispositivos móveis e desktops.

#### 2. Arquitetura em React.js e JavaScript
Gerenciamento de Estado: Utilização de Hooks (useState, useReducer ou Context API) para gerenciar o estado da reserva entre as 4 páginas do formulário, garantindo que os dados sejam persistentes durante a navegação multi-etapa.

Componentização: Criação de componentes reativos e reutilizáveis (ex: NeonButton, StatusIndicator, InteractiveTableMap, ReservationSummaryCard).

Validação de Formulário: Implementação de validação em tempo real (JavaScript) para garantir que os dados de entrada (E-mail, Telefone, Validade do Cartão) estejam formatados corretamente antes de avançar para a próxima etapa.

Navegação Multi-Etapa: Lógica JavaScript para controlar a visibilidade e transição animada entre as 4 páginas do formulário (ex: slide suave ou fade), oferecendo uma experiência de usuário limpa.

#### 3. Integração e Consumo de APIs
O projeto demonstra a proficiência na integração e tratamento de dados assíncronos (APIs) para tornar a aplicação dinâmica.

Mock API de Dados (Listagem de Eventos e Status):

Consumo de um arquivo JSON local ou um serviço Mock (JSON Server / MockAPI) para buscar a lista de eventos, datas e o status de ocupação de cada mesa no mapa interativo (Página 2).

Demonstração: Renderização condicional do mapa: mesas disponíveis são renderizadas com brilho Ciano/Verde; mesas ocupadas com Vermelho Glitch.
