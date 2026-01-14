export const CONTACT = {
  email: "contact@sysflow.one",
  phone: "+48 692 311 723",
  phoneLink: "tel:+48692311723",
  calendlyLink: "https://calendly.com/michal-sysflow/30min",
} as const;

export const TRAINING_PRICE = 12000;

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Michal Kurdziel",
    role: "CEO & Founder",
    initials: "MK",
    image: `${import.meta.env.BASE_URL}image/kurdziel.jpg`,
  },
  {
    name: "Ricardo Ribeiro",
    role: "Automation Manager",
    initials: "RR",
    image: `${import.meta.env.BASE_URL}image/ribeiro.jpg`,
  },
];

export const TESTIMONIALS = [
  {
    content: "Serdecznie polecam współpracę z SysFlow. Praca z zespołem przebiega w bardzo dobrej, partnerskiej atmosferze, przy jednoczesnym zachowaniu wysokiego poziomu profesjonalizmu. Dużą wartością jest ich podejście nastawione na realne potrzeby organizacji, skupienie na porządkowaniu i upraszczaniu procesów, a nie narzucaniu jednego \"gotowego\" rozwiązania. Dzięki wdrożonym automatyzacjom i rozwiązaniom opartym o AI udało nam się usprawnić wiele kluczowych obszarów operacyjnych, finansowych i biznesowych w Cookie3.",
    author: "Wojtek Mrówka",
    role: "Chief Operating Officer",
    company: "Cookie3",
    image: `${import.meta.env.BASE_URL}image/goryla-wojtek-mrowka.jpeg`,
  },
  {
    content: "Chciałbym podziękować za możliwość współpracy z wami. Macie ogromną wiedzę, za co niesamowicie was podziwiam. To jak wszystko potraficie ogarnąć i zautomatyzować to jest szok! Naprawdę doceniam, że mieliście cierpliwość i tłumaczyliście wszystko tak, żebyśmy jak najwięcej rozumieli sami i mogli rozwijać te systemy samodzielnie, przez co zaraziliście mnie trochę automatyzacjami. Mam nadzieję, że w przyszłości będziemy mieli okazję ponownie współpracować!",
    author: "Krystian Czarnecki",
    role: "FP&A Analyst",
    image: `${import.meta.env.BASE_URL}image/krystian-czarnecki-photo.jpeg`,
  },
];

export const TRAINING_FEATURES = [
  "Praktyczne podejście - minimum teorii",
  "Wsparcie po szkoleniu - dostęp do zespołu dwa tygodniu po zakończeniu",
  "2 Konsultacje case study - 1,5h dedykowane konkretnym wyzwaniom Twojej firmy",
  "Grupowy czat - bieżące odpowiedzi na pytania podczas trwania programu",
  "Materiały do samodzielnej pracy",
] as const;

