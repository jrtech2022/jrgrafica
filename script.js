// Dados dos tamanhos padrão de papel (em cm)
const tamanhosPadrao = {
    'A0': { largura: 84.1, altura: 118.9 },
    'A1': { largura: 59.4, altura: 84.1 },
    'A2': { largura: 42.0, altura: 59.4 },
    'A3': { largura: 29.7, altura: 42.0 },
    'A4': { largura: 21.0, altura: 29.7 },
    'A5': { largura: 14.8, altura: 21.0 },
    'A6': { largura: 10.5, altura: 14.8 },
    'A7': { largura: 7.4, altura: 10.5 },
    'A8': { largura: 5.2, altura: 7.4 }
};

// =========================================================================
// BIBLIOTECA DE FORMATOS POLAROID/INSTAX
// =========================================================================
// Unidade Base: Milímetros (mm)
// Estrutura: { id, name, category, total_width, total_height, image_width, image_height, bleed }
// =========================================================================

const formatosPolaroid = [
    // CATEGORIA A: CLÁSSICOS & OFICIAIS
    {
        id: 'polaroid-classic',
        name: 'Polaroid SX-70 / 600 / I-Type',
        category: 'official',
        total_width: 88,    // mm
        total_height: 107,  // mm
        image_width: 79,    // mm
        image_height: 79,   // mm
        bleed: 3            // mm
    },
    {
        id: 'polaroid-spectra',
        name: 'Polaroid Spectra (Image/1200)',
        category: 'official',
        total_width: 102,   // mm
        total_height: 103,  // mm
        image_width: 90,    // mm
        image_height: 73,   // mm
        bleed: 3            // mm
    },
    {
        id: 'instax-mini',
        name: 'Instax Mini',
        category: 'official',
        total_width: 54,    // mm
        total_height: 86,   // mm
        image_width: 46,    // mm
        image_height: 62,   // mm
        bleed: 3            // mm
    },
    {
        id: 'instax-square',
        name: 'Instax Square',
        category: 'official',
        total_width: 72,    // mm
        total_height: 86,   // mm
        image_width: 62,    // mm
        image_height: 62,   // mm
        bleed: 3            // mm
    },
    {
        id: 'instax-wide',
        name: 'Instax Wide',
        category: 'official',
        total_width: 108,   // mm
        total_height: 86,   // mm
        image_width: 99,    // mm
        image_height: 62,   // mm
        bleed: 3            // mm
    },
    // CATEGORIA B: PERSONALIZADOS (DESIGN/GRÁFICA)
    {
        id: 'custom-borderless',
        name: 'SX-70 Sem Borda (Full Bleed)',
        category: 'custom',
        total_width: 88,    // mm
        total_height: 107,  // mm
        image_width: 88,    // mm (100% de preenchimento)
        image_height: 107,  // mm
        bleed: 3            // mm
    },
    {
        id: 'custom-music',
        name: 'Music Frame (Spotify/Player)',
        category: 'custom',
        total_width: 88,    // mm
        total_height: 107,  // mm
        image_width: 70,    // mm (área da capa ~70x70mm)
        image_height: 70,   // mm
        bleed: 3            // mm
    },
    {
        id: 'custom-instagram',
        name: 'Instagram Frame',
        category: 'custom',
        total_width: 88,    // mm
        total_height: 107,  // mm
        image_width: 70,    // mm (proporção 4:5 ou 1:1)
        image_height: 88,   // mm
        bleed: 3            // mm
    },
    {
        id: 'custom-duo-mini',
        name: 'College Duo (Base Mini)',
        category: 'custom',
        total_width: 54,    // mm
        total_height: 86,   // mm
        image_width: 46,    // mm (2 fotos empilhadas de 46x29mm)
        image_height: 58,   // mm (2x29mm)
        bleed: 3            // mm
    }
];

// Dados dos tamanhos de foto
const tamanhosFoto = [
    { formato: '3x4', largura: 3, altura: 4, valor: 1.00, muitoUsado: true, observacao: 'Padrão para documentos' },
    { formato: 'Instax Mini', largura: 5.4, altura: 8.6, valor: 2.00, muitoUsado: true, observacao: 'Tamanho cartão de crédito' },
    { formato: 'Polaroid Quadrada', largura: 7, altura: 7, valor: 3.00, muitoUsado: true, observacao: 'Formato quadrado (Padrão)' },
    { formato: 'Polaroid Classic', largura: 8.8, altura: 10.7, valor: 3.50, muitoUsado: true, observacao: 'Formato vintage maior' },
    { formato: 'Instax Wide', largura: 10.8, altura: 8.6, valor: 4.50, muitoUsado: false, observacao: 'Formato panorâmico' },
    { formato: '10x15', largura: 10, altura: 15, valor: 5.00, muitoUsado: true, observacao: 'Padrão clássico' },
    { formato: '13x18', largura: 13, altura: 18, valor: 6.00, muitoUsado: false, observacao: 'Médio, ideal para porta-retrato' },
    { formato: '15x21', largura: 15, altura: 21, valor: 7.00, muitoUsado: true, observacao: 'Grande, tipo pôster pequeno' },
    { formato: '20x25', largura: 20, altura: 25, valor: 10.00, muitoUsado: false, observacao: 'Ideal para quadros' },
    { formato: 'A4', largura: 21.0, altura: 29.7, valor: 12.00, muitoUsado: true, observacao: 'Pôster/Certificado' }
];

// Dados dos serviços
const servicos = [
    { nome: 'Xerox P&B', descricao: 'Cópia em preto e branco', valor: 0.50, tipo: 'xerox', muitoUsado: true },
    { nome: 'Xerox CMYK', descricao: 'Cópia colorida', valor: 1.00, tipo: 'xerox', muitoUsado: true },
    { nome: 'Impressão P&B', descricao: 'Impressão em preto e branco', valor: 1.50, tipo: 'impressao', muitoUsado: true },
    { nome: 'Impressão CMYK', descricao: 'Impressão colorida', valor: 2.00, tipo: 'impressao', muitoUsado: true },
    { nome: 'Trabalho extra', descricao: 'Configuração adicional', valor: 2.00, tipo: 'impressao', muitoUsado: false },
    { nome: 'Envelope A4', descricao: 'Envelope tamanho A4', valor: 1.00, tipo: 'envelope', muitoUsado: true },
    { nome: 'Envelope ½ A4', descricao: 'Envelope metade do A4', valor: 0.50, tipo: 'envelope', muitoUsado: false },
    // Fotos Polaroid/Instax - Unitárias
    { nome: 'Foto Instax Mini', descricao: '5,4 x 8,6 cm - Tamanho cartão de crédito', valor: 2.00, tipo: 'foto', categoria: 'unitario', muitoUsado: true },
    { nome: 'Foto Polaroid Quadrada', descricao: '7 x 7 cm - Formato quadrado (Padrão)', valor: 3.00, tipo: 'foto', categoria: 'unitario', muitoUsado: true },
    { nome: 'Foto Polaroid Classic', descricao: '8,8 x 10,7 cm - Formato vintage maior', valor: 3.50, tipo: 'foto', categoria: 'unitario', muitoUsado: true },
    { nome: 'Foto Instax Wide', descricao: '10,8 x 8,6 cm - Formato panorâmico', valor: 4.50, tipo: 'foto', categoria: 'unitario', muitoUsado: false },
    // Kits Promocionais - Mais Vendidos
    { nome: '🔥 Kit 10 Instax Mini', descricao: 'Leve 10 fotos tamanho cartão por apenas R$ 18,00 (R$ 1,80/un)', valor: 18.00, tipo: 'combo', categoria: 'promocao', muitoUsado: true },
    { nome: '🔥 Kit 20 Instax Mini', descricao: 'Leve 20 fotos tamanho cartão por apenas R$ 35,00 (R$ 1,75/un)', valor: 35.00, tipo: 'combo', categoria: 'promocao', muitoUsado: true },
    { nome: '🔥 Kit 10 Polaroid Quadrada', descricao: 'Leve 10 fotos quadradas por apenas R$ 27,00 (R$ 2,70/un)', valor: 27.00, tipo: 'combo', categoria: 'promocao', muitoUsado: true },
    { nome: '🔥 Kit 20 Polaroid Quadrada', descricao: 'Leve 20 fotos quadradas por apenas R$ 50,00 (R$ 2,50/un)', valor: 50.00, tipo: 'combo', categoria: 'promocao', muitoUsado: true },
    { nome: '🔥 Kit 10 Polaroid Classic', descricao: 'Leve 10 fotos vintage grandes por apenas R$ 32,00 (R$ 3,20/un)', valor: 32.00, tipo: 'combo', categoria: 'promocao', muitoUsado: true },
    { nome: '🔥 Kit 20 Polaroid Classic', descricao: 'Leve 20 fotos vintage grandes por apenas R$ 60,00 (R$ 3,00/un)', valor: 60.00, tipo: 'combo', categoria: 'promocao', muitoUsado: true },
    // Outras fotos tradicionais
    ...tamanhosFoto
        .filter(foto => !['Instax Mini', 'Polaroid Quadrada', 'Polaroid Classic', 'Instax Wide'].includes(foto.formato))
        .map(foto => ({
            nome: `Foto ${foto.formato}`,
            descricao: `${foto.largura} x ${foto.altura} cm - ${foto.observacao}`,
            valor: foto.valor,
            tipo: 'foto',
            categoria: 'unitario',
            muitoUsado: foto.muitoUsado
        }))
];

// Função para converter unidades para centímetros
function converterParaCm(valor, unidade) {
    switch (unidade) {
        case 'cm':
            return valor;
        case 'mm':
            return valor / 10;
        case 'in':
            return valor * 2.54;
        default:
            return valor;
    }
}

// =========================================================================
// FUNÇÕES UTILITÁRIAS - FORMATOS POLAROID/INSTAX
// =========================================================================

// Converter milímetros para centímetros (para exibição)
function mmParaCm(valorMm) {
    return valorMm / 10;
}

// Converter centímetros para milímetros (para armazenamento)
function cmParaMm(valorCm) {
    return valorCm * 10;
}

// Calcular dimensões com bleed (sangria)
// Retorna: { width_with_bleed, height_with_bleed }
function calcularBleed(totalWidthMm, totalHeightMm, bleedMm = 3) {
    return {
        width_with_bleed: totalWidthMm + (bleedMm * 2),
        height_with_bleed: totalHeightMm + (bleedMm * 2)
    };
}

// Calcular resolução em pixels baseado em DPI
// Retorna: { width_px, height_px }
function calcularResolucaoPixels(widthMm, heightMm, dpi = 300) {
    // Converter mm para polegadas, depois multiplicar por DPI
    const widthInches = widthMm / 25.4;
    const heightInches = heightMm / 25.4;
    return {
        width_px: Math.round(widthInches * dpi),
        height_px: Math.round(heightInches * dpi)
    };
}

