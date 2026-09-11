/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  category: 'concept' | 'dining' | 'dietary';
  badge: string;
  badgeEn: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  highlightText?: string;
  highlightTextEn?: string;
  tags: string[];
  tagsEn: string[];
}

export interface FAQCategory {
  key: 'all' | 'concept' | 'dining' | 'dietary';
  label: string;
  labelEn: string;
  iconName: string;
  description: string;
  descriptionEn: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    key: 'all',
    label: '全部问题',
    labelEn: 'All Questions',
    iconName: 'Sparkles',
    description: '浏览关于 Hulu Hulu Wellness 的 10 项核心常见问题解答',
    descriptionEn: 'Browse all 10 signature questions regarding Hulu Hulu Wellness'
  },
  {
    key: 'concept',
    label: '🌿 五行饮食理念',
    labelEn: '🌿 Five Elements Concept',
    iconName: 'Leaf',
    description: '什么是五星能量餐与金木水火土饮食哲学',
    descriptionEn: 'Five Elements energy dining and food philosophy'
  },
  {
    key: 'dining',
    label: '🍱 门市与特色甜点',
    labelEn: '🍱 Dining & Desserts',
    iconName: 'Utensils',
    description: '吉隆坡体验门市与无负担天然糖浆甜点',
    descriptionEn: 'Kuala Lumpur dining location and guilt-free wellness desserts'
  },
  {
    key: 'dietary',
    label: '🎯 适用人群与特殊需求',
    labelEn: '🎯 Diets & Audiences',
    iconName: 'CircleDot',
    description: '孕妇、控盐人士、儿童、运动健身及家庭适用指南',
    descriptionEn: 'Expectant mothers, low-sodium diners, children, and active lifestyles'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'concept',
    badge: '特色理念',
    badgeEn: 'Signature Concept',
    question: '1. 什么是五星能量餐？',
    questionEn: '1. What is Five Elements Energy Dining?',
    answer: '五星能量餐是 Hulu Hulu Wellness 的特色饮食理念，以五行金、木、水、火、土为灵感，将五行概念融入日常正餐与甜点，为顾客带来兼具营养、有能量又美味的用餐体验。',
    answerEn: 'Five Elements Energy Dining is the signature food concept behind Hulu Hulu Wellness, inspired by the traditional Five Elements of Metal, Wood, Water, Fire and Earth. We bring this concept into everyday main meals and desserts, creating a dining experience that combines nourishment, flavour and wellness.',
    highlightText: '兼具营养、有能量又美味的五行日常用餐体验。',
    highlightTextEn: 'Combines nourishment, flavour, and living positive energy into everyday dining.',
    tags: ['五星能量餐', '特色理念', '五行', '正餐甜点', 'Hulu Hulu'],
    tagsEn: ['Five Elements', 'Energy Dining', 'Signature Concept', 'Meals & Desserts']
  },
  {
    id: 'faq-02',
    category: 'concept',
    badge: '五行哲学',
    badgeEn: 'Five Elements',
    question: '2. 什么是金、木、水、火、土五行饮食理念？',
    questionEn: '2. What are the Five Elements in your food concept?',
    answer: '我们的五行饮食理念以金、木、水、火、土为灵感，通过食材、风味及烹调方式呈现不同的五行特色。让食物成为能量，让能量转化为好运。我们相信，每一餐能滋养身体营养和带来能量。',
    answerEn: 'Our Five Elements dining philosophy is inspired by Metal, Wood, Water, Fire, and Earth, with each element expressed through carefully selected ingredients, distinctive flavors, and unique cooking techniques.\n\nWe believe food can become energy, and energy can bring good luck. Every meal is designed not only to nourish the body with essential nutrients, but also to provide positive energy and support overall well-being.',
    highlightText: '让食物成为能量，让能量转化为好运。',
    highlightTextEn: 'Food becomes energy, and energy brings good luck.',
    tags: ['金木水火土', '五行特色', '好运能量', '食材风味', '烹调方式'],
    tagsEn: ['Metal Wood Water Fire Earth', 'Positive Energy', 'Good Luck', 'Flavors', 'Cooking']
  },
  {
    id: 'faq-03',
    category: 'concept',
    badge: '食物类型',
    badgeEn: 'Offerings',
    question: '3. Hulu Hulu Wellness 主要提供什么食物？',
    questionEn: '3. What kind of food does Hulu Hulu Wellness offer?',
    answer: 'Hulu Hulu Wellness 主要提供以健康生活为理念的日常正餐与特色甜点。我们希望让更多人可以在日常生活中享受美味、多元且均衡的饮食选择。',
    answerEn: 'Hulu Hulu Wellness focuses mainly on everyday main meals and thoughtfully created desserts. Our goal is to make enjoyable, varied and balanced food choices part of your everyday lifestyle.',
    highlightText: '日常正餐与特色甜点，美味、多元且均衡。',
    highlightTextEn: 'Everyday main meals and thoughtfully created desserts for balanced living.',
    tags: ['日常正餐', '特色甜点', '健康生活', '多元饮食', '均衡选择'],
    tagsEn: ['Main Meals', 'Desserts', 'Healthy Lifestyle', 'Balanced Food']
  },
  {
    id: 'faq-04',
    category: 'dining',
    badge: '门市体验',
    badgeEn: 'Kuala Lumpur',
    question: '4. 吉隆坡哪里可以体验五星能量餐？',
    questionEn: '4. Where can I find Five Elements wellness food in Kuala Lumpur?',
    answer: 'Hulu Hulu Wellness 位于吉隆坡 Kuala Lumpur，为顾客提供独特的五星能量餐体验，包括日常正餐与甜点。欢迎亲自来体验我们的五行饮食理念。',
    answerEn: 'Hulu Hulu Wellness offers Five Elements-inspired wellness dining in Kuala Lumpur, featuring everyday main meals and desserts. Visit us to discover our unique approach to food, wellness and everyday dining.',
    highlightText: '位于吉隆坡 Kuala Lumpur，欢迎亲自莅临体验。',
    highlightTextEn: 'Located in Kuala Lumpur — visit us to discover our unique dining approach.',
    tags: ['吉隆坡', 'Kuala Lumpur', '门市体验', '现场品尝', '正餐甜点'],
    tagsEn: ['Kuala Lumpur', 'Dining Experience', 'Visit Us', 'Wellness Dining']
  },
  {
    id: 'faq-05',
    category: 'dining',
    badge: '特色甜点',
    badgeEn: 'Wellness Desserts',
    question: '5. Hulu Hulu Wellness 有甜点吗？',
    questionEn: '5. Do you offer wellness desserts?',
    answer: '有。甜点也是 Hulu Hulu Wellness 饮食体验的重要组成部分。我们以五行与健康生活理念为灵感，利用天然糖浆，让甜点不负担，还可以补充营养。',
    answerEn: 'Yes. Desserts are also an important part of the Hulu Hulu Wellness dining experience. Inspired by the Five Elements philosophy and a healthy lifestyle, we use natural syrups to create desserts that are light and guilt-free, while still providing added nutritional benefits.',
    highlightText: '利用天然糖浆，甜点无负担，还能补充营养。',
    highlightTextEn: 'Crafted with natural syrups: light, guilt-free, and nutrient-rich.',
    tags: ['特色甜点', '天然糖浆', '无负担', '补充营养', '健康甜品'],
    tagsEn: ['Wellness Desserts', 'Natural Syrups', 'Guilt-Free', 'Nutritional Benefits']
  },
  {
    id: 'faq-06',
    category: 'dietary',
    badge: '孕妇关怀',
    badgeEn: 'Maternity Care',
    question: '6. 孕妇可以选择你们的餐点吗？',
    questionEn: '6. Are your meals suitable for pregnant women?',
    answer: '我们有专属的孕妇套餐。如果您正在怀孕或有特殊饮食要求，建议联系我们。',
    answerEn: 'We offer a specially curated menu for expectant mothers. If you are pregnant or have any specific dietary requirements, we recommend contacting us to learn more.',
    highlightText: '拥有专属孕妇套餐，支持特殊饮食需求咨询。',
    highlightTextEn: 'Specially curated menu for expectant mothers; custom inquiries welcome.',
    tags: ['孕妇套餐', '孕期饮食', '备孕关怀', '特殊饮食', '专属定制'],
    tagsEn: ['Expectant Mothers', 'Curated Menu', 'Pregnancy', 'Dietary Requirements']
  },
  {
    id: 'faq-07',
    category: 'dietary',
    badge: '控盐低钠',
    badgeEn: 'Lower Sodium',
    question: '7. 有适合需要控制盐分的人士的餐点吗？',
    questionEn: '7. Do you offer lower-sodium meal choices?',
    answer: '有，我们关注日常饮食的均衡，并提供不同的餐点选择。如果您需要控制钠或盐的摄取量，建议在点餐前向我们的团队了解相关餐点的食材、酱料及调味方式。',
    answerEn: 'Yes, We aim to offer food choices for customers who are mindful of their everyday diet. If you need to limit sodium or salt intake, please ask our team about the ingredients, sauces and seasonings used in your chosen meal before ordering.',
    highlightText: '关注饮食均衡，点餐前可向团队了解少盐调味与酱料细节。',
    highlightTextEn: 'Mindful options available; ask our team about ingredients and seasonings before ordering.',
    tags: ['控盐控钠', '少盐选择', '食材酱料', '调味方式', '均衡饮食'],
    tagsEn: ['Lower Sodium', 'Salt Intake', 'Ingredients & Sauces', 'Mindful Eating']
  },
  {
    id: 'faq-08',
    category: 'dietary',
    badge: '亲子家庭',
    badgeEn: 'Family & Children',
    question: '8. 有适合孩子的餐点吗？',
    questionEn: '8. Do you offer meals suitable for children?',
    answer: '我们提供适合家庭共享的日常餐点选择。家长可以根据孩子的年龄、口味、过敏情况及个人饮食需求选择合适的餐点。如孩子有食物过敏或特殊饮食要求，建议点餐前向我们的团队确认食材。',
    answerEn: 'We offer everyday meal choices that families can enjoy together. Parents and caregivers can choose meals according to their child\'s age, preferences, allergies and individual dietary needs. Please speak with our team about ingredients if your child has a food allergy or specific dietary requirement.',
    highlightText: '适合家庭共享，支持根据孩子口味与过敏情况确认食材。',
    highlightTextEn: 'Family-friendly choices; speak with our team to verify allergy-safe ingredients.',
    tags: ['适合孩子', '家庭共享', '过敏确认', '口味偏好', '儿童餐点'],
    tagsEn: ['Children Friendly', 'Family Meals', 'Allergies', 'Kid Preferences']
  },
  {
    id: 'faq-09',
    category: 'dietary',
    badge: '健身运动',
    badgeEn: 'Active Lifestyles',
    question: '9. 有适合健身或运动人士的餐点吗？',
    questionEn: '9. Do you offer meals for people with active lifestyles?',
    answer: '有。我们的饮食理念也关注积极生活方式，为健身及运动人士提供不同的餐点选择。根据具体菜单，顾客可以选择含有蛋白质、碳水化合物、蔬菜等不同营养来源的餐点，以配合日常饮食需求。',
    answerEn: 'Yes. Our wellness dining concept also caters to active lifestyles. Depending on the menu, customers can choose meals that include sources of protein, carbohydrates, vegetables and other ingredients to complement their everyday dietary needs.',
    highlightText: '蛋白质、优质碳水与蔬食搭配，满足运动与日常能量补给。',
    highlightTextEn: 'Balanced protein, carbs, and vegetables to power active daily routines.',
    tags: ['健身人士', '积极生活', '运动补给', '蛋白质', '碳水化合物'],
    tagsEn: ['Active Lifestyles', 'Fitness', 'Protein', 'Carbohydrates', 'Vegetables']
  },
  {
    id: 'faq-10',
    category: 'dietary',
    badge: '适用人群',
    badgeEn: 'Who Can Enjoy',
    question: '10. 五星能量餐适合哪些人？',
    questionEn: '10. Who can enjoy Five Elements Energy Dining?',
    answer: '五星能量餐适合不同生活方式的人士，包括日常用餐人士、家庭、儿童、孕期顾客以及注重健康饮食和积极生活方式的人士。我们提供多元化的正餐与甜点选择，让每个人都可以根据自己的饮食需求选择适合的餐点。',
    answerEn: 'Five Elements Energy Dining is designed for people with different lifestyles, including everyday diners, families, children, pregnant customers and those who value wellness and an active lifestyle. With a variety of main meals and desserts, customers can choose according to their individual dietary needs.',
    highlightText: '全客群友好：日常用餐、家庭亲子、孕期女性与健身达人皆宜。',
    highlightTextEn: 'Universal appeal: everyday diners, families, pregnant women, and health enthusiasts.',
    tags: ['适合人群', '日常用餐', '家庭儿童', '孕期顾客', '积极生活'],
    tagsEn: ['Universal Dining', 'Everyday Diners', 'Families', 'Pregnant Customers', 'Wellness Seekers']
  }
];
