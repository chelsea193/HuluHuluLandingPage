/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PainPoint, FiveElementData, YinYangFood, GalleryFoodItem } from './types';

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'pain-01',
    iconId: 1,
    title: '容易疲劳、没精神',
    description: '即便睡眠充足，依旧觉得全身沉重、注意力涣散，这是由于身体能量流动不足，未能通过原型食物获取本真生命。',
    titleEn: 'Tired All the Time',
    descriptionEn: 'Waking up tired even after a full night’s sleep, with a heavy body and scattered focus — a sign the body’s energy flow is running low, without the real vitality whole foods provide.'
  },
  {
    id: 'pain-02',
    iconId: 2,
    title: '睡眠品质不好',
    description: '晚上难以入睡，或多梦易醒，醒后依旧疲惫。往往是饮食过寒、过热或神经系统能量失衡的表现。',
    titleEn: 'Poor Sleep Quality',
    descriptionEn: 'Trouble falling asleep, restless dreams, or waking up still exhausted — often a sign that meals lean too cold or too heating, unbalancing the nervous system’s energy.'
  },
  {
    id: 'pain-03',
    iconId: 3,
    title: '情绪起伏大',
    description: '易怒、焦虑或常感低落。食物的极阴与极阳属性会直接影响体内激素与心境，从而产生不可控的情绪波动。',
    titleEn: 'Mood Swings & Stress',
    descriptionEn: 'Easily irritated, anxious, or low. Extreme yin or yang foods act directly on hormones and mood, driving emotional swings that feel hard to control.'
  },
  {
    id: 'pain-04',
    iconId: 4,
    title: '消化系统不稳定',
    description: '常伴有胃胀、消化迟缓、胃酸等隐隐不适，说明脾胃运化力不足，无法高效转化摄入的营养与食物能量。',
    titleEn: 'Unsettled Digestion',
    descriptionEn: 'Frequent bloating, slow digestion, or acid discomfort — a sign the digestive system isn’t strong enough to turn what you eat into usable energy.'
  },
  {
    id: 'pain-05',
    iconId: 5,
    title: '体重一直减不下来',
    description: '严格限制卡路里却毫无气色，体重居高不下。这表示身体代谢处于滞重期，细胞因能量匮乏陷入“防御饥饿”状态。',
    titleEn: 'Hard to Lose Weight',
    descriptionEn: 'Strict calorie cutting with no real change in the mirror or in how you feel — a sign metabolism has stalled and cells, starved of real energy, have gone into a defensive holding pattern.'
  },
  {
    id: 'pain-06',
    iconId: 6,
    title: '皮肤敏感、三高等问题',
    description: '反复出现皮肤红痒、干燥，或者体内糖脂代谢负担增加。这是饮食纯度不足，毒素积累和内平衡受到破坏的警示。',
    titleEn: 'Sensitive Skin & Metabolic Strain',
    descriptionEn: 'Recurring redness, itching, or dryness, plus a heavier load on blood sugar and lipid metabolism — a warning sign of low-quality eating, toxin build-up, and disrupted internal balance.'
  }
];