// Obter informações completas de um formato Polaroid/Instax
// Retorna objeto com todas as medidas e informações de impressão
function obterInfoFormato(formatoId) {
    const formato = formatosPolaroid.find(f => f.id === formatoId);
    if (!formato) return null;

    const bleedInfo = calcularBleed(formato.total_width, formato.total_height, formato.bleed);
    const resolucaoTotal = calcularResolucaoPixels(bleedInfo.width_with_bleed, bleedInfo.height_with_bleed);
    const resolucaoImagem = calcularResolucaoPixels(formato.image_width, formato.image_height);

    return {
        ...formato,
        // Medidas em cm (para exibição)
        total_width_cm: mmParaCm(formato.total_width),
        total_height_cm: mmParaCm(formato.total_height),
        image_width_cm: mmParaCm(formato.image_width),
        image_height_cm: mmParaCm(formato.image_height),
        // Medidas com bleed em mm e cm
        total_width_bleed_mm: bleedInfo.width_with_bleed,
        total_height_bleed_mm: bleedInfo.height_with_bleed,
        total_width_bleed_cm: mmParaCm(bleedInfo.width_with_bleed),
        total_height_bleed_cm: mmParaCm(bleedInfo.height_with_bleed),
        // Resolução em pixels (300 DPI)
        resolucao_total_px: resolucaoTotal,
        resolucao_imagem_px: resolucaoImagem,
        // Informações de impressão
        dpi: 300,
        perfil_cor: 'CMYK para offset/laser ou sRGB para jato de tinta photo'
    };
}

// Filtrar formatos por categoria
function obterFormatosPorCategoria(categoria) {
    return formatosPolaroid.filter(f => f.category === categoria);
}

// Função para formatar medidas
function formatarMedida(valor, unidade) {
    return `${valor.toFixed(2)} ${unidade}`;
}

// Função para encontrar o tamanho padrão mais próximo
function encontrarTamanhoPadrao(larguraCm, alturaCm) {
    let tamanhoMaisProximo = null;
    let menorDiferenca = Infinity;
    const tolerancia = 0.5; // cm de tolerância

    // Verifica tamanhos padrão (A0-A8)
    for (const [nome, dimensoes] of Object.entries(tamanhosPadrao)) {
        const difLargura = Math.abs(dimensoes.largura - larguraCm);
        const difAltura = Math.abs(dimensoes.altura - alturaCm);
        const diferenca = difLargura + difAltura;

        // Verifica se as dimensões correspondem (com tolerância)
        if (difLargura <= tolerancia && difAltura <= tolerancia) {
            return {
                nome,
                largura: dimensoes.largura,
                altura: dimensoes.altura,
                exato: true
            };
        }

        // Verifica também na orientação invertida
        const difLarguraInvertida = Math.abs(dimensoes.largura - alturaCm);
        const difAlturaInvertida = Math.abs(dimensoes.altura - larguraCm);
        const diferencaInvertida = difLarguraInvertida + difAlturaInvertida;

        if (difLarguraInvertida <= tolerancia && difAlturaInvertida <= tolerancia) {
            return {
                nome,
                largura: dimensoes.altura,
                altura: dimensoes.largura,
                exato: true,
                invertido: true
            };
        }

        // Calcula diferença média para sugestão
        const diferencaMedia = (diferenca + diferencaInvertida) / 2;
        if (diferencaMedia < menorDiferenca) {
            menorDiferenca = diferencaMedia;
            tamanhoMaisProximo = {
                nome,
                largura: dimensoes.largura,
                altura: dimensoes.altura,
                diferenca: diferencaMedia,
                exato: false
            };
        }
    }

    // Verifica tamanhos de foto
    for (const foto of tamanhosFoto) {
        const difLargura = Math.abs(foto.largura - larguraCm);
        const difAltura = Math.abs(foto.altura - alturaCm);

        if (difLargura <= tolerancia && difAltura <= tolerancia) {
            return {
                nome: `Foto ${foto.formato}`,
                largura: foto.largura,
                altura: foto.altura,
                exato: true,
                tipo: 'foto'
            };
        }

        const difLarguraInvertida = Math.abs(foto.largura - alturaCm);
        const difAlturaInvertida = Math.abs(foto.altura - larguraCm);

        if (difLarguraInvertida <= tolerancia && difAlturaInvertida <= tolerancia) {
            return {
                nome: `Foto ${foto.formato}`,
                largura: foto.altura,
                altura: foto.largura,
                exato: true,
                invertido: true,
                tipo: 'foto'
            };
        }
    }

    // Verifica formatos Polaroid/Instax (comparando em mm convertido para cm)
    for (const formato of formatosPolaroid) {
        const formatoLarguraCm = mmParaCm(formato.total_width);
        const formatoAlturaCm = mmParaCm(formato.total_height);
        const difLargura = Math.abs(formatoLarguraCm - larguraCm);
        const difAltura = Math.abs(formatoAlturaCm - alturaCm);

        if (difLargura <= tolerancia && difAltura <= tolerancia) {
            return {
                nome: formato.name,
                largura: formatoLarguraCm,
                altura: formatoAlturaCm,
                exato: true,
                tipo: 'polaroid',
                formatoId: formato.id,
                categoria: formato.category
            };
        }

        const difLarguraInvertida = Math.abs(formatoLarguraCm - alturaCm);
        const difAlturaInvertida = Math.abs(formatoAlturaCm - larguraCm);

        if (difLarguraInvertida <= tolerancia && difAlturaInvertida <= tolerancia) {
            return {
                nome: formato.name,
                largura: formatoAlturaCm,
                altura: formatoLarguraCm,
                exato: true,
                invertido: true,
                tipo: 'polaroid',
                formatoId: formato.id,
                categoria: formato.category
            };
        }
    }

    return tamanhoMaisProximo;
}

// Função para calcular sugestão de corte
function calcularSugestaoCorte(larguraCm, alturaCm) {
    const sugestoes = [];

    // Verifica quantas fotos cabem em uma folha A4
    const a4Largura = 21.0;
    const a4Altura = 29.7;

    // Cálculo para orientação normal
    const qtdHorizontal = Math.floor(a4Largura / larguraCm);
    const qtdVertical = Math.floor(a4Altura / alturaCm);
    const qtdTotal = qtdHorizontal * qtdVertical;

    // Cálculo para orientação invertida
    const qtdHorizontalInvertida = Math.floor(a4Largura / alturaCm);
    const qtdVerticalInvertida = Math.floor(a4Altura / larguraCm);
    const qtdTotalInvertida = qtdHorizontalInvertida * qtdVerticalInvertida;

    if (qtdTotal > 0) {
        sugestoes.push(`De uma folha A4, cabem ${qtdTotal} unidades (${qtdHorizontal} x ${qtdVertical})`);
    }

    if (qtdTotalInvertida > 0 && qtdTotalInvertida !== qtdTotal) {
        sugestoes.push(`Com orientação invertida: ${qtdTotalInvertida} unidades (${qtdHorizontalInvertida} x ${qtdVerticalInvertida})`);
    }

    // Verifica para A3
    const a3Largura = 29.7;
    const a3Altura = 42.0;
    const qtdA3Horizontal = Math.floor(a3Largura / larguraCm);
    const qtdA3Vertical = Math.floor(a3Altura / alturaCm);
    const qtdTotalA3 = qtdA3Horizontal * qtdA3Vertical;

    if (qtdTotalA3 > qtdTotal) {
        sugestoes.push(`De uma folha A3, cabem ${qtdTotalA3} unidades (${qtdA3Horizontal} x ${qtdA3Vertical})`);
    }

    if (sugestoes.length === 0) {
        return 'Tamanho maior que A4. Considere impressão individual ou formato maior.';
    }

    return sugestoes.join('\n');
}

// Funções de localStorage
const Storage = {
    save: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Erro ao salvar no localStorage:', e);
        }
    },
    load: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Erro ao carregar do localStorage:', e);
            return defaultValue;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Erro ao remover do localStorage:', e);
        }
    }
};

// Salvar histórico de cálculos
function salvarHistorico(dados) {
    const historico = Storage.load('historicoCalculos', []);
    const novoItem = {
        ...dados,
        timestamp: new Date().toISOString(),
        id: Date.now()
    };
    historico.unshift(novoItem);
    // Manter apenas os últimos 50 cálculos
    if (historico.length > 50) {
        historico.pop();
    }
    Storage.save('historicoCalculos', historico);
}

// Função principal de cálculo
function calcularMedidas() {
    const larguraInput = parseFloat(document.getElementById('largura').value);
    const alturaInput = parseFloat(document.getElementById('altura').value);
    const unidadeLargura = document.getElementById('unidade-largura').value;
    const unidadeAltura = document.getElementById('unidade-altura').value;

    if (isNaN(larguraInput) || isNaN(alturaInput) || larguraInput <= 0 || alturaInput <= 0) {
        mostrarToast('Por favor, insira valores válidos para largura e altura.', 'warning');
        return;
    }

    // Salva preferências de unidade
    Storage.save('preferencias', { unidadeLargura, unidadeAltura });

    // Converte para centímetros
    const larguraCm = converterParaCm(larguraInput, unidadeLargura);
    const alturaCm = converterParaCm(alturaInput, unidadeAltura);

    // Exibe conversões
    document.getElementById('resultado-cm').textContent = `${larguraCm.toFixed(2)} x ${alturaCm.toFixed(2)} cm`;
    document.getElementById('resultado-mm').textContent = `${(larguraCm * 10).toFixed(2)} x ${(alturaCm * 10).toFixed(2)} mm`;
    document.getElementById('resultado-in').textContent = `${(larguraCm / 2.54).toFixed(2)} x ${(alturaCm / 2.54).toFixed(2)} in`;

    // Encontra tamanho padrão
    const tamanhoPadrao = encontrarTamanhoPadrao(larguraCm, alturaCm);
    if (tamanhoPadrao) {
        if (tamanhoPadrao.exato) {
            document.getElementById('tamanho-padrao').textContent = tamanhoPadrao.nome;
            document.getElementById('tamanho-padrao').style.color = '#22c55e';
            document.getElementById('detalhes-tamanho').textContent = 
                tamanhoPadrao.invertido 
                    ? `Medidas: ${tamanhoPadrao.largura} x ${tamanhoPadrao.altura} cm (orientação invertida)`
                    : `Medidas: ${tamanhoPadrao.largura} x ${tamanhoPadrao.altura} cm`;
        } else {
            document.getElementById('tamanho-padrao').textContent = `Próximo: ${tamanhoPadrao.nome}`;
            document.getElementById('tamanho-padrao').style.color = '#f59e0b';
            document.getElementById('detalhes-tamanho').textContent = 
                `Medidas padrão: ${tamanhoPadrao.largura} x ${tamanhoPadrao.altura} cm`;
        }
    } else {
        document.getElementById('tamanho-padrao').textContent = 'Tamanho personalizado';
        document.getElementById('tamanho-padrao').style.color = '#3b82f6';
        document.getElementById('detalhes-tamanho').textContent = 'Não corresponde a nenhum tamanho padrão';
    }

    // Calcula sugestão de corte
    const sugestaoCorte = calcularSugestaoCorte(larguraCm, alturaCm);
    document.getElementById('sugestao-corte').textContent = sugestaoCorte;

    // Mostra botão de imprimir
    document.getElementById('btn-imprimir').classList.add('show');

    // Salva dados para impressão
    const dadosImpressao = {
        larguraCm,
        alturaCm,
        larguraMm: larguraCm * 10,
        alturaMm: alturaCm * 10,
        larguraIn: larguraCm / 2.54,
        alturaIn: alturaCm / 2.54,
        tamanhoPadrao,
        sugestaoCorte,
        larguraInput,
        alturaInput,
        unidadeLargura,
        unidadeAltura
    };
    
    window.dadosImpressao = dadosImpressao;
    
    // Salva no localStorage
    salvarHistorico(dadosImpressao);
    Storage.save('ultimoCalculo', dadosImpressao);

    // Feedback visual
    mostrarToast('Medidas calculadas com sucesso!', 'success');
}

