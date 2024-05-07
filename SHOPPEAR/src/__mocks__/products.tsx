const products = [
    {
        "id": 1,
        "nombre": "Almohada Oregon",
        "descripcion": "Almohada comprimida de recuperación rápida 50x70cm",
        "precio": 12000,
        "rating": "★★★★☆",
        "img": "/assets/HOGAR/hg1.jpg",
        "stock": 20,
        "categoria": "hogar"
    },
    {
        "id": 2,
        "nombre": "Microondas ATMA",
        "descripcion": "Microondas ATMA 700W de potencia con display digital. Medidas 44x25.9x35.2cm3",
        "precio": 200000,
        "rating": "★★★☆☆",
        "img": "/assets/HOGAR/hg2.jpg",
        "stock": 20,
        "categoria": "hogar"
    },
    {
        "id": 3,
        "nombre": "Camara Dual Lens WIFI Exterior OWC-07 2 MP",
        "descripcion": "Camara Dual Lens con doble rango de vision y vision nocturna full color.",
        "precio": 72000,
        "rating": "★★★★☆",
        "img": "/assets/HOGAR/hg3.jpg",
        "stock": 20,
        "categoria": "hogar"
    },
    {
        "id": 4,
        "nombre": "Silla Gamer Genotype X-Tron 1D",
        "descripcion": "Silla gamer con asiento y respaldo de ecocuero y pana de calidad. Respaldo regulable de 90 a 180 grados.",
        "precio": 350000,
        "rating": "★★☆☆☆",
        "img": "/assets/HOGAR/hg4.jpg",
        "stock": 20,
        "categoria": "hogar"
    },
    {
        "id": 5,
        "nombre": "Sillon Saarinen",
        "descripcion": "Sillon tapizado en tela, espuma de alta densidad. Altura regulable 82cm a 90cm.",
        "precio": 288000,
        "rating": "★★★★★",
        "img": "/assets/HOGAR/hg5.jpg",
        "stock": 20,
        "categoria": "hogar"
    },
    {
        "id": 6,
        "nombre": "Pantalon Jean Hombre Lavado Jujuy Skinny",
        "descripcion": "Pantalon de Jean etiqueta negra modelo N7 Lavado. Color negro",
        "precio": 110000,
        "rating": "★★★★★",
        "img": "/assets/HOMBRE/hb1.jpg",
        "stock": 20,
        "categoria": "hombre"
    },
    {
        "id": 7,
        "nombre": "Bermuda Elastico Negra",
        "descripcion": "Bermuda de gabardina. Cintura con elastico y calce recto. Tiene dos bolsillos laterales y dos bolsillos traseros.",
        "precio": 28700,
        "rating": "★★★☆☆",
        "img": "/assets/HOMBRE/hb2.jpg",
        "stock": 20,
        "categoria": "hombre"
    },
    {
        "id": 8,
        "nombre": "Bolso Medialuna",
        "descripcion": "Bolso con forma de medialuna. Dos formas de usar: en el hombro como cartera, o cruzado como riñonera. Tela liviana y suave color negro. Tira regulable. Bolsillos internos.",
        "precio": 32000,
        "rating": "★★★★★",
        "img": "/assets/HOMBRE/hb3.jpg",
        "stock": 20,
        "categoria": "hombre"
    },
    {
        "id": 9,
        "nombre": "Remera Boy Verde",
        "descripcion": "Remera 100% Algodón. Molde clásico de hombre. Mangas grandes, larga.",
        "precio": 21000,
        "rating": "★★★★☆",
        "img": "/assets/HOMBRE/hb4.jpg",
        "stock": 20,
        "categoria": "hombre"
    },
    {
        "id": 10,
        "nombre": "Bucito Panal Militar",
        "descripcion": "Bucito de panal manga larga. Modelo clásico de hombre, oversized de mujer.",
        "precio": 24650,
        "rating": "★★★★★",
        "img": "/assets/HOMBRE/hb5.jpg",
        "stock": 20,
        "categoria": "hombre"
    },
    {
        "id": 11,
        "nombre": "Heybly Cat Tree - Torre grande para gatos de interior",
        "descripcion": "Múltiples gatitos curiosos pueden acostarse en el suave lugar alto al mismo tiempo para observar el paisaje fuera de la ventana",
        "precio": 225100,
        "rating": "★★★★☆",
        "img": "/assets/MASCOTAS/mc1.jpg",
        "stock": 20,
        "categoria": "mascotas"
    },
    {
        "id": 12,
        "nombre": "Rascador para Gato Fancy Pets",
        "descripcion": "Poste rascador, ideal para que el gato se ejercite y pase horas de juego. Hecho de materiales no tóxico. Ideal para gatos pequeños y grandes. Ensamble las piezas y colóquelo cerca de un lugar amplio donde el gato tenga acceso fácil al poste.",
        "precio": 800,
        "rating": "★☆☆☆☆",
        "img": "/assets/MASCOTAS/mc2.jpg",
        "stock": 20,
        "categoria": "mascotas"
    },
    {
        "id": 13,
        "nombre": "Correa de paseo reforzada",
        "descripcion": "Recomendamos esta correa para perros grandes y fuertes, adiestradores y paseadores. Es una correa altamente apreciada por quienes tienen perros grandes.",
        "precio": 7177,
        "rating": "★★★★☆",
        "img": "/assets/MASCOTAS/mc3.jpg",
        "stock": 20,
        "categoria": "mascotas"
    },
    {
        "id": 14,
        "nombre": "Kit Combo Juguetes De Goma Perros Grandes Mascotas",
        "descripcion": "Kit de juguetes para perros. Incluye hueso, pelota y aro. Ideal para masticar o lanzar. No toxico. Colores Surtidos.",
        "precio": 9600,
        "rating": "★★★★★",
        "img": "/assets/MASCOTAS/mc4.jpg",
        "stock": 20,
        "categoria": "mascotas"
    },
    {
        "id": 15,
        "nombre": "Barra de puño de mono de colores surtidos",
        "descripcion": "Seguras y no tóxicas: hechas de hilos de algodón y poliéster de alta calidad de América del Norte, estas bolas de cuerda para perros Mammoth son juguetes seguros, fuertes y buenos para perros que mastican.",
        "precio": 2000,
        "rating": "★★★★☆",
        "img": "/assets/MASCOTAS/mc5.jpg",
        "stock": 20,
        "categoria": "mascotas"
    },
    {
        "id": 16,
        "nombre": "Pollera Mujer Jean Negra Talle XS",
        "descripcion": "Pollera de jean negro, estilo rota 47 Street. Talle XS.",
        "precio": 22950,
        "rating": "★★★★☆",
        "img": "/assets/MUJER/mj1.jpg",
        "stock": 20,
        "categoria": "mujeres"
    },
    {
        "id": 17,
        "nombre": "Crop Top Blusa",
        "descripcion": "Crop Top Blusa Sexy Sin Manga Entallado Antro Fiesta",
        "precio": "181",
        "rating": "★☆☆☆☆",
        "img": "/assets/MUJER/mj2.jpg",
        "stock": 20,
        "categoria": "mujeres"
    },
    {
        "id": 18,
        "nombre": "Remera Cuadrada Marron",
        "descripcion": "Remera 100% Algodón. Mangas grandes, largo al botón del pantalón. Viene en talles S y M.",
        "precio": 18500,
        "rating": "★★★★★",
        "img": "/assets/MUJER/mj3.jpg",
        "stock": 20,
        "categoria": "mujeres"
    },
    {
        "id": 19,
        "nombre": "Jean Algodón Mujer Recto Medio Newboat",
        "descripcion": "No dejar en remojo. Lavar en agua fría separadamente. No usar blanqueador. No retorcer. Secar a la sombra. Plancha tibia.",
        "precio": 99990,
        "rating": "★★★★☆",
        "img": "/assets/MUJER/mj4.jpg",
        "stock": 20,
        "categoria": "mujeres"
    },
    {
        "id": 20,
        "nombre": "Crop Morley Blanco",
        "descripcion": "Crop de morley color blanco. Elastizado, lavar solo con ropa blanca.",
        "precio": 17000,
        "rating": "★★★★☆",
        "img": "/assets/MUJER/mj5.jpg",
        "stock": 20,
        "categoria": "mujeres"
    },
    {
        "id": 21,
        "nombre": "Camiseta de viaje para niñas, Negro, S",
        "descripcion": "Colores lisos: 100% algodón; Gris brezo: 90% algodón, 10% poliéster; Todos los demás: 50% algodón, 50% poliéster",
        "precio": 7500,
        "rating": "★★★★☆",
        "img": "/assets/NIÑOS/nn1.jpg",
        "stock": 20,
        "categoria": "ninos"
    },
    {
        "id": 22,
        "nombre": "Campera BB de Piel",
        "descripcion": "Campera para niña bebe de piel rosa marca Gepetto.",
        "precio": 30354,
        "rating": "★★☆☆☆",
        "img": "/assets/NIÑOS/nn2.jpg",
        "stock": 20,
        "categoria": "ninos"
    },
    {
        "id": 23,
        "nombre": "Pantalón jean bb nena wide leg",
        "descripcion": "Pantalón largo lila. Corte ancho. Marca Gepetto para niñas.",
        "precio": 18827,
        "rating": "★★★★☆",
        "img": "/assets/NIÑOS/nn3.jpg",
        "stock": 20,
        "categoria": "ninos"
    },
    {
        "id": 24,
        "nombre": "Buzo gris para niño pelota.",
        "descripcion": "Buzo cerrado manga larga color gris AIM FOR YOUR GOALS PLAY GREAT. 58% algodon, 42% polyester.",
        "precio": 24990,
        "rating": "★★★★☆",
        "img": "/assets/NIÑOS/nn4.jpg",
        "stock": 20,
        "categoria": "ninos"
    },
    {
        "id": 25,
        "nombre": "Remera Bebe Beba Manga Larga Algodón Estampada",
        "descripcion": "Remera Bebe Manga Larga Algodón. Colores disponibles: Verde - Gris",
        "precio": 10000,
        "rating": "★★★★★",
        "img": "/assets/NIÑOS/nn5.jpg",
        "stock": 20,
        "categoria": "ninos"
    },
    {
        "id": 26,
        "nombre": "Auriculares VI 8D Surround KINGSTAR",
        "descripcion": "KINGSTAR-auriculares TWS inalámbricos por Bluetooth, cascos deportivos estéreo 8D con micrófono para Xiaomi, Huawei y iphone",
        "precio": 8658,
        "rating": "☆☆☆☆☆",
        "img": "/assets/TECNOLOGIA/tec1.jpg",
        "stock": 20,
        "categoria": "tecnologia"
    },
    {
        "id": 27,
        "nombre": "Cargador Original Tipo C Para iPhone 15 Pro De 20 W + Cable",
        "descripcion": "Carga rapida, producto 100% original en caja sellada. Compatible con IOS.",
        "precio": 7000,
        "rating": "★★★★★",
        "img": "/assets/TECNOLOGIA/tec2.jpg",
        "stock": 20,
        "categoria": "tecnologia"
    },
    {
        "id": 28,
        "nombre": "Audífonos Inalámbricos Wh-ch520 Blanco",
        "descripcion": "El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        "precio": 197990,
        "rating": "★★★★☆",
        "img": "/assets/TECNOLOGIA/tec3.jpg",
        "stock": 20,
        "categoria": "tecnologia"
    },
    {
        "id": 29,
        "nombre": "Auriculares Deportivos Xiaomi",
        "descripcion": "Auricular Deportivo Inalambrico Xiaomi Negro 12 horas de bateria. Compatible con cualquier dispositivo Bluetooth excepto cualquier producto de Apple.",
        "precio": 178243,
        "rating": "★★★★★",
        "img": "/assets/TECNOLOGIA/tec4.jpg",
        "stock": 20,
        "categoria": "tecnologia"
    },
    {
        "id": 30,
        "nombre": "CARGADOR DE NETBOOK ORIGINAL GOBIERNO",
        "descripcion": "Cargador para Netbook Gobierno 2017 2018 2019 G6 G7 de 11,6 12v 2a 24w pin 3,5 x 1,35mm Adaptado Características: - Voltaje de entrada: 100-240v",
        "precio": 3652,
        "rating": "★★★☆☆",
        "img": "/assets/TECNOLOGIA/tec5.jpg",
        "stock": 20,
        "categoria": "tecnologia"
    }
]

export default products