export const FIVE_ELEMENTS: FiveElementData[] = [
  {
    element: 'wood',
    chineseName: '木',
    englishName: 'Wood',
    color: '#8CA080', // Sage Green
    bgLight: 'rgba(140, 160, 128, 0.1)',
    textColor: '#576751',
    bodyOrgan: '肝 / 胆 (Liver & Gallbladder)',
    energyType: '升发之能 (Rising Spring Energy)',
    description: '木代表生命的蓬勃生长与疏泄流通。对应人体的肝胆系统，主司代谢与气血的顺畅条达。当木能不足，容易感到抑郁、视力疲劳及经络滞涩。',
    foods: ['西兰花', '菠菜', '青豌豆', '芹菜', '绿茶', '猕猴桃', '大麦若叶'],
    descriptionEn: 'Wood represents vigorous growth and free-flowing movement. It governs the liver and gallbladder system, responsible for smooth metabolism and the free flow of qi and blood. When Wood energy runs low, low mood, eye fatigue, and stagnant circulation tend to follow.',
    foodsEn: ['Broccoli', 'Spinach', 'Green Peas', 'Celery', 'Green Tea', 'Kiwi', 'Young Barley Grass']
  },
  {
    element: 'fire',
    chineseName: '火',
    englishName: 'Fire',
    color: '#D47D72', // Rose Red
    bgLight: 'rgba(212, 125, 114, 0.1)',
    textColor: '#9C4339',
    bodyOrgan: '心 / 小肠 (Heart & Small Intestine)',
    energyType: '温通之能 (Warm Expansive Energy)',
    description: '火代表热情、光明与温暖。对应人体的血液循环、神志与心境。适当的火能滋养神明，使血脉充盈、情绪饱满；过旺则心火上炎，导致失眠多梦。',
    foods: ['红豆', '番茄', '红甜椒', '红枣', '甜菜根', '胡萝卜', '枸杞子'],
    descriptionEn: 'Fire represents passion, brightness, and warmth. It governs circulation, spirit, and mood. Balanced Fire energy nourishes the mind and fills the blood with vitality; too much can flare upward and disturb sleep with restless dreams.',
    foodsEn: ['Red Beans', 'Tomato', 'Red Bell Pepper', 'Red Dates', 'Beetroot', 'Carrot', 'Goji Berry']
  },
  {
    element: 'earth',
    chineseName: '土',
    englishName: 'Earth',
    color: '#D5A76C', // Golden Yellow
    bgLight: 'rgba(213, 167, 108, 0.1)',
    textColor: '#8D5E24',
    bodyOrgan: '脾 / 胃 (Spleen & Stomach)',
    energyType: '承载安定 (Grounding Center Energy)',
    description: '土为万物之母，代表承载、接纳与源源不断的供养。在人体对应脾胃，是后天之本、消化吸收的核心。充沛的土能带来安定的内心与强健的四肢。',
    foods: ['糙米', '小米', '南瓜', '红薯', '栗子', '燕麦', '土豆'],
    descriptionEn: 'Earth is the mother of all things — grounding, receptive, and endlessly nourishing. It governs the spleen and stomach, the root of digestion and absorption. Abundant Earth energy brings a settled mind and steady, strong limbs.',
    foodsEn: ['Brown Rice', 'Millet', 'Pumpkin', 'Sweet Potato', 'Chestnut', 'Oats', 'Potato']
  },
  {
    element: 'metal',
    chineseName: '金',
    englishName: 'Metal',
    color: '#B7BCC3', // Light Silver Gray
    bgLight: 'rgba(183, 188, 195, 0.15)',
    textColor: '#555E6B',
    bodyOrgan: '肺 / 大肠 (Lungs & Large Intestine)',
    energyType: '收敛肃降 (Condensing Clarifying Energy)',
    description: '金代表纯净、秩序与收敛。对应呼吸系统与大肠排毒，掌管气体交换与体内清浊之平衡。金能协调，则呼吸顺畅、皮肤莹润；不足则皮毛干枯、易受外感。',
    foods: ['白萝卜', '莲藕', '洋葱', '花椰菜', '白芝麻', '银耳', '梨子', '百合'],
    descriptionEn: 'Metal represents purity, order, and containment. It governs the respiratory system and the large intestine’s detoxifying work, balancing what the body takes in and lets go. Harmonious Metal energy means easy breathing and glowing skin; when it’s weak, skin turns dry and resistance drops.',
    foodsEn: ['White Radish', 'Lotus Root', 'Onion', 'Cauliflower', 'White Sesame', 'White Fungus', 'Pear', 'Lily Bulb']
  },
  {
    element: 'water',
    chineseName: '水',
    englishName: 'Water',
    color: '#657EA5', // Muted Deep Blue
    bgLight: 'rgba(101, 126, 165, 0.1)',
    textColor: '#3A5277',
    bodyOrgan: '肾 / 膀胱 (Kidneys & Bladder)',
    energyType: '封藏沉静 (Deep Storing Energy)',
    description: '水代表智慧、沉静与生命之源。对应人体的肾精，决定着先天的生长发育、骨骼力量以及精力的源泉。充沛的水能让人遇事泰然、精力饱满持久。',
    foods: ['黑豆', '黑芝麻', '海带 / 紫菜', '香菇', '黑米', '黑木耳', '核桃'],
    descriptionEn: 'Water represents wisdom, stillness, and the source of life. It governs the kidney essence that underlies growth, bone strength, and enduring vitality. Abundant Water energy brings a calm, steady presence and lasting stamina.',
    foodsEn: ['Black Beans', 'Black Sesame', 'Kelp / Seaweed', 'Shiitake Mushroom', 'Black Rice', 'Black Fungus', 'Walnut']
  }
];

