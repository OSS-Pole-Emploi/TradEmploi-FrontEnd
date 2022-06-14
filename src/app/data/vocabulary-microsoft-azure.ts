import {Vocabulary} from '../models/vocabulary';
import {
  AFRIKAANS,
  ALBANIAN_NO_VOICE,
  AMHARIC_NO_VOICE,
  ARAB,
  ARMENIAN,
  BASQUE,
  BENGALI_INDIA_NO_VOICE,
  BENGALI_NO_VOICE,
  BULGARE,
  CROATIAN,
  CZECH,
  DANISH,
  DARI,
  ENGLISH,
  ENGLISH_DEFAULT,
  ENGLISH_DEFAULT_NO_VOICE,
  ESTONIAN,
  FINLAND,
  FRENCH,
  GEORGIAN,
  GERMAN,
  GREEK,
  GUJARATI,
  HEBREW,
  HINDI,
  HOLLAND,
  HUNGARIAN,
  ICELAND,
  INDONESIA,
  ITALIAN,
  JAPANESE,
  KANNADA,
  KHMER_NO_VOICE,
  KOREA,
  MALAYALAM_NO_VOICE,
  MANDARIN_NO_VOICE,
  MONGOL_NO_VOICE,
  NEPALESE_NO_VOICE,
  NORWAY,
  OURDOU,
  OURDOU_NO_VOICE,
  OUZBEK_NO_VOICE,
  PENDJABI,
  PERSAN,
  POLAND,
  PORTUGUESE,
  ROMANIAN,
  RUSSIA,
  SLOVENIA,
  SPANISH,
  SWEDEN,
  TAMOUL_INDIA,
  TAMOUL_NO_VOICE,
  TELUGU,
  THAILAND,
  TURC,
  UKRAINE,
  VIETNAMESE,
} from './sentence';
import {environment} from '../../environments/environment';

