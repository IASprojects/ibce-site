export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

const ui = {
	es: {
		'meta.title': 'IBCE - Iglesia Bíblica Camino de Esperanza',
		'meta.description': 'Un lugar donde encuentras comunidad, fe y esperanza.',
		'header.brand': 'IBCE - Iglesia Bíblica Camino de Esperanza',
		'header.languageSwitch': 'Switch to English',
		'hero.badge': 'Servicios: Domingo 9:00 AM',
		'hero.title': 'Un lugar donde encuentras comunidad, fe y esperanza',
		'hero.subtitle': 'Más de 25 años dedicados a servir a nuestra comunidad, fortalecer a las familias y renovar la esperanza.',
		'hero.paragraph': 'Te damos la bienvenida a la Iglesia Bíblica Camino de Esperanza en Guayabo de Bagaces.',
		'hero.remark': 'Te damos la bienvenida a la Iglesia Bíblica Camino de Esperanza.',
		'hero.ctaNew': 'Soy nuevo',
		'hero.ctaLearn': 'Conócenos más',
		'welcome.heading': 'Bienvenido a casa',
		'welcome.paragraph': 'Queremos que tu primera visita sea especial y cómoda.',
		'welcome.remark': 'Nos alegra que estés aquí. Queremos que tu primera visita sea una experiencia especial y acogedora.',
		'welcome.card1.title': 'Ven tal como eres',
		'welcome.card1.subtitle': 'Ambiente cercano y auténtico',
		'welcome.card1.body': 'No hay un código de vestimenta. Ven cómodo y listo para conectarte.',
		'welcome.card2.title': 'Espacio para la familia',
		'welcome.card2.subtitle': 'Un lugar para cada integrante',
		'welcome.card2.body': 'Contamos con cuidado especial y clases divertidas para tus niños durante el servicio.',
		'welcome.card3.title': 'Enseñanza clara y práctica',
		'welcome.card3.subtitle': 'Mensajes para la vida diaria',
		'welcome.card3.body': 'Mensajes bíblicos que puedes aplicar directamente a tu vida diaria.',
		'nav.home': 'Inicio',
		'nav.visit': 'Visítanos',
		'nav.missions': 'Misiones',
		'nav.donate': 'Donar',
		'nav.about': 'Nosotros',
		'nav.volunteer': 'Voluntariado',
		'nav.contact': 'Contacto',
		'nosotros.title': 'Nuestra identidad',
		'nosotros.subtitle':
			'Historia, misión y visión de Iglesia Bíblica Camino de Esperanza en Guayabo de Bagaces.',
		'nosotros.history.label': 'Nuestra historia',
		'nosotros.history.title': 'Raíces de esperanza en Guayabo de Bagaces',
		'nosotros.history.body1':
			'Iglesia Bíblica Camino de Esperanza nació hace más de 25 años en Guayabo de Bagaces, Guanacaste, cuando un pequeño grupo de familias comenzó a reunirse en casas para orar y estudiar la Biblia.',
		'nosotros.history.body2':
			'Con el tiempo la comunidad creció y consolidó su templo. Hoy seguimos caminando con las mismas raíces: fe sencilla, hospitalidad radical y servicio a la comunidad.',
		'nosotros.mission.title': 'Misión',
		'nosotros.mission.body':
			'Proclamar el evangelio de Jesús, fortalecer a las familias y servir a nuestra comunidad en Guayabo de Bagaces y la región de Guanacaste.',
		'nosotros.vision.title': 'Visión',
		'nosotros.vision.body':
			'Ser un lugar donde cada persona encuentre un camino de esperanza: un hogar espiritual de fe viva, familias restauradas y una comunidad transformada por el amor de Dios.',
		'nosotros.values.label': 'Nuestros valores',
		'nosotros.values.item1': 'Hospitalidad radical',
		'nosotros.values.item2': 'Fe bíblica',
		'nosotros.values.item3': 'Servicio a la comunidad',
		'nosotros.values.item4': 'Transparencia',
		'nosotros.gallery.title': 'Vivimos juntos la fe',
		'nosotros.gallery.body':
			'Adoración, estudios bíblicos y momentos de comunidad. (Fotos de ejemplo: reemplazar con material real).',
		'visitanos.title': 'Visítanos',
		'visitanos.subtitle':
			'Queremos que tu primer visita sea sencilla, cálido y lleno de esperanza.',
		'visitanos.schedule.title': 'Horarios de cultos',
		'visitanos.schedule.sun.weekday': 'Domingos',
		'visitanos.schedule.sun.time': '9:00 AM',
		'visitanos.schedule.sun.activity': 'Servicio principal + escuela dominical',
		'visitanos.schedule.wed.weekday': 'Miércoles',
		'visitanos.schedule.wed.time': '7:00 PM',
		'visitanos.schedule.wed.activity': 'Culto de Oración y Enseñanza',
		'visitanos.steps.title': 'Tu primera visita',
		'visitanos.steps.step1': 'Llega unos minutos antes',
		'visitanos.steps.desc1': 'Te saludaremos con calidez y te ayudaremos a ubicarte.',
		'visitanos.steps.step2': 'Ven como eres',
		'visitanos.steps.desc2': 'No hay código de vestimenta. Siéntete libre y cómodo.',
		'visitanos.steps.step3': 'Acomoda a tu familia',
		'visitanos.steps.desc3': 'Contamos con cuidado y clases para niños durante el servicio.',
		'visitanos.steps.step4': 'Quédate al café',
		'visitanos.steps.desc4': 'Después del servicio conversamos alrededor de un café.',
		'visitanos.location.title': 'Cómo llegar',
		'visitanos.location.address':
			'Iglesia Bíblica Camino de Esperanza, Guayabo de Bagaces, Guanacaste, Costa Rica',
		'visitanos.location.mapCta': 'Abrir en Google Maps',
		'visitanos.location.wazeCta': 'Abrir en Waze',
		'voluntariado.title': 'Voluntariado e impacto',
		'voluntariado.subtitle':
			'Sumando manos, transformando vidas. Un Camino se construye juntos.',
		'voluntariado.team1.title': 'Acción Social',
		'voluntariado.team1.body':
			'Acompañamos a vecinos en necesidad: visitas, despensas y apoyo en momentos difíciles.',
		'voluntariado.team2.title': 'Atención al Adulto Mayor',
		'voluntariado.team2.body': 'Visitas y actividades para abuelos de la comunidad con amor y dignidad.',
		'voluntariado.team3.title': 'Mantenimiento del Templo',
		'voluntariado.team3.body':
			'Cuidamos y mejoramos el espacio de reunión para que todos lo disfruten.',
		'voluntariado.team4.title': 'Música y Artes',
		'voluntariado.team4.body':
			'Equipos de alabanza y artes para vivir la adoración con excelencia.',
		'voluntariado.cta': 'Unirme a un equipo',
		'voluntariado.ctaHint': 'Escríbenos por WhatsApp y te contactamos con el líder del equipo.',
		'donaciones.title': 'Donaciones y transparencia',
		'donaciones.subtitle':
			'Tu apoyo sostiene el ministerio local y rinde cuentas con integridad.',
		'donaciones.integrity.title': 'Integridad financiera',
		'donaciones.integrity.body':
			'Cada aporte se registra, se administra en cuentas oficiales y se rinden cuentas a la congregación. Creemos en la transparencia como una forma de honrar la confianza.',
		'donaciones.integrity.point1': 'Control interno de dos firmas para gastos',
		'donaciones.integrity.point2': 'Informe financiero presentado a la congregación mensualmente',
		'donaciones.integrity.point3': 'Uso exclusivo para el ministerio y la comunidad',
		'donaciones.methods.title': 'Métodos para apoyar',
		'donaciones.sinpe.title': 'SINPE Móvil',
		'donaciones.sinpe.body':
			'Transfiere desde tu banco con el número de teléfono. (Datos de ejemplo: +506 0000 0000)',
		'donaciones.bank.title': 'Transferencia bancaria',
		'donaciones.bank.body':
			'Cuenta oficial en dólares y colones. (Datos de ejemplo: cuenta BAC 000-000-000)',
		'donaciones.offering.title': 'Ofrenda en el servicio',
		'donaciones.offering.body':
			'También puedes aportar los domingos durante la reunión de adoración.',
		'donaciones.cta': 'Apoyar la misión',
		'contacto.title': 'Contacto',
		'contacto.subtitle': 'Estamos para servirte. Escríbenos o visítanos.',
		'contacto.phone.label': 'Teléfono',
		'contacto.phone.value': '+506 0000 0000',
		'contacto.whatsapp.label': 'WhatsApp',
		'contacto.whatsapp.value': '+506 0000 0000',
		'contacto.email.label': 'Correo',
		'contacto.email.value': 'info@ibce.cr',
		'contacto.address.label': 'Dirección',
		'contacto.address.value': 'Guayabo de Bagaces, Bagaces, Guanacaste, Costa Rica',
		'contacto.social.title': 'Síguenos',
		'contacto.social.facebook': 'Facebook',
		'contacto.social.instagram': 'Instagram',
		'contacto.social.youtube': 'YouTube',
		'contacto.prayer.title': 'Peticiones de oración',
		'contacto.prayer.body':
			'Cuéntanos cómo podemos orar por ti. Tu petición es confidencial.',
		'contacto.prayer.cta': 'Enviar petición',
		'footer.map': 'Cómo llegar',
		'footer.brand': 'IBCE',
		'footer.address': 'Dirección',
		'footer.contact': 'Contacto',
		'footer.prayer': 'Petición de Oración',
		'footer.financial': 'Integridad Financiera',
		'footer.copyright': '© 2024 Iglesia Bíblica Camino de Esperanza. Guayabo de Bagaces.'
	},
	en: {
		'meta.title': 'IBCE - Iglesia Bíblica Camino de Esperanza',
		'meta.description': 'A place where you find community, faith, and hope.',
		'header.brand': 'IBCE - Iglesia Bíblica Camino de Esperanza',
		'header.languageSwitch': 'Ver en español',
		'hero.badge': 'Services: Sunday 9:00 AM',
		'hero.title': 'A place where you find community, faith, and hope',
		'hero.subtitle': 'Over 25 years serving families in Guayabo de Bagaces and walking together in faith.',
		'hero.paragraph': 'Welcome to Camino de Esperanza Biblical Church in Guayabo de Bagaces.',
		'hero.remark': 'Welcome to Camino de Esperanza Biblical Church.',
		'hero.ctaNew': "I'm New",
		'hero.ctaLearn': 'Learn More',
		'welcome.heading': 'Welcome Home',
		'welcome.paragraph': 'We want your first visit to be special and comfortable.',
		'welcome.remark': "We are glad you are here. We want your first visit to be a special and welcoming experience.",
		'welcome.card1.title': 'Come As You Are',
		'welcome.card1.subtitle': 'A friendly and authentic atmosphere',
		'welcome.card1.body': 'There is no dress code. Come comfortable and ready to connect.',
		'welcome.card2.title': 'Family Friendly',
		'welcome.card2.subtitle': 'A space for everyone',
		'welcome.card2.body': 'We offer special care and fun classes for your children during the service.',
		'welcome.card3.title': 'Clear and Practical Teaching',
		'welcome.card3.subtitle': 'Messages for daily life',
		'welcome.card3.body': 'Biblical messages that you can directly apply to your everyday life.',
		'nav.home': 'Home',
		'nav.visit': 'Visit Us',
		'nav.missions': 'Missions',
		'nav.donate': 'Donate',
		'nav.about': 'About Us',
		'nav.volunteer': 'Volunteer',
		'nav.contact': 'Contact',
		'nosotros.title': 'Our Identity',
		'nosotros.subtitle':
			'The history, mission, and vision of Camino de Esperanza Biblical Church in Guayabo de Bagaces.',
		'nosotros.history.label': 'Our History',
		'nosotros.history.title': 'Roots of Hope in Guayabo de Bagaces',
		'nosotros.history.body1':
			'Camino de Esperanza Biblical Church was born over 25 years ago in Guayabo de Bagaces, Guanacaste, when a small group of families began meeting in homes to pray and study the Bible.',
		'nosotros.history.body2':
			'Over time the community grew and established its own temple. Today we keep the same roots: simple faith, radical hospitality, and service to the community.',
		'nosotros.mission.title': 'Mission',
		'nosotros.mission.body':
			'To proclaim the gospel of Jesus, strengthen families, and serve our community in Guayabo de Bagaces and the Guanacaste region.',
		'nosotros.vision.title': 'Vision',
		'nosotros.vision.body':
			'To be a place where every person finds a path of hope: a spiritual home of living faith, restored families, and a community transformed by God’s love.',
		'nosotros.values.label': 'Our Values',
		'nosotros.values.item1': 'Radical hospitality',
		'nosotros.values.item2': 'Biblical faith',
		'nosotros.values.item3': 'Community service',
		'nosotros.values.item4': 'Transparency',
		'nosotros.gallery.title': 'We Live Our Faith Together',
		'nosotros.gallery.body':
			'Worship, Bible studies, and community moments. (Sample photos: replace with real material).',
		'visitanos.title': 'Visit Us',
		'visitanos.subtitle':
			'We want your first visit to be simple, warm, and full of hope.',
		'visitanos.schedule.title': 'Service Times',
		'visitanos.schedule.sun.weekday': 'Sundays',
		'visitanos.schedule.sun.time': '9:00 AM',
		'visitanos.schedule.sun.activity': 'Main service + Sunday school',
		'visitanos.schedule.wed.weekday': 'Wednesdays',
		'visitanos.schedule.wed.time': '7:00 PM',
		'visitanos.schedule.wed.activity': 'Prayer and Teaching Service',
		'visitanos.steps.title': 'Your First Visit',
		'visitanos.steps.step1': 'Arrive a few minutes early',
		'visitanos.steps.desc1': "We'll greet you warmly and help you get settled.",
		'visitanos.steps.step2': 'Come as you are',
		'visitanos.steps.desc2': 'There is no dress code. Feel free and comfortable.',
		'visitanos.steps.step3': 'Settle your family in',
		'visitanos.steps.desc3': 'We offer care and classes for children during the service.',
		'visitanos.steps.step4': 'Stay for coffee',
		'visitanos.steps.desc4': 'After the service we chat over coffee.',
		'visitanos.location.title': 'How to Get Here',
		'visitanos.location.address':
			'Camino de Esperanza Biblical Church, Guayabo de Bagaces, Guanacaste, Costa Rica',
		'visitanos.location.mapCta': 'Open in Google Maps',
		'visitanos.location.wazeCta': 'Open in Waze',
		'voluntariado.title': 'Volunteering & Impact',
		'voluntariado.subtitle':
			'Joining hands, transforming lives. A Path is built together.',
		'voluntariado.team1.title': 'Social Action',
		'voluntariado.team1.body':
			'We come alongside neighbors in need: visits, food baskets, and support in difficult times.',
		'voluntariado.team2.title': 'Senior Care',
		'voluntariado.team2.body':
			'Visits and activities for community seniors with love and dignity.',
		'voluntariado.team3.title': 'Temple Maintenance',
		'voluntariado.team3.body':
			'We care for and improve our meeting space so everyone can enjoy it.',
		'voluntariado.team4.title': 'Music & Arts',
		'voluntariado.team4.body':
			'Worship teams and arts to live out worship with excellence.',
		'voluntariado.cta': 'Join a Team',
		'voluntariado.ctaHint':
			'Message us on WhatsApp and we will connect you with the team leader.',
		'donaciones.title': 'Donations & Transparency',
		'donaciones.subtitle':
			'Your support sustains local ministry and is accountable with integrity.',
		'donaciones.integrity.title': 'Financial Integrity',
		'donaciones.integrity.body':
			'Every gift is recorded, managed through official accounts, and reported to the congregation. We believe transparency honors trust.',
		'donaciones.integrity.point1': 'Two-signature internal control for expenses',
		'donaciones.integrity.point2': 'Financial report presented to the congregation monthly',
		'donaciones.integrity.point3': 'Exclusive use for ministry and community',
		'donaciones.methods.title': 'Ways to Give',
		'donaciones.sinpe.title': 'SINPE Móvil',
		'donaciones.sinpe.body':
			'Transfer from your bank using the phone number. (Sample data: +506 0000 0000)',
		'donaciones.bank.title': 'Bank Transfer',
		'donaciones.bank.body':
			'Official account in US dollars and colones. (Sample data: BAC account 000-000-000)',
		'donaciones.offering.title': 'In-Person Offering',
		'donaciones.offering.body':
			'You can also give on Sundays during the worship service.',
		'donaciones.cta': 'Support the Mission',
		'contacto.title': 'Contact',
		'contacto.subtitle': "We're here to serve you. Reach out or visit us.",
		'contacto.phone.label': 'Phone',
		'contacto.phone.value': '+506 0000 0000',
		'contacto.whatsapp.label': 'WhatsApp',
		'contacto.whatsapp.value': '+506 0000 0000',
		'contacto.email.label': 'Email',
		'contacto.email.value': 'info@ibce.cr',
		'contacto.address.label': 'Address',
		'contacto.address.value': 'Guayabo de Bagaces, Bagaces, Guanacaste, Costa Rica',
		'contacto.social.title': 'Follow Us',
		'contacto.social.facebook': 'Facebook',
		'contacto.social.instagram': 'Instagram',
		'contacto.social.youtube': 'YouTube',
		'contacto.prayer.title': 'Prayer Requests',
		'contacto.prayer.body':
			'Tell us how we can pray for you. Your request is confidential.',
		'contacto.prayer.cta': 'Send Request',
		'footer.map': 'How to Get Here',
		'footer.brand': 'IBCE',
		'footer.address': 'Address',
		'footer.contact': 'Contact',
		'footer.prayer': 'Prayer Requests',
		'footer.financial': 'Financial Integrity',
		'footer.copyright': '© 2024 Camino de Esperanza Biblical Church. Guayabo de Bagaces.'
	},
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLocale];

export function getTranslations(locale: string): (typeof ui)[typeof defaultLocale] {
	return ui[locale as Locale] ?? ui[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
	const segment = url.pathname.split('/')[1];
	if (segment && (locales as readonly string[]).includes(segment)) {
		return segment as Locale;
	}
	return defaultLocale;
}