export interface WeaponConfig {
    name: string;
    damage: number;
    fireRate: number;
    range: number;
    maxAmmo: number;
    modelUri: string;
    reloadTime: number;
    spread: number;
    spreadRecoveryTime: number;
    requiredKills: number;
}

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