// Guías del cluster "insolvencia de persona natural". La primera es la página pilar.
// TODO: validar todo el contenido legal con los abogados antes de publicar.

const allGuides = [
  {
    slug: 'ley-insolvencia-persona-natural',
    redirect: true, // Desactivada: la URL redirige al texto oficial de la ley (ver next.config.js)
    label: 'Ley 2445: guía fácil',
    metaTitle: 'Ley 2445 de 2025 explicada fácil: insolvencia para personas | Grupo Brisma',
    metaDescription: '¿Qué es la Ley 2445 y cómo le ayuda a salir de sus deudas? Se la explicamos en palabras sencillas: quién puede usarla, qué cambia y cómo empezar.',
    h1: 'La ley que le ayuda a salir de sus deudas, explicada en palabras sencillas',
    intro: 'Si las deudas se le salieron de las manos, no está solo y no es el final. En Colombia existe un trámite legal, renovado por la Ley 2445 de 2025, que le permite sentarse con todos sus acreedores al mismo tiempo y acordar un plan de pagos que sí pueda cumplir.',
    takeaways: [
      'La Ley 2445 de 2025 actualizó el régimen de insolvencia para personas naturales.',
      'Ahora también pueden usarla los pequeños comerciantes con activos inferiores a 1.000 salarios mínimos.',
      'Al iniciar el trámite se suspenden los procesos de cobro en su contra.',
      'Las audiencias pueden ser virtuales, sin importar la ciudad en la que viva.',
    ],
    sections: [
      {
        h2: '¿Qué es la Ley 2445 de 2025?',
        paragraphs: [
          'Es la reforma al régimen de insolvencia que ya existía en el Código General del Proceso (Ley 1564 de 2012). Su objetivo es que las personas puedan reorganizar sus deudas y volver a empezar, mientras sus acreedores reciben un pago ordenado.',
          'Dicho de forma simple: en lugar de enfrentar a cada banco, cooperativa o prestamista por separado, usted negocia con todos en un mismo proceso, con un conciliador que guía la conversación.',
        ],
      },
      {
        h2: '¿Quién puede acogerse?',
        paragraphs: ['El trámite está pensado para personas naturales que ya no pueden cumplir con sus deudas:'],
        list: ['Empleados con salario embargado o comprometido.', 'Trabajadores independientes.', 'Pensionados.', 'Pequeños comerciantes con activos inferiores a 1.000 salarios mínimos (la gran novedad de esta ley).'],
      },
      {
        h2: '¿Qué cambió con la nueva ley?',
        table: {
          head: ['Tema', 'Qué significa para usted'],
          rows: [
            ['Pequeños comerciantes', 'Si tiene un negocio pequeño, ahora puede usar el mismo trámite que una persona natural.'],
            ['Cobros indebidos', 'El acreedor que siga cobrando después de ser notificado puede ser sancionado.'],
            ['Trámite virtual', 'Las audiencias y los acuerdos pueden hacerse en línea, desde cualquier ciudad.'],
            ['Honorarios', 'Los costos del proceso, incluido el abogado, pueden reconocerse como gastos de administración.'],
            ['Insolvencia familiar', 'Miembros del mismo núcleo familiar pueden coordinar sus trámites y ahorrar costos.'],
          ],
        },
      },
      {
        h2: '¿Qué caminos ofrece la ley?',
        subsections: [
          { h3: 'Negociación de deudas', text: 'Es el camino principal: un acuerdo con todos sus acreedores, con plazos y cuotas acordes a sus ingresos.', href: '/negociacion-deudas', linkLabel: 'Cómo funciona la negociación de deudas' },
          { h3: 'Convalidación de acuerdos', text: 'Si ya llegó a un acuerdo por fuera con sus acreedores, se formaliza ante el conciliador para darle plena validez.' },
          { h3: 'Liquidación patrimonial', text: 'Cuando un acuerdo no es posible, permite cerrar las deudas de forma ordenada con los bienes que existan.', href: '/liquidacion-patrimonial', linkLabel: 'Qué es la liquidación patrimonial' },
        ],
      },
      {
        h2: 'Lo único que la ley le pide: transparencia',
        paragraphs: ['La ley presume que usted actúa de buena fe. A cambio, le pide declarar todas sus deudas y todos sus bienes, incluso los que tenga en el exterior. Ocultar información puede invalidar el acuerdo, por eso le ayudamos a preparar la solicitud completa y sin errores.'],
      },
    ],
    faq: [
      { q: '¿La Ley 2445 borra mis deudas?', a: 'No las borra, pero le permite reorganizarlas en un acuerdo con plazos y cuotas que pueda pagar. En la liquidación patrimonial, las deudas se cierran con los bienes disponibles.' },
      { q: '¿Puedo usar la ley si tengo un negocio?', a: 'Sí, si es un pequeño comerciante con activos inferiores a 1.000 salarios mínimos. Las empresas (personas jurídicas) no aplican a este trámite.' },
      { q: '¿Quedo reportado en centrales de riesgo?', a: 'Cada caso es distinto. En la consulta le explicamos cómo funciona el reporte durante y después del proceso.' }, // TODO: validar
    ],
    related: ['negociacion-deudas', 'liquidacion-patrimonial'],
  },
  {
    slug: 'negociacion-deudas',
    label: 'Negociación de deudas',
    metaTitle: 'Negociación de deudas para personas: cómo funciona paso a paso | Grupo Brisma',
    metaDescription: 'Negocie todas sus deudas a la vez y pague según lo que gana. Le explicamos el proceso, los requisitos y qué pasa con los embargos. Consulta confidencial.',
    h1: 'Negociar todas sus deudas a la vez sí es posible',
    intro: 'La negociación de deudas es el trámite que le permite llegar a un acuerdo con todos sus acreedores al mismo tiempo, con la guía de un conciliador. Usted propone un plan de pagos realista y, mientras tanto, los cobros judiciales en su contra se detienen.',
    takeaways: [
      'Negocia con todos sus acreedores en un solo proceso.',
      'Al admitirse el trámite se suspenden los procesos ejecutivos y los embargos.',
      'Su plan de pagos se calcula sobre sus ingresos, descontando gastos esenciales.',
      'Las obligaciones alimentarias se respetan siempre.',
    ],
    sections: [
      {
        h2: '¿Cómo funciona, paso a paso?',
        ordered: true,
        list: ['Revisamos sus deudas, ingresos y gastos para confirmar que su caso es viable.', 'Preparamos la solicitud con toda la documentación y una propuesta de pago realista.', 'El conciliador admite el trámite y se suspenden los cobros en su contra.', 'Negociamos en las audiencias hasta llegar a un acuerdo con sus acreedores.', 'Le acompañamos mientras cumple el acuerdo.'],
      },
      {
        h2: '¿Qué documentos necesito?',
        paragraphs: ['No se preocupe por tenerlo todo listo desde el primer día: le ayudamos a reunirlo. En general se necesita:'],
        list: ['Relación de todas sus deudas, actualizada al día anterior a la admisión.', 'Información de sus bienes, incluidos los que tenga en el exterior.', 'Datos de su sociedad conyugal, si aplica.', 'Información sobre obligaciones alimentarias.', 'Matrícula mercantil, si es pequeño comerciante.'],
      },
      {
        h2: '¿Qué pasa cuando se admite el trámite?',
        table: {
          head: ['Efecto', 'Qué significa para usted'],
          rows: [
            ['Suspensión de procesos', 'Los procesos ejecutivos en curso se detienen.'],
            ['Prohibición de pagos y ejecuciones', 'Ni usted ni sus acreedores pueden hacer pagos o cobros por fuera del proceso.'],
            ['Sanción por cobros indebidos', 'Quien siga cobrando tras ser notificado puede ser sancionado.'],
          ],
        },
      },
      {
        h2: '¿Cómo se calcula lo que voy a pagar?',
        paragraphs: ['La propuesta parte de sus ingresos reales. A ellos se les restan sus gastos esenciales y las obligaciones prioritarias, como las alimentarias. Lo que queda disponible es la base para negociar plazos y cuotas con sus acreedores, siempre respetando el orden legal de pago.'],
        subsections: [
          { h3: '¿Y si no se llega a un acuerdo?', text: 'Existe otra salida: la liquidación patrimonial, que cierra las deudas de forma ordenada.', href: '/liquidacion-patrimonial', linkLabel: 'Conozca la liquidación patrimonial' },
        ],
      },
    ],
    faq: [
      { q: '¿Cuánto dura una negociación de deudas?', a: 'Depende del número de acreedores y de la complejidad del caso. En la primera consulta le damos un cronograma estimado.' },
      { q: '¿Me pueden seguir embargando?', a: 'Una vez admitido el trámite, los procesos ejecutivos se suspenden y los acreedores no pueden seguir cobrando por fuera del proceso.' },
      { q: '¿Puedo hacerlo de forma virtual?', a: 'Sí. Las audiencias pueden hacerse en línea, sin importar la ciudad en la que viva.' },
    ],
    related: ['liquidacion-patrimonial'],
  },
  {
    slug: 'liquidacion-patrimonial',
    label: 'Liquidación patrimonial',
    metaTitle: 'Liquidación patrimonial: qué es y cuándo conviene | Grupo Brisma',
    metaDescription: 'Cuando no es posible un acuerdo de pago, la liquidación patrimonial cierra sus deudas de forma ordenada. Le explicamos cómo funciona y qué pasa con sus bienes.',
    h1: 'Cuando no hay acuerdo posible, todavía hay una salida ordenada',
    intro: 'A veces las deudas son tan altas que un acuerdo de pago no es viable. Para esos casos existe la liquidación patrimonial: un proceso que reparte de forma ordenada los bienes que usted tenga entre sus acreedores y le permite cerrar ese capítulo y volver a empezar.',
    takeaways: [
      'Es la alternativa cuando no se logra un acuerdo de pago.',
      'Los bienes se reparten respetando el orden legal de los acreedores.',
      'Con la Ley 2445 es más ágil y económica si tiene pocos o ningún bien.',
      'Es obligatorio declarar todos los bienes, incluso en el exterior.',
    ],
    sections: [
      {
        h2: '¿Cuándo conviene la liquidación patrimonial?',
        list: ['Cuando la negociación de deudas no llega a un acuerdo.', 'Cuando sus ingresos no alcanzan para ningún plan de pagos realista.', 'Cuando tiene pocos o ningún bien y necesita cerrar sus deudas de forma definitiva.'],
      },
      {
        h2: 'Negociación o liquidación: ¿cuál es para usted?',
        table: {
          head: ['', 'Negociación de deudas', 'Liquidación patrimonial'],
          rows: [
            ['Objetivo', 'Acordar un plan de pagos', 'Cerrar las deudas con los bienes disponibles'],
            ['Sus bienes', 'Por lo general los conserva', 'Se usan para pagar a los acreedores'],
            ['Cuándo aplica', 'Cuando tiene capacidad de pago', 'Cuando un acuerdo no es viable'],
          ],
        },
        subsections: [
          { h3: '¿Todavía puede pagar algo cada mes?', text: 'Entonces probablemente le conviene más negociar.', href: '/negociacion-deudas', linkLabel: 'Vea cómo funciona la negociación' },
        ],
      },
      {
        h2: '¿Qué pasa con mis bienes?',
        paragraphs: ['Los bienes se distribuyen entre los acreedores respetando la prelación de créditos, es decir, el orden de pago que fija la ley. Todos los bienes deben declararse, incluidos los que estén en el exterior: omitir alguno puede invalidar el proceso. Le ayudamos a revisar qué bienes entran y cómo proteger lo que la ley permite.'],
      },
    ],
    faq: [
      { q: '¿Pierdo todos mis bienes?', a: 'No necesariamente. Hay bienes que la ley protege. En la consulta revisamos su caso en detalle.' }, // TODO: validar
      { q: '¿Puedo pedir liquidación si no tengo bienes?', a: 'Sí. La Ley 2445 agiliza y abarata el trámite para personas con pocos o ningún bien.' },
      { q: '¿Qué pasa con las deudas que no alcanzan a pagarse?', a: 'Depende del caso y del resultado del proceso. Se lo explicamos con claridad antes de tomar cualquier decisión.' }, // TODO: validar
    ],
    related: ['negociacion-deudas'],
  },
];

// Solo las guías publicadas generan página, sitemap y enlaces.
export const guides = allGuides.filter((g) => !g.redirect);

export const getGuide = (slug) => guides.find((g) => g.slug === slug);