const COUNTRY_NAME_SUD_AFRICA = 'Afrique du Sud';
export const VOCABULARY_AZURE: Vocabulary[] = [
  // no voice for azure
  {
    isoCode: 'af-ZA',
    audioVoiceCode: 'af-ZA-AdriNeural',
    countryNameRaw: 'Suid-Afrika',
    countryNameFr: COUNTRY_NAME_SUD_AFRICA,
    languageNameRaw: 'Afrikaans',
    languageNameFr: 'Afrikaans',
    sentences: AFRIKAANS
  },
  {
    isoCode: 'sq-AL',
    countryNameRaw: 'Shqiperia',
    countryNameFr: 'Albanie',
    languageNameRaw: 'Shqiptare',
    languageNameFr: 'Albanais',
    sentences: ALBANIAN_NO_VOICE
  },
  {
    isoCode: 'am-ET',
    audioVoiceCode: 'am-ET-MekdesNeural',
    countryNameRaw: 'ኢትዮጵያ',
    countryNameFr: 'Éthiopie',
    languageNameFr: 'Amharique',
    languageNameRaw: 'አማርኛ',
    sentences: AMHARIC_NO_VOICE
  },
  {
    isoCode: 'hy-AM',
    countryNameRaw: 'Հայաստան',
    countryNameFr: 'Arménie',
    languageNameRaw: 'Հայ',
    languageNameFr: 'Arménien',
    sentences: ARMENIAN
  },
  {
    isoCode: 'az-AZ',
    countryNameRaw: 'Azərbaycan',
    countryNameFr: 'Azerbaïjan',
    languageNameRaw: 'Azərbaycan',
    languageNameFr: 'Azerbaïdjan',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'eu-ES',
    countryNameRaw: 'Espainia',
    countryNameFr: 'Espagne',
    languageNameFr: 'Basque',
    languageNameRaw: 'Euskara',
    sentences: BASQUE
  },
  {
    isoCode: 'bn-BD',
    audioVoiceCode: 'bn-BD-NabanitaNeural',
    countryNameRaw: 'বাংলাদেশ',
    countryNameFr: 'Bangladesh',
    languageNameRaw: 'বাংলা',
    languageNameFr: 'Bengali',
    sentences: BENGALI_NO_VOICE
  },
  {
    isoCode: 'bn-IN',
    audioVoiceCode: 'bn-IN-TanishaaNeural',
    countryNameRaw: 'ভারত',
    countryNameFr: 'Inde',
    languageNameRaw: 'বাংলা',
    languageNameFr: 'Bengali',
    sentences: BENGALI_INDIA_NO_VOICE
  },
  {
    isoCode: 'zh-HK',
    audioVoiceCode: 'zh-HK-HiuGaaiNeural',
    audioCode: 'yue-HK',
    countryNameRaw: '香港',
    countryNameFr: 'Hong Kong',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    sentences: MANDARIN_NO_VOICE
  },
  {
    isoCode: 'zh-TW',
    audioVoiceCode: 'zh-TW-HsiaoChenNeural',
    audioCode: 'cmn-TW',
    countryNameRaw: '台湾',
    countryNameFr: 'Taïwan',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    sentences: MANDARIN_NO_VOICE
  },
  {
    isoCode: 'en-PK',
    audioCode: 'en-GB',
    countryNameRaw: 'Pakistan',
    countryNameFr: 'Pakistan',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'gl-ES',
    audioCode: 'gl-ES',
    audioVoiceCode: 'gl-ES-SabelaNeural',
    countryNameRaw: 'España',
    countryNameFr: 'Espagne',
    languageNameRaw: 'Galego',
    languageNameFr: 'Galicien',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'ka-GE',
    countryNameRaw: 'საქართველო',
    countryNameFr: 'Géorgie',
    languageNameRaw: 'ქართული',
    languageNameFr: 'Géorgien',
    sentences: GEORGIAN
  },
  {
    isoCode: 'is-IS',
    audioVoiceCode: 'is-IS-GudrunNeural',
    countryNameRaw: 'Ísland',
    countryNameFr: 'Islande',
    languageNameRaw: 'Íslenska',
    languageNameFr: 'Islandais',
    sentences: ICELAND
  },
  {
    isoCode: 'jv-ID',
    audioVoiceCode: 'jv-ID-SitiNeural',
    countryNameRaw: 'Indonesia',
    countryNameFr: 'Indonésie',
    languageNameRaw: 'Jawa',
    languageNameFr: 'Javanais',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'kk-KZ',
    audioVoiceCode: 'kk-KZ-AigulNeural',
    countryNameRaw: `Қазақстан`,
    countryNameFr: 'Kazakhstan',
    languageNameRaw: `Қазақша`,
    languageNameFr: 'Kazakh',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'km-KH',
    audioVoiceCode: 'km-KH-SreymomNeural',
    countryNameRaw: 'កម្ពុជា',
    countryNameFr: 'Cambodge',
    languageNameFr: 'Khmer',
    languageNameRaw: 'ភាសាខ្មែរ',
    sentences: KHMER_NO_VOICE
  },
  {
    isoCode: 'lo-LA',
    audioVoiceCode: 'lo-LA-KeomanyNeural',
    countryNameRaw: 'ລາວ',
    countryNameFr: 'Laos',
    languageNameRaw: 'ລາວ',
    languageNameFr: 'Lao',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'mk-MK',
    audioVoiceCode: 'mk-MK-MarijaNeural',
    countryNameRaw: `Македонија`,
    countryNameFr: 'Macédoine',
    languageNameRaw: `Македонски`,
    languageNameFr: 'Macédonien',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'ml-IN',
    audioVoiceCode: 'ml-IN-SobhanaNeural',
    countryNameRaw: 'ഇന്ത്യ',
    countryNameFr: 'Inde',
    languageNameRaw: 'മലയാളം',
    languageNameFr: 'Malayalam',
    sentences: MALAYALAM_NO_VOICE
  },
  {
    isoCode: 'mr-IN',
    countryNameRaw: 'भारत',
    countryNameFr: 'Inde',
    languageNameRaw: 'मराठी',
    languageNameFr: 'Marathi',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'mn-MN',
    countryNameRaw: 'Монгол Улс',
    countryNameFr: 'Mongolie',
    languageNameFr: 'Mongol',
    languageNameRaw: 'Монгол',
    sentences: MONGOL_NO_VOICE
  },
  {
    isoCode: 'ne-NP',
    countryNameRaw: 'नेपाल',
    countryNameFr: 'Népal',
    languageNameFr: 'Népalais',
    languageNameRaw: 'नेपाली',
    sentences: NEPALESE_NO_VOICE
  },
  {
    isoCode: 'sr-RS',
    audioVoiceCode: 'sr-RS-SophieNeural',
    countryNameRaw: 'Србија',
    countryNameFr: 'Serbie',
    languageNameRaw: 'Српски',
    languageNameFr: 'Serbe',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'si-LK',
    audioVoiceCode: 'si-LK-ThiliniNeural',
    countryNameRaw: 'ශ්රී ලංකාව',
    countryNameFr: 'Sri Lanka',
    languageNameRaw: 'සිංහල',
    languageNameFr: 'Cingalais',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'su-ID',
    audioVoiceCode: 'su-ID-TutiNeural',
    countryNameRaw: 'Indonesia',
    countryNameFr: 'Indonésie',
    languageNameRaw: 'Sundanese',
    languageNameFr: 'Soundanais',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'sw-TZ',
    audioVoiceCode: 'sw-TZ-RehemaNeural',
    countryNameRaw: 'Tanzania',
    countryNameFr: 'Tanzanie',
    languageNameRaw: 'Swahili',
    languageNameFr: 'Swahili',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'ta-MY',
    countryNameRaw: 'மலேசியா',
    countryNameFr: 'Malaisie',
    languageNameRaw: 'தமிழ்',
    languageNameFr: 'Tamoul',
    sentences: TAMOUL_NO_VOICE
  },
  {
    isoCode: 'ta-SG',
    audioVoiceCode: 'ta-SG-VenbaNeural',
    countryNameRaw: 'சிங்கப்பூர்',
    countryNameFr: 'Singapour',
    languageNameRaw: 'தமிழ்',
    languageNameFr: 'Tamoul',
    sentences: TAMOUL_NO_VOICE
  },
  {
    isoCode: 'ta-LK',
    audioVoiceCode: 'ta-LK-SaranyaNeural',
    countryNameRaw: 'இலங்கை',
    countryNameFr: 'Sri Lanka',
    languageNameRaw: 'தமிழ்',
    languageNameFr: 'Tamoul',
    sentences: TAMOUL_NO_VOICE
  },
  {
    isoCode: 'uk-UA',
    audioVoiceCode: 'uk-UA-PolinaNeural',
    countryNameRaw: 'Україна',
    countryNameFr: 'Ukraine',
    languageNameRaw: 'Українська',
    languageNameFr: 'Ukrainien',
    sentences: UKRAINE
  },
  {
    isoCode: 'ur-IN',
    audioVoiceCode: 'ur-IN-GulNeural',
    countryNameRaw: 'بھارت',
    countryNameFr: 'Inde',
    languageNameRaw: 'اردو',
    languageNameFr: 'Ourdou',
    sentences: OURDOU_NO_VOICE
  },
  {
    isoCode: 'ur-PK',
    audioVoiceCode: 'ur-PK-UzmaNeural',
    countryNameRaw: 'پاکستان',
    countryNameFr: 'Pakistan',
    languageNameFr: 'Ourdou',
    languageNameRaw: 'اردو',
    sentences: OURDOU_NO_VOICE
  },
  {
    isoCode: 'uz-UZ',
    audioVoiceCode: 'uz-UZ-MadinaNeural',
    countryNameRaw: 'Ўзбекистон',
    countryNameFr: 'Ouzbékistan',
    languageNameFr: 'Ouzbek',
    languageNameRaw: 'ўзбек',
    sentences: OUZBEK_NO_VOICE
  },
  {
    isoCode: 'zu-ZA',
    audioVoiceCode: 'zu-ZA-ThandoNeural',
    countryNameRaw: 'Ningizimu Afrika',
    countryNameFr: COUNTRY_NAME_SUD_AFRICA,
    languageNameRaw: 'IsiZulu',
    languageNameFr: 'Zoulou',
    sentences: ENGLISH_DEFAULT_NO_VOICE
  },
  {
    isoCode: 'ar-IL',
    audioCode: 'ar-XA',
    countryNameRaw: 'إسرائيل',
    countryNameFr: 'Israël',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-DZ',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-DZ' : 'ar-XA',
    audioVoiceCode: 'ar-DZ-IsmaelNeural',
    countryNameRaw: 'الجزائر',
    countryNameFr: 'Algérie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-JO',
    audioVoiceCode: 'ar-JO-SanaNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-JO' : 'ar-XA',
    countryNameRaw: 'الأردن',
    countryNameFr: 'Jordanie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-AE',
    audioVoiceCode: 'ar-AE-FatimaNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-AE' : 'ar-XA',
    countryNameRaw: 'الإمارات',
    countryNameFr: 'Emirats Arabes Unis',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-BH',
    audioVoiceCode: 'ar-BH-LailaNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-BH' : 'ar-XA',
    countryNameRaw: 'البحرين',
    countryNameFr: 'Bahreïn',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-XA',
    audioCode: 'ar-XA',
    audioVoiceCode: 'ar-SA-ZariyahNeural',
    countryNameRaw: 'الدول العربية',
    countryNameFr: 'Pays arabes',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-SA',
    audioVoiceCode: 'ar-SA-ZariyahNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-SA' : 'ar-XA',
    countryNameRaw: 'السعودية',
    countryNameFr: 'Arabie Saoudite',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-IQ',
    audioVoiceCode: 'ar-IQ-RanaNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-IQ' : 'ar-XA',
    countryNameRaw: 'العراق',
    countryNameFr: 'Irak',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-KW',
    audioVoiceCode: 'ar-KW-NouraNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-KW' : 'ar-XA',
    countryNameRaw: 'الكويت',
    countryNameFr: 'Koweït',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-MA',
    audioVoiceCode: 'ar-MA-MounaNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-MA' : 'ar-XA',
    countryNameRaw: 'المغرب',
    countryNameFr: 'Maroc',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-TN',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-TN' : 'ar-XA',
    audioVoiceCode: 'ar-TN-ReemNeural',
    countryNameRaw: 'تونس',
    countryNameFr: 'Tunisie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-OM',
    audioCode: 'ar-XA',
    countryNameRaw: 'عُمان',
    countryNameFr: 'Oman',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-PS',
    audioCode: 'ar-XA',
    countryNameRaw: 'فلسطين',
    countryNameFr: 'Palestine',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-QA',
    audioVoiceCode: 'ar-QA-AmalNeural',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-QA' : 'ar-XA',
    countryNameRaw: 'قطر',
    countryNameFr: 'Qatar',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-LB',
    audioCode: 'ar-XA',
    countryNameRaw: 'لبنان',
    countryNameFr: 'Liban',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'ar-EG',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-EG' : 'ar-XA',
    audioVoiceCode: 'ar-EG-ShakirNeural',
    countryNameRaw: 'مصر',
    countryNameFr: 'Égypte',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'fa-IR',
    audioVoiceCode: 'fa-IR-DilaraNeural',
    countryNameRaw: 'ایران',
    countryNameFr: 'Iran',
    languageNameRaw: 'فارسی',
    languageNameFr: 'Persan',
    sentences: PERSAN
  },
  {
    isoCode: 'fr-FR',
    audioVoiceCode: 'fr-FR-DeniseNeural',
    countryNameRaw: 'France',
    countryNameFr: 'France',
    languageNameRaw: 'Français',
    languageNameFr: 'Français',
    sentences: FRENCH
  },
  {
    isoCode: 'en-GB',
    audioVoiceCode: 'en-GB-LibbyNeural',
    countryNameRaw: 'United Kingdom',
    countryNameFr: 'Royaume-Uni',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'es-ES',
    audioVoiceCode: 'es-ES-ElviraNeural',
    countryNameRaw: 'España',
    countryNameFr: 'Espagne',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-AR',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-AR' : 'es-ES',
    audioVoiceCode: 'es-AR-ElenaNeural',
    countryNameRaw: 'Argentina',
    countryNameFr: 'Argentine',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'en-AU',
    audioCode: 'en-AU',
    audioVoiceCode: 'en-AU-NatashaNeural',
    countryNameRaw: 'Australia',
    countryNameFr: 'Australie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-GH',
    audioCode: 'en-GB',
    countryNameRaw: 'Ghana',
    countryNameFr: 'Ghana',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-CA',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-CA' : 'en-US',
    audioVoiceCode: 'en-CA-ClaraNeural',
    countryNameRaw: 'Canada',
    countryNameFr: 'Canada',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'fr-CA',
    audioCode: 'fr-CA',
    audioVoiceCode: 'fr-CA-SylvieNeural',
    countryNameRaw: 'Canada',
    countryNameFr: 'Canada',
    languageNameRaw: 'Français',
    languageNameFr: 'Français',
    sentences: FRENCH
  },
  {
    isoCode: 'en-IN',
    audioVoiceCode: 'en-IN-NeerjaNeural',
    countryNameRaw: 'India',
    countryNameFr: 'Inde',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-ZA',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-ZA' : 'en-GB',
    audioVoiceCode: 'en-ZA-LeahNeural',
    countryNameRaw: 'South Africa',
    countryNameFr: COUNTRY_NAME_SUD_AFRICA,
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-IE',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-IE' : 'en-GB',
    audioVoiceCode: 'en-IE-EmilyNeural',
    countryNameRaw: 'Ireland',
    countryNameFr: 'Irlande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-KE',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-KE' : 'en-GB',
    audioVoiceCode: 'en-KE-AsiliaNeural',
    countryNameRaw: 'Kenya',
    countryNameFr: 'Kenya',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-NZ',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-NZ' : 'en-GB',
    audioVoiceCode: 'en-NZ-MollyNeural',
    countryNameRaw: 'New Zealand',
    countryNameFr: 'Nouvelle-Zélande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-SG',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-SG' : 'en-GB',
    audioVoiceCode: 'en-SG-LunaNeural',
    countryNameRaw: 'Singapore',
    countryNameFr: 'Singapour',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-PH',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-PH' : 'en-GB',
    audioVoiceCode: 'en-PH-RosaNeural',
    countryNameRaw: 'Philippines',
    countryNameFr: 'Philippines',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-NG',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-NG' : 'en-GB',
    audioVoiceCode: 'en-NG-EzinneNeural',
    countryNameRaw: 'Nigeria',
    countryNameFr: 'Nigeria',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-TZ',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-TZ' : 'en-GB',
    audioVoiceCode: 'en-TZ-ImaniNeural',
    countryNameRaw: 'Tanzania',
    countryNameFr: 'Tanzanie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'en-US',
    audioVoiceCode: 'en-US-ChristopherNeural',
    countryNameRaw: 'United-States',
    countryNameFr: 'États-Unis',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'fa-AF',
    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Dari',
    languageNameRaw: 'دري',
    sentences: DARI
  },
  {
    isoCode: 'ur-PK',
    countryNameRaw: 'پاکستان',
    countryNameFr: 'Pakistan',
    languageNameFr: 'Ourdou',
    languageNameRaw: 'اردو',
    sentences: OURDOU
  },
  {
    isoCode: 'pt-PT',
    audioVoiceCode: 'pt-PT-FernandaNeural',
    countryNameRaw: 'Portugal',
    countryNameFr: 'Portugal',
    languageNameFr: 'Portugais',
    languageNameRaw: 'Português',
    sentences: PORTUGUESE
  },
  {
    isoCode: 'tr-TR',
    audioVoiceCode: 'tr-TR-EmelNeural',
    countryNameRaw: 'Türkiye',
    countryNameFr: 'Turquie',
    languageNameFr: 'Turc',
    languageNameRaw: 'Türkçe',
    sentences: TURC
  },
  {
    isoCode: 'de-DE',
    audioVoiceCode: 'de-DE-KatjaNeural',
    countryNameRaw: 'Deutschland',
    countryNameFr: 'Allemagne',
    languageNameFr: 'Allemand',
    languageNameRaw: 'Deutsch',
    sentences: GERMAN
  },
  {
    isoCode: 'hi-IN',
    audioVoiceCode: 'hi-IN-SwaraNeural',
    countryNameRaw: 'भारत',
    countryNameFr: 'Inde',
    languageNameFr: 'Hindi',
    languageNameRaw: 'हिन्दी',
    sentences: HINDI
  },
  {
    isoCode: 'ta-IN',
    audioVoiceCode: 'ta-IN-PallaviNeural',
    countryNameRaw: 'இந்தியா',
    countryNameFr: 'Inde',
    languageNameFr: 'Tamoul',
    languageNameRaw: 'தமிழ்',
    sentences: TAMOUL_INDIA
  },
  {
    isoCode: 'it-IT',
    audioVoiceCode: 'it-IT-ElsaNeural',
    countryNameRaw: 'Italia',
    countryNameFr: 'Italie',
    languageNameFr: 'Italien',
    languageNameRaw: 'Italiano',
    sentences: ITALIAN
  },
  {
    isoCode: 'ru-RU',
    audioVoiceCode: 'ru-RU-DariyaNeural',
    countryNameRaw: 'Россия',
    countryNameFr: 'Russie',
    languageNameFr: 'Russe',
    languageNameRaw: 'Русский',
    sentences: RUSSIA
  },
  {
    isoCode: 'ro-RO',
    audioVoiceCode: 'ro-RO-AlinaNeural',
    countryNameRaw: 'România',
    countryNameFr: 'Roumanie',
    languageNameFr: 'Roumain',
    languageNameRaw: 'Română',
    sentences: ROMANIAN
  },
  {
    isoCode: 'vi-VN',
    audioVoiceCode: 'vi-VN-HoaiMyNeural',
    countryNameRaw: 'Việt Nam',
    countryNameFr: 'Vietnam',
    languageNameFr: 'Vietnamien',
    languageNameRaw: 'Tiếng Việt',
    sentences: VIETNAMESE
  },
  {
    isoCode: 'el-GR',
    audioVoiceCode: 'el-GR-AthinaNeural',
    countryNameRaw: 'Ελλάδα',
    countryNameFr: 'Grèce',
    languageNameFr: 'Grec',
    languageNameRaw: 'Ελληνικά',
    sentences: GREEK
  },
  {
    isoCode: 'es-BO',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-BO' : 'es-ES',
    audioVoiceCode: 'es-BO-SofiaNeural',
    countryNameRaw: 'Bolivia',
    countryNameFr: 'Bolivie',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-CL',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-CL' : 'es-ES',
    audioVoiceCode: 'es-CL-CatalinaNeural',
    countryNameRaw: 'Chile',
    countryNameFr: 'Chili',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-CO',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-CO' : 'es-ES',
    audioVoiceCode: 'es-CO-SalomeNeural',
    countryNameRaw: 'Colombia',
    countryNameFr: 'Colombie',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-CR',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-CR' : 'es-ES',
    audioVoiceCode: 'es-CR-MariaNeural',
    countryNameRaw: 'Costa Rica',
    countryNameFr: 'Costa Rica',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-EC',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-EC' : 'es-ES',
    audioVoiceCode: 'es-EC-AndreaNeural',
    countryNameRaw: 'Ecuador',
    countryNameFr: 'Equateur',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-SV',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-SV' : 'es-ES',
    audioVoiceCode: 'es-SV-LorenaNeural',
    countryNameRaw: 'El Salvador',
    countryNameFr: 'Salvador',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-US',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-US' : 'es-ES',
    audioVoiceCode: 'es-US-PalomaNeural',
    countryNameRaw: 'Estados Unidos',
    countryNameFr: 'États-Unis',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-GT',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-GT' : 'es-ES',
    audioVoiceCode: 'es-GT-MartaNeural',
    countryNameRaw: 'Guatemala',
    countryNameFr: 'Guatemala',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-HN',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-HN' : 'es-ES',
    audioVoiceCode: 'es-HN-KarlaNeural',
    countryNameRaw: 'Honduras',
    countryNameFr: 'Honduras',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-MX',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-MX' : 'es-ES',
    audioVoiceCode: 'es-MX-DaliaNeural',
    countryNameRaw: 'México',
    countryNameFr: 'Mexique',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-NI',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-NI' : 'es-ES',
    audioVoiceCode: 'es-NI-YolandaNeural',
    countryNameRaw: 'Nicaragua',
    countryNameFr: 'Nicaragua',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-PA',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-PA' : 'es-ES',
    audioVoiceCode: 'es-PA-MargaritaNeural',
    countryNameRaw: 'Panamà',
    countryNameFr: 'Panama',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-PY',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-PY' : 'es-ES',
    audioVoiceCode: 'es-PY-TaniaNeural',
    countryNameRaw: 'Paraguay',
    countryNameFr: 'Paraguay',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-PE',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-PE' : 'es-ES',
    audioVoiceCode: 'es-PE-CamilaNeural',
    countryNameRaw: 'Perù',
    countryNameFr: 'Pérou',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-PR',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-PR' : 'es-ES',
    audioVoiceCode: 'es-PR-KarinaNeural',
    countryNameRaw: 'Puerto Rico',
    countryNameFr: 'Porto Rico',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-DO',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-DO' : 'es-ES',
    audioVoiceCode: 'es-DO-RamonaNeural',
    countryNameRaw: 'República Dominicana',
    countryNameFr: 'République Dominicaine',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-UY',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-UY' : 'es-ES',
    audioVoiceCode: 'es-UY-ValentinaNeural',
    countryNameRaw: 'Uruguay',
    countryNameFr: 'Uruguay',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'es-VE',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'es-VE' : 'es-ES',
    audioVoiceCode: 'es-VE-PaolaNeural',
    countryNameRaw: 'Venezuela',
    countryNameFr: 'Vénézuéla',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH
  },
  {
    isoCode: 'th-TH',
    audioVoiceCode: 'th-TH-AcharaNeural',
    countryNameRaw: 'ประเทศไทย',
    countryNameFr: 'Thaïlande',
    languageNameRaw: 'ไทย',
    languageNameFr: 'Thaï',
    sentences: THAILAND
  },
  {
    isoCode: 'ko-KR',
    audioVoiceCode: 'ko-KR-SunHiNeural',
    countryNameRaw: '대한민국',
    countryNameFr: 'Corée du Sud',
    languageNameRaw: '한국어',
    languageNameFr: 'Coréen',
    sentences: KOREA
  },
  {
    isoCode: 'ja-JP',
    audioVoiceCode: 'ja-JP-NanamiNeural',
    countryNameRaw: '日本',
    countryNameFr: 'Japon',
    languageNameRaw: '日本語',
    languageNameFr: 'Japonais',
    sentences: JAPANESE
  },
  {
    isoCode: 'en-HK',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'en-HK' : 'en-GB',
    audioVoiceCode: 'en-HK-YanNeural',
    countryNameRaw: 'Hong Kong',
    countryNameFr: 'Hong Kong',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH
  },
  {
    isoCode: 'ar-YE',
    audioCode: environment.microsoftSpeechConfig.textToSpeechEnabled ? 'ar-YE' : 'ar-XA',
    audioVoiceCode: 'ar-YE-MaryamNeural',
    countryNameRaw: 'اليمن',
    countryNameFr: 'Yémen',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB
  },
  {
    isoCode: 'gu-IN',
    audioVoiceCode: 'gu-IN-DhwaniNeural',
    countryNameRaw: 'ભારત',
    countryNameFr: 'Inde',
    languageNameRaw: 'ગુજરાતી',
    languageNameFr: 'Gujarati',
    sentences: GUJARATI
  },
  {
    isoCode: 'hr-HR',
    audioVoiceCode: 'hr-HR-GabrijelaNeural',
    countryNameRaw: 'Hrvatska',
    countryNameFr: 'Croatie',
    languageNameRaw: 'Hrvatski',
    languageNameFr: 'Croate',
    sentences: CROATIAN
  },
  {
    isoCode: 'kn-IN',
    audioVoiceCode: 'kn-IN-SapnaNeural',
    countryNameRaw: 'ಭಾರತ',
    countryNameFr: 'Inde',
    languageNameRaw: 'ಕನ್ನಡ',
    languageNameFr: 'Kannada',
    sentences: KANNADA
  },
  {
    isoCode: 'lv-LV',
    audioVoiceCode: 'lv-LV-EveritaNeural',
    countryNameRaw: 'latviešu',
    countryNameFr: 'Lettonie',
    languageNameRaw: 'Latviešu',
    languageNameFr: 'Letton',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'lt-LT',
    audioVoiceCode: 'lt-LT-OnaNeural',
    countryNameRaw: 'Lietuva',
    countryNameFr: 'Lituanie',
    languageNameRaw: 'Lietuvių',
    languageNameFr: 'Lituanien',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'hu-HU',
    audioVoiceCode: 'hu-HU-NoemiNeural',
    countryNameRaw: 'Magyarország',
    countryNameFr: 'Hongrie',
    languageNameRaw: 'Magyar',
    languageNameFr: 'Hongrois',
    sentences: HUNGARIAN
  },
  {
    isoCode: 'mr-IN',
    audioVoiceCode: 'mr-IN-AarohiNeural',
    countryNameRaw: 'भारत',
    countryNameFr: 'Inde',
    languageNameRaw: 'मराठी',
    languageNameFr: 'Marathi',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'nl-NL',
    audioVoiceCode: 'nl-NL-ColetteNeural',
    countryNameRaw: 'Nederlands',
    countryNameFr: 'Pays-Bas',
    languageNameRaw: 'Nederlands',
    languageNameFr: 'Néerlandais',
    sentences: HOLLAND
  },
  {
    isoCode: 'nb-NO',
    audioVoiceCode: 'nb-NO-IselinNeural',
    countryNameRaw: 'Norge',
    countryNameFr: 'Norvège',
    languageNameRaw: 'Norsk bokmål',
    languageNameFr: 'Norvégien bokmål',
    sentences: NORWAY
  },
  {
    isoCode: 'pl-PL',
    audioVoiceCode: 'pl-PL-AgnieszkaNeural',
    countryNameRaw: 'Polska',
    countryNameFr: 'Pologne',
    languageNameRaw: 'Polski',
    languageNameFr: 'Polonais',
    sentences: POLAND
  },
  {
    isoCode: 'pt-BR',
    audioVoiceCode: 'pt-BR-FranciscaNeural',
    countryNameRaw: 'Brasil',
    countryNameFr: 'Brésil',
    languageNameRaw: 'Português',
    languageNameFr: 'Portugais',
    sentences: PORTUGUESE
  },
  {
    isoCode: 'sk-SK',
    audioVoiceCode: 'sk-SK-ViktoriaNeural',
    countryNameRaw: 'Slovensko',
    countryNameFr: 'Slovaquie',
    languageNameRaw: 'Slovenčina',
    languageNameFr: 'Slovaque',
    sentences: SLOVENIA
  },
  {
    isoCode: 'sl-SI',
    audioVoiceCode: 'sl-SI-PetraNeural',
    countryNameRaw: 'Slovenija',
    countryNameFr: 'Slovénie',
    languageNameRaw: 'Slovenščina',
    languageNameFr: 'Slovène',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'sw-KE',
    audioVoiceCode: 'sw-KE-ZuriNeural',
    countryNameRaw: 'Kenya',
    countryNameFr: 'Kenya',
    languageNameRaw: 'Swahili',
    languageNameFr: 'Swahili',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'fi-FI',
    audioVoiceCode: 'fi-FI-NooraNeural',
    countryNameRaw: 'Suomi',
    countryNameFr: 'Finlande',
    languageNameRaw: 'Suomalainen',
    languageNameFr: 'Finnois',
    sentences: FINLAND
  },
  {
    isoCode: 'sv-SE',
    audioVoiceCode: 'sv-SE-HilleviNeural',
    countryNameRaw: 'Sverige',
    countryNameFr: 'Suède',
    languageNameRaw: 'Svenska',
    languageNameFr: 'Suédois',
    sentences: SWEDEN
  },
  {
    isoCode: 'te-IN',
    audioVoiceCode: 'te-IN-ShrutiNeural',
    countryNameRaw: 'భారతదేశం',
    countryNameFr: 'Inde',
    languageNameRaw: 'తెలుగు',
    languageNameFr: 'Télougou',
    sentences: TELUGU
  },
  {
    isoCode: 'bg-BG',
    audioVoiceCode: 'bg-BG-KalinaNeural',
    countryNameRaw: 'България',
    countryNameFr: 'Bulgarie',
    languageNameRaw: 'Български',
    languageNameFr: 'Bulgare',
    sentences: BULGARE
  },
  {
    isoCode: 'he-IL',
    audioVoiceCode: 'he-IL-HilaNeural',
    countryNameRaw: 'ישראל',
    countryNameFr: 'Israël',
    languageNameRaw: 'עברית',
    languageNameFr: 'Hébreu',
    sentences: HEBREW
  },
  {
    isoCode: 'da-DK',
    audioVoiceCode: 'da-DK-ChristelNeural',
    countryNameRaw: 'Danmark',
    countryNameFr: 'Danemark',
    languageNameRaw: 'Dansk',
    languageNameFr: 'Danois',
    sentences: DANISH
  },
  {
    isoCode: 'ca-ES',
    audioVoiceCode: 'ca-ES-AlbaNeural',
    countryNameRaw: 'Espanya',
    countryNameFr: 'Espagne',
    languageNameRaw: 'Català',
    languageNameFr: 'Catalan',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'id-ID',
    audioVoiceCode: 'id-ID-GadisNeural',
    countryNameRaw: 'Indonesia',
    countryNameFr: 'Indonésie',
    languageNameRaw: 'Bahasa Indonesia',
    languageNameFr: 'Indonésien',
    sentences: INDONESIA
  },
  {
    isoCode: 'ms-MY',
    audioVoiceCode: 'ms-MY-YasminNeural',
    countryNameRaw: 'Malaysia',
    countryNameFr: 'Malaisie',
    languageNameRaw: 'Bahasa Melayu',
    languageNameFr: 'Malais',
    sentences: ENGLISH_DEFAULT
  },
  {
    isoCode: 'cs-CZ',
    audioVoiceCode: 'cs-CZ-VlastaNeural',
    countryNameRaw: 'Česká republika',
    countryNameFr: 'République Tchèque',
    languageNameRaw: 'Čeština',
    languageNameFr: 'Tchèque',
    sentences: CZECH
  },
  {
    isoCode: 'pa-IN',
    countryNameRaw: 'ਭਾਰਤ',
    countryNameFr: 'Inde',
    languageNameRaw: 'ਪੰਜਾਬੀ',
    languageNameFr: 'Pendjabi',
    sentences: PENDJABI
  },
  {
    isoCode: 'et-EE',
    audioVoiceCode: 'et-EE-AnuNeural',
    countryNameRaw: 'Eesti',
    countryNameFr: 'Estonie',
    languageNameRaw: 'Eestlane',
    languageNameFr: 'Estonien',
    sentences: ESTONIAN
  }
];
