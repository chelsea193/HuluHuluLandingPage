/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementType } from '../types';

export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  textEn: string;
  element: ElementType;
  elementLabel: string;
  elementLabelEn: string;
}

export interface QuizQuestion {
  id: number;
  code: string;
  topic: string;
  topicEn: string;
  title: string;
  titleEn: string;
  options: QuizOption[];
}

export interface QuizResultProfile {
  element: ElementType;
  chineseName: string;
  englishName: string;
  constitutionType: string;
  constitutionTypeEn: string;
  coreFeature: string;
  coreFeatureEn: string;
  description: string[];
  descriptionEn: string[];
  keyAdvice: {
    highlight: string;
    highlightEn: string;
    details: string;
    detailsEn: string;
  };
  elementDetails: Record<ElementType, {
    name: string;
    nameEn: string;
    quote: string;
    quoteEn: string;
    subQuote: string;
    subQuoteEn: string;
    description: string;
    descriptionEn: string;
  }>;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    code: 'Q01',
    topic: '最近的整体状态',
    topicEn: 'Recent Overall State',
    title: '最近这段时间，你的整体状态更接近哪一种？',
    titleEn: 'Lately, which of the following best describes your overall state?',
    options: [
      {
        key: 'A',
        text: '很有冲劲，想到事情就想马上去做',
        textEn: 'Full of drive, wanting to take immediate action as soon as an idea strikes',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'B',
        text: '心里容易有很多想法，希望事情可以顺利展开',
        textEn: 'Full of emerging ideas, eager for plans to unfold smoothly',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'C',
        text: '比较容易疲惫，更喜欢舒服、稳定的节奏',
        textEn: 'Easily fatigued, preferring a comfortable, predictable, and steady pace',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '喜欢把事情整理清楚，再一步一步处理',
        textEn: 'Preferring to organize everything clearly before taking systematic steps',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '更需要安静和独处，休息后才能慢慢恢复',
        textEn: 'Needing quiet solitude and extended rest to gradually recharge',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 2,
    code: 'Q02',
    topic: '面对压力',
    topicEn: 'Handling Pressure',
    title: '当压力累积的时候，你通常会？',
    titleEn: 'When pressure accumulates, how do you usually respond?',
    options: [
      {
        key: 'A',
        text: '容易烦躁，想找一个出口把事情解决掉',
        textEn: 'Feel irritable and seek an immediate outlet to get things resolved',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '会马上行动，不喜欢一直拖着',
        textEn: 'Take swift action right away, disliking lingering procrastination',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '想吃点喜欢的东西或休息一下，让自己舒服一点',
        textEn: 'Crave comforting food or take a break to soothe and comfort yourself',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '想先把事情理清楚，再决定下一步',
        textEn: 'Try to mentally sort out the facts first before deciding the next step',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '想暂时离开压力源，一个人安静一会儿',
        textEn: 'Want to temporarily retreat from the stressor and stay quiet alone',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 3,
    code: 'Q03',
    topic: '睡眠',
    topicEn: 'Sleep Quality',
    title: '最近你的睡眠状态更接近？',
    titleEn: 'Recently, which best reflects your sleep state?',
    options: [
      {
        key: 'A',
        text: '脑子比较活跃，睡前容易想很多事情',
        textEn: 'Very active mind with wandering thoughts right before bedtime',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '明明累了，还是容易处于兴奋状态',
        textEn: 'Physically exhausted, yet mentally wired and unable to calm down',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '睡醒以后，有时候还是觉得身体比较沉',
        textEn: 'Waking up with a lingering sense of heaviness in the body',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '对光线、声音或环境变化比较敏感',
        textEn: 'Highly sensitive to subtle light, sounds, or environmental shifts',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '很需要充分的睡眠和休息，才能恢复精神',
        textEn: 'Requiring prolonged, uninterrupted sleep to truly regain vitality',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 4,
    code: 'Q04',
    topic: '饮食',
    topicEn: 'Diet & Cravings',
    title: '以下哪一种饮食状态比较像你？',
    titleEn: 'Which of the following eating habits sounds most like you?',
    options: [
      {
        key: 'A',
        text: '偶尔特别想吃带一点酸味的食物',
        textEn: 'Occasionally craving slightly sour, tangy, or zesty flavors',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '喜欢有香气、有味道、比较刺激的食物',
        textEn: 'Drawn to aromatic, pungent, or spicy stimulating flavors',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '比较喜欢甜味、米饭、面食或有满足感的食物',
        textEn: 'Preferring sweet tastes, warm rice, noodles, or hearty comfort foods',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '喜欢清爽、简单、有规律的饮食',
        textEn: 'Favoring light, clean, simple, and orderly dining habits',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '比较喜欢温热的汤水或让自己感觉舒服的食物',
        textEn: 'Preferring warm broths, nourishing soups, or gentle comfort meals',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 5,
    code: 'Q05',
    topic: '身体感受',
    topicEn: 'Physical Sensations',
    title: '最近身体最容易让你注意到的感觉是？',
    titleEn: 'What physical sensation do you notice most frequently lately?',
    options: [
      {
        key: 'A',
        text: '肩颈或身体容易紧绷',
        textEn: 'Stiff neck, tight shoulders, or chronic muscular tension',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '容易感觉燥热或需要降一降节奏',
        textEn: 'Feeling restless internal heat or a strong urge to slow down the pace',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '容易觉得身体沉重或饭后容易想休息',
        textEn: 'Feeling bodily heaviness or noticeable drowsiness right after meals',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '对空气、环境或季节变化比较敏感',
        textEn: 'Skin, nasal passages, or bronchial airways sensitive to climate shifts',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '比较容易觉得冷，需要时间让身体暖起来',
        textEn: 'Easily feeling chilled, taking longer for the limbs to warm up',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 6,
    code: 'Q06',
    topic: '情绪',
    topicEn: 'Emotional Flow',
    title: '最近你的情绪状态更接近？',
    titleEn: 'How would you describe your recent emotional pattern?',
    options: [
      {
        key: 'A',
        text: '情绪来了以后，需要一个出口表达出来',
        textEn: 'When emotions arise, you need an expressive outlet right away',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '情绪变化比较快，很快就会表现出来',
        textEn: 'Emotions shift rapidly and show up visibly on your expression',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '容易因为熟悉的人、事、环境而获得安全感',
        textEn: 'Drawing safety and comfort easily from familiar people and surroundings',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '通常会先自己整理情绪，再决定要不要表达',
        textEn: 'Preferring to process emotions internally before deciding to express them',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '更倾向自己慢慢消化，不太想马上说出来',
        textEn: 'Tending to digest feelings quietly alone, hesitant to speak out immediately',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 7,
    code: 'Q07',
    topic: '做事情',
    topicEn: 'Task Execution',
    title: '当你面对一个新任务时，你通常会？',
    titleEn: 'When encountering a brand-new task, what is your initial approach?',
    options: [
      {
        key: 'A',
        text: '先想怎么突破，喜欢找到新的方法',
        textEn: 'Think about breakthroughs first, loving to invent novel methods',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '直接开始做，边做边调整',
        textEn: 'Dive straight in and make iterative adjustments along the way',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '先确认自己有没有足够时间和精力',
        textEn: 'First verify whether you have sufficient time and physical stamina',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '先整理步骤和规则，再开始执行',
        textEn: 'Map out guidelines, rules, and structured steps before taking action',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '先观察情况，确定方向以后再行动',
        textEn: 'Observe the situation carefully and confirm the direction before moving',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 8,
    code: 'Q08',
    topic: '休息',
    topicEn: 'True Relaxation',
    title: '真正让你感觉放松的方式是？',
    titleEn: 'What method truly helps you feel deeply relaxed?',
    options: [
      {
        key: 'A',
        text: '出门走走、运动或换一个环境',
        textEn: 'Going outdoors, exercising, or switching your physical environment',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '做喜欢的事情，让自己重新有活力',
        textEn: 'Engaging in passions that reignite your inner enthusiasm and drive',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '吃一顿舒服的饭，然后好好休息',
        textEn: 'Savoring a wholesome comforting meal followed by peaceful rest',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '整理房间、阅读或做一些安静有秩序的事情',
        textEn: 'Tidying up your room, reading, or doing quiet, orderly activities',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '独处、睡觉或安静待着',
        textEn: 'Solitude, deep sleep, or simply resting without disturbance',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 9,
    code: 'Q09',
    topic: '生活节奏',
    topicEn: 'Life Rhythm',
    title: '你目前的生活节奏比较像？',
    titleEn: 'Your current life rhythm feels most like:',
    options: [
      {
        key: 'A',
        text: '想做很多事情，希望不断向前',
        textEn: 'Ambitious with many aspirations, eager to push constantly forward',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '行程比较满，很难真正停下来',
        textEn: 'Packed itinerary, finding it difficult to truly pause and disconnect',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '希望生活稳定一点，不喜欢变化太多',
        textEn: 'Yearning for stability and grounded ease, disliking sudden disruptions',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '喜欢规律、有计划、有明确安排',
        textEn: 'Structured, planned, with transparent boundaries and timetables',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '希望慢下来，把时间留给自己',
        textEn: 'Wishing to slow down and reclaim quiet time for yourself',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 10,
    code: 'Q10',
    topic: '天气变化',
    topicEn: 'Weather Shifts',
    title: '天气或季节变化时，你比较容易注意到？',
    titleEn: 'During weather or seasonal changes, what do you notice first?',
    options: [
      {
        key: 'A',
        text: '心情和精神状态跟着变化',
        textEn: 'Mood swings and mental focus fluctuate noticeably with the weather',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '容易觉得身体需要调整节奏',
        textEn: 'Feeling that the body needs an immediate adjustment in rhythm',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '活动力和食欲可能跟着变化',
        textEn: 'Energy levels, physical drive, and appetite shift noticeably',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '鼻子、皮肤或呼吸对环境比较敏感',
        textEn: 'Nose, skin, or bronchial passages react sensitively to climate',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '对温度变化比较敏感，特别在意保暖',
        textEn: 'Sensitive to temperature drops, prioritizing warmth and layers',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 11,
    code: 'Q11',
    topic: '人际关系',
    topicEn: 'Relationships',
    title: '和别人相处时，你比较接近？',
    titleEn: 'In interpersonal interactions, which tendency reflects you best?',
    options: [
      {
        key: 'A',
        text: '喜欢交流想法，也希望关系可以不断成长',
        textEn: 'Love exchanging inspiring ideas and growing together through dialogue',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '喜欢热闹、有互动、有共同活动',
        textEn: 'Enjoy vibrant gatherings, lively interactions, and shared festivities',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '很重视熟悉感、陪伴和安全感',
        textEn: 'Place deep value on familiarity, emotional warmth, and security',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '比较重视界限和彼此的私人空间',
        textEn: 'Value clear boundaries, mutual respect, and private personal space',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '更喜欢少数深度关系，不喜欢太复杂的社交',
        textEn: 'Prefer a select few deep bonds, avoiding complex superficial networking',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 12,
    code: 'Q12',
    topic: '疲惫的时候',
    topicEn: 'Fatigue Response',
    title: '当你感觉累的时候，你第一反应通常是？',
    titleEn: 'When fatigue sets in, what is your instinctive first reaction?',
    options: [
      {
        key: 'A',
        text: '出去走走，让自己换个状态',
        textEn: 'Step outside for a walk to refresh and switch mental states',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '做点自己喜欢的事情，让自己重新有精神',
        textEn: 'Do something you enjoy to reignite your enthusiasm and spirit',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '吃东西、休息或找一个舒服的地方待着',
        textEn: 'Eat nourishing food, rest, or curl up in a cozy sanctuary',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '暂停一下，把事情重新整理安排',
        textEn: 'Pause to reorganize schedules and reassess task priorities',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '尽量减少外界干扰，让自己充分休息',
        textEn: 'Minimize all external stimuli and immerse in deep restorative rest',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 13,
    code: 'Q13',
    topic: '你最想改善什么？',
    topicEn: 'Desired Improvement',
    title: '如果最近只能选择一个方向，你最希望改善？',
    titleEn: 'If you could only improve one aspect recently, what would it be?',
    options: [
      {
        key: 'A',
        text: '情绪压力和身体紧绷感',
        textEn: 'Emotional stress and persistent muscular tension',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '放松能力和生活节奏',
        textEn: 'Capacity to truly relax and moderate your daily living pace',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '饮食规律和身体舒适感',
        textEn: 'Regularity of eating habits and holistic digestive comfort',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '作息规律和生活秩序',
        textEn: 'Consistent daily routines and harmonious living order',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '睡眠质量和恢复时间',
        textEn: 'Sleep depth, restful restoration, and recharge time',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 14,
    code: 'Q14',
    topic: '最近最需要什么？',
    topicEn: 'Urgent Present Need',
    title: '如果现在可以给自己一样东西，你最需要？',
    titleEn: 'If you could gift yourself one thing right now, what is it?',
    options: [
      {
        key: 'A',
        text: '一个释放压力、重新开始的机会',
        textEn: 'An opportunity to release pent-up stress and start fresh',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '一件让自己开心、有活力的事情',
        textEn: 'An uplifting, joyful experience that sparks genuine vitality',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '一顿舒服的饭和一个安心的环境',
        textEn: 'A comforting home-cooked meal in an emotionally secure sanctuary',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '一段安静、没有干扰的时间',
        textEn: 'An undisturbed pocket of peaceful, quiet, focused time',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '好好睡一觉，让自己彻底休息',
        textEn: 'A deep, uninterrupted night of sleep to thoroughly recharge',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  },
  {
    id: 15,
    code: 'Q15',
    topic: '身体想告诉你什么？',
    topicEn: "Body's Message",
    title: '如果身体可以给你一个提醒，你觉得它最想说？',
    titleEn: 'If your body could send you a gentle message, what would it say?',
    options: [
      {
        key: 'A',
        text: '「让我动起来，也让我把情绪释放出来。」',
        textEn: '"Let me move freely, and allow my emotions to be voiced."',
        element: 'wood',
        elementLabel: '木',
        elementLabelEn: 'Wood'
      },
      {
        key: 'B',
        text: '「不用一直保持高速，偶尔也可以停下来。」',
        textEn: '"You don\'t need to race at full speed; it\'s okay to pause."',
        element: 'fire',
        elementLabel: '火',
        elementLabelEn: 'Fire'
      },
      {
        key: 'C',
        text: '「让生活简单一点，好好照顾每天的节奏。」',
        textEn: '"Simplify your lifestyle, and nurture your daily rhythm."',
        element: 'earth',
        elementLabel: '土',
        elementLabelEn: 'Earth'
      },
      {
        key: 'D',
        text: '「给自己一点空间，让生活重新变得有秩序。」',
        textEn: '"Give yourself space to bring back clarity and gentle order."',
        element: 'metal',
        elementLabel: '金',
        elementLabelEn: 'Metal'
      },
      {
        key: 'E',
        text: '「先休息，把能量慢慢养回来。」',
        textEn: '"Rest first, and let your natural energy quietly restore."',
        element: 'water',
        elementLabel: '水',
        elementLabelEn: 'Water'
      }
    ]
  }
];

export const RESULT_PROFILES: Record<ElementType, QuizResultProfile> = {
  wood: {
    element: 'wood',
    chineseName: '木行体质',
    englishName: 'Wood',
    constitutionType: '主柔木之生机体质',
    constitutionTypeEn: 'Wood Body Type (Growth & Vitality)',
    coreFeature: '肝气较为旺盛，身体对压力和紧绷敏感度较高',
    coreFeatureEn: 'Active, driven, and motivated, but sensitive to stress and tension',
    description: [
      '您目前偏向木行体质。',
      '木曰曲直，代表生发、舒展与向上的力量。',
      '木行能量较强的人，通常行动力较强、有自己的想法，也比较希望事情能够顺利向前发展。',
      '当生活节奏过快，或者长期处于精神压力之下时，容易感觉自己「卡住」或难以真正放松。',
      '身体层面可能会更加注意眼睛疲劳、肩颈紧绷，以及压力累积时的胸口或身体不适感。'
    ],
    descriptionEn: [
      'You currently lean toward the Wood body type.',
      'Wood represents growth, fresh energy, and upward drive.',
      'People with strong Wood energy like getting things done and having clear goals.',
      'When life gets too busy or stressful, you may feel stuck and find it hard to truly relax.',
      'You might also notice eye strain, tight neck and shoulders, or feeling easily annoyed.'
    ],
    keyAdvice: {
      highlight: '舒展、放松、规律休息，让身体重新找到流动感。',
      highlightEn: 'Stretch, relax, and give yourself time to unwind.',
      details: '可以通过适度伸展、散步、户外活动，以及规律作息帮助自己调整生活节奏。',
      detailsEn: 'Take short breaks from screens, do gentle stretches, take walks outside, and keep regular sleep hours.'
    },
    elementDetails: {
      wood: {
        name: '木行',
        nameEn: 'Wood Element',
        quote: '木曰曲直',
        quoteEn: 'Wood Curvature & Extension',
        subQuote: '生机勃勃，宜通达忌郁滞。',
        subQuoteEn: 'Vibrant sprouting; flourish through circulation, avoid stagnation.',
        description: '木是您目前最明显的能量倾向。您的状态比较重视行动、成长与突破，也需要避免长期压抑情绪和过度紧绷。',
        descriptionEn: 'Wood is your dominant energy. You thrive on momentum and breakthroughs, yet must avoid chronic emotional suppression and stiffness.'
      },
      earth: {
        name: '土行',
        nameEn: 'Earth Element',
        quote: '土爰稼穑',
        quoteEn: 'Earth Sowing & Reaping',
        subQuote: '沉稳包容，宜运化忌停滞。',
        subQuoteEn: 'Stable & nourishing; promote transformation, avoid damp stagnation.',
        description: '土行能量相对较低，可以多关注规律饮食、休息以及稳定的生活节奏。',
        descriptionEn: 'Earth energy is relatively lower. Focus on steady, warm meals and grounded rhythms.'
      },
      fire: {
        name: '火行',
        nameEn: 'Fire Element',
        quote: '火曰炎上',
        quoteEn: 'Fire Ascending Warmth',
        subQuote: '热烈敏捷，宜平衡忌过度消耗。',
        subQuoteEn: 'Warm & agile; seek balance, prevent burning depletion.',
        description: '火行能量在本次测试中较少，生活中可以适度增加让自己感到愉悦、有活力的活动。',
        descriptionEn: 'Fire energy scored lower; incorporate joyful, heart-lifting experiences to warm your spirit.'
      },
      metal: {
        name: '金行',
        nameEn: 'Metal Element',
        quote: '金曰从革',
        quoteEn: 'Metal Refining Order',
        subQuote: '沉降精准，宜润泽忌过度紧绷。',
        subQuoteEn: 'Descending & precise; cherish moisture, avoid excessive rigidity.',
        description: '金行能量较少，可以通过整理环境、建立规律与留出独处空间，让生活更加有秩序。',
        descriptionEn: 'Metal is modest; declutter your space and establish mindful boundaries for effortless clarity.'
      },
      water: {
        name: '水行',
        nameEn: 'Water Element',
        quote: '水曰润下',
        quoteEn: 'Water Nourishing Descent',
        subQuote: '沉静收藏，宜充养忌过度消耗。',
        subQuoteEn: 'Quiet storage; replenish deep essence, prevent depletion.',
        description: '水行能量较少，需要特别留意是否给自己足够的休息与恢复时间。',
        descriptionEn: 'Water needs attention; ensure you grant yourself genuine, uncompromised restorative rest.'
      }
    }
  },

  fire: {
    element: 'fire',
    chineseName: '火行体质',
    englishName: 'Fire',
    constitutionType: '主柔火之活力体质',
    constitutionTypeEn: 'Fire Body Type (Warmth & Energy)',
    coreFeature: '行动与表达能量较强，容易进入高速运转状态',
    coreFeatureEn: 'Warm, cheerful, and fast-moving, but can easily overwork and get tired',
    description: [
      '您目前偏向火行体质。',
      '火曰炎上，代表热情、活力、表达与向外的能量。',
      '火行能量较强的人，通常比较有行动力，也容易受到兴趣和情绪带动。',
      '您可能喜欢有变化、有互动的生活，不喜欢长期处于沉闷、没有动力的状态。',
      '但当生活节奏过快时，也容易忘记休息，让自己长时间保持在「一直在做事情」的状态。'
    ],
    descriptionEn: [
      'You currently lean toward the Fire body type.',
      'Fire represents warmth, enthusiasm, and outward energy.',
      'People with strong Fire energy are lively and passionate about what they do.',
      'You love variety and being around people, and you dislike feeling bored or stuck.',
      'When things move too fast, you might forget to rest and run on empty.'
    ],
    keyAdvice: {
      highlight: '有热情，也要学会降速。',
      highlightEn: 'Keep your passion, but remember to slow down.',
      details: '保持规律睡眠、适度休息，给自己安排安静的时间，有助于重新建立能量平衡。',
      detailsEn: 'Protect your sleep, take quiet breaks during the day, and let your mind and body cool down.'
    },
    elementDetails: {
      fire: {
        name: '火行',
        nameEn: 'Fire Element',
        quote: '火曰炎上',
        quoteEn: 'Fire Ascending Warmth',
        subQuote: '热烈敏捷，宜平衡忌过度消耗。',
        subQuoteEn: 'Radiant agility; embrace balance, avoid burning out.',
        description: '火是您目前最明显的能量倾向。您拥有较强的行动与表达倾向，但需要避免持续透支自己的精力。',
        descriptionEn: 'Fire is your dominant force. Balance your radiant output with conscious energy preservation.'
      },
      wood: {
        name: '木行',
        nameEn: 'Wood Element',
        quote: '木曰曲直',
        quoteEn: 'Wood Curvature & Extension',
        subQuote: '生机向上，宜舒展忌郁滞。',
        subQuoteEn: 'Ascending growth; cultivate expansion, prevent stagnation.',
        description: '木行能量相对较低，可以增加散步、伸展和接触自然的时间。',
        descriptionEn: 'Incorporate forest bathing and body stretching to nourish the roots of your fire.'
      },
      earth: {
        name: '土行',
        nameEn: 'Earth Element',
        quote: '土爰稼穑',
        quoteEn: 'Earth Sowing & Reaping',
        subQuote: '沉稳包容，宜规律忌停滞。',
        subQuoteEn: 'Grounded nourishment; sustain regularity, avoid stagnation.',
        description: '可以更加关注饮食、休息和稳定生活节奏。',
        descriptionEn: 'Anchor yourself with warm whole-grain meals and grounded daily rituals.'
      },
      metal: {
        name: '金行',
        nameEn: 'Metal Element',
        quote: '金曰从革',
        quoteEn: 'Metal Refining Order',
        subQuote: '沉降精准，宜润泽忌紧绷。',
        subQuoteEn: 'Clear discernment; foster moisture, avoid tension.',
        description: '可以通过整理环境和建立规律，让生活拥有更多秩序感。',
        descriptionEn: 'Cultivate structured boundaries to prevent energy dispersion.'
      },
      water: {
        name: '水行',
        nameEn: 'Water Element',
        quote: '水曰润下',
        quoteEn: 'Water Nourishing Descent',
        subQuote: '沉静收藏，宜充养忌过度消耗。',
        subQuoteEn: 'Deep stillness; cherish recharge, prevent depletion.',
        description: '建议给自己更多真正的休息和恢复时间。',
        descriptionEn: 'Dedicate generous evening stillness to replenish vital kidney water.'
      }
    }
  },

  earth: {
    element: 'earth',
    chineseName: '土行体质',
    englishName: 'Earth',
    constitutionType: '主柔土之承载体质',
    constitutionTypeEn: 'Earth Body Type (Grounded & Caring)',
    coreFeature: '重视稳定与安全感，身体容易受到饮食和生活节奏影响',
    coreFeatureEn: 'Values stability and comfort; daily routines and warm food keep your energy steady',
    description: [
      '您目前偏向土行体质。',
      '土爰稼穑，代表承载、滋养、稳定与包容。',
      '土行能量较强的人，通常比较重视熟悉感和安全感，也希望生活能够保持稳定。',
      '当生活节奏突然改变，或者饮食、休息变得不规律时，身体可能会更加明显地提醒您需要休息。'
    ],
    descriptionEn: [
      'You currently lean toward the Earth body type.',
      'Earth represents nourishment, stability, and caring for others.',
      'People with strong Earth energy love cozy, familiar routines and feeling safe.',
      'When meals become irregular or schedules change fast, your digestion quickly signals that you need rest.'
    ],
    keyAdvice: {
      highlight: '规律、简单、稳定。',
      highlightEn: 'Keep things simple, regular, and calm.',
      details: '从固定的作息、规律饮食和适度活动开始，不需要一次改变太多。',
      detailsEn: 'Stick to regular meal times, eat warm foods, and enjoy light daily walks.'
    },
    elementDetails: {
      earth: {
        name: '土行',
        nameEn: 'Earth Element',
        quote: '土爰稼穑',
        quoteEn: 'Earth: Nurturing & Grounded',
        subQuote: '沉稳包容，宜运化忌停滞。',
        subQuoteEn: 'Steady care: keep digestion active, avoid sluggishness.',
        description: '土是您目前最明显的能量倾向。稳定是您的重要关键词，同时也需要避免长期处于久坐、少动或生活节奏停滞的状态。',
        descriptionEn: 'Earth is your strong base. Enjoy your calm presence while keeping your body active.'
      },
      fire: {
        name: '火行',
        nameEn: 'Fire Element',
        quote: '火曰炎上',
        quoteEn: 'Fire: Warmth & Joy',
        subQuote: '热烈敏捷，宜平衡忌过度消耗。',
        subQuoteEn: 'Bright energy: stay balanced, avoid burnout.',
        description: '可以适度加入让自己开心、有活力的活动。',
        descriptionEn: 'Add joyful, uplifting activities that make you smile.'
      },
      wood: {
        name: '木行',
        nameEn: 'Wood Element',
        quote: '木曰曲直',
        quoteEn: 'Wood: Growth & Movement',
        subQuote: '生机向上，宜舒展忌郁滞。',
        subQuoteEn: 'Active energy: stretch out, avoid sitting still too long.',
        description: '适度运动、伸展和户外活动，有助于让生活保持流动。',
        descriptionEn: 'Daily walks outdoors and fresh greens help keep your energy moving.'
      },
      metal: {
        name: '金行',
        nameEn: 'Metal Element',
        quote: '金曰从革',
        quoteEn: 'Metal: Order & Clarity',
        subQuote: '沉降精准，宜润泽忌紧绷。',
        subQuoteEn: 'Clear structure: stay calm, avoid stress.',
        description: '可以通过整理环境、规划生活，让日常更加清晰。',
        descriptionEn: 'Keep your room tidy and mind clear to feel lighter every day.'
      },
      water: {
        name: '水行',
        nameEn: 'Water Element',
        quote: '水曰润下',
        quoteEn: 'Water: Deep Rest',
        subQuote: '沉静收藏，宜充养忌过度消耗。',
        subQuoteEn: 'Quiet energy: save your strength, avoid exhaustion.',
        description: '给自己充分的休息时间，不要长期忽略疲劳信号。',
        descriptionEn: 'Listen to your body when you feel tired and drink warm water.'
      }
    }
  },

  metal: {
    element: 'metal',
    chineseName: '金行体质',
    englishName: 'Metal',
    constitutionType: '主柔金之清肃体质',
    constitutionTypeEn: 'Metal Body Type (Clarity & Order)',
    coreFeature: '重视秩序与界限，对环境变化和生活规律较为敏感',
    coreFeatureEn: 'Values clear boundaries and order; sensitive to climate, dry air, and chaotic routines',
    description: [
      '您目前偏向金行体质。',
      '金曰从革，代表收敛、秩序、清晰与边界。',
      '金行能量较强的人，通常比较重视规则、效率和生活空间，也喜欢事情有明确的方向。',
      '当外界环境过于混乱，或者生活节奏失去规律时，可能会更容易感觉疲惫或不舒服。'
    ],
    descriptionEn: [
      'You currently lean toward the Metal body type.',
      'Metal represents clarity, tidy spaces, healthy boundaries, and mindful breathing.',
      'People with strong Metal energy value honesty, neatness, and clear plans.',
      'When routines become messy or work gets too busy, you may feel mental fatigue or dry skin and throat.'
    ],
    keyAdvice: {
      highlight: '保持规律，同时给自己留出呼吸空间。',
      highlightEn: 'Keep order, but give yourself plenty of room to breathe.',
      details: '整理生活环境、保持规律作息、适度运动，都可以成为帮助自己恢复节奏的小习惯。',
      detailsEn: 'Take deep breaths, keep your space clean, and do not worry about making everything perfect.'
    },
    elementDetails: {
      metal: {
        name: '金行',
        nameEn: 'Metal Element',
        quote: '金曰从革',
        quoteEn: 'Metal: Clarity & Boundaries',
        subQuote: '沉降精准，宜润泽忌过度紧绷。',
        subQuoteEn: 'Clear structure: stay hydrated, let go of stiffness.',
        description: '金是您目前最明显的能量倾向。秩序与清晰感对您很重要，但也要避免对自己要求过高。',
        descriptionEn: 'Metal is your strength. Value your eye for detail while being gentle with yourself.'
      },
      earth: {
        name: '土行',
        nameEn: 'Earth Element',
        quote: '土爰稼穑',
        quoteEn: 'Earth: Nurturing & Grounded',
        subQuote: '沉稳包容，宜运化忌停滞。',
        subQuoteEn: 'Steady nourishment: support good digestion.',
        description: '可以关注规律饮食与稳定生活节奏。',
        descriptionEn: 'Eating warm meals helps support your breathing and keeps your skin hydrated.'
      },
      wood: {
        name: '木行',
        nameEn: 'Wood Element',
        quote: '木曰曲直',
        quoteEn: 'Wood: Growth & Movement',
        subQuote: '生机向上，宜舒展忌郁滞。',
        subQuoteEn: 'Fresh energy: stretch your body, release tension.',
        description: '适度运动、户外活动和身体伸展，可以让生活增加一些流动感。',
        descriptionEn: 'Daily stretching and relaxing hobbies help you loosen up.'
      },
      fire: {
        name: '火行',
        nameEn: 'Fire Element',
        quote: '火曰炎上',
        quoteEn: 'Fire: Warmth & Joy',
        subQuote: '热烈敏捷，宜平衡忌过度消耗。',
        subQuoteEn: 'Warm energy: share laughs, avoid burnout.',
        description: '可以安排让自己感到愉悦和有活力的活动。',
        descriptionEn: 'Warm conversations and good laughs bring energy to your day.'
      },
      water: {
        name: '水行',
        nameEn: 'Water Element',
        quote: '水曰润下',
        quoteEn: 'Water: Deep Rest',
        subQuote: '沉静收藏，宜充养忌过度消耗。',
        subQuoteEn: 'Quiet recovery: recharge your energy, avoid exhaustion.',
        description: '需要给自己安排安静和恢复的时间。',
        descriptionEn: 'Give your busy mind time to rest quietly without feeling guilty.'
      }
    }
  },

  water: {
    element: 'water',
    chineseName: '水行体质',
    englishName: 'Water',
    constitutionType: '主柔水之收藏体质',
    constitutionTypeEn: 'Water Body Type (Stillness & Deep Rest)',
    coreFeature: '需要较多恢复空间，身体对休息、睡眠和生活节奏较为敏感',
    coreFeatureEn: 'Needs plenty of rest and quiet time; sensitive to busy schedules and lack of sleep',
    description: [
      '您目前偏向水行体质。',
      '水曰润下，代表安静、收藏、深度与恢复。',
      '水行能量较强的人，通常比较需要独处和充分休息，也更重视内在感受。',
      '当生活长期处于忙碌和高消耗状态时，可能会明显感觉自己需要更多时间恢复。'
    ],
    descriptionEn: [
      'You currently lean toward the Water body type.',
      'Water represents quiet energy, deep wisdom, rest, and recovery.',
      'People with strong Water energy are thoughtful and calm, and thrive with peaceful downtime.',
      'When life gets too busy and hectic, your body quickly tells you it is time to slow down.'
    ],
    keyAdvice: {
      highlight: '减少过度消耗，给身体足够的恢复空间。',
      highlightEn: 'Avoid burning out and give your body plenty of time to rest.',
      details: '规律睡眠、适度活动，以及减少长期熬夜和过度忙碌，是建立稳定生活节奏的重要方式。',
      detailsEn: 'Go to bed earlier, enjoy warm nourishing foods, and protect your quiet time.'
    },
    elementDetails: {
      water: {
        name: '水行',
        nameEn: 'Water Element',
        quote: '水曰润下',
        quoteEn: 'Water: Deep Rest',
        subQuote: '聪慧收藏，宜充养忌过度消耗。',
        subQuoteEn: 'Quiet energy: save your strength, avoid exhaustion.',
        description: '水是您目前最明显的能量倾向。您的关键词是恢复、安静与储备，需要避免长期处于持续消耗状态。',
        descriptionEn: 'Water is your calm spring. Protect your energy and recharge before you feel drained.'
      },
      metal: {
        name: '金行',
        nameEn: 'Metal Element',
        quote: '金曰从革',
        quoteEn: 'Metal: Order & Clarity',
        subQuote: '沉降精准，宜润泽忌过度紧绷。',
        subQuoteEn: 'Clear structure: stay calm, avoid stress.',
        description: '可以通过规律生活与整理环境，让自己的生活更加稳定。',
        descriptionEn: 'Set gentle routines each day so you do not feel rushed.'
      },
      wood: {
        name: '木行',
        nameEn: 'Wood Element',
        quote: '木曰曲直',
        quoteEn: 'Wood: Growth & Movement',
        subQuote: '生机向上，宜舒展忌郁滞。',
        subQuoteEn: 'Spring vitality: stretch out, avoid feeling sluggish.',
        description: '适度散步、伸展和户外活动，可以帮助生活保持流动。',
        descriptionEn: 'Warm morning walks and light movement keep your blood flowing.'
      },
      fire: {
        name: '火行',
        nameEn: 'Fire Element',
        quote: '火曰炎上',
        quoteEn: 'Fire: Warmth & Joy',
        subQuote: '热烈敏捷，宜平衡忌过度消耗。',
        subQuoteEn: 'Bright energy: stay balanced, avoid burnout.',
        description: '可以适度加入让自己开心、有活力的活动。',
        descriptionEn: 'Bring warm sunshine and good friends into your daily life.'
      },
      earth: {
        name: '土行',
        nameEn: 'Earth Element',
        quote: '土爰稼穑',
        quoteEn: 'Earth: Nurturing & Grounded',
        subQuote: '沉稳包容，宜运化忌停滞。',
        subQuoteEn: 'Steady nourishment: support good digestion.',
        description: '规律饮食和稳定生活节奏，可以帮助建立更好的日常状态。',
        descriptionEn: 'Warm cooked grains and warm soups help you feel steady and satisfied.'
      }
    }
  }
};
