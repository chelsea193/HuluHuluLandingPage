/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Full-site bilingual copy (zh / en). Per-item data (pain points, five
 * elements, yin/yang foods, gallery items) lives in ../data.ts with its own
 * *En sibling fields — components pick zh or en fields directly off that
 * data using the same `isZh` flag this file's consumers use.
 */

export const TRANSLATIONS = {
  zh: {
    nav: {
      hero: '能量启航',
      painPoints: '警惕失衡',
      fiveElements: '五行食能',
      yinYang: '阴阳调和',
      compare: '原型食愈',
      gallery: '食愈世界',
      quiz: '五行自测',
      faq: '食愈答疑',
      quizBadge: '测试',
      faqBadge: '答疑',
      consultationBtn: 'WhatsApp 咨询',
      quizBtn: '体质自测',
      mobileQuizCta: '开始 3 分钟五行能量测试',
      mobileWhatsappCta: 'WhatsApp 咨询门径',
      scrollToTop: '回到顶部'
    },
    hero: {
      smallTitle: '食物即能量 · 生命本真秩序',
      mainHeadline: '你多久没有好好吃饭了？',
      subheadline: '以金、木、水、火、土五行理念，让吃变得更有能量和健康',
      ctaBtn: '食物能量',
      curationCredit: '— HULU HULU 原生食愈呈现'
    },
    painPoints: {
      badge: '身体失衡警讯',
      title: '为什么同样吃得健康，却还是觉得不舒服？',
      subtitle: '你是否经常出现以下情况？'
    },
    fiveElements: {
      badge: '东方五行体系',
      title: '重新认识你每天吃的食物',
      subtitle: '食物不只是卡路里，更有内在的能量。有些食物吃了让人精神满满，有些却让人昏昏欲睡，每种食物都有自己的能量个性。',
      activeEnergyLabel: '当前食能',
      organLabel: '对应腑脏：',
      energyLabel: '能量本征：',
      foodsLabel: '代表性能量食物',
      interactiveHint: '* 点击五行粒子（木、火、土、金、水）探索不同食物之能',
      energySuffix: '形能量'
    },
    yinYang: {
      title: '食物五行理念：阴阳平衡',
      subtitle: '哪些食物最有助于提升能量水平？又有哪些应该尽量避免？',
      yinBadge: '阴',
      yinTitle: '阴性食物',
      yinAttrs: '特性：冷却 / 扩张 / 沉静 / 稀薄 / 离心',
      yinSummaryLabel: '💡 极阴现象：',
      yinSummaryText: '摄入过多酒精或多糖等极阴品，能量过度向上逸散，会导致体力消沉、四肢虚冷。',
      yangBadge: '阳',
      yangTitle: '阳性食物',
      yangAttrs: '特性：温热 / 收敛 / 紧缩 / 浓缩 / 向心',
      yangSummaryLabel: '💡 极阳现象：',
      yangSummaryText: '过量高油盐重加工红肉，体内组织过度硬化抽缩，容易引起情绪急躁和三高压力。',
      levelBadge: (level: number, energy: 'yin' | 'yang') => `${level} 级${energy === 'yin' ? '阴' : '阳'}`,
      exploringLabel: '阴阳微观特性剖析',
      energyRatingLabel: '能量指数',
      polarIntensityLabel: '极性强度',
      cautionLabel: '微言：',
      cautionText: (level: number) => `此类食材能量级属于第 ${level} 级，在日常饮食中应慎防过度累积。`,
      yinCoolingBadge: '阴性',
      yangWarmingBadge: '阳性',
      scaleYin: '极阴端（凉润）',
      scaleYang: '极阳端（温热）',
      balanceDashboard: '平衡仪表盘',
      balanceShort: '平衡',
      sliderAriaLabel: '阴阳能量平衡：向左偏阴，向右偏阳',
      balanceNeutral: '阴阳平衡',
      balanceYinPrefix: '偏阴',
      balanceYangPrefix: '偏阳',
      shiftLabel: '此能量偏移：',
      dashboardNotice: '* 拖动上面的滑块模拟食物调和状态。食物能量学认为，完美的养生并不是回避一切阴性或阳性，而是在二者之间架起中正平和之桥。',
      extremeYinLabel: '极度偏阴',
      mildYinLabel: '稍微偏阴',
      extremeYangLabel: '极度偏阳',
      mildYangLabel: '稍微偏阳',
      centerLabel: '中庸平衡',
      quoteAccent: '阴阳能量平衡',
      quoteText: ['偏阴不行，偏阳也不行，', '选择阴阳平衡的才是刚刚好。'],
      quoteAttribution: '—— Hulu Hulu 饮食'
    },
    compare: {
      title: '保健品，能取代天然食物吗？',
      subtitle: '同样是补充营养，人工萃取与天然食物，身体给出的答案不一样。',
      matrixTag: '全食物基质',
      extractedTag: '人工萃取',
      supplementsTitle: '保健品',
      supplementsSummary: '通常通过人工或工业手段，将特定的某种、几种维生素或矿物质从宿主中强行剥离、压制而成。',
      supplementsItems: [
        {
          title: '单一营养提取',
          desc: '缺乏天然食物中共生的协同活性因子（黄酮类、有机酶），吸收率容易大打折扣。'
        },
        {
          title: '快速高浓度补充',
          desc: '给人体细胞施加突然的高负荷应激，容易导致肾脏在排泄提纯化合物时的额外负荷。'
        },
        {
          title: '无法完全取代饮食',
          desc: '不能提供粗纤维、胚芽精油等宏观维持肠道生态平衡与代谢所需的"大地基石"能量。'
        },
        {
          title: '长期过量可能产生依赖',
          desc: '长期高浓度提取摄入，身体自我调节机能容易钝化、退化，转而依赖外源补充。'
        }
      ],
      supplementsDisclaimer: '注：营养品可做应急治疗之用，但长期过量提取有可能诱发身体自我机能的退化与依赖。',
      naturalTitle: '天然食物',
      naturalSummary: '大自然在千百年阳光、雨露和土壤中雕刻出来的活体营养，具有高度精妙的生命能量结构。',
      naturalItems: [
        {
          title: '完整营养结构',
          desc: '蕴含数千种未知却相互依存的辅酶。纤维素、微量元素如交响乐般同调吸收。'
        },
        {
          title: '自然能量来源',
          desc: '光合作用积淀的生物光子能量，温和唤醒细胞自我恢复力，带来悠长纯净的物理朝气。'
        },
        {
          title: '长期平衡身体状态',
          desc: '无毒素残留负担，调节酸碱状态、保护脆弱胃粘膜，使气血与脏腑维持长足稳定性。'
        },
        {
          title: '更容易被身体接纳',
          desc: '完整食物以身体熟悉的天然结构呈现，温和易吸收，不会给代谢系统带来额外应激负荷。'
        }
      ],
      naturalProclaim: '悟：一口蕴含胚芽、麦芽与麸皮的完整糙米，胜过十粒人工合成的高浓度胶囊。',
      recommendedPill: '强力推荐'
    },
    gallery: {
      label: 'HULU HULU 食愈天地',
      tagline: '健康 · 好吃 · 能量',
      title: '让食物不仅好吃，还吃出身体的能量',
      categories: [
        { id: 'all', label: '全部食物' },
        { id: 'lunch', label: '午餐/便当' },
        { id: 'staple', label: '谷物主食' },
        { id: 'bowl', label: '能量膳食碗' },
        { id: 'side', label: '汤品与甜点' }
      ],
      yinBadge: '稍微偏阴（凉润）',
      yangBadge: '温阳活力（温煦）',
      neutralBadge: '中正平性（调和）',
      viewDetail: '点击了解能量特性',
      ariaViewDetail: (title: string) => `查看「${title}」的能量详情`,
      closeAria: '关闭',
      energyPanelLabel: '食物能量特性：',
      benefitsTitle: '✓ 能量滋补效益',
      catalogueTag: 'HULU HULU 御膳食材谱录',
      backBtn: '返回食愈世界',
      scrollLeftAria: '向左滑动',
      scrollRightAria: '向右滑动',
      prevAria: '上一页',
      nextAria: '下一页',
      itemCount: (n: number) => `共 ${n} 道食愈佳品`,
      scrollHint: '左右滑动或使用箭头翻阅'
    },
    brandPositioning: {
      guideTitle: 'HULU HULU 的品牌定位',
      coreTitle: '我们的核心',
      coreBullets: ['吃饱，只是行为', '吃对，才是系统', '稳定，才是结果'],
      diffTitle: '我们的差别',
      diffBullets: ['市场只教你吃什么', '我们连接食物与身体能量', '创造让身体稳定的系统'],
      valTitle: '我们的价值',
      valBulletsLead: 'Hulu Hulu 创造的不只是饮食方法',
      valBulletsTailPrefix: '而是一套 ',
      valBulletsHighlight: '"食物 + 能量 + 身体状态"',
      valBulletsTailSuffix: ' 的完整调理系统',
      quote: ['食物营养与大地的共振，', '创造让生命回归稳定的和谐能量生态']
    },
    macrobiotic: {
      badge: '自然饮食哲学',
      title: 'Macrobiotic 饮食智慧',
      intro: 'Macrobiotic（长寿大解脱饮食法）是一种强调平衡与自然的饮食生活方式。它关注的不是冰冷的统计和卡路里计算，开发的是一套能够让我们与外界环境、自然节律及生命本体对话的能量餐盘哲学。它关注：',
      features: [
        { title: '食物阴阳平衡搭配', description: '理解大自然界不同冷热特性的食材，通过科学合理的搭配，抵消人体多余极性负荷。' },
        { title: '吃当季食物', description: '春食花叶、夏食嫩瓜、秋收根果、冬藏深茎，使人体内环境谐振于天地四时的变换。' },
        { title: '天然少加工食物', description: '尊崇"身土不二"与"独一完整"法则，多吃糙米、粗粝五谷及原型菜根，吸取食物最本真的全貌力量。' },
        { title: '把身体变得更有智慧', description: '好好吃饭并不限于充饥，它更是在修补我们的生物电平衡与情绪频率，调理身心一体之元气。' }
      ],
      statement: '不是节食，不是限制，而是一种帮助身体回归平衡的生活方式。',
      overlayTag: '暖食餐桌手作',
      overlayHeadline: '" 食物在火候、岩盐与大地上酝酿的生命之息。 "',
      overlayCaption: '传统全谷物、陶土砂锅与慢火细炖'
    },
    footer: {
      ctaBadge: '开启食愈健康之旅',
      ctaHeadline: '开启你的食物能量旅程',
      ctaDesc: ['以金、木、水、火、土的食物五行理念', '让每一餐都成为滋养身心的能量。'],
      joinBtn: '测试你的五行能量',
      whatsappBtn: '了解价格',
      trustLinePrefix: '超过 ',
      trustLineSuffix: ' 位会员正在学习食物与能量的关系',
      qrLabel: '扫码了解更多',
      qrCaption: '关注我们获取每日食谱',
      brandTag: '关于五星能量餐饮',
      brandConcept: 'Hulu Hulu Wellness五星能量餐饮，以金、木、水、火、土理念为灵感打造的均衡日常正餐与特色甜点，让身体更健康有能量。',
      contactsTitle: '联络我们',
      followTitle: '关注我们',
      rightsReserved: '© 2026 Hulu Hulu. 保留所有权利。',
      madeWith: '以天然植物食愈之愿精制而成。',
      quizLink: '五行体质自测',
      faqLink: '常见食愈答疑',
      termsLink: '能量服务条款',
      privacyLink: '隐私策略与Cookies',
      skipLink: '跳至主要内容'
    }
  },

  en: {
    nav: {
      hero: 'Journey',
      painPoints: 'Signals',
      fiveElements: 'Five Elements',
      yinYang: 'Yin & Yang',
      compare: 'Whole Foods',
      gallery: 'Pantry',
      quiz: 'Quiz',
      faq: 'FAQ',
      quizBadge: 'QUIZ',
      faqBadge: 'FAQ',
      consultationBtn: 'WhatsApp',
      quizBtn: 'Take Quiz',
      mobileQuizCta: 'Start 3-Min Energy Assessment (Quiz)',
      mobileWhatsappCta: 'WhatsApp Consultation',
      scrollToTop: 'Back to Top'
    },
    hero: {
      smallTitle: 'FOOD IS ENERGY · HEALTHY EATING',
      mainHeadline: 'When Was the Last Time You Truly Nourished Yourself?',
      subheadline: 'Using the Five Elements — Metal, Wood, Water, Fire, Earth — to make eating more energising and healthy.',
      ctaBtn: 'Explore Food Energy',
      curationCredit: '— BY HULU HULU WELLNESS'
    },
    painPoints: {
      badge: 'COMMON CONCERNS',
      title: 'Why Do You Still Feel Off, Even When You Eat "Healthy"?',
      subtitle: 'Do any of these sound familiar?'
    },
    fiveElements: {
      badge: 'FOOD IS ENERGY & VITALITY',
      title: 'Rediscover the Food You Eat Every Day',
      subtitle: 'Food is more than calories — it carries its own energy. Some foods leave you feeling bright and alert, others leave you drowsy. Every food has its own energetic personality.',
      activeEnergyLabel: 'ACTIVE ENERGY',
      organLabel: 'Connected Organs:',
      energyLabel: 'Energy Quality:',
      foodsLabel: 'Representative Foods',
      interactiveHint: '* Click a Five Elements node (Wood, Fire, Earth, Metal, Water) to explore its foods',
      energySuffix: ' Energy'
    },
    yinYang: {
      title: 'The Five Elements of Food & Balance',
      subtitle: 'Which foods raise your energy the most — and which should you keep in check?',
      yinBadge: 'Yin',
      yinTitle: 'Yin Foods (Expansion)',
      yinAttrs: 'Traits: Cooling / Expanding / Calming / Thinning / Centrifugal',
      yinSummaryLabel: '💡 Extreme Yin:',
      yinSummaryText: 'Too much of a strongly yin food — alcohol, refined sugar — sends energy scattering upward, leaving you drained and your limbs cold.',
      yangBadge: 'Yang',
      yangTitle: 'Yang Foods (Contraction)',
      yangAttrs: 'Traits: Warming / Contracting / Tightening / Concentrating / Centripetal',
      yangSummaryLabel: '💡 Extreme Yang:',
      yangSummaryText: 'Too much heavily processed, salty, oily red meat over-hardens body tissue, leading to a short temper and metabolic strain.',
      levelBadge: (level: number, energy: 'yin' | 'yang') => `Level ${level} ${energy === 'yin' ? 'Yin' : 'Yang'}`,
      exploringLabel: 'EXPLORING POLARITY DETAILS',
      energyRatingLabel: 'Energy Rating',
      polarIntensityLabel: 'Polar Intensity',
      cautionLabel: 'Note:',
      cautionText: (level: number) => `This food sits at energy Level ${level} — worth watching so it doesn't build up too far in daily meals.`,
      yinCoolingBadge: 'Cooling',
      yangWarmingBadge: 'Warming',
      scaleYin: 'YIN',
      scaleYang: 'YANG',
      balanceDashboard: 'Balance Dashboard',
      balanceShort: 'Balance',
      sliderAriaLabel: 'Yin–Yang energy balance: left is more yin, right is more yang',
      balanceNeutral: 'Balanced',
      balanceYinPrefix: 'Yin-leaning',
      balanceYangPrefix: 'Yang-leaning',
      shiftLabel: 'Current balance:',
      dashboardNotice: '* Drag the slider above to explore food polarity. In food-energy thinking, true wellness isn’t avoiding yin or yang entirely — it’s building a steady bridge between the two.',
      extremeYinLabel: 'Extreme Yin — Hyper-Expansion',
      mildYinLabel: 'Mild Yin — Cool & Calming',
      extremeYangLabel: 'Extreme Yang — Over-contraction',
      mildYangLabel: 'Mild Yang — Active & Vital',
      centerLabel: 'Perfect Golden Center',
      quoteAccent: 'YIN & YANG BALANCE',
      quoteText: ['Too much yin isn’t right, and neither is too much yang —', 'the sweet spot is balance.'],
      quoteAttribution: '—— Hulu Hulu Wellness'
    },
    compare: {
      title: 'Can Supplements Replace Real Food?',
      subtitle: 'Two ways to get the same nutrients — lab extraction and whole food — but the body answers differently.',
      matrixTag: 'WHOLE FOOD MATRIX',
      extractedTag: 'EXTRACTED PILL',
      supplementsTitle: 'Supplements',
      supplementsSummary: 'Usually made by artificial or industrial means, isolating and compressing one or a few specific vitamins or minerals out of their natural source.',
      supplementsItems: [
        {
          title: 'Isolated Elements',
          desc: 'Missing the synergistic active compounds (flavonoids, natural enzymes) found in whole food, so absorption often falls short.'
        },
        {
          title: 'Quick Flash Injection',
          desc: 'Delivers a sudden high dose to the body’s cells, placing extra strain on the kidneys as they filter out concentrated compounds.'
        },
        {
          title: 'No Core Sustenance',
          desc: 'Can’t provide the coarse fibre, germ oils, and other "foundation" energy the gut needs to sustain its ecology and metabolism.'
        },
        {
          title: 'Dependency Risk',
          desc: 'Long-term high-concentration intake can dull the body’s own regulatory ability, creating reliance on outside supplementation.'
        }
      ],
      supplementsDisclaimer: 'Note: Supplements have a place for urgent, short-term support, but long-term overuse of concentrated extracts may weaken the body’s own regulatory ability and create dependency.',
      naturalTitle: 'Whole Foods',
      naturalSummary: 'Living nutrition shaped by sunlight, rain, and soil over centuries — carrying an intricate structure of life energy.',
      naturalItems: [
        {
          title: 'Holographic Matrix',
          desc: 'Holds thousands of unknown, interdependent co-factors — fibre and trace elements absorbed together like an orchestra in tune.'
        },
        {
          title: 'Earthbound Lifeforce',
          desc: 'Biophotonic energy stored through photosynthesis gently awakens the body’s own capacity to recover, for a long, clean sense of vitality.'
        },
        {
          title: 'Sustained Equilibrium',
          desc: 'No residual toxin load — it helps regulate acid-alkaline balance, protects a sensitive stomach lining, and keeps qi, blood, and organs steady over time.'
        },
        {
          title: 'Bio-Compatible',
          desc: 'Whole food arrives in a structure the body already recognises — gentle, easy to absorb, without adding stress to metabolism.'
        }
      ],
      naturalProclaim: 'A bite of whole brown rice — germ, bran and all — outweighs ten synthetic, high-concentration capsules.',
      recommendedPill: 'RECOMMENDED BASIS'
    },
    gallery: {
      label: 'FIVE ELEMENTS WELLNESS MENU',
      tagline: 'HEALTHY · DELICIOUS · LIVING ENERGY',
      title: 'Nourishment That Tastes Sublime and Ignites Bodily Energy',
      categories: [
        { id: 'all', label: 'All Foods' },
        { id: 'lunch', label: 'Meals & Lunches' },
        { id: 'staple', label: 'Whole Grains' },
        { id: 'bowl', label: 'Vitality Bowls' },
        { id: 'side', label: 'Soups & Sweets' }
      ],
      yinBadge: 'Cooling Yin Energy',
      yangBadge: 'Warming Yang Vitality',
      neutralBadge: 'Balanced Macrobiotic Center',
      viewDetail: 'Explore Energy Profile',
      ariaViewDetail: (title: string) => `View energy details for "${title}"`,
      closeAria: 'Close',
      energyPanelLabel: 'Energetic Signature:',
      benefitsTitle: '✓ Vital Healing Benefits',
      catalogueTag: 'HULU HULU WORLD CATALOGUE',
      backBtn: 'Close Details',
      scrollLeftAria: 'Scroll left',
      scrollRightAria: 'Scroll right',
      prevAria: 'Previous',
      nextAria: 'Next',
      itemCount: (n: number) => `${n} Healing Dishes`,
      scrollHint: 'Scroll left / right or use arrows'
    },
    brandPositioning: {
      guideTitle: 'HULU HULU’S Brand Positioning',
      coreTitle: 'Our Core',
      coreBullets: ['Eating full is just a behaviour', 'Eating right is a system', 'Steadiness is the result'],
      diffTitle: 'What Sets Us Apart',
      diffBullets: ['The market only tells you what to eat', 'We connect food with body energy', 'We build a system for a steady body'],
      valTitle: 'Our Value',
      valBulletsLead: 'What Hulu Hulu creates isn’t just a way of eating',
      valBulletsTailPrefix: 'It’s a complete system of ',
      valBulletsHighlight: '"Food + Energy + Body State"',
      valBulletsTailSuffix: '',
      quote: ['The resonance between food’s nutrition and the earth', 'creates a harmonious energy ecology that brings life back to steadiness.']
    },
    macrobiotic: {
      badge: 'MACROBIOTIC ECO-PHILOSOPHY',
      title: 'Macrobiotic Food Wisdom',
      intro: 'Macrobiotics is a way of eating and living that emphasises balance with nature. It isn’t built on cold statistics or calorie counting — it’s a philosophy for a plate of food that stays in dialogue with the outside world, natural rhythms, and life itself. It focuses on:',
      features: [
        { title: 'Balancing Yin & Yang in Every Meal', description: 'Understanding the cooling and warming nature of different foods, and pairing them thoughtfully to offset any excess polarity in the body.' },
        { title: 'Eating With the Seasons', description: 'Spring greens and blossoms, summer’s tender melons, autumn’s roots and fruit, winter’s deep-stored tubers — letting the body’s inner rhythm follow nature’s own.' },
        { title: 'Whole, Minimally Processed Food', description: 'Honouring the principle that "body and soil are one" and that food is best whole — favouring brown rice, coarse whole grains, and root vegetables in their original form.' },
        { title: 'Building a Wiser Body', description: 'Eating well isn’t only about hunger — it’s about restoring the body’s bio-electric balance and emotional rhythm, tending to body and mind as one.' }
      ],
      statement: 'Not a diet, not a restriction — a way of living that helps the body find its way back to balance.',
      overlayTag: 'Macro Bowl Table Prep',
      overlayHeadline: '"Food, slowly shaped by heat, stone salt, and the earth into a breath of life."',
      overlayCaption: 'Traditional whole grains, earth clay, and slow simmering'
    },
    footer: {
      ctaBadge: 'EMBARK ON YOUR HEALTH JOURNEY',
      ctaHeadline: 'Start Your Food Energy Journey',
      ctaDesc: ['Using the Five Elements — Metal, Wood, Water, Fire, Earth —', 'to make every meal an act of nourishment for body and mind.'],
      joinBtn: 'Take the Five Elements Quiz',
      whatsappBtn: 'Check Pricing',
      trustLinePrefix: '',
      trustLineSuffix: '+ members are already learning the relationship between food and energy',
      qrLabel: 'Scan to Learn More',
      qrCaption: 'Follow us for daily recipes',
      brandTag: 'About Five Elements Wellness Dining',
      brandConcept: 'Hulu Hulu Wellness is a Five Elements dining concept — Metal, Wood, Water, Fire, Earth — behind balanced everyday meals and signature desserts, made to leave your body healthier and more energised.',
      contactsTitle: 'CONTACTS',
      followTitle: 'FOLLOW US',
      rightsReserved: '© 2026 Hulu Hulu. All Rights Reserved.',
      madeWith: 'Made with pure botanical intent.',
      quizLink: 'Five Elements Quiz',
      faqLink: 'Help & FAQ',
      termsLink: 'Terms of Service',
      privacyLink: 'Privacy Policy & Cookies',
      skipLink: 'Skip to content'
    }
  }
};
