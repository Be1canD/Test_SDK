export interface WeaponConfig {
    name: string;
    damage: number;
    fireRate: number;
    range: number;
    maxAmmo: number;
    modelUri: string;
    modelScale: number;
    offsetPosition: Vector3Like;
    offsetRotation: Vector3Like;
    reloadTime: number;
    spread: number;
    spreadRecoveryTime: number;
    requiredKills: number;
    idleAnimation: string;
    walkAnimation: string;
    fireAnimation: string;
    reloadAnimation: string;
    headDamage: number;
    bodyDamage: number;
    limbDamage: number;
    victory: boolean;
}

import { Vector3Like } from "hytopia";
import weaponConfigs from "./weapons-config";

// no longer needed
// type WeaponKeys = typeof weaponConfigs[number]['name'];

export const getStartingWeapon = () => {
    return Object.values(weaponConfigs).find(weapon => weapon.requiredKills == 0)!;
}

export const getWeaponByKillCount = (killCount: number) => {
    return Object.values(weaponConfigs)
        .sort((a,b) => b.requiredKills - a.requiredKills)
        .find(weapon => killCount >= weapon.requiredKills) ?? getStartingWeapon();
}


/*

spreadRecoveryTime: 100, // 0.1 seconds
            walkAnimation: 'walk', // Анимация ходьбы
            fireAnimation: 'fire', // Анимация выстрела
            headDamage: 10, // Урон по голове
            bodyDamage: 5, // Урон по телу
            limbDamage: 3, // Урон по конечностям
            killsRequired: 1, // Количество убийств для смены на AK-47
            victory: false, // Не приводит к победе


walkAnimation: 'walk_ak', // Анимация ходьбы для AK-47
            fireAnimation: 'fire_ak', // Анимация выстрела для AK-47
            headDamage: 14, // Урон по голове
            bodyDamage: 7, // Урон по телу
            limbDamage: 3, // Урон по конечностям
            killsRequired: 0, // AK-47 доступен сразу
            victory: true, //

*/