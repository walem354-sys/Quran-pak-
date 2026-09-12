/*
  Quran Pak Reader
  IndoPak 16-line layout
  Page count: 548

  Arabic Quran text is loaded from a Quran API.
*/

const API =
  "https://api.alquran.cloud/v1/page/";

/*
  Surah list
*/
const surahList = [
 {number:1,name:"الفاتحہ"},
 {number:2,name:"البقرہ"},
 {number:3,name:"آل عمران"},
 {number:4,name:"النساء"},
 {number:5,name:"المائدہ"},
 {number:6,name:"الانعام"},
 {number:7,name:"الاعراف"},
 {number:8,name:"الانفال"},
 {number:9,name:"التوبہ"},
 {number:10,name:"یونس"},
 {number:11,name:"ہود"},
 {number:12,name:"یوسف"},
 {number:13,name:"الرعد"},
 {number:14,name:"ابراہیم"},
 {number:15,name:"الحجر"},
 {number:16,name:"النحل"},
 {number:17,name:"الإسراء"},
 {number:18,name:"الکہف"},
 {number:19,name:"مریم"},
 {number:20,name:"طٰہٰ"},
 {number:21,name:"الانبیاء"},
 {number:22,name:"الحج"},
 {number:23,name:"المؤمنون"},
 {number:24,name:"النور"},
 {number:25,name:"الفرقان"},
 {number:26,name:"الشعراء"},
 {number:27,name:"النمل"},
 {number:28,name:"القصص"},
 {number:29,name:"العنکبوت"},
 {number:30,name:"الروم"},
 {number:31,name:"لقمان"},
 {number:32,name:"السجدہ"},
 {number:33,name:"الاحزاب"},
 {number:34,name:"سبا"},
 {number:35,name:"فاطر"},
 {number:36,name:"یٰسین"},
 {number:37,name:"الصافات"},
 {number:38,name:"ص"},
 {number:39,name:"الزمر"},
 {number:40,name:"غافر"},
 {number:41,name:"فصلت"},
 {number:42,name:"الشوریٰ"},
 {number:43,name:"الزخرف"},
 {number:44,name:"الدخان"},
 {number:45,name:"الجاثیہ"},
 {number:46,name:"الاحقاف"},
 {number:47,name:"محمد"},
 {number:48,name:"الفتح"},
 {number:49,name:"الحجرات"},
 {number:50,name:"ق"},
 {number:51,name:"الذاریات"},
 {number:52,name:"الطور"},
 {number:53,name:"النجم"},
 {number:54,name:"القمر"},
 {number:55,name:"الرحمن"},
 {number:56,name:"الواقعہ"},
 {number:57,name:"الحدید"},
 {number:58,name:"المجادلہ"},
 {number:59,name:"الحشر"},
 {number:60,name:"الممتحنہ"},
 {number:61,name:"الصف"},
 {number:62,name:"الجمعہ"},
 {number:63,name:"المنافقون"},
 {number:64,name:"التغابن"},
 {number:65,name:"الطلاق"},
 {number:66,name:"التحریم"},
 {number:67,name:"الملک"},
 {number:68,name:"القلم"},
 {number:69,name:"الحاقہ"},
 {number:70,name:"المعارج"},
 {number:71,name:"نوح"},
 {number:72,name:"الجن"},
 {number:73,name:"المزمل"},
 {number:74,name:"المدثر"},
 {number:75,name:"القیامہ"},
 {number:76,name:"الانسان"},
 {number:77,name:"المرسلات"},
 {number:78,name:"النبأ"},
 {number:79,name:"النازعات"},
 {number:80,name:"عبس"},
 {number:81,name:"التکویر"},
 {number:82,name:"الانفطار"},
 {number:83,name:"المطففین"},
 {number:84,name:"الانشقاق"},
 {number:85,name:"البروج"},
 {number:86,name:"الطارق"},
 {number:87,name:"الاعلیٰ"},
 {number:88,name:"الغاشیہ"},
 {number:89,name:"الفجر"},
 {number:90,name:"البلد"},
 {number:91,name:"الشمس"},
 {number:92,name:"اللیل"},
 {number:93,name:"الضحیٰ"},
 {number:94,name:"الشرح"},
 {number:95,name:"التین"},
 {number:96,name:"العلق"},
 {number:97,name:"القدر"},
 {number:98,name:"البینہ"},
 {number:99,name:"الزلزال"},
 {number:100,name:"العادیات"},
 {number:101,name:"القارعہ"},
 {number:102,name:"التکاثر"},
 {number:103,name:"العصر"},
 {number:104,name:"الہمزہ"},
 {number:105,name:"الفیل"},
 {number:106,name:"قریش"},
 {number:107,name:"الماعون"},
 {number:108,name:"الکوثر"},
 {number:109,name:"الکافرون"},
 {number:110,name:"النصر"},
 {number:111,name:"المسد"},
 {number:112,name:"الإخلاص"},
 {number:113,name:"الفلق"},
 {number:114,name:"الناس"}
];


