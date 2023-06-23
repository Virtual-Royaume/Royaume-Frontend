import type { Member, Techno } from "./member.type";

const Svelte: Techno = { name: "Svelte", icon: "svelte.png" };
const React: Techno = { name: "React", icon: "react.png" };
const VueJS: Techno = { name: "VueJS", icon: "vuejs.png" };
const Supabase: Techno = { name: "Supabase", icon: "supabase.png" };
const TypeScript: Techno = { name: "TypeScript", icon: "typescript.png" };
const Prisma: Techno = { name: "Prisma", icon: "prisma.png" };
const TailwindCSS: Techno = { name: "TailwindCSS", icon: "tailwindcss.png" };
const Rust: Techno = { name: "Rust", icon: "rust.png" };

export const technoList: Techno[] = [Svelte, React, VueJS, Supabase, TypeScript, Prisma, TailwindCSS, Rust];

export const members: Member[] = [
  {
    tag: "leobdt",
    username: "léo",
    profilePicture: "https://cdn.discordapp.com/avatars/161097653214511104/6225c92c6c8f404a1d5dfae3c5695139.webp",
    technologies: [],
    birthday: 1032912000000,
    location: "France"
  },
  {
    tag: "king_dk",
    username: "KDK",
    profilePicture: "https://cdn.discordapp.com/avatars/162633729703936001/98378f85cd7835b57bfbd8201dc5e281.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "jycouet",
    username: "jycouet",
    profilePicture: "https://cdn.discordapp.com/avatars/198142399002836992/c2b8ad06a4190808cc5ad95ca3dc5747.webp",
    technologies: [Svelte, TypeScript],
    birthday: null,
    location: "France"
  },
  {
    tag: "ascarde",
    username: "Ascarde",
    profilePicture: "https://cdn.discordapp.com/avatars/217707707388395520/9beb2d6d33aba5f1dece189b04b0bf4c.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "bluzzi",
    username: "Bluzzi",
    description: [
      "Développeur frontend depuis 2016. Spécialisé dans l'écosystème JavaScript, je travaille principalement avec les frameworks React et Next."
    ].join(" "),
    profilePicture: "https://cdn.discordapp.com/avatars/233351173665456129/a_cee03ee0f97ee3c550840d584bc55c21.gif",
    technologies: [React, Svelte, TypeScript],
    birthday: 965260800000,
    location: "France",
    projects: [
      {
        name: "Symphonia",
        description: "Serveur Minecraft avec une expérience de jeu immersive créée à l'aide de React",
        technologies: [React, TypeScript, Supabase, Svelte],
        images: [
          "https://cdn.discordapp.com/attachments/927843710669062204/1118594253807943690/image_34_1.png"
        ]
      }
    ]
  },
  {
    tag: "julien.cng",
    username: "Juuu",
    profilePicture: "https://cdn.discordapp.com/avatars/245977535408504833/ba7389066ecfb1ee8d2da9145a70fa14.webp",
    technologies: [],
    birthday: 1076371200000,
    location: "France"
  },
  {
    tag: "diogolo",
    username: "Diogo",
    profilePicture: "https://cdn.discordapp.com/avatars/251006302946328577/783f35718b1320716f2a9720157ab60d.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "swourire",
    username: "greg",
    profilePicture: "https://cdn.discordapp.com/embed/avatars/4.png",
    technologies: [],
    birthday: 1110758400000,
    location: "France"
  },
  {
    tag: "unarray",
    username: "Ethan",
    profilePicture: "https://cdn.discordapp.com/avatars/273135587660136448/522d2359a0fa2b739a9d67342a6b0be1.webp",
    technologies: [TypeScript],
    birthday: 1064361600000,
    location: "France"
  },
  {
    tag: "lycroh",
    username: "lycroh",
    profilePicture: "https://cdn.discordapp.com/avatars/282467935908528128/60e0c57437374178cde31778aba0a685.webp",
    technologies: [],
    birthday: 965260800000,
    location: "France"
  },
  {
    tag: "bilsou",
    username: "Bilsou",
    profilePicture: "https://cdn.discordapp.com/avatars/313674096389128193/0eaebf66bc96a25d2a1486bbdf296eeb.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "jed",
    username: "Jed",
    profilePicture: "https://cdn.discordapp.com/avatars/325891347514916864/4775a127fa0a1cb164a142204a7cc174.webp",
    technologies: [],
    birthday: 1127174400000,
    location: "France"
  },
  {
    tag: "seven",
    username: "Se7en",
    profilePicture: "https://cdn.discordapp.com/avatars/336917098582376449/62db433ba3406aafc5290147107524a9.webp",
    technologies: [],
    birthday: 1081641600000,
    location: "France"
  },
  {
    tag: "nexos",
    username: "Nexos",
    profilePicture: "https://cdn.discordapp.com/avatars/363606128946446336/979c2f61a7736d5167e970b7eef27593.webp",
    technologies: [],
    birthday: 1066003200000,
    location: "France"
  },
  {
    tag: "violett",
    username: "Violett",
    profilePicture: "https://cdn.discordapp.com/avatars/367007398956761088/0c5951ac228985ba4e63a4e08c3975f8.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "loupio",
    username: "Loupio",
    profilePicture: "https://cdn.discordapp.com/avatars/371298344921726978/2e12f0a06b95725bf492c1a22e43b4b6.webp",
    technologies: [TypeScript],
    birthday: null,
    location: "France"
  },
  {
    tag: "nkid",
    username: "NKid",
    profilePicture: "https://cdn.discordapp.com/avatars/394224708230447105/c229e86d050a8c9ef03eb1acb76fcc14.webp",
    technologies: [],
    birthday: 1133568000000,
    location: "France"
  },
  {
    tag: "khiiro",
    username: "khiir0",
    profilePicture: "https://cdn.discordapp.com/avatars/418432024999755778/1472dc59e1961d6670a0f57080ffce80.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "xenboot",
    username: "Matt.",
    profilePicture: "https://cdn.discordapp.com/avatars/421748266565369866/d4da11fc3ba276345a31e9bc4ff4bb3d.webp",
    technologies: [],
    birthday: 1025740800000,
    location: "France"
  },
  {
    tag: "atheos",
    username: "ΛTHEOS",
    profilePicture: "https://cdn.discordapp.com/avatars/439813670604898306/ec3b9cbe6e117f50660d857b66ba2a83.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "sirshoko",
    username: "shoko",
    profilePicture: "https://cdn.discordapp.com/avatars/448308994902327296/d368c4713e2785934c15bf1e2672ed16.webp",
    technologies: [],
    birthday: 1095120000000,
    location: "Montréal, Canada"
  },
  {
    tag: "kazoudev",
    username: "Hola",
    profilePicture: "https://cdn.discordapp.com/avatars/455497297183113227/98c29cad855bf4748c4cc46931d1dd81.webp",
    technologies: [],
    birthday: 1094688000000,
    location: "France"
  },
  {
    tag: "oxiiboux",
    username: "Oxiiboux",
    profilePicture: "https://cdn.discordapp.com/avatars/468022825295282186/b9d62feaa1d5454b514075c276ba55e1.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "tezuls",
    username: "TEZULS",
    profilePicture: "https://cdn.discordapp.com/avatars/495901655133323265/fc0d218f12952071b6ad6cc18cc4d8a2.webp",
    technologies: [],
    birthday: 1161129600000,
    location: "France"
  },
  {
    tag: "romainsav",
    username: "RomainSav",
    profilePicture: "https://cdn.discordapp.com/avatars/533306853317279773/59ba1df9f55667877a145b9eceb89a2e.webp",
    technologies: [React, Svelte],
    birthday: 1098230400000,
    location: "France",
    socials: [
      { type: "github", username: "RomainSav", url: "https://github.com/RomainSav" },
      { type: "twitter", username: "RomainSav", url: "https://twitter.com/RomainSav" }
    ],
    canBeContacted: true
  },
  {
    tag: "standlly",
    username: "Standlly",
    profilePicture: "https://cdn.discordapp.com/avatars/550070384842637332/97572cda2dfbc8711f547b38ebd0f8ba.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "melvin",
    username: "melvin",
    profilePicture: "https://cdn.discordapp.com/embed/avatars/4.png",
    technologies: [React],
    birthday: 1042675200000,
    location: "France"
  },
  {
    tag: "refaltor",
    username: "Refaltor",
    profilePicture: "https://cdn.discordapp.com/avatars/780897077429141534/831f45d44a9bfc162594f34a8cd58910.webp",
    technologies: [],
    birthday: 1098921600000,
    location: "France"
  },
  {
    tag: "nayzs",
    username: "nayzs",
    profilePicture: "https://cdn.discordapp.com/avatars/805027319856103485/81f5843878f68ccc5340636f088c8b88.webp",
    technologies: [],
    birthday: null
  },
  {
    tag: "szeroki",
    username: "szeroki",
    profilePicture: "https://cdn.discordapp.com/avatars/810596177857871913/a_af6b652067d9c9b84a30e1215bfe4482.gif",
    technologies: [VueJS],
    birthday: 1109030400000,
    location: "France"
  },
  {
    tag: "squash",
    username: "Squash",
    profilePicture: "https://cdn.discordapp.com/avatars/947125111981506601/b262caae516ef4b7409b27890cfd5868.webp",
    technologies: [],
    birthday: 1190246400000,
    location: "France"
  },
  {
    tag: "akumii",
    username: "Akumii",
    profilePicture: "https://cdn.discordapp.com/avatars/693139773677764709/a_b3fcb40d80e45b2ec40b4de808d2c713.gif",
    technologies: [],
    birthday: 1128384000000,
    location: "France"
  },
  {
    tag: "steellgold",
    username: "Gaëtan 🐈",
    description: "Je suis développeur back-end sur TypeScript, ainsi que sur PHP.",
    profilePicture: "https://cdn.discordapp.com/avatars/504392983244832780/555d2435b8837ecb8d331a7dd049759a.webp",
    technologies: [Svelte, Supabase, TypeScript],
    birthday: 1097712000000,
    location: "Kingersheim, France",
    socials: [
      { type: "github", username: "Steellgold", url: "https://github.com/Steellgold" },
      { type: "twitter", username: "Steellgold", url: "https://twitter.com/Steellgold" },
      { type: "linkedin", username: "Gaëtan Huszovits", url: "https://www.linkedin.com/in/gaetanhus" },
      { type: "website", username: "steellgold.fr", url: "https://steellgold.fr" }
    ]
  },
  {
    tag: "azalee",
    username: "Azalee",
    profilePicture: "https://cdn.discordapp.com/avatars/846395226640613396/a500d473ac161edc2bdb658ccb06eb15.webp",
    technologies: [],
    birthday: 1128211200000,
    location: "France"
  },
  {
    tag: "yanoox",
    username: "Yanoox",
    profilePicture: "https://cdn.discordapp.com/avatars/770640705840218134/d88c552f83aa4e6637c89365460c94bc.webp",
    technologies: [],
    birthday: 1109635200000,
    location: "France"
  },
  {
    tag: "mathisg",
    username: "Mathis.G",
    profilePicture: "https://cdn.discordapp.com/avatars/884719148725309460/95ab1cda87b92af9c8785d37537157da.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "qkimi",
    username: "KiMi",
    profilePicture: "https://cdn.discordapp.com/avatars/558793081663782913/271551e6168f6b274035fca4b48daca7.webp",
    technologies: [],
    birthday: 992332800000,
    location: "France"
  },
  {
    tag: "sarcraft",
    username: "SarCraft",
    profilePicture: "https://cdn.discordapp.com/avatars/417628102831767566/41873c6600061512043e266571176b3f.webp",
    technologies: [],
    birthday: 1103500800000,
    location: "France"
  },
  {
    tag: "tarzax",
    username: "Tarzax",
    profilePicture: "https://cdn.discordapp.com/avatars/1004808383104290847/67704f88088da7c19a540f06d00719c6.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "royal",
    username: "🇫🇷⚜royal⚜🇫🇷",
    profilePicture: "https://cdn.discordapp.com/avatars/883693434693619732/dc0cbd49eda4aaac9ba5f515ddba351a.webp",
    technologies: [],
    birthday: 1016409600000,
    location: "Mulhouse, France"
  },
  {
    tag: "v4iz",
    username: "𝐕4𝐈𝐙 🐰⃤",
    profilePicture: "https://cdn.discordapp.com/avatars/364118849102282772/3aac6466d79784b51a78970684c4d04b.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "slayyz",
    username: "Slayyz",
    profilePicture: "https://cdn.discordapp.com/avatars/358964296207826945/b8563a8afdab7573928f4ad0d5ebd8e1.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "bysy",
    username: "Bysy",
    profilePicture: "https://cdn.discordapp.com/avatars/304668906751262721/699646df3cd8e09a5212f5d89c04cfd3.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "nyrok",
    username: "Nyrok",
    profilePicture: "https://cdn.discordapp.com/avatars/925143545449418833/b28472f470d153a07be3cb53b8d066aa.webp",
    technologies: [],
    birthday: 1084665600000,
    location: "France"
  },
  {
    tag: "shvz",
    username: "shvz",
    profilePicture: "https://cdn.discordapp.com/avatars/110108556342104064/c110408c3be5a167218c5a499a7b705d.webp",
    technologies: [],
    birthday: 566524800000,
    location: "Pologne"
  },
  {
    tag: "versace",
    username: "VERSACE",
    profilePicture: "https://cdn.discordapp.com/avatars/864519592307327006/e2b41614ad1d3574bbe799f04f468088.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "julien",
    username: "Julien",
    profilePicture: "https://cdn.discordapp.com/avatars/380325895338065920/f5f8ecd4d1679118191638a464f75bd2.webp",
    technologies: [],
    birthday: 1177027200000,
    location: "France"
  },
  {
    tag: "findo",
    username: "F1D0",
    profilePicture: "https://cdn.discordapp.com/avatars/253616158895243264/46bffbf8330c146931d6a3dacb4d23cf.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "withegroop",
    username: "withegroop",
    profilePicture: "https://cdn.discordapp.com/avatars/342962020251074570/8d568c9b43ab2acb65f43b9f66c77a2f.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "white",
    username: "𝑾𝒉𝒊𝒕𝒆",
    profilePicture: "https://cdn.discordapp.com/avatars/842484661178466346/3be5a1ce4457cf6fcad720b8a008f3a8.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "jarodlge",
    username: "JarodLge",
    profilePicture: "https://cdn.discordapp.com/avatars/988159657430372423/714ecf3ec830c6fa0fc3bdb9cb6c816e.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "a6f",
    username: "TheBrain",
    profilePicture: "https://cdn.discordapp.com/avatars/570153997667926016/a_ad20a1476cb68960263026f00110f780.gif",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "loupsteb",
    username: "loupsteb",
    profilePicture: "https://cdn.discordapp.com/avatars/994547270785716315/e6f68a07919caac970636990fc38b458.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "onirez",
    username: "Onirez",
    profilePicture: "https://cdn.discordapp.com/avatars/965544860528562216/a1393eef77db4e28136a46fceb2d2c9a.webp",
    technologies: [],
    birthday: 1063843200000,
    location: "France"
  },
  {
    tag: "saku",
    username: "Saku",
    description: "Actuellement étudiant en tant que développeur web. Je me spécialise dans l'écosystème Javascript. J'utilise React ainsi que Next.",
    profilePicture: "https://cdn.discordapp.com/avatars/264015944580464640/637e9ddc56668737e0813bc2a6559e96.webp",
    technologies: [React, TypeScript],
    birthday: 1011963600000,
    location: "France",
    socials: [
      { type: "github", username: "Sakoutecher", url: "https://github.com/Sakoutecher" }
    ],
    canBeContacted: true
  },
  {
    tag: "warkingqc",
    username: "WarKingQc",
    profilePicture: "https://cdn.discordapp.com/avatars/466049963877466113/2a7287e7ee26e8164afee9efb65713d5.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "edwig",
    username: "Edwig",
    profilePicture: "https://cdn.discordapp.com/avatars/1043227019674132551/a_7a055a8e3b3ba1bcb1efa5e965c15575.gif",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "mala",
    username: "mala",
    profilePicture: "https://cdn.discordapp.com/avatars/1010262065509838848/669deff433e73103129b1248b6725ba6.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "arcoz",
    username: "Arcoz",
    profilePicture: "https://cdn.discordapp.com/avatars/457144873859022858/a_675d51012aea6771b48e6b0bc4036bd6.gif",
    technologies: [],
    birthday: 1119484800000,
    location: "Suisse"
  },
  {
    tag: "geotre223",
    username: "!\" geotre223",
    profilePicture: "https://cdn.discordapp.com/avatars/1098496962799620147/edab3529de5d932b42f2806554af37b1.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "azuma",
    username: "Azuma",
    profilePicture: "https://cdn.discordapp.com/avatars/914886978108002314/eb0b18aaea317ddd2dadbb4ead229a20.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "dayx",
    username: "Dayx",
    profilePicture: "https://cdn.discordapp.com/avatars/1044932275269287966/a_e5e5a1ee2edc56633371d14eb4da1204.gif",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "mystical",
    username: "Mystical Wizard Guild",
    profilePicture: "https://cdn.discordapp.com/avatars/974185927708659712/05b8063a3a1869f0453ebf4da45fc738.webp",
    technologies: [],
    birthday: 1081296000000,
    location: "France"
  },
  {
    tag: "elfelyrique",
    username: "ElfeLyrique640",
    profilePicture: "https://cdn.discordapp.com/avatars/390471752691482625/599c4104fadb2214973c8fff3bda9269.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "sayuki",
    username: "Sayuki",
    profilePicture: "https://cdn.discordapp.com/avatars/287660180412301323/627f563d23859dcebe0850e2ff5bd061.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "ember",
    username: "Ember",
    profilePicture: "https://cdn.discordapp.com/avatars/815513219120103424/279472f04ee4e8e362e5e6960fdaa815.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "nicolas",
    username: "ℕ𝕚𝕔𝕠𝕝𝕒𝕤",
    profilePicture: "https://cdn.discordapp.com/avatars/680395218830491665/721ecdb40c752406ca8b18364cca29c1.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "antonin",
    username: "antoninᴮᴴ",
    profilePicture: "https://cdn.discordapp.com/avatars/324607306031693824/e5147aef09d160765c72286439589061.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "roimeesix",
    username: "Roi mee6",
    profilePicture: "https://cdn.discordapp.com/avatars/1042541730823667814/c0df6201b1439c188e01474465fcad2f.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "arc",
    username: "Arc",
    profilePicture: "https://cdn.discordapp.com/avatars/725134640708583447/a_e2fee70ec0280318632d77c9c413dbcb.gif",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "sehli",
    username: "Sehli",
    profilePicture: "https://cdn.discordapp.com/avatars/783414477574897716/e31e87d1e32b3ffefd9a5c82f01dca3b.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "asphalion",
    username: "! [MAIN] Asphalion",
    profilePicture: "https://cdn.discordapp.com/avatars/1036734317419839628/d1f15c387259a24d41b2faad09b6c6e1.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "gotlub",
    username: "Gotlub",
    profilePicture: "https://cdn.discordapp.com/attachments/927843710669062204/1118575005744246975/3MfzEAA.png",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "natom",
    username: "ҒҭẊ ・Natom",
    profilePicture: "https://cdn.discordapp.com/avatars/901590168010649621/d6a7cf6d97eec2eee8639f3446b44d5a.webp",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "dmlsurmc",
    username: "dml",
    description: [
      "Je m'appelle Djamel, j'ai 16 ans, je vie en région Parisienne, depuis tout petit je suis passionné par l'informatique,",
      "depuis un petit moment je me suis mis au Développement Web, j'utilise exclusivement le Framework Svelte.",
      "Mon rêve est de créer mon propre jeu vidéo un jour."
    ].join(" "),
    profilePicture: "https://cdn.discordapp.com/avatars/1111963529440931970/c8cde5f7f1bdbf5d5956a06f0de1c0ba.webp",
    technologies: [Svelte],
    birthday: 1154476800000,
    socials: [
      { type: "github", url: "https://github.com/DMLSurGithub/", "username": "DMLSurGithub" },
      { type: "website", url: "https://dml-portfolio.me//", "username": "Portfolio" }
    ],
    location: "Paris, France"
  },
  {
    tag: "chaika",
    username: "Chaika9",
    profilePicture: "https://cdn.discordapp.com/avatars/213239588938842112/a_ea7f0090d8af7b97069edde15dcddced.gif",
    technologies: [],
    birthday: null,
    location: "France"
  },
  {
    tag: "reactedtitan",
    username: "Reactedtitan880",
    profilePicture: "https://cdn.discordapp.com/avatars/679009684266680330/a_d946923c24811e8be80c7bc672b19607.gif",
    technologies: [],
    birthday: null,
    location: "France"
  }
];