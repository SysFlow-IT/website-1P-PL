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
    content: "Serdecznie polecam wspolprace z SysFlow. Praca z zespolem przebiega w bardzo dobrej, partnerskiej atmosferze, przy jednoczesnym zachowaniu wysokiego poziomu profesjonalizmu. Duza wartoscia jest ich podejscie nastawione na realne potrzeby organizacji, skupienie na porzadkowaniu i upraszczaniu procesow, a nie narzucaniu jednego \"gotowego\" rozwiazania. Dzieki wdrozonym automatyzacjom i rozwiazaniom opartym o AI udalo nam sie usprawnic wiele kluczowych obszarow operacyjnych, finansowych i biznesowych w Cookie3.",
    author: "Wojtek Mrowka",
    role: "Chief Operating Officer",
    company: "Cookie3",
    image: `${import.meta.env.BASE_URL}image/goryla-wojtek-mrowka.jpeg`,
  },
  {
    content: "Chcialbym podziekowac za mozliwosc wspolpracy z wami. Macie ogromna wiedze, za co niesamowicie was podziwiam. To jak wszystko potraficie ogarnac i zautomatyzowac to jest szok! Naprawde doceniam, ze mieliscie cierpliwosc i tlumaczyliscie wszystko tak, zebysmy jak najwiecej rozumieli sami i mogli rozwijac te systemy samodzielnie, przez co zaraziliscie mnie troche automatyzacjami. Mam nadzieje, ze w przyszlosci bedziemy mieli okazje ponownie wspolpracowac!",
    author: "Krystian Czarnecki",
    role: "FP&A Analyst",
    image: `${import.meta.env.BASE_URL}image/krystian-czarnecki-photo.jpeg`,
  },
];

export const TRAINING_FEATURES = [
  "Praktyczne podejscie - minimum teorii",
  "Wsparcie po szkoleniu - dostep do zespolu dwa tygodniu po zakonczeniu",
  "2 Konsultacje case study - 1,5h dedykowane konkretnym wyzwaniom Twojej firmy",
  "Grupowy czat - biezace odpowiedzi na pytania podczas trwania programu",
  "Materialy do samodzielnej pracy",
] as const;

export const AGENDA_ITEMS = [
  {
    number: "01",
    title: "Wprowadzenie i Mindset",
    description:
      "Dlaczego optymalizacja pracy ma znaczenie i jak osiagac realne efekty. Organizacja szkolenia i pierwsze aplikacje.",
  },
  {
    number: "02",
    title: "Organizacja Stanowiska Pracy",
    description:
      "Ergonomia, cyfrowy minimalizm i struktury folderow - fundament efektywnosci.",
  },
  {
    number: "03",
    title: "Narzedzia Efektywnosci",
    description:
      "Metody wspierajace gleboka prace i zarzadzanie uwaga w swiecie rozpraszaczy.",
  },
  {
    number: "04",
    title: "Globalne Skroty Klawiaturowe",
    description:
      "Konfiguracja i praktyczne zastosowania, ktore oszczedza godziny tygodniowo.",
  },
  {
    number: "05",
    title: "Rekomendowany Stack Narzedzi",
    description:
      "Zestaw aplikacji, z ktorych korzystamy na co dzien i ktore sprawdzily sie w praktyce.",
  },
  {
    number: "06",
    title: "Automatyzacje",
    description:
      "Make, Zapier i inne platformy no-code do automatyzacji powtarzalnych zadan.",
  },
  {
    number: "07",
    title: "Bazy Danych",
    description:
      "Praktyczna praca z Airtable, Notion i innymi systemami zarzadzania informacja.",
  },
  {
    number: "08",
    title: "Prywatnosc i Bezpieczenstwo",
    description:
      "Ochrona danych firmowych, anonimowosc online i zabezpieczenia przed zagrozeniami.",
  },
  {
    number: "09",
    title: "Konsultacje Case Study",
    description:
      "Dedykowane 1,5h na rozwiazanie konkretnych wyzwan w Twojej organizacji.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    title: "Audyt i Analiza",
    description:
      "Diagnozujemy obecne systemy, identyfikujemy procesy do automatyzacji i ustalamy priorytety wedlug najlepszego zwrotu z inwestycji.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Migracja Danych",
    description:
      "Transfer danych z istniejacych systemow zunifikowanej platformy - tworzymy zrodlo prawdy dla danych w Twojej firmie.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    title: "Automatyzacja Procesow",
    description:
      "Implementacja automatyzacji wedlug priorytetow - zaczynamy od dzialan przynoszacych najwieksza wartosc dodana.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    title: "Iteracyjne Doskonalenie",
    description:
      "Ciagle udoskonalanie systemu na podstawie feedbacku, az osiagnie pelna funkcjonalnosc odpowiadajaca potrzebom firmy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    title: "Transfer Wiedzy",
    description:
      "Szkolimy zespol, tlumaczymy mechanizmy dzialania - zyskujecie autonomie w rozwoju systemu.",
  },
] as const;

export const AUTOMATION_AREAS = [
  {
    title: "Finanse i Ksiegowosc",
    description:
      "Automatyczne sledzenie kosztow i przychodow z portfeli krypto, fintechow (Revolut, Wise, Zen). Monitoring wartosci majatku w czasie rzeczywistym. Generowanie raportow finansowych bez recznej pracy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    title: "Zarzadzanie HR",
    description:
      "Centralna baza danych pracownikow, automatyzacja procesow onboardingowych, sledzenie urlopow i czasu pracy. Wszystkie informacje kadrowe w jednym miejscu.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
  },
  {
    title: "Workflow Dokumentow",
    description:
      "Automatyczny obieg dokumentow, elektroniczne obiegi zatwierdzania, inteligentne archiwizowanie. Koniec z gubionymi dokumentami i niejasnym statusem spraw.",
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
    title: "Procesy Sprzedazowe oraz marketingowe",
    description:
      "Automatyzacja dzialan sprzedazowych, integracja CRM z innymi systemami, sledzenie leadow i konwersji. Maksymalizuj efektywnosc zespolu sprzedazy.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Integracje Custom",
    description:
      "Kazda firma jest inna - mozemy zautomatyzowac praktycznie kazdy powtarzalny proces w Twojej organizacji. Zapytaj o mozliwosci!",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
] as const;

export const WHY_CHOOSE_ITEMS = [
  {
    icon: "briefcase",
    title: "Praktyczne doswiadczenie",
    description: "wdrazamy dzialajace systemy, ktore ulatwiaja zycie",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: "graduation",
    title: "Edukacja",
    description: "nie tylko wdrazamy, ale uczymy",
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
    title: "Iteracyjne podejscie",
    description: "system rosnie razem z firma",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
] as const;

export const PROBLEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    text: "Szukasz dokumentow po chatach, mailach, innych aplikacjach?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    text: "Masz nowoczesne narzedzia, ale masz poczucie, ze nie wykorzystujecie ich potencjalu.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    text: "Jak sprawic, zeby AI bylo efektywne?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    text: "Masz nadmiar systemow w firmie, a kazdy dzial korzysta z osobnych aplikacji?",
  },
] as const;