export const YIN_YANG_FOODS: YinYangFood[] = [
  // Yin foods (cooling, expanding, quiet, soft)
  {
    name: '椰子 (Coconut)',
    energy: 'yin',
    description: '清热降火，生津止渴。极阴属性在炎热环境下能快速缓解体内燥热。',
    detail: '适合热性体质或夏日食用，其浆液多汁，能迅速补充流失的津液与体液能量。',
    level: 3,
    nameEn: 'Coconut',
    descriptionEn: 'Cooling and hydrating, quenching heat and thirst. Its strongly yin nature quickly relieves inner heat in a hot environment.',
    detailEn: 'Well suited to a heat-leaning constitution or summer eating — its juice is quick to restore lost fluids and fluid-borne energy.'
  },
  {
    name: '牛奶 (Milk)',
    energy: 'yin',
    description: '滋阴润燥，镇静安神。性质沉静、粘稠，带有温和的收敛属性。',
    detail: '提供阴性镇静能量，但阳虚湿重人群（如易胃寒胀气）需控制摄入量，以防生湿。',
    level: 2,
    nameEn: 'Milk',
    descriptionEn: 'Nourishing and calming, moistening dryness. Its quality is settled and dense, with a mild contracting quality.',
    detailEn: 'Offers gentle, calming yin energy, but those prone to cold digestion or dampness should moderate their intake to avoid excess dampness.'
  },
  {
    name: '咖啡 (Coffee)',
    energy: 'yin',
    description: '极高扩张性。看似让人兴奋，但在食物能量学中具有高消耗性，使人体能量向上飞逸。',
    detail: '暂时预支未来的能量，极易流失体内矿物质。长期依赖偏向极度扩张，会破坏内心定力。',
    level: 3,
    nameEn: 'Coffee',
    descriptionEn: 'Highly expansive. It feels energising, but in food-energy terms it’s depleting — it sends the body’s energy rushing upward and outward.',
    detailEn: 'Borrows energy against tomorrow and can deplete minerals quickly. Relying on it long-term, its extreme expansiveness can erode inner steadiness.'
  },
  {
    name: '酒精 (Alcohol)',
    energy: 'yin',
    description: '由于极其强烈的扩散、轻飘和麻醉作用，在宏观层面被定义为“极阴”能量。',
    detail: '使人体感官迅速麻痹、气血散乱，随后会引发体内脱水，是破坏身体平衡的强力因素。',
    level: 3,
    nameEn: 'Alcohol',
    descriptionEn: 'Its intensely dispersing, light, numbing effect places it firmly in the extreme yin category of food energy.',
    detailEn: 'Quickly dulls the senses and scatters qi and blood, followed by dehydration — a powerful disruptor of the body’s balance.'
  },

  // Yang foods (heating, contracting, heavy, active)
  {
    name: '精制盐 (Refined Salt)',
    energy: 'yang',
    description: '高收缩力、重浊。具有极强的收引与凝滞能量，容易使血管与组织产生高张力。',
    detail: '过多摄入极阳的制盐，会导致体内水液难以循环，脾气急躁，细胞过度处于高压脱水状态。',
    level: 3,
    nameEn: 'Refined Salt',
    descriptionEn: 'Strongly contracting and dense. Its powerful pulling, tightening energy easily raises tension in blood vessels and tissue.',
    detailEn: 'Too much of this strongly yang mineral makes fluid harder to circulate, shortens the temper, and leaves cells in a high-pressure, dehydrated state.'
  },
  {
    name: '红肉 (Red Meat)',
    energy: 'yang',
    description: '热量与凝聚性密集，能量厚重而强烈。能迅速提供御寒与爆发力。',
    detail: '富含高蛋白与温热特质，由于高度凝聚，消化成本极高，容易产生沉重、滞闷及侵略性的情绪。',
    level: 2,
    nameEn: 'Red Meat',
    descriptionEn: 'Dense in heat and concentration, with heavy, intense energy. It delivers quick warmth and bursts of strength.',
    detailEn: 'Rich in protein and warming, but its dense concentration makes it costly to digest — often leaving a heavy, sluggish feeling and a shorter temper.'
  },
  {
    name: '人参 (Ginseng)',
    energy: 'yang',
    description: '大补元气，极阳之品。具有高密度的复苏力与向上凝聚的正温热能量。',
    detail: '适用于极度虚损不适、气血两亏的人群。实热阳亢体质的人食用，极易导致体内热量爆表。',
    level: 3,
    nameEn: 'Ginseng',
    descriptionEn: 'A powerful restorative and strongly yang food, with dense, revitalising, warmly upward-gathering energy.',
    detailEn: 'Well suited to deep depletion and weak qi and blood, but for a constitution already running hot and yang-heavy, it can easily push internal heat over the edge.'
  },
  {
    name: '烟草 (Tobacco)',
    energy: 'yang',
    description: '极致刚燥、收敛、升腾。在能量场上具有剧烈灼烧与收缩神经纤维的特性。',
    detail: '烟草的干燥热力在食物能量哲学中，会损耗肺部晶莹之水，让人长期处于虚亢而干萎的状态。',
    level: 3,
    nameEn: 'Tobacco',
    descriptionEn: 'Intensely dry, contracting, and rising. Its energy burns fiercely and tightens the nervous system.',
    detailEn: 'In food-energy philosophy, its dry heat drains the lung’s clear fluids, leaving the body in a chronically wired yet withered state.'
  }
];

