/* ===== PANDA 官网主逻辑：i18n + 筛选 + 渲染 + 报价器 ===== */
(function () {
    'use strict';

    /* ================= 多语言字典 ================= */
    const I18N = {
        nl: {
            nav_home: "Home", nav_products: "Producten",
            nav_samples: "Monsters",
            nav_accessories: "Accessoires", nav_videos: "Video's", nav_quote: "Offerte",
            nav_contact: "Contact", btn_quote: "Gratis Offerte",
            hero_tag: "Lokale productie · 24u service aan huis",
            hero_title1: "Premium Aluminium & IJzeren Roldeuren",
            hero_title2: "voor elk pand",
            hero_desc: "Op maat gemaakte aluminium en ijzeren roldeuren voor woningen, winkels, garages, fabrieken en magazijnen. Geproduceerd met hoogwaardige dubbele aluminium platen: diefstalwerend, duurzaam en bestand tegen het Surinaamse klimaat. Volledig naar uw wens: kleur, type, formaat, sloten en motor. Onze service is 24 uur per dag beschikbaar voor onderhoud en reparatie aan huis.",
            hero_btn1: "Bekijk Producten →", hero_btn2: "▶ Video's", hero_btn4: "💬 WhatsApp ons",
            stat_projects_num: "600+", stat_projects: "Projecten",
            stat_years_num: "4+", stat_years: "Jaar actief",
            stat_service_num: "24/7", stat_service: "Service & Advies",
            prod_label: "Onze Collectie", prod_title: "Onze producten",
            prod_desc: "Geschikt voor woningen, winkels, garages, fabrieken en magazijnen. Filter op kleur of type. Aluminium en ijzeren roldeuren, ramen en meer — volledig op maat gemaakt.",
            filter_color: "Kleur", filter_type: "Type", filter_all: "Alle",
            filter_result: "{n} producten gevonden",
            samples_label: "Monsters", samples_title: "Monstercollectie",
            samples_desc: "Een selectie van onze producten en gerealiseerde projecten — zie de kwaliteit en afwerking met eigen ogen.",
            acc_label: "Accessoires", acc_title: "Accessoires & opties",
            acc_desc: "Alles voor uw deur: motoren, sloten, afstandsbedieningen, sensoren en rails. Ook accessoires worden op maat geleverd en geïnstalleerd.",
            acc_empty: "Accessoire foto's komen binnenkort online.",
            video_label: "Video's", video_title: "Bekijk ons werk",
            video_desc: "Installaties, productieproces en klantprojecten.",
            video_soon: "Video's komen binnenkort",
            quote_label: "Offerte", quote_title: "Prijzen & offerte",
            quote_desc: "Referentieprijzen en onderhoudsinformatie.",
            pt_title: "Prijstabel", pt_product: "Product", pt_unit: "Prijs (USD)",
            calc_rule_title: "Rekenregel",
            calc_rule_text: "(oppervlakte m² × prijs per m² van de deur + motorprijs) × 5% installatie = totale deurprijs.",
            calc_rule_note1: "Motor: boven 10 m² $250 · binnen 10 m² $290",
            calc_rule_note2: "Extra accessoires of materialen worden apart berekend.",
            pt_iron: "IJzeren roldeur", pt_iron_open: "Open ijzeren roldeur",
            pt_alu: "Aluminium roldeur (wit/zwart/grijs)", pt_alu_open: "Aluminium open roldeur",
            pt_wood: "Houtkleur roldeur", pt_motor_big: "Motor (≥ 10 m²)",
            pt_motor_small: "Motor (< 10 m²)", pt_manual: "Handmatige deur",
            pt_biglock: "Twee grote sloten (handmatig)", pt_sidelock: "Zijkant slot (per stuk)",
            pt_install: "Installatie", note_iron: "Massief of open, sterk en voordelig",
            note_alu: "Diefstalwerend, duurzaam en stijlvol",
            note_motor: "Buiten- of buismotor", note_manual: "Incl. veeras en kruisslot",
            note_sidelock: "Extra veiligheid", note_install: "Van totaalprijs",
            calc_title: "Offerte Calculator",
            calc_type: "Deurtype", calc_width: "Breedte (m)", calc_height: "Hoogte (m)",
            calc_motor: "Aandrijving", calc_lock: "Zijkant sloten (aantal)", calc_biglock: "Twee grote sloten (handmatig)",
            calc_install: "Installatie (+5%)", calc_copy: "📋 Kopieer offerte",
            cm_manual: "Handmatig (€200)", cm_motor: "Motor (buiten/buis)",
            ty_alu: "Aluminium Roldeur (wit/zwart/grijs)", ty_alu_open: "Aluminium Open Roldeur",
            ty_wood: "Houtkleur Roldeur", ty_iron: "IJzeren Roldeur", ty_iron_open: "IJzeren Open Roldeur",
            ty_window: "Aluminium Raam",
            cr_area: "Oppervlakte", cr_door: "Deurprijs", cr_drive: "Aandrijving",
            cr_locks: "Zijkant sloten", cr_install: "Installatie (5%)",
            cr_total: "TOTAAL", cr_rounded: "Afgerond (0/5)", cr_other: "Andere valuta",
            cr_window_note: "Ramen: offerte op aanvraag, neem contact op voor een gratis meting.",
            cr_note: "Eindprijs afgerond op 0 of 5. Prijzen in USD, excl. btw.",
            copy_ok: "✅ Offerte gekopieerd!",
            maint_title: "Onderhoud & reparatie",
            m1: "Reinig de deur regelmatig met water en een mild schoonmaakmiddel voor een langdurige, mooie uitstraling.",
            m2: "Controleer elke 3-6 maanden de rails en wieltjes en smeer ze licht in voor een soepele werking.",
            m3: "Vervang de batterijen van de afstandsbediening tijdig wanneer deze traag reageert.",
            m4: "Controleer bij handmatige deuren jaarlijks de veer en het slot voor uw veiligheid.",
            m5: "Laat de motor jaarlijks controleren; bij vreemde geluiden of storingen direct contact opnemen.",
            m6: "Zorg voor een stabiele voedingsspanning — instabiele spanning kan de motor beschadigen. Overweeg een spanningsbeveiliging.",
            m7: "Bij stroomuitval: elke deur wordt standaard geleverd met een ketting of wind-up stok — handmatig openen en sluiten is niet zwaar maar iets langzamer.",
            m8: "Gebruik nooit kracht als de deur klemt; bel ons voor reparatie: +597 887-9563.",
            m9: "Garantie: binnen 1 jaar gratis reparatie bij niet-opzettelijke schade; bij opzettelijke schade betaalt u alleen onderdelen. Na de garantieperiode: reparatie vanaf SRD 500.",
            about_label: "Waarom PANDA", about_title: "Onze voordelen",
            about_desc: "Waarom klanten voor ons kiezen",
            f1_title: "Diefstalwerend", f1_desc: "Maximale beveiliging voor uw pand met onze sterke aluminium en ijzeren roldeuren.",
            f2_title: "Duurzaam", f2_desc: "Hoogwaardige materialen die jarenlang meegaan, bestand tegen het Surinaamse klimaat.",
            f3_title: "Op maat gemaakt", f3_desc: "Elke deur wordt op maat geproduceerd en professioneel geïnstalleerd door ons team.",
            f4_title: "Beste Prijs", f4_desc: "Scherpe prijzen en de beste prijs-kwaliteitverhouding in Suriname.",
            contact_label: "Contact", contact_title: "Neem contact op",
            contact_desc: "Vraag vandaag nog een gratis offerte aan.",
            c_addr: "Adres", c_tel: "Telefoon", c_wa: "WhatsApp", c_mail: "E-mail",
            c_time: "Openingstijden", c_time_val: "Ma-Vr: 8:30 - 17:30, Za: 8:30 - 13:30",
            c_wa_btn: "WhatsApp ons direct", c_fb_btn: "Volg ons op Facebook",
            footer_desc: "Fabrikant van aluminium roldeuren, deuren, ramen, kozijnen en kasten. Importeur van metalen platen, -buizen, roldeur- en bouwmaterialen. Van 't Hogerhuysstraat 31, Paramaribo, Suriname.",
            footer_rights: "Alle rechten voorbehouden.",
            price_on_req: "Op aanvraag",
            badge_real: "Realisatie", badge_hot: "Populair",
            desc: {
                A: "Massief aluminium, diefstalwerend en zeer duurzaam.",
                B: "Ventilerend en veilig, perfect voor woningen en bedrijven.",
                C: "Moderne uitstraling met grote grille voor optimale ventilatie.",
                D: "Open design met stijlvolle uitstraling.",
                iron: "Sterk en voordelig. De beste prijs-kwaliteitverhouding.",
                window: "Hoogwaardige aluminium ramen op maat gemaakt."
            },
            wa_text: "Hallo PANDA, ik heb een vraag over",
            q: {
                header: "PANDA ALUMINIUM PRODUCTS - OFFERTE",
                product: "Product", dim: "Afmeting", area: "Oppervlakte",
                door: "Deurprijs", drive: "Aandrijving", locks: "Zijkant sloten",
                install: "Installatie (5%)", total: "Totaal", rounded: "Afgerond",
                ask: "Neem contact op voor een gratis meting: WhatsApp +597 887-9563"
            }
        },
        en: {
            nav_home: "Home", nav_products: "Products",
            nav_samples: "Samples",
            nav_accessories: "Accessories", nav_videos: "Videos", nav_quote: "Quote",
            nav_contact: "Contact", btn_quote: "Free Quote",
            hero_tag: "Local production · 24h on-site service",
            hero_title1: "Premium Aluminum & Iron Roller Doors",
            hero_title2: "for every building",
            hero_desc: "Custom aluminum and iron roller doors for homes, shops, garages, factories and warehouses. Made with premium double aluminum sheets: burglar-proof, durable and built for the Surinamese climate. Fully to your wishes: color, type, size, locks and motor. Our service is available 24 hours a day for on-site maintenance and repair.",
            hero_btn1: "View Products →", hero_btn2: "▶ Videos", hero_btn4: "💬 WhatsApp us",
            stat_projects_num: "600+", stat_projects: "Projects",
            stat_years_num: "4+", stat_years: "Years active",
            stat_service_num: "24/7", stat_service: "Service & Advice",
            prod_label: "Our Collection", prod_title: "Our products",
            prod_desc: "Suitable for homes, shops, garages, factories and warehouses. Filter by color or type. Aluminum and iron roller doors, windows and more — fully custom-made.",
            filter_color: "Color", filter_type: "Type", filter_all: "All",
            filter_result: "{n} products found",
            samples_label: "Samples", samples_title: "Sample collection",
            samples_desc: "A selection of our products and completed projects — see the quality and finish for yourself.",
            acc_label: "Accessories", acc_title: "Accessories & options",
            acc_desc: "Everything for your door: motors, locks, remote controls, sensors and rails. Accessories are also custom-supplied and installed.",
            acc_empty: "Accessory photos coming soon.",
            video_label: "Videos", video_title: "See our work",
            video_desc: "Installations, production process and customer projects.",
            video_soon: "Videos coming soon",
            quote_label: "Quote", quote_title: "Prices & quotes",
            quote_desc: "Reference prices and instant quote calculation.",
            pt_title: "Price Table", pt_product: "Product", pt_unit: "Price (USD)",
            calc_rule_title: "Pricing Rule",
            calc_rule_text: "(area m² × door unit price + motor price) × 5% installation = total door price.",
            calc_rule_note1: "Motor: above 10 m² $250 · within 10 m² $290",
            calc_rule_note2: "Extra accessories or materials are quoted separately.",
            pt_iron: "Iron roller door", pt_iron_open: "Open iron roller door",
            pt_alu: "Aluminum roller door (white/black/gray)", pt_alu_open: "Aluminum open roller door",
            pt_wood: "Wood color roller door", pt_motor_big: "Motor (≥ 10 m²)",
            pt_motor_small: "Motor (< 10 m²)", pt_manual: "Manual door",
            pt_biglock: "Two large locks (manual)", pt_sidelock: "Side lock (each)",
            pt_install: "Installation", note_iron: "Solid or open, strong and affordable",
            note_alu: "Burglar-proof, durable and stylish",
            note_motor: "External or tubular motor", note_manual: "Incl. spring axle and cross lock",
            note_sidelock: "Extra security", note_install: "Of total price",
            calc_title: "Quote Calculator",
            calc_type: "Door type", calc_width: "Width (m)", calc_height: "Height (m)",
            calc_motor: "Drive", calc_lock: "Side locks (quantity)", calc_biglock: "Two large locks (manual)",
            calc_install: "Installation (+5%)", calc_copy: "📋 Copy quote",
            cm_manual: "Manual ($200)", cm_motor: "Motor (external/tubular)",
            ty_alu: "Aluminum Roller Door (white/black/gray)", ty_alu_open: "Aluminum Open Roller Door",
            ty_wood: "Wood Color Roller Door", ty_iron: "Iron Roller Door", ty_iron_open: "Iron Open Roller Door",
            ty_window: "Aluminum Window",
            cr_area: "Area", cr_door: "Door price", cr_drive: "Drive",
            cr_locks: "Side locks", cr_install: "Installation (5%)",
            cr_total: "TOTAL", cr_rounded: "Rounded (0/5)", cr_other: "Other currencies",
            cr_window_note: "Windows: quote on request, contact us for a free measurement.",
            cr_note: "Final price rounded to 0 or 5. Prices in USD.",
            copy_ok: "✅ Quote copied!",
            maint_title: "Maintenance & repair",
            m1: "Clean the door regularly with water and mild detergent to keep it looking great for years.",
            m2: "Check rails and wheels every 3-6 months and lubricate lightly for smooth operation.",
            m3: "Replace remote batteries promptly when the remote responds slowly.",
            m4: "Have the spring and lock of manual doors checked yearly for your safety.",
            m5: "Have the motor serviced yearly; contact us immediately if you hear unusual noises or faults.",
            m6: "Ensure a stable power supply — unstable voltage can damage the motor. Consider adding voltage protection.",
            m7: "Power outage? Every door comes standard with a chain or wind-up rod — manual operation is not heavy, just a bit slower.",
            m8: "Never force a stuck door; call us for repair: +597 887-9563.",
            m9: "Warranty: free repair within 1 year for non-accidental damage; accidental damage only costs parts. After warranty: repair from SRD 500.",
            about_label: "Why PANDA", about_title: "Our advantages",
            about_desc: "Why customers choose us",
            f1_title: "Burglar Proof", f1_desc: "Maximum security for your property with our strong aluminum and iron roller doors.",
            f2_title: "Durable", f2_desc: "High-quality materials that last for years, built for the Surinamese climate.",
            f3_title: "Custom Made", f3_desc: "Every door is custom manufactured and professionally installed by our team.",
            f4_title: "Best Price", f4_desc: "Sharp prices and the best value in Suriname.",
            contact_label: "Contact", contact_title: "Get in touch",
            contact_desc: "Request a free quote today.",
            c_addr: "Address", c_tel: "Phone", c_wa: "WhatsApp", c_mail: "Email",
            c_time: "Opening hours", c_time_val: "Mon-Fri: 8:30 - 17:30, Sat: 8:30 - 13:30",
            c_wa_btn: "WhatsApp us now", c_fb_btn: "Follow us on Facebook",
            footer_desc: "Manufacturer of aluminum roller doors, doors, windows, frames and cabinets. Importer of metal sheets, tubes, roller door and building materials. Van 't Hogerhuysstraat 31, Paramaribo, Suriname.",
            footer_rights: "All rights reserved.",
            price_on_req: "On request",
            badge_real: "Installation", badge_hot: "Popular",
            desc: {
                A: "Solid aluminum, burglar-proof and very durable.",
                B: "Ventilated and secure, perfect for homes and businesses.",
                C: "Modern look with large grille for optimal ventilation.",
                D: "Open design with a stylish look.",
                iron: "Strong and affordable. Best value for money.",
                window: "High-quality custom-made aluminum windows."
            },
            wa_text: "Hello PANDA, I have a question about",
            q: {
                header: "PANDA ALUMINIUM PRODUCTS - QUOTE",
                product: "Product", dim: "Dimensions", area: "Area",
                door: "Door price", drive: "Drive", locks: "Side locks",
                install: "Installation (5%)", total: "Total", rounded: "Rounded",
                ask: "Contact us for a free measurement: WhatsApp +597 887-9563"
            }
        },
        zh: {
            nav_home: "首页", nav_products: "产品",
            nav_samples: "样品",
            nav_accessories: "配件", nav_videos: "视频", nav_quote: "报价",
            nav_contact: "联系", btn_quote: "免费报价",
            hero_tag: "本地制造 · 24小时上门服务",
            hero_title1: "优质铝合金与铁质卷帘门",
            hero_title2: "适配每一栋建筑",
            hero_desc: "专业定制铝合金及铁质卷帘门，适用于住宅、商铺、车库、工厂、仓库等各类建筑。采用高品质双层铝板制造：防盗、耐用、适应苏里南气候。颜色、类型、尺寸、锁具、电机全部按您要求量身定制。我们提供 24 小时上门维修保养服务。",
            hero_btn1: "查看产品 →", hero_btn2: "▶ 视频", hero_btn4: "💬 WhatsApp 咨询",
            stat_projects_num: "600+", stat_projects: "项目",
            stat_years_num: "4+", stat_years: "年运营",
            stat_service_num: "24/7", stat_service: "服务与咨询",
            prod_label: "产品系列", prod_title: "我们的产品",
            prod_desc: "适用于住宅、商铺、车库、工厂、仓库等各类场景。按颜色或类型筛选。铝合金卷帘门、铁门、窗户等，全部支持定制。",
            filter_color: "颜色", filter_type: "类型", filter_all: "全部",
            filter_result: "找到 {n} 个产品",
            samples_label: "样品展示", samples_title: "样品展示图",
            samples_desc: "产品与实景项目精选，眼见为实——品质与工艺一目了然。",
            acc_label: "配件展示", acc_title: "配件与选项",
            acc_desc: "电机、锁具、遥控、感应、导轨一应俱全，配件同样支持定制安装。",
            acc_empty: "配件图片即将上线。",
            video_label: "视频", video_title: "看看我们的作品",
            video_desc: "安装案例、生产过程、客户项目。",
            video_soon: "视频即将上线",
            quote_label: "报价", quote_title: "价格区间与报价",
            quote_desc: "参考价格与即时报价计算。",
            pt_title: "报价区间", pt_product: "产品", pt_unit: "价格 (USD)",
            calc_rule_title: "计价规则",
            calc_rule_text: "（面积㎡ × 门类单价 + 电机价格）× 安装费 5% = 门的总价。",
            calc_rule_note1: "电机：超过 10㎡ $250 · 10㎡ 以内 $290",
            calc_rule_note2: "额外配件或材料，另算价格。",
            pt_iron: "铁门", pt_iron_open: "镂空铁门",
            pt_alu: "铝合金门（白/黑/灰）", pt_alu_open: "铝合金镂空门",
            pt_wood: "木纹色门", pt_motor_big: "电机（面积≥10㎡）",
            pt_motor_small: "电机（面积<10㎡）", pt_manual: "手动门",
            pt_biglock: "两侧大圆锁（手动）", pt_sidelock: "侧边圆锁（每个）",
            pt_install: "安装费", note_iron: "实心或镂空，坚固实惠",
            note_alu: "防盗、耐用、美观",
            note_motor: "外挂式或管式电机", note_manual: "含弹簧轴+底部十字锁",
            note_sidelock: "加装安全锁", note_install: "总价基础上+5%",
            calc_title: "自动报价器",
            calc_type: "门的类型", calc_width: "宽度（米）", calc_height: "高度（米）",
            calc_motor: "开合方式", calc_lock: "侧边圆锁（数量）", calc_biglock: "两侧大圆锁（手动）",
            calc_install: "含安装费（+5%）", calc_copy: "📋 复制报价单",
            cm_manual: "手动（$200）", cm_motor: "电机（外挂/管式）",
            ty_alu: "铝合金门（白/黑/灰）", ty_alu_open: "铝合金镂空门",
            ty_wood: "木纹色门", ty_iron: "铁门", ty_iron_open: "镂空铁门",
            ty_window: "铝合金窗户",
            cr_area: "面积", cr_door: "门价", cr_drive: "开合方式",
            cr_locks: "侧边圆锁", cr_install: "安装费 (5%)",
            cr_total: "总价", cr_rounded: "取整（0/5结尾）", cr_other: "其他货币",
            cr_window_note: "窗户：需上门测量后报价，请联系我们免费测量。",
            cr_note: "总价统一取整至 0 或 5 结尾。价格为美元。",
            copy_ok: "✅ 报价单已复制！",
            maint_title: "维修与保养规则",
            m1: "定期用清水与中性清洁剂擦拭门体，保持表面洁净、历久常新。",
            m2: "每 3~6 个月检查一次轨道与滑轮并轻量润滑，确保启闭顺畅。",
            m3: "遥控器反应不灵敏时，请及时更换电池，以免影响日常使用。",
            m4: "手动门请每年检查弹簧与锁具，确保安全可靠。",
            m5: "电机建议每年保养检查一次；如出现异响或异常，请立即联系我们检修。",
            m6: "请确保供电电压稳定——电压不稳定容易烧坏电机，建议加装稳压保护装置。",
            m7: "停电应急：每扇门标配链条或卷杆，可手动开关门，操作不重，只是比电动稍慢。",
            m8: "门体卡住时切勿强行拉拽，请立即联系维修：+597 887-9563。",
            m9: "保修政策：一年保修期内非人为损坏免费维修；人为损坏仅收取配件费。超过保修期，维修费 SRD 500 起。",
            about_label: "为什么选熊猫", about_title: "我们的优势",
            about_desc: "客户为什么选择我们",
            f1_title: "防盗安全", f1_desc: "坚固的铝合金与铁质卷帘门，为您的房产提供最大安全保障。",
            f2_title: "经久耐用", f2_desc: "高品质材料，耐用多年，适应苏里南气候。",
            f3_title: "量身定制", f3_desc: "每扇门均按尺寸定制，由我们的团队专业安装。",
            f4_title: "价格最优", f4_desc: "苏里南最具竞争力的价格与性价比。",
            contact_label: "联系方式", contact_title: "联系我们",
            contact_desc: "今天即可免费获取报价。",
            c_addr: "地址", c_tel: "电话", c_wa: "WhatsApp", c_mail: "邮箱",
            c_time: "营业时间", c_time_val: "周一至周五 8:30-17:30，周六 8:30-13:30",
            c_wa_btn: "立即 WhatsApp 咨询", c_fb_btn: "关注我们的 Facebook",
            footer_desc: "铝合金卷帘门、门窗、门框、柜体制造商；金属板材、管材、卷帘门及建材进口商。Van 't Hogerhuysstraat 31, Paramaribo, Suriname.",
            footer_rights: "版权所有。",
            price_on_req: "询价",
            badge_real: "实景案例", badge_hot: "热门",
            desc: {
                A: "全封闭铝合金，防盗且非常耐用。",
                B: "通风透气且安全，适合住宅与商铺。",
                C: "现代外观，大格栅设计，通风最佳。",
                D: "镂空设计，时尚美观。",
                iron: "坚固实惠，性价比最高。",
                window: "高品质定制铝合金窗户。"
            },
            wa_text: "你好熊猫，我想咨询",
            q: {
                header: "PANDA ALUMINIUM PRODUCTS - 报价单",
                product: "产品", dim: "尺寸", area: "面积",
                door: "门价", drive: "开合方式", locks: "侧边圆锁",
                install: "安装费 (5%)", total: "总价", rounded: "取整后",
                ask: "免费上门测量请咨询：WhatsApp +597 887-9563"
            }
        }
    };

    /* ============ 定价规则（老板 2026-08-01 口述） ============ */
    const RATE = {
        door: { alu: 80, alu_open: 80, wood: 85, iron: 65, iron_open: 65 }, // USD/㎡
        motor_big: 250, motor_small: 290, manual: 200, biglock_manual: 250,
        side_lock: 50, install_pct: 0.05,
        eur: 1.1, srd: 38
    };

    /* ============ 显示名 ============ */
    const COLOR_NAMES = {
        nl: { black: "Zwart", white: "Wit", gray: "Grijs", brown: "Houtkleur", iron: "IJzer", window: "Raam" },
        en: { black: "Black", white: "White", gray: "Gray", brown: "Wood", iron: "Iron", window: "Window" },
        zh: { black: "黑色", white: "白色", gray: "灰色", brown: "棕色", iron: "铁门", window: "窗户" }
    };
    const TYPE_NAMES = {
        nl: { A: "Type A · Massief", B: "Type B · Ventilerend", C: "Type C · Grid", D: "Type D · Open" },
        en: { A: "Type A · Solid", B: "Type B · Ventilated", C: "Type C · Grid", D: "Type D · Open" },
        zh: { A: "A型 · 全封闭", B: "B型 · 通风", C: "C型 · 格栅", D: "D型 · 镂空" }
    };
    const DOOR_WORD = {
        nl: { door: "Roldeur", iron: "IJzeren Roldeur", window: "Aluminium Raam" },
        en: { door: "Roller Door", iron: "Iron Roller Door", window: "Aluminum Window" },
        zh: { door: "卷帘门", iron: "铁门", window: "铝窗" }
    };
    const PRICES = { black: "$80", white: "$80", gray: "$80", brown: "$85", iron: "$65", window: null };
    const PRICE_UNIT = "/ m²";

    /* ============ 状态 ============ */
    let currentLang = localStorage.getItem('panda_lang') || 'nl';
    const state = { color: 'all', type: 'all' };

    function t(key) {
        const dict = I18N[currentLang];
        const parts = key.split('.');
        let v = dict;
        for (const p of parts) v = v && v[p];
        return v !== undefined ? v : key;
    }
    const fmt = n => (Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const round5 = n => Math.round(n / 5) * 5;

    /* ============ 语言切换 ============ */
    function applyLang() {
        document.documentElement.lang = currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const txt = t(el.getAttribute('data-i18n'));
            if (txt !== undefined) el.textContent = txt;
        });
        document.querySelectorAll('.lang-btn').forEach(b =>
            b.classList.toggle('active', b.dataset.lang === currentLang)
        );
        // select option 文本
        document.querySelectorAll('select option[data-i18n]').forEach(o => {
            const txt = t(o.getAttribute('data-i18n'));
            if (txt !== undefined) o.textContent = txt;
        });
        renderChips();
        renderProducts();
        renderAccessories();
        renderVideos();
        renderHero();
        renderPriceTable();
        renderMaintenance();
    }

    /* ============ 筛选 chips ============ */
    function colorCount(c) { return PRODUCTS.filter(p => p.color === c).length; }
    function typeCount(ty) { return PRODUCTS.filter(p => p.type === ty).length; }

    function renderChips() {
        const colorChips = document.getElementById('color-chips');
        const typeChips = document.getElementById('type-chips');
        const colors = ['all', 'black', 'white', 'gray', 'brown', 'iron', 'window'];
        const types = ['all', 'A', 'B', 'C', 'D'];

        colorChips.innerHTML = colors.map(c => {
            const label = c === 'all' ? t('filter_all') : COLOR_NAMES[currentLang][c];
            const count = c === 'all' ? PRODUCTS.length : colorCount(c);
            return `<button class="chip ${state.color === c ? 'active' : ''}" data-filter="color" data-value="${c}">${label}<span class="chip-count">${count}</span></button>`;
        }).join('');

        typeChips.innerHTML = types.map(ty => {
            const label = ty === 'all' ? t('filter_all') : TYPE_NAMES[currentLang][ty];
            const count = ty === 'all' ? PRODUCTS.length : typeCount(ty);
            return `<button class="chip ${state.type === ty ? 'active' : ''}" data-filter="type" data-value="${ty}">${label}<span class="chip-count">${count}</span></button>`;
        }).join('');

        colorChips.querySelectorAll('.chip').forEach(chip => chip.onclick = () => {
            state.color = chip.dataset.value;
            renderChips(); renderProducts();
        });
        typeChips.querySelectorAll('.chip').forEach(chip => chip.onclick = () => {
            state.type = chip.dataset.value;
            renderChips(); renderProducts();
        });
    }

    /* ============ 产品渲染 ============ */
    function filteredProducts() {
        return PRODUCTS.filter(p =>
            (state.color === 'all' || p.color === state.color) &&
            (state.type === 'all' || p.type === state.type)
        );
    }
    function productTitle(p) {
        const L = currentLang;
        const typePart = (p.type && p.type !== 'iron' && p.type !== 'window' && TYPE_NAMES[L][p.type])
            ? ' ' + TYPE_NAMES[L][p.type].replace(/^Type [A-D] · /, '') : '';
        if (p.color === 'iron') return DOOR_WORD[L].iron + typePart;
        if (p.color === 'window') return DOOR_WORD[L].window + typePart;
        return COLOR_NAMES[L][p.color] + ' ' + DOOR_WORD[L].door + typePart;
    }
    function productCard(p, i) {
        const L = currentLang;
        const title = productTitle(p);
        const typeLabel = TYPE_NAMES[L][p.type] || '';
        const price = PRICES[p.color] !== null
            ? `<div class="product-price"><span class="price-amount">${PRICES[p.color]}</span><span class="price-unit">${PRICE_UNIT}</span></div>`
            : `<div class="product-price"><span class="price-amount" style="font-size:14px">${t('price_on_req')}</span></div>`;
        const badge = p.tag === 'real' ? `<span class="product-badge">${t('badge_real')}</span>` : '';
        const waLink = `https://wa.me/5978879563?text=${encodeURIComponent(t('wa_text') + ' ' + title)}`;
        return `
            <div class="product-card" style="animation-delay:${Math.min(i * 30, 300)}ms">
                <div class="product-image">
                    ${badge}
                    <img loading="lazy" src="images/${p.file}" alt="${title}">
                </div>
                <div class="product-info">
                    <div class="product-type">${typeLabel}</div>
                    <div class="product-name">${title}</div>
                    <div class="product-desc">${t('desc.' + p.type) || ''}</div>
                    <div class="product-bottom">
                        ${price}
                        <a class="product-btn" href="${waLink}" target="_blank" rel="noopener" title="WhatsApp">+</a>
                    </div>
                </div>
            </div>`;
    }

    function renderProducts() {
        const grid = document.getElementById('products-grid');
        const list = filteredProducts();
        document.getElementById('filter-result').textContent = t('filter_result').replace('{n}', list.length);
        grid.innerHTML = list.length ? list.map(productCard).join('') : `<div class="empty-state">—</div>`;
    }

    /* ============ 配件 / 视频 ============ */
    function renderAccessories() {
        const grid = document.getElementById('accessories-grid');
        if (!ACCESSORIES || ACCESSORIES.length === 0) {
            grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><span style="font-size:40px">🔧</span><br><br>${t('acc_empty')}</div>`;
            return;
        }
        grid.innerHTML = ACCESSORIES.map((a, i) => `
            <div class="product-card" style="animation-delay:${Math.min(i * 30, 300)}ms">
                <div class="product-image"><img loading="lazy" src="images/${a.file}" alt="${a.title[currentLang] || a.title.nl}"></div>
                <div class="product-info">
                    <div class="product-name">${a.title[currentLang] || a.title.nl}</div>
                    ${a.desc ? `<div class="product-desc">${a.desc[currentLang] || a.desc.nl}</div>` : ''}
                </div>
            </div>`).join('');
    }
    let videoIdx = 0;
    function renderVideos() {
        const track = document.getElementById('videos-track');
        const dotsBox = document.getElementById('video-dots');
        if (!track) return;
        const items = (typeof VIDEOS !== 'undefined') ? VIDEOS : [];
        if (items.length === 0) {
            track.innerHTML = `
                <div class="video-card">
                    <div class="video-frame">
                        <div class="video-placeholder"><span class="big">🎬</span><span>${t('video_soon')}</span></div>
                    </div>
                </div>`;
            return;
        }
        videoIdx = 0;
        track.innerHTML = items.map(v => `
            <div class="video-card">
                <div class="video-title"><span class="vt-text">${v.title[currentLang] || v.title.nl || ''}</span></div>
                <div class="video-frame">
                    <video controls preload="metadata" ${v.poster ? `poster="${v.poster}"` : ''}>
                        <source src="${v.src}" type="video/mp4">
                    </video>
                </div>
            </div>`).join('');
        dotsBox.innerHTML = items.map((_, i) =>
            `<button class="video-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></button>`).join('');
        dotsBox.querySelectorAll('.video-dot').forEach(d => d.onclick = () => goVideo(+d.dataset.i));
    }
    function goVideo(i) {
        const items = (typeof VIDEOS !== 'undefined') ? VIDEOS : [];
        if (!items.length) return;
        videoIdx = (i + items.length) % items.length;
        const track = document.getElementById('videos-track');
        if (track) track.style.transform = `translateX(-${videoIdx * 100}%)`;
        document.querySelectorAll('.video-dot').forEach(d =>
            d.classList.toggle('active', +d.dataset.i === videoIdx));
        // 切换时自动关闭上一个视频：暂停所有非当前视频并复位
        if (track) track.querySelectorAll('video').forEach((v, vi) => {
            if (vi !== videoIdx) { v.pause(); v.currentTime = 0; }
        });
    }

    /* ============ 报价区间表（数据来自 Panda 报价规则知识库） ============ */
    const PRICE_ROWS = [
        { grp: { nl: "Deuren (per m²)", en: "Doors (per m²)", zh: "门类价格（每㎡）" },
          rows: [
            { name: { nl: "Aluminium deur wit/zwart/grijs — massief & open", en: "Aluminum door white/black/gray — solid & open", zh: "铝合金门 白/黑/灰（实心+镂空）" }, price: "$80" },
            { name: { nl: "Aluminium deur houtkleur — massief & open", en: "Aluminum door wood color — solid & open", zh: "铝合金门 木纹色（实心+镂空）" }, price: "$85" },
            { name: { nl: "IJzeren deur (A massief + B/C/D open)", en: "Iron door (A solid + B/C/D open)", zh: "铁门（A全封闭 + B/C/D镂空）" }, price: "$65" },
            { name: { nl: "Aluminium rolluik voor ramen (1-7 m²)", en: "Aluminum roller screen for windows (1-7 m²)", zh: "铝窗卷帘（1-7㎡，每档+$50）" }, price: "$430-$730" }
          ]},
        { grp: { nl: "Motoren", en: "Motors", zh: "电机" },
          rows: [
            { name: { nl: "Buiten-/buismotor", en: "External/tubular motor", zh: "外挂/管式电机" }, price: "$250-$290" },
            { name: { nl: "Handmatige veerdeur (as + kruisslot)", en: "Manual spring door (axle + cross lock)", zh: "手动弹簧门（轴+底装十字锁）" }, price: "$200" }
          ]},
        { grp: { nl: "Overige kosten", en: "Other costs", zh: "其他费用" },
          rows: [
            { name: { nl: "Rond slot", en: "Round lock", zh: "圆锁" }, price: { nl: "$50/stuk", en: "$50/each", zh: "$50/个" } },
            { name: { nl: "Installatie (min. $40)", en: "Installation (min. $40)", zh: "安装费（最低 $40）" }, price: "5%" },
            { name: { nl: "WiFi controller / obstakeldetector", en: "WiFi controller / obstacle sensor", zh: "WiFi控制盒 / 预阻器" }, price: "$50-$100" },
            { name: { nl: "Reparatie na garantie", en: "Repair after warranty", zh: "维修（超保修期）" }, price: "SRD 500+" }
          ]}
    ];
    function renderPriceTable() {
        const L = currentLang;
        const box = document.getElementById('price-table-body');
        if (!box) return;
        box.innerHTML = PRICE_ROWS.map(g => `
            <tr class="pt-group"><td colspan="2">${g.grp[L] || g.grp.nl}</td></tr>
            ${g.rows.map(r => {
                const p = typeof r.price === 'object' ? (r.price[L] || r.price.nl) : r.price;
                return `<tr>
                    <td>${r.name[L] || r.name.nl}</td>
                    <td class="pt-price">${p}</td>
                </tr>`;
            }).join('')}
        `).join('');
    }

    /* ============ 维修规则 ============ */
    function renderMaintenance() {
        document.getElementById('maint-list').innerHTML =
            ['m1','m2','m3','m4','m5','m6','m7','m8','m9'].map(k => `<li>${t(k)}</li>`).join('');
    }

    /* ============ Hero 幻灯片（经典案例） ============ */
    const HERO_SLIDES = [
        {
            file: '黑色A型_黑色7.jpg',
            tag: { nl: 'ZWART', en: 'BLACK', zh: '黑色' },
            name: { nl: 'Zwarte Aluminium Roldeur', en: 'Black Aluminum Roller Door', zh: '黑色铝合金卷帘门' },
            desc: { nl: 'Moderne zwarte roldeur voor huis en garage',
                    en: 'Modern black roller door for home and garage',
                    zh: '现代黑色卷帘门，适配住宅与车库' }
        },
        {
            file: '白色A型_白色4.jpg',
            tag: { nl: 'WIT', en: 'WHITE', zh: '白色' },
            name: { nl: 'Witte Aluminium Roldeur', en: 'White Aluminum Roller Door', zh: '白色铝合金卷帘门' },
            desc: { nl: 'Strakke witte roldeur voor woningen en winkels',
                    en: 'Clean white roller door for homes and shops',
                    zh: '简洁白色卷帘门，适配住宅与商铺' }
        },
        {
            file: '灰色C型_灰色11.jpg',
            tag: { nl: 'GRIJS C', en: 'GRAY C', zh: '灰色C型' },
            name: { nl: 'Grijze Type C Roldeur', en: 'Gray Type C Roller Door', zh: '灰色C型卷帘门' },
            desc: { nl: 'Moderne grijze Type C roldeur, ventilatie en stijl',
                    en: 'Modern gray Type C roller door, ventilation and style',
                    zh: '现代灰色C型卷帘门，通风时尚' }
        },
        {
            file: '棕色A型_棕色6.jpg',
            tag: { nl: 'HOUTKLEUR A', en: 'WOOD TYPE A', zh: '棕色A型' },
            name: { nl: 'Houtkleur Aluminium Roldeur Type A', en: 'Wood Color Roller Door Type A', zh: '棕色A型全封闭卷帘门' },
            desc: { nl: 'Volledig gesloten houtkleur deur, elegant en duurzaam',
                    en: 'Fully closed wood-color door, elegant and durable',
                    zh: 'A型全封闭设计，木纹优雅，坚固耐用' }
        },
        {
            file: '铝窗海报_灰D_v2.jpg',
            tag: { nl: 'GRIJZE TYPE D', en: 'GRAY TYPE D', zh: '灰色D型' },
            name: { nl: 'Grijze Aluminium Roldeur Type D', en: 'Gray Aluminum Roller Door Type D', zh: '灰色铝合金卷帘门 Type D' },
            desc: { nl: 'Geschikt voor woning en bedrijf, $80 per vierkante meter',
                    en: 'Suitable for home and business, $80 per square meter',
                    zh: '适用于住宅和商铺，$80/㎡起，双层铝合金，通风安全' }
        },
        {
            file: '窗户海报_黑.jpg',
            tag: { nl: 'ZWART RAAM', en: 'BLACK WINDOW', zh: '黑色铝窗' },
            name: { nl: 'Zwart Aluminium Raam Poster', en: 'Black Aluminum Window Poster', zh: '黑色铝合金窗户 · 海报' },
            desc: { nl: 'ALUMINIUM ROLLUIK voor ramen en deuren, $430-$730 per 7 m²',
                    en: 'ALUMINIUM ROLLUIK for windows and doors, $430-$730 per 7 m²',
                    zh: 'ALUMINIUM ROLLUIK 适用于门窗，$430-$730/7㎡ 起' }
        },
        {
            file: '铁门D型_铁门3.jpg',
            tag: { nl: 'IJZER TYPE D', en: 'IRON TYPE D', zh: '铁门D型' },
            name: { nl: 'IJzeren Type D Roldeur', en: 'Iron Type D Roller Door', zh: '铁质D型卷帘门' },
            desc: { nl: 'Stevige ijzeren roldeur, ventilerend ontwerp',
                    en: 'Sturdy iron roller door with ventilated design',
                    zh: '坚固铁质卷帘门，通风设计，实惠耐用' }
        }
    ];
    let heroIdx = 0;
    let heroTimer = null;

    function renderHero() {
        const track = document.getElementById('hero-slider-track');
        const dots = document.getElementById('hero-dots');
        const tag = document.getElementById('hero-tag');
        if (!track) return;
        track.innerHTML = HERO_SLIDES.map(s =>
            `<div class="hero-slide"><img src="images/${s.file}" alt="${s.name[currentLang] || s.name.nl}"></div>`
        ).join('');
        dots.innerHTML = HERO_SLIDES.map((_, i) =>
            `<button class="hero-slider-dot ${i === heroIdx ? 'active' : ''}" data-i="${i}"></button>`).join('');
        dots.querySelectorAll('.hero-slider-dot').forEach(d => d.onclick = () => goHero(+d.dataset.i));
        if (tag) tag.textContent = (HERO_SLIDES[0].tag[currentLang] || HERO_SLIDES[0].tag.nl);
    }
    function goHero(i) {
        heroIdx = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
        const track = document.getElementById('hero-slider-track');
        if (track) track.style.transform = `translateX(-${heroIdx * 100}%)`;
        document.querySelectorAll('.hero-slider-dot').forEach(d =>
            d.classList.toggle('active', +d.dataset.i === heroIdx));
        const tag = document.getElementById('hero-tag');
        const cur = HERO_SLIDES[heroIdx].tag;
        if (tag) tag.textContent = cur[currentLang] || cur.nl;
    }
    function startHeroTimer() {
        clearInterval(heroTimer);
        heroTimer = setInterval(() => goHero(heroIdx + 1), 5000);
    }

    /* ============ 导航 active ============ */
    document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
        document.querySelectorAll('.nav a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
    }));

    /* ============ 启动 ============ */
    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('panda_lang', currentLang);
        applyLang();
    }));

    applyLang();
    // Hero 幻灯片左右箭头 + 自动播放
    document.getElementById('hero-prev').addEventListener('click', () => { goHero(heroIdx - 1); startHeroTimer(); });
    document.getElementById('hero-next').addEventListener('click', () => { goHero(heroIdx + 1); startHeroTimer(); });
    startHeroTimer();

    // 视频幻灯片左右箭头
    document.getElementById('video-prev').addEventListener('click', () => goVideo(videoIdx - 1));
    document.getElementById('video-next').addEventListener('click', () => goVideo(videoIdx + 1));


})();
