/* Original practice scenarios for Guay Spanish School. Schedules, prices and people are illustrative. */
window.COURSES = {
  "A2": [
    {
      "id": "a2-1",
      "title": "Tu primera semana en Murcia",
      "description": "Preséntate, entiende un horario y organiza tu llegada a clase.",
      "topics": "Presentaciones · horarios · indicaciones",
      "goal": "Presentarte y comprender información sencilla para empezar tu estancia.",
      "reading": {
        "title": "Bienvenido a Guay",
        "heading": "Mensaje de ejemplo · tu primer encuentro",
        "text": "¡Hola, Alex! Soy Elena, una compañera de tu grupo de español. El lunes nos vemos a las nueve y cuarto delante de la escuela, en la calle Cartagena. Antes de entrar, podemos tomar un café cerca. La clase empieza a las nueve y media. Trae un cuaderno y un bolígrafo; no necesitas traer comida. Después de clase quiero dar un paseo por el centro de Murcia. ¿Vienes conmigo? Escríbeme para confirmar. ¡Hasta el lunes!",
        "questions": [
          {
            "q": "¿A qué hora quedan Alex y Elena?",
            "options": [
              "A las nueve y cuarto.",
              "A las nueve y media.",
              "A las doce."
            ],
            "answer": 0,
            "why": "Quedan a las nueve y cuarto. La clase empieza más tarde, a las nueve y media."
          },
          {
            "q": "¿Qué necesita llevar Alex?",
            "options": [
              "Comida para el grupo.",
              "Un cuaderno y un bolígrafo.",
              "Una maleta."
            ],
            "answer": 1,
            "why": "Elena pide un cuaderno y un bolígrafo y aclara que no hace falta comida."
          },
          {
            "q": "¿Qué propone Elena después de clase?",
            "options": [
              "Visitar otra escuela.",
              "Ir directamente a casa.",
              "Pasear por el centro de Murcia."
            ],
            "answer": 2,
            "why": "Elena quiere dar un paseo por el centro después de clase."
          }
        ]
      },
      "listening": {
        "title": "Un cambio en el punto de encuentro",
        "text": "Hola, Alex. Soy Elena. Hay un pequeño cambio para el lunes. La cafetería está cerrada, así que nos vemos directamente delante de la escuela, en la calle Cartagena. Llegaré a las nueve y veinte, cinco minutos más tarde de lo que dijimos. La clase sigue empezando a las nueve y media. Llevo una mochila roja para que me reconozcas. Si llegas antes, espera junto a la puerta. ¡Hasta el lunes!",
        "questions": [
          {
            "q": "¿Por qué no van a la cafetería?",
            "options": [
              "Porque está lejos.",
              "Porque está cerrada.",
              "Porque no tienen tiempo para clase."
            ],
            "answer": 1,
            "why": "Elena explica que la cafetería está cerrada."
          },
          {
            "q": "¿A qué hora llegará Elena?",
            "options": [
              "A las nueve y veinte.",
              "A las nueve y cuarto.",
              "A las nueve y media."
            ],
            "answer": 0,
            "why": "Llegará a las nueve y veinte; la hora de clase no cambia."
          },
          {
            "q": "¿Cómo puede reconocerla Alex?",
            "options": [
              "Por una chaqueta azul.",
              "Por un cuaderno verde.",
              "Por una mochila roja."
            ],
            "answer": 2,
            "why": "Elena dice que lleva una mochila roja."
          }
        ],
        "audio": "assets/audio/a2-1.mp3"
      },
      "quiz": {
        "title": "Preséntate y confirma",
        "questions": [
          {
            "q": "Completa: «Me ___ Alex y soy de Canadá».",
            "options": [
              "llama",
              "llamo",
              "llaman"
            ],
            "answer": 1,
            "why": "Con «yo» usamos «me llamo»."
          },
          {
            "q": "Elige la pregunta adecuada para confirmar la hora.",
            "options": [
              "¿Nos vemos a las nueve y veinte?",
              "Nos vemos ayer.",
              "La hora está mochila."
            ],
            "answer": 0,
            "why": "La pregunta confirma una hora concreta."
          },
          {
            "q": "Completa: «La clase empieza ___ las nueve y media».",
            "options": [
              "en",
              "de",
              "a"
            ],
            "answer": 2,
            "why": "Para indicar una hora concreta usamos «a las»."
          }
        ]
      },
      "writing": {
        "title": "Confirma tu llegada",
        "prompt": "Responde al mensaje de Elena. Escribe entre 60 y 80 palabras.",
        "points": [
          "Preséntate y di de dónde eres.",
          "Confirma el lugar y la nueva hora del encuentro.",
          "Haz una pregunta sobre el paseo después de clase."
        ],
        "min": 60,
        "max": 80,
        "model": "Hola, Elena. Me llamo Alex y soy de Canadá. Muchas gracias por tu mensaje. El lunes voy a estar delante de la escuela, en la calle Cartagena, a las nueve y veinte. Llevaré un cuaderno y un bolígrafo para la clase. También quiero pasear por el centro de Murcia contigo después de clase. ¿Cuánto tiempo dura el paseo? Tengo muchas ganas de empezar y conocer a mis compañeros. ¡Hasta el lunes!"
      },
      "speaking": {
        "title": "Tu primera presentación",
        "prompt": "Preséntate a un compañero de Guay y habla de tu primera semana en Murcia.",
        "points": [
          "Tu nombre y tu país.",
          "Por qué quieres aprender español.",
          "Una actividad que quieres hacer en Murcia."
        ],
        "seconds": 60,
        "support": [
          "Me llamo… y soy de…",
          "Quiero aprender español porque…",
          "Esta semana voy a…",
          "En Murcia me gustaría…"
        ]
      }
    },
    {
      "id": "a2-2",
      "title": "La vida entre clases",
      "description": "Organiza tu semana, haz una compra y queda con tus compañeros.",
      "topics": "Rutinas · compras · preferencias",
      "goal": "Comprender un plan sencillo e invitar a un compañero después de clase.",
      "reading": {
        "title": "Una merienda con compañeros",
        "heading": "Mensaje de ejemplo · grupo de clase",
        "text": "Hola, grupo. El jueves vamos a preparar una merienda en nuestro piso, después de clase. Quedamos a las cinco en la plaza y vamos juntos al mercado. Marta compra fruta y pan. Yo llevo queso y agua. Cada persona puede gastar un máximo de cinco euros. Si alguien no come queso, puede traer otra cosa. La merienda empieza a las seis. Antes del miércoles, escribid en el grupo para decir si venís. Alex, ¿puedes traer unos vasos?",
        "questions": [
          {
            "q": "¿Dónde queda el grupo a las cinco?",
            "options": [
              "En el piso.",
              "En la escuela.",
              "En la plaza."
            ],
            "answer": 2,
            "why": "Quedan en la plaza a las cinco y después van al mercado."
          },
          {
            "q": "¿Cuánto puede gastar cada persona como máximo?",
            "options": [
              "Cinco euros.",
              "Seis euros.",
              "Diez euros."
            ],
            "answer": 0,
            "why": "El mensaje fija un máximo de cinco euros por persona."
          },
          {
            "q": "¿Qué le piden a Alex?",
            "options": [
              "Que compre queso.",
              "Que traiga vasos.",
              "Que reserve una mesa."
            ],
            "answer": 1,
            "why": "La última pregunta pide a Alex que traiga unos vasos."
          }
        ]
      },
      "listening": {
        "title": "La compra de Marta",
        "text": "Hola, Alex. Ya he comprado la fruta y el pan para la merienda. La fruta cuesta tres euros y el pan cuesta un euro, así que he gastado cuatro euros en total. No hace falta comprar más agua, porque Elena lleva dos botellas. Pero necesitamos servilletas. ¿Puedes comprarlas cuando vengas? Yo salgo de clase a las cuatro y media y llegaré a la plaza a las cinco. ¡Nos vemos!",
        "questions": [
          {
            "q": "¿Cuánto ha gastado Marta?",
            "options": [
              "Tres euros.",
              "Cuatro euros.",
              "Cinco euros."
            ],
            "answer": 1,
            "why": "La fruta cuesta tres euros y el pan un euro: cuatro en total."
          },
          {
            "q": "¿Qué necesita comprar Alex además de llevar los vasos?",
            "options": [
              "Agua.",
              "Más pan.",
              "Servilletas."
            ],
            "answer": 2,
            "why": "Marta pide servilletas y aclara que Elena ya lleva agua."
          },
          {
            "q": "¿A qué hora llegará Marta a la plaza?",
            "options": [
              "A las cinco.",
              "A las cuatro y media.",
              "A las seis."
            ],
            "answer": 0,
            "why": "Sale de clase a las cuatro y media y llega a la plaza a las cinco."
          }
        ],
        "audio": "assets/audio/a2-2.mp3"
      },
      "quiz": {
        "title": "Organiza tu día",
        "questions": [
          {
            "q": "Completa: «Voy al mercado ___ de clase».",
            "options": [
              "después",
              "entre",
              "durante"
            ],
            "answer": 0,
            "why": "«Después de clase» indica cuándo ocurre la acción."
          },
          {
            "q": "Completa: «La fruta cuesta tres euros y el pan uno. En ___ son cuatro».",
            "options": [
              "nunca",
              "total",
              "ayer"
            ],
            "answer": 1,
            "why": "«En total» introduce la suma de los precios."
          },
          {
            "q": "Elige una invitación adecuada.",
            "options": [
              "Tú venir ayer.",
              "Comprar no plaza.",
              "¿Quieres venir a la merienda?"
            ],
            "answer": 2,
            "why": "«¿Quieres venir…?» sirve para invitar a alguien."
          }
        ]
      },
      "writing": {
        "title": "Invita a un compañero",
        "prompt": "Invita a un compañero de Guay a la merienda. Escribe entre 60 y 80 palabras.",
        "points": [
          "Explica qué vais a hacer y por qué te apetece.",
          "Indica el día, la hora y el lugar del encuentro.",
          "Di qué puede llevar y pide una respuesta."
        ],
        "min": 60,
        "max": 80,
        "model": "Hola, Pablo. El jueves vamos a preparar una merienda con compañeros de clase y me gustaría que vinieras. Es una buena oportunidad para conocernos y practicar español. Quedamos a las cinco en la plaza para ir al mercado y después vamos al piso de Elena. La merienda empieza a las seis. Puedes traer unas servilletas o algo que te guste comer. ¿Puedes confirmar antes del miércoles? ¡Espero que vengas!"
      },
      "speaking": {
        "title": "Tu tarde en Murcia",
        "prompt": "Cuenta cómo organizas una tarde después de clase y propone un plan a un compañero.",
        "points": [
          "Qué haces normalmente después de clase.",
          "Un lugar donde te gusta comprar o descansar.",
          "Una propuesta con día y hora."
        ],
        "seconds": 60,
        "support": [
          "Normalmente, después de clase…",
          "Me gusta… porque…",
          "Podemos quedar el… a las…",
          "¿Quieres venir conmigo?"
        ]
      }
    },
    {
      "id": "a2-3",
      "title": "Un fin de semana en Murcia",
      "description": "Compara dos salidas y cuenta una experiencia con tus compañeros.",
      "topics": "Planes · precios · experiencias",
      "goal": "Elegir una actividad y contar lo que hiciste durante el fin de semana.",
      "reading": {
        "title": "Dos planes para el sábado",
        "heading": "Aviso de práctica · actividades ficticias",
        "text": "Este sábado tenemos dos planes. El primero es un paseo por el centro de Murcia: empieza a las diez y termina a las doce. El paseo es gratuito y después podemos comer juntos; cada persona paga su comida. El segundo plan es una salida a Cartagena. En este ejemplo, cuesta veinticinco euros e incluye el transporte, pero no la comida. Salimos a las nueve y volvemos a las seis de la tarde. Para Cartagena hay que reservar antes del jueves. Yo prefiero el paseo porque por la tarde tengo que estudiar.",
        "questions": [
          {
            "q": "¿Qué incluye el precio de la salida a Cartagena?",
            "options": [
              "El transporte y la comida.",
              "Solo el transporte.",
              "El alojamiento."
            ],
            "answer": 1,
            "why": "El aviso dice que incluye transporte, pero no comida."
          },
          {
            "q": "¿Cuándo termina el paseo por Murcia?",
            "options": [
              "A las diez.",
              "A las seis.",
              "A las doce."
            ],
            "answer": 2,
            "why": "El paseo empieza a las diez y termina a las doce."
          },
          {
            "q": "¿Por qué quien escribe prefiere el paseo?",
            "options": [
              "Tiene que estudiar por la tarde.",
              "No le gusta Cartagena.",
              "Ya ha reservado la salida."
            ],
            "answer": 0,
            "why": "Explica que tiene que estudiar por la tarde."
          }
        ]
      },
      "listening": {
        "title": "Así fue nuestro sábado",
        "text": "El sábado fui al centro de Murcia con dos compañeros. Primero paseamos cerca de la catedral y después compramos fruta en el mercado. Yo quería visitar una exposición por la tarde, pero mi amiga tenía que estudiar, así que decidimos volver otro día. Comimos en un restaurante pequeño y regresamos a casa a las tres. Lo que más me gustó fue hablar en español con las personas del mercado. El próximo sábado queremos ir a Cartagena.",
        "questions": [
          {
            "q": "¿Qué hicieron después del paseo?",
            "options": [
              "Visitaron la exposición.",
              "Fueron a Cartagena.",
              "Compraron fruta en el mercado."
            ],
            "answer": 2,
            "why": "Primero pasearon y después compraron fruta en el mercado."
          },
          {
            "q": "¿Por qué no visitaron la exposición?",
            "options": [
              "Porque una amiga tenía que estudiar.",
              "Porque estaba cerrada.",
              "Porque no encontraron la entrada."
            ],
            "answer": 0,
            "why": "El audio dice que su amiga tenía que estudiar; no afirma que la exposición estuviera cerrada."
          },
          {
            "q": "¿Qué disfrutó más la persona?",
            "options": [
              "Volver temprano.",
              "Hablar español en el mercado.",
              "Viajar en autobús."
            ],
            "answer": 1,
            "why": "Dice que lo que más le gustó fue hablar español con las personas del mercado."
          }
        ],
        "audio": "assets/audio/a2-3.mp3"
      },
      "quiz": {
        "title": "Cuenta lo que hiciste",
        "questions": [
          {
            "q": "Completa: «El sábado pasado ___ al centro».",
            "options": [
              "voy",
              "ir",
              "fui"
            ],
            "answer": 2,
            "why": "«El sábado pasado» sitúa la acción en el pasado: «fui»."
          },
          {
            "q": "Completa: «Primero paseamos y ___ comimos».",
            "options": [
              "después",
              "nunca",
              "ayer de"
            ],
            "answer": 0,
            "why": "«Primero» y «después» ordenan los hechos."
          },
          {
            "q": "Elige una frase que expresa una preferencia.",
            "options": [
              "La comida está tres.",
              "Prefiero el paseo porque tengo poco tiempo.",
              "Mañana fui al centro."
            ],
            "answer": 1,
            "why": "«Prefiero… porque…» expresa una elección y su razón."
          }
        ]
      },
      "writing": {
        "title": "Cuenta tu fin de semana",
        "prompt": "Escribe a un amigo sobre una salida real o imaginaria en Murcia. Escribe entre 60 y 80 palabras.",
        "points": [
          "Explica adónde fuiste y con quién.",
          "Cuenta dos cosas que hiciste y qué te gustó.",
          "Propón otro plan para el próximo fin de semana."
        ],
        "min": 60,
        "max": 80,
        "model": "Hola, Sara. El sábado fui al centro de Murcia con dos compañeros de Guay. Primero dimos un paseo cerca de la catedral y después compramos fruta en el mercado. Comimos juntos en un restaurante pequeño y volvimos a casa por la tarde. Me gustó mucho hablar español con las personas del mercado. El próximo fin de semana me gustaría visitar Cartagena. ¿Quieres venir con nosotros? Podemos organizar el viaje después de clase."
      },
      "speaking": {
        "title": "Una experiencia que recuerdas",
        "prompt": "Cuenta una salida real o imaginaria y recomienda un plan para el próximo fin de semana.",
        "points": [
          "Dónde fuiste, cuándo y con quién.",
          "Dos cosas que hiciste.",
          "Qué recomendarías y por qué."
        ],
        "seconds": 90,
        "support": [
          "El fin de semana pasado…",
          "Primero… y después…",
          "Lo que más me gustó fue…",
          "Te recomiendo… porque…"
        ]
      }
    }
  ],
  "B1": [
    {
      "id": "b1-1",
      "title": "Organizar tu estancia",
      "description": "Compara alojamientos y explica qué necesitas para vivir y estudiar en Murcia.",
      "topics": "Peticiones corteses · comparaciones · necesidades",
      "goal": "Comparar dos opciones de alojamiento y pedir información concreta.",
      "reading": {
        "title": "¿Qué alojamiento te conviene?",
        "heading": "Correo de práctica · opciones ficticias",
        "text": "Hola, Alex. He comparado las dos opciones que me comentaste para tu estancia en Murcia. La habitación con familia está a quince minutos andando de la escuela e incluye el desayuno. Sin embargo, tendrás que avisar si vuelves después de las once de la noche. El piso compartido cuesta menos y permite organizar tus comidas con más libertad, aunque está a treinta minutos en autobús. En los dos casos hay internet y hay que pagar un depósito antes de llegar. Como quieres aprovechar las tardes para conocer la ciudad, yo elegiría la familia por la cercanía. Si prefieres el piso, pregunta cómo se reparten los gastos de electricidad y las tareas de limpieza. Estas son opciones de ejemplo: conviene confirmar siempre las condiciones antes de decidir.",
        "questions": [
          {
            "q": "¿Qué ventaja tiene la habitación con familia?",
            "options": [
              "No necesita depósito.",
              "Está más cerca de la escuela.",
              "Incluye todas las comidas."
            ],
            "answer": 1,
            "why": "Está a quince minutos andando; el piso está a treinta minutos en autobús. Solo se menciona el desayuno."
          },
          {
            "q": "¿Qué tienen en común las dos opciones?",
            "options": [
              "El precio y la distancia.",
              "Todas las comidas.",
              "Internet y un depósito previo."
            ],
            "answer": 2,
            "why": "El correo indica que ambas tienen internet y exigen un depósito antes de llegar."
          },
          {
            "q": "¿Qué conviene preguntar sobre el piso?",
            "options": [
              "Cómo se reparten gastos y limpieza.",
              "Si está a quince minutos andando.",
              "Si incluye el desayuno."
            ],
            "answer": 0,
            "why": "El correo recomienda preguntar por electricidad y limpieza."
          }
        ]
      },
      "listening": {
        "title": "Antes de recoger las llaves",
        "text": "Hola, Alex. Te llamo por tu llegada a Murcia. La persona que te entrega las llaves no podrá estar el lunes a las cinco, como habíamos previsto. Puede verte a las siete de esa misma tarde. No necesitas cambiar tu viaje: si llegas antes, puedes dejar la maleta en la consigna de la estación y descansar en una cafetería. Lleva un documento de identidad y el justificante del depósito. El desayuno en la casa empieza a las ocho, así que tendrás tiempo antes de ir a clase. Por favor, escríbeme hoy para confirmar si te viene bien la nueva hora.",
        "questions": [
          {
            "q": "¿Qué cambia en la entrega de llaves?",
            "options": [
              "El día de llegada.",
              "La dirección del alojamiento.",
              "La hora, de las cinco a las siete."
            ],
            "answer": 2,
            "why": "La entrega sigue siendo el lunes, pero pasa de las cinco a las siete."
          },
          {
            "q": "¿Qué debe llevar Alex?",
            "options": [
              "Su billete y una lista de comidas.",
              "Un documento de identidad y el justificante del depósito.",
              "Una maleta para otra persona."
            ],
            "answer": 1,
            "why": "El mensaje pide estos dos documentos."
          },
          {
            "q": "¿Cuándo tiene que responder?",
            "options": [
              "Hoy.",
              "El lunes después del desayuno.",
              "Cuando termine el curso."
            ],
            "answer": 0,
            "why": "La petición final es escribir hoy para confirmar la nueva hora."
          }
        ],
        "audio": "assets/audio/b1-1.mp3"
      },
      "quiz": {
        "title": "Pide información con claridad",
        "questions": [
          {
            "q": "Elige la petición más adecuada para un alojamiento.",
            "options": [
              "Dame todo ahora.",
              "¿Podrían indicarme qué gastos están incluidos?",
              "Tú incluidos gastos."
            ],
            "answer": 1,
            "why": "El condicional «podrían» permite formular una petición cortés y concreta."
          },
          {
            "q": "Completa: «El piso es más barato; ___, está más lejos».",
            "options": [
              "porque",
              "además de",
              "sin embargo"
            ],
            "answer": 2,
            "why": "«Sin embargo» introduce un contraste entre precio y distancia."
          },
          {
            "q": "Completa para expresar una razón: «Prefiero vivir cerca ___ quiero ir andando».",
            "options": [
              "porque",
              "aunque",
              "sin embargo"
            ],
            "answer": 0,
            "why": "«Porque» introduce la razón de la preferencia."
          }
        ]
      },
      "writing": {
        "title": "Solicita información sobre el alojamiento",
        "prompt": "Escribe un correo al responsable de un alojamiento en Murcia. Escribe entre 100 y 120 palabras.",
        "points": [
          "Preséntate e indica cuándo llegarás y cuánto tiempo te quedarás.",
          "Pregunta por dos condiciones del alojamiento.",
          "Explica una necesidad personal y pide una respuesta."
        ],
        "min": 100,
        "max": 120,
        "model": "Estimado equipo: Me llamo Alex y voy a realizar un curso de español en Guay durante cuatro semanas el próximo mes. Me interesa la habitación con familia porque está cerca de la escuela y me gustaría practicar español fuera de clase. ¿Podrían confirmar qué gastos están incluidos y cómo debo pagar el depósito? También quisiera saber si es posible utilizar la cocina algunos días. Tengo clases por la mañana, por lo que necesito un lugar tranquilo para descansar por la noche. Llegaré el lunes por la tarde y agradecería información sobre la recogida de llaves. ¿Podrían responder esta semana para que pueda organizar mi viaje? Muchas gracias. Un cordial saludo, Alex."
      },
      "speaking": {
        "title": "Elige y justifica",
        "prompt": "Compara vivir con una familia cerca de Guay con compartir un piso más económico y alejado.",
        "points": [
          "Una ventaja y una dificultad de cada opción.",
          "Qué necesitas para tu estancia.",
          "Tu elección y dos razones."
        ],
        "seconds": 120,
        "support": [
          "Por una parte… por otra parte…",
          "Aunque…",
          "En mi caso, elegiría…",
          "Lo más importante para mí es…"
        ]
      }
    },
    {
      "id": "b1-2",
      "title": "Compartir planes y resolver imprevistos",
      "description": "Negocia una salida con tus compañeros y encuentra una alternativa cuando cambia el plan.",
      "topics": "Propuestas · acuerdos · alternativas",
      "goal": "Comprender cambios, expresar preferencias y acordar una solución.",
      "reading": {
        "title": "Organizar una salida a Cartagena",
        "heading": "Correo de práctica · propuesta entre compañeros",
        "text": "Hola, grupo. Os propongo pasar el sábado en Cartagena. Al principio pensamos alquilar un coche, pero dos compañeros no pueden conducir, así que sería más cómodo viajar juntos en autobús. Antes de comprar billetes tenemos que confirmar el horario y el precio; los datos que vimos eran de la semana pasada. Mi idea es pasear por el centro por la mañana y visitar una exposición después de comer. Si a alguien no le interesa la exposición, podemos buscar otra actividad. Me gustaría regresar a Murcia antes de las siete porque tengo una cena. Por favor, decid antes del jueves si venís y qué preferís hacer. Así podremos organizarlo sin dejar las reservas para el último momento.",
        "questions": [
          {
            "q": "¿Por qué propone viajar en autobús?",
            "options": [
              "Porque dos compañeros no pueden conducir.",
              "Porque todos tienen coche.",
              "Porque ya han comprado los billetes."
            ],
            "answer": 0,
            "why": "El autobús permite que el grupo viaje junto aunque dos personas no puedan conducir."
          },
          {
            "q": "¿Qué falta comprobar?",
            "options": [
              "Dónde vive cada compañero.",
              "El horario y el precio actuales.",
              "La hora de la cena de todos."
            ],
            "answer": 1,
            "why": "Los datos consultados eran de la semana anterior; hay que confirmar horario y precio."
          },
          {
            "q": "¿Por qué quiere regresar antes de las siete?",
            "options": [
              "Porque la exposición cierra a esa hora.",
              "Porque tiene clase.",
              "Porque tiene una cena."
            ],
            "answer": 2,
            "why": "La persona explica que tiene una cena; no da una hora de cierre para la exposición."
          }
        ]
      },
      "listening": {
        "title": "Tenemos que ajustar el plan",
        "text": "Hola, grupo. Acabo de revisar el plan del sábado. La exposición que queríamos visitar no tiene entradas disponibles por la tarde. Podemos verla por la mañana, pero entonces tendríamos que salir antes. Otra opción es mantener la salida que habíamos pensado y dedicar el día a pasear por el centro. Yo prefiero esta segunda opción, porque varios compañeros terminan tarde el viernes y necesitan descansar. El regreso a Murcia sigue siendo antes de las siete. Decidme hoy qué preferís; todavía no he comprado los billetes.",
        "questions": [
          {
            "q": "¿Qué problema hay con la exposición?",
            "options": [
              "Está cerrada todo el sábado.",
              "No hay entradas para la tarde.",
              "Está en otra ciudad."
            ],
            "answer": 1,
            "why": "No hay entradas por la tarde. El audio dice que sería posible visitarla por la mañana."
          },
          {
            "q": "¿Qué opción prefiere quien habla?",
            "options": [
              "Cancelar la salida.",
              "Salir mucho antes.",
              "Mantener la salida y pasear."
            ],
            "answer": 2,
            "why": "Prefiere la segunda opción porque varios compañeros necesitan descansar."
          },
          {
            "q": "¿Se han comprado ya los billetes?",
            "options": [
              "No, todavía no.",
              "Sí, para todo el grupo.",
              "Solo los de regreso."
            ],
            "answer": 0,
            "why": "La última frase indica expresamente que todavía no se han comprado."
          }
        ],
        "audio": "assets/audio/b1-2.mp3"
      },
      "quiz": {
        "title": "Propón una alternativa",
        "questions": [
          {
            "q": "Completa: «No quedan entradas, ___ podemos pasear por el centro».",
            "options": [
              "pero",
              "porque de",
              "aunque de"
            ],
            "answer": 0,
            "why": "«Pero» conecta el problema con una alternativa posible."
          },
          {
            "q": "Elige una propuesta que invita al acuerdo.",
            "options": [
              "Nadie puede opinar.",
              "¿Qué os parece mantener la hora y cambiar de actividad?",
              "Ayer cambiar todos."
            ],
            "answer": 1,
            "why": "La pregunta plantea una solución y permite que los demás respondan."
          },
          {
            "q": "Completa: «___ salimos antes, podremos visitar la exposición».",
            "options": [
              "Aunque de",
              "Sin embargo de",
              "Si"
            ],
            "answer": 2,
            "why": "«Si» introduce la condición para visitar la exposición."
          }
        ]
      },
      "writing": {
        "title": "Responde y propone una solución",
        "prompt": "Responde al grupo sobre la salida a Cartagena. Escribe entre 100 y 120 palabras.",
        "points": [
          "Explica qué alternativa prefieres y por qué.",
          "Reconoce una necesidad de tus compañeros.",
          "Propón un siguiente paso para organizar la salida."
        ],
        "min": 100,
        "max": 120,
        "model": "Hola, grupo. Gracias por comprobar las entradas y avisarnos antes de comprar los billetes. Yo también prefiero mantener la hora de salida y pasear por el centro. Entiendo que quienes terminan tarde el viernes necesitan descansar, y creo que podemos disfrutar del día sin visitar la exposición. Además, tendremos más tiempo para conversar y practicar español fuera de clase. Propongo buscar un lugar para comer que tenga opciones para todos y confirmar esta tarde cuántas personas vienen. Si os parece bien, puedo consultar dos restaurantes y compartir la información en el grupo. Después podríamos comprar juntos los billetes de ida y vuelta. ¿Qué opináis? Un abrazo, Alex."
      },
      "speaking": {
        "title": "Llega a un acuerdo",
        "prompt": "Propón a tus compañeros una solución para la salida y responde a una posible objeción.",
        "points": [
          "Explica el problema con la exposición.",
          "Propón una alternativa y justifica tu elección.",
          "Responde a alguien que preferiría salir antes."
        ],
        "seconds": 120,
        "support": [
          "Entiendo que prefieras…",
          "Mi propuesta es…",
          "La ventaja de esta opción es…",
          "Podríamos llegar a un acuerdo si…"
        ]
      }
    },
    {
      "id": "b1-3",
      "title": "Vivir Murcia con confianza",
      "description": "Organiza un encuentro cultural y lleva el español del aula a la ciudad.",
      "topics": "Vida local · peticiones · recomendaciones",
      "goal": "Relacionar un correo y un audio, confirmar un plan y justificar una propuesta.",
      "reading": {
        "title": "Un encuentro cultural en Murcia",
        "heading": "De: Elena · Asunto: Nuestro plan del sábado",
        "text": "Hola, Alex. Este sábado queremos descubrir un poco más de Murcia con compañeros de Guay. Habíamos pensado dar un paseo junto al río, pero la previsión anuncia lluvia por la mañana. Por eso proponemos visitar una exposición y comer juntos después. Quedamos a las diez delante de la biblioteca del barrio. La exposición de este ejercicio es gratuita, aunque debemos confirmar cuántas personas van. Para la comida necesitamos saber si alguien prefiere una opción vegetariana. ¿Podrías decirme antes del jueves si vienes y qué te gustaría comer? Después de comer, si mejora el tiempo, podemos dar un paseo corto por el centro. La idea es practicar español, conocer mejor la ciudad y compartir un día tranquilo.",
        "questions": [
          {
            "q": "¿Por qué cambian la propuesta inicial?",
            "options": [
              "Porque el río está cerrado.",
              "Porque nadie quiere caminar.",
              "Porque se prevé lluvia por la mañana."
            ],
            "answer": 2,
            "why": "El correo relaciona el cambio con la previsión de lluvia. No menciona un cierre."
          },
          {
            "q": "¿Qué debe confirmar Alex antes del jueves?",
            "options": [
              "Si viene y su preferencia para la comida.",
              "El precio de una entrada.",
              "La dirección de la escuela."
            ],
            "answer": 0,
            "why": "Elena pide confirmar asistencia y qué le gustaría comer."
          },
          {
            "q": "¿De qué depende el paseo después de comer?",
            "options": [
              "De comprar un billete.",
              "De que mejore el tiempo.",
              "De terminar un examen."
            ],
            "answer": 1,
            "why": "El paseo por el centro se propone solo si mejora el tiempo."
          }
        ]
      },
      "listening": {
        "title": "Un mensaje antes del encuentro",
        "text": "Hola, Alex. Soy Elena. Hay un pequeño cambio para el sábado: la biblioteca abre más tarde, así que nos veremos frente a la panadería, al otro lado de la calle. La hora sigue igual, a las diez. Lleva una chaqueta; yo llevaré un paraguas grande para compartir. Comeremos a la una y media. El restaurante necesita hoy el número de menús vegetarianos, así que dime tu preferencia hoy, aunque todavía puedas confirmar la asistencia mañana. La exposición no cambia. ¡Nos vemos!",
        "questions": [
          {
            "q": "¿Qué cambia respecto al correo?",
            "options": [
              "El día de la salida.",
              "El lugar del encuentro.",
              "La hora del encuentro."
            ],
            "answer": 1,
            "why": "El punto de encuentro pasa de la biblioteca a la panadería; la hora sigue siendo las diez."
          },
          {
            "q": "¿Qué debe llevar Alex?",
            "options": [
              "Un paraguas propio obligatoriamente.",
              "Comida para todos.",
              "Una chaqueta."
            ],
            "answer": 2,
            "why": "Elena pide una chaqueta y ofrece compartir su paraguas."
          },
          {
            "q": "¿Cuándo debe comunicar su preferencia alimentaria?",
            "options": [
              "Hoy.",
              "El sábado durante la comida.",
              "Después de visitar la exposición."
            ],
            "answer": 0,
            "why": "El audio adelanta esta confirmación: el restaurante necesita hoy los menús vegetarianos."
          }
        ],
        "audio": "assets/audio/b1-3.mp3"
      },
      "quiz": {
        "title": "Conecta tus ideas",
        "questions": [
          {
            "q": "Completa para expresar la causa: «___ va a llover, visitaremos una exposición».",
            "options": [
              "Como",
              "Aunque",
              "Sin embargo"
            ],
            "answer": 0,
            "why": "«Como» introduce la causa al principio de la oración."
          },
          {
            "q": "Completa para expresar un contraste: «Me gustaría ir, ___ tengo que estudiar por la tarde».",
            "options": [
              "porque",
              "pero",
              "así que"
            ],
            "answer": 1,
            "why": "«Pero» presenta una dificultad que contrasta con la intención."
          },
          {
            "q": "Elige una petición cortés para escribir al grupo.",
            "options": [
              "Confirmad ya sin preguntar.",
              "No sé nada.",
              "¿Podríais confirmar el nuevo punto de encuentro?"
            ],
            "answer": 2,
            "why": "«¿Podríais…?» formula una petición cortés y precisa."
          },
          {
            "q": "Completa para expresar el motivo: «Prefiero pasear por el centro ___ quiero conocer la ciudad».",
            "options": [
              "aunque",
              "porque",
              "sin embargo"
            ],
            "answer": 1,
            "why": "«Porque» introduce la razón de la preferencia."
          }
        ]
      },
      "writing": {
        "title": "Confirma el plan y aporta una idea",
        "prompt": "Responde a Elena después de leer el correo y escuchar el audio. Escribe entre 80 y 100 palabras y utiliza al menos dos conectores.",
        "points": [
          "Confirma la hora y el nuevo lugar del encuentro.",
          "Indica tu preferencia para la comida.",
          "Propón otra actividad en Murcia y explica por qué."
        ],
        "min": 80,
        "max": 100,
        "model": "Hola, Elena. Muchas gracias por organizar la salida. Me encantaría ir el sábado y estaré frente a la panadería a las diez. Llevaré una chaqueta y prefiero la opción vegetariana porque no como carne. Además, si mejora el tiempo, me gustaría pasear por el centro después de comer, ya que quiero conocer mejor Murcia y practicar español con mis compañeros. Si sigue lloviendo, podemos tomar un café y comentar la exposición. ¿Te parece una buena idea? Avísame si hace falta llevar algo más. Un abrazo, Alex."
      },
      "speaking": {
        "title": "Recomienda un plan en Murcia",
        "prompt": "Propón a un compañero una actividad para conocer Murcia. Habla durante unos 90 segundos.",
        "points": [
          "Recomienda un lugar o una actividad.",
          "Explica cuándo quedar, cómo llegar y qué llevar.",
          "Justifica tu elección y ofrece una alternativa si llueve."
        ],
        "seconds": 90,
        "support": [
          "Me gustaría que visitáramos…",
          "Podemos encontrarnos a…",
          "Lo recomiendo porque…",
          "Si llueve, podríamos…"
        ]
      }
    }
  ]
};