export const GALLERY_FOODS: GalleryFoodItem[] = [
  {
    id: 'gal-01',
    title: 'Healthy Roasted Bun Bento',
    chineseTitle: '有机活力汉堡便当',
    category: '午餐 / 简餐',
    energyType: 'neutral',
    description: '以有机糙米制成健康烘烤汉堡胚，搭配自制豆腐植物汉堡排，佐以香甜南瓜、酸甜青芒果沙拉与甜菜根，融合全谷物、植物蛋白及天然蔬食能量，营养均衡且轻盈无负担，带来持久饱足感。',
    imageUrl: `${import.meta.env.BASE_URL}食物1.webp`,
    benefits: ['平衡五脏气能', '提供优质植物蛋白与稳定能量', '富含膳食纤维，促进肠道健康'],
    categoryEn: 'Lunch / Light Meals',
    descriptionEn: 'A roasted organic brown-rice bun paired with a house-made tofu plant patty, sweet pumpkin, tangy green mango salad, and beetroot — whole grains, plant protein, and vegetable energy in one balanced, light, long-lasting bite.',
    benefitsEn: ['Balances the five organs’ qi energy', 'Delivers quality plant protein and steady energy', 'Rich in fibre for gut health']
  },
  {
    id: 'gal-06',
    title: 'Tempeh Sambal Pasta',
    chineseTitle: '当季天贝参巴酱组合',
    category: '午餐 / 简餐',
    energyType: 'yang',
    description: '选用意大利面搭配自制参巴酱，酸辣开胃、层次丰富，配以香煎天贝、海菜及当季时蔬。融合发酵豆类、海洋蔬食与天然辛香料的能量，在温和提振食欲的同时，兼顾均衡营养与轻盈饱足感。',
    imageUrl: `${import.meta.env.BASE_URL}食物2.webp`,
    benefits: ['温暖脾胃，促进食欲', '提供优质植物蛋白与稳定能量', '富含膳食纤维及天然矿物质'],
    categoryEn: 'Lunch / Light Meals',
    descriptionEn: 'Pasta tossed in house-made sambal — tangy, spicy, layered — with pan-seared tempeh, sea vegetables, and seasonal greens. Fermented beans, ocean greens, and natural spice energy gently awaken the appetite while staying light and balanced.',
    benefitsEn: ['Warms the digestive system and stirs the appetite', 'Delivers quality plant protein and steady energy', 'Rich in fibre and natural minerals']
  },
  {
    id: 'gal-02',
    title: 'Brown Rice Set',
    chineseTitle: '大地糙米南瓜定食',
    category: '主食 / 能量定食',
    energyType: 'neutral',
    description: '以有机糙米饭为主食，搭配酸甜豆腐、自制豆腐炒蛋（Tofu Scramble）、腌渍时蔬及香浓南瓜汤。结合全谷物、植物蛋白与根茎蔬菜的天然能量，融入食物五行能量，营养均衡、为身体补充好能量，持久的饱足感。',
    imageUrl: `${import.meta.env.BASE_URL}食物3.webp`,
    benefits: ['温和养脾胃', '高膳食纤维', '富含 β-胡萝卜素及天然抗氧化营养'],
    categoryEn: 'Mains / Energy Set',
    descriptionEn: 'Organic brown rice as the base, with tangy-sweet tofu, house-made tofu scramble, pickled seasonal vegetables, and a rich pumpkin soup — whole grains, plant protein, and root vegetables carrying Five Elements food energy for balanced, long-lasting nourishment.',
    benefitsEn: ['Gently nourishes digestion', 'High in dietary fibre', 'Rich in beta-carotene and natural antioxidants']
  },
  {
    id: 'gal-07',
    title: 'Healthy Bento',
    chineseTitle: '有机活力烤蔬便当',
    category: '主食 / 能量便当',
    energyType: 'yang',
    energyLabel: '阳性能量 (Yang Energising)',
    description: '精选多样植物食材，搭配香烤与轻炸料理，包含酥香紫薯、自制豆腐植物汉堡、豆腐炒蛋（Tofu Scramble）、可乐饼及每日手作小点心。结合全谷物、植物蛋白与根茎蔬菜，营养均衡、层次丰富，带来轻盈而满足的饱足体验。',
    imageUrl: `${import.meta.env.BASE_URL}食物4.webp`,
    benefits: ['补充高能量与持久耐力', '增强饱足感，恢复体力', '温和滋养脾胃', '高植物蛋白', '丰富复合碳水化合物'],
    categoryEn: 'Mains / Energy Bento',
    descriptionEn: 'A varied plant-based spread, roasted and lightly fried — crisp purple sweet potato, house-made tofu patty, tofu scramble, croquette, and a daily handmade treat. Whole grains, plant protein, and root vegetables come together for a balanced, satisfying, yet light meal.',
    benefitsEn: ['Delivers high energy and lasting stamina', 'Builds satiety and restores energy', 'Gently nourishes digestion', 'High in plant protein', 'Rich in complex carbohydrates'],
    energyLabelEn: 'Yang Energising'
  },
  {
    id: 'gal-03',
    title: 'Energy Bowl',
    chineseTitle: '金水滋补蔬菜能量碗',
    category: '能量膳食碗',
    energyType: 'neutral',
    description: '遵循韩式「五色饮食」理念，以五彩蔬食、优质谷物及天然食材均衡搭配，融合木、火、土、金、水五行能量。每一口都兼顾营养、风味与能量平衡，带来轻盈而满足的饱腹体验。',
    imageUrl: `${import.meta.env.BASE_URL}食物5.webp`,
    benefits: ['平衡五脏气能', '补充稳定能量，减少餐后负担', '富含膳食纤维，维持肠道健康'],
    categoryEn: 'Energy Bowls',
    descriptionEn: 'Following the Korean "five-colour eating" philosophy, this bowl balances colourful vegetables, quality grains, and natural ingredients across the energy of Wood, Fire, Earth, Metal, and Water — nourishing, flavourful, and light yet satisfying.',
    benefitsEn: ['Balances the five organs’ qi energy', 'Provides steady energy with a light after-meal feel', 'Rich in fibre for gut health']
  },
  {
    id: 'gal-04',
    title: 'Natural Ingredients',
    chineseTitle: '天然手工味噌与谷物',
    category: '汤品 / 暖食',
    energyType: 'neutral',
    energyLabel: '温润平衡 (Warm & Balanced)',
    description: '以天然手工味噌与慢熬蔬食高汤为基底，搭配酿豆腐、当季时蔬（白菜、莲藕、海菜、羊角豆等），呈现层次丰富的天然鲜味。配上一碗香软芋头糙米饭，融合发酵食材、根茎蔬菜与全谷物能量，温润滋养，带来身心满足的暖食体验。',
    imageUrl: `${import.meta.env.BASE_URL}食物6.webp`,
    benefits: ['补充温和稳定能量', '帮助维持消化机能', '富含植物蛋白', '丰富膳食纤维', '含天然发酵营养与矿物质'],
    categoryEn: 'Soups / Warming Foods',
    descriptionEn: 'Hand-made miso and a slow-simmered vegetable broth, with stuffed tofu and seasonal vegetables (cabbage, lotus root, sea vegetables, okra) building layers of natural umami. Served with soft taro brown rice — fermented ingredients, root vegetables, and whole grains for a warming, wholly nourishing bowl.',
    benefitsEn: ['Provides gentle, steady energy', 'Supports healthy digestion', 'Rich in plant protein', 'High in dietary fibre', 'Carries natural fermented nutrients and minerals'],
    energyLabelEn: 'Warm & Balanced'
  },
  {
    id: 'gal-05',
    title: 'Cloud Tofu Cheesecake',
    chineseTitle: '云朵豆腐蛋糕',
    category: '甜点 / 植物乳酪',
    energyType: 'neutral',
    energyLabel: '温润滋养 (Gentle Nourishing)',
    description: '以丝滑豆腐与植物食材制成轻盈乳酪蛋糕，口感细腻柔滑，甜而不腻。保留天然食材的纯净风味，带来温和满足与疗愈感。',
    imageUrl: `${import.meta.env.BASE_URL}食物7.webp`,
    benefits: ['平衡身心', '天然植物蛋白来源', '较低负担的植物性甜点', '无鸡蛋，无精制糖，全豆腐制作'],
    categoryEn: 'Desserts / Plant-Based',
    descriptionEn: 'A light cheesecake made from silky tofu and plant ingredients — smooth, delicate, and sweet without being heavy. It keeps the pure flavour of whole ingredients for a gentle, comforting treat.',
    benefitsEn: ['Balances body and mind', 'A natural plant-protein source', 'A lighter plant-based dessert', 'No eggs, no refined sugar — made entirely from tofu'],
    energyLabelEn: 'Gentle Nourishing'
  },
  {
    id: 'gal-08',
    title: 'Golden Pumpkin Tart',
    chineseTitle: '金秋南瓜挞',
    category: '甜点 / 季节塔点',
    energyType: 'yang',
    energyLabel: '温和微阳 (Gentle Warming)',
    description: '香甜南瓜融合酥香塔皮，散发自然浓郁的南瓜香气。根茎食材带来温暖能量，让每一口都充满丰收与幸福的滋味。',
    imageUrl: `${import.meta.env.BASE_URL}食物8.webp`,
    benefits: ['稳定能量', '丰富膳食纤维', '天然植物营养', '天然低糖配方'],
    categoryEn: 'Desserts / Seasonal Tarts',
    descriptionEn: 'Sweet pumpkin in a crisp tart shell, rich with natural pumpkin aroma. Root-vegetable energy brings warmth to every bite — a taste of harvest and comfort.',
    benefitsEn: ['Provides steady energy', 'High in dietary fibre', 'Natural plant nutrition', 'Naturally low in sugar'],
    energyLabelEn: 'Gentle Warming'
  },
  {
    id: 'gal-09',
    title: 'Whole Grain Banana Cake',
    chineseTitle: '谷香香蕉蛋糕',
    category: '甜点 / 全谷烘焙',
    energyType: 'yang',
    energyLabel: '阳性能量 (Yang Energising)',
    description: '选用熟成香蕉与天然植物食材烘焙而成，散发自然果香与湿润口感。丰富的天然碳水化合物，为身体补充温和而持久的活力。',
    imageUrl: `${import.meta.env.BASE_URL}食物9.webp`,
    benefits: ['补充活力', '增添饱足感', '天然水果营养', '丰富复合碳水化合物', '高膳食纤维'],
    categoryEn: 'Desserts / Whole-Grain Baking',
    descriptionEn: 'Baked with ripe banana and natural plant ingredients, moist and full of fruit fragrance. Rich in natural carbohydrates, it delivers gentle, lasting energy.',
    benefitsEn: ['Restores energy', 'Adds satiety', 'Natural fruit nutrition', 'Rich in complex carbohydrates', 'High in dietary fibre'],
    energyLabelEn: 'Yang Energising'
  },
  {
    id: 'gal-10',
    title: 'Lime Breeze Pie',
    chineseTitle: '青柠晨露派',
    category: '甜点 / 清新派',
    energyType: 'yin',
    energyLabel: '清新平衡 (Refreshing Balance)',
    description: '新鲜青柠的清爽酸香与豆腐完美融合，酸甜平衡、口感轻盈，是餐后最清爽的甜点选择。',
    imageUrl: `${import.meta.env.BASE_URL}食物10.webp`,
    benefits: ['清新开胃，平衡味蕾', '富含天然维生素 C', '天然植物食材', '清爽低糖'],
    categoryEn: 'Desserts / Refreshing Pies',
    descriptionEn: 'Fresh lime’s bright tang meets tofu in perfect balance — sweet, tart, and light, the most refreshing way to end a meal.',
    benefitsEn: ['Refreshes the palate', 'Rich in natural vitamin C', 'Made from natural plant ingredients', 'Light and naturally low in sugar'],
    energyLabelEn: 'Refreshing Balance'
  }
];
