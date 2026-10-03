type ChatItem = {
  kind: "time" | "me" | "ecqqo" | "voice";
  text: string;
  footer?: string;
};

type Feature = { name: string; text: string; demo: "alerts" | "briefing" | "calendar" | "chat"; chat: ChatItem[] };

const features = (list: Feature[]) => list;

const en = {
  pageTitle: "Ecqqo | Your AI executive assistant in WhatsApp",
  brandName: "Ecqqo",
  nav: {
    what: "What it does",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    cta: "Message Ecqqo",
    menu: "Menu",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    light: "Light",
    device: "Device",
    dark: "Dark",
  },
  hero: {
    title: "Never leave an important WhatsApp message on read again.",
    offer: {
      before: "Ecqqo helps executives and founders ",
      highlight: "miss 90% fewer important messages",
      after:
        " by flagging them instantly, then getting the meeting booked, the email sent and the reminder set in one reply. Set up in 5 minutes.",
    },
    cta: "Message Ecqqo on WhatsApp",
  },
  chat: {
    name: "Ecqqo",
    status: "online",
    placeholder: "Message",
    note: "Accelerated for illustration.",
    messages: [
      { from: "ecqqo", lines: ["I flagged an urgent WhatsApp message.", "", "From Omar Haddad: Can we confirm Thursday's call? I need to lock the term sheet.", "", "Worth a look when you get a chance."], time: "9:12 AM" },
      { from: "me", lines: ["Find 30 minutes with him Thursday afternoon and send the invite"], time: "9:13 AM" },
      { from: "ecqqo", lines: ["Found Omar in your email. Booked Thu 2:00–2:30 PM and sent the invite to omar@gulfcapital.com."], footer: "Event scheduled", time: "9:13 AM" },
      { from: "me", lines: ["What needs me today?"], time: "9:31 AM" },
      { from: "ecqqo", lines: ["3 things:", "• Reply to Sarah on the board deck", "• Sign the NDA from Legal", "• 4:00 PM investor call"], time: "9:31 AM" },
    ],
  },
  modes: {
    title: "Two in one assistant.",
    watch: {
      tab: "Watches for you",
      features: features([
        { name: "Urgent alerts", text: "Ecqqo reads your WhatsApp chats and interrupts you only when it matters.", demo: "alerts", chat: [] },
        {
          name: "Briefings",
          text: "A daily or weekly PDF report with a summary, highlights and action items, at the time you choose.",
          demo: "briefing",
          chat: [],
        },
        {
          name: "Your day",
          text: "Ask what needs you and get one straight answer from across your inbox, calendar and chats.",
          demo: "chat",
          chat: [
            { kind: "me", text: "What needs me today?" },
            { kind: "ecqqo", text: "Three things:\n• Board prep at 2 PM. The deck is still in draft\n• Jane Chen needs the cap table by Friday\n• Acme renewal is waiting on legal's redlines" },
          ],
        },
      ]),
    },
    work: {
      tab: "Works for you",
      features: features([
        { name: "Calendar", text: "Tell Ecqqo who and when.", demo: "calendar", chat: [] },
        {
          name: "Email",
          text: "Search your inbox, or reply in your own words.",
          demo: "chat",
          chat: [
            { kind: "me", text: "Reply to Priya that we're good to sign Friday" },
            { kind: "ecqqo", text: "Found Priya Shah in your email. Replied on “Re: Order form” to priya@northwind.com: we're good to sign Friday.", footer: "Email sent" },
          ],
        },
        {
          name: "Reminders",
          text: "Set a reminder in plain words.",
          demo: "chat",
          chat: [
            { kind: "me", text: "Remind me at 5 to call Omar" },
            { kind: "ecqqo", text: "Done. I'll remind you at 5:00 PM.", footer: "Reminder set" },
            { kind: "time", text: "5:00 PM" },
            { kind: "ecqqo", text: "Here's the reminder you set up.\n\nCall Omar\n\nReply here if you need help with it." },
          ],
        },
        {
          name: "Voice & photos",
          text: "Send a voice note, a photo or a screenshot instead of typing.",
          demo: "chat",
          chat: [
            { kind: "voice", text: "0:07" },
            { kind: "ecqqo", text: "Moved the investor sync to Thursday 10 AM and emailed Mark.", footer: "Event updated · Email sent" },
          ],
        },
      ]),
    },
  },
  alerts: {
    sensitivity: "Sensitivity",
    levels: ["Minimal", "Moderate", "Sensitive"],
    flagged: "Alert sent",
    quiet: "No alert",
    messages: [
      { name: "Omar Haddad", text: "Can we confirm Thursday? I need to lock the term sheet.", level: 1 },
      { name: "Legal team", text: "The NDA is ready and needs your signature today.", level: 2 },
      { name: "Sarah Chen", text: "Sent the board deck. Feedback when you can.", level: 3 },
      { name: "Karim", text: "Lunch sometime next week?", level: 0 },
      { name: "Office supplies", text: "Your monthly invoice is attached.", level: 0 },
    ],
  },
  briefing: {
    title: "Weekly report",
    periodLabel: "Report period",
    period: "2026-09-21 - 2026-09-28",
    summaryHeading: "Executive summary",
    summary: "A steady week. The board deck is nearly done and the Acme renewal is the one open risk.",
    sections: [
      { heading: "Highlights", items: ["Q4 hiring plan approved", "Offsite moved to Oct 14"] },
      { heading: "Action items", items: ["Reply to Sarah on the board deck", "Chase legal on the Acme redlines"] },
    ],
  },
  meetings: {
    ask: "“Find 30 minutes with Omar Thursday afternoon.”",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    busy: ["Leadership sync", "Investor call", "Board prep", "Team lunch", "Hiring panel", "1:1 with Sarah"],
    booked: "Call with Omar",
    sent: "Invite sent to omar@gulfcapital.com",
  },
  commandCenter: {
    nav: ["Today", "Activity", "Reports", "Alerts", "Reminders", "Tasks", "Settings"],
    user: "Alex Morgan",
    plan: "Delegate",
    tasksHeading: "Tasks",
    search: "Search tasks…",
    filters: ["Status: All", "Priority: All", "Due: Any"],
    tasks: [
      { title: "Follow up on the Acme renewal", detail: "Ask legal for the final redlines.", status: "todo", priority: 3, due: "Overdue 1d", late: true },
      { title: "Prepare board meeting briefing", detail: "Metrics, open decisions and questions for Friday.", status: "doing", priority: 3, due: "Today", late: false },
      { title: "Book New York flights", detail: "Tuesday morning, back Thursday night.", status: "doing", priority: 2, due: "Today", late: false },
      { title: "Review monthly finance packet", detail: "Approve the final packet.", status: "done", priority: 2, due: "Sep 27", late: false },
      { title: "Reply to operations candidate", detail: "Send the interview schedule.", status: "todo", priority: 1, due: "Oct 2", late: false },
    ],
    stats: [
      { label: "Time saved", value: "~6h 40m" },
      { label: "Actions taken", value: "112" },
      { label: "Avg response", value: "3s" },
    ],
    chart: "Daily activity",
    legend: ["Actions taken", "Alerts"],
    range: "Last 14 days",
    byArea: "By area",
    areas: ["Email", "Meetings", "Calendar", "Reminders"],
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
    preview: "See what this looks like",
    close: "Close",
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
      { q: "How is my data handled?", a: "Ecqqo connects through Meta's official WhatsApp platform and secure OAuth sign-in for Google and Microsoft accounts. You can disconnect any account at any time and request deletion of your data." },
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
      "data-deletion": "Data deletion",
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
    tagline: "WhatsApp-native executive assistant automation for executives, operators, founders, and family-office teams.",
    product: "Product",
    company: "Company",
    support: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    dataDeletion: "Data Deletion",
    rights: "All rights reserved.",
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
    menu: "القائمة",
    settings: "الإعدادات",
    language: "اللغة",
    theme: "المظهر",
    light: "فاتح",
    device: "حسب الجهاز",
    dark: "داكن",
  },
  hero: {
    title: "لا تترك رسالة واتساب مهمة دون رد بعد اليوم.",
    offer: {
      before: "يساعد ايكو التنفيذيين والمؤسسين على ",
      highlight: "تفويت رسائل مهمة أقل بنسبة 90%",
      after: "، إذ ينبّههم إليها فوراً، ثم يحجز الاجتماع ويرسل البريد ويضبط التذكير برد واحد. الإعداد خلال 5 دقائق.",
    },
    cta: "راسل ايكو على واتساب",
  },
  chat: {
    name: "ايكو",
    status: "متصل",
    placeholder: "رسالة",
    note: "العرض مُسرَّع للتوضيح.",
    messages: [
      { from: "ecqqo", lines: ["I flagged an urgent WhatsApp message.", "", "From عمر حداد: هل نؤكد مكالمة الخميس؟ أحتاج إلى إنهاء ورقة الشروط.", "", "Worth a look when you get a chance."], time: "9:12 ص" },
      { from: "me", lines: ["اعثر على نصف ساعة معه الخميس بعد الظهر وأرسل الدعوة"], time: "9:13 ص" },
      { from: "ecqqo", lines: ["وجدت عمر في بريدك. حجزت الخميس 2:00–2:30 م وأرسلت الدعوة إلى omar@gulfcapital.com."], footer: "Event scheduled", time: "9:13 ص" },
      { from: "me", lines: ["ما الذي ينتظرني اليوم؟"], time: "9:31 ص" },
      { from: "ecqqo", lines: ["3 أمور:", "• الرد على سارة بشأن عرض مجلس الإدارة", "• توقيع اتفاقية السرية من القسم القانوني", "• مكالمة المستثمر 4:00 م"], time: "9:31 ص" },
    ],
  },
  modes: {
    title: "مساعد واحد بمهمتين.",
    watch: {
      tab: "يراقب لأجلك",
      features: features([
        { name: "تنبيهات عاجلة", text: "يقرأ ايكو محادثاتك على واتساب ولا يقاطعك إلا عندما يهم الأمر.", demo: "alerts", chat: [] },
        {
          name: "التقارير",
          text: "تقرير PDF يومي أو أسبوعي بملخص وأبرز النقاط وبنود العمل، في الوقت الذي تختاره.",
          demo: "briefing",
          chat: [],
        },
        {
          name: "يومك",
          text: "اسأل عمّا يحتاج إليك واحصل على إجابة واحدة مباشرة من بريدك وتقويمك ومحادثاتك.",
          demo: "chat",
          chat: [
            { kind: "me", text: "ما الذي ينتظرني اليوم؟" },
            { kind: "ecqqo", text: "ثلاثة أمور:\n• تحضير المجلس الساعة 2 م، والعرض ما زال مسودة\n• جين تحتاج جدول الملكية قبل الجمعة\n• تجديد Acme بانتظار تعديلات القسم القانوني" },
          ],
        },
      ]),
    },
    work: {
      tab: "يعمل لأجلك",
      features: features([
        { name: "التقويم", text: "أخبر ايكو بمن ومتى.", demo: "calendar", chat: [] },
        {
          name: "البريد",
          text: "ابحث في بريدك أو ردّ بكلماتك.",
          demo: "chat",
          chat: [
            { kind: "me", text: "ردّ على بريا بأننا جاهزون للتوقيع يوم الجمعة" },
            { kind: "ecqqo", text: "وجدت بريا شاه في بريدك. رددت على «رد: نموذج الطلب» إلى priya@northwind.com: جاهزون للتوقيع يوم الجمعة.", footer: "Email sent" },
          ],
        },
        {
          name: "التذكيرات",
          text: "اطلب التذكير بكلماتك.",
          demo: "chat",
          chat: [
            { kind: "me", text: "ذكّرني الساعة 5 بالاتصال بعمر" },
            { kind: "ecqqo", text: "تم. سأذكّرك الساعة 5:00 م.", footer: "Reminder set" },
            { kind: "time", text: "5:00 م" },
            { kind: "ecqqo", text: "Here's the reminder you set up.\n\nالاتصال بعمر\n\nReply here if you need help with it." },
          ],
        },
        {
          name: "الصوت والصور",
          text: "أرسل رسالة صوتية أو صورة أو لقطة شاشة بدل الكتابة.",
          demo: "chat",
          chat: [
            { kind: "voice", text: "0:07" },
            { kind: "ecqqo", text: "نقلت اجتماع المستثمرين إلى الخميس 10 ص وراسلت مارك بالبريد.", footer: "Event updated · Email sent" },
          ],
        },
      ]),
    },
  },
  alerts: {
    sensitivity: "الحساسية",
    levels: ["الحد الأدنى", "متوسط", "حساس"],
    flagged: "أُرسل تنبيه",
    quiet: "بلا تنبيه",
    messages: [
      { name: "عمر حداد", text: "هل نؤكد موعد الخميس؟ أحتاج إلى إنهاء ورقة الشروط.", level: 1 },
      { name: "الفريق القانوني", text: "اتفاقية السرية جاهزة وتحتاج إلى توقيعك اليوم.", level: 2 },
      { name: "سارة", text: "أرسلت عرض مجلس الإدارة، بانتظار ملاحظاتك.", level: 3 },
      { name: "كريم", text: "غداء الأسبوع المقبل؟", level: 0 },
      { name: "مستلزمات المكتب", text: "مرفق فاتورتك الشهرية.", level: 0 },
    ],
  },
  briefing: {
    title: "Weekly report",
    periodLabel: "Report period",
    period: "2026-09-21 - 2026-09-28",
    summaryHeading: "Executive summary",
    summary: "أسبوع مستقر. عرض المجلس شبه جاهز، وتجديد Acme هو الخطر الوحيد المفتوح.",
    sections: [
      { heading: "Highlights", items: ["اعتماد خطة التوظيف للربع الرابع", "نقل الملتقى الخارجي إلى 14 أكتوبر"] },
      { heading: "Action items", items: ["الرد على سارة بشأن عرض المجلس", "متابعة القسم القانوني بشأن تعديلات Acme"] },
    ],
  },
  meetings: {
    ask: "«اعثر على نصف ساعة مع عمر الخميس بعد الظهر.»",
    days: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    busy: ["اجتماع القيادة", "مكالمة مستثمر", "تحضير المجلس", "غداء الفريق", "مقابلات توظيف", "لقاء مع سارة"],
    booked: "مكالمة مع عمر",
    sent: "أُرسلت الدعوة إلى omar@gulfcapital.com",
  },
  commandCenter: {
    nav: ["اليوم", "النشاط", "التقارير", "التنبيهات", "التذكيرات", "المهام", "الإعدادات"],
    user: "Alex Morgan",
    plan: "Delegate",
    tasksHeading: "المهام",
    search: "ابحث في المهام…",
    filters: ["الحالة: الكل", "الأولوية: الكل", "الاستحقاق: أي"],
    tasks: [
      { title: "متابعة تجديد Acme", detail: "طلب التعديلات النهائية من القسم القانوني.", status: "todo", priority: 3, due: "متأخرة يوماً", late: true },
      { title: "تحضير تقرير اجتماع المجلس", detail: "المؤشرات والقرارات المفتوحة وأسئلة الجمعة.", status: "doing", priority: 3, due: "اليوم", late: false },
      { title: "حجز رحلات نيويورك", detail: "الثلاثاء صباحاً، والعودة ليلة الخميس.", status: "doing", priority: 2, due: "اليوم", late: false },
      { title: "مراجعة الملف المالي الشهري", detail: "اعتماد النسخة النهائية.", status: "done", priority: 2, due: "27 سبتمبر", late: false },
      { title: "الرد على مرشح العمليات", detail: "إرسال جدول المقابلة.", status: "todo", priority: 1, due: "2 أكتوبر", late: false },
    ],
    stats: [
      { label: "الوقت الموفَّر", value: "~6س 40د" },
      { label: "الإجراءات", value: "112" },
      { label: "متوسط الاستجابة", value: "3ث" },
    ],
    chart: "النشاط اليومي",
    legend: ["الإجراءات", "التنبيهات"],
    range: "آخر 14 يوماً",
    byArea: "حسب المجال",
    areas: ["البريد", "الاجتماعات", "التقويم", "التذكيرات"],
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
    month: "/شهرياً",
    cta: "ابدأ على واتساب",
    preview: "شاهد كيف يبدو",
    close: "إغلاق",
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
      { q: "كيف تُعامل بياناتي؟", a: "يتصل ايكو عبر منصة واتساب الرسمية من Meta وتسجيل الدخول الآمن عبر OAuth لحسابات Google وMicrosoft. يمكنك فصل أي حساب في أي وقت وطلب حذف بياناتك." },
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
      "data-deletion": "حذف البيانات",
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
    tagline: "أتمتة المساعد التنفيذي عبر واتساب للتنفيذيين والمشغّلين والمؤسسين وفرق مكاتب العائلات.",
    product: "المنتج",
    company: "الشركة",
    support: "تواصل معنا",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    dataDeletion: "حذف البيانات",
    rights: "جميع الحقوق محفوظة.",
  },
};

export const translations = { en, ar };

export type Locale = keyof typeof translations;
export type Translation = typeof en;
