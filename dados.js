let dados = [
    "Ararinha-azul",
    "Peixe-boi-amazônico",
    "Boto-cor-de-rosa",
    "Lobo-guará",
    "Tamanduá-bandeira",
    "Cachorro-do-mato-vinagre",
    "Onça-parda",
    "Gato-do-mato",
    "Tatu-bola",
    "Mico-leão-dourado ",
    "Jaguatirica",
    "Arara-azul ",
    "Veado-campeiro",
    "Tatu-mulita",
    "Águia-Cinzenta",
    "Onça-pintada",
    "Ariranha",
    "Cervo-do-pantanal",
];

let biomaAmazonia =[
    {
        titulo:"Ararinha-azul",
        nomeCientifico: "Cyanopsitta spixii",
        descricao: "Considerada extinta na natureza desde o início dos anos 2000, a ararinha-azul é um dos casos mais emblemáticos de extinção causada pela ação humana. No entanto, graças a esforços de conservação, alguns indivíduos foram criados em cativeiro, com o objetivo de reintroduzi-los em seu habitat natural.",
        ameaca: "Caça ilegal, destruição de habitat, baixa variabilidade genética...",
        link: "https://www.iucnredlist.org/species/22685533/153022606",
        imagem: "arara.png"
    },{
        titulo:"Peixe-boi-amazônico",
        nomeCientifico: "Trichechus inunguis",
        descricao: "O peixe-boi-amazônico é um mamífero aquático herbívoro, adaptado à vida nos rios da Amazônia.",
        ameaca: "Destruição de habitats, colisões com embarcações, caça ilegal e poluição das águas...",
        link: "https://www.iucnredlist.org/es/species/22102/43793736",
        imagem: "peixeboi.jpg"
    },{
        titulo:"Boto-cor-de-rosa",
        nomeCientifico: "Inia geoffrensis",
        descricao: "é uma das criaturas mais fascinantes e emblemáticas da Amazônia. Pertence à família dos golfinhos de água doce e é o maior deles, podendo atingir até 2,5 metros de comprimento.",
        ameaca: "Destruição de habitats, pesca incidental, poluição das águas...",
        link: "https://www.iucnredlist.org/species/10831/50358152",
        imagem: "boto.jpeg"
    }
];

let biomaCerrado =[
    {
        titulo:"Lobo-guará",
        nomeCientifico: "Chrysocyon brachyurus",
        descricao: "é uma espécie icônica do Cerrado brasileiro, conhecido por sua pelagem ruiva e longas pernas. É o maior canídeo da América do Sul e desempenha um papel fundamental no ecossistema.",
        ameaca: "Perda de habitat,caça, atropelamentos ...",
        link: "https://www.iucnredlist.org/species/4819/88135664",
        imagem: "lobo.jpg"
    },{
        titulo:"Tamanduá-bandeira",
        nomeCientifico: "Myrmecophaga tridactyla",
        descricao: "Conhecido por sua longa língua e pelos longos pelos, o tamanduá-bandeira é um animal solitário que se alimenta de formigas e cupins.",
        ameaca: "destruição de seu habitat e a caça ilegal ...",
        link: "https://www.iucnredlist.org/species/14224/47441961",
        imagem: "tamandua.png"
    },{
        titulo:"Cachorro-do-mato-vinagre",
        nomeCientifico: "Speothos venaticus",
        descricao: "Conhecido por sua longa língua e pelos longos pelos, o tamanduá-bandeira é um animal solitário que se alimenta de formigas e cupins.",
        ameaca: "destruição de seu habitat, caça ilegal ...",
        link: "https://www.iucnredlist.org/species/20468/9203243",
        imagem: "cachorro.jpg"
    }
];

let biomaCaatinga =[
    {
        titulo:"Onça-parda",
        nomeCientifico: "Puma concolor",
        descricao: "é um felino solitário e ágil, com pelagem que varia entre o marrom-acinzentado e o amarelado. Suas patas são longas e poderosas, adaptando-a para a caça em diferentes terrenos.",
        ameaca: "perda de habitat, caça ilegal...",
        link: "https://www.iucnredlist.org/species/18868/97216466",
        imagem: "onçaparda.png"
    },{
        titulo:"Gato-do-mato",
        nomeCientifico: "Leopardus tigrinus",
        descricao: "é um felino de porte médio, com pelagem manchada e listrada. Possui um corpo esguio e uma cauda longa, que o ajudam a se mover com agilidade entre a vegetação.",
        ameaca: "fragmentação de seu habitat, caça...",
        link: "https://www.iucnredlist.org/species/54012637/50653881",
        imagem: "gatodomato.jpg"
    },{
        titulo:"Tatu-bola",
        nomeCientifico: "Tolypeutes tricinctus",
        descricao: "um animal único, capaz de se enrolar em uma bola perfeita como forma de defesa. Sua carapaça é composta por placas ósseas articuladas, que o protegem de predadores.",
        ameaca: "perda de habitat, caça ilegal...",
        link: "https://www.iucnredlist.org/species/21975/47443455",
        imagem: "tatubola.jpg"
    }
];

