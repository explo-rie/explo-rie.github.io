// =============================================================
//  PALABRAS DEL MAPA  ✏️  ¡Este es TU archivo!
//  Aquí está todo el contenido. El mapa lo lee y lo dibuja solo.
//
//  Cómo funciona cada línea:
//     "País": ["palabra más usada", "otra palabra", "palabra (dónde se usa)"],
//
//  - La PRIMERA palabra de la lista sale grande: es la más habitual.
//    Además decide el COLOR: los lugares con la misma primera palabra
//    se pintan del mismo color. ¡Escríbela igual en todos!
//  - Lo que pongas entre paréntesis sale en pequeño, como nota.
//  - Si un país no aparece en la lista, sale como «Todavía no lo sabemos».
//  - "imagen": el dibujo que sustituye a la palabra (va en la carpeta imagenes/).
//  - "descripcion": lo que lee el lector de pantalla a quien no ve la imagen.
//    Descríbelo sin usar ninguna de las palabras del mapa.
//  - Cuidado con las comillas "" y las comas: cada línea termina en coma.
// =============================================================

// Enlace a tu formulario de Google para que la gente proponga palabras.
// Pega el enlace entre las comillas. Si lo dejas vacío, el botón no aparece.
const FORMULARIO = "https://docs.google.com/forms/d/e/1FAIpQLSfvA_TF4SgGBY5_1EsM8bgHeFiWZmQ0rzf-yIhreVrZ5dDRxQ/viewform";

