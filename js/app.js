(function () {
        var burger = document.getElementById('burger');
        var nav = document.getElementById('mainnav');
        burger.addEventListener('click', function () {
          var open = nav.classList.toggle('open');
          burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
          if (e.target.tagName === 'A') {
            nav.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
          }
        });

        var playBtn = document.getElementById('playBtn');
        var msg = document.getElementById('videoMsg');
        playBtn.addEventListener('click', function () {
          var open = msg.classList.toggle('open');
          playBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (open) { msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
        });

        document.getElementById('applyForm').addEventListener('submit', function (e) {
          e.preventDefault();
          var name = document.getElementById('f-name').value.trim();
          var email = document.getElementById('f-email').value.trim();
          var country = document.getElementById('f-country').value;
          var message = document.getElementById('f-msg').value.trim();
          var subject = encodeURIComponent('Membership Application — ' + name);
          var body = encodeURIComponent(
            'Full Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Country: ' + country + '\n\n' +
            'Why I seek the Order:\n' + message
          );
          window.location.href = 'mailto:info@theilluminatiorder.org?subject=' + subject + '&body=' + body;
        });
      })();

(function () {
        var T = {
          fr: {
            topbar: "◆ Le site officiel de l'Ordre Illuminati ◆ Adhésion mondiale ouverte ◆",
            lang_label: "Langue", nav_home: "Accueil", nav_about: "À propos", nav_beliefs: "Nos croyances", nav_members: "Membres", nav_benefits: "Avantages", nav_procedure: "Procédure", nav_archives: "Archives", nav_contact: "Contact", nav_join: "Rejoignez-nous",
            hero_kicker: "L'organisation officielle", hero_welcome: "BIENVENUE DANS", hero_order: "L'ORDRE", hero_lede: "Une fraternité mondiale exclusive de dirigeants, d'autorités économiques, d'innovateurs, d'artistes et de visionnaires unis par un seul but — le progrès et la protection de l'espèce humaine.", hero_join: "Rejoindre l'Ordre Illuminati", learn_more: "En savoir plus",
            quote: "« Au-delà de toutes les divisions de race, de nationalité ou de croyance — chaque vie humaine a la même valeur. L'Ordre Illuminati existe pour protéger l'avenir de toute l'espèce humaine. »",
            msg_kicker: "Message officiel", msg_title_a: "UN MESSAGE DE", msg_sub: "Regardez la présentation officielle de l'Ordre Illuminati — qui nous sommes, ce que nous défendons et pourquoi nous existons.",
            intro_title: "UNE BRÈVE<br />INTRODUCTION À<br />", intro_btn: "Découvrir notre mission", intro_p1: "L'Ordre Illuminati est une organisation d'élite composée de dirigeants mondiaux, d'autorités économiques, d'innovateurs, d'artistes et d'autres membres influents engagés pour une seule cause — la prospérité et la survie de l'humanité.", intro_p2: "Notre coalition unit des membres de tous horizons politiques, religieux et géographiques autour d'un principe unique : le bien-être de l'espèce humaine dépasse tout individu, toute nation et toute idéologie.",
            oath_kicker: "Notre histoire — Tirée des archives", oath_title: "LE SERMENT ÉTERNEL DE<br />", oath_fear: "N'AYEZ PAS PEUR !", oath_p1: "Depuis nos origines, les membres des Illuminati se consacrent au progrès de l'espèce humaine en prêtant des serments d'engagement. Ces engagements sont une tradition centrale, formés comme des contrats écrits entre une personne et l'ensemble de l'humanité.", oath_p2: "Le premier engagement des Illuminati s'appelle le Serment Éternel.",
            beliefs_strip: "Nos croyances fondamentales", belief_pyramid: "La Pyramide", belief_eye: "L'Œil", belief_light: "La Lumière", belief_circle: "Le Cercle Éternel",
            belief_p1: "L'argent n'est pas la racine de tout mal — l'argent est la voie vers toute liberté. La recherche égoïste de l'argent est un but creux, mais la recherche du bien que l'argent peut créer est l'une des plus grandes responsabilités de l'humanité.",
            belief_p2: "Les humains évoluent rapidement et continuent de progresser grâce à l'étude, à la pratique et à l'amélioration de soi. L'espèce humaine est protégée par une coalition de ses membres les plus éminents appelée les Illuminati.",
            belief_p3: "Chaque humain est guidé par une boussole intérieure qui pointe vers la Lumière, révélant vérité et direction au milieu des décisions. Toutes les croyances spirituelles humaines cherchent en fin de compte la Lumière, sous des formes différentes.",
            belief_p4: "Chaque humain fait partie d'un dessein plus vaste et éternel — des engrenages individuels dans une horloge sans fin. Même sans s'en rendre compte, les actions d'une personne peuvent changer l'avenir du monde entier.",
            members_kicker: "Les personnes de l'Ordre Illuminati", members_title_a: "VOIX DE", members_title_b: "NOS MEMBRES", members_sub: "Des millions de personnes de tous horizons se sont engagées dans le travail mondial des Illuminati pour le bien de l'espèce humaine. En dépassant toutes les divisions religieuses, géographiques ou politiques, les adeptes s'efforcent de créer une planète où chacun, partout, peut vivre dans l'abondance.",
            benefits_kicker: "Avantages des membres", benefits_title_a: "À QUOI LES MEMBRES", benefits_title_b: "SE CONSACRENT", benefits_sub: "Les Illuminati sont une organisation puissante et soigneusement protégée. Ses membres se consacrent à trois poursuites, toujours au service de l'espèce humaine.",
            benefit_wealth: "RICHESSE", benefit_power: "POUVOIR", benefit_fame: "RENOMMÉE",
            benefit_wealth_p: "Soyez toujours prêt. Vivez ce moment comme s'il était votre dernier sur cette terre et acquérez dès maintenant la plus grande richesse spirituelle. Guidé par votre âme, vous travaillez vers une abondance de biens précieux — tenus comme une responsabilité de créer du bien pour l'humanité, jamais comme une fin en soi.",
            benefit_power_p: "C'est par la foi que nous passons du connu à l'inconnu. Les membres recherchent l'influence — économique, technologique et culturelle — afin que la tristesse, la douleur et la peur soient éliminées, et que tous connaissent le bonheur et la paix.",
            benefit_fame_p: "Ceux qui se consacrent pleinement au progrès de l'humanité gagnent un nom durable. Une vie vécue pour l'espèce est honorée dans votre communauté, votre pays et le monde entier.",
            proc_kicker: "Procédure d'adhésion", proc_title_a: "COMMENT REJOINDRE", proc_sub: "L'adhésion est ouverte aux personnes de tous horizons — nous accueillons dirigeants d'entreprise, artistes, universitaires, innovateurs, politiciens et visionnaires du monde entier.",
            step1_title: "Soumettez votre candidature", step1_p: "Envoyez votre candidature via le formulaire officiel sur cette page, avec votre nom, votre pays et la raison pour laquelle vous cherchez l'Ordre.", step2_title: "Examen personnel", step2_p: "Nous examinons toutes les candidatures personnellement et contactons directement les candidats qualifiés. L'adhésion est ouverte aux personnes d'un caractère, d'une vision et d'un engagement exceptionnels.", step3_title: "Prêtez le Serment Éternel", step3_p: "Les candidats acceptés s'engagent pour le progrès de l'espèce humaine en prêtant le Serment Éternel — le premier engagement des Illuminati.",
            cta_title_a: "ÊTES-VOUS PRÊT À REJOINDRE<br />", cta_p: "L'adhésion à l'Ordre Illuminati est ouverte aux personnes d'un caractère, d'une vision et d'un engagement exceptionnels envers l'espèce humaine.", cta_btn: "Commencer votre candidature",
            form_name: "Nom complet", form_email: "Adresse e-mail", form_country: "Pays", form_country_select: "Sélectionnez votre pays…", form_why: "Pourquoi cherchez-vous l'Ordre ?", form_submit: "Envoyer la candidature", form_note: "L'envoi ouvre votre application e-mail avec votre candidature adressée à l'Ordre. Toutes les candidatures sont examinées personnellement.", float_join: "REJOIGNEZ-NOUS ✦", video_note: "Regardez la vidéo complète pour comprendre le véritable but des Élites Illuminati."
          },
          es: {
            topbar: "◆ El sitio web oficial de la Orden Illuminati ◆ Membresía global abierta ◆",
            lang_label: "Idioma", nav_home: "Inicio", nav_about: "Nosotros", nav_beliefs: "Nuestras creencias", nav_members: "Miembros", nav_benefits: "Beneficios", nav_procedure: "Procedimiento", nav_archives: "Archivos", nav_contact: "Contacto", nav_join: "Únete",
            hero_kicker: "La organización oficial", hero_welcome: "BIENVENIDO A", hero_order: "LA ORDEN", hero_lede: "Una hermandad global exclusiva de líderes mundiales, autoridades empresariales, innovadores, artistas y visionarios unidos por un solo propósito — el avance y la protección de la especie humana.", hero_join: "Unirse a la Orden Illuminati", learn_more: "Más información",
            quote: "« Por encima de todas las divisiones de raza, nacionalidad o credo — cada vida humana tiene el mismo valor. La Orden Illuminati existe para proteger el futuro de toda la especie humana. »",
            msg_kicker: "Mensaje oficial", msg_title_a: "UN MENSAJE DE", msg_sub: "Mira la presentación oficial de la Orden Illuminati — quiénes somos, qué defendemos y por qué existimos.",
            intro_title: "UNA BREVE<br />INTRODUCCIÓN A<br />", intro_btn: "Descubre nuestro propósito", intro_p1: "La Orden Illuminati es una organización de élite compuesta por líderes mundiales, autoridades empresariales, innovadores, artistas y otros miembros influyentes comprometidos con una causa — la prosperidad y la supervivencia de la humanidad.", intro_p2: "Nuestra coalición une a miembros de todos los orígenes políticos, religiosos y geográficos bajo un principio único: el bienestar de la especie humana trasciende a cualquier individuo, nación o ideología.",
            oath_kicker: "Nuestra historia — De los archivos", oath_title: "EL JURAMENTO ETERNO DE<br />", oath_fear: "¡NO TEMAS!", oath_p1: "Desde nuestros orígenes, los miembros Illuminati se han dedicado al avance de la especie humana mediante juramentos de compromiso. Estas promesas son una tradición central, formadas como contratos escritos entre una persona y toda la humanidad.", oath_p2: "La primera promesa de los Illuminati se llama el Juramento Eterno.",
            beliefs_strip: "Nuestras creencias fundamentales", belief_pyramid: "La Pirámide", belief_eye: "El Ojo", belief_light: "La Luz", belief_circle: "El Círculo Eterno",
            belief_p1: "El dinero no es la raíz de todo mal — el dinero es la ruta hacia toda libertad. La búsqueda egoísta del dinero es un objetivo vacío, pero la búsqueda del bien que el dinero puede crear es una de las mayores responsabilidades de la humanidad.",
            belief_p2: "Los seres humanos evolucionan a un ritmo rápido y siguen avanzando mediante el estudio, la práctica y la superación personal. La especie humana está protegida por una coalición de sus miembros más élite llamada los Illuminati.",
            belief_p3: "Cada ser humano es guiado por una brújula interior que apunta hacia la Luz, revelando verdad y dirección entre las decisiones. Todas las creencias espirituales humanas buscan en última instancia la Luz, de formas diferentes.",
            belief_p4: "Cada ser humano es parte de un diseño mayor y eterno — engranajes individuales en un reloj sin fin. Aunque nunca lo sepa, las acciones de una persona tienen el poder de cambiar el futuro del mundo entero.",
            members_kicker: "Personas de la Orden Illuminati", members_title_a: "VOCES DE", members_title_b: "NUESTROS MIEMBROS", members_sub: "Millones de personas de todos los ámbitos se han comprometido con la labor global de los Illuminati por el bien de la especie humana. Superando divisiones religiosas, geográficas o políticas, los seguidores se esfuerzan por formar un planeta donde todos, en todas partes, puedan vivir en abundancia.",
            benefits_kicker: "Beneficios de membresía", benefits_title_a: "A QUÉ SE DEDICAN", benefits_title_b: "LOS MIEMBROS", benefits_sub: "Los Illuminati son una organización poderosa y cuidadosamente protegida. Sus miembros se comprometen con tres propósitos, siempre al servicio de la especie humana.",
            benefit_wealth: "RIQUEZA", benefit_power: "PODER", benefit_fame: "FAMA",
            benefit_wealth_p: "Prepárate siempre. Vive este momento como si fuera tu último en esta tierra y adquiere ahora la máxima riqueza espiritual. Guiado por tu alma, trabajas hacia una abundancia de bienes valiosos — como una responsabilidad de crear bien para la humanidad, nunca como un fin en sí mismo.",
            benefit_power_p: "Es a través de la fe que pasamos de lo conocido a lo desconocido. Los miembros buscan influencia — económica, tecnológica y cultural — para que el dolor, la pena y el miedo sean eliminados, y todos conozcan la felicidad y la paz.",
            benefit_fame_p: "Quienes se dedican plenamente al avance de la humanidad ganan un nombre duradero. Una vida vivida por la especie es recordada con honor en tu comunidad, tu país y el mundo entero.",
            proc_kicker: "Procedimiento de membresía", proc_title_a: "CÓMO UNIRSE A", proc_sub: "La membresía está abierta a personas de todos los orígenes — damos la bienvenida a líderes empresariales, artistas, académicos, innovadores, políticos y visionarios de todo el mundo.",
            step1_title: "Envía tu solicitud", step1_p: "Envía tu solicitud a través del formulario oficial de esta página, con tu nombre, país y el motivo por el que buscas la Orden.", step2_title: "Revisión personal", step2_p: "Revisamos todas las solicitudes personalmente y contactamos directamente a los candidatos calificados. La membresía está abierta a personas de carácter, visión y compromiso excepcionales.", step3_title: "Haz el Juramento Eterno", step3_p: "Los candidatos aceptados se comprometen con el avance de la especie humana haciendo el Juramento Eterno — la primera promesa de los Illuminati.",
            cta_title_a: "¿ESTÁS LISTO PARA UNIRTE A<br />", cta_p: "La membresía en la Orden Illuminati está abierta a personas de carácter, visión y compromiso excepcionales con la especie humana.", cta_btn: "Comienza tu solicitud",
            form_name: "Nombre completo", form_email: "Correo electrónico", form_country: "País", form_country_select: "Selecciona tu país…", form_why: "¿Por qué buscas la Orden?", form_submit: "Enviar solicitud", form_note: "Al enviar se abre tu aplicación de correo con tu solicitud dirigida a la Orden. Todas las solicitudes se revisan personalmente.", float_join: "ÚNETE ✦", video_note: "Mira el video completo para comprender el verdadero propósito de las Élites Illuminati."
          },
          de: {
            topbar: "◆ Die offizielle Website des Illuminati-Ordens ◆ Globale Mitgliedschaft offen ◆",
            lang_label: "Sprache", nav_home: "Start", nav_about: "Über uns", nav_beliefs: "Unsere Überzeugungen", nav_members: "Mitglieder", nav_benefits: "Vorteile", nav_procedure: "Verfahren", nav_archives: "Archive", nav_contact: "Kontakt", nav_join: "Beitreten",
            hero_kicker: "Die offizielle Organisation", hero_welcome: "WILLKOMMEN BEIM", hero_order: "ORDEN", hero_lede: "Eine exklusive globale Bruderschaft von Staatsführern, Wirtschaftsgrößen, Innovatoren, Künstlern und Visionären, vereint durch ein einziges Ziel — den Fortschritt und den Schutz der Menschheit.", hero_join: "Dem Illuminati-Orden beitreten", learn_more: "Mehr erfahren",
            quote: "„Über allen Trennungen von Rasse, Nationalität oder Glauben — jedes Menschenleben hat den gleichen Wert. Der Illuminati-Orden existiert, um die Zukunft der gesamten Menschheit zu schützen.“",
            msg_kicker: "Offizielle Botschaft", msg_title_a: "EINE BOTSCHAFT VOM", msg_sub: "Sehen Sie die offizielle Einführung in den Illuminati-Orden — wer wir sind, wofür wir stehen und warum wir existieren.",
            intro_title: "EINE KURZE<br />EINFÜHRUNG IN<br />", intro_btn: "Entdecken Sie unseren Zweck", intro_p1: "Der Illuminati-Orden ist eine Eliteorganisation aus Staatsführern, Wirtschaftsgrößen, Innovatoren, Künstlern und anderen einflussreichen Mitgliedern, die sich einer Sache verschrieben haben — dem Wohlstand und dem Überleben der Menschheit.", intro_p2: "Unsere Koalition vereint Mitglieder aller politischen, religiösen und geografischen Hintergründe unter einem Leitprinzip: Das Wohlergehen der Menschheit steht über jedem Einzelnen, jeder Nation und jeder Ideologie.",
            oath_kicker: "Unsere Geschichte — Aus den Archiven", oath_title: "DER EWIGE EID DES<br />", oath_fear: "FÜRCHTE DICH NICHT!", oath_p1: "Seit unseren Anfängen haben sich die Mitglieder der Illuminati durch Verpflichtungseide dem Fortschritt der Menschheit gewidmet. Diese Gelübde sind eine zentrale Tradition, als schriftliche Verträge zwischen einer Person und der gesamten Menschheit.", oath_p2: "Das erste Gelübde der Illuminati heißt der Ewige Eid.",
            beliefs_strip: "Unsere Grundüberzeugungen", belief_pyramid: "Die Pyramide", belief_eye: "Das Auge", belief_light: "Das Licht", belief_circle: "Der Ewige Kreis",
            belief_p1: "Geld ist nicht die Wurzel allen Übels — Geld ist der Weg zu aller Freiheit. Das egoistische Streben nach Geld ist ein hohles Ziel, aber das Streben nach dem Guten, das Geld schaffen kann, ist eine der größten Verantwortungen der Menschheit.",
            belief_p2: "Die Menschen entwickeln sich rasch weiter und verbessern sich durch Studium, Übung und Selbstverbesserung. Die Menschheit wird von einer Koalition ihrer elitärsten Mitglieder beschützt — den Illuminati.",
            belief_p3: "Jeder Mensch wird von einem inneren Kompass geleitet, der auf das Licht zeigt und Wahrheit und Richtung in Entscheidungen offenbart. Alle spirituellen Überzeugungen suchen letztlich das Licht — nur in unterschiedlicher Form.",
            belief_p4: "Jeder Mensch ist Teil eines größeren, ewigen Plans — einzelne Zahnräder in einer Uhr ohne Ende. Auch wenn sie es nie erkennen, können die Handlungen eines Menschen die Zukunft der ganzen Welt verändern.",
            members_kicker: "Menschen des Illuminati-Ordens", members_title_a: "STIMMEN", members_title_b: "UNSERER MITGLIEDER", members_sub: "Millionen Menschen aus allen Lebensbereichen haben sich der globalen Arbeit der Illuminati für das Wohl der Menschheit verschrieben. Über alle religiösen, geografischen und politischen Trennungen hinweg streben die Anhänger einen Planeten an, auf dem alle Menschen überall in Fülle leben können.",
            benefits_kicker: "Mitgliedsvorteile", benefits_title_a: "WOFÜR SICH MITGLIEDER", benefits_title_b: "EINSETZEN", benefits_sub: "Die Illuminati sind eine mächtige und sorgfältig gehütete Organisation. Ihre Mitglieder verpflichten sich zu drei Zielen — immer im Dienst der Menschheit.",
            benefit_wealth: "REICHTUM", benefit_power: "MACHT", benefit_fame: "RUHM",
            benefit_wealth_p: "Sei immer vorbereitet. Lebe diesen Moment, als wäre er dein letzter auf dieser Erde, und erwerbe jetzt den größten spirituellen Reichtum. Geleitet von deiner Seele arbeitest du auf Fülle wertvoller Güter hin — als Verantwortung, Gutes für die Menschheit zu schaffen, niemals als Selbstzweck.",
            benefit_power_p: "Durch Glauben bewegen wir uns vom Bekannten zum Unbekannten. Mitglieder streben nach Einfluss — wirtschaftlich, technologisch und kulturell — damit Leid, Schmerz und Angst beseitigt werden und alle Glück und Frieden kennen.",
            benefit_fame_p: "Wer sich ganz dem Fortschritt der Menschheit widmet, verdient einen bleibenden Namen. Ein Leben für die Menschheit wird in deiner Gemeinschaft, deinem Land und der ganzen Welt in Ehren erinnert.",
            proc_kicker: "Mitgliedschaftsverfahren", proc_title_a: "SO TRETEN SIE BEI —", proc_sub: "Die Mitgliedschaft steht Menschen aller Hintergründe offen — wir begrüßen Wirtschaftsführer, Künstler, Akademiker, Innovatoren, Politiker und Visionäre aus aller Welt.",
            step1_title: "Reichen Sie Ihre Bewerbung ein", step1_p: "Senden Sie Ihre Bewerbung über das offizielle Formular auf dieser Seite, mit Ihrem Namen, Land und Ihrem Grund, den Orden zu suchen.", step2_title: "Persönliche Prüfung", step2_p: "Wir prüfen alle Bewerbungen persönlich und kontaktieren qualifizierte Kandidaten direkt. Die Mitgliedschaft steht Personen von außergewöhnlichem Charakter, Vision und Engagement offen.", step3_title: "Leisten Sie den Ewigen Eid", step3_p: "Angenommene Kandidaten verpflichten sich zum Fortschritt der Menschheit, indem sie den Ewigen Eid leisten — das erste Gelübde der Illuminati.",
            cta_title_a: "BEREIT, BEIZUTRETEN —<br />", cta_p: "Die Mitgliedschaft im Illuminati-Orden steht Personen von außergewöhnlichem Charakter, Vision und Engagement für die Menschheit offen.", cta_btn: "Bewerbung beginnen",
            form_name: "Vollständiger Name", form_email: "E-Mail-Adresse", form_country: "Land", form_country_select: "Wählen Sie Ihr Land…", form_why: "Warum suchen Sie den Orden?", form_submit: "Bewerbung absenden", form_note: "Beim Absenden öffnet sich Ihre E-Mail-App mit Ihrer an den Orden adressierten Bewerbung. Alle Bewerbungen werden persönlich geprüft.", float_join: "BEITRETEN ✦", video_note: "Sehen Sie das vollständige Video, um den wahren Zweck der Illuminati-Eliten zu verstehen."
          },
          it: {
            topbar: "◆ Il sito ufficiale dell'Ordine Illuminati ◆ Iscrizioni globali aperte ◆",
            lang_label: "Lingua", nav_home: "Home", nav_about: "Chi siamo", nav_beliefs: "Le nostre credenze", nav_members: "Membri", nav_benefits: "Benefici", nav_procedure: "Procedura", nav_archives: "Archivi", nav_contact: "Contatti", nav_join: "Unisciti",
            hero_kicker: "L'organizzazione ufficiale", hero_welcome: "BENVENUTO NELL'", hero_order: "ORDINE", hero_lede: "Una fratellanza globale esclusiva di leader mondiali, autorità economiche, innovatori, artisti e visionari uniti da un unico scopo — il progresso e la protezione della specie umana.", hero_join: "Unisciti all'Ordine Illuminati", learn_more: "Scopri di più",
            quote: "« Al di sopra di ogni divisione di razza, nazionalità o credo — ogni vita umana ha lo stesso valore. L'Ordine Illuminati esiste per proteggere il futuro di tutta la specie umana. »",
            msg_kicker: "Messaggio ufficiale", msg_title_a: "UN MESSAGGIO DALL'", msg_sub: "Guarda la presentazione ufficiale dell'Ordine Illuminati — chi siamo, cosa difendiamo e perché esistiamo.",
            intro_title: "UNA BREVE<br />INTRODUZIONE ALL'<br />", intro_btn: "Scopri il nostro scopo", intro_p1: "L'Ordine Illuminati è un'organizzazione d'élite composta da leader mondiali, autorità economiche, innovatori, artisti e altri membri influenti impegnati in una causa — la prosperità e la sopravvivenza dell'umanità.", intro_p2: "La nostra coalizione unisce membri di ogni provenienza politica, religiosa e geografica sotto un unico principio: il benessere della specie umana trascende ogni individuo, nazione o ideologia.",
            oath_kicker: "La nostra storia — Dagli archivi", oath_title: "IL GIURAMENTO ETERNO<br />DELL'", oath_fear: "NON TEMERE!", oath_p1: "Dalle nostre origini, i membri degli Illuminati si sono dedicati al progresso della specie umana con giuramenti di impegno. Queste promesse sono una tradizione centrale, contratti scritti tra una persona e tutta l'umanità.", oath_p2: "La prima promessa degli Illuminati si chiama Giuramento Eterno.",
            beliefs_strip: "Le nostre credenze fondamentali", belief_pyramid: "La Piramide", belief_eye: "L'Occhio", belief_light: "La Luce", belief_circle: "Il Cerchio Eterno",
            belief_p1: "Il denaro non è la radice di ogni male — il denaro è la via verso ogni libertà. La ricerca egoistica del denaro è un obiettivo vuoto, ma la ricerca del bene che il denaro può creare è una delle più grandi responsabilità dell'umanità.",
            belief_p2: "Gli esseri umani evolvono rapidamente e continuano a progredire con lo studio, la pratica e il miglioramento di sé. La specie umana è protetta da una coalizione dei suoi membri più élite chiamata Illuminati.",
            belief_p3: "Ogni essere umano è guidato da una bussola interiore che punta verso la Luce, rivelando verità e direzione nelle decisioni. Tutte le credenze spirituali cercano in definitiva la Luce, in forme diverse.",
            belief_p4: "Ogni essere umano è parte di un disegno più grande ed eterno — ingranaggi individuali in un orologio senza fine. Anche senza rendersene conto, le azioni di una persona possono cambiare il futuro del mondo intero.",
            members_kicker: "Persone dell'Ordine Illuminati", members_title_a: "VOCI DAI", members_title_b: "NOSTRI MEMBRI", members_sub: "Milioni di persone di ogni estrazione si sono impegnate nel lavoro globale degli Illuminati per il bene della specie umana. Superando divisioni religiose, geografiche o politiche, i seguaci cercano un pianeta dove tutti, ovunque, possano vivere in abbondanza.",
            benefits_kicker: "Benefici per i membri", benefits_title_a: "A COSA SI DEDICANO", benefits_title_b: "I MEMBRI", benefits_sub: "Gli Illuminati sono un'organizzazione potente e attentamente custodita. I suoi membri si impegnano in tre perseguimenti, sempre al servizio della specie umana.",
            benefit_wealth: "RICCHEZZA", benefit_power: "POTERE", benefit_fame: "FAMA",
            benefit_wealth_p: "Sii sempre pronto. Vivi questo momento come se fosse il tuo ultimo sulla terra e acquisisci ora la massima ricchezza spirituale. Guidato dalla tua anima, lavori verso un'abbondanza di beni preziosi — come responsabilità di creare bene per l'umanità, mai come fine a sé stessa.",
            benefit_power_p: "È attraverso la fede che passiamo dal noto all'ignoto. I membri cercano influenza — economica, tecnologica e culturale — affinché dolore e paura siano eliminati e tutti conoscano felicità e pace.",
            benefit_fame_p: "Chi si dedica pienamente al progresso dell'umanità guadagna un nome duraturo. Una vita vissuta per la specie è ricordata con onore nella tua comunità, nel tuo paese e nel mondo intero.",
            proc_kicker: "Procedura di iscrizione", proc_title_a: "COME UNIRSI ALL'", proc_sub: "L'iscrizione è aperta a persone di ogni provenienza — accogliamo leader aziendali, artisti, accademici, innovatori, politici e visionari da tutto il mondo.",
            step1_title: "Invia la tua candidatura", step1_p: "Invia la tua candidatura tramite il modulo ufficiale in questa pagina, con nome, paese e motivo per cui cerchi l'Ordine.", step2_title: "Revisione personale", step2_p: "Esaminiamo personalmente tutte le candidature e contattiamo direttamente i candidati qualificati. L'iscrizione è aperta a persone di carattere, visione e impegno eccezionali.", step3_title: "Pronuncia il Giuramento Eterno", step3_p: "I candidati accettati si impegnano per il progresso della specie umana pronunciando il Giuramento Eterno — la prima promessa degli Illuminati.",
            cta_title_a: "SEI PRONTO A UNIRTI<br />ALL'", cta_p: "L'iscrizione all'Ordine Illuminati è aperta a persone di carattere, visione e impegno eccezionali verso la specie umana.", cta_btn: "Inizia la candidatura",
            form_name: "Nome completo", form_email: "Indirizzo e-mail", form_country: "Paese", form_country_select: "Seleziona il tuo paese…", form_why: "Perché cerchi l'Ordine?", form_submit: "Invia candidatura", form_note: "L'invio apre la tua app e-mail con la candidatura indirizzata all'Ordine. Tutte le candidature sono esaminate personalmente.", float_join: "UNISCITI ✦", video_note: "Guarda il video completo per comprendere il vero scopo delle Élites Illuminati."
          },
          pt: {
            topbar: "◆ O site oficial da Ordem Illuminati ◆ Adesão global aberta ◆",
            lang_label: "Idioma", nav_home: "Início", nav_about: "Sobre nós", nav_beliefs: "Nossas crenças", nav_members: "Membros", nav_benefits: "Benefícios", nav_procedure: "Procedimento", nav_archives: "Arquivos", nav_contact: "Contacto", nav_join: "Junte-se",
            hero_kicker: "A organização oficial", hero_welcome: "BEM-VINDO À", hero_order: "ORDEM", hero_lede: "Uma irmandade global exclusiva de líderes mundiais, autoridades empresariais, inovadores, artistas e visionários unidos por um único propósito — o avanço e a proteção da espécie humana.", hero_join: "Juntar-se à Ordem Illuminati", learn_more: "Saber mais",
            quote: "« Acima de todas as divisões de raça, nacionalidade ou credo — cada vida humana tem o mesmo valor. A Ordem Illuminati existe para proteger o futuro de toda a espécie humana. »",
            msg_kicker: "Mensagem oficial", msg_title_a: "UMA MENSAGEM DA", msg_sub: "Assista à apresentação oficial da Ordem Illuminati — quem somos, o que defendemos e por que existimos.",
            intro_title: "UMA BREVE<br />INTRODUÇÃO À<br />", intro_btn: "Descubra o nosso propósito", intro_p1: "A Ordem Illuminati é uma organização de elite composta por líderes mundiais, autoridades empresariais, inovadores, artistas e outros membros influentes comprometidos com uma causa — a prosperidade e a sobrevivência da humanidade.", intro_p2: "A nossa coligação une membros de todas as origens políticas, religiosas e geográficas sob um princípio único: o bem-estar da espécie humana transcende qualquer indivíduo, nação ou ideologia.",
            oath_kicker: "A nossa história — Dos arquivos", oath_title: "O JURAMENTO ETERNO DA<br />", oath_fear: "NÃO TEMA!", oath_p1: "Desde as nossas origens, os membros Illuminati dedicaram-se ao avanço da espécie humana através de juramentos de compromisso. Estas promessas são uma tradição central, contratos escritos entre uma pessoa e toda a humanidade.", oath_p2: "A primeira promessa dos Illuminati chama-se Juramento Eterno.",
            beliefs_strip: "As nossas crenças fundamentais", belief_pyramid: "A Pirâmide", belief_eye: "O Olho", belief_light: "A Luz", belief_circle: "O Círculo Eterno",
            belief_p1: "O dinheiro não é a raiz de todo o mal — o dinheiro é a rota para toda a liberdade. A busca egoísta pelo dinheiro é um objetivo vazio, mas a busca pelo bem que o dinheiro pode criar é uma das maiores responsabilidades da humanidade.",
            belief_p2: "Os seres humanos evoluem rapidamente e continuam a avançar através do estudo, da prática e do autoaperfeiçoamento. A espécie humana é protegida por uma coligação dos seus membros mais elite chamada Illuminati.",
            belief_p3: "Cada ser humano é guiado por uma bússola interior que aponta para a Luz, revelando verdade e direção nas decisões. Todas as crenças espirituais procuram, em última análise, a Luz, de formas diferentes.",
            belief_p4: "Cada ser humano faz parte de um desígnio maior e eterno — engrenagens individuais num relógio sem fim. Mesmo sem perceber, as ações de uma pessoa podem mudar o futuro do mundo inteiro.",
            members_kicker: "Pessoas da Ordem Illuminati", members_title_a: "VOZES DOS", members_title_b: "NOSSOS MEMBROS", members_sub: "Milhões de pessoas de todas as origens comprometeram-se com o trabalho global dos Illuminati para o bem da espécie humana. Superando divisões religiosas, geográficas ou políticas, os seguidores esforçam-se por um planeta onde todos, em todo o lado, possam viver em abundância.",
            benefits_kicker: "Benefícios de membro", benefits_title_a: "AO QUE OS MEMBROS", benefits_title_b: "SE DEDICAM", benefits_sub: "Os Illuminati são uma organização poderosa e cuidadosamente protegida. Os seus membros comprometem-se com três objetivos, sempre ao serviço da espécie humana.",
            benefit_wealth: "RIQUEZA", benefit_power: "PODER", benefit_fame: "FAMA",
            benefit_wealth_p: "Esteja sempre preparado. Viva este momento como se fosse o seu último na terra e adquira agora a máxima riqueza espiritual. Guiado pela sua alma, trabalha para uma abundância de bens valiosos — como responsabilidade de criar bem para a humanidade, nunca como um fim em si.",
            benefit_power_p: "É através da fé que passamos do conhecido para o desconhecido. Os membros procuram influência — económica, tecnológica e cultural — para que a tristeza, a dor e o medo sejam eliminados e todos conheçam felicidade e paz.",
            benefit_fame_p: "Quem se dedica plenamente ao avanço da humanidade ganha um nome duradouro. Uma vida vivida pela espécie é lembrada com honra na sua comunidade, no seu país e no mundo inteiro.",
            proc_kicker: "Procedimento de adesão", proc_title_a: "COMO JUNTAR-SE À", proc_sub: "A adesão está aberta a pessoas de todas as origens — acolhemos líderes empresariais, artistas, académicos, inovadores, políticos e visionários de todo o mundo.",
            step1_title: "Envie a sua candidatura", step1_p: "Envie a sua candidatura através do formulário oficial nesta página, com o seu nome, país e o motivo pelo qual procura a Ordem.", step2_title: "Revisão pessoal", step2_p: "Revisamos todas as candidaturas pessoalmente e contactamos diretamente os candidatos qualificados. A adesão está aberta a pessoas de caráter, visão e compromisso excecionais.", step3_title: "Faça o Juramento Eterno", step3_p: "Os candidatos aceites comprometem-se com o avanço da espécie humana fazendo o Juramento Eterno — a primeira promessa dos Illuminati.",
            cta_title_a: "ESTÁ PRONTO PARA SE JUNTAR À<br />", cta_p: "A adesão à Ordem Illuminati está aberta a pessoas de caráter, visão e compromisso excecionais com a espécie humana.", cta_btn: "Comece a sua candidatura",
            form_name: "Nome completo", form_email: "Endereço de e-mail", form_country: "País", form_country_select: "Selecione o seu país…", form_why: "Por que procura a Ordem?", form_submit: "Enviar candidatura", form_note: "Ao enviar, abre a sua aplicação de e-mail com a candidatura endereçada à Ordem. Todas as candidaturas são revistas pessoalmente.", float_join: "JUNTE-SE ✦", video_note: "Assista ao vídeo completo para compreender o verdadeiro propósito das Elites Illuminati."
          },
          nl: {
            topbar: "◆ De officiële website van de Illuminati Orde ◆ Wereldwijd lidmaatschap open ◆",
            lang_label: "Taal", nav_home: "Home", nav_about: "Over ons", nav_beliefs: "Onze overtuigingen", nav_members: "Leden", nav_benefits: "Voordelen", nav_procedure: "Procedure", nav_archives: "Archieven", nav_contact: "Contact", nav_join: "Word lid",
            hero_kicker: "De officiële organisatie", hero_welcome: "WELKOM BIJ", hero_order: "DE ORDE", hero_lede: "Een exclusieve wereldwijde broederschap van wereldleiders, zakelijke autoriteiten, innovators, kunstenaars en visionairs, verenigd door één doel — de vooruitgang en bescherming van de menselijke soort.", hero_join: "Word lid van de Illuminati Orde", learn_more: "Meer informatie",
            quote: "« Boven alle verdeeldheid van ras, nationaliteit of geloof — elk mensenleven heeft dezelfde waarde. De Illuminati Orde bestaat om de toekomst van de hele menselijke soort te beschermen. »",
            msg_kicker: "Officieel bericht", msg_title_a: "EEN BERICHT VAN", msg_sub: "Bekijk de officiële introductie van de Illuminati Orde — wie we zijn, waar we voor staan en waarom we bestaan.",
            intro_title: "EEN KORTE<br />INTRODUCTIE TOT<br />", intro_btn: "Ontdek ons doel", intro_p1: "De Illuminati Orde is een eliteorganisatie van wereldleiders, zakelijke autoriteiten, innovators, kunstenaars en andere invloedrijke leden, toegewijd aan één zaak — de welvaart en het voortbestaan van de mensheid.", intro_p2: "Onze coalitie verenigt leden van alle politieke, religieuze en geografische achtergronden onder één leidend principe: het welzijn van de menselijke soort overstijgt elk individu, elke natie en elke ideologie.",
            oath_kicker: "Ons verhaal — Uit de archieven", oath_title: "DE EEUWIGE EED VAN<br />", oath_fear: "VREES NIET!", oath_p1: "Sinds onze oorsprong hebben Illuminati-leden zich toegewijd aan de vooruitgang van de menselijke soort door eden van toewijding. Deze beloften zijn een kerntraditie, geschreven contracten tussen één persoon en de hele mensheid.", oath_p2: "De eerste belofte van de Illuminati heet de Eeuwige Eed.",
            beliefs_strip: "Onze kernovertuigingen", belief_pyramid: "De Piramide", belief_eye: "Het Oog", belief_light: "Het Licht", belief_circle: "De Eeuwige Cirkel",
            belief_p1: "Geld is niet de wortel van alle kwaad — geld is de weg naar alle vrijheid. Het egoïstische najagen van geld is een hol doel, maar het najagen van het goede dat geld kan creëren is een van de grootste verantwoordelijkheden van de mensheid.",
            belief_p2: "Mensen evolueren in snel tempo en blijven vooruitgaan door studie, oefening en zelfverbetering. De menselijke soort wordt bewaakt door een coalitie van haar meest elite leden, de Illuminati.",
            belief_p3: "Elke mens wordt geleid door een innerlijk kompas dat naar het Licht wijst en waarheid en richting onthult bij beslissingen. Alle spirituele overtuigingen zoeken uiteindelijk het Licht, alleen in verschillende vormen.",
            belief_p4: "Elke mens is onderdeel van een groter, eeuwig ontwerp — individuele tandwielen in een klok zonder einde. Zonder het te beseffen kunnen de daden van één persoon de toekomst van de hele wereld veranderen.",
            members_kicker: "Mensen van de Illuminati Orde", members_title_a: "STEMMEN VAN", members_title_b: "ONZE LEDEN", members_sub: "Miljoenen mensen uit alle lagen van de bevolking hebben zich toegewijd aan het wereldwijde werk van de Illuminati voor het welzijn van de menselijke soort. Voorbij alle religieuze, geografische en politieke verdeeldheid streven volgers naar een planeet waar iedereen overal in overvloed kan leven.",
            benefits_kicker: "Lidmaatschapsvoordelen", benefits_title_a: "WAARAAN LEDEN ZICH", benefits_title_b: "TOEWIJDEN", benefits_sub: "De Illuminati is een machtige en zorgvuldig bewaakte organisatie. Haar leden wijden zich aan drie doelen, altijd in dienst van de menselijke soort.",
            benefit_wealth: "RIJKDOM", benefit_power: "MACHT", benefit_fame: "ROEM",
            benefit_wealth_p: "Wees altijd voorbereid. Beleef dit moment alsof het je laatste op aarde is en verwerf nu de maximale spirituele rijkdom. Geleid door je ziel werk je aan een overvloed aan waardevolle bezittingen — als verantwoordelijkheid om goed te creëren voor de mensheid, nooit als doel op zich.",
            benefit_power_p: "Door geloof bewegen we van het bekende naar het onbekende. Leden zoeken invloed — economisch, technologisch en cultureel — zodat verdriet, pijn en angst worden weggenomen en iedereen geluk en vrede kent.",
            benefit_fame_p: "Wie zich volledig wijdt aan de vooruitgang van de mensheid verdient een blijvende naam. Een leven geleefd voor de soort wordt met eer herdacht in je gemeenschap, je land en de hele wereld.",
            proc_kicker: "Lidmaatschapsprocedure", proc_title_a: "HOE WORD JE LID VAN", proc_sub: "Lidmaatschap staat open voor mensen van alle achtergronden — we verwelkomen zakelijke leiders, kunstenaars, academici, innovators, politici en visionairs van over de hele wereld.",
            step1_title: "Dien je aanvraag in", step1_p: "Stuur je aanvraag via het officiële formulier op deze pagina, met je naam, land en je reden om de Orde te zoeken.", step2_title: "Persoonlijke beoordeling", step2_p: "We beoordelen alle aanvragen persoonlijk en nemen rechtstreeks contact op met gekwalificeerde kandidaten. Lidmaatschap staat open voor personen met uitzonderlijk karakter, visie en toewijding.", step3_title: "Leg de Eeuwige Eed af", step3_p: "Geaccepteerde kandidaten verbinden zich aan de vooruitgang van de menselijke soort door de Eeuwige Eed af te leggen — de eerste belofte van de Illuminati.",
            cta_title_a: "BEN JE KLAAR OM LID TE WORDEN VAN<br />", cta_p: "Lidmaatschap van de Illuminati Orde staat open voor personen met uitzonderlijk karakter, visie en toewijding aan de menselijke soort.", cta_btn: "Begin je aanvraag",
            form_name: "Volledige naam", form_email: "E-mailadres", form_country: "Land", form_country_select: "Selecteer je land…", form_why: "Waarom zoek je de Orde?", form_submit: "Aanvraag indienen", form_note: "Bij verzenden opent je e-mailapp met je aanvraag gericht aan de Orde. Alle aanvragen worden persoonlijk beoordeeld.", float_join: "WORD LID ✦", video_note: "Bekijk de volledige video om het ware doel van de Illuminati-elites te begrijpen."
          }
        };
        // Extra translations for sections that previously had no language keys
        // (stats, member voices, worldwide / info block, country names, footer).
        var EXTRA = {
          fr: {
            brand_sub: "Site officiel", video_title: "Publicité TV Illuminati - Officielle", video_msg_title: "La présentation officielle",
            video_msg_p1: "Les Illuminati sont une organisation d'élite de dirigeants mondiaux, d'autorités économiques, d'innovateurs, d'artistes et d'autres membres influents de cette planète. Notre coalition unit des personnalités de tous horizons politiques, religieux et géographiques pour faire progresser la prospérité de l'espèce humaine dans son ensemble.",
            video_msg_p2: "N'ayez pas peur pour l'avenir de l'humanité : les humains évoluent rapidement, et l'espèce humaine est protégée par une coalition de ses membres les plus éminents. Chaque humain est guidé par une boussole intérieure qui pointe vers la Lumière.",
            stat_countries: "Pays<br />représentés", stat_global: "MONDIAL", stat_network: "Réseau d'élites", stat_one: "UNE", stat_species: "Espèce humaine", stat_founding: "L'année de<br />notre fondation",
            member1_quote: "« L'Ordre Illuminati m'a orienté vers un but plus grand que moi-même. Chaque être humain mérite mieux — et cet Ordre existe pour l'apporter. »",
            member2_quote: "« J'ai des collègues dans le monde entier qui partagent une même vision : le bien-être de l'espèce humaine dépasse toute nation et toute idéologie. »",
            member3_quote: "« Depuis que j'ai rejoint l'Ordre Illuminati, j'ai trouvé une direction, une discipline et une fraternité qui s'étend sur tout le globe et partage votre vision. »",
            info_title: "L'Ordre Illuminati — Organisation officielle",
            info_p1: "L'Ordre Illuminati est l'organisation officielle des personnes d'élite engagées pour le progrès de l'espèce humaine. Notre seul objectif est le progrès humain.",
            info_how_title: "Comment rejoindre l'Ordre Illuminati",
            info_how_p: "Pour rejoindre l'Ordre Illuminati, envoyez simplement votre candidature via notre formulaire officiel. Nous examinons toutes les candidatures personnellement et contactons directement les candidats qualifiés. L'adhésion est ouverte aux personnes de tous horizons — dirigeants d'entreprise, artistes, universitaires, innovateurs, politiciens et visionnaires du monde entier.",
            info_world_title: "L'Ordre Illuminati dans le monde",
            info_world_p: "L'Ordre Illuminati compte des membres aux États-Unis, au Royaume-Uni, au Canada, en Australie et dans toute l'Europe, notamment en France, en Allemagne, en Italie, en Espagne, aux Pays-Bas, en Belgique, en Suisse, en Suède, en Norvège et au Danemark. Notre réseau continue de grandir à mesure que de nouvelles personnes découvrent notre organisation.",
            info_call: "Contactez-nous — ",
            chip_usa: "États-Unis", chip_uk: "Royaume-Uni", chip_canada: "Canada", chip_australia: "Australie", chip_france: "France", chip_germany: "Allemagne", chip_italy: "Italie", chip_spain: "Espagne", chip_netherlands: "Pays-Bas", chip_belgium: "Belgique", chip_switzerland: "Suisse", chip_sweden: "Suède", chip_norway: "Norvège", chip_denmark: "Danemark",
            country_us: "États-Unis", country_uk: "Royaume-Uni", country_canada: "Canada", country_au: "Australie", country_fr: "France", country_de: "Allemagne", country_it: "Italie", country_es: "Espagne", country_nl: "Pays-Bas", country_be: "Belgique", country_ch: "Suisse", country_se: "Suède", country_no: "Norvège", country_dk: "Danemark",
            form_country_other: "Autre",
            foot_brand_p: "Le site officiel de l'Ordre Illuminati — une organisation mondiale qui unit des dirigeants influents, des innovateurs et des visionnaires pour le progrès de l'humanité.",
            foot_org_title: "Organisation", foot_members_link: "Nos membres", foot_members_title: "Membres",
            foot_usa_chapter: "Chapitre États-Unis", foot_uk_chapter: "Chapitre Royaume-Uni", foot_canada_chapter: "Chapitre Canada", foot_australia_chapter: "Chapitre Australie",
            foot_info_title: "Informations", foot_contact: "Contactez-nous", foot_privacy: "Politique de confidentialité", foot_terms: "Conditions d'utilisation", foot_privacy_short: "Confidentialité", foot_terms_short: "Conditions",
            foot_note: "L'Ordre Illuminati est une organisation indépendante.", doc_title: "L'Ordre Illuminati — Site officiel"
          },
          es: {
            brand_sub: "Sitio web oficial", video_title: "Anuncio de TV Illuminati - Oficial", video_msg_title: "La presentación oficial",
            video_msg_p1: "Los Illuminati son una organización de élite de líderes mundiales, autoridades empresariales, innovadores, artistas y otros miembros influyentes de este planeta. Nuestra coalición une a personas de todos los orígenes políticos, religiosos y geográficos para impulsar la prosperidad de la especie humana en su conjunto.",
            video_msg_p2: "No temas por el futuro de la humanidad: los seres humanos evolucionan rápidamente y la especie humana está protegida por una coalición de sus miembros más élite. Cada ser humano es guiado por una brújula interior que apunta hacia la Luz.",
            stat_countries: "Países<br />representados", stat_global: "GLOBAL", stat_network: "Red de élites", stat_one: "UNA", stat_species: "Especie humana", stat_founding: "El año de<br />nuestra fundación",
            member1_quote: "« La Orden Illuminati me señaló un propósito mayor que yo mismo. Todo ser humano merece algo mejor — y esta Orden existe para lograrlo. »",
            member2_quote: "« Tengo colegas en todo el mundo que comparten una visión: que el bienestar de la especie humana trasciende cualquier nación o ideología. »",
            member3_quote: "« Desde que me uní a la Orden Illuminati, he encontrado dirección, disciplina y una hermandad que abarca todo el mundo y comparte tu visión. »",
            info_title: "La Orden Illuminati — Organización oficial",
            info_p1: "La Orden Illuminati es la organización oficial de personas de élite comprometidas con el avance de la especie humana. Nuestro único enfoque es el progreso humano.",
            info_how_title: "Cómo unirse a la Orden Illuminati",
            info_how_p: "Para unirte a la Orden Illuminati, simplemente envía tu solicitud a través de nuestro formulario oficial. Revisamos todas las solicitudes personalmente y contactamos directamente a los candidatos calificados. La membresía está abierta a personas de todos los orígenes: líderes empresariales, artistas, académicos, innovadores, políticos y visionarios de todo el mundo.",
            info_world_title: "La Orden Illuminati en el mundo",
            info_world_p: "La Orden Illuminati tiene miembros en EE. UU., Reino Unido, Canadá, Australia y en toda Europa, incluidos Francia, Alemania, Italia, España, Países Bajos, Bélgica, Suiza, Suecia, Noruega y Dinamarca. Nuestra red sigue creciendo a medida que más personas con propósito descubren nuestra organización.",
            info_call: "Contáctanos — ",
            chip_usa: "EE. UU.", chip_uk: "Reino Unido", chip_canada: "Canadá", chip_australia: "Australia", chip_france: "Francia", chip_germany: "Alemania", chip_italy: "Italia", chip_spain: "España", chip_netherlands: "Países Bajos", chip_belgium: "Bélgica", chip_switzerland: "Suiza", chip_sweden: "Suecia", chip_norway: "Noruega", chip_denmark: "Dinamarca",
            country_us: "Estados Unidos", country_uk: "Reino Unido", country_canada: "Canadá", country_au: "Australia", country_fr: "Francia", country_de: "Alemania", country_it: "Italia", country_es: "España", country_nl: "Países Bajos", country_be: "Bélgica", country_ch: "Suiza", country_se: "Suecia", country_no: "Noruega", country_dk: "Dinamarca",
            form_country_other: "Otro",
            foot_brand_p: "El sitio web oficial de la Orden Illuminati — una organización global que une a líderes influyentes, innovadores y visionarios para el avance de la humanidad.",
            foot_org_title: "Organización", foot_members_link: "Nuestros miembros", foot_members_title: "Miembros",
            foot_usa_chapter: "Capítulo EE. UU.", foot_uk_chapter: "Capítulo Reino Unido", foot_canada_chapter: "Capítulo Canadá", foot_australia_chapter: "Capítulo Australia",
            foot_info_title: "Información", foot_contact: "Contáctanos", foot_privacy: "Política de privacidad", foot_terms: "Términos de uso", foot_privacy_short: "Privacidad", foot_terms_short: "Términos",
            foot_note: "La Orden Illuminati es una organización independiente.", doc_title: "La Orden Illuminati — Sitio web oficial"
          },
          de: {
            brand_sub: "Offizielle Website", video_title: "Illuminati TV-Werbung - Offiziell", video_msg_title: "Die offizielle Einführung",
            video_msg_p1: "Die Illuminati sind eine Eliteorganisation aus Staatsführern, Wirtschaftsgrößen, Innovatoren, Künstlern und anderen einflussreichen Mitgliedern dieses Planeten. Unsere Koalition vereint Einflussreiche aller politischen, religiösen und geografischen Hintergründe, um den Wohlstand der Menschheit als Ganzes zu fördern.",
            video_msg_p2: "Fürchte dich nicht um die Zukunft der Menschheit: Die Menschen entwickeln sich rasch weiter, und die Menschheit wird von einer Koalition ihrer elitärsten Mitglieder beschützt. Jeder Mensch wird von einem inneren Kompass geleitet, der auf das Licht zeigt.",
            stat_countries: "Vertretene<br />Länder", stat_global: "GLOBAL", stat_network: "Netzwerk der Eliten", stat_one: "EINE", stat_species: "Menschliche Spezies", stat_founding: "Das Jahr<br />unserer Gründung",
            member1_quote: "„Der Illuminati-Orden hat mir einen Zweck gezeigt, der größer ist als ich selbst. Jeder Mensch verdient Besseres — und dieser Orden existiert, um es zu bringen.“",
            member2_quote: "„Ich habe Kollegen auf der ganzen Welt, die eine Vision teilen: Das Wohlergehen der Menschheit steht über jeder Nation und jeder Ideologie.“",
            member3_quote: "„Seit ich dem Illuminati-Orden beigetreten bin, habe ich Richtung, Disziplin und eine Bruderschaft gefunden, die den Globus umspannt und Ihre Vision teilt.“",
            info_title: "Der Illuminati-Orden — Offizielle Organisation",
            info_p1: "Der Illuminati-Orden ist die offizielle Organisation für Elitepersonen, die sich dem Fortschritt der Menschheit verschrieben haben. Unser einziger Fokus ist der menschliche Fortschritt.",
            info_how_title: "So treten Sie dem Illuminati-Orden bei",
            info_how_p: "Um dem Illuminati-Orden beizutreten, reichen Sie einfach Ihre Bewerbung über unser offizielles Formular ein. Wir prüfen alle Bewerbungen persönlich und kontaktieren qualifizierte Kandidaten direkt. Die Mitgliedschaft steht Menschen aller Hintergründe offen — Wirtschaftsführer, Künstler, Akademiker, Innovatoren, Politiker und Visionäre aus aller Welt.",
            info_world_title: "Der Illuminati-Orden weltweit",
            info_world_p: "Der Illuminati-Orden hat Mitglieder in den USA, im Vereinigten Königreich, in Kanada, Australien und in ganz Europa, darunter Frankreich, Deutschland, Italien, Spanien, die Niederlande, Belgien, die Schweiz, Schweden, Norwegen und Dänemark. Unser Netzwerk wächst weiter, da immer mehr zielstrebige Menschen unsere Organisation entdecken.",
            info_call: "Kontakt — ",
            chip_usa: "USA", chip_uk: "Vereinigtes Königreich", chip_canada: "Kanada", chip_australia: "Australien", chip_france: "Frankreich", chip_germany: "Deutschland", chip_italy: "Italien", chip_spain: "Spanien", chip_netherlands: "Niederlande", chip_belgium: "Belgien", chip_switzerland: "Schweiz", chip_sweden: "Schweden", chip_norway: "Norwegen", chip_denmark: "Dänemark",
            country_us: "Vereinigte Staaten", country_uk: "Vereinigtes Königreich", country_canada: "Kanada", country_au: "Australien", country_fr: "Frankreich", country_de: "Deutschland", country_it: "Italien", country_es: "Spanien", country_nl: "Niederlande", country_be: "Belgien", country_ch: "Schweiz", country_se: "Schweden", country_no: "Norwegen", country_dk: "Dänemark",
            form_country_other: "Andere",
            foot_brand_p: "Die offizielle Website des Illuminati-Ordens — eine globale Organisation, die einflussreiche Führer, Innovatoren und Visionäre für den Fortschritt der Menschheit vereint.",
            foot_org_title: "Organisation", foot_members_link: "Unsere Mitglieder", foot_members_title: "Mitglieder",
            foot_usa_chapter: "USA-Kapitel", foot_uk_chapter: "UK-Kapitel", foot_canada_chapter: "Kanada-Kapitel", foot_australia_chapter: "Australien-Kapitel",
            foot_info_title: "Informationen", foot_contact: "Kontakt", foot_privacy: "Datenschutzrichtlinie", foot_terms: "Nutzungsbedingungen", foot_privacy_short: "Datenschutz", foot_terms_short: "Bedingungen",
            foot_note: "Der Illuminati-Orden ist eine unabhängige Organisation.", doc_title: "Der Illuminati-Orden — Offizielle Website"
          },
          it: {
            brand_sub: "Sito ufficiale", video_title: "Spot TV Illuminati - Ufficiale", video_msg_title: "La presentazione ufficiale",
            video_msg_p1: "Gli Illuminati sono un'organizzazione d'élite di leader mondiali, autorità economiche, innovatori, artisti e altri membri influenti di questo pianeta. La nostra coalizione unisce persone di ogni provenienza politica, religiosa e geografica per promuovere la prosperità della specie umana nel suo insieme.",
            video_msg_p2: "Non temere per il futuro dell'umanità: gli esseri umani evolvono rapidamente e la specie umana è protetta da una coalizione dei suoi membri più élite. Ogni essere umano è guidato da una bussola interiore che punta verso la Luce.",
            stat_countries: "Paesi<br />rappresentati", stat_global: "GLOBALE", stat_network: "Rete di élite", stat_one: "UNA", stat_species: "Specie umana", stat_founding: "L'anno della<br />nostra fondazione",
            member1_quote: "« L'Ordine Illuminati mi ha indicato uno scopo più grande di me stesso. Ogni essere umano merita di meglio — e questo Ordine esiste per realizzarlo. »",
            member2_quote: "« Ho colleghi in tutto il mondo che condividono una visione: il benessere della specie umana trascende ogni nazione o ideologia. »",
            member3_quote: "« Da quando sono entrato nell'Ordine Illuminati, ho trovato direzione, disciplina e una fratellanza che abbraccia il mondo e condivide la tua visione. »",
            info_title: "L'Ordine Illuminati — Organizzazione ufficiale",
            info_p1: "L'Ordine Illuminati è l'organizzazione ufficiale per le persone d'élite impegnate nel progresso della specie umana. Il nostro unico obiettivo è il progresso umano.",
            info_how_title: "Come unirsi all'Ordine Illuminati",
            info_how_p: "Per unirti all'Ordine Illuminati, invia semplicemente la tua candidatura tramite il nostro modulo ufficiale. Esaminiamo personalmente tutte le candidature e contattiamo direttamente i candidati qualificati. L'iscrizione è aperta a persone di ogni provenienza — leader aziendali, artisti, accademici, innovatori, politici e visionari da tutto il mondo.",
            info_world_title: "L'Ordine Illuminati nel mondo",
            info_world_p: "L'Ordine Illuminati ha membri negli USA, nel Regno Unito, in Canada, in Australia e in tutta Europa, inclusi Francia, Germania, Italia, Spagna, Paesi Bassi, Belgio, Svizzera, Svezia, Norvegia e Danimarca. La nostra rete continua a crescere man mano che più persone scoprono la nostra organizzazione.",
            info_call: "Contattaci — ",
            chip_usa: "USA", chip_uk: "Regno Unito", chip_canada: "Canada", chip_australia: "Australia", chip_france: "Francia", chip_germany: "Germania", chip_italy: "Italia", chip_spain: "Spagna", chip_netherlands: "Paesi Bassi", chip_belgium: "Belgio", chip_switzerland: "Svizzera", chip_sweden: "Svezia", chip_norway: "Norvegia", chip_denmark: "Danimarca",
            country_us: "Stati Uniti", country_uk: "Regno Unito", country_canada: "Canada", country_au: "Australia", country_fr: "Francia", country_de: "Germania", country_it: "Italia", country_es: "Spagna", country_nl: "Paesi Bassi", country_be: "Belgio", country_ch: "Svizzera", country_se: "Svezia", country_no: "Norvegia", country_dk: "Danimarca",
            form_country_other: "Altro",
            foot_brand_p: "Il sito ufficiale dell'Ordine Illuminati — un'organizzazione globale che unisce leader influenti, innovatori e visionari per il progresso dell'umanità.",
            foot_org_title: "Organizzazione", foot_members_link: "I nostri membri", foot_members_title: "Membri",
            foot_usa_chapter: "Capitolo USA", foot_uk_chapter: "Capitolo Regno Unito", foot_canada_chapter: "Capitolo Canada", foot_australia_chapter: "Capitolo Australia",
            foot_info_title: "Informazioni", foot_contact: "Contattaci", foot_privacy: "Informativa sulla privacy", foot_terms: "Termini di utilizzo", foot_privacy_short: "Privacy", foot_terms_short: "Termini",
            foot_note: "L'Ordine Illuminati è un'organizzazione indipendente.", doc_title: "L'Ordine Illuminati — Sito ufficiale"
          },
          pt: {
            brand_sub: "Site oficial", video_title: "Anúncio de TV Illuminati - Oficial", video_msg_title: "A apresentação oficial",
            video_msg_p1: "Os Illuminati são uma organização de elite de líderes mundiais, autoridades empresariais, inovadores, artistas e outros membros influentes deste planeta. A nossa coligação une influenciadores de todas as origens políticas, religiosas e geográficas para promover a prosperidade da espécie humana como um todo.",
            video_msg_p2: "Não tema pelo futuro da humanidade: os seres humanos evoluem rapidamente e a espécie humana é protegida por uma coligação dos seus membros mais elite. Cada ser humano é guiado por uma bússola interior que aponta para a Luz.",
            stat_countries: "Países<br />representados", stat_global: "GLOBAL", stat_network: "Rede de elites", stat_one: "UMA", stat_species: "Espécie humana", stat_founding: "O ano da<br />nossa fundação",
            member1_quote: "« A Ordem Illuminati apontou-me um propósito maior do que eu próprio. Todo o ser humano merece melhor — e esta Ordem existe para o concretizar. »",
            member2_quote: "« Tenho colegas em todo o mundo que partilham uma visão: o bem-estar da espécie humana transcende qualquer nação ou ideologia. »",
            member3_quote: "« Desde que me juntei à Ordem Illuminati, encontrei direção, disciplina e uma irmandade que abrange o globo e partilha a sua visão. »",
            info_title: "A Ordem Illuminati — Organização oficial",
            info_p1: "A Ordem Illuminati é a organização oficial para pessoas de elite comprometidas com o avanço da espécie humana. O nosso único foco é o progresso humano.",
            info_how_title: "Como juntar-se à Ordem Illuminati",
            info_how_p: "Para se juntar à Ordem Illuminati, basta enviar a sua candidatura através do nosso formulário oficial. Revisamos todas as candidaturas pessoalmente e contactamos diretamente os candidatos qualificados. A adesão está aberta a pessoas de todas as origens — líderes empresariais, artistas, académicos, inovadores, políticos e visionários de todo o mundo.",
            info_world_title: "A Ordem Illuminati no mundo",
            info_world_p: "A Ordem Illuminati tem membros nos EUA, Reino Unido, Canadá, Austrália e em toda a Europa, incluindo França, Alemanha, Itália, Espanha, Países Baixos, Bélgica, Suíça, Suécia, Noruega e Dinamarca. A nossa rede continua a crescer à medida que mais pessoas descobrem a nossa organização.",
            info_call: "Contacte-nos — ",
            chip_usa: "EUA", chip_uk: "Reino Unido", chip_canada: "Canadá", chip_australia: "Austrália", chip_france: "França", chip_germany: "Alemanha", chip_italy: "Itália", chip_spain: "Espanha", chip_netherlands: "Países Baixos", chip_belgium: "Bélgica", chip_switzerland: "Suíça", chip_sweden: "Suécia", chip_norway: "Noruega", chip_denmark: "Dinamarca",
            country_us: "Estados Unidos", country_uk: "Reino Unido", country_canada: "Canadá", country_au: "Austrália", country_fr: "França", country_de: "Alemanha", country_it: "Itália", country_es: "Espanha", country_nl: "Países Baixos", country_be: "Bélgica", country_ch: "Suíça", country_se: "Suécia", country_no: "Noruega", country_dk: "Dinamarca",
            form_country_other: "Outro",
            foot_brand_p: "O site oficial da Ordem Illuminati — uma organização global que une líderes influentes, inovadores e visionários para o avanço da humanidade.",
            foot_org_title: "Organização", foot_members_link: "Os nossos membros", foot_members_title: "Membros",
            foot_usa_chapter: "Capítulo EUA", foot_uk_chapter: "Capítulo Reino Unido", foot_canada_chapter: "Capítulo Canadá", foot_australia_chapter: "Capítulo Austrália",
            foot_info_title: "Informações", foot_contact: "Contacte-nos", foot_privacy: "Política de privacidade", foot_terms: "Termos de utilização", foot_privacy_short: "Privacidade", foot_terms_short: "Termos",
            foot_note: "A Ordem Illuminati é uma organização independente.", doc_title: "A Ordem Illuminati — Site oficial"
          },
          nl: {
            brand_sub: "Officiële website", video_title: "Illuminati TV-reclame - Officieel", video_msg_title: "De officiële introductie",
            video_msg_p1: "De Illuminati is een eliteorganisatie van wereldleiders, zakelijke autoriteiten, innovators, kunstenaars en andere invloedrijke leden van deze planeet. Onze coalitie verenigt beïnvloeders van alle politieke, religieuze en geografische achtergronden om de welvaart van de menselijke soort als geheel te bevorderen.",
            video_msg_p2: "Vrees niet voor de toekomst van de mensheid: mensen evolueren in snel tempo en de menselijke soort wordt bewaakt door een coalitie van haar meest elite leden. Elke mens wordt geleid door een innerlijk kompas dat naar het Licht wijst.",
            stat_countries: "Vertegenwoordigde<br />landen", stat_global: "WERELDWIJD", stat_network: "Netwerk van elites", stat_one: "ÉÉN", stat_species: "Menselijke soort", stat_founding: "Het jaar van<br />onze oprichting",
            member1_quote: "« De Illuminati Orde wees mij op een doel dat groter is dan mijzelf. Elk mens verdient beter — en deze Orde bestaat om dat te leveren. »",
            member2_quote: "« Ik heb collega's over de hele wereld die één visie delen: het welzijn van de menselijke soort overstijgt elke natie en elke ideologie. »",
            member3_quote: "« Sinds ik lid ben van de Illuminati Orde, heb ik richting, discipline en een broederschap gevonden die de hele wereld omspant en uw visie deelt. »",
            info_title: "De Illuminati Orde — Officiële organisatie",
            info_p1: "De Illuminati Orde is de officiële organisatie voor elitepersonen die zich inzetten voor de vooruitgang van de menselijke soort. Onze enige focus is menselijke vooruitgang.",
            info_how_title: "Hoe word je lid van de Illuminati Orde",
            info_how_p: "Om lid te worden van de Illuminati Orde, dien je eenvoudig je aanvraag in via ons officiële formulier. We beoordelen alle aanvragen persoonlijk en nemen rechtstreeks contact op met gekwalificeerde kandidaten. Lidmaatschap staat open voor mensen van alle achtergronden — zakelijke leiders, kunstenaars, academici, innovators, politici en visionairs van over de hele wereld.",
            info_world_title: "De Illuminati Orde wereldwijd",
            info_world_p: "De Illuminati Orde heeft leden in de VS, het VK, Canada, Australië en in heel Europa, waaronder Frankrijk, Duitsland, Italië, Spanje, Nederland, België, Zwitserland, Zweden, Noorwegen en Denemarken. Ons netwerk blijft groeien naarmate meer doelgerichte mensen onze organisatie ontdekken.",
            info_call: "Contact — ",
            chip_usa: "VS", chip_uk: "Verenigd Koninkrijk", chip_canada: "Canada", chip_australia: "Australië", chip_france: "Frankrijk", chip_germany: "Duitsland", chip_italy: "Italië", chip_spain: "Spanje", chip_netherlands: "Nederland", chip_belgium: "België", chip_switzerland: "Zwitserland", chip_sweden: "Zweden", chip_norway: "Noorwegen", chip_denmark: "Denemarken",
            country_us: "Verenigde Staten", country_uk: "Verenigd Koninkrijk", country_canada: "Canada", country_au: "Australië", country_fr: "Frankrijk", country_de: "Duitsland", country_it: "Italië", country_es: "Spanje", country_nl: "Nederland", country_be: "België", country_ch: "Zwitserland", country_se: "Zweden", country_no: "Noorwegen", country_dk: "Denemarken",
            form_country_other: "Anders",
            foot_brand_p: "De officiële website van de Illuminati Orde — een wereldwijde organisatie die invloedrijke leiders, innovators en visionairs verenigt voor de vooruitgang van de mensheid.",
            foot_org_title: "Organisatie", foot_members_link: "Onze leden", foot_members_title: "Leden",
            foot_usa_chapter: "VS-hoofdstuk", foot_uk_chapter: "VK-hoofdstuk", foot_canada_chapter: "Canada-hoofdstuk", foot_australia_chapter: "Australië-hoofdstuk",
            foot_info_title: "Informatie", foot_contact: "Neem contact op", foot_privacy: "Privacybeleid", foot_terms: "Gebruiksvoorwaarden", foot_privacy_short: "Privacy", foot_terms_short: "Voorwaarden",
            foot_note: "De Illuminati Orde is een onafhankelijke organisatie.", doc_title: "De Illuminati Orde — Officiële website"
          }
        };
        Object.keys(EXTRA).forEach(function (lang) {
          if (!T[lang]) T[lang] = {};
          Object.keys(EXTRA[lang]).forEach(function (k) { T[lang][k] = EXTRA[lang][k]; });
        });
        var ARIA = {
          en: { menu: "Open menu", play: "Play the official introduction" },
          fr: { menu: "Ouvrir le menu", play: "Lire la présentation officielle" },
          es: { menu: "Abrir menú", play: "Reproducir la presentación oficial" },
          de: { menu: "Menü öffnen", play: "Die offizielle Einführung abspielen" },
          it: { menu: "Apri menu", play: "Riproduci la presentazione ufficiale" },
          pt: { menu: "Abrir menu", play: "Reproduzir a apresentação oficial" },
          nl: { menu: "Menu openen", play: "Speel de officiële introductie af" }
        };
        function storeLang(lang) {
          try { window.localStorage.setItem('illuminati-lang', lang); } catch (e) {}
        }
        function readStoredLang() {
          try { return window.localStorage.getItem('illuminati-lang'); } catch (e) { return null; }
        }
        // Capture original English from the DOM on first load
        var originals = {};
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
          var k = el.getAttribute('data-i18n');
          if (!(k in originals)) originals[k] = el.innerHTML;
        });
        var originalTitle = document.title;
        var SUPPORTED = ['en', 'fr', 'es', 'de', 'it', 'pt', 'nl'];
        function applyLang(lang) {
          if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
          document.documentElement.lang = lang;
          document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var k = el.getAttribute('data-i18n');
            var val = (lang === 'en') ? originals[k] : (T[lang] && T[lang][k]);
            if (val != null) {
              if (String(val).indexOf('<') !== -1) el.innerHTML = val; else el.textContent = val;
            }
          });
          var dict = (lang === 'en') ? null : T[lang];
          document.title = dict && dict.doc_title ? dict.doc_title : originalTitle;
          var aria = ARIA[lang] || ARIA.en;
          var burgerEl = document.getElementById('burger');
          if (burgerEl && aria) burgerEl.setAttribute('aria-label', aria.menu);
          var playEl = document.getElementById('playBtn');
          if (playEl && aria) playEl.setAttribute('aria-label', aria.play);
          var sel = document.getElementById('langSelect');
          if (sel && sel.value !== lang) sel.value = lang;
          storeLang(lang);
        }
        var sel = document.getElementById('langSelect');
        if (sel) {
          sel.addEventListener('change', function () { applyLang(sel.value); });
          sel.addEventListener('input', function () { applyLang(sel.value); });
          // Fresh open: apply the saved choice, or whatever value the browser
          // restored into the dropdown, so the page text and the dropdown
          // always agree on first load.
          var initial = readStoredLang();
          if (SUPPORTED.indexOf(initial) === -1) initial = sel.value || 'en';
          applyLang(initial);
          window.addEventListener('pageshow', function () {
            var saved = readStoredLang();
            if (saved && SUPPORTED.indexOf(saved) !== -1 && saved !== document.documentElement.lang) applyLang(saved);
            else if (sel.value && sel.value !== document.documentElement.lang) applyLang(sel.value);
          });
        }
      })();
