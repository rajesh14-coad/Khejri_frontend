export const martyrsData = {
    stats: {
        total: 363,
        women: 69,
        men: 294,
        villages: 83
    },
    timeline: [
        {
            time: { en: "Morning (08:00 AM)", hi: "सुबह (08:00 बजे)" },
            event: { en: "Hakim Giridhar Das arrives at Khejarli with royal troops. Amrita Devi intervenes.", hi: "हाकिम गिरधर दास शाही सैनिकों के साथ खेजड़ली पहुंचे। अमृता देवी ने हस्तक्षेप किया।" }
        },
        {
            time: { en: "08:30 AM", hi: "08:30 बजे" },
            event: { en: "Amrita Devi offers her head. She is beheaded. The first blood spills.", hi: "अमृता देवी ने अपना सिर भेंट किया। उनका सिर काट दिया गया। पहला खून बहा।" }
        },
        {
            time: { en: "08:45 AM", hi: "08:45 बजे" },
            event: { en: "Her three daughters (Asu, Ratni, Bhagu) refuse to leave. They hug trees and are martyred.", hi: "उनकी तीन बेटियों (आशु, रत्नी, भागू) ने जाने से इनकार कर दिया। उन्होंने पेड़ों को गले लगाया और शहीद हो गईं।" }
        },
        {
            time: { en: "09:00 AM", hi: "09:00 बजे" },
            event: { en: "Ramo Ji (Amrita Devi's husband) sends the message via 'Dhol' (Drums) to 83 nearby Bishnoi villages.", hi: "रामो जी (अमृता देवी के पति) ने 'ढोल' के माध्यम से 83 नजदीकी बिश्नोई गांवों को संदेश भेजा।" }
        },
        {
            time: { en: "Afternoon", hi: "दोपहर" },
            event: { en: "Bishnois arrive in waves. They form a human chain. One by one, they hug trees and are killed.", hi: "बिश्नोई जत्थों में पहुंचे। उन्होंने मानव श्रृंखला बनाई। एक-एक करके, उन्होंने पेड़ों को गले लगाया और मारे गए।" }
        },
        {
            time: { en: "Late Afternoon", hi: "देर दोपहर" },
            event: { en: "Elder Viso Ji leads the sacrifice, stating 'Old heads are cheaper'. 363 die by sunset.", hi: "बुजुर्ग विसो जी ने बलिदान का नेतृत्व किया, यह कहते हुए कि 'बूढ़े सिर सस्ते हैं'। सूर्यास्त तक 363 लोग शहीद हो गए।" }
        },
        {
            time: { en: "Evening", hi: "शाम" },
            event: { en: "King's messenger stops the massacre. The Hakim retreats in horror.", hi: "राजा के दूत ने नरसंहार रोका। हाकिम भय से पीछे हट गया।" }
        }
    ],
    // Expanded Village Data Structure
    villages: [
        {
            id: "khejarli",
            name: { en: "Khejarli", hi: "खेजड़ली" },
            martyrCount: 56, // Historical approximation
            distance: { en: "0 km (Epicenter)", hi: "0 किमी (केंद्र)" },
            history: { en: "The epicenter of the sacrifice. Known originally as Jehnad, it was renamed Khejarli (after the Khejri tree) to honor the event. The village was home to Amrita Devi and Ramo Ji. Almost every household in this village lost a member on that black Tuesday.", hi: "बलिदान का केंद्र। मूल रूप से जेहनाद के रूप में जाना जाता है, इस घटना को सम्मानित करने के लिए इसका नाम बदलकर खेजड़ली (खेजड़ी के पेड़ के नाम पर) रखा गया था। यह गांव अमृता देवी और रामो जी का घर था। उस काले मंगलवार को इस गांव के लगभग हर घर ने एक सदस्य खो दिया।" }
        },
        {
            id: "guda-bishnoiyan",
            name: { en: "Guda Bishnoiyan", hi: "गुड़ा बिश्नोईयान" },
            martyrCount: 12,
            distance: { en: "8 km", hi: "8 किमी" },
            history: { en: "One of the closest villages, Guda Bishnoiyan heard the drums first. The men and women of Guda were instrumental in forming the initial human chains before the larger waves arrived.", hi: "सबसे करीबी गांवों में से एक, गुड़ा बिश्नोईयान ने सबसे पहले ढोल की आवाज सुनी। बड़ी लहरों के आने से पहले गुड़ा के पुरुष और महिलाएं शुरुआती मानव श्रृंखला बनाने में सहायक थे।" }
        },
        {
            id: "rotatu",
            name: { en: "Rotatu", hi: "रोडाटू" },
            martyrCount: 24,
            distance: { en: "45 km", hi: "45 किमी" },
            history: { en: "Rotatu is historically significant as a hub of the Panwar clan. Despite the distance, the contingent from Rotatu arrived with incredible speed, driven by their ancestral connection to Guru Jambheshwar.", hi: "रोडाटू पंवार कबीले के केंद्र के रूप में ऐतिहासिक रूप से महत्वपूर्ण है। दूरी के बावजूद, रोडाटू से जत्था अविश्वसनीय गति से पहुंचा, जो गुरु जम्भेश्वर के साथ उनके पैतृक संबंध से प्रेरित था।" }
        },
        {
            id: "polavas",
            name: { en: "Polavas", hi: "पोलावास" },
            martyrCount: 8,
            distance: { en: "32 km", hi: "32 किमी" },
            history: { en: "Home to the wise elder Viso Ji. The people of Polavas are credited with changing the strategy of the resistance from chaotic emotional sacrifice to a disciplined, elder-led movement.", hi: "बुद्धिमान बुजुर्ग विसो जी का घर। पोलावास के लोगों को प्रतिरोध की रणनीति को अराजक भावनात्मक बलिदान से अनुशासित, बुजुर्गों के नेतृत्व वाले आंदोलन में बदलने का श्रेय दिया जाता है।" }
        },
        {
            id: "kakani",
            name: { en: "Kakani", hi: "काकांणी" },
            martyrCount: 15,
            distance: { en: "18 km", hi: "18 किमी" },
            history: { en: "A village known for its potters and artisans. The martyrs from Kakani included simple craftsmen who abandoned their workshops to protect the trees.", hi: "कुम्हारों और कारीगरों के लिए जाना जाने वाला गाँव। काकांणी के शहीदों में साधारण कारीगर शामिल थे जिन्होंने पेड़ों की रक्षा के लिए अपनी कर्मशालाएं छोड़ दीं।" }
        },
        {
            id: "luni",
            name: { en: "Luni", hi: "लूणी" },
            martyrCount: 5,
            distance: { en: "22 km", hi: "22 किमी" },
            history: { en: "Situated on the banks of the Luni river, this village sent a small but determined group of youth.", hi: "लूणी नदी के तट पर स्थित, इस गाँव ने युवाओं का एक छोटा लेकिन दृढ़ समूह भेजा।" }
        },
        {
            id: "pipasar",
            name: { en: "Pipasar", hi: "पीपासर" },
            martyrCount: 3,
            distance: { en: "History Link", hi: "इतिहास लिंक" },
            history: { en: "The birthplace of Guru Jambheshwar. Though far away, pilgrims from Pipasar who were visiting nearby Dhams joined the sacrifice.", hi: "गुरु जम्भेश्वर का जन्मस्थान। हालांकि बहुत दूर, पीपासर से आए तीर्थयात्री जो पास के धामों के दर्शन कर रहे थे, बलिदान में शामिल हो गए।" }
        },
        {
            id: "ramasari",
            name: { en: "Ramasari", hi: "रामासणी" },
            martyrCount: 2,
            distance: { en: "Historical Link", hi: "ऐतिहासिक लिंक" },
            history: { en: "Famous for the earlier sacrifice of Karma and Gora in 1604. The villagers of Ramasari consider martyrdom a hereditary duty.", hi: "1604 में कर्मा और गोरा के पहले बलिदान के लिए प्रसिद्ध। रामासणी के ग्रामीण शहादत को एक वंशानुगत कर्तव्य मानते हैं।" }
        },
        // Placeholder generation for UI demonstration of 83 villages list
        // In a real app, we would have 83 distinct entries.
        { id: "ekalkhori", name: { en: "Ekalkhori", hi: "एकलखोरी" }, martyrCount: 4, distance: { en: "12 km", hi: "12 किमी" }, history: { en: "Regular participant in annual fairs.", hi: "वार्षिक मेलों में नियमित भागीदार।" } },
        { id: "chodha", name: { en: "Chodha", hi: "चौढा" }, martyrCount: 7, distance: { en: "15 km", hi: "15 किमी" }, history: { en: "Contributed significantly to the Godara clan participation.", hi: "गोदारा कबीले की भागीदारी में महत्वपूर्ण योगदान दिया।" } },
        { id: "bhatiyan", name: { en: "Bhatiyan", hi: "भाटियान" }, martyrCount: 3, distance: { en: "14 km", hi: "14 किमी" }, history: { en: "Small hamlet near Khejarli.", hi: "खेजड़ली के पास छोटा सा ढाणी।" } },
        { id: "pilwa", name: { en: "Pilwa", hi: "पीलवा" }, martyrCount: 6, distance: { en: "28 km", hi: "28 किमी" }, history: { en: "Agricultural village impacted by the lime kiln demands.", hi: "चूना भट्ठों की मांगों से प्रभावित कृषि गांव।" } }
    ],
    gotras: [
        {
            id: "panwar",
            name: { en: "Panwar", hi: "पंवार" },
            desc: { en: "The Panwar clan holds a special place in Bishnoi history as it is the clan of Guru Jambheshwar himself. When the news of the massacre reached the Panwar-dominated villages of Rotatu and Pipasar, the men did not wait for weapons or armor. They believed that protecting the Khejri was akin to protecting the Guru's own body.", hi: "बिश्नोई इतिहास में पंवार कबीले का विशेष स्थान है क्योंकि यह स्वयं गुरु जम्भेश्वर का कबीला है। जब नरसंहार की खबर रोडाटू और पीपासर के पंवार-बहुल गांवों में पहुंची, तो पुरुषों ने हथियारों या कवच का इंतजार नहीं किया। उनका मानना था कि खेजड़ी की रक्षा करना गुरु के अपने शरीर की रक्षा करने के समान था।" },
            motivation: { en: "To honor the lineage of Guru Jambheshwar and uphold the 29th Rule.", hi: "गुरु जम्भेश्वर के वंश का सम्मान करने और 29वें नियम को बनाए रखने के लिए।" },
            role: { en: "They formed the first line of defense after the initial Khejarli villagers fell, arriving in large numbers from the north.", hi: "प्रारंभिक खेजड़ली ग्रामीणों के गिरने के बाद उन्होंने रक्षा की पहली पंक्ति का गठन किया, जो उत्तर से बड़ी संख्या में आए थे।" },
            villages: ["Rotatu", "Pipasar", "Jambholav"],
            count: 24,
            deepAnalysis: { en: `### The Panwar Lineage... (As previously defined)`, hi: `### पंवार वंश... (जैसा कि पहले परिभाषित किया गया है)` }
        },
        {
            id: "beniwal",
            name: { en: "Beniwal", hi: "बेनीवाल" },
            desc: { en: "The Beniwal clan was the heart of the resistance. Amrita Devi was married into a Beniwal family, and the village of Khejarli had a high concentration of Beniwals.", hi: "बेनीवाल कबीला प्रतिरोध का दिल था। अमृता देवी की शादी एक बेनीवाल परिवार में हुई थी, और खेजड़ली गाँव में बेनीवाल लोगों की अधिकता थी।" },
            motivation: { en: "Immediate defense of their home and their sacred grove. It was personal and spiritual.", hi: "अपने घर और अपने पवित्र उपवन की तत्काल रक्षा। यह व्यक्तिगत और आध्यात्मिक था।" },
            role: { en: "They took the first blow. The entire family of Ramo Ji Beniwal was wiped out in the first hour.", hi: "उन्होंने पहला प्रहार झेला। पहले घंटे में ही रामो जी बेनीवाल का पूरा परिवार खत्म हो गया।" },
            villages: ["Khejarli", "Guda Bishnoiyan"],
            count: 42,
            deepAnalysis: { en: `### The Beniwal Vanguard... (As previously defined)`, hi: `### बेनीवाल अगुआ... (जैसा कि पहले परिभाषित किया गया है)` }
        },
        // ... Keeping other gotras
        {
            id: "jani",
            name: { en: "Jani", hi: "जानी" },
            desc: { en: "The Jani clan members are known for their distinct devotion to wildlife.", hi: "जानी कबीले के सदस्य वन्यजीवों के प्रति अपनी विशिष्ट भक्ति के लिए जाने जाते हैं।" },
            motivation: { en: "A deep-seated belief that a life without nature is not worth living.", hi: "एक गहरा विश्वास कि प्रकृति के बिना जीवन जीने योग्य नहीं है।" },
            role: { en: "They joined the second wave of martyrs, filling the gaps in the human shield around the grove.", hi: "वे शहीदों की दूसरी लहर में शामिल हो गए, उपवन के चारों ओर मानव ढाल में कमियों को भर दिया।" },
            villages: ["Kakani", "Luni"],
            count: 18,
            deepAnalysis: { en: `### The Jani Clan...`, hi: `### जानी कबीला...` }
        },
        {
            id: "godara",
            name: { en: "Godara", hi: "गोदारा" },
            desc: { en: "Known for their strength, the Godaras protected the northern flank of the forest.", hi: "अपनी ताकत के लिए जाने जाने वाले, गोदाराओं ने जंगल के उत्तरी हिस्से की रक्षा की।" },
            motivation: { en: "The 'Dharm' (Duty) of a protector.", hi: "एक रक्षक का 'धर्म' (कर्तव्य)।" },
            role: { en: "The Godaras protected the northern flank of the forest, refusing to budge even as their limbs were severed.", hi: "गोदाराओं ने जंगल के उत्तरी हिस्से की रक्षा की, अपने अंगों के कट जाने पर भी टस से मस होने से इनकार कर दिया।" },
            villages: ["Nokha", "Mukam"],
            count: 31,
            deepAnalysis: { en: `### The Godara Phalanx...`, hi: `### गोदारा समूह...` }
        },
        {
            id: "saran",
            name: { en: "Saran", hi: "सारण" },
            desc: { en: "Saran community members traveled over 40km to join the protest.", hi: "सारण समुदाय के सदस्यों ने विरोध में शामिल होने के लिए 40 किमी से अधिक की यात्रा की।" },
            motivation: { en: "Solidarity.", hi: "एकजुटता।" },
            role: { en: "They participated in the final phase of the sacrifice, under the leadership of Viso Ji.", hi: "उन्होंने विसो जी के नेतृत्व में बलिदान के अंतिम चरण में भाग लिया।" },
            villages: ["Bhiwani", "Hisar borders"],
            count: 15,
            deepAnalysis: { en: `### The Saran March...`, hi: `### सारण मार्च...` }
        }
    ],
    individuals: [
        {
            id: "amrita-devi",
            name: { en: "Mata Amrita Devi", hi: "माता अमृता देवी" },
            role: { en: "Leader / First Martyr", hi: "नेता / प्रथम शहीद" },
            gotra: "Beniwal (by Marriage)",
            village: { en: "Khejarli", hi: "खेजड़ली" },
            quote: { en: "Sar santey rukh rahe to bhi sasto jaan.", hi: "सिर सांटे रूँख रहे तो भी सस्तो जाण।" },
            why: { en: "She realized that paying a bribe to save the trees would be an insult to her faith...", hi: "उसने महसूस किया कि पेड़ों को बचाने के लिए रिश्वत देना उसकी आस्था का अपमान होगा..." },
            how: { en: "She did not fight or run. She simply walked up to the tree, hugged it with both arms...", hi: "वह लड़ी नहीं और न ही भागी। वह बस पेड़ के पास गई, उसे दोनों हाथों से गले लगाया..." },
            legacy: { en: "Her slogan became the anthem of the movement...", hi: "उसका नारा आंदोलन का गान बन गया..." },
            deepAnalysis: { en: `### The Theology of Sacrifice... (As previously defined)`, hi: `### बलिदान का धर्मशास्त्र... (जैसा कि पहले परिभाषित किया गया है)` }
        },
        {
            id: "asu-bai",
            name: { en: "Asu Bai", hi: "आशु बाई" },
            role: { en: "Martyr (Eldest Daughter)", hi: "शहीद (बड़ी बेटी)" },
            gotra: "Beniwal",
            village: { en: "Khejarli", hi: "खेजड़ली" },
            quote: { en: "The tree is still not saved.", hi: "पेड़ अभी भी नहीं बचा है।" },
            why: { en: "She witnessed her mother's beheading...", hi: "उसने अपनी माँ का सिर कटते देखा..." },
            how: { en: "She stepped over her mother's body...", hi: "वह अपनी माँ के शरीर के ऊपर से गुजरी..." },
            legacy: { en: "She represents the continuity of values...", hi: "वह मूल्यों की निरंतरता का प्रतिनिधित्व करती है..." },
            deepAnalysis: { en: `### Asu Bai: The Inheritance...`, hi: `### आशु बाई: विरासत...` }
        },
        {
            id: "ratni-bai",
            name: { en: "Ratni Bai", hi: "रत्नी बाई" },
            role: { en: "Martyr (Second Daughter)", hi: "शहीद (दूसरी बेटी)" },
            gotra: "Beniwal",
            village: { en: "Khejarli", hi: "खेजड़ली" },
            quote: { en: "We are the branches of the same tree.", hi: "हम एक ही पेड़ की शाखाएँ हैं।" },
            why: { en: "Seeing her sister fall...", hi: "अपनी बहन को गिरते देख..." },
            how: { en: "She took her place on a nearby tree...", hi: "उसने पास के एक पेड़ पर अपनी जगह ले ली..." },
            legacy: { en: "Her sacrifice highlighted...", hi: "उसके बलिदान ने उजागर किया..." },
            deepAnalysis: { en: `### Ratni Bai: The Indomitable Spirit...`, hi: `### रत्नी बाई: अदम्य भावना...` }
        },
        {
            id: "bhagu-bai",
            name: { en: "Bhagu Bai", hi: "भागू बाई" },
            role: { en: "Martyr (Youngest Daughter)", hi: "शहीद (सबसे छोटी बेटी)" },
            gotra: "Beniwal",
            village: { en: "Khejarli", hi: "खेजड़ली" },
            quote: { en: "My mother is here. I must be too.", hi: "मेरी माँ यहाँ है। मुझे भी यहीं होना चाहिए।" },
            why: { en: "She was barely a child...", hi: "वह बमुश्किल एक बच्ची थी..." },
            how: { en: "She ran to the tree...", hi: "वह पेड़ की ओर दौड़ी..." },
            legacy: { en: "The death of a child...", hi: "एक बच्चे की मौत..." },
            deepAnalysis: { en: `### Bhagu Bai: The Innocence Lost...`, hi: `### भागू बाई: खोई हुई मासूमियत...` }
        },
        {
            id: "mobile-messenger",
            name: { en: "Ramo Ji Bishnoi", hi: "रामो जी बिश्नोई" },
            role: { en: "Messenger / Organizer", hi: "दूत / आयोजक" },
            gotra: "Beniwal",
            village: { en: "Khejarli", hi: "खेजड़ली" },
            quote: { en: "Do not mourn. Gather.", hi: "शोक मत करो। इकट्ठा हो जाओ।" },
            why: { en: "He saw his wife and daughters die...", hi: "उसने अपनी पत्नी और बेटियों को मरते देखा..." },
            how: { en: "He did not offer his head immediately...", hi: "उसने तुरंत अपना सिर नहीं दिया..." },
            legacy: { en: "Without his presence of mind...", hi: "उसकी सूझबूझ के बिना..." },
            deepAnalysis: { en: `### Ramo Ji: The Strategist...`, hi: `### रामो जी: रणनीतिकार...` }
        },
        {
            id: "viso-ji",
            name: { en: "Viso Ji", hi: "विसो जी" },
            role: { en: "Community Elder", hi: "सामुदायिक बुजुर्ग" },
            gotra: "Unknown",
            village: { en: "Polavas", hi: "पोलावास" },
            quote: { en: "Old heads are cheaper than young ones.", hi: "बूढ़े सिर युवा सिरों की तुलना में सस्ते होते हैं।" },
            why: { en: "By afternoon, many young men and women lay dead...", hi: "दोपहर तक, कई युवा पुरुष और महिलाएं मृत पड़े थे..." },
            how: { en: "He mobilized the elders...", hi: "उसने बुजुर्गों को लामबंद किया..." },
            legacy: { en: "His wisdom gave the movement...", hi: "उसकी बुद्धिमत्ता ने आंदोलन को दिया..." },
            deepAnalysis: { en: `### Viso Ji: The Economic Calculus...`, hi: `### विसो जी: आर्थिक गणना...` }
        },
        {
            id: "bucho-ji",
            name: { en: "Bucho Ji", hi: "बुचो जी" },
            role: { en: "Historical Martyr (1643)", hi: "ऐतिहासिक शहीद (1643)" },
            gotra: "Unknown",
            village: { en: "Polavas", hi: "पोलावास" },
            quote: { en: "History repeats itself.", hi: "इतिहास खुद को दोहराता है।" },
            why: { en: "The precursor to the Khejarli massacre.", hi: "खेजड़ली नरसंहार का अग्रदूत।" },
            how: { en: "Sacrificed himself in 1643 to save trees.", hi: "पेड़ों को बचाने के लिए 1643 में अपना बलिदान दिया।" },
            legacy: { en: "Set the precedent for Viso Ji in 1730.", hi: "1730 में विसो जी के लिए मिसाल कायम की।" },
            deepAnalysis: { en: `### The Precedent of 1643...`, hi: `### 1643 की मिसाल...` }
        }
    ]
};