// Função para imprimir ficha
function imprimirFicha() {
    if (!window.dadosImpressao) {
        mostrarToast('Calcule as medidas primeiro!', 'warning');
        return;
    }

    const dados = window.dadosImpressao;
    const conteudo = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Ficha de Medidas - Jr_Tech_OFC</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #1e3a8a; }
                .info { margin: 10px 0; }
                .destaque { font-weight: bold; color: #3b82f6; }
            </style>
        </head>
        <body>
            <h1>Ficha de Medidas - Jr_Tech_OFC</h1>
            <div class="info">
                <h2>Medidas</h2>
                <p>Centímetros: <span class="destaque">${dados.larguraCm.toFixed(2)} x ${dados.alturaCm.toFixed(2)} cm</span></p>
                <p>Milímetros: <span class="destaque">${dados.larguraMm.toFixed(2)} x ${dados.alturaMm.toFixed(2)} mm</span></p>
                <p>Polegadas: <span class="destaque">${dados.larguraIn.toFixed(2)} x ${dados.alturaIn.toFixed(2)} in</span></p>
            </div>
            ${dados.tamanhoPadrao ? `
            <div class="info">
                <h2>Tamanho Padrão</h2>
                <p class="destaque">${dados.tamanhoPadrao.nome}</p>
            </div>
            ` : ''}
            <div class="info">
                <h2>Sugestão de Corte</h2>
                <p>${dados.sugestaoCorte.replace(/\n/g, '<br>')}</p>
            </div>
        </body>
        </html>
    `;

    const janela = window.open('', '_blank');
    janela.document.write(conteudo);
    janela.document.close();
    janela.print();
}

// Função para renderizar cards de preços (mobile)
function renderizarCardsPrecos(servicosFiltrados) {
    const cardsContainer = document.getElementById('precos-cards');
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = '';

    servicosFiltrados.forEach(servico => {
        const card = document.createElement('div');
        const badgeClass = `badge-${servico.tipo}`;
        const muitoUsado = servico.muitoUsado || false;
        const isPromocao = servico.categoria === 'promocao';
        const isCombo = servico.tipo === 'combo';
        
        card.className = `preco-card ${muitoUsado ? 'muito-usado' : ''} ${isPromocao ? 'promocao' : ''}`;
        card.style.position = 'relative';
        
        card.innerHTML = `
            <div class="preco-card-header">
                <div class="preco-card-nome">${servico.nome}</div>
                <span class="badge-tipo ${badgeClass} ${isPromocao ? 'badge-promocao' : ''}">${isCombo ? '🔥 Kit' : servico.tipo}</span>
            </div>
            <div class="preco-card-descricao">${servico.descricao}</div>
            <div class="preco-card-valor">R$ ${servico.valor.toFixed(2)}${isPromocao ? '<span class="promocao-badge">Promoção</span>' : ''}</div>
        `;
        cardsContainer.appendChild(card);
    });
}

// Função para renderizar tabela de preços (fallback desktop)
function renderizarTabelaPrecos(servicosFiltrados) {
    const tbody = document.getElementById('tbody-precos');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    servicosFiltrados.forEach(servico => {
        const tr = document.createElement('tr');
        const badgeClass = `badge-${servico.tipo}`;
        const isPromocao = servico.categoria === 'promocao';
        const isCombo = servico.tipo === 'combo';
        
        if (isPromocao) {
            tr.classList.add('row-promocao');
        }
        
        tr.innerHTML = `
            <td><strong>${servico.nome}</strong></td>
            <td>${servico.descricao}</td>
            <td class="text-right"><strong class="valor-preco">R$ ${servico.valor.toFixed(2)}</strong></td>
            <td><span class="badge-tipo ${badgeClass} ${isPromocao ? 'badge-promocao' : ''}">${isCombo ? '🔥 Kit' : servico.tipo}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Função utilitária: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para exibir Toast
function mostrarToast(mensagem, tipo = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };

    toast.className = `toast ${tipo}`;
    toast.innerHTML = `<i class="fas ${icons[tipo] || icons.info}"></i> <span>${mensagem}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Função para filtrar serviços (com debounce)
const filtrarServicos = debounce(function() {
    const busca = document.getElementById('busca-precos').value.toLowerCase();
    const filtroTipo = document.getElementById('filtro-tipo').value;

    let servicosFiltrados = servicos;

    // Filtra por tipo
    if (filtroTipo !== 'todos') {
        servicosFiltrados = servicosFiltrados.filter(s => s.tipo === filtroTipo);
    }

    // Filtra por busca
    if (busca) {
        servicosFiltrados = servicosFiltrados.filter(s => 
            s.nome.toLowerCase().includes(busca) || 
            s.descricao.toLowerCase().includes(busca)
        );
    }

    // Renderiza cards (mobile) e tabela (desktop)
    renderizarCardsPrecos(servicosFiltrados);
    renderizarTabelaPrecos(servicosFiltrados);

    // Atualiza contador de resultados
    const contador = document.getElementById('resultado-contador');
    if (contador) {
        if (busca || filtroTipo !== 'todos') {
            contador.style.display = 'block';
            contador.textContent = `${servicosFiltrados.length} ${servicosFiltrados.length === 1 ? 'serviço encontrado' : 'serviços encontrados'}`;
        } else {
            contador.style.display = 'none';
        }
    }

    // Mostra mensagem se não encontrar resultados
    if (servicosFiltrados.length === 0) {
        const cardsContainer = document.getElementById('precos-cards');
        const tbody = document.getElementById('tbody-precos');
        if (cardsContainer) {
            cardsContainer.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>Nenhum serviço encontrado</p><p style="font-size: 0.85rem; margin-top: 0.5rem;">Tente ajustar os filtros</p></div>';
        }
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="4" class="empty-state"><i class="fas fa-search"></i><p>Nenhum serviço encontrado</p><p style="font-size: 0.85rem; margin-top: 0.5rem;">Tente ajustar os filtros</p></td></tr>';
        }
    }
}, 300);

// Função para renderizar cards de fotos
function renderizarFotos() {
    const grid = document.getElementById('fotos-grid');
    grid.innerHTML = '';

    tamanhosFoto.forEach(foto => {
        const card = document.createElement('div');
        card.className = `foto-card ${foto.muitoUsado ? 'muito-usado' : ''}`;
        
        card.innerHTML = `
            <div class="foto-card-header">
                <span class="foto-formato">${foto.formato}</span>
                ${foto.muitoUsado ? '<span class="foto-badge">Muito usado</span>' : ''}
            </div>
            <div class="foto-dimensoes">${foto.largura} x ${foto.altura} cm</div>
            <div class="foto-valor">R$ ${foto.valor.toFixed(2)}</div>
            <div class="foto-observacao">${foto.observacao}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Função para renderizar cards de formatos Polaroid/Instax
function renderizarFormatosPolaroid(categoriaFiltro = 'todos') {
    const grid = document.getElementById('polaroid-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    let formatosFiltrados = formatosPolaroid;
    if (categoriaFiltro !== 'todos') {
        formatosFiltrados = formatosPolaroid.filter(f => f.category === categoriaFiltro);
    }

    formatosFiltrados.forEach(formato => {
        const info = obterInfoFormato(formato.id);
        if (!info) return;

        const card = document.createElement('div');
        card.className = `polaroid-card polaroid-card-${formato.category}`;
        card.onclick = () => mostrarDetalhesFormato(formato.id);
        card.style.cursor = 'pointer';
        
        const categoriaNome = formato.category === 'official' ? 'Oficial' : 'Personalizado';
        const categoriaBadge = formato.category === 'official' ? 'badge-official' : 'badge-custom';
        
        card.innerHTML = `
            <div class="polaroid-card-header">
                <div class="polaroid-card-nome">${formato.name}</div>
                <span class="badge-categoria ${categoriaBadge}">${categoriaNome}</span>
            </div>
            <div class="polaroid-medidas">
                <div class="polaroid-medida-item">
                    <span class="polaroid-label">Total:</span>
                    <span class="polaroid-valor">${info.total_width_cm.toFixed(1)} x ${info.total_height_cm.toFixed(1)} cm</span>
                </div>
                <div class="polaroid-medida-item">
                    <span class="polaroid-label">Imagem:</span>
                    <span class="polaroid-valor">${info.image_width_cm.toFixed(1)} x ${info.image_height_cm.toFixed(1)} cm</span>
                </div>
                <div class="polaroid-medida-item">
                    <span class="polaroid-label">Com Bleed:</span>
                    <span class="polaroid-valor">${info.total_width_bleed_cm.toFixed(1)} x ${info.total_height_bleed_cm.toFixed(1)} cm</span>
                </div>
            </div>
            <div class="polaroid-resolucao">
                <span class="polaroid-label">Resolução (300 DPI):</span>
                <span class="polaroid-valor">${info.resolucao_total_px.width_px} x ${info.resolucao_total_px.height_px} px</span>
            </div>
            <div class="polaroid-click-hint">
                <i class="fas fa-info-circle"></i> Clique para detalhes
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Função para mostrar detalhes completos de um formato
function mostrarDetalhesFormato(formatoId) {
    const info = obterInfoFormato(formatoId);
    if (!info) return;

    const detalhes = `
=== ${info.name} ===

CATEGORIA: ${info.category === 'official' ? 'Oficial (Filmes reais)' : 'Personalizado (Design)'}

MEDIDAS TOTAIS:
  • ${info.total_width.toFixed(1)} x ${info.total_height.toFixed(1)} mm
  • ${info.total_width_cm.toFixed(2)} x ${info.total_height_cm.toFixed(2)} cm

MEDIDAS DA IMAGEM:
  • ${info.image_width.toFixed(1)} x ${info.image_height.toFixed(1)} mm
  • ${info.image_width_cm.toFixed(2)} x ${info.image_height_cm.toFixed(2)} cm

COM BLEED (Sangria ${info.bleed}mm):
  • ${info.total_width_bleed_mm.toFixed(1)} x ${info.total_height_bleed_mm.toFixed(1)} mm
  • ${info.total_width_bleed_cm.toFixed(2)} x ${info.total_height_bleed_cm.toFixed(2)} cm

RESOLUÇÃO (${info.dpi} DPI):
  • Total com bleed: ${info.resolucao_total_px.width_px} x ${info.resolucao_total_px.height_px} px
  • Área da imagem: ${info.resolucao_imagem_px.width_px} x ${info.resolucao_imagem_px.height_px} px

PERFIL DE COR: ${info.perfil_cor}
    `.trim();

    // Criar modal ou alerta com os detalhes
    const modal = document.createElement('div');
    modal.className = 'polaroid-modal';
    modal.innerHTML = `
        <div class="polaroid-modal-content">
            <div class="polaroid-modal-header">
                <h3>${info.name}</h3>
                <button class="polaroid-modal-close" onclick="this.closest('.polaroid-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="polaroid-modal-body">
                <pre>${detalhes}</pre>
            </div>
            <div class="polaroid-modal-footer">
                <button class="btn-calculadora" onclick="aplicarFormatoNaCalculadora('${formatoId}')">
                    <i class="fas fa-calculator"></i> Usar na Calculadora
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Função para aplicar formato na calculadora (disponível globalmente)
window.aplicarFormatoNaCalculadora = function(formatoId) {
    const info = obterInfoFormato(formatoId);
    if (!info) return;

    // Aplicar valores na calculadora
    document.getElementById('largura').value = info.total_width_cm.toFixed(2);
    document.getElementById('altura').value = info.total_height_cm.toFixed(2);
    document.getElementById('unidade-largura').value = 'cm';
    document.getElementById('unidade-altura').value = 'cm';

    // Fechar modal
    document.querySelector('.polaroid-modal')?.remove();

    // Navega para calculadora
    navegarParaPagina('calculadora-medidas');

    // Calcular automaticamente
    setTimeout(() => calcularMedidas(), 300);
};

// Carregar preferências salvas
function carregarPreferencias() {
    const preferencias = Storage.load('preferencias', {});
    if (preferencias.unidadeLargura) {
        document.getElementById('unidade-largura').value = preferencias.unidadeLargura;
    }
    if (preferencias.unidadeAltura) {
        document.getElementById('unidade-altura').value = preferencias.unidadeAltura;
    }
    
    // Carregar último cálculo
    const ultimoCalculo = Storage.load('ultimoCalculo', null);
    if (ultimoCalculo) {
        document.getElementById('largura').value = ultimoCalculo.larguraInput || '';
        document.getElementById('altura').value = ultimoCalculo.alturaInput || '';
    }
}

// =========================================================================
// SISTEMA DE NAVEGAÇÃO ENTRE PÁGINAS
// =========================================================================

let orcamentoItens = [];
let orcamentoSubtotal = 0;

// =========================================================================
// SISTEMA DE RECIBOS E O.S.
// =========================================================================

let reciboItens = [];
let reciboData = null;

// Dados fixos da empresa
const empresaDados = {
    nome: 'Jr_Tech_OFC',
    segmento: 'Fotografia, Edição e Personalizados',
    responsavel: 'José Renato',
    telefone: '(99) 98278-5958',
    endereco: 'R. Projetada - Recanto Universitário, Imperatriz - MA, 65914-073'
};

// Função para inicializar opções rápidas
function inicializarOpcoesRapidas() {
    const opcoesRapidasGrid = document.getElementById('opcoes-rapidas-grid');
    if (!opcoesRapidasGrid) return;
    
    // Filtrar serviços mais usados
    const servicosMaisUsados = servicos.filter(servico => servico.muitoUsado === true);
    
    // Limitar a 12 opções mais usadas para não ficar muito grande
    const opcoes = servicosMaisUsados.slice(0, 12);
    
    opcoesRapidasGrid.innerHTML = '';
    
    opcoes.forEach(servico => {
        const btn = document.createElement('button');
        btn.className = 'opcao-rapida-btn';
        btn.type = 'button';
        
        // Determinar cor/ícone baseado no tipo
        let iconClass = 'fas fa-tag';
        let badgeClass = '';
        
        if (servico.categoria === 'promocao' || servico.tipo === 'combo') {
            iconClass = 'fas fa-fire';
            badgeClass = 'opcao-promo';
        } else if (servico.tipo === 'foto') {
            iconClass = 'fas fa-image';
            badgeClass = 'opcao-foto';
        } else if (servico.tipo === 'xerox') {
            iconClass = 'fas fa-copy';
            badgeClass = 'opcao-xerox';
        } else if (servico.tipo === 'impressao') {
            iconClass = 'fas fa-print';
            badgeClass = 'opcao-impressao';
        } else if (servico.tipo === 'envelope') {
            iconClass = 'fas fa-envelope';
            badgeClass = 'opcao-envelope';
        }
        
        // Adicionar classe ao botão baseado no tipo
        if (badgeClass) {
            btn.classList.add(badgeClass);
        }
        
        btn.innerHTML = `
            <i class="${iconClass}"></i>
            <span class="opcao-nome">${servico.nome}</span>
            <span class="opcao-valor">${formatarMoeda(servico.valor)}</span>
            ${badgeClass && servico.categoria === 'promocao' ? '<span class="opcao-badge opcao-promo">🔥</span>' : ''}
        `;
        
        btn.addEventListener('click', function() {
            aplicarServicoNoRecibo({
                nome: servico.nome,
                descricao: servico.descricao || servico.nome,
                valor: servico.valor
            });
        });
        
        opcoesRapidasGrid.appendChild(btn);
    });
}

// Função para buscar serviços na tabela
function buscarServicosRecibo(termo) {
    if (!termo || termo.trim().length < 2) {
        document.getElementById('recibo-suggestions').style.display = 'none';
        return [];
    }
    
    const termoLower = termo.toLowerCase();
    return servicos.filter(servico => {
        const nomeMatch = servico.nome.toLowerCase().includes(termoLower);
        const descMatch = servico.descricao && servico.descricao.toLowerCase().includes(termoLower);
        return nomeMatch || descMatch;
    }).slice(0, 8); // Limitar a 8 resultados
}

// Função para exibir sugestões de serviços
function exibirSugestoesServicos(termo) {
    const suggestionsDiv = document.getElementById('recibo-suggestions');
    const servicosEncontrados = buscarServicosRecibo(termo);
    
    if (servicosEncontrados.length === 0) {
        suggestionsDiv.style.display = 'none';
        suggestionsDiv.innerHTML = '';
        return;
    }
    
    // Limpar sugestões anteriores
    suggestionsDiv.innerHTML = '';
    
    servicosEncontrados.forEach(servico => {
        const isPromocao = servico.categoria === 'promocao';
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'servico-suggestion-item';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'servico-suggestion-info';
        
        const strong = document.createElement('strong');
        strong.textContent = servico.nome;
        
        const descSpan = document.createElement('span');
        descSpan.className = 'servico-suggestion-desc';
        descSpan.textContent = servico.descricao || '';
        
        infoDiv.appendChild(strong);
        infoDiv.appendChild(descSpan);
        
        const rightDiv = document.createElement('div');
        rightDiv.className = 'servico-suggestion-right';
        
        const badge = document.createElement('span');
        badge.className = isPromocao ? 'servico-badge-promo' : `servico-badge-${servico.tipo}`;
        badge.textContent = isPromocao ? '🔥 Kit' : servico.tipo;
        
        const valorSpan = document.createElement('span');
        valorSpan.className = 'servico-suggestion-valor';
        valorSpan.textContent = `R$ ${servico.valor.toFixed(2)}`;
        
        rightDiv.appendChild(badge);
        rightDiv.appendChild(valorSpan);
        
        itemDiv.appendChild(infoDiv);
        itemDiv.appendChild(rightDiv);
        
        itemDiv.addEventListener('click', function() {
            aplicarServicoNoRecibo({
                nome: servico.nome,
                descricao: servico.descricao || servico.nome,
                valor: servico.valor
            });
        });
        
        suggestionsDiv.appendChild(itemDiv);
    });
    
    suggestionsDiv.style.display = 'block';
}

// Função global para aplicar serviço no recibo
window.aplicarServicoNoRecibo = function(servico) {
    // Limpar busca
    document.getElementById('recibo-busca-servico').value = '';
    document.getElementById('recibo-suggestions').style.display = 'none';
    
    // Criar item usando DOM
    const itemRow = document.createElement('div');
    itemRow.className = 'item-recibo-row';
    itemRow.setAttribute('data-item-id', Date.now().toString());
    
    const colQtd = document.createElement('div');
    colQtd.className = 'item-col-qtd';
    const inputQtd = document.createElement('input');
    inputQtd.type = 'number';
    inputQtd.className = 'item-qtd';
    inputQtd.value = '1';
    inputQtd.min = '1';
    inputQtd.step = '1';
    inputQtd.addEventListener('input', calcularTotalRecibo);
    colQtd.appendChild(inputQtd);
    
    const colDesc = document.createElement('div');
    colDesc.className = 'item-col-desc';
    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.className = 'item-desc';
    inputDesc.value = servico.descricao || servico.nome;
    inputDesc.placeholder = 'Descrição do serviço';
    inputDesc.addEventListener('input', calcularTotalRecibo);
    colDesc.appendChild(inputDesc);
    
    const colValor = document.createElement('div');
    colValor.className = 'item-col-valor';
    const inputValor = document.createElement('input');
    inputValor.type = 'number';
    inputValor.className = 'item-valor-unit';
    inputValor.value = servico.valor.toString();
    inputValor.step = '0.01';
    inputValor.min = '0';
    inputValor.addEventListener('input', calcularTotalRecibo);
    colValor.appendChild(inputValor);
    
    const colTotal = document.createElement('div');
    colTotal.className = 'item-col-total';
    const spanSubtotal = document.createElement('span');
    spanSubtotal.className = 'item-subtotal';
    spanSubtotal.textContent = formatarMoeda(servico.valor);
    colTotal.appendChild(spanSubtotal);
    
    const colAction = document.createElement('div');
    colAction.className = 'item-col-action';
    const btnRemover = document.createElement('button');
    btnRemover.className = 'btn-remover-item';
    btnRemover.title = 'Remover item';
    btnRemover.addEventListener('click', function() {
        removerItemRecibo(this);
    });
    const iconTrash = document.createElement('i');
    iconTrash.className = 'fas fa-trash';
    btnRemover.appendChild(iconTrash);
    colAction.appendChild(btnRemover);
    
    itemRow.appendChild(colQtd);
    itemRow.appendChild(colDesc);
    itemRow.appendChild(colValor);
    itemRow.appendChild(colTotal);
    itemRow.appendChild(colAction);
    
    const itensLista = document.getElementById('recibo-itens-lista');
    itensLista.appendChild(itemRow);
    calcularTotalRecibo();
    mostrarToast(`${servico.nome} adicionado!`, 'success');
};

// Função para adicionar item ao recibo (manualmente)
function adicionarItemRecibo() {
    const itemHTML = `
        <div class="item-recibo-row" data-item-id="${Date.now()}">
            <div class="item-col-qtd">
                <input type="number" class="item-qtd" value="1" min="1" step="1" oninput="calcularTotalRecibo()">
            </div>
            <div class="item-col-desc">
                <input type="text" class="item-desc" placeholder="Descrição do serviço" oninput="calcularTotalRecibo()">
            </div>
            <div class="item-col-valor">
                <input type="number" class="item-valor-unit" placeholder="0.00" step="0.01" min="0" oninput="calcularTotalRecibo()">
            </div>
            <div class="item-col-total">
                <span class="item-subtotal">R$ 0,00</span>
            </div>
            <div class="item-col-action">
                <button class="btn-remover-item" onclick="removerItemRecibo(this)" title="Remover item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    const itensLista = document.getElementById('recibo-itens-lista');
    itensLista.insertAdjacentHTML('beforeend', itemHTML);
    calcularTotalRecibo();
    mostrarToast('Item adicionado!', 'success');
}

// Função global para remover item do recibo
window.removerItemRecibo = function(btn) {
    const row = btn.closest('.item-recibo-row');
    row.remove();
    calcularTotalRecibo();
    mostrarToast('Item removido!', 'success');
};

// Função para calcular total do recibo
function calcularTotalRecibo() {
    let total = 0;
    const itens = document.querySelectorAll('.item-recibo-row');
    
    itens.forEach(item => {
        const qtd = parseFloat(item.querySelector('.item-qtd').value) || 0;
        const valorUnit = parseFloat(item.querySelector('.item-valor-unit').value) || 0;
        const subtotal = qtd * valorUnit;
        
        item.querySelector('.item-subtotal').textContent = formatarMoeda(subtotal);
        total += subtotal;
    });
    
    document.getElementById('recibo-total').textContent = formatarMoeda(total);
}

// Função para gerar recibo
function gerarRecibo() {
    // Validações
    const numero = document.getElementById('recibo-numero').value.trim();
    const data = document.getElementById('recibo-data').value;
    const clienteNome = document.getElementById('recibo-cliente-nome').value.trim();
    const clienteTelefone = document.getElementById('recibo-cliente-telefone').value.trim();
    const pagamento = document.getElementById('recibo-pagamento').value;
    const observacoes = document.getElementById('recibo-observacoes').value.trim();
    
    if (!numero || !data || !clienteNome) {
        mostrarToast('Por favor, preencha pelo menos Número do Pedido, Data e Nome do Cliente.', 'warning');
        return;
    }
    
    // Coletar itens
    const itens = [];
    let total = 0;
    document.querySelectorAll('.item-recibo-row').forEach(item => {
        const qtd = parseFloat(item.querySelector('.item-qtd').value) || 0;
        const desc = item.querySelector('.item-desc').value.trim();
        const valorUnit = parseFloat(item.querySelector('.item-valor-unit').value) || 0;
        
        if (desc && qtd > 0 && valorUnit > 0) {
            const subtotal = qtd * valorUnit;
            itens.push({ qtd, desc, valorUnit, subtotal });
            total += subtotal;
        }
    });
    
    if (itens.length === 0) {
        mostrarToast('Adicione pelo menos um item ao recibo.', 'warning');
        return;
    }
    
    // Formatar data
    const dataFormatada = new Date(data + 'T00:00:00').toLocaleDateString('pt-BR');
    
    // Armazenar dados para impressão/WhatsApp
    reciboData = {
        numero,
        data: dataFormatada,
        clienteNome,
        clienteTelefone,
        itens,
        total,
        pagamento,
        observacoes
    };
    
    // Gerar HTML do recibo (duas vias)
    const reciboHTML = gerarHTMLRecibo(reciboData);
    
    // Mostrar modal
    document.getElementById('recibo-preview').innerHTML = reciboHTML;
    document.getElementById('recibo-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para gerar HTML do recibo (A4 duplicado)
function gerarHTMLRecibo(dados) {
    let itensHTML = '';
    dados.itens.forEach(item => {
        itensHTML += `
            <tr>
                <td class="text-center">${item.qtd}x</td>
                <td>${item.desc}</td>
                <td class="text-right">${formatarMoeda(item.valorUnit)}</td>
                <td class="text-right">${formatarMoeda(item.subtotal)}</td>
            </tr>
        `;
    });
    
    const viaHTML = `
        <div class="recibo-via">
            <div class="recibo-header">
                <h2>${empresaDados.nome}</h2>
                <p class="recibo-segmento">${empresaDados.segmento}</p>
                <div class="recibo-info">
                    <p><strong>Responsável:</strong> ${empresaDados.responsavel}</p>
                    <p><strong>Contato:</strong> ${empresaDados.telefone}</p>
                    <p><strong>Endereço:</strong> ${empresaDados.endereco}</p>
                </div>
            </div>
            
            <div class="recibo-body">
                <div class="recibo-pedido">
                    <p><strong>Pedido:</strong> #${dados.numero}</p>
                    <p><strong>Data:</strong> ${dados.data}</p>
                </div>
                
                <div class="recibo-cliente">
                    <p><strong>Cliente:</strong> ${dados.clienteNome}</p>
                    ${dados.clienteTelefone ? `<p><strong>Telefone:</strong> ${dados.clienteTelefone}</p>` : ''}
                </div>
                
                <table class="recibo-tabela">
                    <thead>
                        <tr>
                            <th class="text-center">Qtd</th>
                            <th>Descrição</th>
                            <th class="text-right">Valor Unit.</th>
                            <th class="text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itensHTML}
                    </tbody>
                </table>
                
                <div class="recibo-total-impressao">
                    <p><strong>TOTAL: ${formatarMoeda(dados.total)}</strong></p>
                    <p><strong>Forma de Pagamento:</strong> ${dados.pagamento}</p>
                </div>
                
                ${dados.observacoes ? `
                    <div class="recibo-observacoes">
                        <p><strong>Observações:</strong></p>
                        <p>${dados.observacoes}</p>
                    </div>
                ` : ''}
            </div>
            
            <div class="recibo-footer">
                <div class="recibo-assinatura">
                    <p>_________________________________</p>
                    <p>${empresaDados.responsavel}</p>
                    <p>Jr_Tech_OFC</p>
                </div>
            </div>
        </div>
    `;
    
    return `
        <div class="recibo-a4-duplicado">
            <div class="recibo-via-container via-loja">
                <div class="via-titulo">VIA DE CONTROLE (LOJA)</div>
                ${viaHTML}
            </div>
            
            <div class="recibo-corte-vertical">
                <div class="corte-texto">
                    <i class="fas fa-cut"></i><br>
                    CORTE AQUI
                </div>
            </div>
            
            <div class="recibo-via-container via-cliente">
                <div class="via-titulo">VIA DO CLIENTE</div>
                ${viaHTML}
                <div class="recibo-agradecimento">
                    <p><strong>Obrigado pela preferência!</strong></p>
                </div>
            </div>
        </div>
    `;
}

// Função para fechar modal
function fecharModalRecibo() {
    document.getElementById('recibo-modal').style.display = 'none';
    document.body.style.overflow = '';
}

// =========================================================================
// SISTEMA DE ARMAZENAMENTO DE RECIBOS (localStorage)
// =========================================================================

// Função para salvar recibo no localStorage
function salvarRecibo(reciboData) {
    try {
        // Buscar recibos existentes
        let recibos = JSON.parse(localStorage.getItem('recibos_jrtech') || '[]');
        
        // Adicionar timestamp e ID único
        const reciboCompleto = {
            ...reciboData,
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            dataSalvamento: new Date().toLocaleString('pt-BR')
        };
        
        // Adicionar no início do array (mais recente primeiro)
        recibos.unshift(reciboCompleto);
        
        // Limitar a 1000 recibos (para não ocupar muito espaço)
        if (recibos.length > 1000) {
            recibos = recibos.slice(0, 1000);
        }
        
        // Salvar no localStorage
        localStorage.setItem('recibos_jrtech', JSON.stringify(recibos));
        
        return reciboCompleto.id;
    } catch (error) {
        console.error('Erro ao salvar recibo:', error);
        mostrarToast('Erro ao salvar recibo no histórico.', 'error');
        return null;
    }
}

// Função para carregar recibos do localStorage
function carregarRecibos() {
    try {
        const recibos = JSON.parse(localStorage.getItem('recibos_jrtech') || '[]');
        return recibos;
    } catch (error) {
        console.error('Erro ao carregar recibos:', error);
        return [];
    }
}

// Função interna para deletar recibo
function deletarReciboInterno(id) {
    try {
        let recibos = carregarRecibos();
        recibos = recibos.filter(r => r.id !== id);
        localStorage.setItem('recibos_jrtech', JSON.stringify(recibos));
        mostrarToast('Recibo removido!', 'success');
        carregarHistoricoRecibos();
    } catch (error) {
        console.error('Erro ao deletar recibo:', error);
        mostrarToast('Erro ao remover recibo.', 'error');
    }
}

// Função global para limpar histórico
window.limparHistoricoRecibos = function() {
    if (confirm('Tem certeza que deseja limpar todo o histórico de recibos? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('recibos_jrtech');
        mostrarToast('Histórico limpo!', 'success');
        carregarHistoricoRecibos();
    }
};

// Função global para deletar recibo
window.deletarRecibo = function(id) {
    if (confirm('Tem certeza que deseja excluir este recibo?')) {
        deletarReciboInterno(id);
    }
};

// Função para carregar e exibir histórico
function carregarHistoricoRecibos() {
    const listaDiv = document.getElementById('historico-recibos-lista');
    const vazioDiv = document.getElementById('historico-vazio');
    
    if (!listaDiv) return;
    
    const recibos = carregarRecibos();
    const termoBusca = document.getElementById('historico-busca')?.value.toLowerCase() || '';
    
    // Filtrar recibos se houver busca
    const recibosFiltrados = recibos.filter(recibo => {
        if (!termoBusca) return true;
        const busca = termoBusca.toLowerCase();
        return (
            recibo.numero.toLowerCase().includes(busca) ||
            recibo.clienteNome.toLowerCase().includes(busca) ||
            recibo.data.toLowerCase().includes(busca) ||
            recibo.clienteTelefone?.toLowerCase().includes(busca)
        );
    });
    
    if (recibosFiltrados.length === 0) {
        listaDiv.innerHTML = '';
        if (vazioDiv) vazioDiv.style.display = 'flex';
        return;
    }
    
    if (vazioDiv) vazioDiv.style.display = 'none';
    
    listaDiv.innerHTML = recibosFiltrados.map(recibo => {
        const itensTexto = recibo.itens.map(item => `${item.qtd}x ${item.desc}`).join(', ');
        
        return `
            <div class="historico-item-card">
                <div class="historico-item-header">
                    <div class="historico-item-info">
                        <h3><i class="fas fa-receipt"></i> Recibo #${recibo.numero}</h3>
                        <div class="historico-item-meta">
                            <span><i class="fas fa-calendar"></i> ${recibo.data}</span>
                            <span><i class="fas fa-user"></i> ${recibo.clienteNome}</span>
                            ${recibo.clienteTelefone ? `<span><i class="fas fa-phone"></i> ${recibo.clienteTelefone}</span>` : ''}
                        </div>
                    </div>
                    <div class="historico-item-valor">
                        <strong>${formatarMoeda(recibo.total)}</strong>
                        <span class="historico-pagamento">${recibo.pagamento}</span>
                    </div>
                </div>
                <div class="historico-item-body">
                    <div class="historico-item-detalhes">
                        <p><strong>Itens:</strong> ${itensTexto}</p>
                        ${recibo.observacoes ? `<p><strong>Observações:</strong> ${recibo.observacoes}</p>` : ''}
                    </div>
                    <div class="historico-item-actions">
                        <button class="btn-ver-recibo" onclick="window.verReciboHistorico('${recibo.id}')">
                            <i class="fas fa-eye"></i> Ver
                        </button>
                        <button class="btn-reimprimir-recibo" onclick="window.reimprimirReciboHistorico('${recibo.id}')">
                            <i class="fas fa-print"></i> Reimprimir
                        </button>
                        <button class="btn-whatsapp-recibo" onclick="window.reenviarWhatsAppHistorico('${recibo.id}')">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </button>
                        <button class="btn-deletar-recibo" onclick="window.deletarRecibo('${recibo.id}')">
                            <i class="fas fa-trash"></i> Excluir
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Função global para ver recibo do histórico
window.verReciboHistorico = function(id) {
    const recibos = carregarRecibos();
    const recibo = recibos.find(r => r.id === id);
    
    if (!recibo) {
        mostrarToast('Recibo não encontrado.', 'warning');
        return;
    }
    
    // Restaurar dados do recibo
    reciboData = recibo;
    
    // Gerar e mostrar modal
    const reciboHTML = gerarHTMLRecibo(reciboData);
    document.getElementById('recibo-preview').innerHTML = reciboHTML;
    document.getElementById('recibo-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

// Função global para reimprimir recibo do histórico
window.reimprimirReciboHistorico = function(id) {
    const recibos = carregarRecibos();
    const recibo = recibos.find(r => r.id === id);
    
    if (!recibo) {
        mostrarToast('Recibo não encontrado.', 'warning');
        return;
    }
    
    // Restaurar dados temporariamente
    const reciboOriginal = reciboData;
    reciboData = recibo;
    
    // Imprimir
    imprimirRecibo();
    
    // Restaurar dados originais
    reciboData = reciboOriginal;
};

// Função global para reenviar WhatsApp do histórico
window.reenviarWhatsAppHistorico = function(id) {
    const recibos = carregarRecibos();
    const recibo = recibos.find(r => r.id === id);
    
    if (!recibo) {
        mostrarToast('Recibo não encontrado.', 'warning');
        return;
    }
    
    // Restaurar dados temporariamente
    const reciboOriginal = reciboData;
    reciboData = recibo;
    
    // Enviar WhatsApp
    enviarWhatsAppRecibo();
    
    // Restaurar dados originais
    reciboData = reciboOriginal;
};

// Função para imprimir recibo
function imprimirRecibo() {
    if (!reciboData) {
        mostrarToast('Gere o recibo primeiro.', 'warning');
        return;
    }
    
    const reciboHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Recibo ${reciboData.numero} - ${empresaDados.nome}</title>
            <style>
                @page {
                    size: A4 portrait;
                    margin: 0;
                }
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: Arial, sans-serif;
                    font-size: 11pt;
                    color: #000;
                    background: #fff;
                    padding: 0;
                    margin: 0;
                }
                .recibo-a4-duplicado {
                    width: 210mm;
                    height: 297mm;
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .recibo-via-container {
                    width: 50%;
                    height: 100%;
                    border: 1px solid #000;
                    padding: 6mm;
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;
                }
                .recibo-corte-vertical {
                    width: 5mm;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-left: 2px dashed #000;
                    border-right: 2px dashed #000;
                    background: repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2mm,
                        rgba(0,0,0,0.1) 2mm,
                        rgba(0,0,0,0.1) 3mm
                    );
                    box-sizing: border-box;
                }
                .corte-texto {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    font-weight: bold;
                    font-size: 9pt;
                    color: #000;
                    white-space: nowrap;
                }
                .via-titulo {
                    text-align: center;
                    font-weight: bold;
                    font-size: 12pt;
                    margin-bottom: 5mm;
                    border-bottom: 2px solid #000;
                    padding-bottom: 2mm;
                }
                .recibo-via {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .recibo-header {
                    text-align: center;
                    margin-bottom: 4mm;
                    border-bottom: 1px solid #000;
                    padding-bottom: 2mm;
                }
                .recibo-header h2 {
                    font-size: 14pt;
                    margin-bottom: 1mm;
                }
                .recibo-segmento {
                    font-size: 9pt;
                    margin-bottom: 2mm;
                }
                .recibo-info {
                    font-size: 8pt;
                    text-align: left;
                    line-height: 1.3;
                }
                .recibo-info p {
                    margin: 0.5mm 0;
                }
                .recibo-body {
                    flex: 1;
                    margin: 2mm 0;
                    display: flex;
                    flex-direction: column;
                }
                .recibo-pedido, .recibo-cliente {
                    margin-bottom: 2mm;
                    font-size: 9pt;
                }
                .recibo-pedido p, .recibo-cliente p {
                    margin: 0.5mm 0;
                }
                .recibo-tabela {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2mm 0;
                    font-size: 8pt;
                }
                .recibo-tabela th,
                .recibo-tabela td {
                    border: 1px solid #000;
                    padding: 1mm;
                    text-align: left;
                }
                .recibo-tabela th {
                    background: #f0f0f0;
                    font-weight: bold;
                    font-size: 7pt;
                }
                .recibo-tabela td {
                    font-size: 7pt;
                }
                .text-center {
                    text-align: center;
                }
                .text-right {
                    text-align: right;
                }
                .recibo-total-impressao {
                    margin-top: 2mm;
                    text-align: right;
                    font-size: 10pt;
                    font-weight: bold;
                }
                .recibo-total-impressao p {
                    margin: 0.5mm 0;
                }
                .recibo-observacoes {
                    margin-top: 2mm;
                    font-size: 8pt;
                    border-top: 1px solid #000;
                    padding-top: 2mm;
                    line-height: 1.3;
                }
                .recibo-footer {
                    margin-top: auto;
                    border-top: 1px solid #000;
                    padding-top: 2mm;
                }
                .recibo-assinatura {
                    text-align: center;
                    font-size: 8pt;
                }
                .recibo-assinatura p {
                    margin: 1mm 0;
                }
                .recibo-agradecimento {
                    text-align: center;
                    margin-top: 2mm;
                    padding-top: 2mm;
                    border-top: 1px solid #000;
                    font-size: 10pt;
                    font-weight: bold;
                }
                @media print {
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .recibo-a4-duplicado {
                        page-break-after: always;
                    }
                }
            </style>
        </head>
        <body>
            ${gerarHTMLRecibo(reciboData)}
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(reciboHTML);
    printWindow.document.close();
    printWindow.onload = function() {
        printWindow.print();
        // Salvar recibo após impressão
        salvarRecibo(reciboData);
        mostrarToast('Recibo salvo no histórico!', 'success');
    };
}

// Função para formatar telefone para WhatsApp (remove caracteres especiais e adiciona código do país)
function formatarTelefoneWhatsApp(telefone) {
    if (!telefone) return null;
    
    // Remove tudo que não é número
    let numero = telefone.replace(/\D/g, '');
    
    // Se já começa com 55 (código do Brasil), usa direto
    if (numero.startsWith('55') && numero.length >= 12) {
        return numero;
    }
    
    // Se começa com 0, remove
    if (numero.startsWith('0')) {
        numero = numero.substring(1);
    }
    
    // Se tem 11 dígitos (DDD + 9 dígitos), adiciona código do país
    if (numero.length === 11) {
        return '55' + numero;
    }
    
    // Se tem 10 dígitos (DDD + 8 dígitos), adiciona código do país
    if (numero.length === 10) {
        return '55' + numero;
    }
    
    return null;
}

// Função para enviar WhatsApp
function enviarWhatsAppRecibo() {
    if (!reciboData) {
        mostrarToast('Gere o recibo primeiro.', 'warning');
        return;
    }
    
    // Validar telefone do cliente
    if (!reciboData.clienteTelefone || reciboData.clienteTelefone.trim() === '') {
        mostrarToast('Por favor, preencha o telefone do cliente no recibo.', 'warning');
        return;
    }
    
    const telefoneCliente = formatarTelefoneWhatsApp(reciboData.clienteTelefone);
    
    if (!telefoneCliente) {
        mostrarToast('Telefone do cliente inválido. Verifique o número digitado.', 'warning');
        return;
    }
    
    // Montar mensagem profissional e atrativa
    let mensagem = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `📸 *${empresaDados.nome}*\n`;
    mensagem += `${empresaDados.segmento}\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    mensagem += `Olá *${reciboData.clienteNome}*! 👋\n\n`;
    mensagem += `Agradecemos pela sua preferência! 🙏\n\n`;
    
    mensagem += `📋 *RESUMO DO PEDIDO #${reciboData.numero}*\n`;
    mensagem += `📅 Data: ${reciboData.data}\n\n`;
    
    mensagem += `🛍️ *ITENS DO PEDIDO:*\n`;
    reciboData.itens.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.qtd}x ${item.desc}\n`;
        mensagem += `   💰 ${formatarMoeda(item.subtotal)}\n\n`;
    });
    
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `💵 *TOTAL: ${formatarMoeda(reciboData.total)}*\n`;
    mensagem += `💳 Forma de Pagamento: ${reciboData.pagamento}\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    if (reciboData.observacoes) {
        mensagem += `📝 *Observações:*\n${reciboData.observacoes}\n\n`;
    }
    
    mensagem += `✨ Estamos à sua disposição para qualquer dúvida!\n\n`;
    mensagem += `📞 *Contato:*\n${empresaDados.telefone}\n\n`;
    mensagem += `📍 *Endereço:*\n${empresaDados.endereco}\n\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `💙 Obrigado pela confiança em nossos serviços!\n`;
    mensagem += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    
    // Codificar mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagem);
    
    // Abrir WhatsApp Web ou App com o número do cliente
    const urlWhatsApp = `https://wa.me/${telefoneCliente}?text=${mensagemEncoded}`;
    window.open(urlWhatsApp, '_blank');
    
    mostrarToast(`WhatsApp aberto para ${reciboData.clienteNome}!`, 'success');
}

// Função auxiliar para formatar moeda
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// Função para navegar entre páginas
function navegarParaPagina(pageId) {
    // Oculta todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Mostra a página selecionada
    const pageElement = document.getElementById(`page-${pageId}`);
    if (pageElement) {
        pageElement.style.display = 'block';
    }

    // Atualiza título da página
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && pageElement) {
        const pageHeader = pageElement.querySelector('.page-header h2');
        if (pageHeader) {
            pageTitle.textContent = pageHeader.textContent.trim();
        }
    }

    // Remove active de todos os itens de navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona active no item selecionado
    const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }

    // Fecha sidebar no mobile
    if (window.innerWidth <= 992) {
        fecharSidebar();
    }

    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Inicialização específica por página
    if (pageId === 'recibos-os') {
        // Define data padrão como hoje
        const hoje = new Date().toISOString().split('T')[0];
        const dataInput = document.getElementById('recibo-data');
        if (dataInput && !dataInput.value) {
            dataInput.value = hoje;
        }
        
        // Inicializar opções rápidas
        inicializarOpcoesRapidas();
        
        // Configurar busca de serviços com debounce
        const buscaInput = document.getElementById('recibo-busca-servico');
        if (buscaInput) {
            buscaInput.addEventListener('input', debounce(function() {
                exibirSugestoesServicos(buscaInput.value);
            }, 300));
            
            // Fechar sugestões ao clicar fora
            document.addEventListener('click', function(e) {
                const suggestionsDiv = document.getElementById('recibo-suggestions');
                const buscaContainer = document.querySelector('.servico-autocomplete');
                if (suggestionsDiv && buscaContainer && !buscaContainer.contains(e.target)) {
                    suggestionsDiv.style.display = 'none';
                }
            });
        }
    } else if (pageId === 'historico-recibos') {
        // Carregar histórico ao entrar na página
        carregarHistoricoRecibos();
        
        // Configurar busca no histórico
        const buscaHistorico = document.getElementById('historico-busca');
        if (buscaHistorico) {
            buscaHistorico.addEventListener('input', debounce(function() {
                carregarHistoricoRecibos();
            }, 300));
        }
    }
}

// Controle da Sidebar
function abrirSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.classList.add('no-scroll');
}

function fecharSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
}

// Toggle sidebar compacta/expandida
function toggleSidebarCompacta() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-compact');
    
    if (!sidebar || !toggleBtn) return;
    
    sidebar.classList.toggle('compacta');
    const isCompacta = sidebar.classList.contains('compacta');
    
    // Salvar preferência
    localStorage.setItem('sidebar_compacta', isCompacta);
    
    // Atualizar ícone
    const icon = toggleBtn.querySelector('i');
    if (icon) {
        icon.className = isCompacta ? 'fas fa-chevron-right' : 'fas fa-chevron-left';
    }
    
    // Ajustar main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        if (isCompacta) {
            mainContent.style.marginLeft = '70px';
        } else {
            mainContent.style.marginLeft = '';
        }
    }
}

// Carregar preferência de sidebar
function carregarPreferenciaSidebar() {
    const isCompacta = localStorage.getItem('sidebar_compacta') === 'true';
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-compact');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar && isCompacta) {
        sidebar.classList.add('compacta');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-chevron-right';
        }
        if (mainContent && window.innerWidth > 992) {
            mainContent.style.marginLeft = '70px';
        }
    }
}