/*
  Approximate page starting points for navigation.
  The actual Arabic content is loaded page-by-page.
*/
const surahPages = {
  1:1,
  2:2,
  3:50,
  4:77,
  5:106,
  6:128,
  7:151,
  8:177,
  9:187,
  10:208,
  11:221,
  12:235,
  13:249,
  14:255,
  15:262,
  16:267,
  17:282,
  18:293,
  19:305,
  20:312,
  21:322,
  22:332,
  23:342,
  24:350,
  25:359,
  26:367,
  27:377,
  28:385,
  29:396,
  30:404,
  31:411,
  32:415,
  33:418,
  34:428,
  35:434,
  36:440,
  37:446,
  38:453,
  39:458,
  40:467,
  41:477,
  42:483,
  43:489,
  44:496,
  45:499,
  46:502,
  47:507,
  48:511,
  49:515,
  50:518,
  51:520,
  52:523,
  53:526,
  54:528,
  55:531,
  56:534,
  57:537,
  58:540,
  59:542,
  60:544,
  61:545,
  62:546,
  63:547,
  64:548,
  65:549,
  66:550,
  67:551,
  68:552,
  69:553,
  70:554,
  71:555,
  72:556,
  73:557,
  74:558,
  75:559,
  76:560,
  77:561,
  78:562,
  79:563,
  80:564,
  81:565,
  82:566,
  83:567,
  84:568,
  85:569,
  86:570,
  87:571,
  88:572,
  89:573,
  90:574,
  91:575,
  92:576,
  93:577,
  94:578,
  95:579,
  96:580,
  97:581,
  98:582,
  99:583,
  100:584,
  101:585,
  102:586,
  103:587,
  104:588,
  105:589,
  106:590,
  107:591,
  108:592,
  109:593,
  110:594,
  111:595,
  112:596,
  113:597,
  114:598
};


/*
  Load Quran page
*/
async function renderQuranPage(pageNumber){

  const container =
    document.getElementById("quranLines");

  const title =
    document.getElementById("surahName");

  container.innerHTML =
    '<div class="line">قرآن پاک لوڈ ہو رہا ہے...</div>';

  try{

    /*
      Public Quran API.
      Uthmani text is used for safe digital display.
    */

    const response =
      await fetch(
        API +
        pageNumber +
        "/quran-uthmani"
      );

    if(!response.ok){
      throw new Error("Network error");
    }

    const result =
      await response.json();

    const ayahs =
      result.data.ayahs || [];

    container.innerHTML = "";

    if(ayahs.length === 0){

      container.innerHTML =
        '<div class="line">اس صفحے کا متن دستیاب نہیں۔</div>';

      return;
    }

    /*
      Show page content
    */

    ayahs.forEach(function(ayah){

      const line =
        document.createElement("div");

      line.className="line";

      line.textContent =
        ayah.text +
        " ﴿" +
        ayah.numberInSurah +
        "﴾";

      container.appendChild(line);

      /*
        Update displayed Surah name
      */

      if(ayah.surah){

        title.textContent =
          ayah.surah.name;

      }

    });

  }catch(error){

    console.error(error);

    container.innerHTML =
      '<div class="line">' +
      'قرآن کا متن لوڈ نہیں ہو سکا۔<br>' +
      'براہِ کرم انٹرنیٹ چیک کریں۔' +
      '</div>';

  }

}


/*
  First page automatically loads
*/

document.addEventListener(
 "DOMContentLoaded",
 function(){

   renderQuranPage(1);

 }
);
