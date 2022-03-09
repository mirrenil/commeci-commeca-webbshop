import PallJolly from "./assets/images/PallJolly.webp";
import FatoljXander from "./assets/images/FatoljXander.webp";
import SangbordMagnolia from "./assets/images/SangbordMagnolia.webp";
import SanggavelBella from "./assets/images/sanggavelBella.webp";
import SidobordEssentials from "./assets/images/SidobordEssentials.webp";
import skankDitti from "./assets/images/skankDitti.webp";
import BankDagny from "./assets/images/BankDagny.webp";
import charleston from "./assets/images/charleston.webp";
import golvSpegelMinna from "./assets/images/golvSpegelMinna.webp";
import KuddfodralDaisy from "./assets/images/KuddfodralDaisy.webp";
import stolPirri from "./assets/images/stolPirri.webp";
import fatoljChardonne from "./assets/images/FatoljChardonne.webp";
import skapVincent from "./assets/images/skapVincent.webp";
import Merlisso from "./assets/images/soffBordMerlisso.webp";
import barrel from "./assets/images/barrel.webp";
import SkrivbordAlba from "./assets/images/SkrivbordAlba.webp";
import sanggavelBetty from "./assets/images/sanggavelBetty.webp";

export interface Data {
  image: string;
  title: string;
  description: string;
  price: string;
  id: string;
}