const PALABRAS = {

  // ---------------------------------------------------------
  palomitas: {
    imagen: "imagenes/palomitas.svg",
    descripcion: "granos de maíz que explotan con el calor",
    paises: {
      "México":               ["palomitas", "palomitas de maíz"],
      "Guatemala":            ["poporopos", "palomitas"],
      "El Salvador":          ["palomitas", "poporopos"],
      "Honduras":             ["palomitas", "palomitas de maíz"],
      "Nicaragua":            ["palomitas", "palomitas de maíz"],
      "Costa Rica":           ["palomitas", "palomitas de maíz"],
      "Panamá":               ["millo", "palomitas de maíz", "popcorn"],
      "Cuba":                 ["rositas de maíz", "rositas"],
      "República Dominicana": ["cocalecas", "rositas de maíz", "palomitas de maíz"],
      "Puerto Rico":          ["popcorn", "poscón", "rosetas de maíz"],
      "Venezuela":            ["cotufas"],
      "Colombia":             ["crispetas", "maíz pira", "palomitas", "maíz tote (Cundinamarca y Boyacá)"],
      "Ecuador":              ["canguil"],
      "Perú":                 ["canchita", "popcorn"],
      "Bolivia":              ["pipocas", "pororó (Santa Cruz y Tarija)"],
      "Chile":                ["cabritas", "palomitas", "popcorn"],
      "Argentina":            ["pochoclo", "pororó (noreste y Santa Fe)", "pururú (Córdoba)", "ancua (noroeste)", "pipoca (Misiones)"],
      "Paraguay":             ["pororó"],
      "Uruguay":              ["pop", "pororó"],
      "España":               ["palomitas", "palomitas de maíz"],
      "Islas Canarias":       ["cotufas (Tenerife, La Palma, La Gomera y El Hierro)", "roscas (Gran Canaria, Lanzarote y Fuerteventura)"],
      "Guinea Ecuatorial":    ["palomitas"],
    },
  },

  // ---------------------------------------------------------
  chanclas: {
    imagen: "imagenes/chanclas.svg",
    descripcion: "sandalias de goma con una tira entre los dedos",
    paises: {
      "México":               ["chanclas", "pata de gallo"],
      "Guatemala":            ["chancletas", "yinas"],
      "El Salvador":          ["yinas", "chancletas"],
      "Honduras":             ["chancletas", "chanclas"],
      "Nicaragua":            ["chinelas"],
      "Costa Rica":           ["chancletas", "chinelas"],
      "Panamá":               ["chancletas", "chinelas"],
      "Cuba":                 ["chancletas", "cutaras (Oriente)"],
      "República Dominicana": ["chancletas"],
      "Puerto Rico":          ["chancletas", "chanclas"],
      "Venezuela":            ["cholas", "chancletas"],
      "Colombia":             ["chanclas", "chancletas"],
      "Ecuador":              ["chancletas", "chanclas"],
      "Perú":                 ["sayonaras", "hawaianas", "chancletas"],
      "Bolivia":              ["chinelas", "hawaianas"],
      "Chile":                ["chalas", "hawaianas"],
      "Argentina":            ["ojotas"],
      "Paraguay":             ["zapatillas"],
      "Uruguay":              ["chancletas", "chinelas"],
      "España":               ["chanclas"],
      "Islas Canarias":       ["cholas"],
      "Guinea Ecuatorial":    ["chanclas"],
    },
  },

  // ---------------------------------------------------------
  aretes: {
    imagen: "imagenes/aretes.svg",
    descripcion: "joyas que se llevan colgadas de las orejas",
    paises: {
      "México":               ["aretes"],
      "Guatemala":            ["aretes"],
      "El Salvador":          ["aretes"],
      "Honduras":             ["aretes", "aritos"],
      "Nicaragua":            ["aretes", "chapas"],
      "Costa Rica":           ["aretes"],
      "Panamá":               ["aretes"],
      "Cuba":                 ["aretes"],
      "República Dominicana": ["aretes"],
      "Puerto Rico":          ["pantallas", "aretes"],
      "Venezuela":            ["zarcillos"],
      "Colombia":             ["aretes", "topos (los pequeños y pegados a la oreja)"],
      "Ecuador":              ["aretes"],
      "Perú":                 ["aretes"],
      "Bolivia":              ["aretes"],
      "Chile":                ["aros"],
      "Argentina":            ["aros", "aritos"],
      "Paraguay":             ["aros"],
      "Uruguay":              ["caravanas"],
      "España":               ["pendientes"],
      "Islas Canarias":       ["pendientes", "zarcillos (los tradicionales)"],
      "Guinea Ecuatorial":    ["pendientes"],
    },
  },

  // ---------------------------------------------------------
  camiseta: {
    imagen: "imagenes/camiseta.svg",
    descripcion: "prenda de algodón de manga corta, sin botones",
    paises: {
      "México":               ["playera", "camiseta"],
      "Guatemala":            ["playera"],
      "El Salvador":          ["camiseta"],
      "Honduras":             ["camiseta"],
      "Nicaragua":            ["camiseta"],
      "Costa Rica":           ["camiseta", "chema"],
      "Panamá":               ["suéter", "camiseta"],
      "Cuba":                 ["pulóver"],
      "República Dominicana": ["poloché", "franela"],
      "Puerto Rico":          ["t-shirt", "camiseta"],
      "Venezuela":            ["franela"],
      "Colombia":             ["camiseta"],
      "Ecuador":              ["camiseta"],
      "Perú":                 ["polo"],
      "Bolivia":              ["polera"],
      "Chile":                ["polera"],
      "Argentina":            ["remera"],
      "Paraguay":             ["remera"],
      "Uruguay":              ["remera"],
      "España":               ["camiseta"],
      "Islas Canarias":       ["camiseta"],
      "Guinea Ecuatorial":    ["camiseta"],
    },
  },

  // ---------------------------------------------------------
  sueter: {
    imagen: "imagenes/sueter.svg",
    descripcion: "prenda de lana de manga larga para el frío",
    paises: {
      "México":               ["suéter"],
      "Guatemala":            ["suéter"],
      "El Salvador":          ["suéter"],
      "Honduras":             ["suéter"],
      "Nicaragua":            ["suéter"],
      "Costa Rica":           ["suéter", "sueta"],
      "Panamá":               ["suéter"],
      "Cuba":                 ["abrigo", "suéter"],
      "República Dominicana": ["abrigo", "suéter"],
      "Puerto Rico":          ["suéter"],
      "Venezuela":            ["suéter"],
      "Colombia":             ["saco", "buzo"],
      "Ecuador":              ["saco", "chompa"],
      "Perú":                 ["chompa"],
      "Bolivia":              ["chompa"],
      "Chile":                ["chaleco", "chomba"],
      "Argentina":            ["pulóver", "buzo"],
      "Paraguay":             ["pulóver"],
      "Uruguay":              ["buzo", "pulóver"],
      "España":               ["jersey"],
      "Islas Canarias":       ["jersey"],
      "Guinea Ecuatorial":    ["jersey"],
    },
  },

  // ---------------------------------------------------------
  perrito: {
    imagen: "imagenes/perrito.svg",
    descripcion: "pan alargado con una salchicha dentro",
    paises: {
      "México":               ["hot dog", "jocho (norte)"],
      "Guatemala":            ["shuco", "hot dog"],
      "El Salvador":          ["hot dog"],
      "Honduras":             ["hot dog", "perro caliente"],
      "Nicaragua":            ["hot dog", "perro caliente"],
      "Costa Rica":           ["perro caliente", "hot dog"],
      "Panamá":               ["hot dog"],
      "Cuba":                 ["perro caliente"],
      "República Dominicana": ["hot dog"],
      "Puerto Rico":          ["hot dog"],
      "Venezuela":            ["perro caliente"],
      "Colombia":             ["perro caliente", "perro"],
      "Ecuador":              ["hot dog"],
      "Perú":                 ["hot dog"],
      "Bolivia":              ["hot dog"],
      "Chile":                ["completo"],
      "Argentina":            ["pancho"],
      "Paraguay":             ["pancho"],
      "Uruguay":              ["pancho"],
      "España":               ["perrito caliente", "perrito"],
      "Islas Canarias":       ["perrito"],
      "Guinea Ecuatorial":    ["perrito caliente"],
    },
  },

  // Para añadir otra palabra más adelante, copia el bloque de arriba
  // (desde  palomitas: {  hasta su  },  ) y pégalo aquí con otro nombre.

};
