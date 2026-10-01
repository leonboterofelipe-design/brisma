// Todo el texto del sitio vive aquí. Reemplazar los valores marcados con TODO por datos reales.

export const site = {
  name: 'Brisma',
  whatsapp: '57XXXXXXXXXX', // TODO
  phone: '+57 000 000 0000', // TODO
  email: 'contacto@brisma.co', // TODO
  address: 'Dirección, ciudad', // TODO
  hours: 'Lunes a viernes, 8:00 a.m. a 6:00 p.m.',
  instagram: 'https://www.instagram.com/insolvencia.abogados/',
};

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Preguntas', href: '#preguntas' },
];

export const hero = {
  title: 'Sus deudas tienen una salida legal. La construimos con usted.',
  text: 'Somos abogados especialistas en insolvencia. Negociamos con sus acreedores, frenamos embargos y cobros, y reorganizamos sus obligaciones en un acuerdo que sí puede cumplir.',
  note: 'La primera conversación es confidencial. Le decimos con honestidad si su caso aplica.',
  firstVisit: [
    'Revisamos todas sus deudas y su capacidad real de pago.',
    'Le explicamos si aplica la insolvencia y qué ruta le conviene.',
    'Recibe un plan con tiempos y costos por escrito.',
  ],
};

export const trustSignals = [
  { title: 'Diagnóstico honesto', text: 'Le explicamos si su caso aplica y qué opciones tiene.' },
  { title: 'Costos claros', text: 'Conozca las etapas y los honorarios antes de decidir.' },
  { title: 'Reserva profesional', text: 'Su información financiera se trata con confidencialidad.' },
  { title: 'Acompañamiento', text: 'Un abogado le orienta durante el proceso.' },
];

export const situations = {
  title: '¿Alguna de estas situaciones le suena familiar?',
  text: 'Endeudarse no es un fracaso. Dejar que la deuda decida por usted sí es un riesgo.',
  items: [
    'Paga una deuda con otra y cada mes debe más.',
    'Recibe llamadas, cartas o demandas de cobro jurídico.',
    'Le embargaron el salario, una cuenta o un bien.',
    'Sus cuotas ya superan lo que gana al mes.',
    'Su empresa no alcanza a cubrir proveedores ni obligaciones.',
    'No sabe por dónde empezar y le da temor preguntar.',
  ],
  closing: 'Si reconoce una o más, la ley colombiana tiene herramientas para usted.',
};

export const services = {
  title: 'Un solo enfoque: sacarlo de la crisis de deudas de forma ordenada.',
  text: 'No somos un bufete generalista. Nos dedicamos a insolvencia y se nota en la estrategia.',
  items: [
    { title: 'Insolvencia de persona natural', text: 'Para empleados, independientes y pequeños comerciantes con sobreendeudamiento.', points: ['Negociación con todos sus acreedores', 'Suspensión de procesos de cobro y embargos', 'Acuerdos de pago viables', 'Liquidación patrimonial cuando no hay otra salida'] },
    { title: 'Reorganización empresarial', text: 'Acuerdos con bancos, proveedores y empleados para que la empresa siga operando.' },
    { title: 'Negociación con acreedores', text: 'Plazos, quitas y tasas renegociadas con bancos, cooperativas y particulares.' },
    { title: 'Liquidación ordenada', text: 'Cierre legal y transparente de deudas inviables, protegiendo sus derechos.' },
    { title: 'Defensa frente a embargos y cobro jurídico', text: 'Actuamos con rapidez para proteger su salario, sus cuentas y sus bienes.' },
  ],
};

export const process = {
  title: 'Cuatro pasos, sin sorpresas.',
  text: 'Usted sabe en qué etapa está y qué sigue.',
  steps: [
    { title: 'Consulta y diagnóstico', text: 'Revisamos sus deudas y definimos si su caso aplica.' },
    { title: 'Estrategia y documentos', text: 'Armamos la solicitud y un plan de pagos acorde con su capacidad real.' },
    { title: 'Negociación', text: 'Lo representamos en audiencias y frente a cada acreedor.' },
    { title: 'Acuerdo y cierre', text: 'Firmamos un acuerdo viable y le acompañamos hasta cumplirlo.' },
  ],
};