// =========================================================================
// NOVAS FERRAMENTAS DE PRODUTIVIDADE
// =========================================================================

// Calculadora de Desconto
function calcularDesconto() {
    const precoOriginal = parseFloat(document.getElementById('preco-original').value);
    const descontoPercent = parseFloat(document.getElementById('desconto-percent').value);

    if (isNaN(precoOriginal) || isNaN(descontoPercent) || precoOriginal <= 0 || descontoPercent < 0 || descontoPercent > 100) {
        mostrarToast('Por favor, insira valores válidos.', 'warning');
        return;
    }

    const valorDesconto = precoOriginal * (descontoPercent / 100);
    const precoDescontado = precoOriginal - valorDesconto;

    document.getElementById('preco-descontado').textContent = `R$ ${precoDescontado.toFixed(2)}`;
    document.getElementById('valor-economizado').textContent = `R$ ${valorDesconto.toFixed(2)}`;
    document.getElementById('resultado-desconto').style.display = 'block';
    mostrarToast('Desconto calculado!', 'success');
}

// Calculadora de Custo Total
function calcularCustoTotal() {
    const precoUnitario = parseFloat(document.getElementById('preco-unitario').value);
    const quantidade = parseFloat(document.getElementById('quantidade-custo').value);

    if (isNaN(precoUnitario) || isNaN(quantidade) || precoUnitario <= 0 || quantidade <= 0) {
        mostrarToast('Por favor, insira valores válidos.', 'warning');
        return;
    }

    const custoTotal = precoUnitario * quantidade;

    document.getElementById('custo-total').textContent = `R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('resultado-custo').style.display = 'block';
    mostrarToast('Custo calculado!', 'success');
}

// Calculadora de Quantidade por Folha
const dimensoesFolha = {
    A4: { largura: 21.0, altura: 29.7 },
    A3: { largura: 29.7, altura: 42.0 },
    A2: { largura: 42.0, altura: 59.4 }
};

function calcularQuantidadeFolha() {
    const larguraItem = parseFloat(document.getElementById('largura-item').value);
    const alturaItem = parseFloat(document.getElementById('altura-item').value);
    const tipoFolha = document.getElementById('tipo-folha').value;

    if (isNaN(larguraItem) || isNaN(alturaItem) || larguraItem <= 0 || alturaItem <= 0) {
        mostrarToast('Por favor, insira valores válidos.', 'warning');
        return;
    }

    let larguraFolha, alturaFolha;

    if (tipoFolha === 'custom') {
        larguraFolha = parseFloat(document.getElementById('largura-folha-custom').value);
        alturaFolha = parseFloat(document.getElementById('altura-folha-custom').value);
        if (isNaN(larguraFolha) || isNaN(alturaFolha) || larguraFolha <= 0 || alturaFolha <= 0) {
            mostrarToast('Por favor, insira dimensões da folha personalizada.', 'warning');
            return;
        }
    } else {
        const folha = dimensoesFolha[tipoFolha];
        larguraFolha = folha.largura;
        alturaFolha = folha.altura;
    }

    // Calcula quantidade em orientação normal
    const qtdHorizontal = Math.floor(larguraFolha / larguraItem);
    const qtdVertical = Math.floor(alturaFolha / alturaItem);
    const qtdNormal = qtdHorizontal * qtdVertical;

    // Calcula quantidade em orientação invertida
    const qtdHorizontalInv = Math.floor(larguraFolha / alturaItem);
    const qtdVerticalInv = Math.floor(alturaFolha / larguraItem);
    const qtdInvertida = qtdHorizontalInv * qtdVerticalInv;

    // Escolhe a melhor opção
    const melhorQtd = Math.max(qtdNormal, qtdInvertida);
    const melhorLayout = qtdNormal >= qtdInvertida 
        ? `${qtdHorizontal} x ${qtdVertical}` 
        : `${qtdHorizontalInv} x ${qtdVerticalInv} (invertido)`;

    const folhasPara100 = Math.ceil(100 / melhorQtd);

    document.getElementById('quantidade-por-folha').textContent = melhorQtd;
    document.getElementById('layout-quantidade').textContent = melhorLayout;
    document.getElementById('folhas-100').textContent = folhasPara100;
    document.getElementById('resultado-quantidade-folha').style.display = 'block';
    mostrarToast('Quantidade calculada!', 'success');
}

// Calculadora de Preço de Venda (Margem de Lucro)
function calcularPrecoVenda() {
    const custoProduto = parseFloat(document.getElementById('custo-produto').value);
    const margemLucro = parseFloat(document.getElementById('margem-lucro').value);

    if (isNaN(custoProduto) || isNaN(margemLucro) || custoProduto <= 0 || margemLucro < 0) {
        mostrarToast('Por favor, insira valores válidos.', 'warning');
        return;
    }

    const precoVenda = custoProduto / (1 - margemLucro / 100);
    const lucroUnidade = precoVenda - custoProduto;

    document.getElementById('preco-venda').textContent = `R$ ${precoVenda.toFixed(2)}`;
    document.getElementById('lucro-unidade').textContent = `R$ ${lucroUnidade.toFixed(2)}`;
    document.getElementById('resultado-preco-venda').style.display = 'block';
    mostrarToast('Preço de venda calculado!', 'success');
}

// Calculadora de Margem de Lucro
function calcularMargem() {
    const precoVenda = parseFloat(document.getElementById('preco-venda-margem').value);
    const custoProduto = parseFloat(document.getElementById('custo-produto-margem').value);

    if (isNaN(precoVenda) || isNaN(custoProduto) || precoVenda <= 0 || custoProduto <= 0 || precoVenda <= custoProduto) {
        mostrarToast('Por favor, insira valores válidos. O preço de venda deve ser maior que o custo.', 'warning');
        return;
    }

    const margemLucro = ((precoVenda - custoProduto) / precoVenda) * 100;
    const lucroTotal = precoVenda - custoProduto;

    document.getElementById('margem-calculada').textContent = `${margemLucro.toFixed(2)}%`;
    document.getElementById('lucro-total').textContent = `R$ ${lucroTotal.toFixed(2)}`;
    document.getElementById('resultado-margem').style.display = 'block';
    mostrarToast('Margem calculada!', 'success');
}

// Calculadora de Preço por m²
function calcularPrecoM2() {
    const precoTotal = parseFloat(document.getElementById('preco-total-m2').value);
    const largura = parseFloat(document.getElementById('largura-m2').value);
    const altura = parseFloat(document.getElementById('altura-m2').value);

    if (isNaN(precoTotal) || isNaN(largura) || isNaN(altura) || precoTotal <= 0 || largura <= 0 || altura <= 0) {
        mostrarToast('Por favor, insira valores válidos.', 'warning');
        return;
    }

    const areaCm2 = largura * altura;
    const areaM2 = areaCm2 / 10000;
    const precoPorM2 = precoTotal / areaM2;

    document.getElementById('area-total-m2').textContent = `${areaM2.toFixed(4)} m²`;
    document.getElementById('preco-por-m2').textContent = `R$ ${precoPorM2.toFixed(2)}`;
    document.getElementById('resultado-preco-m2').style.display = 'block';
    mostrarToast('Preço por m² calculado!', 'success');
}

// Gerador de Orçamento Rápido
function adicionarItemOrcamento() {
    const descricao = document.getElementById('item-descricao').value.trim();
    const quantidade = parseFloat(document.getElementById('item-quantidade').value) || 1;
    const valor = parseFloat(document.getElementById('item-valor').value);

    if (!descricao || isNaN(valor) || valor <= 0) {
        mostrarToast('Por favor, preencha todos os campos corretamente.', 'warning');
        return;
    }

    const item = {
        id: Date.now(),
        descricao,
        quantidade,
        valorUnitario: valor,
        valorTotal: quantidade * valor
    };

    orcamentoItens.push(item);
    atualizarOrcamento();
    
    // Limpa campos
    document.getElementById('item-descricao').value = '';
    document.getElementById('item-quantidade').value = '1';
    document.getElementById('item-valor').value = '';
    
    mostrarToast('Item adicionado!', 'success');
}

// Função global para remover item do orçamento
window.removerItemOrcamento = function(id) {
    orcamentoItens = orcamentoItens.filter(item => item.id !== id);
    atualizarOrcamento();
    mostrarToast('Item removido!', 'info');
};

function atualizarOrcamento() {
    const listaContainer = document.getElementById('lista-itens-orcamento');
    if (!listaContainer) return;

    listaContainer.innerHTML = '';

    if (orcamentoItens.length === 0) {
        listaContainer.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>Nenhum item adicionado</p></div>';
        document.getElementById('subtotal-orcamento').textContent = 'R$ 0,00';
        document.getElementById('total-orcamento').textContent = 'R$ 0,00';
        return;
    }

    orcamentoSubtotal = orcamentoItens.reduce((sum, item) => sum + item.valorTotal, 0);

    orcamentoItens.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-orcamento';
        itemDiv.innerHTML = `
            <div class="item-orcamento-info">
                <div class="item-orcamento-nome">${item.descricao}</div>
                <div class="item-orcamento-detalhes">${item.quantidade}x R$ ${item.valorUnitario.toFixed(2)}</div>
            </div>
            <div class="item-orcamento-valor">R$ ${item.valorTotal.toFixed(2)}</div>
            <button class="item-orcamento-remove" onclick="removerItemOrcamento(${item.id})" aria-label="Remover item">
                <i class="fas fa-trash"></i>
            </button>
        `;
        listaContainer.appendChild(itemDiv);
    });

    const desconto = parseFloat(document.getElementById('desconto-orcamento').value) || 0;
    const descontoValor = orcamentoSubtotal * (desconto / 100);
    const total = orcamentoSubtotal - descontoValor;

    document.getElementById('subtotal-orcamento').textContent = `R$ ${orcamentoSubtotal.toFixed(2)}`;
    document.getElementById('total-orcamento').textContent = `R$ ${total.toFixed(2)}`;
}

function limparOrcamento() {
    if (orcamentoItens.length === 0) {
        mostrarToast('Orçamento já está vazio.', 'info');
        return;
    }
    orcamentoItens = [];
    document.getElementById('desconto-orcamento').value = '0';
    atualizarOrcamento();
    mostrarToast('Orçamento limpo!', 'success');
}

function imprimirOrcamento() {
    if (orcamentoItens.length === 0) {
        mostrarToast('Adicione itens ao orçamento primeiro.', 'warning');
        return;
    }

    const desconto = parseFloat(document.getElementById('desconto-orcamento').value) || 0;
    const descontoValor = orcamentoSubtotal * (desconto / 100);
    const total = orcamentoSubtotal - descontoValor;

    let itensHTML = '';
    orcamentoItens.forEach(item => {
        itensHTML += `
            <tr>
                <td>${item.descricao}</td>
                <td>${item.quantidade}</td>
                <td>R$ ${item.valorUnitario.toFixed(2)}</td>
                <td>R$ ${item.valorTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    const conteudo = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Orçamento - Jr_Tech_OFC</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #1e3a8a; margin-bottom: 20px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                th { background: #1e3a8a; color: white; }
                .total { font-size: 1.25rem; font-weight: bold; color: #10b981; }
            </style>
        </head>
        <body>
            <h1>Orçamento - Jr_Tech_OFC</h1>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Qtd</th>
                        <th>Valor Unit.</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${itensHTML}
                </tbody>
            </table>
            <div style="margin-top: 20px; text-align: right;">
                <p>Subtotal: <strong>R$ ${orcamentoSubtotal.toFixed(2)}</strong></p>
                ${desconto > 0 ? `<p>Desconto (${desconto}%): <strong>R$ ${descontoValor.toFixed(2)}</strong></p>` : ''}
                <p class="total">TOTAL: R$ ${total.toFixed(2)}</p>
            </div>
        </body>
        </html>
    `;

    const janela = window.open('', '_blank');
    janela.document.write(conteudo);
    janela.document.close();
    janela.print();
}

// Comparador de Preços (global para uso no HTML)
window.compararPrecos = function() {
    const opcoes = [
        { desc: document.getElementById('opcao1-desc').value.trim(), preco: parseFloat(document.getElementById('opcao1-preco').value) },
        { desc: document.getElementById('opcao2-desc').value.trim(), preco: parseFloat(document.getElementById('opcao2-preco').value) },
        { desc: document.getElementById('opcao3-desc').value.trim(), preco: parseFloat(document.getElementById('opcao3-preco').value) }
    ];

    const opcoesValidas = opcoes.filter(op => op.desc && !isNaN(op.preco) && op.preco > 0);

    if (opcoesValidas.length < 2) {
        document.getElementById('comparador-resultado').style.display = 'none';
        return;
    }

    // Calcula diferenças
    const precos = opcoesValidas.map(op => op.preco);
    const menorPreco = Math.min(...precos);
    const maiorPreco = Math.max(...precos);

    opcoes.forEach((op, index) => {
        const resultadoDiv = document.getElementById(`resultado-opcao${index + 1}`);
        const diferencaDiv = document.getElementById(`diferenca-opcao${index + 1}`);
        
        if (op.desc && !isNaN(op.preco) && op.preco > 0) {
            resultadoDiv.style.display = 'flex';
            const diferenca = op.preco - menorPreco;
            if (diferenca === 0) {
                diferencaDiv.textContent = 'Melhor Preço!';
                diferencaDiv.style.color = '#10b981';
            } else {
                diferencaDiv.textContent = `+R$ ${diferenca.toFixed(2)}`;
                diferencaDiv.style.color = '#ef4444';
            }
        } else {
            resultadoDiv.style.display = 'none';
        }
    });

    // Mostra melhor opção
    const melhorOpcao = opcoesValidas.find(op => op.preco === menorPreco);
    if (melhorOpcao) {
        const economia = maiorPreco - menorPreco;
        document.getElementById('melhor-opcao-desc').textContent = melhorOpcao.desc || 'Opção';
        document.getElementById('melhor-opcao-preco').textContent = `R$ ${menorPreco.toFixed(2)}`;
        document.getElementById('economia-comparador').textContent = `R$ ${economia.toFixed(2)}`;
        document.getElementById('comparador-resultado').style.display = 'block';
    }
};

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Sistema de navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                navegarParaPagina(pageId);
                window.history.pushState({ page: pageId }, '', `#${pageId}`);
            }
        });
    });

    // Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarToggleCompact = document.getElementById('sidebar-toggle-compact');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', abrirSidebar);
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', fecharSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', fecharSidebar);
    }

    if (sidebarToggleCompact) {
        sidebarToggleCompact.addEventListener('click', toggleSidebarCompacta);
    }

    // Carregar preferência de sidebar compacta
    if (window.innerWidth > 992) {
        carregarPreferenciaSidebar();
    }

    // Toggle de folha customizada
    const tipoFolhaSelect = document.getElementById('tipo-folha');
    const folhaCustom = document.getElementById('folha-custom');
    if (tipoFolhaSelect && folhaCustom) {
        tipoFolhaSelect.addEventListener('change', function() {
            folhaCustom.style.display = this.value === 'custom' ? 'block' : 'none';
        });
    }

    // Carrega preferências do localStorage
    carregarPreferencias();
    
    // Renderiza cards e tabela de preços inicial
    renderizarCardsPrecos(servicos);
    renderizarTabelaPrecos(servicos);
    
    // Renderiza cards de fotos
    renderizarFotos();

    // Renderiza formatos Polaroid/Instax
    renderizarFormatosPolaroid();

    // Event listener para filtro de categorias Polaroid
    const filtroCategoria = document.getElementById('filtro-categoria-polaroid');
    if (filtroCategoria) {
        filtroCategoria.addEventListener('change', function() {
            renderizarFormatosPolaroid(this.value);
        });
    }

    // Event listeners para filtros
    const buscaPrecos = document.getElementById('busca-precos');
    const filtroTipo = document.getElementById('filtro-tipo');
    if (buscaPrecos) buscaPrecos.addEventListener('input', filtrarServicos);
    if (filtroTipo) filtroTipo.addEventListener('change', filtrarServicos);

    // Permite calcular com Enter
    const largura = document.getElementById('largura');
    const altura = document.getElementById('altura');
    if (largura) {
        largura.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calcularMedidas();
        });
    }
    if (altura) {
        altura.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calcularMedidas();
        });
    }

    // Navegação inicial
    const hash = window.location.hash.substring(1);
    if (hash) {
        navegarParaPagina(hash);
    } else {
        navegarParaPagina('precos');
    }

    // Atualiza orçamento quando desconto muda
    const descontoOrcamento = document.getElementById('desconto-orcamento');
    if (descontoOrcamento) {
        descontoOrcamento.addEventListener('input', atualizarOrcamento);
    }

    // Navegação pelo histórico do navegador
    window.addEventListener('popstate', (e) => {
        const hash = window.location.hash.substring(1) || 'precos';
        navegarParaPagina(hash);
    });

    // Fecha sidebar ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            fecharSidebar();
        }
    });

    // Fecha sidebar com ESC
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            fecharSidebar();
        }
    });

    // Botão Voltar ao Topo
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        const handleScrollToTop = () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScrollToTop);
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            mostrarToast('Voltando ao topo...', 'info');
        });
    }

    // Melhorar feedback visual nos inputs
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement?.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement?.classList.remove('focused');
        });
    });

    // Adicionar animação de entrada para cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards quando forem adicionados
    setTimeout(() => {
        document.querySelectorAll('.preco-card, .foto-card, .polaroid-card, .tool-card').forEach(card => {
            observer.observe(card);
        });
    }, 500);

    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K para focar na busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const buscaInput = document.getElementById('busca-precos');
            if (buscaInput) {
                buscaInput.focus();
                buscaInput.select();
            }
        }
        // ESC para fechar sidebar, modal de recibo ou limpar busca
        if (e.key === 'Escape') {
            const reciboModal = document.getElementById('recibo-modal');
            if (reciboModal && reciboModal.style.display === 'flex') {
                fecharModalRecibo();
            } else {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    fecharSidebar();
                } else {
                    const buscaInput = document.getElementById('busca-precos');
                    if (buscaInput && buscaInput === document.activeElement) {
                        buscaInput.value = '';
                        filtrarServicos();
                    }
                }
            }
        }
    });

    // Inicializa orçamento
    atualizarOrcamento();
    
    // Fechar modal de recibo ao clicar fora
    const reciboModal = document.getElementById('recibo-modal');
    if (reciboModal) {
        reciboModal.addEventListener('click', function(e) {
            if (e.target === reciboModal) {
                fecharModalRecibo();
            }
        });
    }
});
