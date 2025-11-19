# Jr_Tech_OFC - Sistema Gráfica

Sistema web para gráfica com calculadora de medidas, conversões e tabela de preços.

## 🚀 Funcionalidades

- **Calculadora de Medidas**: Converte entre cm, mm e polegadas
- **Detecção de Tamanhos Padrão**: Identifica automaticamente formatos A0-A8 e tamanhos de foto
- **Sugestão de Corte**: Calcula quantas unidades cabem em folhas A4/A3
- **Tabela de Preços**: Lista completa de serviços com filtros e busca
- **PWA**: Funciona offline e pode ser instalado como app
- **LocalStorage**: Salva histórico de cálculos e preferências

## 📱 PWA (Progressive Web App)

O app pode ser instalado no dispositivo móvel:
- **Android**: Abra no Chrome e selecione "Adicionar à tela inicial"
- **iOS**: Abra no Safari e selecione "Adicionar à Tela de Início"

## 🎨 Ícones

O app usa os ícones personalizados da pasta `icons/`:
- **Android**: Ícones em múltiplas resoluções na pasta `icons/android/`
- **iOS**: Ícones do AppIcon na pasta `icons/ios/AppIcon.appiconset/`
- **PWA**: Configurado para usar `ic_launcher-web.png` (512x512) e `playstore-icon.png` como ícones principais

## 📦 Deploy na Vercel

1. Faça push do código para um repositório Git
2. Conecte o repositório na Vercel
3. O deploy será automático

## 💾 LocalStorage

O app salva automaticamente:
- Histórico dos últimos 50 cálculos
- Preferências de unidades
- Último cálculo realizado

## 🛠️ Tecnologias

- HTML5
- CSS3 (com variáveis CSS e Grid/Flexbox)
- JavaScript (Vanilla)
- Service Worker (PWA)
- LocalStorage API

## 📄 Licença

© 2024 Jr_Tech_OFC. Todos os direitos reservados.