export const about = {
  title: 'Por qué Brisma',
  quote: 'Ordenar una deuda a tiempo no es un fracaso: es una decisión responsable.',
  text: 'Detrás de cada expediente hay una familia, un sueldo o una empresa. Por eso le hablamos claro y le decimos la verdad sobre sus opciones, incluso cuando no es lo que quiere oír.',
  values: [
    ['Honestidad', 'Si su caso no aplica, se lo decimos.'],
    ['Claridad', 'Costos, tiempos y riesgos por escrito.'],
    ['Reserva', 'Su situación financiera es confidencial.'],
    ['Cercanía', 'Un abogado asignado que responde.'],
    ['Rigor', 'Especialistas solo en insolvencia.'],
    ['Acompañamiento', 'Hasta cumplir el acuerdo, no solo hasta firmarlo.'],
  ],
};

export const team = { // TODO: nombres, cargos, fotos (/public/team/*.jpg) y frases reales
  title: 'Los abogados que llevarán su caso.',
  members: [
    { name: 'Nombre Apellido', role: 'Socio fundador · Especialista en insolvencia', quote: 'Frase corta sobre su forma de trabajar.' },
    { name: 'Nombre Apellido', role: 'Abogada · Insolvencia de persona natural', quote: 'Frase corta sobre su forma de trabajar.' },
    { name: 'Nombre Apellido', role: 'Abogado · Reorganización empresarial', quote: 'Frase corta sobre su forma de trabajar.' },
  ],
};

export const testimonials = { // TODO: testimonios reales y autorizados
  title: 'Lo que dicen quienes ya salieron de la crisis.',
  note: 'Testimonios anonimizados por reserva profesional.',
  items: [
    { quote: 'Desde la primera reunión me explicaron qué esperar. Por fin dejé de recibir llamadas de cobro.', author: 'Cliente, ciudad' },
    { quote: 'Pensé que lo iba a perder todo. Hoy tengo un acuerdo de pagos que sí puedo cumplir.', author: 'Cliente, ciudad' },
    { quote: 'Nuestra empresa siguió operando gracias a la negociación con proveedores.', author: 'Empresa, sector' },
  ],
};

export const faq = [ // TODO: validar cada respuesta con los abogados
  { q: '¿Qué es la insolvencia de persona natural?', a: 'Es un procedimiento legal que permite negociar sus deudas con todos los acreedores a la vez y acordar un plan de pagos acorde con sus ingresos.' },
  { q: '¿Me pueden quitar mis bienes?', a: 'Depende de cada caso. Analizamos su situación para proteger su patrimonio dentro de lo que permite la ley y se lo explicamos en la primera consulta.' },
  { q: '¿Se detienen los embargos y los cobros?', a: 'Al admitirse el trámite, la ley prevé la suspensión de procesos de cobro en su contra. Le indicamos cómo aplica a su caso.' },
  { q: '¿Cuánto tarda el proceso?', a: 'Varía según el número de acreedores y la complejidad. En la consulta le damos un cronograma estimado.' },
  { q: '¿Cuánto cuesta?', a: 'Le entregamos una propuesta con honorarios y etapas antes de que decida. Sin cobros ocultos.' },
  { q: '¿Mi información es confidencial?', a: 'Sí. Toda su información se maneja bajo reserva profesional.' },
];

export const contact = {
  title: 'Agende su consulta. Le respondemos con claridad y rapidez.',
  text: 'Cuéntenos su situación. Sin compromiso y sin tecnicismos innecesarios.',
  interests: ['Soy persona natural con deudas', 'Tengo una empresa en crisis', 'Me embargaron o me demandaron', 'Otra consulta'],
};
