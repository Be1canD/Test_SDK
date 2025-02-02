import { WeaponConfig } from "./weapons";

const weaponConfigs = [
    {
        name: "pistol",
        damage: 20,
        fireRate: 500,
        range: 50,
        maxAmmo: 20,
        modelUri: 'models/pistol.gltf',
        modelScale: 0.5,
        offsetPosition: {x: 0.08, y: 0.02, z: 0.15},
        offsetRotation: {x: -90, y: 0, z: 0},
        reloadTime: 2200, // 2.2 seconds
        spread: 0.06,
        spreadRecoveryTime: 100, // 0.1 seconds
        requiredKills: 0,
        idleAnimation: "idle",
        walkAnimation: 'walk', // Анимация ходьбы
        fireAnimation: 'fire', // Анимация выстрела
        fireAudio: "audio/pistol-fire.mp3",
        reloadAnimation: "simple_interact",
        reloadAudio: "audio/pistol-reload.mp3",
        headDamage: 10, // Урон по голове
        bodyDamage: 5, // Урон по телу
        limbDamage: 3, // Урон по конечностям
        victory: false, // Не приводит к победе
    },
    {
        name: "ak47",
        damage: 15,
        fireRate: 100,
        range: 70,
        maxAmmo: 30,
        modelUri: 'models/ak47.gltf',
        modelScale: 1,
        offsetPosition: {x: 0.0, y: 0.0, z: 0.0},
        offsetRotation: {x: 0, y: 0, z: 0},
        reloadTime: 2500, // 2.5 seconds
        spread: 0.055,
        spreadRecoveryTime: 300, // 0.3 seconds
        requiredKills: 1,
        idleAnimation: "idle_ak",
        walkAnimation: 'walk_ak', // Анимация ходьбы
        fireAnimation: 'fire_ak', // Анимация выстрела
        fireAudio: "audio/pistol-fire.mp3",
        reloadAnimation: "recharge_ak",
        reloadAudio: "audio/pistol-reload.mp3",
        headDamage: 14, // Урон по голове
        bodyDamage: 7, // Урон по телу
        limbDamage: 3, // Урон по конечностям
        victory: true, //
    },
    {
        name: "bananagun",
        damage: 15,
        fireRate: 100,
        range: 70,
        maxAmmo: 30,
        modelUri: 'models/ak47.gltf',
        modelScale: 1,
        offsetPosition: {x: 0.08, y: 0.02, z: 0.15},
        offsetRotation: {x: -90, y: 0, z: 0},
        reloadTime: 2500, // 2.5 seconds
        spread: 0.055,
        spreadRecoveryTime: 300,
        requiredKills: 3, // 0.3 seconds
        idleAnimation: "idle_ak",
        walkAnimation: 'walk_ak', // Анимация ходьбы
        fireAnimation: 'fire_ak', // Анимация выстрела
        fireAudio: "audio/pistol-fire.mp3",
        reloadAnimation: "recharge_ak",
        reloadAudio: "audio/pistol-reload.mp3",
        headDamage: 14, // Урон по голове
        bodyDamage: 7, // Урон по телу
        limbDamage: 3, // Урон по конечностям
        victory: true, //
    },
] satisfies WeaponConfig[];

export default weaponConfigs;