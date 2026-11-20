type ChatItem = {
  kind: "me" | "ecqqo" | "voice" | "doc";
  text: string;
  time: string;
  footer?: string;
  detail?: string;
};

type Feature = { name: string; text: string; chat: ChatItem[] };

type AlertIcon = "calendar" | "sign" | "doc" | "coffee" | "bill";

type HeroMessage = {
  from: "me" | "ecqqo";
  lines: string[];
  quote?: { name: string; text: string };
  footer?: string;
  time: string;
};

type WaChat = {
  name: string;
  text: string;
  time: string;
  unread: number;
  group?: boolean;
  pinned?: boolean;
  muted?: boolean;
  mine?: boolean;
  sender?: string;
  avatar?: string;
  typing?: boolean;
  mention?: boolean;
  missed?: boolean;
  media?: "voice" | "photo" | "doc" | "poll";
};

const features = (list: Feature[]) => list;
const waChats = (list: WaChat[]) => list;
const groupMessages = (list: { from: string; text: string; time: string; kind?: "voice" | "photo" }[]) => list;
const heroMessages = (list: HeroMessage[]) => list;
const alertMessages = (list: { name: string; text: string; level: number; icon: AlertIcon }[]) => list;

const en = {
  pageTitle: "Ecqqo | Your AI executive assistant in WhatsApp",
  brandName: "ecqqo",
  nav: {
    what: "What it does",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    cta: "Message Ecqqo",
    language: "Language",
    menu: "Menu",
  },
  hero: {
    title: { before: "Never leave an important WhatsApp message ", highlight: "on read", after: "." },
    seen: "Seen",
    sub: "Ecqqo helps executives and founders miss 90% fewer important messages by flagging them instantly, then getting the meeting booked, the email sent and the reminder set in one reply. Set up in 5 minutes.",
    cta: "Message Ecqqo on WhatsApp",
    worksWith: "Works with",
  },
  chat: {
    name: "Ecqqo",
    status: "Business account",
    typing: "typing…",
    today: "Today",
    from: "From",
    note: "Accelerated for illustration.",
    messages: heroMessages([
      {
        from: "ecqqo",
        lines: ["I flagged an urgent WhatsApp message."],
        quote: { name: "Omar Haddad", text: "Can we confirm Thursday's call? I need to lock the term sheet." },
        time: "9:12 AM",
      },
      { from: "me", lines: ["Find 30 minutes with him Thursday afternoon and send the invite"], time: "9:13 AM" },
      {
        from: "ecqqo",
        lines: ["Found Omar in your email. Booked Thu 2:00–2:30 PM and sent the invite to omar@gulfcapital.com."],
        footer: "Event scheduled",
        time: "9:13 AM",
      },
      { from: "me", lines: ["What needs me today?"], time: "9:31 AM" },
      {
        from: "ecqqo",
        lines: ["3 things:", "• Reply to Sarah on the board deck", "• Sign the NDA from Legal", "• 4:00 PM investor call"],
        time: "9:31 AM",
      },
    ]),
  },
  modes: {
    title: "Two in one assistant.",
    watch: {
      tab: "Watches for you",
      features: features([
        { name: "Urgent alerts", text: "Ecqqo reads your WhatsApp chats and interrupts you only when it matters.", chat: [] },
        {
          name: "Briefings",
          text: "A daily or weekly PDF report with a summary, highlights and action items, at the time you choose.",
          chat: [
            { kind: "ecqqo", text: "Good morning. Your weekly report is ready.", time: "7:30 AM" },
            { kind: "doc", text: "Weekly report", detail: "PDF · 2 pages", time: "7:30 AM" },
          ],
        },
        {
          name: "Your day",
          text: "Ask what needs you and get one straight answer from across your inbox, calendar and chats.",
          chat: [
            { kind: "me", text: "What needs me today?", time: "1:05 PM" },
            {
              kind: "ecqqo",
              text: "Three things:\n• Board prep at 2 PM. The deck is still in draft\n• Jane Chen needs the cap table by Friday\n• Acme renewal is waiting on legal's redlines",
              time: "1:05 PM",
            },
          ],
        },
      ]),
    },
    work: {
      tab: "Works for you",
      features: features([
        {
          name: "Calendar",
          text: "Tell Ecqqo who and when.",
          chat: [
            { kind: "me", text: "Move my 4:30 with Sarah to tomorrow morning", time: "3:12 PM" },
            { kind: "ecqqo", text: "Moved to Fri 10:00–10:30 AM. Sarah has the new invite.", footer: "Event updated", time: "3:12 PM" },
          ],
        },
        {
          name: "Email",
          text: "Search your inbox, or reply in your own words.",
          chat: [
            { kind: "me", text: "Reply to Priya that we're good to sign Friday", time: "11:40 AM" },
            {
              kind: "ecqqo",
              text: "Found Priya Shah in your email. Replied on “Re: Order form” to priya@northwind.com: we're good to sign Friday.",
              footer: "Email sent",
              time: "11:40 AM",
            },
          ],
        },
        {
          name: "Reminders",
          text: "Set a reminder in plain words.",
          chat: [
            { kind: "me", text: "Remind me at 5 to call Omar", time: "2:20 PM" },
            { kind: "ecqqo", text: "Done. I'll remind you at 5:00 PM.", footer: "Reminder set", time: "2:20 PM" },
          ],
        },
        {
          name: "Voice & photos",
          text: "Send a voice note, a photo or a screenshot instead of typing.",
          chat: [
            { kind: "voice", text: "0:07", time: "9:02 AM" },
            {
              kind: "ecqqo",
              text: "Moved the investor sync to Thursday 10 AM and emailed Mark.",
              footer: "Event updated · Email sent",
              time: "9:02 AM",
            },
          ],
        },
      ]),
    },
  },
  alerts: {
    sensitivity: "Sensitivity",
    levels: ["Minimal", "Moderate", "Most"],
    flagged: "Alert sent",
    quiet: "No alert",
    messages: alertMessages([
      { name: "Omar Haddad", text: "Can we confirm Thursday? I need to lock the term sheet.", level: 1, icon: "calendar" },
      { name: "Legal team", text: "The NDA is ready and needs your signature today.", level: 2, icon: "sign" },
      { name: "Sarah Chen", text: "Sent the board deck. Feedback when you can.", level: 3, icon: "doc" },
      { name: "Karim", text: "Lunch sometime next week?", level: 0, icon: "coffee" },
      { name: "Office supplies", text: "Your monthly invoice is attached.", level: 0, icon: "bill" },
    ]),
  },
  showcase: {
    title: "Your day on one screen.",
    subtitle: "Shared with your assistant.",
    app: {
      initials: "KA",
      greeting: "Good morning, Khalid",
      date: "Thursday 12 November",
      chats: waChats([
        { name: "Family", text: "0:42", time: "9:10", unread: 24, group: true, pinned: true, sender: "Mum", media: "voice", avatar: "family" },
        { name: "Omar Haddad", text: "Can we confirm Thursday's call? I need to lock the term sheet.", time: "9:12", unread: 3, avatar: "omar" },
        { name: "Marina Heights Residents", text: "Water will be off from 10 to 2 tomorrow.", time: "9:11", unread: 87, group: true, muted: true, sender: "~ Yousef", avatar: "tower" },
        { name: "Board members", text: "@Khalid cap table before Friday, please.", time: "9:08", unread: 12, group: true, mention: true, sender: "Jane", avatar: "board" },
        { name: "Thursday Football", text: "Ali is typing…", time: "9:07", unread: 31, group: true, typing: true, avatar: "football" },
        { name: "Legal team", text: "The NDA is ready and needs your signature.", time: "8:47", unread: 2, group: true, sender: "Hana", avatar: "legal" },
        { name: "Ahmed Driver", text: "Missed voice call", time: "8:40", unread: 1, missed: true, avatar: "keys" },
        { name: "School parents", text: "Sports day snacks", time: "8:31", unread: 58, group: true, muted: true, sender: "~ Aisha", media: "poll", avatar: "school" },
        { name: "Karim", text: "Lunch sometime next week?", time: "8:30", unread: 1, avatar: "karim" },
        { name: "Sadaf Holdings", text: "Photo", time: "8:12", unread: 4, media: "photo", avatar: "sadaf" },
        { name: "Mum", text: "Did you eat breakfast?", time: "8:09", unread: 2, avatar: "mum" },
        { name: "Abu Faisal", text: "1:15", time: "8:02", unread: 1, media: "voice", avatar: "falcon" },
        { name: "Office supplies", text: "Invoice-November.pdf", time: "7:58", unread: 1, media: "doc", avatar: "office" },
        { name: "Marina Gym", text: "Your membership renews on Monday.", time: "7:30", unread: 1, avatar: "gym" },
        { name: "Mark Reyes", text: "Sure, let me check my calendar.", time: "Yesterday", unread: 0, mine: true, avatar: "mark" },
      ]),
      wa: {
        title: "Chats",
        search: "Ask Meta AI or Search",
        filters: ["All", "Unread 14", "Favorites", "Groups"],
        tabs: ["Updates", "Calls", "Communities", "Chats", "Settings"],
        sidebar: ["Chats", "Updates", "Calls", "Media"],
        more: ["Archived", "Starred"],
        you: "You",
        today: "Today",
        group: {
          name: "Family",
          members: "Mum, Dad, Sara, Yousef, You",
          messages: groupMessages([
            { from: "Mum", text: "Who's picking up Sara today?", time: "8:52" },
            { from: "Yousef", text: "Not me, practice until 5", time: "8:53" },
            { from: "Dad", text: "", time: "8:58", kind: "photo" },
            { from: "Sara", text: "Can someone bring my sports kit?? 🙏🙏", time: "9:02" },
            { from: "Yousef", text: "😂😂😂", time: "9:04" },
            { from: "Mum", text: "0:42", time: "9:10", kind: "voice" },
          ]),
        },
        compare: "Compare",
        before: "Without Ecqqo",
        after: "With Ecqqo",
      },
      today: {
        nav: ["Today", "Activity", "Routines", "Alerts", "Reminders", "Tasks", "Settings"],
        tabs: ["Today", "Activity", "Tasks", "Alerts", "More"],
        brief: {
          title: "Latest from your routines",
          time: "Today · 07:30",
          intro: "Good morning. Two things need you today:",
          points: ["Confirm Thursday's call with Omar.", "Sign the NDA from Legal."],
          outro: "Everything else is handled.",
          link: "All routine updates",
        },
        tasks: {
          title: "Tasks",
          all: "All tasks",
          group: "Due today",
          items: [
            { title: "Sign the NDA", meta: "Due today · Not started" },
            { title: "Book Thursday's call with Omar", meta: "Due today · Lina is on it" },
          ],
        },
        alerts: {
          title: "Alerts",
          meta: "Flagged by Ecqqo",
          items: [
            { initials: "OH", text: "Omar Haddad wants to confirm Thursday's call.", from: "Omar Haddad · 09:12" },
            { initials: "JC", text: "Jane Chen needs the cap table before Friday.", from: "Jane Chen · 09:08" },
          ],
        },
        saved: { title: "Time saved", meta: "Last 14 days", hours: "6", minutes: "12" },
        reminders: {
          title: "Reminders",
          all: "All",
          items: [
            { text: "Call Omar back.", time: "Today · 16:00" },
            { text: "Review the Q3 hiring plan.", time: "Mon 16 Nov · 09:00" },
          ],
        },
      },
    },
  },
  privacy: {
    title: "Your messages stay yours.",
    subtitle: "You choose what Ecqqo sees.",
    promises: [
      "Never sold or used for ads",
      "Never used to train AI",
      "Encrypted in transit and at rest",
      "Passwords and card numbers removed automatically",
      "Disconnect or delete anytime",
    ],
    gdpr: "GDPR compliant",
  },
  calculator: {
    title: "What is your time worth?",
    rate: "Your time is worth",
    hoursBack: "Time back",
    value: "Worth",
    roi: "Return",
    perMonth: "per month",
    roiNote: "the Solo plan",
    note: "Assumes about 10 hours a week on messages, email and scheduling, with Ecqqo handling about a quarter of it.",
  },
  pricing: {
    title: "Choose a plan that works for you.",
    month: "/month",
    cta: "Start on WhatsApp",
    recommended: "Recommended",
    plans: [
      {
        name: "Solo",
        price: "$20",
        audience: "Ecqqo is your assistant.",
        features: [
          "Urgent alerts and PDF briefings",
          "Meetings, email and reminders from chat",
          "Voice notes and photos",
          "1 connected email & calendar account",
          "$4 of assistant usage included monthly",
        ],
      },
      {
        name: "Delegate",
        price: "$100",
        audience: "Ecqqo plus your human assistant.",
        features: [
          "Everything in Solo",
          "Hand tasks to your assistant from the same chat",
          "Web command center with tasks, alerts and activity",
          "Standing instructions for briefings, alerts and chat style",
          "10 connected email & calendar accounts",
          "$20 of assistant usage included monthly",
        ],
      },
    ],
    note: "Usage beyond your included credit is billed at cost on your next invoice. Turn on a usage limit anytime in settings, and cancel anytime from the billing portal.",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "How do I get started?", a: "Message Ecqqo on WhatsApp at +1 281-944-5450. You'll receive a reply with a secure link where you pick a plan and connect your WhatsApp, email and calendar. It takes a few minutes." },
      { q: "What's the difference between Solo and Delegate?", a: "On Solo, Ecqqo is your assistant: it keeps watch and does what you ask. On Delegate, you additionally invite your human assistant. You hand them tasks from the same WhatsApp chat, they work from their own Ecqqo workspace, and you follow everything in the web command center." },
      { q: "Will Ecqqo message people on my behalf?", a: "No. Ecqqo doesn't auto-reply to your contacts. It alerts you when something important comes in, and it sends emails or invites only when you ask." },
      { q: "How is my data handled?", a: "Ecqqo is GDPR compliant. It connects through Meta's official WhatsApp platform and secure sign-in for Google and Microsoft accounts, never sells your data or uses it to train AI, and deletes it whenever you ask. You can disconnect any account at any time." },
    ],
  },
  final: {
    title: "Stop keeping people waiting.",
  },
  contact: {
    title: "Contact us",
    name: "Name",
    email: "Email",
    category: "Category",
    chooseCategory: "Select a category",
    categories: {
      general: "General inquiry",
      "tech-support": "Tech support",
      billing: "Billing",
      "data-deletion": "Privacy and data requests",
      partnerships: "Partnerships",
      other: "Other",
    },
    subject: "Title",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks. We've got your message and will reply by email.",
    failed: "Something went wrong. Please try again in a minute.",
  },
  footer: {
    tagline: "Your AI executive assistant in WhatsApp.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    dataDeletion: "Data Deletion",
  },
};

