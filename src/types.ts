/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PainPoint {
  id: string;
  iconId: number;
  title: string;
  description: string;
}

export type ElementType = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export interface FiveElementData {
  element: ElementType;
  chineseName: string;
  englishName: string;
  color: string;
  bgLight: string;
  textColor: string;
  bodyOrgan: string;
  energyType: string;
  description: string;
  foods: string[];
}

export interface YinYangFood {
  name: string;
  energy: 'yin' | 'yang';
  description: string;
  detail: string;
  level: number; // 1 to 3
}

export interface GalleryFoodItem {
  id: string;
  title: string;
  chineseTitle: string;
  category: string;
  energyType: 'neutral' | 'yin' | 'yang';
  /** Optional override for the energy badge text; keeps the color/icon of energyType. */
  energyLabel?: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}