let biomaMataAtlantica =[
    {
        titulo:"Mico-leão-dourado ",
        nomeCientifico: "Leontopithecus rosalia",
        descricao: "Um dos primatas mais conhecidos do Brasil, o mico-leão-dourado é um símbolo da luta pela conservação da Mata Atlântica.",
        ameaca: "destruição de seu habitat, tráfico de animais...",
        link: "https://www.iucnredlist.org/species/11506/192327291",
        imagem: "micoleao.jpg"
    },{
        titulo:"Jaguatirica",
        nomeCientifico: "Leopardus pardalis",
        descricao: "A jaguatirica é um felino de médio porte, ágil e elegante, que habita uma grande variedade de ecossistemas, incluindo a Mata Atlântica. Sua pelagem é marcante, com manchas pretas sobre um fundo amarelo-dourado, e suas pupilas são arredondadas, em contraste com as pupilas fendidas dos gatos domésticos.",
        ameaca: "perda de habitat, caça ilegal...",
        link: "https://www.iucnredlist.org/species/11509/97212355",
        imagem: "jaguatirica.jpg"
    },{
        titulo:"Arara-azul ",
        nomeCientifico: "Anodorhynchus hyacinthinus",
        descricao: "A arara-azul é a maior arara do mundo e uma das aves mais exuberantes da Mata Atlântica. Sua plumagem azul vibrante, com detalhes amarelos e azuis mais escuros, é um espetáculo da natureza.",
        ameaca: "destruição de seu habitat, tráfico de animais...",
        link: "https://www.iucnredlist.org/species/22685516/93077457",
        imagem: "araraazul.png"
    }
];

let biomaPampa =[
    {
        titulo:"Veado-campeiro",
        nomeCientifico: "Ozotoceros bezoarticus",
        descricao: "O veado-campeiro é um símbolo do Pampa, com sua pelagem avermelhada e chifres bifurcados nos machos. Adaptado aos campos abertos, ele é um herbívoro que se alimenta principalmente de gramíneas.",
        ameaca: "caça ilegal, perda de habitat, fragmentação de populações...",
        link: "https://www.iucnredlist.org/species/15803/22160030",
        imagem: "veado.jpeg"
    },{
        titulo:"Tatu-mulita",
        nomeCientifico: "Dasypus hybridus",
        descricao: "O tatu-mulita é um animal noturno e solitário, conhecido por sua carapaça composta por placas ósseas móveis. Essa carapaça o protege de predadores e serve como camuflagem.",
        ameaca: "caça ilegal, perda de habitat...",
        link: "https://www.iucnredlist.org/species/6288/47440329",
        imagem: "tatumulita.jpg"
        
    },{
        titulo:"Águia-Cinzenta",
        nomeCientifico: "Harpia harpyja",
        descricao: "A águia-cinzenta é uma das maiores aves de rapina do mundo, com uma envergadura que pode chegar a 2 metros. É uma espécie emblemática da Mata Atlântica, mas também pode ser encontrada em algumas áreas do Pampa.",
        ameaca: "perda de habitat, a caça ilegal, envenenamento...",
        link: "https://www.iucnredlist.org/species/22695998/197957213",
        imagem: "gaviao.jpg"
    }
];

let biomaPantanal =[
    {
        titulo:"Onça-pintada",
        nomeCientifico: "Panthera onca",
        descricao: "A onça-pintada é o maior felino das Américas e um predador ápice fundamental para o equilíbrio do ecossistema pantaneiro. Sua pelagem característica, com manchas pretas sobre um fundo amarelo-dourado, a torna um dos felinos mais reconhecidos do mundo.",
        ameaca: "perda de habitat, a caça ilegal...",
        link: "https://www.iucnredlist.org/species/15953/123791436",
        imagem: "onçapintada.jpg"
    },{
        titulo:"Ariranha",
        nomeCientifico: "Pteronura brasiliensis",
        descricao: "A ariranha é a maior lontra do mundo e um animal altamente social, vivendo em grupos que podem chegar a 20 indivíduos. Seu corpo alongado e hidrodinâmico a torna um excelente nadador.",
        ameaca: "perda de habitat, poluição dos rios, caça ilegal...",
        link: "https://www.iucnredlist.org/species/18711/244867206",
        imagem: "ariranha.jpeg"
    },{
        titulo:"Cervo-do-pantanal",
        nomeCientifico: "Blastocerus dichotomus",
        descricao: "O cervo-do-pantanal é o maior cervo da América do Sul e está adaptado às inundações do Pantanal. Sua pelagem é curta e densa, e seus cascos largos o ajudam a se movimentar em terrenos lamacentos.",
        ameaca: "perda de habitat, caça, hibridização com o veado-catingueiro...",
        link: "https://www.iucnredlist.org/species/2828/22160916",
        imagem: "cervo.jpg"
    }
];