export const AGENDA_ITEMS = [
  {
    number: "01",
    title: "Wprowadzenie i Mindset",
    description:
      "Dlaczego optymalizacja pracy ma znaczenie i jak osiągać realne efekty. Organizacja szkolenia i pierwsze aplikacje.",
  },
  {
    number: "02",
    title: "Organizacja Stanowiska Pracy",
    description:
      "Ergonomia, cyfrowy minimalizm i struktury folderów - fundament efektywności.",
  },
  {
    number: "03",
    title: "Narzędzia Efektywności",
    description:
      "Metody wspierające głęboką pracę i zarządzanie uwagą w świecie rozpraszaczy.",
  },
  {
    number: "04",
    title: "Globalne Skróty Klawiaturowe",
    description:
      "Konfiguracja i praktyczne zastosowania, które oszczędzą godziny tygodniowo.",
  },
  {
    number: "05",
    title: "Rekomendowany Stack Narzędzi",
    description:
      "Zestaw aplikacji, z których korzystamy na co dzień i które sprawdziły się w praktyce.",
  },
  {
    number: "06",
    title: "Automatyzacje",
    description:
      "Make, Zapier i inne platformy no-code do automatyzacji powtarzalnych zadań.",
  },
  {
    number: "07",
    title: "Bazy Danych",
    description:
      "Praktyczna praca z Airtable, Notion i innymi systemami zarządzania informacją.",
  },
  {
    number: "08",
    title: "Prywatność i Bezpieczeństwo",
    description:
      "Ochrona danych firmowych, anonimowość online i zabezpieczenia przed zagrożeniami.",
  },
  {
    number: "09",
    title: "Konsultacje Case Study",
    description:
      "Dedykowane 1,5h na rozwiązanie konkretnych wyzwań w Twojej organizacji.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    title: "Audyt i Analiza",
    description:
      "Diagnozujemy obecne systemy, identyfikujemy procesy do automatyzacji i ustalamy priorytety według najlepszego zwrotu z inwestycji.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Migracja Danych",
    description:
      "Transfer danych z istniejących systemów zunifikowanej platformy - tworzymy źródło prawdy dla danych w Twojej firmie.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    title: "Automatyzacja Procesów",
    description:
      "Implementacja automatyzacji według priorytetów - zaczynamy od działań przynoszących największą wartość dodaną.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    title: "Iteracyjne Doskonalenie",
    description:
      "Ciągłe udoskonalanie systemu na podstawie feedbacku, aż osiągnie pełną funkcjonalność odpowiadającą potrzebom firmy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    title: "Transfer Wiedzy",
    description:
      "Szkolimy zespół, tłumaczymy mechanizmy działania - zyskujecie autonomię w rozwoju systemu.",
  },
] as const;

export const AUTOMATION_AREAS = [
  {
    title: "Finanse i Księgowość",
    description:
      "Automatyczne śledzenie kosztów i przychodów z portfeli krypto, fintechów (Revolut, Wise, Zen). Monitoring wartości majątku w czasie rzeczywistym. Generowanie raportów finansowych bez ręcznej pracy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    title: "Zarządzanie HR",
    description:
      "Centralna baza danych pracowników, automatyzacja procesów onboardingowych, śledzenie urlopów i czasu pracy. Wszystkie informacje kadrowe w jednym miejscu.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
  },
  {
    title: "Workflow Dokumentów",
    description:
      "Automatyczny obieg dokumentów, elektroniczne obiegi zatwierdzania, inteligentne archiwizowanie. Koniec z gubionymi dokumentami i niejasnym statusem spraw.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    title: "Raportowanie i Analityka",
    description:
      "Wizualizacja kluczowych metryk biznesowych, automatyczne dashboardy, alerty o istotnych zdarzeniach. Podejmuj decyzje w oparciu o aktualne dane.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Procesy Sprzedażowe oraz marketingowe",
    description:
      "Automatyzacja działań sprzedażowych, integracja CRM z innymi systemami, śledzenie leadów i konwersji. Maksymalizuj efektywność zespołu sprzedaży.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Integracje Custom",
    description:
      "Każda firma jest inna - możemy zautomatyzować praktycznie każdy powtarzalny proces w Twojej organizacji. Zapytaj o możliwości!",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
] as const;

export const WHY_CHOOSE_ITEMS = [
  {
    icon: "briefcase",
    title: "Praktyczne doświadczenie",
    description: "wdrażamy działające systemy, które ułatwiają życie",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: "graduation",
    title: "Edukacja",
    description: "nie tylko wdrażamy, ale uczymy",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
  },
  {
    icon: "rocket",
    title: "Najnowsze technologie",
    description: "AI, Low-Code/No-Code",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
  },
  {
    icon: "refresh",
    title: "Iteracyjne podejście",
    description: "system rośnie razem z firmą",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
] as const;

export const PROBLEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    text: "Szukasz dokumentów po chatach, mailach, innych aplikacjach?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    text: "Masz nowoczesne narzędzia, ale masz poczucie, że nie wykorzystujecie ich potencjału.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    text: "Jak sprawić, żeby AI było efektywne?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    text: "Masz nadmiar systemów w firmie, a każdy dział korzysta z osobnych aplikacji?",
  },
] as const;