const phone = "⁦+1 281-944-5450⁩";

const ar: typeof en = {
  pageTitle: "ايكو | مساعدك التنفيذي في واتساب",
  brandName: "ايكو",
  nav: {
    what: "ماذا يفعل",
    pricing: "الأسعار",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    cta: "راسل ايكو",
    language: "اللغة",
    menu: "القائمة",
  },
  hero: {
    title: { before: "لا تترك رسالة واتساب مهمة ", highlight: "دون رد", after: "." },
    seen: "تمت القراءة",
    sub: "يساعد ايكو التنفيذيين والمؤسسين على تفويت رسائل مهمة أقل بنسبة 90%، إذ ينبّههم إليها فوراً، ثم يحجز الاجتماع ويرسل البريد ويضبط التذكير برد واحد. الإعداد خلال 5 دقائق.",
    cta: "راسل ايكو على واتساب",
    worksWith: "يعمل مع",
  },
  chat: {
    name: "ايكو",
    status: "حساب تجاري",
    typing: "يكتب…",
    today: "اليوم",
    from: "From",
    note: "العرض مُسرَّع للتوضيح.",
    messages: heroMessages([
      {
        from: "ecqqo",
        lines: ["I flagged an urgent WhatsApp message."],
        quote: { name: "عمر حداد", text: "هل نؤكد مكالمة الخميس؟ أحتاج إلى إنهاء ورقة الشروط." },
        time: "9:12 ص",
      },
      { from: "me", lines: ["اعثر على نصف ساعة معه الخميس بعد الظهر وأرسل الدعوة"], time: "9:13 ص" },
      {
        from: "ecqqo",
        lines: ["وجدت عمر في بريدك. حجزت الخميس 2:00–2:30 م وأرسلت الدعوة إلى omar@gulfcapital.com."],
        footer: "Event scheduled",
        time: "9:13 ص",
      },
      { from: "me", lines: ["ما الذي ينتظرني اليوم؟"], time: "9:31 ص" },
      {
        from: "ecqqo",
        lines: ["3 أمور:", "• الرد على سارة بشأن عرض مجلس الإدارة", "• توقيع اتفاقية السرية من القسم القانوني", "• مكالمة المستثمر 4:00 م"],
        time: "9:31 ص",
      },
    ]),
  },
  modes: {
    title: "مساعد واحد بمهمتين.",
    watch: {
      tab: "يراقب لأجلك",
      features: features([
        { name: "تنبيهات عاجلة", text: "يقرأ ايكو محادثاتك على واتساب ولا يقاطعك إلا عندما يهم الأمر.", chat: [] },
        {
          name: "التقارير",
          text: "تقرير PDF يومي أو أسبوعي بملخص وأبرز النقاط وبنود العمل، في الوقت الذي تختاره.",
          chat: [
            { kind: "ecqqo", text: "صباح الخير. تقريرك الأسبوعي جاهز.", time: "7:30 ص" },
            { kind: "doc", text: "التقرير الأسبوعي", detail: "PDF · صفحتان", time: "7:30 ص" },
          ],
        },
        {
          name: "يومك",
          text: "اسأل عمّا يحتاج إليك واحصل على إجابة واحدة مباشرة من بريدك وتقويمك ومحادثاتك.",
          chat: [
            { kind: "me", text: "ما الذي ينتظرني اليوم؟", time: "1:05 م" },
            {
              kind: "ecqqo",
              text: "ثلاثة أمور:\n• تحضير المجلس الساعة 2 م، والعرض ما زال مسودة\n• جين تحتاج جدول الملكية قبل الجمعة\n• تجديد Acme بانتظار تعديلات القسم القانوني",
              time: "1:05 م",
            },
          ],
        },
      ]),
    },
    work: {
      tab: "يعمل لأجلك",
      features: features([
        {
          name: "التقويم",
          text: "أخبر ايكو بمن ومتى.",
          chat: [
            { kind: "me", text: "انقل اجتماع 4:30 مع سارة إلى صباح الغد", time: "3:12 م" },
            { kind: "ecqqo", text: "نقلته إلى الجمعة 10:00–10:30 ص، ووصلت سارة الدعوة الجديدة.", footer: "Event updated", time: "3:12 م" },
          ],
        },
        {
          name: "البريد",
          text: "ابحث في بريدك أو ردّ بكلماتك.",
          chat: [
            { kind: "me", text: "ردّ على بريا بأننا جاهزون للتوقيع يوم الجمعة", time: "11:40 ص" },
            {
              kind: "ecqqo",
              text: "وجدت بريا شاه في بريدك. رددت على «رد: نموذج الطلب» إلى priya@northwind.com: جاهزون للتوقيع يوم الجمعة.",
              footer: "Email sent",
              time: "11:40 ص",
            },
          ],
        },
        {
          name: "التذكيرات",
          text: "اطلب التذكير بكلماتك.",
          chat: [
            { kind: "me", text: "ذكّرني الساعة 5 بالاتصال بعمر", time: "2:20 م" },
            { kind: "ecqqo", text: "تم. سأذكّرك الساعة 5:00 م.", footer: "Reminder set", time: "2:20 م" },
          ],
        },
        {
          name: "الصوت والصور",
          text: "أرسل رسالة صوتية أو صورة أو لقطة شاشة بدل الكتابة.",
          chat: [
            { kind: "voice", text: "0:07", time: "9:02 ص" },
            {
              kind: "ecqqo",
              text: "نقلت اجتماع المستثمرين إلى الخميس 10 ص وراسلت مارك بالبريد.",
              footer: "Event updated · Email sent",
              time: "9:02 ص",
            },
          ],
        },
      ]),
    },
  },
  alerts: {
    sensitivity: "الحساسية",
    levels: ["الحد الأدنى", "متوسط", "معظمها"],
    flagged: "أُرسل تنبيه",
    quiet: "بلا تنبيه",
    messages: alertMessages([
      { name: "عمر حداد", text: "هل نؤكد موعد الخميس؟ أحتاج إلى إنهاء ورقة الشروط.", level: 1, icon: "calendar" },
      { name: "الفريق القانوني", text: "اتفاقية السرية جاهزة وتحتاج إلى توقيعك اليوم.", level: 2, icon: "sign" },
      { name: "سارة", text: "أرسلت عرض مجلس الإدارة، بانتظار ملاحظاتك.", level: 3, icon: "doc" },
      { name: "كريم", text: "غداء الأسبوع المقبل؟", level: 0, icon: "coffee" },
      { name: "مستلزمات المكتب", text: "مرفق فاتورتك الشهرية.", level: 0, icon: "bill" },
    ]),
  },
  showcase: {
    title: "يومك في شاشة واحدة.",
    subtitle: "تتشاركه مع مساعدك.",
    app: {
      initials: "خ",
      greeting: "صباح الخير يا خالد",
      date: "الخميس 12 نوفمبر",
      chats: waChats([
        { name: "العائلة", text: "0:42", time: "9:10", unread: 24, group: true, pinned: true, sender: "أمي", media: "voice", avatar: "family" },
        { name: "عمر حداد", text: "هل نؤكد مكالمة الخميس؟ أحتاج إلى إنهاء ورقة الشروط.", time: "9:12", unread: 3, avatar: "omar" },
        { name: "سكان مارينا هايتس", text: "ستنقطع المياه غداً من 10 إلى 2.", time: "9:11", unread: 87, group: true, muted: true, sender: "~ يوسف", avatar: "tower" },
        { name: "أعضاء مجلس الإدارة", text: "@خالد جدول الملكية قبل الجمعة من فضلك.", time: "9:08", unread: 12, group: true, mention: true, sender: "جين", avatar: "board" },
        { name: "كرة الخميس", text: "علي يكتب…", time: "9:07", unread: 31, group: true, typing: true, avatar: "football" },
        { name: "الفريق القانوني", text: "اتفاقية السرية جاهزة وتحتاج إلى توقيعك.", time: "8:47", unread: 2, group: true, sender: "هناء", avatar: "legal" },
        { name: "أحمد السائق", text: "مكالمة صوتية فائتة", time: "8:40", unread: 1, missed: true, avatar: "keys" },
        { name: "أولياء أمور المدرسة", text: "وجبات اليوم الرياضي", time: "8:31", unread: 58, group: true, muted: true, sender: "~ عائشة", media: "poll", avatar: "school" },
        { name: "كريم", text: "غداء الأسبوع المقبل؟", time: "8:30", unread: 1, avatar: "karim" },
        { name: "صدف القابضة", text: "صورة", time: "8:12", unread: 4, media: "photo", avatar: "sadaf" },
        { name: "أمي", text: "هل تناولت الفطور؟", time: "8:09", unread: 2, avatar: "mum" },
        { name: "أبو فيصل", text: "1:15", time: "8:02", unread: 1, media: "voice", avatar: "falcon" },
        { name: "مستلزمات المكتب", text: "Invoice-November.pdf", time: "7:58", unread: 1, media: "doc", avatar: "office" },
        { name: "نادي المارينا", text: "يتجدد اشتراكك يوم الإثنين.", time: "7:30", unread: 1, avatar: "gym" },
        { name: "مارك رييس", text: "أكيد، سأراجع تقويمي.", time: "أمس", unread: 0, mine: true, avatar: "mark" },
      ]),
      wa: {
        title: "الدردشات",
        search: "اسأل Meta AI أو ابحث",
        filters: ["الكل", "غير المقروءة 14", "المفضلة", "المجموعات"],
        tabs: ["المستجدات", "المكالمات", "المجتمعات", "الدردشات", "الإعدادات"],
        sidebar: ["الدردشات", "المستجدات", "المكالمات", "الوسائط"],
        more: ["المؤرشفة", "المميزة بنجمة"],
        you: "أنت",
        today: "اليوم",
        group: {
          name: "العائلة",
          members: "أمي، أبي، سارة، يوسف، أنت",
          messages: groupMessages([
            { from: "أمي", text: "من سيأخذ سارة اليوم؟", time: "8:52" },
            { from: "يوسف", text: "ليس أنا، عندي تمرين حتى 5", time: "8:53" },
            { from: "أبي", text: "", time: "8:58", kind: "photo" },
            { from: "سارة", text: "ممكن أحد يجيب ملابس الرياضة؟؟ 🙏🙏", time: "9:02" },
            { from: "يوسف", text: "😂😂😂", time: "9:04" },
            { from: "أمي", text: "0:42", time: "9:10", kind: "voice" },
          ]),
        },
        compare: "قارن",
        before: "بدون ايكو",
        after: "مع ايكو",
      },
      today: {
        nav: ["اليوم", "النشاط", "الروتين", "التنبيهات", "التذكيرات", "المهام", "الإعدادات"],
        tabs: ["اليوم", "النشاط", "المهام", "التنبيهات", "المزيد"],
        brief: {
          title: "آخر تقارير الروتين",
          time: "اليوم · 07:30",
          intro: "صباح الخير. أمران يحتاجانك اليوم:",
          points: ["تأكيد مكالمة الخميس مع عمر.", "توقيع اتفاقية السرية من الفريق القانوني."],
          outro: "كل ما عدا ذلك تمت معالجته.",
          link: "كل تقارير الروتين",
        },
        tasks: {
          title: "المهام",
          all: "كل المهام",
          group: "مستحقة اليوم",
          items: [
            { title: "توقيع اتفاقية السرية", meta: "مستحقة اليوم · لم تبدأ" },
            { title: "حجز مكالمة الخميس مع عمر", meta: "مستحقة اليوم · لينا تتابعها" },
          ],
        },
        alerts: {
          title: "التنبيهات",
          meta: "رصدها ايكو",
          items: [
            { initials: "ع", text: "عمر حداد يريد تأكيد مكالمة الخميس.", from: "عمر حداد · 09:12" },
            { initials: "ج", text: "جين تشين تحتاج جدول الملكية قبل الجمعة.", from: "جين تشين · 09:08" },
          ],
        },
        saved: { title: "الوقت الموفَّر", meta: "آخر 14 يوماً", hours: "6", minutes: "12" },
        reminders: {
          title: "التذكيرات",
          all: "الكل",
          items: [
            { text: "معاودة الاتصال بعمر.", time: "اليوم · 16:00" },
            { text: "مراجعة خطة التوظيف للربع الثالث.", time: "الإثنين 16 نوفمبر · 09:00" },
          ],
        },
      },
    },
  },
  privacy: {
    title: "رسائلك تبقى لك.",
    subtitle: "أنت تختار ما يراه ايكو.",
    promises: [
      "لا تُباع ولا تُستخدم للإعلانات",
      "لا تُستخدم لتدريب الذكاء الاصطناعي",
      "مشفّرة أثناء النقل والتخزين",
      "حذف كلمات المرور وأرقام البطاقات تلقائياً",
      "افصل حسابك أو احذف بياناتك في أي وقت",
    ],
    gdpr: "متوافق مع GDPR",
  },
  calculator: {
    title: "كم يساوي وقتك؟",
    rate: "قيمة ساعتك",
    hoursBack: "وقت تستعيده",
    value: "قيمته",
    roi: "العائد",
    perMonth: "شهرياً",
    roiNote: "مقارنة بخطة Solo",
    note: "نفترض نحو 10 ساعات أسبوعياً على الرسائل والبريد والمواعيد، يتولى ايكو قرابة ربعها.",
  },
  pricing: {
    title: "اختر الخطة التي تناسبك.",
    month: "شهرياً",
    cta: "ابدأ على واتساب",
    recommended: "موصى به",
    plans: [
      {
        name: "Solo",
        price: "$20",
        audience: "ايكو هو مساعدك.",
        features: [
          "تنبيهات عاجلة وتقارير PDF",
          "الاجتماعات والبريد والتذكيرات من المحادثة",
          "الرسائل الصوتية والصور",
          "حساب بريد وتقويم واحد",
          "استخدام للمساعد بقيمة 4 دولارات شهرياً مشمول",
        ],
      },
      {
        name: "Delegate",
        price: "$100",
        audience: "ايكو ومعه مساعدك البشري.",
        features: [
          "كل ما في Solo",
          "كلّف مساعدك بالمهام من المحادثة نفسها",
          "مركز تحكم على الويب للمهام والتنبيهات والنشاط",
          "تعليمات دائمة للتقارير والتنبيهات وأسلوب المحادثة",
          "10 حسابات بريد وتقويم",
          "استخدام للمساعد بقيمة 20 دولاراً شهرياً مشمول",
        ],
      },
    ],
    note: "يُحتسب الاستخدام الذي يتجاوز الرصيد المشمول بسعر التكلفة في فاتورتك التالية. يمكنك تفعيل حد للاستخدام من الإعدادات في أي وقت، والإلغاء متاح في أي وقت من بوابة الفوترة.",
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      { q: "كيف أبدأ؟", a: `راسل ايكو على واتساب على الرقم ${phone}. ستصلك رسالة برابط آمن تختار منها خطتك وتربط واتساب وبريدك وتقويمك، خلال دقائق.` },
      { q: "ما الفرق بين Solo وDelegate؟", a: "في Solo يكون ايكو مساعدك: يراقب نيابةً عنك وينجز ما تطلبه. وفي Delegate تدعو أيضاً مساعدك البشري: تكلّفه بالمهام من محادثة واتساب نفسها، ويعمل من مساحة عمل خاصة به في ايكو، وتتابع أنت كل شيء من مركز التحكم على الويب." },
      { q: "هل يراسل ايكو الآخرين نيابةً عني؟", a: "لا. لا يرد ايكو تلقائياً على جهات اتصالك. ينبّهك عند وصول ما يهم، ولا يرسل رسائل البريد أو الدعوات إلا عندما تطلب ذلك." },
      { q: "كيف تُعامل بياناتي؟", a: "ايكو متوافق مع اللائحة العامة لحماية البيانات (GDPR). يتصل عبر منصة واتساب الرسمية من Meta وتسجيل الدخول الآمن لحسابات Google وMicrosoft، ولا يبيع بياناتك أو يستخدمها لتدريب الذكاء الاصطناعي، ويحذفها متى طلبت. يمكنك فصل أي حساب في أي وقت." },
    ],
  },
  final: {
    title: "لا تُبقِ أحداً في الانتظار.",
  },
  contact: {
    title: "تواصل معنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    category: "الفئة",
    chooseCategory: "اختر فئة",
    categories: {
      general: "استفسار عام",
      "tech-support": "الدعم الفني",
      billing: "الفوترة",
      "data-deletion": "طلبات الخصوصية والبيانات",
      partnerships: "الشراكات",
      other: "أخرى",
    },
    subject: "العنوان",
    message: "الرسالة",
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    sent: "شكراً. وصلتنا رسالتك وسنرد عليك عبر البريد الإلكتروني.",
    failed: "حدث خطأ ما. يرجى المحاولة مرة أخرى بعد دقيقة.",
  },
  footer: {
    tagline: "مساعدك التنفيذي الذكي في واتساب.",
    product: "المنتج",
    company: "الشركة",
    legal: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    dataDeletion: "حذف البيانات",
  },
};

export const translations = { en, ar };

export type Locale = keyof typeof translations;
export type Translation = typeof en;
