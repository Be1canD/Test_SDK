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

// type WeaponConfigs = Record<string, WeaponConfig>;

const weaponConfigs = [
    {
        name: "pistol",
        damage: 20,
        fireRate: 250,
        range: 50,
        maxAmmo: 20,
        modelUri: 'models/pistol.gltf',
        reloadTime: 2200, // 2.2 seconds
        spread: 0.06,
        spreadRecoveryTime: 100, // 0.1 seconds
        requiredKills: 0,
    },
    {
        name: "ak47",
        damage: 15,
        fireRate: 100,
        range: 70,
        maxAmmo: 30,
        modelUri: 'models/ak47.gltf',
        reloadTime: 2500, // 2.5 seconds
        spread: 0.055,
        spreadRecoveryTime: 300, // 0.3 seconds
        requiredKills: 1,
    },
    {
        name: "bananagun",
        damage: 15,
        fireRate: 100,
        range: 70,
        maxAmmo: 30,
        modelUri: 'models/ak47.gltf',
        reloadTime: 2500, // 2.5 seconds
        spread: 0.055,
        spreadRecoveryTime: 300,
        requiredKills: 3, // 0.3 seconds
    },
] as const satisfies WeaponConfig[];


export type WeaponKeys = typeof weaponConfigs[number]['name'];

export const getStartingWeapon = () => {
    return Object.values(weaponConfigs).find(weapon => weapon.requiredKills == 0)!;
}

export const getWeaponByKillCount = (killCount: number) => {
    return Object.values(weaponConfigs)
        .sort((a,b) => b.requiredKills - a.requiredKills)
        .find(weapon => killCount >= weapon.requiredKills) ?? getStartingWeapon();
}