export const ProductData: Data[] = [
  {
    image: PallJolly,
    title: "Pall Jolly",
    description:
      "Pall med bekväm, formad sits. Av massivt trä, i träslaget Toon Wood. Höjd 61 cm. Sits 40x32 cm. Sitthöjd: 61 cm Bredd nedtill 47 cm. Monterad.",
    price: "1599 SEK",
    id: "1",
  },
  {
    image: fatoljChardonne,
    title: "Fåtölj Chardonne",
    description:
      "Fåtölj med stomme i furu och plywood med nozagfjädring och skumfyllning. Ben av borstad metall. Mått: Bredd 89 cm, höjd 77 cm, djup 83 cm. Sitthöjd 43 cm, sittdjup 62 cm, sittbredd 54 cm.",
    price: "3919 SEK",
    id: "2",
  },
  {
    image: FatoljXander,
    title: "Loungefåtölj Xander",
    description:
      "Loungefåtölj med klädsel i bouclétyg och passpoalkant längs överkanten. Ben och stomme i pulverlackad metall. Skumfyllning. Enklare montering.",
    price: "2299 SEK",
    id: "3",
  },
  {
    image: SangbordMagnolia,
    title: "Sängbord Magnolia",
    description:
      "Sängbord i rotting med hylla undertill. Toppen är förstärkt med en plywoodskiva under rottingen. Mått: Bredd 41 cm, höjd 71 cm, djup 31 cm. Benhöjd 22 cm. Höjd till nedre hyllans överkant 25 cm. Mått mellan hyllorna 42,5 cm.",
    price: "1299 SEK",
    id: "4",
  },
  {
    image: SanggavelBella,
    title: "Sänggavel Bella",
    description:
      "Stoppad sänggavel som fästs på väggen (två krokar på baksidan). Stomme av trä (tall). Klädsel i sammet av polyester och fyllning av polyeter. Bredd 95 cm. Höjd 61,5 cm. Djup 7,5 cm.",
    price: "999",
    id: "5",
  },
  {
    image: SidobordEssentials,
    title: "Sidobord / skåp Essentials",
    description:
      "Sidobord / skåp i massivt mangoträ med vaxbehandlad yta. Två dörrar med trähandtag och mjuk stängning. Skåpet är avdelat invändigt och har ett fast hyllplan. Mått mellan hyllplan ca 27 cm. Frihöjd under möbel 14 cm. Levereras monterat.",
    price: "5499 SEK",
    id: "6",
  },
  {
    image: BankDagny,
    title: "Bänk Dagny",
    description:
      "Bänk i lackat bokträ med sits i flätat juterep. Färgen är vattenbaserad. FSC-certifierad produkt, vilket innebär att den innehåller trä som är avverkat från ett ansvarsfullt skogsbruk som tar hänsyn till människor och miljö.",
    price: "2999 SEK",
    id: "7",
  },
  {
    image: KuddfodralDaisy,
    title: "Kuddfodral Daisy Bubble",
    description:
      "Kuddfodral av sammet med fin lyster och ett sytt, dekorativt mönster på framsidan. Slät baksida. Dragkedja i botten.",
    price: "199 SEK",
    id: "8",
  },
  {
    image: barrel,
    title: "Loungestol Barrel",
    description:
      "Loungestol i PU-läder (skinnimitation) med ett levande ton-i-ton-mönster och jeanssöm mitt fram på sits och rygg. Ben av pulverlackad metall. Skumfyllning. Levereras monterad.",
    price: "1799 SEK",
    id: "9",
  },
  {
    image: SkrivbordAlba,
    title: "Skrivbord Alba",
    description:
      "Skrivbord av mangoträ med vaxad yta. Tre lådor med lådstopp. Frihöjd under möbel 57 cm. Enklare montering.",
    price: "3449 SEK",
    id: "10",
  },
  {
    image: skapVincent,
    title: "Skåp Vinvent",
    description:
      "Ett gediget, rymligt skåp med många användningsområden. Av MDF med sidor och skjutdörrar av glas. Skjutdörrarna har handtag av antikmässingsfärgad metall. Två fasta hyllplan och en mellanvägg.",
    price: "5999 SEK",
    id: "11",
  },
  {
    image: charleston,
    title: "Fåtölj Charleston",
    description:
      "Fåtölj med klädsel i sammet. Överdel med rynkat tyg på både ut- och insidan. Prydnadskudde i sammet med klädd knapp medföljer. Trästomme. Underrede och ben av pulverlackad metall. Stoppning av polyeter.Höjd 78 cm, bredd 78 cm, djup 80 cm. Sitthöjd 47 cm, sittdjup 65 cm. Sittbredd 50 cm. Max belastning 135 kg. Montera benen vid leverans.",
    price: "2899 SEK",
    id: "12",
  },
  {
    image: sanggavelBetty,
    title: "Sänggavel Betty",
    description:
      "Sänggavel i mangoträ med spårat mönster fram. Försänkta järn på baksidan som förhindrar trämaterialet från att vrida sig eller spricka. 3 st nyckelhålsfästen bak för väggupphängning. Mått: Bredd 183 cm, höjd 60 cm, djup 2,5 cm.",
    price: "2899 SEK",
    id: "13",
  },
  {
    image: golvSpegelMinna,
    title: "GolvSpegel Minna",
    description:
      "Spegel av spraymålad massiv valnöt. Höjd 158 cm. Bredd 39 cm. Djup 6 cm. Totalt djup fullt utfälld 37 cm (botten).",
    price: "1199 SEK",
    id: "14",
  },
  {
    image: stolPirri,
    title: "Stol Pirri 2-pack",
    description:
      "2 stolar i skandinavisk, stilren design med skålat ryggstöd. Klädsel med skumfyllning. Ben av metall. Max viktbelastning 150 kg. Enklare montering.",
    price: "2699 SEK",
    id: "15",
  },
  {
    image: Merlisso,
    title: "Soffbord Melisso",
    description:
      "Lågt, modernt soffbord med skiva av marmor. Stomme och ben av massiv bok. Höjd 34 cm, bredd 100 cm, längd 100 cm. Benhöjd 23 cm. Max viktbelastning 50 kg. Enklare montering (benen skruvas på vid leverans).",
    price: "4999 SEK",
    id: "16",
  },
  {
    image: skankDitti,
    title: "Skänk Ditti",
    description:
      "Skänk i massivt furu och MDF. Två små lådor. Höjd 82,5 cm, Bredd 104 cm, Djup 37 cm. Höjd från golv till hyllplanet 7 cm. Lev. omonterad.",
    price: "1999 SEK",
    id: "17",
  },
];
